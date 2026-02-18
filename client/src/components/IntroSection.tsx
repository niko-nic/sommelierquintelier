import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function IntroSection() {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-primary italic"
            variants={fadeInUp}
            data-testid="text-intro-opening"
          >
            {t('intro.opening')}
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-4"
            variants={fadeInUp}
          >
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
            <Sparkles className="w-4 h-4 text-primary/50" />
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-foreground"
            variants={fadeInUp}
            data-testid="text-intro-paragraph1"
          >
            {t('intro.paragraph1')}
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-muted-foreground"
            variants={fadeInUp}
            data-testid="text-intro-paragraph2"
          >
            {t('intro.paragraph2')}
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-muted-foreground italic font-light"
            variants={fadeInUp}
            data-testid="text-intro-paragraph3"
          >
            {t('intro.paragraph3')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
