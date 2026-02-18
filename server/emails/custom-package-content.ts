export type Language = 'nl' | 'en' | 'fr';

export interface CustomPackageEmailContent {
  subject: string;
  greeting: string;
  introText: string;
  requestSummaryTitle: string;
  champagneLabel: string;
  whiteWineLabel: string;
  redWineLabel: string;
  dessertWineLabel: string;
  budgetLabel: string;
  additionalWishesLabel: string;
  yesText: string;
  noText: string;
  bottlesText: string;
  nextStepsTitle: string;
  nextStepsText: string;
  closingText: string;
  signature: string;
  footerLocation: string;
  contactEmail: string;
  websiteUrl: string;
}

export interface CustomPackageAdminEmailContent {
  subject: string;
  newRequestTitle: string;
  customerInfoTitle: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  wineSelectionTitle: string;
  champagneLabel: string;
  whiteWineLabel: string;
  redWineLabel: string;
  dessertWineLabel: string;
  budgetLabel: string;
  additionalWishesTitle: string;
  noAdditionalWishes: string;
  yesText: string;
  noText: string;
  bottlesText: string;
  submittedAtLabel: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const customPackageEmailContent: Record<Language, CustomPackageEmailContent> = {
  nl: {
    subject: 'Uw wijnpakket aanvraag is ontvangen',
    greeting: 'Beste {customerName},',
    introText: 'Hartelijk dank voor uw aanvraag voor een gepersonaliseerd wijnpakket! Wij hebben uw verzoek in goede orde ontvangen en gaan hier met plezier mee aan de slag.',
    requestSummaryTitle: 'Uw aanvraag',
    champagneLabel: 'Champagne',
    whiteWineLabel: 'Witte wijn',
    redWineLabel: 'Rode wijn',
    dessertWineLabel: 'Dessertwijn',
    budgetLabel: 'Budget',
    additionalWishesLabel: 'Bijkomende wensen',
    yesText: 'Ja',
    noText: 'Nee',
    bottlesText: 'flessen',
    nextStepsTitle: 'Wat nu?',
    nextStepsText: 'Yentl zal uw aanvraag persoonlijk bekijken en contact met u opnemen binnen 2-3 werkdagen om uw perfecte wijnpakket samen te stellen. U ontvangt een gepersonaliseerd voorstel dat volledig is afgestemd op uw wensen en budget.',
    closingText: 'Heeft u in de tussentijd vragen? Aarzel niet om contact met ons op te nemen.',
    signature: 'Met vriendelijke groet,\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    contactEmail: 'info@yentlquintelier.com',
    websiteUrl: WEBSITE_URL
  },
  en: {
    subject: 'Your wine package request has been received',
    greeting: 'Dear {customerName},',
    introText: 'Thank you for your request for a personalized wine package! We have received your inquiry and are delighted to start working on it.',
    requestSummaryTitle: 'Your request',
    champagneLabel: 'Champagne',
    whiteWineLabel: 'White wine',
    redWineLabel: 'Red wine',
    dessertWineLabel: 'Dessert wine',
    budgetLabel: 'Budget',
    additionalWishesLabel: 'Additional wishes',
    yesText: 'Yes',
    noText: 'No',
    bottlesText: 'bottles',
    nextStepsTitle: 'What\'s next?',
    nextStepsText: 'Yentl will personally review your request and contact you within 2-3 business days to compose your perfect wine package. You will receive a personalized proposal that is fully tailored to your wishes and budget.',
    closingText: 'Do you have any questions in the meantime? Don\'t hesitate to contact us.',
    signature: 'Kind regards,\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    contactEmail: 'info@yentlquintelier.com',
    websiteUrl: WEBSITE_URL
  },
  fr: {
    subject: 'Votre demande de coffret de vins a été reçue',
    greeting: 'Cher/Chère {customerName},',
    introText: 'Merci pour votre demande de coffret de vins personnalisé ! Nous avons bien reçu votre demande et sommes ravis de nous y atteler.',
    requestSummaryTitle: 'Votre demande',
    champagneLabel: 'Champagne',
    whiteWineLabel: 'Vin blanc',
    redWineLabel: 'Vin rouge',
    dessertWineLabel: 'Vin de dessert',
    budgetLabel: 'Budget',
    additionalWishesLabel: 'Souhaits supplémentaires',
    yesText: 'Oui',
    noText: 'Non',
    bottlesText: 'bouteilles',
    nextStepsTitle: 'Et maintenant ?',
    nextStepsText: 'Yentl examinera personnellement votre demande et vous contactera dans les 2-3 jours ouvrables pour composer votre coffret de vins parfait. Vous recevrez une proposition personnalisée entièrement adaptée à vos souhaits et à votre budget.',
    closingText: 'Avez-vous des questions entre-temps ? N\'hésitez pas à nous contacter.',
    signature: 'Cordialement,\nYentl Quintelier\nSommelier Certifié',
    footerLocation: 'Belgique',
    contactEmail: 'info@yentlquintelier.com',
    websiteUrl: WEBSITE_URL
  }
};

export const customPackageAdminEmailContent: CustomPackageAdminEmailContent = {
  subject: 'Nieuwe aanvraag gepersonaliseerd wijnpakket',
  newRequestTitle: 'Nieuwe Wijnpakket Aanvraag',
  customerInfoTitle: 'Klantgegevens',
  nameLabel: 'Naam',
  emailLabel: 'E-mail',
  phoneLabel: 'Telefoon',
  wineSelectionTitle: 'Wijnselectie',
  champagneLabel: 'Champagne',
  whiteWineLabel: 'Witte wijn',
  redWineLabel: 'Rode wijn',
  dessertWineLabel: 'Dessertwijn',
  budgetLabel: 'Budget',
  additionalWishesTitle: 'Bijkomende wensen',
  noAdditionalWishes: 'Geen bijkomende wensen opgegeven',
  yesText: 'Ja',
  noText: 'Nee',
  bottlesText: 'flessen',
  submittedAtLabel: 'Ingediend op'
};
