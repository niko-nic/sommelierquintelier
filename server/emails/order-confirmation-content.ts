export type Language = 'nl' | 'en' | 'fr';

export interface OrderConfirmationEmailContent {
  subject: string;
  greeting: string;
  introText: string;
  orderNumberLabel: string;
  orderDetailsTitle: string;
  subscriptionLabel: string;
  bottlesLabel: string;
  extrasLabel: string;
  amountLabel: string;
  deliveryAddressTitle: string;
  nameLabel: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  nextStepsTitle: string;
  nextSteps: string[];
  closingText: string;
  signature: string;
  footerLocation: string;
  needHelpText: string;
  contactLink: string;
  contactLinkText: string;
  websiteUrl: string;
  viewInBrowserText: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const orderConfirmationEmailContent: Record<Language, OrderConfirmationEmailContent> = {
  nl: {
    subject: 'Orderbevestiging - Sommelier.quintelier 🍷',
    greeting: 'Beste {customerName},',
    introText: 'Bedankt voor je bestelling! We hebben je betaling ontvangen en je order wordt nu verwerkt. Hieronder vind je een overzicht van je bestelling.',
    orderNumberLabel: 'Ordernummer',
    orderDetailsTitle: 'Orderdetails',
    subscriptionLabel: 'Wijnabonnement',
    bottlesLabel: 'Aantal flessen',
    extrasLabel: 'Extras',
    amountLabel: 'Totaalbedrag',
    deliveryAddressTitle: 'Afleveradres',
    nameLabel: 'Naam',
    addressLabel: 'Adres',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefoon',
    nextStepsTitle: 'Wat gebeurt er nu?',
    nextSteps: [
      'Wij stellen je wijnselectie zorgvuldig samen volgens de hoogste kwaliteitsnormen',
      'Je order wordt binnen 3-5 werkdagen verzonden naar het opgegeven adres',
      'Je ontvangt een tracking code zodra je bestelling onderweg is',
      'Bij vragen of opmerkingen kun je altijd contact met ons opnemen'
    ],
    closingText: 'We kijken ernaar uit om je kennismaken met onze zorgvuldig geselecteerde wijnen. Geniet ervan!',
    signature: 'Proost!\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    needHelpText: 'Vragen over je bestelling?',
    contactLink: `${WEBSITE_URL}/contact`,
    contactLinkText: 'Neem contact op',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Bekijk in browser'
  },
  en: {
    subject: 'Order Confirmation - Sommelier.quintelier 🍷',
    greeting: 'Dear {customerName},',
    introText: 'Thank you for your order! We have received your payment and your order is now being processed. Below you will find an overview of your order.',
    orderNumberLabel: 'Order number',
    orderDetailsTitle: 'Order Details',
    subscriptionLabel: 'Wine Subscription',
    bottlesLabel: 'Number of bottles',
    extrasLabel: 'Extras',
    amountLabel: 'Total amount',
    deliveryAddressTitle: 'Delivery Address',
    nameLabel: 'Name',
    addressLabel: 'Address',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    nextStepsTitle: 'What happens next?',
    nextSteps: [
      'We carefully curate your wine selection according to the highest quality standards',
      'Your order will be shipped within 3-5 business days to the specified address',
      'You will receive a tracking code as soon as your order is on its way',
      'If you have any questions or comments, you can always contact us'
    ],
    closingText: 'We look forward to introducing you to our carefully selected wines. Enjoy!',
    signature: 'Cheers!\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    needHelpText: 'Questions about your order?',
    contactLink: `${WEBSITE_URL}/contact`,
    contactLinkText: 'Contact us',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'View in browser'
  },
  fr: {
    subject: 'Confirmation de commande - Sommelier.quintelier 🍷',
    greeting: 'Cher(e) {customerName},',
    introText: 'Merci pour votre commande ! Nous avons reçu votre paiement et votre commande est maintenant en cours de traitement. Vous trouverez ci-dessous un aperçu de votre commande.',
    orderNumberLabel: 'Numéro de commande',
    orderDetailsTitle: 'Détails de la commande',
    subscriptionLabel: 'Abonnement vin',
    bottlesLabel: 'Nombre de bouteilles',
    extrasLabel: 'Extras',
    amountLabel: 'Montant total',
    deliveryAddressTitle: 'Adresse de livraison',
    nameLabel: 'Nom',
    addressLabel: 'Adresse',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    nextStepsTitle: 'Et maintenant ?',
    nextSteps: [
      'Nous composons soigneusement votre sélection de vins selon les normes de qualité les plus élevées',
      'Votre commande sera expédiée dans les 3 à 5 jours ouvrables à l\'adresse indiquée',
      'Vous recevrez un code de suivi dès que votre commande sera en route',
      'Si vous avez des questions ou des commentaires, vous pouvez toujours nous contacter'
    ],
    closingText: 'Nous avons hâte de vous faire découvrir nos vins soigneusement sélectionnés. Profitez-en !',
    signature: 'Santé !\nYentl Quintelier\nSommelier diplômé',
    footerLocation: 'Belgique',
    needHelpText: 'Questions sur votre commande ?',
    contactLink: `${WEBSITE_URL}/contact`,
    contactLinkText: 'Contactez-nous',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Voir dans le navigateur'
  }
};
