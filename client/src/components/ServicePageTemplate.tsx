import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AuthorBioBox } from '@/components/AuthorBioBox';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

interface ServicePageTemplateProps {
  serviceKey: 'consultancy' | 'tasting' | 'private' | 'menu' | 'cellar';
  featuredImage: string;
  featuredImageAlt: string;
  children?: ReactNode;
}

export function ServicePageTemplate({ 
  serviceKey, 
  featuredImage,
  featuredImageAlt,
  children
}: ServicePageTemplateProps) {
  const { t, i18n } = useTranslation();

  const title = t(`services.${serviceKey}.title`);
  const subtitle = t(`services.${serviceKey}.subtitle`);
  const intro = t(`services.${serviceKey}.intro`);
  const keyTakeaways = t(`services.${serviceKey}.keyTakeaways`, { returnObjects: true }) as string[];
  
  const imageUrl = featuredImage;

  const serviceUrls = {
    consultancy: 'wine-consultancy',
    tasting: 'wine-tastings',
    private: 'private-sommelier',
    menu: 'custom-wine-list',
    cellar: 'wine-cellar-management'
  };

  return (
    <>
      <Helmet>
        <title>{title} - Sommelier Quintelier</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content={`${title} - Sommelier Quintelier`} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://sommelierquintelier.com/services/${serviceUrls[serviceKey]}`} />
        <meta property="og:image" content={imageUrl} />
        <link rel="canonical" href={`https://sommelierquintelier.com/services/${serviceUrls[serviceKey]}`} />
      </Helmet>
      <ServiceSchema serviceType={serviceKey} />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://sommelierquintelier.com/' },
          { name: t('nav.services'), url: 'https://sommelierquintelier.com/services' },
          { name: title, url: `https://sommelierquintelier.com/services/${serviceUrls[serviceKey]}` }
        ]} 
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-8">
          <Breadcrumbs 
            items={[
              { label: t('nav.services'), href: '/services' },
              { label: title }
            ]} 
          />
          
          <div className="mt-12 mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-6 font-medium">
              Sommelier Quintelier
            </p>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
              data-testid="text-service-title"
            >
              {title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <Sparkles className="w-5 h-5 text-primary/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            
            <p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
              data-testid="text-service-subtitle"
            >
              {subtitle}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg leading-relaxed text-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1" data-testid="text-service-intro">
              {intro}
            </p>
          </div>

          <div className="relative bg-card border border-border/50 p-10 mb-16 rounded-sm" data-testid="card-key-takeaways">
            <div className="absolute -top-3 left-8 bg-background px-4">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                {t('blog.keyTakeaways')}
              </span>
            </div>
            <ul className="space-y-5 mt-4">
              {keyTakeaways.map((takeaway, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 group"
                  data-testid={`item-takeaway-${index}`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {children}

          <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-12 mb-16 text-center rounded-sm" data-testid="section-cta">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 mt-4" data-testid="text-cta-title">
              {t('contact.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-cta-description">
              {t('contact.info')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="group px-8" data-testid="button-cta-contact">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <AuthorBioBox />
        </div>

        <Footer />
      </div>
    </>
  );
}
