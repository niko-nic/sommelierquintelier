import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { InsertContactSubmission } from '@shared/schema';

const createContactSchema = (t: any) => z.object({
  name: z.string().min(2, t('contact.validation.nameRequired')),
  email: z.string().email(t('contact.validation.emailInvalid')),
  phone: z.string().optional(),
  message: z.string().min(10, t('contact.validation.messageRequired')),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

function ContactFormInner({ language }: { language: string }) {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  
  const schema = createContactSchema(t);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const payload: InsertContactSubmission = {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        language: i18n.language,
      };
      
      const response = await apiRequest('POST', '/api/contact', payload);
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
          firstname: variables.name.split(' ')[0],
          lastname: variables.name.split(' ').slice(1).join(' ') || undefined,
        }]);
        
        // Track a virtual pageview for form submission with language in URL
        _hsq.push(['setPath', `/form-submission/contact-${i18n.language}`]);
        _hsq.push(['trackPageView']);
      }
      
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message'),
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.message'),
        variant: 'destructive',
      });
      console.error('Contact form error:', error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <form 
      id={`contact-form-${language}`}
      onSubmit={form.handleSubmit(onSubmit)} 
      className={`contact-form-${language} space-y-6`}
      data-form-id={`contact-form-${language}`}
      data-language={language}
    >
          {/* Hidden fields to make DOM structure unique for HubSpot */}
          <input type="hidden" name="form_language" value={language} />
          <input type="hidden" name="form_type" value="contact" />
          
          <div>
            <Label htmlFor={`contact-name-${language}`} className="sr-only">
              {t('contact.name')}
            </Label>
            <Input
              id={`contact-name-${language}`}
              type="text"
              autoComplete="name"
              placeholder={t('contact.name')}
              {...form.register('name')}
              data-testid="input-contact-name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive mt-1" data-testid="error-contact-name">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor={`contact-email-${language}`} className="sr-only">
              {t('contact.email')}
            </Label>
            <Input
              id={`contact-email-${language}`}
              type="email"
              autoComplete="email"
              placeholder={t('contact.email')}
              {...form.register('email')}
              data-testid="input-contact-email"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive mt-1" data-testid="error-contact-email">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor={`contact-phone-${language}`} className="sr-only">
              {t('contact.phone')}
            </Label>
            <Input
              id={`contact-phone-${language}`}
              type="tel"
              autoComplete="tel"
              placeholder={t('contact.phone')}
              {...form.register('phone')}
              data-testid="input-contact-phone"
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-destructive mt-1" data-testid="error-contact-phone">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor={`contact-message-${language}`} className="sr-only">
              {t('contact.message')}
            </Label>
            <Textarea
              id={`contact-message-${language}`}
              placeholder={t('contact.message')}
              rows={5}
              {...form.register('message')}
              data-testid="input-contact-message"
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive mt-1" data-testid="error-contact-message">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full uppercase tracking-wider"
            disabled={mutation.isPending}
            data-testid="button-contact-submit"
          >
            {mutation.isPending ? t('contact.sending') : t('contact.submit')}
          </Button>
        </form>
  );
}

export function ContactForm() {
  const { i18n } = useTranslation();

  return (
    <Card>
      <CardContent className="p-8">
        {/* Render ALL three forms, but only show the active language */}
        <div style={{ display: i18n.language === 'nl' ? 'block' : 'none' }}>
          <ContactFormInner language="nl" />
        </div>
        <div style={{ display: i18n.language === 'en' ? 'block' : 'none' }}>
          <ContactFormInner language="en" />
        </div>
        <div style={{ display: i18n.language === 'fr' ? 'block' : 'none' }}>
          <ContactFormInner language="fr" />
        </div>
      </CardContent>
    </Card>
  );
}
