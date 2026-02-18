import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Award, ExternalLink, Sparkles } from 'lucide-react';
import { HreflangTags } from '@/components/HreflangTags';
import sommelierImage from '@assets/img_5602_1761590055681.webp';
import vineyardImage from '@assets/stock_images/vineyard_landscape_g_c6ae3eab.jpg';
import sfeerbeeldImage from '@assets/Sfeerbeeld_1763851069229.webp';
import artikelImage from '@assets/Artikel l_Avenir_1763851071929.webp';
import hlnImage from '@assets/sommelier-yentl-quintelier-vertelt-welke-wijn-je-best-bij-mos_1765476006906.webp';

export default function About() {
  const { t, i18n } = useTranslation();

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('about.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('about.description')} />
        <meta property="og:title" content={`${t('about.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('about.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/about" />
        <meta property="og:image" content={sommelierImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sommelierquintelier.com/about" />
      </Helmet>
      <HreflangTags path="/about" />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Breadcrumbs items={[{ label: t('breadcrumbs.about') }]} />
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <motion.div 
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={imageVariants}
                >
                  <img
                    src={sfeerbeeldImage}
                    alt="Yentl Quintelier met wijn"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    decoding="async"
                    data-testid="img-about-sfeerbeeld"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge 
                      className="relative px-4 py-2 text-sm bg-primary/90 backdrop-blur-sm overflow-visible"
                      data-testid="badge-about-award"
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
                  className="flex flex-col justify-center space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.h2 
                    className="text-3xl md:text-4xl font-light text-primary"
                    variants={fadeInUp}
                  >
                    {t('about.intro')}
                  </motion.h2>
                  
                  <motion.div 
                    className="flex items-center gap-4"
                    variants={fadeInUp}
                  >
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
                    <Sparkles className="w-4 h-4 text-primary/50" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg leading-relaxed text-muted-foreground"
                    variants={fadeInUp}
                  >
                    {t('about.paragraph1')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed text-muted-foreground"
                    variants={fadeInUp}
                  >
                    {t('about.paragraph2')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed text-muted-foreground"
                    variants={fadeInUp}
                  >
                    {t('about.paragraph3')}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed text-muted-foreground"
                    variants={fadeInUp}
                  >
                    {t('about.paragraph4')}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-light text-primary mb-8 text-center">
                  {t('about.featured')}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative bg-background border rounded-lg overflow-hidden shadow-lg hover-elevate transition-all">
                    <div className="absolute inset-0 opacity-30 pointer-events-none z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
                    </div>
                    
                    <img
                      src={artikelImage}
                      alt="Artikel L'Avenir: Yentl Quintelier"
                      className="w-full h-48 object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      data-testid="img-about-artikel"
                    />
                    <div className="p-6 relative z-20">
                      <Badge variant="secondary" className="mb-3 text-xs">
                        L'Avenir
                      </Badge>
                      <h3 className="text-xl font-light text-foreground mb-2">
                        {t('about.articleTitle')}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t('about.articleDescription')}
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://www.hln.be/eten/welke-wijn-serveer-je-bij-mosselen-sommelier-geeft-advies~aa84bcfb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    data-testid="link-hln-article"
                  >
                    <div className="relative bg-background border rounded-lg overflow-hidden shadow-lg hover-elevate transition-all h-full">
                      <div className="absolute inset-0 opacity-30 pointer-events-none z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
                      </div>
                      
                      <img
                        src={hlnImage}
                        alt="HLN Artikel: Wijn bij mosselen"
                        className="w-full h-48 object-cover"
                        loading="lazy"
                        decoding="async"
                        data-testid="img-about-hln"
                      />
                      <div className="p-6 relative z-20">
                        <Badge variant="secondary" className="mb-3 text-xs">
                          {t('about.hlnArticle.source')}
                        </Badge>
                        <h3 className="text-xl font-light text-foreground mb-2">
                          {t('about.hlnArticle.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {t('about.hlnArticle.description')}
                        </p>
                        <span className="inline-flex items-center text-sm text-primary font-medium">
                          {t('about.hlnArticle.cta')}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
