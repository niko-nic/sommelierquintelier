import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createMollieClient } from '@mollie/api-client';
import { db } from './db';
import { 
  customPackageRequests, 
  contactSubmissions, 
  newsletterSubscriptions,
  subscriptionOrders,
  cancellationTokens,
  insertCustomPackageRequestSchema,
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema,
  insertSubscriptionOrderSchema,
  insertCancellationTokenSchema
} from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { sendWelcomeEmail, sendOrderConfirmationEmail, generateWelcomeEmailHTML, sendCancellationEmail, sendCancellationConfirmationEmail, sendCustomPackageConfirmationEmail, sendCustomPackageAdminNotification } from './emails/sendEmail';
import { orderConfirmationEmailContent, type OrderConfirmationEmailContent } from './emails/order-confirmation-content';
import { welcomeEmailContent, type Language, type WelcomeEmailContent } from './emails/welcome-content';
import { generateCancellationToken, splitCancellationToken, hashToken, compareTokenHash } from './utils/cancellationToken';
import { contactRateLimiter, newsletterRateLimiter, customPackageRateLimiter, paymentRateLimiter } from './middleware/rateLimiter';
import { handleApiError } from './utils/errorHandler';
import { sanitizeString, sanitizeObject } from './utils/sanitize';

// Helper function to generate order email HTML for preview
function generatePreviewOrderEmailHTML(content: OrderConfirmationEmailContent, order: any): string {
  const greeting = content.greeting.replace('{customerName}', order.customerName);
  
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line: string, idx: number) => {
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 12px; font-style: normal;">${line}</span>`;
    }
    return line;
  }).join('<br>');

  const extrasText = order.extras.length > 0 
    ? order.extras.map((e: string) => e === 'champagne' ? 'Champagne' : 'Dessertwijn').join(', ')
    : '-';

  const nextStepsHTML = content.nextSteps.map((step: string, idx: number) => `
    <div style="display: flex; margin-bottom: 15px; align-items: flex-start;">
      <div style="background-color: #c7b79e; color: white; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; flex-shrink: 0; margin-right: 12px;">${idx + 1}</div>
      <p style="margin: 4px 0 0 0; font-size: 14px; color: #555555; line-height: 1.6;">${step}</p>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="${order.language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.subject}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        
        .header {
            background: linear-gradient(135deg, #c7b79e 0%, #a89885 100%);
            padding: 40px 20px;
            text-align: center;
        }
        
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 300;
            margin: 0;
            letter-spacing: 0.5px;
        }
        
        .order-number {
            color: #ffffff;
            font-size: 14px;
            margin-top: 10px;
            opacity: 0.95;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 18px;
            color: #2c2c2c;
            margin-bottom: 20px;
            font-weight: 500;
        }
        
        .intro {
            font-size: 16px;
            color: #555555;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        
        .section-title {
            font-size: 20px;
            color: #c7b79e;
            font-weight: 500;
            margin: 30px 0 15px 0;
            border-bottom: 2px solid #c7b79e;
            padding-bottom: 10px;
        }
        
        .info-box {
            background-color: #faf9f7;
            border-left: 4px solid #c7b79e;
            padding: 20px;
            margin: 20px 0;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            font-weight: 500;
            color: #666666;
            font-size: 14px;
        }
        
        .info-value {
            color: #2c2c2c;
            font-size: 14px;
            text-align: right;
        }
        
        .highlight-box {
            background-color: #fff8f0;
            border: 2px solid #c7b79e;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        .total-amount {
            font-size: 24px;
            color: #c7b79e;
            font-weight: 600;
            text-align: center;
        }
        
        .signature {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-style: italic;
            color: #666666;
            line-height: 1.8;
            font-size: 15px;
        }
        
        .footer {
            background-color: #2c2c2c;
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
            font-size: 12px;
        }
        
        .footer a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            color: #c7b79e;
            text-decoration: none;
            margin: 0 8px;
        }
        
        .contact-button {
            display: inline-block;
            background-color: #c7b79e;
            color: #ffffff;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            margin: 20px 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✓ ${content.orderDetailsTitle}</h1>
            <p class="order-number">${content.orderNumberLabel}: ${order.orderId}</p>
        </div>
        
        <div class="content">
            <p class="greeting">${greeting}</p>
            <p class="intro">${content.introText}</p>
            
            <h2 class="section-title">${content.orderDetailsTitle}</h2>
            <div class="info-box">
                <div class="info-row">
                    <span class="info-label">${content.subscriptionLabel}</span>
                    <span class="info-value">${order.tierName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${content.bottlesLabel}</span>
                    <span class="info-value">${order.bottles}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${content.extrasLabel}</span>
                    <span class="info-value">${extrasText}</span>
                </div>
            </div>
            
            <div class="highlight-box">
                <div style="text-align: center; margin-bottom: 10px; color: #666666; font-size: 14px; font-weight: 500;">
                    ${content.amountLabel}
                </div>
                <div class="total-amount">€${order.amount}</div>
            </div>
            
            <h2 class="section-title">${content.deliveryAddressTitle}</h2>
            <div class="info-box">
                <div class="info-row">
                    <span class="info-label">${content.nameLabel}</span>
                    <span class="info-value">${order.customerName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${content.addressLabel}</span>
                    <span class="info-value">${order.deliveryAddress}<br>${order.deliveryPostalCode} ${order.deliveryCity}<br>${order.deliveryCountry}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${content.emailLabel}</span>
                    <span class="info-value">${order.customerEmail}</span>
                </div>
                ${order.customerPhone ? `
                <div class="info-row">
                    <span class="info-label">${content.phoneLabel}</span>
                    <span class="info-value">${order.customerPhone}</span>
                </div>
                ` : ''}
            </div>
            
            <h2 class="section-title">${content.nextStepsTitle}</h2>
            <div style="margin: 20px 0;">
                ${nextStepsHTML}
            </div>
            
            <p style="margin-top: 30px; font-size: 14px; color: #666666;">
                ${content.closingText}
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
                <p style="font-size: 14px; color: #666666; margin-bottom: 15px;">
                    ${content.needHelpText}
                </p>
                <a href="${content.contactLink}" class="contact-button">${content.contactLinkText}</a>
            </div>
            
            <p class="signature">
                ${signatureHTML}
            </p>
        </div>
        
        <div class="footer">
            <p style="font-weight: 500;">Sommelier.quintelier</p>
            <p style="margin: 10px 0;">${content.footerLocation}</p>
            
            <div class="social-links">
                <a href="https://instagram.com/sommelier.quintelier">Instagram</a> |
                <a href="https://linkedin.com/in/yentlquintelier">LinkedIn</a> |
                <a href="https://facebook.com/sommelier.quintelier">Facebook</a>
            </div>
            
            <p style="margin-top: 15px; font-size: 10px; color: #777777;">
                © 2024 Sommelier.quintelier
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
}

if (!process.env.MOLLIE_API_KEY) {
  console.warn('⚠️  MOLLIE_API_KEY not configured - payment functionality will not work');
  console.warn('⚠️  Please configure MOLLIE_API_KEY environment variable to enable payments');
}
const mollieClient = process.env.MOLLIE_API_KEY ? 
  createMollieClient({ apiKey: process.env.MOLLIE_API_KEY }) : 
  null;

const SUBSCRIPTION_PRICING = {
  selection: { 3: 55, 6: 100 },
  cuvee: { 3: 110, 6: 200 },
  prestige: { 3: 250, 6: 480 },
  champagne: { 3: 150, 6: 275 },
} as const;

const EXTRAS_PRICING = {
  selection: { champagne: 20, dessert: 20 },
  cuvee: { champagne: 35, dessert: 35 },
  prestige: { champagne: 85, dessert: 85 },
  champagne: { champagne: 0, dessert: 0 },
} as const;

type TierKey = keyof typeof SUBSCRIPTION_PRICING;
type BottleCount = 3 | 6;
type ExtraType = 'champagne' | 'dessert';

export async function registerRoutes(app: Express): Promise<Server> {
  // Email preview endpoint (development only)
  app.get("/email-preview/welcome", (req, res) => {
    res.sendFile('server/emails/preview-welcome.html', { root: '.' });
  });

  // HubSpot CMS status endpoint
  app.get("/_hcms/status", (req, res) => {
    res.setHeader('X-HS-Public-Host', 'sommelierquintelier.com');
    res.status(200).json({ status: 'ok' });
  });

  // Payment status check endpoint for redirect handling
  app.get("/api/payment-status/:paymentId", async (req, res) => {
    try {
      if (!mollieClient) {
        return res.status(503).json({ status: 'error', message: 'Payment service not configured' });
      }

      const { paymentId } = req.params;
      const payment = await mollieClient.payments.get(paymentId);
      
      res.json({ 
        status: payment.status,
        paymentId: payment.id
      });
    } catch (error: any) {
      console.error('Error checking payment status:', error);
      res.json({ status: 'unknown', error: error.message });
    }
  });

  app.post("/api/create-mollie-payment", paymentRateLimiter, async (req, res) => {
    try {
      if (!mollieClient) {
        return res.status(503).json({ 
          message: "Payment service not configured. Please contact support." 
        });
      }

      const { 
        tier, 
        tierName, 
        bottles, 
        extras, 
        ageVerified,
        customerName,
        customerEmail,
        customerPhone,
        deliveryAddress,
        deliveryCity,
        deliveryPostalCode,
        deliveryCountry,
        language
      } = req.body;
      
      if (!tier || !bottles || !tierName) {
        return res.status(400).json({ 
          message: "Missing required fields: tier, tierName, bottles" 
        });
      }

      if (!ageVerified) {
        return res.status(400).json({ 
          message: "Age verification required. Please confirm you are 18 years or older." 
        });
      }

      if (!customerName || !customerEmail || !deliveryAddress || !deliveryCity || !deliveryPostalCode || !deliveryCountry) {
        return res.status(400).json({ 
          message: "Missing required customer information" 
        });
      }

      if (!SUBSCRIPTION_PRICING[tier as TierKey]) {
        return res.status(400).json({ 
          message: "Invalid subscription tier" 
        });
      }

      if (bottles !== 3 && bottles !== 6) {
        return res.status(400).json({ 
          message: "Invalid bottle count. Must be 3 or 6" 
        });
      }

      let amount = SUBSCRIPTION_PRICING[tier as TierKey][bottles as BottleCount];

      // Add extras pricing if provided
      if (extras && Array.isArray(extras)) {
        const tierExtras = EXTRAS_PRICING[tier as TierKey];
        for (const extra of extras) {
          if (extra === 'champagne' || extra === 'dessert') {
            amount += tierExtras[extra as ExtraType];
          }
        }
      }

      // Build description with extras
      let description = `${tierName} - ${bottles} flessen`;
      if (extras && extras.length > 0) {
        const extrasText = extras.map((e: string) => 
          e === 'champagne' ? 'Champagne' : 'Dessertwijn'
        ).join(', ');
        description += ` + ${extrasText}`;
      }

      const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
      const isLocalhost = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');
      
      // Step 1: Create or find Mollie Customer
      const customersPage = await mollieClient.customers.page({ 
        limit: 1 
      });
      
      // Find customer by email in our database first
      const existingOrder = await db.query.subscriptionOrders.findFirst({
        where: eq(subscriptionOrders.customerEmail, customerEmail),
        orderBy: (subscriptionOrders, { desc }) => [desc(subscriptionOrders.createdAt)]
      });
      
      let customer;
      if (existingOrder && existingOrder.mollieCustomerId) {
        try {
          customer = await mollieClient.customers.get(existingOrder.mollieCustomerId);
          console.log(`Existing customer found: ${customer.id}`);
        } catch {
          customer = null;
        }
      }
      
      if (!customer) {
        customer = await mollieClient.customers.create({
          name: customerName,
          email: customerEmail,
          metadata: {
            phone: customerPhone || '',
            deliveryAddress,
            deliveryCity,
            deliveryPostalCode,
            deliveryCountry,
            language: language || 'nl'
          }
        });
        console.log(`New customer created: ${customer.id}`);
      }

      // Step 2: Create first payment with mandate (for recurring)
      const paymentData: any = {
        amount: {
          currency: 'EUR',
          value: amount.toFixed(2),
        },
        customerId: customer.id,
        sequenceType: 'first',
        description: `${description} (maandelijks abonnement)`,
        redirectUrl: `${baseUrl}/payment-status`,
        metadata: {
          tier,
          tierName,
          bottles: bottles.toString(),
          extras: extras ? JSON.stringify(extras) : '[]',
          isSubscription: 'true',
        },
      };

      // Only add webhookUrl in production (not localhost)
      if (!isLocalhost) {
        paymentData.webhookUrl = `${baseUrl}/api/mollie-webhook`;
      }

      const payment = await mollieClient.payments.create(paymentData);
      
      // Create subscription order record in database with subscription info
      await db.insert(subscriptionOrders).values({
        molliePaymentId: payment.id,
        mollieCustomerId: customer.id,
        isRecurring: true,
        subscriptionStatus: 'pending_first_payment',
        tier,
        tierName,
        bottles,
        amount: amount.toString(),
        extras: extras || [],
        ageVerified: ageVerified === true,
        paymentStatus: 'pending',
        customerName,
        customerEmail,
        customerPhone: customerPhone || null,
        deliveryAddress,
        deliveryCity,
        deliveryPostalCode,
        deliveryCountry,
        language: language || 'nl',
      });
      
      console.log(`Recurring subscription order created for payment ${payment.id}`);
      console.log(`- Customer: ${customerName} (${customerEmail})`);
      console.log(`- Mollie Customer ID: ${customer.id}`);
      console.log(`- Delivery: ${deliveryAddress}, ${deliveryPostalCode} ${deliveryCity}, ${deliveryCountry}`);
      console.log(`- Tier: ${tierName}`);
      console.log(`- Bottles: ${bottles}`);
      console.log(`- Amount: €${amount.toFixed(2)}`);
      console.log(`- Extras: ${extras ? extras.join(', ') : 'none'}`);
      console.log(`- Language: ${language || 'nl'}`);
      console.log(`- Type: RECURRING SUBSCRIPTION (first payment)`);
      
      res.json({ 
        checkoutUrl: payment.getCheckoutUrl(),
        paymentId: payment.id 
      });
    } catch (error: any) {
      console.error("Error creating Mollie subscription payment:", error);
      res
        .status(500)
        .json({ message: "Error creating subscription: " + error.message });
    }
  });

  // Status transition validation helper
  // Returns true if the transition from currentStatus to newStatus is allowed
  function isValidStatusTransition(currentStatus: string, newStatus: string): boolean {
    // Final states - no transitions allowed
    if (currentStatus === 'paid' || currentStatus === 'canceled' || currentStatus === 'expired') {
      return false;
    }
    
    // From pending - can go to any status
    if (currentStatus === 'pending') {
      return ['paid', 'failed', 'expired', 'canceled'].includes(newStatus);
    }
    
    // From failed - can retry (go back to pending) or stay failed
    if (currentStatus === 'failed') {
      return newStatus === 'pending' || newStatus === 'paid';
    }
    
    return false;
  }

  // Mollie webhook endpoint for payment status updates
  // Security: Mollie sends only a payment ID, we verify by fetching the payment
  // from Mollie's API using our API key - this is Mollie's recommended approach
  app.post("/api/mollie-webhook", async (req, res) => {
    try {
      if (!mollieClient) {
        return res.status(503).send('Payment service not configured');
      }

      const paymentId = req.body.id;
      
      if (!paymentId) {
        return res.status(400).send('Missing payment ID');
      }

      // Fetch payment status from Mollie
      const payment = await mollieClient.payments.get(paymentId);
      
      console.log(`Mollie webhook: Payment ${paymentId} status: ${payment.status}`);
      console.log(`Payment type: ${payment.sequenceType || 'one-time'}`);
      console.log(`Subscription ID: ${payment.subscriptionId || 'none'}`);
      
      // Handle different payment statuses
      if (payment.status === 'paid') {
        // For recurring payments, find order by subscriptionId
        // For first payments, find by paymentId
        let order;
        
        if (payment.subscriptionId) {
          // This is a recurring payment - find by subscription ID
          order = await db.query.subscriptionOrders.findFirst({
            where: eq(subscriptionOrders.mollieSubscriptionId, payment.subscriptionId)
          });
          console.log(`Looking up order by subscription ID: ${payment.subscriptionId}`);
        } else {
          // First payment or one-time payment - find by payment ID
          order = await db.query.subscriptionOrders.findFirst({
            where: eq(subscriptionOrders.molliePaymentId, paymentId)
          });
          console.log(`Looking up order by payment ID: ${paymentId}`);
        }
        
        if (!order) {
          console.error(`❌ Order not found for payment ${paymentId} (subscription: ${payment.subscriptionId || 'none'})`);
          return res.status(200).send('OK');
        }

        // Idempotency check: if already in the target status, skip processing
        if (order.paymentStatus === 'paid') {
          console.log(`⚡ Duplicate webhook detected: Payment ${paymentId} already processed as 'paid'. Skipping.`);
          return res.status(200).send('OK');
        }

        // Validate status transition
        if (!isValidStatusTransition(order.paymentStatus, 'paid')) {
          console.warn(`⚠️  Invalid status transition blocked: ${order.paymentStatus} → paid for payment ${paymentId}`);
          return res.status(200).send('OK');
        }

        // Track if we're transitioning to paid (for email sending)
        const isTransitioningToPaid = order.paymentStatus !== 'paid';

        // Check if this is a recurring subscription first payment
        if (order.isRecurring && order.mollieCustomerId && !order.mollieSubscriptionId) {
          console.log(`📋 First payment for recurring subscription - creating Mollie Subscription`);
          
          // Get mandate from payment object (more reliable than pagination)
          if (!payment.mandateId) {
            console.warn(`⚠️  No mandate ID on payment ${paymentId}`);
            await db.update(subscriptionOrders)
              .set({ 
                paymentStatus: 'paid',
                paidAt: new Date(),
                subscriptionStatus: 'mandate_failed'
              })
              .where(eq(subscriptionOrders.molliePaymentId, paymentId));
          } else {
            try {
              const mandate = await mollieClient.customerMandates.get(
                payment.mandateId,
                { customerId: order.mollieCustomerId }
              );
              
              if (mandate.status !== 'valid') {
                console.warn(`⚠️  Mandate ${mandate.id} is not valid (status: ${mandate.status})`);
                await db.update(subscriptionOrders)
                  .set({ 
                    paymentStatus: 'paid',
                    paidAt: new Date(),
                    subscriptionStatus: 'mandate_failed'
                  })
                  .where(eq(subscriptionOrders.molliePaymentId, paymentId));
              } else {
                console.log(`✅ Valid mandate found: ${mandate.id}`);
                
                // Build subscription description
                let description = `${order.tierName} - ${order.bottles} flessen`;
                if (order.extras && order.extras.length > 0) {
                  const extrasText = order.extras.map((e: string) => 
                    e === 'champagne' ? 'Champagne' : 'Dessertwijn'
                  ).join(', ');
                  description += ` + ${extrasText}`;
                }
                
                // Create Mollie Subscription (ensure amount has 2 decimal places)
                const amountValue = parseFloat(order.amount).toFixed(2);
                const subscription = await mollieClient.customerSubscriptions.create({
                  customerId: order.mollieCustomerId,
                  amount: {
                    currency: 'EUR',
                    value: amountValue
                  },
                  interval: '1 month',
                  description,
                  webhookUrl: `${process.env.BASE_URL || 'http://localhost:5000'}/api/mollie-webhook`,
                  metadata: {
                    tier: order.tier,
                    tierName: order.tierName,
                    bottles: order.bottles.toString(),
                    extras: JSON.stringify(order.extras || [])
                  }
                });
                
                console.log(`✅ Mollie Subscription created: ${subscription.id}`);
                console.log(`   Next billing: ${subscription.nextPaymentDate || 'pending'}`);
                
                // Update order with subscription details (null-safe nextPaymentDate)
                const updateData: any = {
                  paymentStatus: 'paid',
                  paidAt: new Date(),
                  mollieSubscriptionId: subscription.id,
                  mandateId: mandate.id,
                  subscriptionStatus: 'active'
                };
                
                if (subscription.nextPaymentDate) {
                  updateData.nextBillingDate = new Date(subscription.nextPaymentDate);
                }
                
                await db.update(subscriptionOrders)
                  .set(updateData)
                  .where(eq(subscriptionOrders.molliePaymentId, paymentId));
                
                console.log(`✅ Subscription activated for ${order.customerEmail}`);
              }
            } catch (mandateError: any) {
              console.error(`❌ Error fetching mandate: ${mandateError.message}`);
              await db.update(subscriptionOrders)
                .set({ 
                  paymentStatus: 'paid',
                  paidAt: new Date(),
                  subscriptionStatus: 'mandate_failed'
                })
                .where(eq(subscriptionOrders.molliePaymentId, paymentId));
            }
          }
        } else if (order.isRecurring && order.mollieSubscriptionId && payment.subscriptionId) {
          // This is a recurring payment for an existing subscription
          console.log(`💳 Recurring payment for subscription ${order.mollieSubscriptionId}`);
          
          // Fetch subscription to get updated status and nextPaymentDate
          try {
            const subscription = await mollieClient.customerSubscriptions.get(
              order.mollieSubscriptionId,
              { customerId: order.mollieCustomerId! }
            );
            
            const updateData: any = {
              paymentStatus: 'paid',
              paidAt: new Date()
            };
            
            // Update subscription status if changed
            if (subscription.status) {
              updateData.subscriptionStatus = subscription.status;
            }
            
            // Update next billing date if available
            if (subscription.nextPaymentDate) {
              updateData.nextBillingDate = new Date(subscription.nextPaymentDate);
            }
            
            await db.update(subscriptionOrders)
              .set(updateData)
              .where(eq(subscriptionOrders.mollieSubscriptionId, order.mollieSubscriptionId));
            
            console.log(`✅ Subscription ${order.mollieSubscriptionId} renewed`);
            console.log(`   Status: ${subscription.status}`);
            console.log(`   Next billing: ${subscription.nextPaymentDate || 'pending'}`);
          } catch (subError: any) {
            console.error(`❌ Could not fetch subscription details: ${subError.message}`);
            // Still mark payment as paid even if subscription fetch fails
            await db.update(subscriptionOrders)
              .set({ 
                paymentStatus: 'paid',
                paidAt: new Date()
              })
              .where(eq(subscriptionOrders.mollieSubscriptionId, order.mollieSubscriptionId));
          }
        } else {
          // Regular one-time payment (non-recurring)
          await db.update(subscriptionOrders)
            .set({ 
              paymentStatus: 'paid',
              paidAt: new Date()
            })
            .where(eq(subscriptionOrders.molliePaymentId, paymentId));
        }
        
        console.log(`Payment ${paymentId} completed successfully`);
        
        // Send order confirmation email only when transitioning TO paid (not if already paid)
        if (isTransitioningToPaid) {
          const emailSent = await sendOrderConfirmationEmail({
            order: {
              orderId: paymentId,
              customerName: order.customerName,
              customerEmail: order.customerEmail,
              customerPhone: order.customerPhone || undefined,
              deliveryAddress: order.deliveryAddress,
              deliveryCity: order.deliveryCity,
              deliveryPostalCode: order.deliveryPostalCode,
              deliveryCountry: order.deliveryCountry,
              tierName: order.tierName,
              bottles: order.bottles,
              extras: order.extras || [],
              amount: order.amount,
              language: (order.language as 'nl' | 'en' | 'fr') || 'nl'
            }
          });
          
          if (emailSent) {
            console.log(`✅ Order confirmation email sent to ${order.customerEmail}`);
          } else {
            console.warn(`⚠️  Order confirmation email could not be sent to ${order.customerEmail}`);
          }
        } else {
          console.log(`📧 Skipping email - order already in 'paid' status`);
        }
      } else if (payment.status === 'failed' || payment.status === 'expired' || payment.status === 'canceled') {
        // Find order for this payment
        const order = await db.query.subscriptionOrders.findFirst({
          where: eq(subscriptionOrders.molliePaymentId, paymentId)
        });
        
        if (!order) {
          console.error(`❌ Order not found for payment ${paymentId}`);
          return res.status(200).send('OK');
        }
        
        // Idempotency check: if already in the target status, skip processing
        if (order.paymentStatus === payment.status) {
          console.log(`⚡ Duplicate webhook detected: Payment ${paymentId} already processed as '${payment.status}'. Skipping.`);
          return res.status(200).send('OK');
        }
        
        // Validate status transition
        if (!isValidStatusTransition(order.paymentStatus, payment.status)) {
          console.warn(`⚠️  Invalid status transition blocked: ${order.paymentStatus} → ${payment.status} for payment ${paymentId}`);
          return res.status(200).send('OK');
        }
        
        // Payment failed, expired, or canceled - update order status
        await db.update(subscriptionOrders)
          .set({ paymentStatus: payment.status })
          .where(eq(subscriptionOrders.molliePaymentId, paymentId));
        
        console.log(`Payment ${paymentId} not completed: ${payment.status}`);
        console.log(`Subscription order updated: ${order.paymentStatus} → '${payment.status}'`);
      }
      
      // Always respond with 200 OK to acknowledge webhook
      res.status(200).send('OK');
    } catch (error: any) {
      console.error("Error processing Mollie webhook:", error);
      // Still respond with 200 to prevent Mollie from retrying
      res.status(200).send('OK');
    }
  });

  // Step 1: Request subscription cancellation (generates secure token and sends email)
  app.post("/api/subscription/cancel-request", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Find active subscription for this email
      const order = await db.query.subscriptionOrders.findFirst({
        where: and(
          eq(subscriptionOrders.customerEmail, email),
          eq(subscriptionOrders.isRecurring, true)
        ),
        orderBy: (subscriptionOrders, { desc }) => [desc(subscriptionOrders.createdAt)]
      });

      if (!order || !order.mollieSubscriptionId) {
        return res.status(404).json({ message: "No active subscription found for this email" });
      }

      if (order.subscriptionStatus === 'cancelled') {
        return res.status(400).json({ message: "Subscription is already cancelled" });
      }

      // Generate secure two-part cancellation token (tokenId.secret)
      const { token, tokenId, tokenHash, expiresAt } = generateCancellationToken(
        order.mollieSubscriptionId, 
        email
      );

      // Store tokenId and hashed secret in database
      await db.insert(cancellationTokens).values({
        tokenId,
        tokenHash,
        subscriptionId: order.mollieSubscriptionId,
        email,
        expiresAt
      });

      // Send cancellation email with secure link
      const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
      const cancelLink = `${baseUrl}/cancel-subscription/confirm?token=${encodeURIComponent(token)}`;

      const emailSent = await sendCancellationEmail({
        to: email,
        cancelLink,
        language: (order.language as 'nl' | 'en' | 'fr') || 'nl'
      });

      if (!emailSent) {
        // Email delivery failed - this is a fatal error
        // Delete the token record since user won't receive the token
        await db.delete(cancellationTokens).where(eq(cancellationTokens.tokenId, tokenId));
        
        console.error(`❌ Failed to send cancellation email to ${email}`);
        console.log(`   Token deleted due to email delivery failure`);
        
        return res.status(500).json({ 
          message: "Unable to send cancellation email. Please try again or contact support.",
          error: "Email delivery failed"
        });
      }

      console.log(`✅ Cancellation email sent to ${email}`);
      console.log(`✅ Cancellation token generated`);
      console.log(`   Subscription: ${order.mollieSubscriptionId}`);
      console.log(`   Expires: ${expiresAt.toISOString()}`);

      res.json({ 
        message: "Cancellation link sent to your email"
      });
    } catch (error: any) {
      console.error("Error requesting cancellation:", error);
      res.status(500).json({ message: "Error processing cancellation request: " + error.message });
    }
  });

  // Step 2: Confirm subscription cancellation (validates token and cancels)
  app.post("/api/subscription/cancel-confirm", async (req, res) => {
    try {
      if (!mollieClient) {
        return res.status(503).json({ message: "Payment service not configured" });
      }

      const { token } = req.body;

      if (!token) {
        return res.status(400).json({ message: "Token is required" });
      }

      // Split and validate token format (tokenId.secret)
      const tokenParts = splitCancellationToken(token);
      if (!tokenParts) {
        return res.status(401).json({ message: "Invalid cancellation link format" });
      }

      const { tokenId, secret } = tokenParts;

      // Query database by tokenId (direct lookup, no scanning)
      const storedToken = await db.query.cancellationTokens.findFirst({
        where: eq(cancellationTokens.tokenId, tokenId)
      });

      if (!storedToken) {
        return res.status(404).json({ message: "Cancellation link not found" });
      }

      // CRITICAL: Reject legacy tokens without tokenHash (security requirement)
      if (!storedToken.tokenHash) {
        console.error(`❌ Legacy token detected without tokenHash: ${tokenId}`);
        return res.status(401).json({ message: "Invalid cancellation link format" });
      }

      // Verify secret using constant-time hash comparison
      if (!compareTokenHash(secret, storedToken.tokenHash)) {
        return res.status(401).json({ message: "Invalid cancellation link" });
      }

      // Check DB-based expiry (in addition to HMAC expiry check)
      if (storedToken.expiresAt < new Date()) {
        return res.status(401).json({ message: "This cancellation link has expired" });
      }

      // Check token hasn't been used
      if (storedToken.usedAt) {
        return res.status(400).json({ message: "This cancellation link has already been used" });
      }

      // Find subscription using stored token data
      const order = await db.query.subscriptionOrders.findFirst({
        where: and(
          eq(subscriptionOrders.mollieSubscriptionId, storedToken.subscriptionId),
          eq(subscriptionOrders.customerEmail, storedToken.email)
        )
      });

      if (!order) {
        return res.status(404).json({ message: "Subscription not found" });
      }

      if (order.subscriptionStatus === 'cancelled') {
        return res.status(400).json({ message: "Subscription is already cancelled" });
      }

      if (!order.mollieCustomerId) {
        return res.status(400).json({ message: "Invalid subscription - no customer ID" });
      }

      // Cancel subscription at Mollie FIRST (before updating DB)
      try {
        await mollieClient.customerSubscriptions.cancel(storedToken.subscriptionId, {
          customerId: order.mollieCustomerId
        });
        console.log(`✅ Mollie subscription ${storedToken.subscriptionId} cancelled successfully`);
      } catch (mollieError: any) {
        console.error(`❌ Mollie cancellation failed for ${storedToken.subscriptionId}:`, mollieError);
        
        // Check if it's already cancelled (404 error or already status)
        const isAlreadyCancelled = mollieError.message?.includes('404') || 
                                  mollieError.message?.includes('not found') ||
                                  mollieError.message?.includes('already') ||
                                  mollieError.status === 404;
        
        if (isAlreadyCancelled) {
          console.warn(`⚠️  Subscription already cancelled at Mollie, proceeding with DB update...`);
          // Fall through to DB update
        } else {
          // Critical error - cannot cancel at payment processor
          // Do NOT update DB, do NOT mark token as used
          // Let user retry with same token
          return res.status(500).json({ 
            message: "Unable to cancel subscription with payment processor. Please try again or contact support.",
            error: "Payment processor error"
          });
        }
      }

      // Mollie cancellation successful (or already cancelled) - update database
      await db.update(subscriptionOrders)
        .set({
          subscriptionStatus: 'cancelled',
          cancelledAt: new Date()
        })
        .where(eq(subscriptionOrders.mollieSubscriptionId, storedToken.subscriptionId));

      // Mark token as used (keep for audit trail)
      await db.update(cancellationTokens)
        .set({ usedAt: new Date() })
        .where(eq(cancellationTokens.tokenId, tokenId));

      console.log(`✅ Subscription ${storedToken.subscriptionId} cancelled completely for ${storedToken.email}`);

      // Send cancellation confirmation email
      sendCancellationConfirmationEmail({
        to: storedToken.email,
        customerName: order.customerName,
        tierName: order.tierName,
        language: order.language as Language
      }).catch(err => {
        console.error('Failed to send cancellation confirmation email:', err);
      });

      res.json({ 
        message: "Subscription cancelled successfully",
        subscriptionId: storedToken.subscriptionId,
        cancelledAt: new Date()
      });
    } catch (error: any) {
      handleApiError(error, res);
    }
  });

  // Preview Order Confirmation Email (for testing purposes)
  app.get("/api/preview-order-email", (req, res) => {
    const language = (req.query.lang as 'nl' | 'en' | 'fr') || 'nl';
    
    // Sample order data for preview
    const sampleOrder = {
      orderId: 'tr_ABC123456789',
      customerName: 'Jan De Vries',
      customerEmail: 'jan.devries@example.com',
      customerPhone: '+32 123 45 67 89',
      deliveryAddress: 'Kerkstraat 123',
      deliveryCity: 'Gent',
      deliveryPostalCode: '9000',
      deliveryCountry: 'België',
      tierName: 'Cuvée Excellence',
      bottles: 6,
      extras: ['champagne', 'dessert'],
      amount: '235.00',
      language
    };

    const content = orderConfirmationEmailContent[language];
    const html = generatePreviewOrderEmailHTML(content, sampleOrder);
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  });

  // Preview Welcome Email (for testing purposes)
  app.get("/api/preview-welcome-email", (req, res) => {
    const language = (req.query.lang as Language) || 'nl';
    const content: WelcomeEmailContent = welcomeEmailContent[language];
    const html = generateWelcomeEmailHTML(content, language);
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  });

  // Contact Form Submission endpoint
  app.post("/api/contact", contactRateLimiter, async (req, res) => {
    try {
      const { name, email, phone, message, language } = req.body;

      // Sanitize user input to prevent XSS
      const sanitizedName = sanitizeString(name || '');
      const sanitizedEmail = sanitizeString(email || '');
      const sanitizedMessage = sanitizeString(message || '');

      // Validate with Zod schema
      const validationResult = insertContactSubmissionSchema.safeParse({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: phone || null,
        message: sanitizedMessage,
        language: language || 'nl',
      });

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: validationResult.error.errors
        });
      }

      // Save to database
      const [savedSubmission] = await db.insert(contactSubmissions)
        .values(validationResult.data)
        .returning();

      console.log('📧 Contact Form Submission Saved to Database:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`ID: ${savedSubmission.id}`);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log(`Language: ${language || 'nl'}`);
      console.log(`Message: ${message}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      // TODO: In production, send email notification

      res.status(200).json({
        success: true,
        message: "Contact form submission received successfully",
        submissionId: savedSubmission.id
      });
    } catch (error: any) {
      handleApiError(error, res);
    }
  });

  // Newsletter Subscription endpoint
  app.post("/api/newsletter", newsletterRateLimiter, async (req, res) => {
    try {
      const { email, language } = req.body;

      // Sanitize user input to prevent XSS
      const sanitizedEmail = sanitizeString(email || '');

      // Validate with Zod schema
      const validationResult = insertNewsletterSubscriptionSchema.safeParse({
        email: sanitizedEmail,
        language: language || 'nl',
      });

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: validationResult.error.errors
        });
      }

      // Save to database (will fail if email already exists due to unique constraint)
      const [savedSubscription] = await db.insert(newsletterSubscriptions)
        .values(validationResult.data)
        .returning();

      console.log('📰 Newsletter Subscription Saved to Database:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`ID: ${savedSubscription.id}`);
      console.log(`Email: ${email}`);
      console.log(`Language: ${language || 'nl'}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      // Send welcome email via SendGrid
      const emailSent = await sendWelcomeEmail({
        to: email,
        language: (language || 'nl') as 'nl' | 'en' | 'fr'
      });

      if (!emailSent) {
        console.warn(`⚠️  Welcome email could not be sent to ${email}`);
      }

      res.status(200).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        subscriptionId: savedSubscription.id,
        emailSent
      });
    } catch (error: any) {
      console.error("Error processing newsletter subscription:", error);
      
      // Check if error is due to duplicate email
      if (error.message?.includes('unique') || error.code === '23505') {
        return res.status(409).json({
          message: "This email is already subscribed to our newsletter"
        });
      }

      handleApiError(error, res);
    }
  });

  // Custom Package Request endpoint
  app.post("/api/custom-package-request", customPackageRateLimiter, async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        wantsChampagne,
        champagneQuantity,
        whiteWineQuantity,
        redWineQuantity,
        wantsDessertWine,
        dessertWineQuantity,
        budget,
        additionalWishes,
      } = req.body;

      // Sanitize user input to prevent XSS
      const sanitizedName = sanitizeString(name || '');
      const sanitizedEmail = sanitizeString(email || '');
      const sanitizedAdditionalWishes = additionalWishes ? sanitizeString(additionalWishes) : null;

      // Validate with Zod schema
      const validationResult = insertCustomPackageRequestSchema.safeParse({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: phone || null,
        wantsChampagne,
        champagneQuantity: wantsChampagne === 'yes' ? champagneQuantity : null,
        whiteWineQuantity: whiteWineQuantity || 0,
        redWineQuantity: redWineQuantity || 0,
        wantsDessertWine,
        dessertWineQuantity: wantsDessertWine === 'yes' ? dessertWineQuantity : null,
        budget,
        additionalWishes: sanitizedAdditionalWishes,
      });

      if (!validationResult.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: validationResult.error.errors
        });
      }

      // Save to database
      const [savedRequest] = await db.insert(customPackageRequests)
        .values(validationResult.data)
        .returning();

      // Log the custom package request
      console.log('📦 Custom Package Request Saved to Database:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`ID: ${savedRequest.id}`);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || 'Not provided'}`);
      console.log(`Budget: ${budget}`);
      console.log('');
      console.log('Wine Selection:');
      console.log(`  - Champagne: ${wantsChampagne === 'yes' ? `Yes (${champagneQuantity} bottles)` : 'No'}`);
      console.log(`  - White Wine: ${whiteWineQuantity || 0} bottles`);
      console.log(`  - Red Wine: ${redWineQuantity || 0} bottles`);
      console.log(`  - Dessert Wine: ${wantsDessertWine === 'yes' ? `Yes (${dessertWineQuantity} bottles)` : 'No'}`);
      console.log('');
      if (additionalWishes) {
        console.log('Additional Wishes:');
        console.log(`  ${additionalWishes}`);
      }
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

      // Determine language from request (default to nl)
      const language = (req.body.language as 'nl' | 'en' | 'fr') || 'nl';

      // Send confirmation email to customer
      const customerEmailSent = await sendCustomPackageConfirmationEmail({
        request: {
          name,
          email,
          phone: phone || null,
          wantsChampagne,
          champagneQuantity: wantsChampagne === 'yes' ? champagneQuantity : null,
          whiteWineQuantity: whiteWineQuantity || 0,
          redWineQuantity: redWineQuantity || 0,
          wantsDessertWine,
          dessertWineQuantity: wantsDessertWine === 'yes' ? dessertWineQuantity : null,
          budget,
          additionalWishes: additionalWishes || null,
          language
        }
      });

      // Send admin notification email
      const adminEmailSent = await sendCustomPackageAdminNotification({
        request: {
          name,
          email,
          phone: phone || null,
          wantsChampagne,
          champagneQuantity: wantsChampagne === 'yes' ? champagneQuantity : null,
          whiteWineQuantity: whiteWineQuantity || 0,
          redWineQuantity: redWineQuantity || 0,
          wantsDessertWine,
          dessertWineQuantity: wantsDessertWine === 'yes' ? dessertWineQuantity : null,
          budget,
          additionalWishes: additionalWishes || null,
          language
        },
        requestId: savedRequest.id
      });

      console.log(`📧 Customer confirmation email: ${customerEmailSent ? '✅ Sent' : '❌ Failed'}`);
      console.log(`📧 Admin notification email: ${adminEmailSent ? '✅ Sent' : '❌ Failed'}`);
      
      res.status(200).json({
        success: true,
        message: "Custom package request received successfully",
        requestId: savedRequest.id
      });
    } catch (error: any) {
      handleApiError(error, res);
    }
  });

  // ============================================================
  // SITEMAP.XML - Dynamically generated, 100% valid for Google Search Console
  // ============================================================
  app.get("/sitemap.xml", (req, res) => {
    const BASE_URL = "https://sommelierquintelier.com";
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // All public pages - no trailing slashes (except homepage)
    const staticPages = [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/about", priority: "0.9", changefreq: "monthly" },
      { loc: "/services", priority: "0.9", changefreq: "monthly" },
      { loc: "/subscriptions", priority: "0.9", changefreq: "weekly" },
      { loc: "/blog", priority: "0.8", changefreq: "weekly" },
      { loc: "/gallery", priority: "0.7", changefreq: "monthly" },
      { loc: "/contact", priority: "0.8", changefreq: "monthly" },
      // Legal pages
      { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
      { loc: "/terms", priority: "0.3", changefreq: "yearly" },
      { loc: "/cookies", priority: "0.3", changefreq: "yearly" },
      // Service detail pages
      { loc: "/services/wine-consultancy", priority: "0.7", changefreq: "monthly" },
      { loc: "/services/wine-tastings", priority: "0.7", changefreq: "monthly" },
      { loc: "/services/private-sommelier", priority: "0.7", changefreq: "monthly" },
      { loc: "/services/custom-wine-list", priority: "0.7", changefreq: "monthly" },
      { loc: "/services/wine-cellar-management", priority: "0.7", changefreq: "monthly" },
    ];
    
    // Blog posts (static list - add new posts here when published)
    const blogPosts = [
      "riesling",
      "merlot",
      "cabernet-sauvignon",
      "de-wijnkelder",
      "sauvignon-blanc",
      "pinot-noir",
      "chardonnay",
      "de-cyclus-van-een-wijnrank",
      "5-fouten-in-wijn",
      "service-van-mousserende-wijn"
    ];
    
    // Helper function to escape XML special characters
    const escapeXml = (str: string): string => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };
    
    // Build XML string
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Add static pages
    for (const page of staticPages) {
      const fullUrl = page.loc === "/" ? BASE_URL + "/" : BASE_URL + page.loc;
      xml += '  <url>\n';
      xml += `    <loc>${escapeXml(fullUrl)}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    }
    
    // Add blog posts
    for (const slug of blogPosts) {
      const fullUrl = `${BASE_URL}/blog/${slug}`;
      xml += '  <url>\n';
      xml += `    <loc>${escapeXml(fullUrl)}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '    <changefreq>yearly</changefreq>\n';
      xml += '    <priority>0.6</priority>\n';
      xml += '  </url>\n';
    }
    
    xml += '</urlset>';
    
    // Set proper headers for XML
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(xml);
  });

  const httpServer = createServer(app);

  return httpServer;
}
