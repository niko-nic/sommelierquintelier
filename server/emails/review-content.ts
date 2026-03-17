export type Language = 'nl' | 'en' | 'fr';

export interface ReviewEmailContent {
  subject: string;
  greeting: string;
  introText: string;
  experienceQuestion: string;
  orderDetailsLabel: string;
  ctaText: string;
  alternativeText: string;
  contactText: string;
  contactLink: string;
  closingText: string;
  signature: string;
  footerLocation: string;
  websiteUrl: string;
  viewInBrowserText: string;
  contactEmail: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const reviewEmailContent: Record<Language, ReviewEmailContent> = {
  nl: {
    subject: 'Hoe was je wijnervaring? 🍷',
    greeting: 'Beste {customerName},',
    introText: 'We hopen dat je volop hebt genoten van je laatste wijnlevering! Nu je de kans hebt gehad om de wijnen te ontdekken en te proeven, zijn we heel benieuwd naar je ervaring.',
    experienceQuestion: 'Hoe beviel de selectie? Heb je een nieuwe favoriete wijn ontdekt? Of zijn er wijnen die minder in de smaak vielen? Jouw feedback helpt ons om onze selecties nog beter af te stemmen op jouw voorkeuren.',
    orderDetailsLabel: 'Je bestelling',
    ctaText: 'Deel je ervaring',
    alternativeText: 'Je kunt ook rechtstreeks reageren op deze e-mail met je feedback.',
    contactText: 'Heb je vragen of opmerkingen over je levering? Neem gerust contact met ons op.',
    contactLink: `${WEBSITE_URL}/contact`,
    closingText: 'Bedankt voor je vertrouwen in Sommelier Quintelier. We kijken ernaar uit om je volgende wijnervaring nog beter te maken!',
    signature: 'Proost!\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Bekijk in browser',
    contactEmail: 'sommelier@yentlquintelier.com'
  },
  en: {
    subject: 'How was your wine experience? 🍷',
    greeting: 'Dear {customerName},',
    introText: 'We hope you thoroughly enjoyed your latest wine delivery! Now that you\'ve had the chance to discover and taste the wines, we\'re very curious about your experience.',
    experienceQuestion: 'How did you like the selection? Did you discover a new favorite wine? Or were there wines that didn\'t quite suit your taste? Your feedback helps us to better tailor our selections to your preferences.',
    orderDetailsLabel: 'Your order',
    ctaText: 'Share your experience',
    alternativeText: 'You can also reply directly to this email with your feedback.',
    contactText: 'Have questions or comments about your delivery? Feel free to contact us.',
    contactLink: `${WEBSITE_URL}/contact`,
    closingText: 'Thank you for trusting Sommelier Quintelier. We look forward to making your next wine experience even better!',
    signature: 'Cheers!\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'View in browser',
    contactEmail: 'sommelier@yentlquintelier.com'
  },
  fr: {
    subject: 'Comment était votre expérience vinicole ? 🍷',
    greeting: 'Cher(e) {customerName},',
    introText: 'Nous espérons que vous avez pleinement apprécié votre dernière livraison de vin ! Maintenant que vous avez eu l\'occasion de découvrir et de déguster les vins, nous sommes très curieux de connaître votre expérience.',
    experienceQuestion: 'Comment avez-vous trouvé la sélection ? Avez-vous découvert un nouveau vin favori ? Ou y avait-il des vins qui ne correspondaient pas tout à fait à vos goûts ? Vos commentaires nous aident à mieux adapter nos sélections à vos préférences.',
    orderDetailsLabel: 'Votre commande',
    ctaText: 'Partagez votre expérience',
    alternativeText: 'Vous pouvez également répondre directement à cet e-mail avec vos commentaires.',
    contactText: 'Vous avez des questions ou des remarques concernant votre livraison ? N\'hésitez pas à nous contacter.',
    contactLink: `${WEBSITE_URL}/contact`,
    closingText: 'Merci de faire confiance à Sommelier Quintelier. Nous avons hâte de rendre votre prochaine expérience vinicole encore meilleure !',
    signature: 'Santé !\nYentl Quintelier\nSommelier Certifié',
    footerLocation: 'Belgique',
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Voir dans le navigateur',
    contactEmail: 'sommelier@yentlquintelier.com'
  }
};
