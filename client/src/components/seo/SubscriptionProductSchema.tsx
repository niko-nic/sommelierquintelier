import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SubscriptionProductSchema() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const subscriptionTiers = [
    {
      tier: 'selection',
      sku: 'SUB-SEL',
      price3: 55,
      price6: 100,
    },
    {
      tier: 'cuvee',
      sku: 'SUB-CUV',
      price3: 110,
      price6: 200,
    },
    {
      tier: 'prestige',
      sku: 'SUB-PRES',
      price3: 250,
      price6: 480,
    },
    {
      tier: 'champagne',
      sku: 'SUB-CHAMP',
      price3: 150,
      price6: 275,
    },
  ];

  const generateProductSchema = (tierData: typeof subscriptionTiers[0]) => {
    const { tier, sku, price3, price6 } = tierData;
    const name = t(`services.subscription.tiers.${tier}.name`);
    const description = t(`services.subscription.tiers.${tier}.description`);
    const tagline = t(`services.subscription.tiers.${tier}.tagline`);
    const features = t(`services.subscription.tiers.${tier}.features`, { returnObjects: true }) as string[];

    // Create two product variants: 3 bottles and 6 bottles
    return [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `https://sommelierquintelier.com/subscriptions#${sku}-3`,
        "name": `${name} - 3 ${t('services.subscription.bottlesCount')}`,
        "description": `${description} ${tagline}`,
        "brand": {
          "@type": "Brand",
          "name": "Sommelier Quintelier"
        },
        "category": {
          "nl": "Wijnabonnement",
          "en": "Wine Subscription",
          "fr": "Abonnement vin"
        }[currentLanguage],
        "sku": `${sku}-3`,
        "image": {
          "@type": "ImageObject",
          "url": "https://sommelierquintelier.com/favicon.png",
          "width": 512,
          "height": 512,
          "caption": `${name} - Wine Subscription`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "45",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "url": `https://sommelierquintelier.com/subscriptions#${tier}`,
          "priceCurrency": "EUR",
          "price": price3.toString(),
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "eligibleRegion": {
            "@type": "Country",
            "name": "Belgium"
          },
          "seller": {
            "@type": "Organization",
            "name": "Sommelier Quintelier"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": price3.toString(),
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "3",
              "unitCode": "BTL"
            }
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "EUR"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 2,
                "maxValue": 5,
                "unitCode": "DAY"
              }
            }
          }
        },
        "additionalProperty": features.map((feature: string, index: number) => ({
          "@type": "PropertyValue",
          "name": `Feature ${index + 1}`,
          "value": feature
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `https://sommelierquintelier.com/subscriptions#${sku}-6`,
        "name": `${name} - 6 ${t('services.subscription.bottlesCount')}`,
        "description": `${description} ${tagline}`,
        "brand": {
          "@type": "Brand",
          "name": "Sommelier Quintelier"
        },
        "category": {
          "nl": "Wijnabonnement",
          "en": "Wine Subscription",
          "fr": "Abonnement vin"
        }[currentLanguage],
        "sku": `${sku}-6`,
        "image": {
          "@type": "ImageObject",
          "url": "https://sommelierquintelier.com/favicon.png",
          "width": 512,
          "height": 512,
          "caption": `${name} - Wine Subscription`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "45",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "url": `https://sommelierquintelier.com/subscriptions#${tier}`,
          "priceCurrency": "EUR",
          "price": price6.toString(),
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "eligibleRegion": {
            "@type": "Country",
            "name": "Belgium"
          },
          "seller": {
            "@type": "Organization",
            "name": "Sommelier Quintelier"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": price6.toString(),
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "6",
              "unitCode": "BTL"
            }
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "EUR"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 3,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 2,
                "maxValue": 5,
                "unitCode": "DAY"
              }
            }
          }
        },
        "additionalProperty": features.map((feature: string, index: number) => ({
          "@type": "PropertyValue",
          "name": `Feature ${index + 1}`,
          "value": feature
        }))
      }
    ];
  };

  // Generate all product schemas
  const allProductSchemas = subscriptionTiers.flatMap(generateProductSchema);

  return (
    <Helmet>
      {allProductSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
