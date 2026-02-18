import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function StructuredData() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Organization Schema - Who we are
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sommelierquintelier.com/#organization",
    "name": "Sommelier Quintelier",
    "alternateName": "Yentl Quintelier Sommelier",
    "url": "https://sommelierquintelier.com",
    "logo": "https://sommelierquintelier.com/favicon.png",
    "image": "https://sommelierquintelier.com/favicon.png",
    "description": {
      "nl": "Professionele wijnadvies en sommelierdiensten in België. Sommelier of the Year 2022.",
      "en": "Professional wine consulting and sommelier services in Belgium. Sommelier of the Year 2022.",
      "fr": "Conseil en vin professionnel et services de sommelier en Belgique. Sommelier de l'année 2022."
    }[currentLanguage],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE",
      "addressRegion": "Belgium",
      "addressLocality": "Oost-Vlaanderen"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "BE"
    },
    "email": "info@sommelierquintelier.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@sommelierquintelier.com",
        "availableLanguage": ["Dutch", "English", "French"],
        "areaServed": "BE"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "info@sommelierquintelier.com",
        "availableLanguage": ["Dutch", "English", "French"],
        "areaServed": "BE"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Yentl Quintelier",
      "jobTitle": "Certified Sommelier",
      "award": "Sommelier of the Year Belgium 2022"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "sameAs": [
      "https://www.instagram.com/yentl.quintelier/",
      "https://yentlquintelier.com"
    ],
    "knowsAbout": [
      "Wine Consulting",
      "Sommelier Services",
      "Wine Tasting",
      "Wine Education",
      "Wine Pairing",
      "Cellar Management",
      "Wine List Curation"
    ]
  };

  // LocalBusiness Schema - For local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sommelierquintelier.com/#business",
    "name": "Sommelier Quintelier",
    "image": "https://sommelierquintelier.com/favicon.png",
    "url": "https://sommelierquintelier.com",
    "email": "info@sommelierquintelier.com",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE",
      "addressRegion": "Belgium"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "BE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
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
    ]
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://sommelierquintelier.com/#service",
    "name": "Sommelier Quintelier - Wine Consultancy",
    "image": "https://sommelierquintelier.com/favicon.png",
    "url": "https://sommelierquintelier.com",
    "email": "info@sommelierquintelier.com",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "serviceType": [
      "Wine Consulting",
      "Wine Tastings",
      "Wine Education",
      "Wine List Curation",
      "Cellar Management",
      "Private Sommelier Services"
    ],
    "provider": {
      "@type": "Person",
      "name": "Yentl Quintelier",
      "jobTitle": "Certified Sommelier",
      "award": "Sommelier of the Year Belgium 2022"
    }
  };

  // Person Schema - Yentl Quintelier
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sommelierquintelier.com/#yentl",
    "name": "Yentl Quintelier",
    "givenName": "Yentl",
    "familyName": "Quintelier",
    "jobTitle": "Certified Sommelier",
    "award": [
      "Sommelier of the Year Belgium 2022",
      "Certified Sommelier",
      "Best Student of the Year - Restaurant Management & Beverage Knowledge"
    ],
    "url": "https://sommelierquintelier.com",
    "image": "https://sommelierquintelier.com/favicon.png",
    "email": "info@sommelierquintelier.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Sommelier Quintelier"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Hotelschool Stella Matutina"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Certified Sommelier"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Sommelier",
      "occupationLocation": {
        "@type": "Country",
        "name": "Belgium"
      },
      "skills": [
        "Wine Consulting",
        "Wine Tasting",
        "Wine Pairing",
        "Cellar Management",
        "Wine Education",
        "Hospitality"
      ]
    },
    "knowsLanguage": [
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
    "nationality": {
      "@type": "Country",
      "name": "Belgium"
    },
    "knowsAbout": [
      "Wine",
      "Sommelier Services",
      "Wine Pairing",
      "Wine Education",
      "Viticulture",
      "Oenology",
      "Wine Consulting",
      "Cellar Management",
      "Hospitality"
    ],
    "sameAs": [
      "https://www.instagram.com/yentl.quintelier/",
      "https://yentlquintelier.com"
    ]
  };

  return (
    <Helmet>
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Structured Data for Professional Service */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Structured Data for Person (Yentl Quintelier) */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      {/* Geo targeting meta tags */}
      <meta name="geo.region" content="BE" />
      <meta name="geo.placename" content="Belgium" />
      <meta name="geo.position" content="50.8503;4.3517" />
      <meta name="ICBM" content="50.8503, 4.3517" />
    </Helmet>
  );
}
