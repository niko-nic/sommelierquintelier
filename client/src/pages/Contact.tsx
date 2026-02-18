import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { HreflangTags } from '@/components/HreflangTags';
import { MapPin, Mail, Sparkles } from 'lucide-react';
import vineyardImage from '@assets/stock_images/vineyard_landscape_g_c6ae3eab.jpg';

export default function Contact() {
  const { t, i18n } = useTranslation();

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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('contact.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('contact.info')} />
        <meta property="og:title" content={`${t('contact.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('contact.info')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/contact" />
        <meta property="og:image" content={vineyardImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sommelierquintelier.com/contact" />
      </Helmet>
      <HreflangTags path="/contact" />

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
              <Breadcrumbs items={[{ label: t('breadcrumbs.contact') }]} />
            </motion.div>
            
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif mb-6"
                variants={fadeInUp}
              >
                {t('contact.title')}
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-4 my-8"
                variants={fadeInUp}
              >
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-4 h-4 text-primary/50" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                {t('contact.info')}
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <ContactForm />
              </motion.div>

              <motion.div 
                className="space-y-8"
                variants={fadeInUp}
              >
                <div 
                  className="flex items-start space-x-4"
                  data-testid="contact-location"
                >
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-light mb-2">Locatie</h3>
                    <p className="text-muted-foreground text-lg">België</p>
                  </div>
                </div>

                <div 
                  className="flex items-start space-x-4"
                  data-testid="contact-email"
                >
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-light mb-2">Email</h3>
                    <a 
                      href="mailto:info@yentlquintelier.com" 
                      className="text-muted-foreground text-lg hover:text-primary transition-colors"
                    >
                      info@yentlquintelier.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
