import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import tastingImage from '@assets/Wijndegustatie (1)_1763863386138.webp';
import menuImage from '@assets/Samengestelde_Wijnkaart_1763863777476.webp';
import cellarImage from '@assets/download_1763870541705.webp';

export function FeaturedServicesSection() {
  const { t } = useTranslation();

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-32">
          {/* Service 1 - Abonnementen - Expérience Prestige Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-primary/30 shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              data-testid="card-prestige-subscription"
            >
              {/* Continuous shimmer effect */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Content - Left */}
                <div className="relative z-10 p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    <h3 className="text-2xl md:text-3xl font-light italic text-primary">
                      {t('services.subscription.tiers.prestige.name')}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-white/60 mb-6 italic">
                    {t('services.subscription.tiers.prestige.tagline')}
                  </p>

                  {/* Description */}
                  <p className="hidden md:block text-base text-white/90 leading-relaxed">
                    {t('services.subscription.tiers.prestige.description')}
                  </p>
                </div>

                {/* Image - Right */}
                <div className="relative h-full min-h-[300px]">
                  <img
                    src={cellarImage}
                    alt="Premium Wijnkelder"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    data-testid="img-prestige-cellar"
                  />
                  {/* Dark overlay for better text contrast on the left */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="text-4xl md:text-5xl font-light italic text-primary">
                {t('services.subscription.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.subscription.body')}
              </p>
              <Link href="/subscriptions">
                <Button variant="ghost" className="group p-0 h-auto hover:bg-transparent" data-testid="button-featured-subscription">
                  <span className="uppercase tracking-wider text-sm">{t('services.moreInfo')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Service 2 - Wijndegustaties - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="space-y-6 lg:order-1 order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-light italic text-primary">
                {t('services.tasting.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.tastingBody')}
              </p>
              <Link href="/services/wine-tastings">
                <Button variant="ghost" className="group p-0 h-auto hover:bg-transparent" data-testid="button-featured-tasting">
                  <span className="uppercase tracking-wider text-sm">{t('services.moreInfo')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="relative lg:order-2 order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <img
                src={tastingImage}
                alt="Wijndegustaties"
                className="w-full h-auto shadow-lg"
                loading="lazy"
                width="1200"
                height="800"
                data-testid="img-featured-tasting"
              />
            </motion.div>
          </div>

          {/* Service 3 - Wijnkaart op Maat - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <img
                src={menuImage}
                alt="Wijnkaart op Maat"
                className="w-full h-auto shadow-lg"
                loading="lazy"
                width="1200"
                height="800"
                data-testid="img-featured-menu"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="text-4xl md:text-5xl font-light italic text-primary">
                {t('services.menu.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('services.menuBody')}
              </p>
              <Link href="/services/custom-wine-list">
                <Button variant="ghost" className="group p-0 h-auto hover:bg-transparent" data-testid="button-featured-menu">
                  <span className="uppercase tracking-wider text-sm">{t('services.moreInfo')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
