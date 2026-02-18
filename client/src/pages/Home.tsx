import React from "react";
// andere imports...

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { IntroSection } from '@/components/IntroSection';
import { FeaturedServicesSection } from '@/components/FeaturedServicesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BlogSection } from '@/components/BlogSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { HreflangTags } from '@/components/HreflangTags';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
const heroImage = "https://picsum.photos/1600/900?wine";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={i18n.language === 'nl' ? 'privé sommelier, sommelier België, wijnadvies, wijndegustatie, wijnproeverij, exclusieve wijnervaringen' : i18n.language === 'fr' ? 'sommelier privé, sommelier Belgique, conseil en vin, dégustation de vin, expériences vinicoles exclusives' : 'private sommelier, sommelier Belgium, wine advice, wine tasting, exclusive wine experiences'} />
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={i18n.language === 'nl' ? 'nl_BE' : i18n.language === 'fr' ? 'fr_BE' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.title')} />
        <meta name="twitter:description" content={t('seo.description')} />
        <link rel="canonical" href="https://sommelierquintelier.com/" />
      </Helmet>
      <HreflangTags path="/" />
      <StructuredData />
      <WebSiteSchema />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <IntroSection />
          <FeaturedServicesSection />
          <ServicesSection />
          <BlogSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
