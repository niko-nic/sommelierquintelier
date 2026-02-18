import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface ServiceSchemaProps {
  serviceType: 'consultancy' | 'tasting' | 'private' | 'menu' | 'cellar';
}

export function ServiceSchema({ serviceType }: ServiceSchemaProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const serviceUrls = {
    consultancy: 'wine-consultancy',
    tasting: 'wine-tastings',
    private: 'private-sommelier',
    menu: 'custom-wine-list',
    cellar: 'wine-cellar-management'
  };

  const serviceTitles = {
    consultancy: t('services.consultancy.title'),
    tasting: t('services.tasting.title'),
    private: t('services.private.title'),
    menu: t('services.menu.title'),
    cellar: t('services.cellar.title')
  };

  const serviceDescriptions = {
    consultancy: t('services.consultancy.intro'),
    tasting: t('services.tasting.intro'),
    private: t('services.private.intro'),
    menu: t('services.menu.intro'),
    cellar: t('services.cellar.intro')
  };

  const serviceKeyTakeaways = {
    consultancy: t('services.consultancy.keyTakeaways', { returnObjects: true }) as string[],
    tasting: t('services.tasting.keyTakeaways', { returnObjects: true }) as string[],
    private: t('services.private.keyTakeaways', { returnObjects: true }) as string[],
    menu: t('services.menu.keyTakeaways', { returnObjects: true }) as string[],
    cellar: t('services.cellar.keyTakeaways', { returnObjects: true }) as string[]
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://sommelierquintelier.com/services/${serviceUrls[serviceType]}#service`,
    "serviceType": serviceTitles[serviceType],
    "name": serviceTitles[serviceType],
    "description": serviceDescriptions[serviceType],
    "provider": {
      "@type": "Person",
      "@id": "https://sommelierquintelier.com/#yentl",
      "name": "Yentl Quintelier",
      "jobTitle": "Certified Sommelier",
      "award": "Sommelier of the Year Belgium 2022"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": serviceTitles[serviceType]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Flanders"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wallonia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Brussels"
      }
    ],
    "availableLanguage": [
      {
        "@type": "Language",
        "name": "Dutch",
        "alternateName": "nl"
      },
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "French",
        "alternateName": "fr"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "eligibleRegion": {
        "@type": "Country",
        "name": "Belgium"
      },
      "seller": {
        "@type": "Organization",
        "name": "Sommelier Quintelier"
      }
    },
    "additionalProperty": serviceKeyTakeaways[serviceType].map((takeaway: string, index: number) => ({
      "@type": "PropertyValue",
      "name": `Feature ${index + 1}`,
      "value": takeaway
    })),
    "url": `https://sommelierquintelier.com/services/${serviceUrls[serviceType]}`,
    "category": {
      "nl": "Wijndiensten",
      "en": "Wine Services",
      "fr": "Services de Vin"
    }[currentLanguage]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
