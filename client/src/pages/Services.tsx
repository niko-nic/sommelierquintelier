import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServicesSection } from '@/components/ServicesSection';
import { HreflangTags } from '@/components/HreflangTags';
import { Sparkles } from 'lucide-react';
import vineyardImage from '@assets/stock_images/vineyard_landscape_g_c6ae3eab.jpg';

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('services.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('services.seo.description')} />
        <meta property="og:title" content={`${t('services.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('services.seo.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/services" />
        <meta property="og:image" content={vineyardImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sommelierquintelier.com/services" />
      </Helmet>
      <HreflangTags path="/services" />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: t('nav.services') }]} />
            </motion.div>
            
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif mb-6">
                {t('services.title')}
              </h1>
              
              <div className="flex items-center justify-center gap-4 my-8">
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-4 h-4 text-primary/50" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('services.subtitle')}
              </p>
            </motion.div>
          </div>

          <ServicesSection showAll={true} />
        </main>
        <Footer />
      </div>
    </>
  );
}
