import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('thankYou.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('thankYou.subtitle')} />
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
                <CheckCircle2 
                  className="w-24 h-24 text-primary" 
                  strokeWidth={1.5}
                  data-testid="icon-success"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="absolute inset-0 border-4 border-primary rounded-full"
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
              {t('thankYou.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
              data-testid="text-subtitle"
            >
              {t('thankYou.subtitle')}
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
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {t('thankYou.completed')}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3" data-testid="text-confirmation">
                  {t('thankYou.confirmation')}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-email-sent">
                  {t('thankYou.emailSent')}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-lg font-semibold mb-4" data-testid="text-next-steps">
                {t('thankYou.nextStepsTitle')}
              </h2>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">{t('thankYou.step1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground">{t('thankYou.step2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground">{t('thankYou.step3')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <Button size="lg" className="min-w-40" data-testid="button-home">
                  <Home className="w-4 h-4 mr-2" />
                  {t('thankYou.backToHome')}
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="min-w-40" data-testid="button-blog">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t('thankYou.exploreBlog')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
