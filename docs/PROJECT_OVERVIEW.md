# Project Overview - Sommelier Quintelier

## About the Project

**Sommelier.Quintelier** is a premium wine consultancy website for Yentl Quintelier, Sommelier of the Year Belgium 2022. The platform serves as an elegant digital presence for wine consultancy services, educational blog content, and booking for wine tastings and events.

### Business Goals
- Establish a leading online presence for high-end wine consultancy
- Reach a global clientele with multilingual support (Dutch, English, French)
- Showcase wine expertise and professional services
- Enable wine subscription sales and booking management

---

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18+ | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Wouter | Client-side routing |
| TanStack Query | Server state management |
| Tailwind CSS | Styling framework |
| shadcn/ui (Radix UI) | UI component library |
| Framer Motion | Animations |
| i18next | Internationalization |
| react-helmet-async | SEO & meta tags |

### Backend
| Technology | Purpose |
|------------|---------|
| Express.js | API server |
| TypeScript | Type safety |
| Drizzle ORM | Database ORM |
| PostgreSQL (Neon) | Database |
| Zod | Schema validation |

### External Services
| Service | Purpose |
|---------|---------|
| Mollie | Payment processing (subscriptions) |
| SendGrid | Transactional emails |
| HubSpot | Marketing analytics & form tracking |

---

## Folder Structure

```
/
├── client/                      # Frontend application
│   └── src/
│       ├── components/          # Reusable UI components
│       │   ├── blog/            # Blog-specific components
│       │   ├── checkout/        # Checkout flow modals
│       │   ├── seo/             # Structured data schemas
│       │   └── ui/              # shadcn/ui components
│       ├── data/                # Static data (blog posts)
│       ├── hooks/               # Custom React hooks
│       ├── lib/                 # Utilities & helpers
│       ├── pages/               # Page components
│       │   └── services/        # Individual service pages
│       ├── types/               # TypeScript type definitions
│       ├── utils/               # Helper functions
│       ├── App.tsx              # Root component & routing
│       ├── i18n.ts              # Translations (NL/EN/FR)
│       └── index.css            # Global styles & CSS variables
│
├── server/                      # Backend application
│   ├── emails/                  # Email templates & content
│   ├── utils/                   # Server utilities
│   ├── db.ts                    # Database connection
│   ├── routes.ts                # API endpoints
│   ├── storage.ts               # Storage interface
│   └── index.ts                 # Server entry point
│
├── shared/                      # Shared code
│   └── schema.ts                # Database schema & types
│
├── public/                      # Static assets
├── attached_assets/             # Uploaded images & assets
└── docs/                        # Project documentation
```

---

## Key Features

### Public Pages
- **Home** - Hero, services overview, subscription preview
- **About** - Yentl's background and credentials
- **Services** - Overview of all service offerings
- **Wine Subscriptions** - Subscription tiers with checkout
- **Blog** - Educational wine content
- **Gallery** - Event and wine photography
- **Contact** - Contact form with HubSpot integration

### Service Pages
- Wine Consultancy
- Wine Tastings
- Private Sommelier
- Custom Wine List (Restaurant)
- Wine Cellar Management

### Subscription System
- 4 tiers: Selection, Cuvée, Prestige, Champagne
- 3 or 6 bottles per month options
- Optional extras (champagne, dessert wine)
- Recurring payments via Mollie
- Email-based subscription cancellation flow

---

## Environment Variables

### Required for Full Functionality
```
DATABASE_URL          # PostgreSQL connection string
MOLLIE_API_KEY        # Mollie API key for payments
SENDGRID_API_KEY      # SendGrid for transactional emails
BASE_URL              # Production URL (https://sommelierquintelier.com)
SESSION_SECRET        # Session encryption key
CANCELLATION_TOKEN_SECRET  # Token signing secret
```

### Optional
```
VITE_GTM_ID           # Google Tag Manager ID
```

---

## Running the Project

```bash
# Development
npm run dev           # Starts both frontend (Vite) and backend (Express)

# Database
npm run db:push       # Push schema changes to database

# Production
npm run build         # Build for production
npm start             # Start production server
```

---

## Key Conventions

1. **Translations** - All user-facing text uses i18next keys from `client/src/i18n.ts`
2. **Forms** - Use react-hook-form with zodResolver for validation
3. **API Calls** - Use TanStack Query with apiRequest helper
4. **Styling** - Tailwind CSS with shadcn/ui components
5. **Database** - Drizzle ORM with schema in `shared/schema.ts`
