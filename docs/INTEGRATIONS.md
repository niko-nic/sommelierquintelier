# External Integrations - Sommelier Quintelier

## Mollie (Payment Processing)

### Overview
Mollie handles all payment processing for wine subscriptions with recurring billing support.

### Configuration
```
MOLLIE_API_KEY=live_xxxxx or test_xxxxx
BASE_URL=https://sommelierquintelier.com
```

### Payment Flow

1. **Create Payment** (`POST /api/create-mollie-payment`)
   - Creates Mollie customer
   - Creates first payment with `sequenceType: 'first'`
   - Returns checkout URL

2. **User Completes Payment**
   - Redirected to Mollie checkout
   - On completion → `/payment-status`

3. **Webhook Handler** (`POST /api/mollie-webhook`)
   - Receives payment status updates
   - Updates database order status
   - Creates recurring subscription after first paid payment

### Subscription Creation
After first payment is successful:
```typescript
const subscription = await mollieClient.customerSubscriptions.create({
  customerId: customer.id,
  amount: { value: amount, currency: 'EUR' },
  interval: '1 month',
  description: 'Wine Subscription',
  webhookUrl: `${BASE_URL}/api/mollie-webhook`,
});
```

### Cancellation Flow
1. User requests cancellation via email
2. Secure token generated and emailed
3. User clicks link → confirms cancellation
4. Mollie subscription cancelled via API

---

## SendGrid (Email)

### Overview
SendGrid sends transactional emails for newsletter welcome, order confirmation, and cancellation.

### Configuration
```
SENDGRID_API_KEY=SG.xxxxx
```

### Email Types

| Email | Trigger | Template Location |
|-------|---------|-------------------|
| Newsletter Welcome | Newsletter signup | `server/emails/welcome-content.ts` |
| Order Confirmation | Successful payment | `server/emails/order-confirmation-content.ts` |
| Cancellation Link | Cancel request | `server/emails/cancellation-content.ts` |

### Sending Email
```typescript
import { sendEmail } from './emails/sendEmail';

await sendEmail({
  to: customerEmail,
  subject: 'Welkom bij Sommelier Quintelier',
  html: htmlContent,
});
```

### Email Content Pattern
Each email has multilingual content:
```typescript
export function getEmailContent(language: string) {
  const content = {
    nl: {
      subject: 'Dutch subject',
      greeting: 'Beste {name}',
      body: 'Dutch content...',
    },
    en: { ... },
    fr: { ... },
  };
  return content[language] || content.nl;
}
```

---

## HubSpot (Marketing Analytics)

### Overview
HubSpot tracks form submissions and provides marketing analytics with language-specific segmentation.

### Configuration
HubSpot tracking is embedded in forms without requiring environment variables (uses public tracking code).

### Form Tracking
Contact and newsletter forms send data to HubSpot:
```typescript
// In form submission handler
await fetch('https://api.hsforms.com/submissions/v3/integration/submit/PORTAL_ID/FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fields: [
      { name: 'email', value: email },
      { name: 'language', value: i18n.language },
    ],
  }),
});
```

### HubSpot CMS Endpoint
Status endpoint for HubSpot CMS verification:
```typescript
app.get("/_hcms/status", (req, res) => {
  res.setHeader('X-HS-Public-Host', 'sommelierquintelier.com');
  res.status(200).json({ status: 'ok' });
});
```

---

## Google Tag Manager

### Configuration
```
VITE_GTM_ID=GTM-XXXXXX
```

### Initialization
```typescript
// client/src/lib/gtm.ts
export function initGTM() {
  if (!import.meta.env.VITE_GTM_ID) return;
  // GTM script injection
}
```

### Page View Tracking
```typescript
// client/src/hooks/use-analytics.tsx
export function useAnalytics() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Track page view on route change
    window.dataLayer?.push({
      event: 'pageview',
      page: location,
    });
  }, [location]);
}
```

---

## Database (Neon PostgreSQL)

### Configuration
```
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
```

### Connection
```typescript
// server/db.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
```

### Schema Management
```bash
npm run db:push  # Push schema changes to database
```

---

## Environment Variables Summary

### Required
| Variable | Service | Description |
|----------|---------|-------------|
| `DATABASE_URL` | Neon | PostgreSQL connection string |
| `MOLLIE_API_KEY` | Mollie | Payment API key |
| `SENDGRID_API_KEY` | SendGrid | Email API key |
| `BASE_URL` | All | Production URL for webhooks/redirects |
| `SESSION_SECRET` | Express | Session encryption |
| `CANCELLATION_TOKEN_SECRET` | Internal | Token signing |

### Optional
| Variable | Service | Description |
|----------|---------|-------------|
| `VITE_GTM_ID` | GTM | Google Tag Manager ID |

---

## Testing Integrations

### Mollie Test Mode
Use test API key (`test_xxxxx`) for sandbox testing:
- Test card: `4242 4242 4242 4242`
- Webhooks work in test mode

### SendGrid
Check SendGrid dashboard for email delivery status.

### HubSpot
Verify form submissions in HubSpot contacts.
