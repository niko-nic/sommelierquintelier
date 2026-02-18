import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Wine, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('notFound.subtitle')} />
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
                <Wine 
                  className="w-24 h-24 text-muted-foreground/40" 
                  strokeWidth={1.5}
                  data-testid="icon-wine-glass"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                  style={{ originY: 1 }}
                  className="absolute inset-x-0 bottom-0 h-16 bg-primary/20 rounded-b-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-3"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                {t('notFound.errorCode')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-3"
              data-testid="text-title"
            >
              {t('notFound.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground mb-4"
              data-testid="text-subtitle"
            >
              {t('notFound.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base text-muted-foreground mb-12 max-w-md mx-auto"
              data-testid="text-message"
            >
              {t('notFound.message')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="min-w-40" data-testid="button-home" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  {t('notFound.backToHome')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-40" data-testid="button-contact" asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('notFound.contactUs')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
