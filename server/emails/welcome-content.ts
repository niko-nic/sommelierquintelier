export type Language = 'nl' | 'en' | 'fr';

export interface WelcomeEmailContent {
  subject: string;
  greeting: string;
  introText: string;
  blogSectionTitle: string;
  blogPosts: Array<{
    title: string;
    excerpt: string;
    url: string;
  }>;
  readMoreText: string;
  servicesSectionTitle: string;
  services: Array<{
    title: string;
    description: string;
  }>;
  ctaText: string;
  websiteUrl: string;
  closingText: string;
  signature: string;
  footerLocation: string;
  unsubscribeText: string;
  unsubscribeLink: string;
  viewInBrowserText: string;
  contactEmail: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const welcomeEmailContent: Record<Language, WelcomeEmailContent> = {
  nl: {
    subject: 'Welkom bij Sommelier.quintelier',
    greeting: 'Beste wijnliefhebber,',
    introText: 'Hartelijk dank voor je inschrijving op onze nieuwsbrief! Je bent nu onderdeel van een exclusieve gemeenschap van wijnliefhebbers. Elke maand ontvang je de beste wijntips, unieke verhalen over druivenrassen en exclusieve aanbiedingen voor onze wijnabonnementen.',
    blogSectionTitle: 'Recente artikelen',
    blogPosts: [
      {
        title: 'Riesling',
        excerpt: 'Ontdek de veelzijdige witte druif die gedijt in koele klimaten en varieert van droog en fris tot rijk en zoet.',
        url: `${WEBSITE_URL}/blog/riesling`
      },
      {
        title: 'Merlot',
        excerpt: 'Leer alles over deze populaire rode druif met zijn zachte tannines en fruitige aroma\'s van pruimen en kersen.',
        url: `${WEBSITE_URL}/blog/merlot`
      },
      {
        title: 'Cabernet Sauvignon',
        excerpt: 'Verken de koning der rode wijnen met zijn krachtige structuur en lange rijpingspotentieel.',
        url: `${WEBSITE_URL}/blog/cabernet-sauvignon`
      }
    ],
    readMoreText: 'Lees meer',
    servicesSectionTitle: 'Onze diensten',
    services: [
      {
        title: 'Wijnabonnementen',
        description: 'Van Selection tot Prestige - elk kwartaal zorgvuldig geselecteerde wijnen aan huis geleverd.'
      },
      {
        title: 'Privé Proeverijen',
        description: 'Exclusieve wijnproeverijen op maat, perfect voor bedrijfsevents of speciale gelegenheden.'
      },
      {
        title: 'Persoonlijke Sommelierservice',
        description: 'Deskundig advies bij de samenstelling van uw wijnkelder of het perfecte wijn-spijspairing.'
      }
    ],
    ctaText: 'Ontdek ons volledige aanbod',
    websiteUrl: WEBSITE_URL,
    closingText: 'Heb je vragen of wil je meer weten over een van onze diensten? Aarzel niet om contact met me op te nemen.',
    signature: 'Proost!\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    unsubscribeText: 'Je ontvangt deze email omdat je je hebt ingeschreven voor onze nieuwsbrief. Geen interesse meer?',
    unsubscribeLink: 'Klik hier om je uit te schrijven',
    viewInBrowserText: 'Bekijk in browser',
    contactEmail: 'info@yentlquintelier.com'
  },
  en: {
    subject: 'Welcome to Sommelier.quintelier',
    greeting: 'Dear wine lover,',
    introText: 'Thank you for subscribing to our newsletter! You are now part of an exclusive community of wine enthusiasts. Every month you\'ll receive the best wine tips, unique stories about grape varieties, and exclusive offers for our wine subscriptions.',
    blogSectionTitle: 'Recent articles',
    blogPosts: [
      {
        title: 'Riesling',
        excerpt: 'Discover the versatile white grape that thrives in cool climates, ranging from dry and crisp to rich and sweet.',
        url: `${WEBSITE_URL}/blog/riesling`
      },
      {
        title: 'Merlot',
        excerpt: 'Learn all about this popular red grape with its soft tannins and fruity aromas of plums and cherries.',
        url: `${WEBSITE_URL}/blog/merlot`
      },
      {
        title: 'Cabernet Sauvignon',
        excerpt: 'Explore the king of red wines with its powerful structure and long aging potential.',
        url: `${WEBSITE_URL}/blog/cabernet-sauvignon`
      }
    ],
    readMoreText: 'Read more',
    servicesSectionTitle: 'Our services',
    services: [
      {
        title: 'Wine Subscriptions',
        description: 'From Selection to Prestige - carefully selected wines delivered to your home quarterly.'
      },
      {
        title: 'Private Tastings',
        description: 'Exclusive custom wine tastings, perfect for corporate events or special occasions.'
      },
      {
        title: 'Personal Sommelier Service',
        description: 'Expert advice on building your wine cellar or creating the perfect wine-food pairing.'
      }
    ],
    ctaText: 'Discover our full range',
    websiteUrl: WEBSITE_URL,
    closingText: 'Have questions or want to know more about any of our services? Don\'t hesitate to contact me.',
    signature: 'Cheers!\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    unsubscribeText: 'You\'re receiving this email because you subscribed to our newsletter. Not interested anymore?',
    unsubscribeLink: 'Click here to unsubscribe',
    viewInBrowserText: 'View in browser',
    contactEmail: 'info@yentlquintelier.com'
  },
  fr: {
    subject: 'Bienvenue chez Sommelier.quintelier',
    greeting: 'Cher amateur de vin,',
    introText: 'Merci de vous être inscrit à notre newsletter ! Vous faites désormais partie d\'une communauté exclusive d\'amateurs de vin. Chaque mois, vous recevrez les meilleurs conseils sur le vin, des histoires uniques sur les cépages et des offres exclusives pour nos abonnements vin.',
    blogSectionTitle: 'Articles récents',
    blogPosts: [
      {
        title: 'Riesling',
        excerpt: 'Découvrez le cépage blanc polyvalent qui prospère dans les climats frais, allant du sec et vif au riche et doux.',
        url: `${WEBSITE_URL}/blog/riesling`
      },
      {
        title: 'Merlot',
        excerpt: 'Apprenez tout sur ce cépage rouge populaire avec ses tanins doux et ses arômes fruités de prunes et de cerises.',
        url: `${WEBSITE_URL}/blog/merlot`
      },
      {
        title: 'Cabernet Sauvignon',
        excerpt: 'Explorez le roi des vins rouges avec sa structure puissante et son long potentiel de vieillissement.',
        url: `${WEBSITE_URL}/blog/cabernet-sauvignon`
      }
    ],
    readMoreText: 'En savoir plus',
    servicesSectionTitle: 'Nos services',
    services: [
      {
        title: 'Abonnements Vin',
        description: 'De Sélection à Prestige - des vins soigneusement sélectionnés livrés à domicile chaque trimestre.'
      },
      {
        title: 'Dégustations Privées',
        description: 'Dégustations de vin exclusives sur mesure, parfaites pour les événements d\'entreprise ou les occasions spéciales.'
      },
      {
        title: 'Service Sommelier Personnel',
        description: 'Conseils d\'expert pour constituer votre cave à vin ou créer l\'accord mets-vins parfait.'
      }
    ],
    ctaText: 'Découvrez notre gamme complète',
    websiteUrl: WEBSITE_URL,
    closingText: 'Vous avez des questions ou souhaitez en savoir plus sur l\'un de nos services ? N\'hésitez pas à me contacter.',
    signature: 'Santé !\nYentl Quintelier\nSommelier Certifié',
    footerLocation: 'Belgique',
    unsubscribeText: 'Vous recevez cet e-mail car vous vous êtes inscrit à notre newsletter. Plus intéressé ?',
    unsubscribeLink: 'Cliquez ici pour vous désabonner',
    viewInBrowserText: 'Voir dans le navigateur',
    contactEmail: 'info@yentlquintelier.com'
  }
};
