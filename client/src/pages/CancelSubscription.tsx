import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

const createCancelRequestSchema = (t: any) => z.object({
  email: z.string().email(t('cancelSubscription.emailInvalid'))
});

type CancelRequestFormData = z.infer<ReturnType<typeof createCancelRequestSchema>>;

export default function CancelSubscription() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<CancelRequestFormData>({
    resolver: zodResolver(createCancelRequestSchema(t)),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: CancelRequestFormData) => {
    try {
      setIsSubmitting(true);

      const response = await apiRequest('POST', '/api/subscription/cancel-request', {
        email: data.email
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to request cancellation');
      }

      setIsSuccess(true);
      toast({
        title: t('cancelSubscription.requestSent'),
        description: t('cancelSubscription.checkEmail'),
      });
    } catch (error: any) {
      console.error('Error requesting cancellation:', error);
      toast({
        title: t('cancelSubscription.error'),
        description: error.message || t('cancelSubscription.errorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('cancelSubscription.pageTitle')} - Sommelier Quintelier</title>
        <meta name="description" content={t('cancelSubscription.pageDescription')} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 px-4 mt-[16px] mb-[16px] pt-[128px] pb-[128px]">
          <div className="max-w-2xl mx-auto">
            {!isSuccess ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    {t('cancelSubscription.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('cancelSubscription.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('cancelSubscription.emailLabel')}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder={t('cancelSubscription.emailPlaceholder')}
                                data-testid="input-cancel-email"
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-muted/50 p-4 rounded-md space-y-2">
                        <p className="text-sm font-medium">{t('cancelSubscription.important')}</p>
                        <p className="text-sm text-muted-foreground">{t('cancelSubscription.importantNote')}</p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        data-testid="button-request-cancel"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t('cancelSubscription.processing')}
                          </>
                        ) : (
                          t('cancelSubscription.sendLink')
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                    {t('cancelSubscription.successTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('cancelSubscription.successMessage')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('cancelSubscription.linkExpiry')}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
