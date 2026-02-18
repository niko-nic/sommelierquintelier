import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import sommelierImage from '@assets/img_5602_1761590055681.webp';

export function AboutSection() {
  const { t } = useTranslation();

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img
              src={sommelierImage}
              alt="Yentl Quintelier"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              data-testid="img-sommelier"
            />
            <div className="absolute bottom-4 left-4">
              <Badge 
                className="relative px-4 py-2 text-sm bg-primary/90 backdrop-blur-sm overflow-visible"
                data-testid="badge-award"
              >
                {/* Shimmer effect layer */}
                <span className="absolute inset-0 overflow-hidden rounded-sm">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </span>
                <Award className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">{t('about.award')}</span>
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-light">
              In Vino Veritas
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <Button
              size="lg"
              className="uppercase tracking-wider"
              data-testid="button-about-cta"
              asChild
            >
              <Link href="/about">
                {t('about.cta')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
