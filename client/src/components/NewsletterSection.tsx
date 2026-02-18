import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { InsertNewsletterSubscription } from '@shared/schema';

const createNewsletterSchema = (t: any) => z.object({
  email: z.string().email(t('newsletter.validation.emailInvalid')),
});

type NewsletterFormData = z.infer<ReturnType<typeof createNewsletterSchema>>;

function NewsletterForm({ language }: { language: string }) {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  
  const schema = createNewsletterSchema(t);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      const payload: InsertNewsletterSubscription = {
        email: data.email,
        language: i18n.language,
      };
      
      const response = await apiRequest('POST', '/api/newsletter', payload);
      return await response.json();
    },
    onSuccess: (data, variables) => {
      // HubSpot tracking (gratis versie) - identify contact en track pageview
      if (typeof window !== 'undefined' && (window as any)._hsq) {
        const _hsq = (window as any)._hsq;
        
        // Identify the contact with language property
        _hsq.push(['identify', {
          email: variables.email,
          language: i18n.language,
        }]);
        
        // Track a virtual pageview for form submission with language in URL
        _hsq.push(['setPath', `/form-submission/newsletter-${i18n.language}`]);
        _hsq.push(['trackPageView']);
      }
      
      toast({
        title: t('newsletter.success.title'),
        description: t('newsletter.success.message'),
      });
      form.reset();
    },
    onError: async (error: any) => {
      let isAlreadySubscribed = false;
      let errorMessage = t('newsletter.error.message');
      
      if (error instanceof Response) {
        try {
          const errorData = await error.json();
          isAlreadySubscribed = error.status === 409;
          if (!isAlreadySubscribed && errorData.message) {
            errorMessage = errorData.message;
          }
        } catch {
          // If JSON parsing fails, use default error message
        }
      }
      
      toast({
        title: t('newsletter.error.title'),
        description: isAlreadySubscribed 
          ? t('newsletter.error.alreadySubscribed')
          : errorMessage,
        variant: 'destructive',
      });
      console.error('Newsletter subscription error:', error);
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    mutation.mutate(data);
  };

  return (
    <form 
      id={`newsletter-form-${language}`}
      onSubmit={form.handleSubmit(onSubmit)} 
      className={`newsletter-form-${language} flex flex-col sm:flex-row gap-4 mb-4`}
      data-form-id={`newsletter-${language}`}
      data-language={language}
    >
      {/* Hidden field to make DOM structure unique for HubSpot */}
      <input type="hidden" name="form_language" value={language} />
      <input type="hidden" name="form_type" value="newsletter" />
      
      <div className="flex-1">
        <Input
          id={`newsletter-email-${language}`}
          type="email"
          autoComplete="email"
          placeholder={t('newsletter.placeholder')}
          {...form.register('email')}
          disabled={mutation.isPending}
          data-testid="input-newsletter-email"
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1" data-testid="error-newsletter-email">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        className="uppercase tracking-wider"
        disabled={mutation.isPending}
        data-testid="button-newsletter-submit"
      >
        {mutation.isPending ? t('newsletter.subscribing') : t('newsletter.cta')}
      </Button>
    </form>
  );
}

export function NewsletterSection() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* Render ALL three forms, but only show the active language */}
      <div style={{ display: i18n.language === 'nl' ? 'block' : 'none' }}>
        <NewsletterForm language="nl" />
      </div>
      <div style={{ display: i18n.language === 'en' ? 'block' : 'none' }}>
        <NewsletterForm language="en" />
      </div>
      <div style={{ display: i18n.language === 'fr' ? 'block' : 'none' }}>
        <NewsletterForm language="fr" />
      </div>

      <p className="text-sm text-muted-foreground">{t('newsletter.privacy')}</p>
    </div>
  );
}
