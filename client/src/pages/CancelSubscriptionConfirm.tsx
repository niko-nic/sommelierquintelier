import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Loader2, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function CancelSubscriptionConfirm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Extract token from URL using wouter location
    const currentPath = window.location.pathname + window.location.search;
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('token');
    
    if (!tokenParam) {
      setError(t('cancelSubscription.noToken'));
      setIsConfirming(false);
    } else {
      setToken(tokenParam);
    }
  }, [t]);

  const handleConfirm = async () => {
    if (!token) return;

    try {
      setIsConfirming(true);
      setError(null);

      const response = await apiRequest('POST', '/api/subscription/cancel-confirm', {
        token
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to cancel subscription');
      }

      setIsSuccess(true);
      toast({
        title: t('cancelSubscription.cancelSuccess'),
        description: t('cancelSubscription.cancelSuccessMessage'),
      });
    } catch (error: any) {
      console.error('Error confirming cancellation:', error);
      const errorMessage = error.message || t('cancelSubscription.confirmError');
      setError(errorMessage);
      toast({
        title: t('cancelSubscription.error'),
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('cancelSubscription.confirmTitle')} - Sommelier Quintelier</title>
        <meta name="description" content={t('cancelSubscription.confirmDescription')} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            {isSuccess ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                    {t('cancelSubscription.cancelSuccess')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('cancelSubscription.cancelSuccessMessage')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('cancelSubscription.cancelSuccessDetail')}
                  </p>
                  <Button
                    onClick={() => setLocation('/')}
                    className="w-full"
                    data-testid="button-back-home"
                  >
                    {t('cancelSubscription.backHome')}
                  </Button>
                </CardContent>
              </Card>
            ) : error ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2 text-destructive">
                    <XCircle className="w-6 h-6" />
                    {t('cancelSubscription.error')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{error}</p>
                  <Button
                    onClick={() => setLocation('/cancel-subscription')}
                    variant="outline"
                    className="w-full"
                    data-testid="button-request-new-link"
                  >
                    {t('cancelSubscription.requestNewLink')}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    {t('cancelSubscription.confirmTitle')}
                  </CardTitle>
                  <CardDescription>
                    {t('cancelSubscription.confirmWarning')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-destructive/10 p-4 rounded-md space-y-2">
                    <p className="text-sm font-medium text-destructive">
                      {t('cancelSubscription.confirmWarningTitle')}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>{t('cancelSubscription.confirmPoint1')}</li>
                      <li>{t('cancelSubscription.confirmPoint2')}</li>
                      <li>{t('cancelSubscription.confirmPoint3')}</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleConfirm}
                      variant="destructive"
                      disabled={isConfirming || !token}
                      className="flex-1"
                      data-testid="button-confirm-cancel"
                    >
                      {isConfirming ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t('cancelSubscription.processing')}
                        </>
                      ) : (
                        t('cancelSubscription.confirmButton')
                      )}
                    </Button>
                    <Button
                      onClick={() => setLocation('/')}
                      variant="outline"
                      disabled={isConfirming}
                      className="flex-1"
                      data-testid="button-keep-subscription"
                    >
                      {t('cancelSubscription.keepSubscription')}
                    </Button>
                  </div>
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
