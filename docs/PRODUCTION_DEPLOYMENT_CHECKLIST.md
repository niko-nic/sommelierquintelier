# Production Deployment Checklist - Sommelier Quintelier

**Version:** 1.0  
**Last Updated:** December 12, 2025

---

## Pre-Deployment Checklist

### Environment Configuration

- [ ] **Mollie API Key**
  - Switch from test key (`test_xxx`) to live key (`live_xxx`)
  - Set `MOLLIE_API_KEY` in production environment
  - Verify key has correct permissions (payments, subscriptions, customers)

- [ ] **BASE_URL**
  - Set to `https://sommelierquintelier.com`
  - This URL is used for Mollie webhooks and payment redirects

- [ ] **SendGrid API Key**
  - Verify `SENDGRID_API_KEY` is set in production
  - Verify sender email is verified in SendGrid

- [ ] **Database**
  - Production PostgreSQL database configured
  - `DATABASE_URL` set correctly
  - All migrations applied (run `npm run db:push`)

- [ ] **GTM (Optional)**
  - Set `VITE_GTM_ID` if Google Tag Manager is required
  - Leave unset to disable GTM

---

## Test vs Live Configuration

| Setting | Test/Development | Production |
|---------|------------------|------------|
| `MOLLIE_API_KEY` | `test_xxx...` | `live_xxx...` |
| `BASE_URL` | `http://localhost:5000` | `https://sommelierquintelier.com` |
| `DATABASE_URL` | Dev database | Production database |
| Mollie Dashboard | Test mode | Live mode |
| Webhook URL | Not used (localhost) | `https://sommelierquintelier.com/api/mollie-webhook` |

---

## Mollie Configuration

### Webhook Setup
1. In Mollie Dashboard → Settings → Website profiles
2. Add webhook URL: `https://sommelierquintelier.com/api/mollie-webhook`
3. Verify webhook is receiving events in Mollie logs

### Payment Methods
1. Enable desired payment methods in Mollie Dashboard
2. Recommended: iDEAL, Bancontact, Credit Card, PayPal, Apple Pay

### Testing in Production
1. Use small amount payment (€0.01 if supported) to test flow
2. Verify webhook receives `paid` status
3. Verify confirmation email is sent
4. Verify subscription is created in Mollie

---

## Database Migrations

### Safe Migration Process
```bash
# Push schema changes to database
npm run db:push

# If data-loss warning appears (rare), use force flag
npm run db:push --force
```

### Important Notes
- Never manually write SQL migrations
- Drizzle ORM handles schema synchronization
- Always backup database before major schema changes

---

## Webhook Testing Locally

### Using ngrok (recommended)
```bash
# Install ngrok
npm install -g ngrok

# Start tunnel
ngrok http 5000

# Get public URL (e.g., https://abc123.ngrok.io)
# Set this as your webhook URL in Mollie test dashboard
```

### Webhook Endpoint
- URL: `/api/mollie-webhook`
- Method: POST
- Body: `{ "id": "tr_xxx" }` (Mollie payment ID)

---

## Security Checklist

- [x] **Rate Limiting** - Implemented on all public POST endpoints
- [x] **Input Sanitization** - XSS protection on form inputs
- [x] **Error Handling** - Internal errors not exposed to clients
- [x] **Webhook Idempotency** - Duplicate webhooks handled safely
- [x] **Environment Variables** - Sensitive keys not exposed to frontend

---

## Performance Checklist

- [x] **Database Indexes** - Added on frequently queried columns
- [ ] **CDN** - Consider CDN for static assets (images, fonts)
- [ ] **Caching** - Consider caching for static API responses

---

## Monitoring Checklist

- [ ] **Error Logging** - Set up error monitoring (e.g., Sentry)
- [ ] **Uptime Monitoring** - Configure health checks
- [ ] **Payment Monitoring** - Monitor Mollie dashboard for failed payments

### Health Check Endpoint
- URL: `/api/health`
- Expected Response: `{ status: "ok" }`

---

## Crash Scenarios & Recovery

### Payment Webhook Failure
**Scenario:** Webhook doesn't reach server (server down, network issue)
**Mollie Behavior:** Retries webhook multiple times over 24-48 hours
**Recovery:** When server comes back up, webhook will be retried automatically

### Duplicate Webhook
**Scenario:** Same webhook received multiple times
**Behavior:** Handled by idempotency check - skips if already processed

### Database Connection Lost
**Scenario:** Database connection fails during payment processing
**Behavior:** Payment succeeds in Mollie, webhook will retry
**Recovery:** On next webhook attempt, order will be updated

### Email Sending Failure
**Scenario:** SendGrid fails to send confirmation email
**Behavior:** Order is still saved, email failure logged
**Recovery:** Can manually resend from admin or check SendGrid activity

---

## Go-Live Steps

1. **Final Code Review**
   - Review all environment-specific code
   - Remove any test/debug code

2. **Environment Setup**
   - Configure all production environment variables
   - Verify database connection

3. **Switch Mollie to Live**
   - Change API key from test to live
   - Verify webhook URL is set in live mode

4. **Deploy Application**
   - Deploy via Replit Deployments
   - Verify application is accessible

5. **Post-Deployment Verification**
   - [ ] Homepage loads correctly
   - [ ] Navigation works
   - [ ] Language switching works (NL/EN/FR)
   - [ ] Contact form submits
   - [ ] Newsletter signup works
   - [ ] Payment flow works (small test payment)
   - [ ] Webhook is received
   - [ ] Confirmation email is sent

6. **Monitor**
   - Watch Mollie dashboard for payment activity
   - Check server logs for any errors
   - Monitor database for new orders

---

## Rollback Plan

If critical issues are found:

1. **Revert Deployment**
   - Use Replit's deployment rollback feature
   - Or redeploy previous working version

2. **Database Rollback**
   - Use Replit's database checkpoint feature
   - Restores code, database, and chat history

3. **Emergency Contacts**
   - Mollie Support: support@mollie.com
   - SendGrid Support: support.sendgrid.com

---

## Documentation References

- [TECHNICAL_AUDIT_REPORT.md](./TECHNICAL_AUDIT_REPORT.md) - Full audit findings
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System architecture
- [I18N_GUIDE.md](./I18N_GUIDE.md) - Internationalization guide
- [INTEGRATIONS.md](./INTEGRATIONS.md) - Third-party integrations

---

*Checklist Version 1.0 - December 12, 2025*
