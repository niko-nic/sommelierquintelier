# Design System - Sommelier Quintelier

## Brand Identity

**Aesthetic**: Luxury, refined, elegant wine industry presentation
**Typography**: Fraunces (serif) for headings, system fonts for body

---

## Color Palette

Defined in `client/src/index.css`:

### Primary Colors
```css
--primary: 25 30% 28%;        /* Deep wine/burgundy */
--primary-foreground: 0 0% 98%;
```

### Background & Surface
```css
--background: 30 20% 98%;     /* Warm off-white */
--card: 30 15% 96%;           /* Subtle cream */
--muted: 30 10% 90%;
```

### Accent
```css
--accent: 35 30% 92%;         /* Warm gold tint */
```

---

## Typography

### Headings
- Font: Fraunces (serif)
- Weight: 600-700
- Tracking: Normal to tight

### Body Text
- Font: System fonts
- Size: Base 16px
- Line height: 1.6-1.8

### Luxury Elements
```css
/* First letter styling for paragraphs */
.luxury-first-letter::first-letter {
  font-size: 3em;
  font-family: 'Fraunces', serif;
  float: left;
  line-height: 0.8;
  margin-right: 0.1em;
  color: hsl(var(--primary));
}
```

---

## Decorative Elements

### Sparkles Divider
Used consistently across page headers:
```tsx
import { Sparkles } from 'lucide-react';

<div className="flex items-center justify-center gap-4 my-6">
  <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
  <Sparkles className="w-4 h-4 text-primary/40" />
  <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
</div>
```

### Section Borders
```css
border-t border-border/30
```

---

## Component Patterns

### Page Headers
```tsx
<motion.div className="text-center mb-12">
  <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
    {title}
  </h1>
  {/* Decorative divider */}
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
    <Sparkles className="w-4 h-4 text-primary/40" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
  </div>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    {subtitle}
  </p>
</motion.div>
```

### Cards
Use shadcn/ui Card component:
```tsx
<Card className="p-6">
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### Buttons
```tsx
<Button variant="default">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>
<Button variant="ghost">Tertiary Action</Button>
```

---

## Animation Patterns

Using Framer Motion:

### Fade In Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Staggered Children
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.4 }}
>
```

---

## Spacing System

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Inline elements |
| sm | 8px | Tight spacing |
| md | 16px | Default spacing |
| lg | 24px | Section padding |
| xl | 32px | Large gaps |
| 2xl | 48px | Section margins |

---

## Responsive Breakpoints

Following Tailwind defaults:
- `sm`: 640px
- `md`: 768px (mobile menu breakpoint)
- `lg`: 1024px
- `xl`: 1280px

---

## Icon Usage

- **UI Icons**: lucide-react
- **Company Logos**: react-icons/si

```tsx
import { Wine, Sparkles, ChevronDown } from 'lucide-react';
```

---

## Image Guidelines

- **Hero Images**: Full-width with dark gradient overlay for text readability
- **Gallery**: Aspect ratio maintained, lazy loading
- **Service Pages**: No hero images, clean title on white background
