import type { Language } from './welcome-content';

export interface CancellationEmailContent {
  subject: string;
  greeting: string;
  introText: string;
  warningTitle: string;
  warningText: string;
  buttonText: string;
  validityText: string;
  alternativeText: string;
  closingText: string;
  signature: string;
  footerLocation: string;
  contactText: string;
  contactLink: string;
  websiteUrl: string;
  viewInBrowserText: string;
  contactEmail: string;
}

const WEBSITE_URL = 'https://sommelierquintelier.com';

export const cancellationEmailContent: Record<Language, CancellationEmailContent> = {
  nl: {
    subject: 'Bevestig opzegging wijnabonnement',
    greeting: 'Beste klant,',
    introText: 'We hebben een verzoek ontvangen om uw wijnabonnement op te zeggen. Als u dit verzoek niet heeft gedaan, negeer deze email dan.',
    warningTitle: 'Let op',
    warningText: 'Deze actie kan niet ongedaan worden gemaakt. Na opzegging worden er geen verdere betalingen in rekening gebracht. U behoudt toegang tot uw huidige maand.',
    buttonText: 'Ja, zeg mijn abonnement op',
    validityText: 'Deze link is 24 uur geldig uit veiligheidsoverwegingen.',
    alternativeText: 'Wilt u liever uw abonnement aanpassen in plaats van opzeggen? Neem contact met ons op.',
    closingText: 'Als u vragen heeft of hulp nodig heeft, aarzel niet om contact met ons op te nemen.',
    signature: 'Met vriendelijke groet,\nYentl Quintelier\nGediplomeerd Sommelier',
    footerLocation: 'België',
    contactText: 'Contact opnemen',
    contactLink: `${WEBSITE_URL}/contact`,
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Bekijk in browser',
    contactEmail: 'info@yentlquintelier.com'
  },
  en: {
    subject: 'Confirm wine subscription cancellation',
    greeting: 'Dear customer,',
    introText: 'We received a request to cancel your wine subscription. If you did not make this request, please ignore this email.',
    warningTitle: 'Warning',
    warningText: 'This action cannot be undone. After cancellation, no further payments will be charged. You will retain access to your current month.',
    buttonText: 'Yes, cancel my subscription',
    validityText: 'This link is valid for 24 hours for security reasons.',
    alternativeText: 'Would you rather modify your subscription instead of canceling? Please contact us.',
    closingText: 'If you have any questions or need help, don\'t hesitate to contact us.',
    signature: 'Kind regards,\nYentl Quintelier\nCertified Sommelier',
    footerLocation: 'Belgium',
    contactText: 'Contact us',
    contactLink: `${WEBSITE_URL}/contact`,
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'View in browser',
    contactEmail: 'info@yentlquintelier.com'
  },
  fr: {
    subject: 'Confirmer la résiliation de l\'abonnement vin',
    greeting: 'Cher client,',
    introText: 'Nous avons reçu une demande de résiliation de votre abonnement vin. Si vous n\'avez pas fait cette demande, veuillez ignorer cet e-mail.',
    warningTitle: 'Attention',
    warningText: 'Cette action ne peut pas être annulée. Après la résiliation, aucun autre paiement ne sera facturé. Vous conserverez l\'accès à votre mois en cours.',
    buttonText: 'Oui, résilier mon abonnement',
    validityText: 'Ce lien est valable 24 heures pour des raisons de sécurité.',
    alternativeText: 'Préférez-vous modifier votre abonnement plutôt que de l\'annuler ? Veuillez nous contacter.',
    closingText: 'Si vous avez des questions ou besoin d\'aide, n\'hésitez pas à nous contacter.',
    signature: 'Cordialement,\nYentl Quintelier\nSommelier Certifié',
    footerLocation: 'Belgique',
    contactText: 'Nous contacter',
    contactLink: `${WEBSITE_URL}/contact`,
    websiteUrl: WEBSITE_URL,
    viewInBrowserText: 'Voir dans le navigateur',
    contactEmail: 'info@yentlquintelier.com'
  }
};
