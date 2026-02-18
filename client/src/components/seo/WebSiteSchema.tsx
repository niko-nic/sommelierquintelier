import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function WebSiteSchema() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sommelierquintelier.com/#website",
    "url": "https://sommelierquintelier.com",
    "name": "Sommelier Quintelier",
    "description": {
      "nl": "Professionele wijnadvies en sommelierdiensten in België. Sommelier of the Year 2022. Wijnabonnementen, degustaties, consultancy en kelderbeheer.",
      "en": "Professional wine consulting and sommelier services in Belgium. Sommelier of the Year 2022. Wine subscriptions, tastings, consultancy and cellar management.",
      "fr": "Conseil en vin professionnel et services de sommelier en Belgique. Sommelier de l'année 2022. Abonnements vin, dégustations, consultance et gestion de cave."
    }[currentLanguage],
    "inLanguage": ["nl", "en", "fr"],
    "publisher": {
      "@type": "Organization",
      "@id": "https://sommelierquintelier.com/#organization",
      "name": "Sommelier Quintelier",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sommelierquintelier.com/favicon.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sommelierquintelier.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": {
      "nl": "Hoofdnavigatie",
      "en": "Main Navigation",
      "fr": "Navigation Principale"
    }[currentLanguage],
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": {
          "nl": "Over",
          "en": "About",
          "fr": "À propos"
        }[currentLanguage],
        "url": "https://sommelierquintelier.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "name": {
          "nl": "Diensten",
          "en": "Services",
          "fr": "Services"
        }[currentLanguage],
        "url": "https://sommelierquintelier.com/services"
      },
      {
        "@type": "SiteNavigationElement",
        "name": {
          "nl": "Wijnabonnementen",
          "en": "Wine Subscriptions",
          "fr": "Abonnements Vin"
        }[currentLanguage],
        "url": "https://sommelierquintelier.com/subscriptions"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Blog",
        "url": "https://sommelierquintelier.com/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "name": {
          "nl": "Galerij",
          "en": "Gallery",
          "fr": "Galerie"
        }[currentLanguage],
        "url": "https://sommelierquintelier.com/gallery"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://sommelierquintelier.com/contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
    </Helmet>
  );
}
