import type { Language } from './welcome-content';

export interface CancellationConfirmationEmailContent {
  subject: string;
  greeting: string;
  confirmationText: string;
  whatHappensNextTitle: string;
  whatHappensNextText: string;
  resubscribeText: string;
  closingText: string;
  signature: string;
  footerLocation: string;
  contactText: string;
  contactLink: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const cancellationConfirmationEmailContent: Record<Language, CancellationConfirmationEmailContent> = {
  nl: {
    subject: 'Uw abonnement is opgezegd',
    greeting: 'Beste {customerName},',
    confirmationText: 'We bevestigen hierbij dat uw wijnabonnement ({tierName}) succesvol is opgezegd. Er zullen geen verdere betalingen meer worden afgeschreven.',
    whatHappensNextTitle: 'Wat gebeurt er nu?',
    whatHappensNextText: 'U behoudt toegang tot de voordelen van uw huidige abonnementsperiode tot het einde daarvan. Daarna wordt uw abonnement definitief beëindigd.',
    resubscribeText: 'Mocht u in de toekomst opnieuw willen genieten van onze wijnselecties, dan bent u altijd welkom om opnieuw een abonnement af te sluiten via onze website.',
    closingText: 'We hopen u in de toekomst opnieuw te mogen verwelkomen. Bedankt voor uw vertrouwen in Sommelier Quintelier.',
    signature: 'Met vriendelijke groet,\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    contactText: 'Contact opnemen',
    contactLink: `${WEBSITE_URL}/contact`
  },
  en: {
    subject: 'Your subscription has been cancelled',
    greeting: 'Dear {customerName},',
    confirmationText: 'We hereby confirm that your wine subscription ({tierName}) has been successfully cancelled. No further payments will be charged.',
    whatHappensNextTitle: 'What happens next?',
    whatHappensNextText: 'You will retain access to the benefits of your current subscription period until its end. After that, your subscription will be definitively terminated.',
    resubscribeText: 'Should you wish to enjoy our wine selections again in the future, you are always welcome to subscribe again through our website.',
    closingText: 'We hope to welcome you again in the future. Thank you for your trust in Sommelier Quintelier.',
    signature: 'Kind regards,\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    contactText: 'Contact us',
    contactLink: `${WEBSITE_URL}/contact`
  },
  fr: {
    subject: 'Votre abonnement a été résilié',
    greeting: 'Cher/Chère {customerName},',
    confirmationText: 'Nous confirmons par la présente que votre abonnement vin ({tierName}) a été résilié avec succès. Aucun autre paiement ne sera prélevé.',
    whatHappensNextTitle: 'Que se passe-t-il ensuite ?',
    whatHappensNextText: 'Vous conserverez l\'accès aux avantages de votre période d\'abonnement actuelle jusqu\'à son terme. Après cela, votre abonnement sera définitivement terminé.',
    resubscribeText: 'Si vous souhaitez profiter à nouveau de nos sélections de vins à l\'avenir, vous êtes toujours le bienvenu pour vous réabonner via notre site web.',
    closingText: 'Nous espérons vous accueillir à nouveau à l\'avenir. Merci pour votre confiance en Sommelier Quintelier.',
    signature: 'Cordialement,\nYentl Quintelier\nSommelier Certifié',
    footerLocation: 'Belgique',
    contactText: 'Nous contacter',
    contactLink: `${WEBSITE_URL}/contact`
  }
};
