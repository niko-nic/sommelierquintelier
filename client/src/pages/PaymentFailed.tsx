import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { XCircle, RefreshCw, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PaymentFailed() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('paymentFailed.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('paymentFailed.subtitle')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="w-full max-w-2xl px-6 py-12 my-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <XCircle 
                  className="w-24 h-24 text-destructive" 
                  strokeWidth={1.5}
                  data-testid="icon-failed"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="absolute inset-0 border-4 border-destructive rounded-full"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-3"
              data-testid="text-title"
            >
              {t('paymentFailed.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
              data-testid="text-subtitle"
            >
              {t('paymentFailed.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 mb-8 text-left">
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t('thankYou.payment')}
                  </span>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-semibold text-destructive" data-testid="text-status">
                      {t('paymentFailed.statusText')}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground" data-testid="text-explanation">
                  {t('paymentFailed.explanation')}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link href="/subscriptions">
                <Button size="lg" className="min-w-40" data-testid="button-try-again">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t('paymentFailed.tryAgainText')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="min-w-40" data-testid="button-contact">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('paymentFailed.contactText')}
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-muted-foreground"
              data-testid="text-need-help"
            >
              {t('paymentFailed.needHelp')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
