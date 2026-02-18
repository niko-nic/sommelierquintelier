# Coding Conventions - Sommelier Quintelier

## TypeScript Guidelines

### Type Definitions
- Database types in `shared/schema.ts`
- Frontend types in `client/src/types/`
- Use Zod for runtime validation

```typescript
// Schema pattern
export const myTable = pgTable("my_table", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
});

export const insertMyTableSchema = createInsertSchema(myTable).omit({
  id: true,
});

export type InsertMyTable = z.infer<typeof insertMyTableSchema>;
export type MyTable = typeof myTable.$inferSelect;
```

---

## Component Structure

### Page Components
```tsx
export default function PageName() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('page.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('page.description')} />
      </Helmet>

      <Header />
      <main>
        {/* Page content */}
      </main>
      <Footer />
    </>
  );
}
```

### Feature Components
```tsx
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  return (
    <div data-testid="component-name">
      {/* Component content */}
    </div>
  );
}
```

---

## Forms (react-hook-form + Zod)

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

type FormData = z.infer<typeof formSchema>;

export function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // Handle submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Data Fetching (TanStack Query)

### Queries
```tsx
const { data, isLoading } = useQuery({
  queryKey: ['/api/items', id],
});
```

### Mutations
```tsx
import { apiRequest, queryClient } from '@/lib/queryClient';

const mutation = useMutation({
  mutationFn: async (data: FormData) => {
    const res = await apiRequest('POST', '/api/items', data);
    return res.json();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['/api/items'] });
  },
});
```

---

## API Routes Pattern

```typescript
app.post("/api/resource", async (req, res) => {
  try {
    // 1. Validate input
    const validatedData = insertSchema.parse(req.body);
    
    // 2. Business logic via storage
    const result = await storage.createResource(validatedData);
    
    // 3. Return response
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error message" });
  }
});
```

---

## Translations (i18next)

### Using translations
```tsx
const { t, i18n } = useTranslation();

// Simple key
{t('nav.home')}

// With namespace
{t('services.subscription.title')}

// Change language
i18n.changeLanguage('en');
```

### Adding new translations
In `client/src/i18n.ts`, add to all three language objects (nl, en, fr):
```typescript
resources: {
  nl: { translation: { myKey: 'Dutch text' } },
  en: { translation: { myKey: 'English text' } },
  fr: { translation: { myKey: 'French text' } },
}
```

---

## Test IDs

Add `data-testid` to interactive and meaningful elements:
```tsx
// Interactive elements
<Button data-testid="button-submit">Submit</Button>
<Input data-testid="input-email" />
<Link data-testid="link-profile">Profile</Link>

// Display elements
<span data-testid="text-username">{username}</span>
<div data-testid="status-payment">{status}</div>

// Dynamic elements
<Card data-testid={`card-product-${productId}`}>...</Card>
```

---

## Import Aliases

```typescript
// Components
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Shared types
import { type User } from '@shared/schema';

// Assets
import logoImage from '@assets/logo.png';
```

---

## File Naming

- Components: PascalCase (`MyComponent.tsx`)
- Utilities: camelCase (`blogHelpers.ts`)
- Pages: PascalCase (`About.tsx`)
- Hooks: camelCase with `use-` prefix (`use-toast.ts`)
