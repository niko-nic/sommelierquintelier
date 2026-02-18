# Architecture Guide - Sommelier Quintelier

## Frontend Architecture

### Routing (Wouter)
Routes are defined in `client/src/App.tsx`:

```typescript
<Route path="/"><Home /></Route>
<Route path="/about"><About /></Route>
<Route path="/services"><Services /></Route>
<Route path="/subscriptions"><Subscriptions /></Route>
<Route path="/services/wine-consultancy"><WineConsultancy /></Route>
<Route path="/blog"><Blog /></Route>
<Route path="/blog/:slug"><BlogPost /></Route>
<Route path="/gallery"><Gallery /></Route>
<Route path="/contact"><Contact /></Route>
```

### State Management
- **Server State**: TanStack Query (`@tanstack/react-query`)
- **Local State**: React useState/useContext
- **Form State**: react-hook-form

### Component Structure
```
components/
├── ui/              # shadcn/ui base components
├── seo/             # Schema.org structured data
├── checkout/        # Payment flow modals
├── blog/            # Blog-specific components
└── [Feature].tsx    # Feature components (Header, Footer, etc.)
```

---

## Backend Architecture

### API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/payment-status/:paymentId` | Check Mollie payment status |
| POST | `/api/create-mollie-payment` | Create subscription payment |
| POST | `/api/mollie-webhook` | Mollie webhook handler |
| POST | `/api/subscription/cancel-request` | Request cancellation link |
| POST | `/api/subscription/cancel-confirm` | Confirm subscription cancellation |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/newsletter` | Subscribe to newsletter |
| POST | `/api/custom-package-request` | Request custom wine package |
| GET | `/sitemap.xml` | Dynamic sitemap |

### Request Flow
```
Client Request
    ↓
Express Router (server/routes.ts)
    ↓
Zod Validation
    ↓
Storage Interface (server/storage.ts)
    ↓
Drizzle ORM → PostgreSQL
```

---

## Database Schema

### Tables

#### `subscription_orders`
Main table for wine subscription purchases.
```typescript
{
  id: varchar (UUID),
  molliePaymentId: text (unique),
  mollieCustomerId: text,
  mollieSubscriptionId: text,
  tier: text,              // 'selection' | 'cuvee' | 'prestige' | 'champagne'
  tierName: text,
  bottles: integer,        // 3 or 6
  amount: decimal,
  extras: text[],          // ['champagne', 'dessert']
  paymentStatus: text,     // 'pending' | 'paid' | 'failed' | 'cancelled'
  subscriptionStatus: text,
  customerName: text,
  customerEmail: text,
  deliveryAddress: text,
  deliveryCity: text,
  deliveryPostalCode: text,
  deliveryCountry: text,
  language: text,          // 'nl' | 'en' | 'fr'
  createdAt: timestamp,
  paidAt: timestamp
}
```

#### `newsletter_subscriptions`
```typescript
{
  id: varchar (UUID),
  email: text (unique),
  language: text,
  createdAt: timestamp
}
```

#### `contact_submissions`
```typescript
{
  id: varchar (UUID),
  name: text,
  email: text,
  phone: text,
  message: text,
  language: text,
  createdAt: timestamp
}
```

#### `custom_package_requests`
```typescript
{
  id: varchar (UUID),
  name: text,
  email: text,
  phone: text,
  wantsChampagne: text,
  champagneQuantity: integer,
  whiteWineQuantity: integer,
  redWineQuantity: integer,
  wantsDessertWine: text,
  dessertWineQuantity: integer,
  budget: text,
  additionalWishes: text,
  createdAt: timestamp
}
```

#### `cancellation_tokens`
Secure tokens for subscription cancellation flow.
```typescript
{
  id: varchar (UUID),
  tokenId: text (unique),
  tokenHash: text,
  subscriptionId: text,
  email: text,
  expiresAt: timestamp,
  usedAt: timestamp,
  createdAt: timestamp
}
```

---

## Subscription Pricing

```typescript
const SUBSCRIPTION_PRICING = {
  selection: { 3: 55, 6: 100 },
  cuvee: { 3: 110, 6: 200 },
  prestige: { 3: 250, 6: 480 },
  champagne: { 3: 150, 6: 275 },
};

const EXTRAS_PRICING = {
  selection: { champagne: 20, dessert: 20 },
  cuvee: { champagne: 35, dessert: 35 },
  prestige: { champagne: 85, dessert: 85 },
  champagne: { champagne: 0, dessert: 0 },
};
```

---

## Payment Flow (Mollie)

1. User selects subscription tier and extras
2. User completes checkout form
3. `POST /api/create-mollie-payment` creates Mollie customer + first payment
4. User redirected to Mollie checkout
5. On completion → `/payment-status` checks status
6. If paid → `/thank-you`, else → `/subscriptions`
7. Mollie webhook updates order status
8. For recurring: Mollie subscription created after first payment

---

## SEO & Structured Data

Schema.org implementations in `client/src/components/seo/`:
- `WebSiteSchema.tsx` - Organization, Person, WebSite
- `ServiceSchema.tsx` - Service offerings
- `SubscriptionProductSchema.tsx` - Wine subscription products
- `BlogPostingSchema.tsx` - Blog article schemas
- `BreadcrumbSchema.tsx` - Navigation breadcrumbs
