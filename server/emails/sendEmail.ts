import sgMail from '@sendgrid/mail';
import { welcomeEmailContent, type Language, type WelcomeEmailContent } from './welcome-content';
import { orderConfirmationEmailContent, type OrderConfirmationEmailContent } from './order-confirmation-content';
import { cancellationEmailContent, type CancellationEmailContent } from './cancellation-content';
import { cancellationConfirmationEmailContent, type CancellationConfirmationEmailContent } from './cancellation-confirmation-content';
import { customPackageEmailContent, customPackageAdminEmailContent, type CustomPackageEmailContent, type CustomPackageAdminEmailContent } from './custom-package-content';
import { reviewEmailContent, type ReviewEmailContent } from './review-content';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('⚠️  SENDGRID_API_KEY not configured - email functionality will not work');
}

interface SendWelcomeEmailParams {
  to: string;
  language: Language;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryPostalCode: string;
  deliveryCountry: string;
  tierName: string;
  bottles: number;
  extras: string[];
  amount: string;
  language: Language;
}

interface SendOrderConfirmationEmailParams {
  order: OrderDetails;
}

/**
 * Generates HTML email from template content
 */
export function generateWelcomeEmailHTML(content: WelcomeEmailContent, language: Language): string {
  const blogPostsHTML = content.blogPosts.map((post, idx) => `
    <tr>
      <td style="padding: 0 0 20px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px;">
          <tr>
            <td style="padding: 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="36" valign="top" style="padding-right: 14px;">
                    <div style="background: linear-gradient(135deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff; border-radius: 50%; width: 32px; height: 32px; text-align: center; line-height: 32px; font-weight: 600; font-size: 14px; font-family: Georgia, 'Times New Roman', serif;">${idx + 1}</div>
                  </td>
                  <td valign="top">
                    <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #2c2c2c; font-weight: 600; font-family: Georgia, 'Times New Roman', serif;">${post.title}</h3>
                    <p style="font-size: 14px; color: #666666; margin: 0 0 14px 0; line-height: 1.7;">${post.excerpt}</p>
                    <a href="${post.url}" style="color: #c7b79e; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; border-bottom: 1px solid #c7b79e; padding-bottom: 2px;">${content.readMoreText} &#8594;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('\n');

  const servicesHTML = content.services.map((service, idx) => `
    <tr>
      <td style="padding: 18px 0; ${idx < content.services.length - 1 ? 'border-bottom: 1px solid #e8e4df;' : ''}">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="28" valign="top" style="padding-right: 12px; padding-top: 2px;">
              <span style="color: #c7b79e; font-size: 18px;">&#127863;</span>
            </td>
            <td valign="top">
              <h4 style="font-size: 16px; color: #2c2c2c; margin: 0 0 6px 0; font-weight: 600; font-family: Georgia, 'Times New Roman', serif;">${service.title}</h4>
              <p style="font-size: 14px; color: #666666; margin: 0; line-height: 1.6;">${service.description}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('\n');

  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  return `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
            
            .header-cell {
                padding: 30px 20px !important;
            }
            
            .cta-button {
                padding: 16px 28px !important;
                font-size: 15px !important;
            }
            
            .section-title {
                font-size: 20px !important;
            }
            
            .greeting {
                font-size: 17px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        &#127815; ${content.introText.substring(0, 100)}...
    </div>
    
    <!-- Email wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <!-- View in browser link -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 15px 0 20px 0;">
                            <a href="${content.websiteUrl}" style="color: #888888; font-size: 12px; text-decoration: none;">${content.viewInBrowserText}</a>
                        </td>
                    </tr>
                </table>
                
                <!-- Main container -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td class="header-cell" style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <!-- Logo -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Title -->
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.subject}
                            </h1>
                            
                            <!-- Welcome badge -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-top: 20px;">
                                        <div style="display: inline-block; background-color: rgba(199, 183, 158, 0.2); border: 1px solid rgba(199, 183, 158, 0.4); color: #c7b79e; padding: 10px 28px; border-radius: 30px; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">
                                            &#127863; WELKOM &bull; WELCOME &bull; BIENVENUE &#127863;
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Content area -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <!-- Greeting -->
                            <p class="greeting" style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.greeting}
                            </p>
                            
                            <!-- Intro text -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 35px 0;">
                                ${content.introText}
                            </p>
                            
                            <!-- Decorative grape divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <div style="color: #c7b79e; font-size: 14px; letter-spacing: 4px;">&#8212;&#8212; &#127815; &#8212;&#8212;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Blog Section Title -->
                            <h2 class="section-title" style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 0 0 25px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128214; ${content.blogSectionTitle}
                            </h2>
                            
                            <!-- Blog posts -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px;">
                                ${blogPostsHTML}
                            </table>
                            
                            <!-- Services Section Title -->
                            <h2 class="section-title" style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 35px 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#127942; ${content.servicesSectionTitle}
                            </h2>
                            
                            <!-- Services box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-radius: 8px; border: 1px solid #e8e4df;">
                                <tr>
                                    <td style="padding: 10px 24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            ${servicesHTML}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 40px 0 35px 0;">
                                        <a href="${content.websiteUrl}" class="cta-button" style="display: inline-block; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff !important; padding: 18px 40px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(199, 183, 158, 0.35);">
                                            ${content.ctaText} &#8594;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Closing text -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-size: 14px; color: #666666; line-height: 1.8; margin: 0;">
                                            ${content.closingText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 35px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding-right: 20px; vertical-align: top;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); border-radius: 50%; text-align: center; line-height: 50px; font-size: 22px;">&#127863;</div>
                                                </td>
                                                <td style="vertical-align: top; line-height: 1.8; font-style: italic;">
                                                    ${signatureHTML}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            
                            <!-- Brand name -->
                            <p style="font-size: 18px; font-weight: 500; color: #ffffff; margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 13px; color: #c7b79e; margin: 0 0 25px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <!-- Contact info -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 25px;">
                                        <a href="mailto:${content.contactEmail}" style="color: #c7b79e; font-size: 14px; text-decoration: none;">
                                            &#9993; ${content.contactEmail}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Social links -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/sommelier.quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Instagram</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.linkedin.com/in/yentl-quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">LinkedIn</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/yentl.quintelier" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Facebook</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative line -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 25px 0;">
                                        <div style="width: 60px; height: 1px; background-color: #444444;"></div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Unsubscribe -->
                            <p style="font-size: 11px; color: #888888; margin: 0 0 10px 0; line-height: 1.6;">
                                ${content.unsubscribeText}
                            </p>
                            <a href="${content.websiteUrl}/unsubscribe" style="color: #c7b79e; font-size: 11px; text-decoration: underline;">
                                ${content.unsubscribeLink}
                            </a>
                            
                            <!-- Copyright -->
                            <p style="font-size: 10px; color: #666666; margin: 20px 0 0 0;">
                                &copy; 2025 Sommelier Quintelier. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                
                <!-- Bottom spacing -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="height: 30px;"></td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

/**
 * Send welcome email to new newsletter subscriber
 */
export async function sendWelcomeEmail({ to, language }: SendWelcomeEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = welcomeEmailContent[language] || welcomeEmailContent.nl;
    const html = generateWelcomeEmailHTML(content, language);

    const msg = {
      to,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: `${content.greeting}\n\n${content.introText}\n\n${content.closingText}\n\n${content.signature}`,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Welcome email sent to ${to} (${language})`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending welcome email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

/**
 * Generates HTML for order confirmation email
 */
export function generateOrderConfirmationEmailHTML(content: OrderConfirmationEmailContent, order: OrderDetails): string {
  const greeting = content.greeting.replace('{customerName}', order.customerName);
  
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  const extrasText = order.extras.length > 0 
    ? order.extras.map(e => e === 'champagne' ? 'Champagne' : 'Dessertwijn').join(', ')
    : '-';

  const nextStepsHTML = content.nextSteps.map((step, idx) => `
    <tr>
      <td style="padding: 0 0 15px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="40" valign="top" style="padding-right: 12px;">
              <div style="background: linear-gradient(135deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff; border-radius: 50%; width: 28px; height: 28px; text-align: center; line-height: 28px; font-weight: 600; font-size: 14px; font-family: Georgia, 'Times New Roman', serif;">${idx + 1}</div>
            </td>
            <td valign="top">
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #555555; line-height: 1.6;">${step}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="${order.language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
            
            .header-cell {
                padding: 30px 20px !important;
            }
            
            .cta-button {
                padding: 16px 28px !important;
                font-size: 15px !important;
            }
            
            .section-title {
                font-size: 20px !important;
            }
            
            .greeting {
                font-size: 17px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        &#127863; ${content.introText.substring(0, 100)}...
    </div>
    
    <!-- Email wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <!-- View in browser link -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 15px 0 20px 0;">
                            <a href="${content.websiteUrl}" style="color: #888888; font-size: 12px; text-decoration: none;">${content.viewInBrowserText}</a>
                        </td>
                    </tr>
                </table>
                
                <!-- Main container -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td class="header-cell" style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <!-- Logo -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Title -->
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.subject}
                            </h1>
                            
                            <!-- Order confirmation badge -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-top: 20px;">
                                        <div style="display: inline-block; background-color: rgba(199, 183, 158, 0.2); border: 1px solid rgba(199, 183, 158, 0.4); color: #c7b79e; padding: 10px 28px; border-radius: 30px; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">
                                            &#10003; ${content.orderNumberLabel}: ${order.orderId}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Content area -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <!-- Greeting -->
                            <p class="greeting" style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${greeting}
                            </p>
                            
                            <!-- Intro text -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 35px 0;">
                                ${content.introText}
                            </p>
                            
                            <!-- Decorative grape divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <div style="color: #c7b79e; font-size: 14px; letter-spacing: 4px;">&#8212;&#8212; &#127815; &#8212;&#8212;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Order Details Section Title -->
                            <h2 class="section-title" style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 0 0 25px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#127863; ${content.orderDetailsTitle}
                            </h2>
                            
                            <!-- Order details box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.subscriptionLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${order.tierName}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.bottlesLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${order.bottles}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.extrasLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${extrasText}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Amount highlight box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border: 2px solid #c7b79e; border-radius: 8px; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 24px; text-align: center;">
                                        <p style="font-size: 14px; color: #666666; font-weight: 500; margin: 0 0 8px 0;">${content.amountLabel}</p>
                                        <p style="font-size: 28px; color: #c7b79e; font-weight: 600; margin: 0; font-family: Georgia, 'Times New Roman', serif;">€${order.amount}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Delivery Address Section Title -->
                            <h2 class="section-title" style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 35px 0 25px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128230; ${content.deliveryAddressTitle}
                            </h2>
                            
                            <!-- Delivery address box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.nameLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${order.customerName}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px; vertical-align: top;">${content.addressLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600; line-height: 1.6;">${order.deliveryAddress}<br>${order.deliveryPostalCode} ${order.deliveryCity}<br>${order.deliveryCountry}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;${order.customerPhone ? ' border-bottom: 1px solid #e8e4df;' : ''}">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.emailLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${order.customerEmail}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            ${order.customerPhone ? `
                                            <tr>
                                                <td style="padding: 10px 0;">
                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td style="font-weight: 500; color: #666666; font-size: 14px;">${content.phoneLabel}</td>
                                                            <td style="color: #2c2c2c; font-size: 14px; text-align: right; font-weight: 600;">${order.customerPhone}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            ` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Next Steps Section Title -->
                            <h2 class="section-title" style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 35px 0 25px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128203; ${content.nextStepsTitle}
                            </h2>
                            
                            <!-- Next steps -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
                                ${nextStepsHTML}
                            </table>
                            
                            <!-- Closing text -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-size: 14px; color: #666666; line-height: 1.8; margin: 0;">
                                            ${content.closingText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 35px 0;">
                                        <p style="font-size: 14px; color: #666666; margin: 0 0 15px 0;">${content.needHelpText}</p>
                                        <a href="${content.contactLink}" class="cta-button" style="display: inline-block; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff !important; padding: 18px 40px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(199, 183, 158, 0.35);">
                                            ${content.contactLinkText} &#8594;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 25px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding-right: 20px; vertical-align: top;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); border-radius: 50%; text-align: center; line-height: 50px; font-size: 22px;">&#127863;</div>
                                                </td>
                                                <td style="vertical-align: top; line-height: 1.8; font-style: italic;">
                                                    ${signatureHTML}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            
                            <!-- Brand name -->
                            <p style="font-size: 18px; font-weight: 500; color: #ffffff; margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 13px; color: #c7b79e; margin: 0 0 25px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <!-- Contact info -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 25px;">
                                        <a href="mailto:info@yentlquintelier.com" style="color: #c7b79e; font-size: 14px; text-decoration: none;">
                                            &#9993; info@yentlquintelier.com
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Social links -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/sommelier.quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Instagram</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.linkedin.com/in/yentl-quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">LinkedIn</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/yentl.quintelier" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Facebook</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative line -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 25px 0;">
                                        <div style="width: 60px; height: 1px; background-color: #444444;"></div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Copyright -->
                            <p style="font-size: 10px; color: #666666; margin: 0;">
                                &copy; 2025 Sommelier Quintelier. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                
                <!-- Bottom spacing -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="height: 30px;"></td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

/**
 * Send order confirmation email to customer
 */
export async function sendOrderConfirmationEmail({ order }: SendOrderConfirmationEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = orderConfirmationEmailContent[order.language] || orderConfirmationEmailContent.nl;
    const html = generateOrderConfirmationEmailHTML(content, order);

    const greeting = content.greeting.replace('{customerName}', order.customerName);
    const textContent = `
${greeting}

${content.introText}

${content.orderNumberLabel}: ${order.orderId}

${content.orderDetailsTitle}:
- ${content.subscriptionLabel}: ${order.tierName}
- ${content.bottlesLabel}: ${order.bottles}
- ${content.amountLabel}: €${order.amount}

${content.deliveryAddressTitle}:
${order.customerName}
${order.deliveryAddress}
${order.deliveryPostalCode} ${order.deliveryCity}
${order.deliveryCountry}

${content.closingText}

${content.signature}
    `.trim();

    const msg = {
      to: order.customerEmail,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Order confirmation email sent to ${order.customerEmail} (${order.language})`);
    console.log(`   Order: ${order.orderId} - ${order.tierName} (${order.bottles} bottles)`);

    // Send admin notification email
    const extrasText = order.extras.length > 0 
      ? order.extras.map(e => e === 'champagne' ? 'Champagne' : 'Dessertwijn').join(', ')
      : 'Geen';

    const adminMsg = {
      to: 'info@yentlquintelier.com',
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Sommelier Quintelier - Bestellingen'
      },
      subject: `🍷 Nieuwe bestelling: ${order.tierName} - €${order.amount}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #c7b79e; border-bottom: 2px solid #c7b79e; padding-bottom: 10px;">Nieuwe Bestelling</h1>
          
          <h2 style="color: #333; margin-top: 25px;">Klantgegevens</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Naam:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${order.customerName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${order.customerEmail}">${order.customerEmail}</a></td></tr>
            ${order.customerPhone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefoon:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="tel:${order.customerPhone}">${order.customerPhone}</a></td></tr>` : ''}
          </table>

          <h2 style="color: #333; margin-top: 25px;">Bestelling</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Order ID:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${order.orderId}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Abonnement:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${order.tierName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Aantal flessen:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${order.bottles}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Extra's:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${extrasText}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Bedrag:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 18px; color: #c7b79e; font-weight: bold;">€${order.amount}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 25px;">Leveradres</h2>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${order.customerName}<br>
            ${order.deliveryAddress}<br>
            ${order.deliveryPostalCode} ${order.deliveryCity}<br>
            ${order.deliveryCountry}
          </p>

          <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            Taal klant: ${order.language.toUpperCase()} | Ontvangen: ${new Date().toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' })}
          </p>
        </div>
      `,
      text: `Nieuwe Bestelling\n\nKlant: ${order.customerName}\nEmail: ${order.customerEmail}\n${order.customerPhone ? `Telefoon: ${order.customerPhone}\n` : ''}\nAbonnement: ${order.tierName}\nFlessen: ${order.bottles}\nExtra's: ${extrasText}\nBedrag: €${order.amount}\n\nLeveradres:\n${order.deliveryAddress}\n${order.deliveryPostalCode} ${order.deliveryCity}\n${order.deliveryCountry}`,
    };

    try {
      await sgMail.send(adminMsg);
      console.log(`✅ Admin notification email sent to info@yentlquintelier.com`);
    } catch (adminError: any) {
      console.error('⚠️ Admin notification email failed (order confirmation was sent):', adminError.message);
    }

    return true;
  } catch (error: any) {
    console.error('❌ Error sending order confirmation email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

interface SendCancellationEmailParams {
  to: string;
  cancelLink: string;
  language: Language;
}

/**
 * Generates HTML for cancellation request email
 */
export function generateCancellationEmailHTML(content: CancellationEmailContent, cancelLink: string, language: Language): string {
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  return `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
            
            .header-cell {
                padding: 30px 20px !important;
            }
            
            .cta-button {
                padding: 16px 28px !important;
                font-size: 15px !important;
            }
            
            .section-title {
                font-size: 20px !important;
            }
            
            .greeting {
                font-size: 17px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        &#128466; ${content.introText.substring(0, 100)}...
    </div>
    
    <!-- Email wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <!-- View in browser link -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 15px 0 20px 0;">
                            <a href="${content.websiteUrl}" style="color: #888888; font-size: 12px; text-decoration: none;">${content.viewInBrowserText}</a>
                        </td>
                    </tr>
                </table>
                
                <!-- Main container -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td class="header-cell" style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <!-- Logo -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Title -->
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.subject}
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content area -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <!-- Greeting -->
                            <p class="greeting" style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.greeting}
                            </p>
                            
                            <!-- Intro text -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 35px 0;">
                                ${content.introText}
                            </p>
                            
                            <!-- Warning box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f0; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <h3 style="font-size: 16px; color: #c7b79e; font-weight: 600; margin: 0 0 10px 0; font-family: Georgia, 'Times New Roman', serif;">
                                            &#9888; ${content.warningTitle}
                                        </h3>
                                        <p style="font-size: 14px; color: #666666; line-height: 1.7; margin: 0;">
                                            ${content.warningText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0 15px 0;">
                                        <a href="${cancelLink}" class="cta-button" style="display: inline-block; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff !important; padding: 18px 40px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(199, 183, 158, 0.35);">
                                            ${content.buttonText} &#8594;
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <p style="font-size: 13px; color: #999999; margin: 0;">
                                            ${content.validityText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Alternative box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-radius: 8px; border: 1px solid #e8e4df; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <p style="font-size: 14px; color: #666666; line-height: 1.7; margin: 0 0 15px 0;">
                                            ${content.alternativeText}
                                        </p>
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td align="center">
                                                    <a href="${content.contactLink}" style="color: #c7b79e; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; border-bottom: 1px solid #c7b79e; padding-bottom: 2px;">
                                                        ${content.contactText} &#8594;
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Closing text -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-size: 14px; color: #666666; line-height: 1.8; margin: 0;">
                                            ${content.closingText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 35px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding-right: 20px; vertical-align: top;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); border-radius: 50%; text-align: center; line-height: 50px; font-size: 22px;">&#127863;</div>
                                                </td>
                                                <td style="vertical-align: top; line-height: 1.8; font-style: italic;">
                                                    ${signatureHTML}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            
                            <!-- Brand name -->
                            <p style="font-size: 18px; font-weight: 500; color: #ffffff; margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 13px; color: #c7b79e; margin: 0 0 25px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <!-- Contact info -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 25px;">
                                        <a href="mailto:${content.contactEmail}" style="color: #c7b79e; font-size: 14px; text-decoration: none;">
                                            &#9993; ${content.contactEmail}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Social links -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/sommelier.quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Instagram</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.linkedin.com/in/yentl-quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">LinkedIn</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/yentl.quintelier" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Facebook</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative line -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 25px 0;">
                                        <div style="width: 60px; height: 1px; background-color: #444444;"></div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Copyright -->
                            <p style="font-size: 10px; color: #666666; margin: 0;">
                                &copy; 2025 Sommelier Quintelier. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                
                <!-- Bottom spacing -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="height: 30px;"></td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

/**
 * Send cancellation confirmation email with secure link
 */
export async function sendCancellationEmail({ to, cancelLink, language }: SendCancellationEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = cancellationEmailContent[language] || cancellationEmailContent.nl;
    const html = generateCancellationEmailHTML(content, cancelLink, language);

    const textContent = `
${content.greeting}

${content.introText}

${content.warningTitle}:
${content.warningText}

${content.buttonText}:
${cancelLink}

${content.validityText}

${content.alternativeText}

${content.closingText}

${content.signature}
    `.trim();

    const msg = {
      to,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Cancellation email sent to ${to} (${language})`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending cancellation email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

export interface CustomPackageDetails {
  name: string;
  email: string;
  phone?: string | null;
  wantsChampagne: string;
  champagneQuantity?: number | null;
  whiteWineQuantity: number;
  redWineQuantity: number;
  wantsDessertWine: string;
  dessertWineQuantity?: number | null;
  budget: string;
  additionalWishes?: string | null;
  language: Language;
}

interface SendCustomPackageConfirmationEmailParams {
  request: CustomPackageDetails;
}

interface SendCustomPackageAdminNotificationParams {
  request: CustomPackageDetails;
  requestId: string;
}

export function generateCustomPackageConfirmationEmailHTML(content: CustomPackageEmailContent, request: CustomPackageDetails): string {
  const greeting = content.greeting.replace('{customerName}', request.name);
  
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  const formatWineSelection = (wants: string, quantity: number | null | undefined, label: string): string => {
    if (wants === 'yes' && quantity && quantity > 0) {
      return `${content.yesText} (${quantity} ${content.bottlesText})`;
    } else if (wants === 'yes') {
      return content.yesText;
    }
    return content.noText;
  };

  return `
<!DOCTYPE html>
<html lang="${request.language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
        }
        
        table {
            border-collapse: collapse;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <h1 style="color: #ffffff; font-size: 26px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                &#127863; ${content.subject}
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content area -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <p style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${greeting}
                            </p>
                            
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 35px 0;">
                                ${content.introText}
                            </p>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <div style="color: #c7b79e; font-size: 14px; letter-spacing: 4px;">&#8212;&#8212; &#127815; &#8212;&#8212;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Request Summary -->
                            <h2 style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128230; ${content.requestSummaryTitle}
                            </h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500;">&#127870; ${content.champagneLabel}:</span>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${formatWineSelection(request.wantsChampagne, request.champagneQuantity, content.champagneLabel)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500;">&#127863; ${content.whiteWineLabel}:</span>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${request.whiteWineQuantity} ${content.bottlesText}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500;">&#127863; ${content.redWineLabel}:</span>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${request.redWineQuantity} ${content.bottlesText}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0; border-bottom: 1px solid #e8e4df;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500;">&#127863; ${content.dessertWineLabel}:</span>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${formatWineSelection(request.wantsDessertWine, request.dessertWineQuantity, content.dessertWineLabel)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500;">&#128176; ${content.budgetLabel}:</span>
                                                    <span style="color: #c7b79e; font-size: 14px; font-weight: 600; float: right;">${request.budget}</span>
                                                </td>
                                            </tr>
                                            ${request.additionalWishes ? `
                                            <tr>
                                                <td style="padding: 15px 0 5px 0; border-top: 1px solid #e8e4df; margin-top: 10px;">
                                                    <span style="color: #666666; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">&#128221; ${content.additionalWishesLabel}:</span>
                                                    <p style="color: #2c2c2c; font-size: 14px; margin: 0; line-height: 1.6; font-style: italic;">"${request.additionalWishes}"</p>
                                                </td>
                                            </tr>
                                            ` : ''}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Next Steps -->
                            <h2 style="font-size: 22px; color: #2c2c2c; font-weight: 600; margin: 0 0 20px 0; padding-bottom: 12px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128337; ${content.nextStepsTitle}
                            </h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-size: 14px; color: #555555; line-height: 1.8; margin: 0;">
                                            ${content.nextStepsText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="font-size: 14px; color: #666666; line-height: 1.8; margin: 30px 0;">
                                ${content.closingText}
                            </p>
                            
                            <!-- Contact Button -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:${content.contactEmail}" style="display: inline-block; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff !important; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; letter-spacing: 0.5px;">
                                            &#9993; ${content.contactEmail}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 35px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding-right: 20px; vertical-align: top;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); border-radius: 50%; text-align: center; line-height: 50px; font-size: 22px;">&#127863;</div>
                                                </td>
                                                <td style="vertical-align: top; line-height: 1.8; font-style: italic;">
                                                    ${signatureHTML}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            
                            <p style="font-size: 18px; font-weight: 500; color: #ffffff; margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 13px; color: #c7b79e; margin: 0 0 25px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 25px;">
                                        <a href="mailto:${content.contactEmail}" style="color: #c7b79e; font-size: 14px; text-decoration: none;">
                                            &#9993; ${content.contactEmail}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/sommelier.quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Instagram</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.linkedin.com/in/yentl-quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">LinkedIn</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/yentl.quintelier" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Facebook</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 25px 0;">
                                        <div style="width: 60px; height: 1px; background-color: #444444;"></div>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="font-size: 10px; color: #666666; margin: 0;">
                                &copy; 2025 Sommelier Quintelier. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="height: 30px;"></td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

export function generateCustomPackageAdminEmailHTML(content: CustomPackageAdminEmailContent, request: CustomPackageDetails, requestId: string): string {
  const formatWineSelection = (wants: string, quantity: number | null | undefined): string => {
    if (wants === 'yes' && quantity && quantity > 0) {
      return `${content.yesText} (${quantity} ${content.bottlesText})`;
    } else if (wants === 'yes') {
      return content.yesText;
    }
    return content.noText;
  };

  const submittedDate = new Date().toLocaleString('nl-BE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.subject}</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
        }
        
        table {
            border-collapse: collapse;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 500; margin: 0; font-family: Georgia, 'Times New Roman', serif;">
                                &#128230; ${content.newRequestTitle}
                            </h1>
                            <p style="color: rgba(255,255,255,0.9); font-size: 12px; margin-top: 10px;">
                                ID: ${requestId}
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px;">
                            
                            <!-- Customer Info -->
                            <h2 style="font-size: 18px; color: #2c2c2c; font-weight: 600; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128100; ${content.customerInfoTitle}
                            </h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-radius: 6px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.nameLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right; font-weight: 500;">${request.name}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.emailLabel}:</strong>
                                                    <a href="mailto:${request.email}" style="color: #c7b79e; font-size: 14px; float: right; font-weight: 500;">${request.email}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.phoneLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${request.phone || '-'}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Wine Selection -->
                            <h2 style="font-size: 18px; color: #2c2c2c; font-weight: 600; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#127863; ${content.wineSelectionTitle}
                            </h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-radius: 6px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.champagneLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${formatWineSelection(request.wantsChampagne, request.champagneQuantity)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.whiteWineLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${request.whiteWineQuantity} ${content.bottlesText}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.redWineLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${request.redWineQuantity} ${content.bottlesText}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; border-bottom: 1px solid #e8e4df;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.dessertWineLabel}:</strong>
                                                    <span style="color: #2c2c2c; font-size: 14px; float: right;">${formatWineSelection(request.wantsDessertWine, request.dessertWineQuantity)}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <strong style="color: #666666; font-size: 13px;">${content.budgetLabel}:</strong>
                                                    <span style="color: #c7b79e; font-size: 14px; float: right; font-weight: 600;">${request.budget}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Additional Wishes -->
                            <h2 style="font-size: 18px; color: #2c2c2c; font-weight: 600; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #c7b79e; font-family: Georgia, 'Times New Roman', serif;">
                                &#128221; ${content.additionalWishesTitle}
                            </h2>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #faf9f7; border-radius: 6px; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <p style="font-size: 14px; color: #2c2c2c; margin: 0; line-height: 1.6; ${request.additionalWishes ? 'font-style: italic;' : 'color: #888888;'}">
                                            ${request.additionalWishes ? `"${request.additionalWishes}"` : content.noAdditionalWishes}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Submitted At -->
                            <p style="font-size: 12px; color: #888888; text-align: center; margin-top: 20px;">
                                ${content.submittedAtLabel}: ${submittedDate}
                            </p>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #2c2c2c; padding: 20px; text-align: center;">
                            <p style="font-size: 12px; color: #c7b79e; margin: 0;">
                                Sommelier Quintelier - Admin Notificatie
                            </p>
                            <p style="font-size: 10px; color: #666666; margin: 10px 0 0 0;">
                                &copy; 2025 Sommelier Quintelier
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();
}

export async function sendCustomPackageConfirmationEmail({ request }: SendCustomPackageConfirmationEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = customPackageEmailContent[request.language] || customPackageEmailContent.nl;
    const html = generateCustomPackageConfirmationEmailHTML(content, request);

    const textContent = `
${content.greeting.replace('{customerName}', request.name)}

${content.introText}

${content.requestSummaryTitle}:
- ${content.champagneLabel}: ${request.wantsChampagne === 'yes' ? `${content.yesText} (${request.champagneQuantity || 0} ${content.bottlesText})` : content.noText}
- ${content.whiteWineLabel}: ${request.whiteWineQuantity} ${content.bottlesText}
- ${content.redWineLabel}: ${request.redWineQuantity} ${content.bottlesText}
- ${content.dessertWineLabel}: ${request.wantsDessertWine === 'yes' ? `${content.yesText} (${request.dessertWineQuantity || 0} ${content.bottlesText})` : content.noText}
- ${content.budgetLabel}: ${request.budget}
${request.additionalWishes ? `- ${content.additionalWishesLabel}: ${request.additionalWishes}` : ''}

${content.nextStepsTitle}:
${content.nextStepsText}

${content.closingText}

${content.signature}
    `.trim();

    const msg = {
      to: request.email,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Custom package confirmation email sent to ${request.email} (${request.language})`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending custom package confirmation email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

export async function sendCustomPackageAdminNotification({ request, requestId }: SendCustomPackageAdminNotificationParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = customPackageAdminEmailContent;
    const html = generateCustomPackageAdminEmailHTML(content, request, requestId);

    const textContent = `
${content.newRequestTitle}
ID: ${requestId}

${content.customerInfoTitle}:
- ${content.nameLabel}: ${request.name}
- ${content.emailLabel}: ${request.email}
- ${content.phoneLabel}: ${request.phone || '-'}

${content.wineSelectionTitle}:
- ${content.champagneLabel}: ${request.wantsChampagne === 'yes' ? `${content.yesText} (${request.champagneQuantity || 0} ${content.bottlesText})` : content.noText}
- ${content.whiteWineLabel}: ${request.whiteWineQuantity} ${content.bottlesText}
- ${content.redWineLabel}: ${request.redWineQuantity} ${content.bottlesText}
- ${content.dessertWineLabel}: ${request.wantsDessertWine === 'yes' ? `${content.yesText} (${request.dessertWineQuantity || 0} ${content.bottlesText})` : content.noText}
- ${content.budgetLabel}: ${request.budget}

${content.additionalWishesTitle}:
${request.additionalWishes || content.noAdditionalWishes}
    `.trim();

    const msg = {
      to: 'info@yentlquintelier.com',
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Sommelier Quintelier - Website'
      },
      replyTo: {
        email: request.email,
        name: request.name
      },
      subject: `${content.subject} - ${request.name}`,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: false,
        },
        openTracking: {
          enable: false,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Custom package admin notification sent to info@yentlquintelier.com`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending custom package admin notification:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

interface SendCancellationConfirmationEmailParams {
  to: string;
  customerName: string;
  tierName: string;
  language: Language;
}

export function generateCancellationConfirmationEmailHTML(content: CancellationConfirmationEmailContent, customerName: string, tierName: string, language: Language): string {
  const greeting = content.greeting.replace('{customerName}', customerName);
  const confirmationText = content.confirmationText.replace('{tierName}', tierName);
  
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  return `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.subject}
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <p style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${greeting}
                            </p>
                            
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 30px 0;">
                                ${confirmationText}
                            </p>
                            
                            <!-- What happens next section -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 30px 0;">
                                <tr>
                                    <td style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px; padding: 24px;">
                                        <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #2c2c2c; font-weight: 600; font-family: Georgia, 'Times New Roman', serif;">
                                            ${content.whatHappensNextTitle}
                                        </h3>
                                        <p style="font-size: 14px; color: #666666; margin: 0; line-height: 1.7;">
                                            ${content.whatHappensNextText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 25px 0;">
                                ${content.resubscribeText}
                            </p>
                            
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 30px 0;">
                                ${content.closingText}
                            </p>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 25px; border-top: 1px solid #e8e4df;">
                                        <p style="font-size: 15px; line-height: 1.8; margin: 0; font-style: italic;">
                                            ${signatureHTML}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #2c2c2c; padding: 30px 40px; text-align: center;">
                            <p style="font-size: 14px; color: #c7b79e; margin: 0 0 5px 0; font-weight: 500;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 12px; color: #888888; margin: 0 0 20px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <a href="${content.contactLink}" style="display: inline-block; background-color: transparent; border: 1px solid #c7b79e; color: #c7b79e; padding: 10px 25px; text-decoration: none; font-size: 13px; border-radius: 4px;">
                                            ${content.contactText}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="font-size: 10px; color: #666666; margin: 20px 0 0 0;">
                                &copy; 2025 Sommelier Quintelier
                            </p>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();
}

export async function sendCancellationConfirmationEmail({ to, customerName, tierName, language }: SendCancellationConfirmationEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = cancellationConfirmationEmailContent[language] || cancellationConfirmationEmailContent.nl;
    
    // Fallback values for missing customer/tier info
    const fallbackNames: Record<Language, string> = {
      nl: 'Gewaardeerde klant',
      en: 'Valued customer',
      fr: 'Cher client'
    };
    const fallbackTiers: Record<Language, string> = {
      nl: 'wijnabonnement',
      en: 'wine subscription',
      fr: 'abonnement vin'
    };
    
    const safeCustomerName = customerName && customerName.trim() ? customerName : fallbackNames[language] || fallbackNames.nl;
    const safeTierName = tierName && tierName.trim() ? tierName : fallbackTiers[language] || fallbackTiers.nl;
    
    const html = generateCancellationConfirmationEmailHTML(content, safeCustomerName, safeTierName, language);

    const textContent = `
${content.greeting.replace('{customerName}', safeCustomerName)}

${content.confirmationText.replace('{tierName}', safeTierName)}

${content.whatHappensNextTitle}
${content.whatHappensNextText}

${content.resubscribeText}

${content.closingText}

${content.signature}
    `.trim();

    const msg = {
      to,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Cancellation confirmation email sent to ${to} (${language})`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending cancellation confirmation email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}

interface SendReviewEmailParams {
  to: string;
  customerName: string;
  orderDetails: string;
  language: Language;
}

export function generateReviewEmailHTML(content: ReviewEmailContent, customerName: string, orderDetails: string, language: Language): string {
  const greeting = content.greeting.replace('{customerName}', customerName);
  
  const signatureLines = content.signature.split('\n');
  const signatureHTML = signatureLines.map((line, idx) => {
    if (idx === 0) {
      return `<span style="font-size: 16px; color: #c7b79e;">${line}</span>`;
    }
    if (idx === signatureLines.length - 1) {
      return `<span style="font-size: 13px; color: #888888; font-style: normal;">${line}</span>`;
    }
    return `<span style="font-weight: 600; color: #2c2c2c;">${line}</span>`;
  }).join('<br>');

  return `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${content.subject}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8f6f3;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        
        a {
            color: #c7b79e;
            text-decoration: none;
        }
        
        @media only screen and (max-width: 620px) {
            .container {
                width: 100% !important;
                padding: 0 10px !important;
            }
            
            .content-cell {
                padding: 30px 20px !important;
            }
            
            .header-cell {
                padding: 30px 20px !important;
            }
            
            .cta-button {
                padding: 16px 28px !important;
                font-size: 15px !important;
            }
            
            .section-title {
                font-size: 20px !important;
            }
            
            .greeting {
                font-size: 17px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f6f3;">
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        &#127815; ${content.introText.substring(0, 100)}...
    </div>
    
    <!-- Email wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f6f3;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                
                <!-- View in browser link -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td align="center" style="padding: 15px 0 20px 0;">
                            <a href="${content.websiteUrl}" style="color: #888888; font-size: 12px; text-decoration: none;">${content.viewInBrowserText}</a>
                        </td>
                    </tr>
                </table>
                
                <!-- Main container -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header with logo -->
                    <tr>
                        <td class="header-cell" style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            <!-- Logo -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <img src="https://sommelierquintelier.com/logo.png" alt="Sommelier Quintelier" width="180" style="max-width: 180px; height: auto; display: block;">
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 20px 0;">
                                        <div style="color: #c7b79e; font-size: 16px; letter-spacing: 8px;">&#9679; &#9679; &#9679;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Title -->
                            <h1 style="color: #ffffff; font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 1px; font-family: Georgia, 'Times New Roman', serif;">
                                ${content.subject}
                            </h1>
                            
                            <!-- Feedback badge -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-top: 20px;">
                                        <div style="display: inline-block; background-color: rgba(199, 183, 158, 0.2); border: 1px solid rgba(199, 183, 158, 0.4); color: #c7b79e; padding: 10px 28px; border-radius: 30px; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">
                                            &#11088; FEEDBACK &#11088;
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Content area -->
                    <tr>
                        <td class="content-cell" style="padding: 45px 40px;">
                            
                            <!-- Greeting -->
                            <p class="greeting" style="font-size: 18px; color: #2c2c2c; margin: 0 0 25px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                                ${greeting}
                            </p>
                            
                            <!-- Intro text -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 25px 0;">
                                ${content.introText}
                            </p>
                            
                            <!-- Order details box -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 25px;">
                                <tr>
                                    <td style="background-color: #faf9f7; border-left: 4px solid #c7b79e; border-radius: 6px; padding: 20px 24px;">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td width="28" valign="top" style="padding-right: 12px; padding-top: 2px;">
                                                    <span style="color: #c7b79e; font-size: 18px;">&#127863;</span>
                                                </td>
                                                <td valign="top">
                                                    <h4 style="font-size: 14px; color: #888888; margin: 0 0 6px 0; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">${content.orderDetailsLabel}</h4>
                                                    <p style="font-size: 16px; color: #2c2c2c; margin: 0; font-weight: 600; font-family: Georgia, 'Times New Roman', serif;">${orderDetails}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Experience question -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 35px 0;">
                                ${content.experienceQuestion}
                            </p>
                            
                            <!-- CTA Button -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <a href="${content.contactLink}" class="cta-button" style="display: inline-block; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); color: #ffffff !important; padding: 18px 40px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(199, 183, 158, 0.35);">
                                            ${content.ctaText} &#8594;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Alternative text -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px;">
                                <tr>
                                    <td align="center">
                                        <p style="font-size: 13px; color: #888888; margin: 0; font-style: italic;">
                                            ${content.alternativeText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative grape divider -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0 30px 0;">
                                        <div style="color: #c7b79e; font-size: 14px; letter-spacing: 4px;">&#8212;&#8212; &#127815; &#8212;&#8212;</div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Contact text -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8f5; border-left: 4px solid #c7b79e; border-radius: 0 6px 6px 0; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 20px 24px;">
                                        <p style="font-size: 14px; color: #666666; line-height: 1.8; margin: 0;">
                                            ${content.contactText}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Closing text -->
                            <p style="font-size: 15px; color: #555555; line-height: 1.9; margin: 0 0 30px 0;">
                                ${content.closingText}
                            </p>
                            
                            <!-- Signature -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="padding-top: 25px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding-right: 20px; vertical-align: top;">
                                                    <div style="width: 50px; height: 50px; background: linear-gradient(145deg, #c7b79e 0%, #b5a68d 100%); border-radius: 50%; text-align: center; line-height: 50px; font-size: 22px;">&#127863;</div>
                                                </td>
                                                <td style="vertical-align: top; line-height: 1.8; font-style: italic;">
                                                    ${signatureHTML}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background: linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                            
                            <!-- Brand name -->
                            <p style="font-size: 18px; font-weight: 500; color: #ffffff; margin: 0 0 5px 0; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">
                                Sommelier Quintelier
                            </p>
                            <p style="font-size: 13px; color: #c7b79e; margin: 0 0 25px 0;">
                                ${content.footerLocation}
                            </p>
                            
                            <!-- Contact info -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom: 25px;">
                                        <a href="mailto:${content.contactEmail}" style="color: #c7b79e; font-size: 14px; text-decoration: none;">
                                            &#9993; ${content.contactEmail}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Social links -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                                <tr>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.instagram.com/sommelier.quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Instagram</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.linkedin.com/in/yentl-quintelier/" style="color: #c7b79e; font-size: 13px; text-decoration: none;">LinkedIn</a>
                                    </td>
                                    <td style="color: #555555; font-size: 13px;">|</td>
                                    <td style="padding: 0 12px;">
                                        <a href="https://www.facebook.com/yentl.quintelier" style="color: #c7b79e; font-size: 13px; text-decoration: none;">Facebook</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Decorative line -->
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 25px 0;">
                                        <div style="width: 60px; height: 1px; background-color: #444444;"></div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Copyright -->
                            <p style="font-size: 10px; color: #666666; margin: 0;">
                                &copy; 2025 Sommelier Quintelier. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                    
                </table>
                
                <!-- Bottom spacing -->
                <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="height: 30px;"></td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
  `.trim();
}

export async function sendReviewEmail({ to, customerName, orderDetails, language }: SendReviewEmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SendGrid API key not configured');
      return false;
    }

    const content = reviewEmailContent[language] || reviewEmailContent.nl;
    
    const fallbackNames: Record<Language, string> = {
      nl: 'Gewaardeerde klant',
      en: 'Valued customer',
      fr: 'Cher client'
    };
    
    const safeCustomerName = customerName && customerName.trim() ? customerName : fallbackNames[language] || fallbackNames.nl;
    const safeOrderDetails = orderDetails && orderDetails.trim() ? orderDetails : 'Wijnabonnement';
    
    const html = generateReviewEmailHTML(content, safeCustomerName, safeOrderDetails, language);

    const textContent = `
${content.greeting.replace('{customerName}', safeCustomerName)}

${content.introText}

${content.orderDetailsLabel}: ${safeOrderDetails}

${content.experienceQuestion}

${content.ctaText}: ${content.contactLink}

${content.alternativeText}

${content.contactText}

${content.closingText}

${content.signature}
    `.trim();

    const msg = {
      to,
      from: {
        email: 'info@sommelierquintelier.com',
        name: 'Yentl Quintelier - Sommelier'
      },
      replyTo: {
        email: 'info@yentlquintelier.com',
        name: 'Yentl Quintelier'
      },
      subject: content.subject,
      html,
      text: textContent,
      trackingSettings: {
        clickTracking: {
          enable: true,
        },
        openTracking: {
          enable: true,
        },
      },
    };

    await sgMail.send(msg);
    console.log(`✅ Review email sent to ${to} (${language})`);
    return true;
  } catch (error: any) {
    console.error('❌ Error sending review email:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    return false;
  }
}
