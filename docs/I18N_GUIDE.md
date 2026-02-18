# Internationalization Guide - Sommelier Quintelier

## Supported Languages

| Code | Language |
|------|----------|
| nl | Nederlands (Dutch) - Default |
| en | English |
| fr | Français (French) |

---

## Configuration

Location: `client/src/i18n.ts`

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: { /* Dutch translations */ } },
    en: { translation: { /* English translations */ } },
    fr: { translation: { /* French translations */ } },
  },
  lng: 'nl',           // Default language
  fallbackLng: 'nl',   // Fallback if key missing
  interpolation: {
    escapeValue: false,
  },
});
```

---

## Translation Structure

```typescript
{
  nav: {
    home: 'Home',
    about: 'Over',
    services: 'Diensten',
    blog: 'Blog',
    gallery: 'Galerij',
    contact: 'Contact',
  },
  services: {
    title: 'Onze Diensten',
    subscription: {
      title: 'Wijnabonnementen',
      shortTitle: 'Wijnen',        // For mobile nav
      description: 'Zorgvuldig samengesteld',
    },
    consultancy: { ... },
    tasting: { ... },
  },
  checkout: {
    title: 'Afrekenen',
    button: 'Bestellen',
    error: 'Fout bij betaling',
  },
  blog: {
    subtitle: 'Ontdek alles over wijn',
    readMore: 'Lees meer',
    categories: {
      all: 'Alles',
      druiven: 'Druiven',
      tips: 'Tips',
    },
  },
  // ... more keys
}
```

---

## Usage in Components

### Basic Usage
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('services.title')}</h1>;
}
```

### With Current Language
```tsx
const { t, i18n } = useTranslation();

// Get current language
const currentLang = i18n.language; // 'nl', 'en', or 'fr'

// Change language
i18n.changeLanguage('en');
```

### Conditional by Language
```tsx
const { i18n } = useTranslation();

// Different content per language
{i18n.language === 'nl' && <DutchSpecificContent />}
```

---

## Adding New Translations

### Step 1: Add to Dutch (nl)
```typescript
// In i18n.ts, under nl.translation
mySection: {
  title: 'Mijn Titel',
  description: 'Mijn beschrijving',
},
```

### Step 2: Add to English (en)
```typescript
// In i18n.ts, under en.translation
mySection: {
  title: 'My Title',
  description: 'My description',
},
```

### Step 3: Add to French (fr)
```typescript
// In i18n.ts, under fr.translation
mySection: {
  title: 'Mon Titre',
  description: 'Ma description',
},
```

---

## Translation Keys by Feature

### Navigation
- `nav.home`, `nav.about`, `nav.services`, `nav.blog`, `nav.gallery`, `nav.contact`

### Services
- `services.title`, `services.subtitle`
- `services.subscription.*` - Wine subscriptions
- `services.consultancy.*` - Wine consultancy
- `services.tasting.*` - Wine tastings
- `services.private.*` - Private sommelier
- `services.menu.*` - Restaurant wine lists
- `services.cellar.*` - Wine cellar management

### Checkout
- `checkout.title`, `checkout.description`
- `checkout.customerInfo`, `checkout.deliveryInfo`
- `checkout.button`, `checkout.processing`
- `checkout.error`, `checkout.errorMessage`

### Blog
- `blog.subtitle`, `blog.allArticles`, `blog.readMore`
- `blog.categories.*`

### Forms
- `contact.title`, `contact.name`, `contact.email`
- `newsletter.title`, `newsletter.button`

### Subscription Tiers
- `services.subscription.tiers.selection.*`
- `services.subscription.tiers.cuvee.*`
- `services.subscription.tiers.prestige.*`
- `services.subscription.tiers.champagne.*`

---

## Mobile-Specific Translations

Some items have shorter versions for mobile:
```typescript
subscription: {
  title: 'Wijnabonnementen',  // Desktop
  shortTitle: 'Wijnen',       // Mobile
},
cellar: {
  title: 'Wijnkelder Beheer',
  shortTitle: 'Wijnkelder',
},
```

Usage:
```tsx
{item.mobileName || item.name}
```

---

## Language Persistence

Language is stored in localStorage and persists across sessions:
```typescript
// Automatic via i18next-browser-languagedetector (if added)
// Or manual:
localStorage.setItem('i18nextLng', 'en');
```

---

## Email Templates

Email content is also multilingual in `server/emails/`:
- `welcome-content.ts` - Newsletter welcome
- `order-confirmation-content.ts` - Order confirmation
- `cancellation-content.ts` - Cancellation emails

Pattern:
```typescript
export function getWelcomeContent(language: string) {
  const content = {
    nl: { subject: 'Welkom!', ... },
    en: { subject: 'Welcome!', ... },
    fr: { subject: 'Bienvenue!', ... },
  };
  return content[language] || content.nl;
}
```
