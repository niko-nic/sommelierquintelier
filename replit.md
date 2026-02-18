# Sommelier.quintelier - Luxury Wine Consultancy Platform

## Overview
Sommelier.quintelier is a premium wine consultancy website for Yentl Quintelier, a certified sommelier. The platform provides an elegant digital presence for wine consultancy, educational blog content, and booking for wine tastings and events. It is a full-stack TypeScript web application emphasizing luxury aesthetics, multilingual support (Dutch, English, French), and professional wine industry presentation. The platform showcases wine varietals and service offerings such as wine subscriptions, private tastings, cellar management, and restaurant wine list curation. The business vision is to establish a leading online presence for high-end wine consultancy, reaching a global clientele with an ambition to expand service offerings and educational content.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built with React 18+ and TypeScript, using Vite. Wouter handles client-side routing. The UI leverages shadcn/ui components (built on Radix UI) styled with Tailwind CSS. Typography uses Fraunces and a custom HSL-based color scheme. TanStack Query manages server state. i18next provides multilingual support (Dutch, English, French). react-helmet-async manages SEO and meta tags, including comprehensive schema.org structured data. The design emphasizes a luxury aesthetic with specific typography, a Tailwind-based spacing system, responsive grid layouts, and custom elevation effects.

### SEO & Structured Data
The platform implements comprehensive schema.org markup using JSON-LD for:
- **Core Entities:** Organization (`#organization`), Person (Yentl Quintelier, `#yentl`), and WebSite.
- **Content Schemas:** Product (for 8 wine subscription variants), Service (for 5 offerings), BlogPosting (enhanced article schemas), and BreadcrumbList (dynamic navigation).
- **ImageObject Integration:** Structured image metadata for products and blog posts, optimized for social sharing.
- **Entity Interlinking:** All schemas use `@id` references for proper relationships (e.g., Organization ↔ Person, Content ↔ Author/Publisher) and support multilingual content via i18n.

### Backend Architecture
The backend uses a hybrid architecture with Express.js serving as the main server and Next.js App Router for SSR pages. API routes are implemented as Next.js Route Handlers in the `app/api/` directory:

**API Routes (Next.js Route Handlers):**
- `/api/newsletter` - Newsletter subscription with SendGrid welcome email
- `/api/contact` - Contact form submission
- `/api/create-mollie-payment` - Mollie payment creation for subscriptions
- `/api/mollie-webhook` - Mollie webhook for payment status updates
- `/api/custom-package` - Custom wine package requests
- `/api/subscription/cancel-request` - Generate secure cancellation token and email
- `/api/subscription/cancel-confirm` - Validate token and cancel Mollie subscription
- `/api/health` - Health check endpoint

Drizzle ORM is configured for PostgreSQL with a schema-first design and Zod validation. The API follows a RESTful structure with type-safe request/response handling.

### Content Management
Blog content is stored as static TypeScript objects within the client, including full metadata, sourced from an existing WordPress blog. Static assets, including images and brand assets, are managed locally.

### Application Features
The platform includes public pages (Home, About, Services, Blog, Contact), offering wine subscriptions, private tastings, restaurant wine list consultation, wine cellar management, personal sommelier services, and general wine consultancy. Newsletter functionality includes email capture forms with frontend validation, database persistence, and automated multilingual welcome emails via SendGrid. Contact and newsletter forms integrate with HubSpot for marketing analytics with language-specific segmentation.

## External Dependencies

### Third-Party Services
- **Database**: Neon serverless PostgreSQL (`@neondatabase/serverless`) is configured for database storage.
- **Payment Gateway**: Mollie (`@mollie/api-client`) for payment processing, replacing a previous Stripe integration.
- **Email Service**: SendGrid (`@sendgrid/mail`) for automated welcome emails to newsletter subscribers.
- **Marketing Analytics**: HubSpot form tracking with language-specific segmentation for contact and newsletter forms.

### Key NPM Packages
-   **UI & Styling**: `@radix-ui/*`, `tailwindcss`, `class-variance-authority`, `lucide-react`.
-   **Forms & Validation**: `react-hook-form`, `@hookform/resolvers`, `zod`, `drizzle-zod`.
-   **Internationalization**: `i18next`, `react-i18next`.
-   **Data Fetching**: `@tanstack/react-query`.

### Environment Variables
-   `DATABASE_URL`: For PostgreSQL connection.
-   `BASE_URL`: Production domain URL (https://sommelierquintelier.com) for Mollie redirects and webhooks.
-   `MOLLIE_API_KEY`: Mollie API key for payment processing.
-   `SENDGRID_API_KEY`: SendGrid API key for automated email delivery.