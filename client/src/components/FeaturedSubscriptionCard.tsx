import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wine, ArrowRight } from 'lucide-react';

export function FeaturedSubscriptionCard() {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-md"
      data-testid="featured-subscription-card"
    >
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="flex items-center gap-2 mb-4">
          <Wine className="h-5 w-5 text-primary" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
            {t('services.subscription.featured.tagline')}
          </span>
        </div>

        <h3 
          className="text-2xl md:text-3xl font-serif text-white mb-3"
          data-testid="text-featured-title"
        >
          {t('services.subscription.featured.title')}
        </h3>

        <p 
          className="text-white/80 mb-6 leading-relaxed"
          data-testid="text-featured-description"
        >
          {t('services.subscription.featured.description')}
        </p>

        <div className="mb-6 pb-6 border-b border-white/10">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs text-white/60 uppercase tracking-wider">
              {t('services.subscription.featured.priceFrom')}
            </span>
            <span 
              className="text-3xl font-light text-white"
              data-testid="text-featured-price"
            >
              {t('services.subscription.featured.price3')}
            </span>
            <span className="text-sm text-white/60">
              {t('services.subscription.featured.perMonth')}
            </span>
          </div>
          <p className="text-xs text-white/50">
            {t('services.subscription.featured.bottles')}
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {(t('services.subscription.featured.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start gap-3"
              data-testid={`benefit-${index}`}
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-white/90 leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link href="/subscriptions">
          <Button
            className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group"
            size="lg"
            data-testid="button-featured-cta"
          >
            {t('services.subscription.featured.cta')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
