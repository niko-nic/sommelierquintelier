import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface PrivacyContent {
  title: string;
  lastUpdate: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  metaDescription: string;
}

const getPrivacyContent = (lang: string): PrivacyContent => {
  if (lang === 'en') {
    return {
      title: 'Privacy Policy',
      lastUpdate: 'November 2025',
      metaDescription: 'Privacy Policy of Sommelier Quintelier - How we protect and use your personal data.',
      sections: [
        {
          title: '1. Introduction',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Sommelier Quintelier, established in Belgium and represented by Yentl Quintelier, places great importance on protecting your privacy. 
              In this privacy policy, we explain what personal data we collect, why we collect it, and how we use it.
            </p>
          ),
        },
        {
          title: '2. Data Controller',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Yentl Quintelier - Sommelier<br />
              VAT: BE1025083231<br />
              Belgium<br />
              Email: info@yentlquintelier.com
            </p>
          ),
        },
        {
          title: '3. What Data Do We Collect?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following personal data from you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Contact details (name, email address, phone number)</li>
                <li>Business details (company name, VAT number if applicable)</li>
                <li>Communication data (messages, questions, feedback)</li>
                <li>Payment data (for subscriptions and services)</li>
                <li>Preferences (wine preferences, allergies, dietary requirements)</li>
              </ul>
            </>
          ),
        },
        {
          title: '4. Why Do We Collect Your Data?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal data for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing our services (wine advice, tastings, subscriptions)</li>
                <li>Processing orders, payments, and recurring subscriptions</li>
                <li>Responding to your questions and requests</li>
                <li>Sending newsletters (only with your consent)</li>
                <li>Sending transactional emails (confirmations, cancellations)</li>
                <li>Improving our services and marketing</li>
                <li>Complying with legal obligations</li>
              </ul>
            </>
          ),
        },
        {
          title: '4a. Newsletter and Email Communication',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                When you subscribe to our newsletter, we use your email address to inform you about 
                wine selections, events, and offers. Your email address is stored in our database and processed 
                via SendGrid, our email service provider.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can unsubscribe at any time via the link at the bottom of each newsletter. For transactional emails 
                (such as order confirmations), no separate consent is required, as they are necessary for the performance 
                of the contract.
              </p>
            </>
          ),
        },
        {
          title: '5. Legal Basis for Processing',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                We process your personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Legal obligations</li>
                <li>Legitimate interests of our organization</li>
              </ul>
            </>
          ),
        },
        {
          title: '6. How Long Do We Keep Your Data?',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We do not keep your personal data longer than necessary for the purposes for which it was collected, 
              unless a longer retention period is required by law. Customer data is kept for a maximum of 7 years 
              due to fiscal obligations.
            </p>
          ),
        },
        {
          title: '7. Sharing Data with Third Parties',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your data to third parties. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Payment processors (Mollie) - For processing payments and subscriptions</li>
                <li>Email service provider (SendGrid) - For sending newsletters and transactional emails</li>
                <li>Marketing analytics (HubSpot) - For analyzing form submissions and marketing campaigns</li>
                <li>Wine suppliers (only necessary information for delivery)</li>
                <li>External service providers that support us (hosting, accounting)</li>
                <li>Authorities (if legally required)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All these parties are obliged to treat your data confidentially and may only use it 
                for the purposes for which we have provided it.
              </p>
            </>
          ),
        },
        {
          title: '8. Your Rights',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right of access - You can request what data we hold about you</li>
                <li>Right to rectification - You can request correction of incorrect data</li>
                <li>Right to erasure - You can request deletion of your data</li>
                <li>Right to restriction - You can request limitation of processing</li>
                <li>Right to object - You can object to the processing</li>
                <li>Right to data portability - You can receive your data in a structured format</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at info@yentlquintelier.com
              </p>
            </>
          ),
        },
        {
          title: '9. Security',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We take appropriate technical and organizational measures to protect your personal data 
              against loss, misuse, unauthorized access, and unwanted disclosure.
            </p>
          ),
        },
        {
          title: '10. Cookies',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies to improve the user experience and collect statistics. 
              For more information, please refer to our cookie policy.
            </p>
          ),
        },
        {
          title: '11. Changes to This Privacy Policy',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this privacy policy. The most recent version can always be found 
              on our website. We recommend that you consult this privacy policy regularly.
            </p>
          ),
        },
        {
          title: '12. Complaints',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              If you have a complaint about how we process your personal data, please contact us. 
              You also have the right to file a complaint with the Belgian Data Protection Authority (GBA).
            </p>
          ),
        },
        {
          title: '13. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this privacy policy or the processing of your personal data, please contact us:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier<br />
                VAT: BE1025083231<br />
                Email: <a href="mailto:info@yentlquintelier.com" className="text-primary hover:underline">info@yentlquintelier.com</a>
              </p>
            </>
          ),
        },
      ],
    };
  }

  if (lang === 'fr') {
    return {
      title: 'Politique de Confidentialité',
      lastUpdate: 'Novembre 2025',
      metaDescription: 'Politique de confidentialité de Sommelier Quintelier - Comment nous protégeons et utilisons vos données personnelles.',
      sections: [
        {
          title: '1. Introduction',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Sommelier Quintelier, établi en Belgique et représenté par Yentl Quintelier, attache une grande importance à la protection de votre vie privée. 
              Dans cette politique de confidentialité, nous expliquons quelles données personnelles nous collectons, pourquoi nous les collectons et comment nous les utilisons.
            </p>
          ),
        },
        {
          title: '2. Responsable du traitement des données',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Yentl Quintelier - Sommelier<br />
              TVA: BE1025083231<br />
              Belgique<br />
              Email: info@yentlquintelier.com
            </p>
          ),
        },
        {
          title: '3. Quelles données collectons-nous?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous pouvons collecter les données personnelles suivantes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Coordonnées (nom, adresse email, numéro de téléphone)</li>
                <li>Données professionnelles (nom de l'entreprise, numéro de TVA le cas échéant)</li>
                <li>Données de communication (messages, questions, commentaires)</li>
                <li>Données de paiement (pour les abonnements et services)</li>
                <li>Préférences (préférences vinicoles, allergies, régimes alimentaires)</li>
              </ul>
            </>
          ),
        },
        {
          title: '4. Pourquoi collectons-nous vos données?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous utilisons vos données personnelles pour:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fournir nos services (conseils en vin, dégustations, abonnements)</li>
                <li>Traiter les commandes, paiements et abonnements récurrents</li>
                <li>Répondre à vos questions et demandes</li>
                <li>Envoyer des newsletters (uniquement avec votre consentement)</li>
                <li>Envoyer des emails transactionnels (confirmations, annulations)</li>
                <li>Améliorer nos services et notre marketing</li>
                <li>Respecter les obligations légales</li>
              </ul>
            </>
          ),
        },
        {
          title: '4a. Newsletter et communication par email',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Lorsque vous vous inscrivez à notre newsletter, nous utilisons votre adresse email pour vous informer des 
                sélections de vins, événements et offres. Votre adresse email est stockée dans notre base de données et traitée 
                via SendGrid, notre fournisseur de services email.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous pouvez vous désinscrire à tout moment via le lien au bas de chaque newsletter. Pour les emails transactionnels 
                (comme les confirmations de commande), aucun consentement séparé n'est requis, car ils sont nécessaires à l'exécution 
                du contrat.
              </p>
            </>
          ),
        },
        {
          title: '5. Base juridique du traitement',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Nous traitons vos données personnelles sur la base de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Votre consentement</li>
                <li>L'exécution d'un contrat</li>
                <li>Les obligations légales</li>
                <li>Les intérêts légitimes de notre organisation</li>
              </ul>
            </>
          ),
        },
        {
          title: '6. Combien de temps conservons-nous vos données?',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous ne conservons pas vos données personnelles plus longtemps que nécessaire aux fins pour lesquelles elles ont été collectées, 
              sauf si une période de conservation plus longue est requise par la loi. Les données clients sont conservées pendant un maximum de 7 ans 
              en raison des obligations fiscales.
            </p>
          ),
        },
        {
          title: '7. Partage des données avec des tiers',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons pas vos données à des tiers. Nous pouvons partager vos données avec:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Processeurs de paiement (Mollie) - Pour le traitement des paiements et abonnements</li>
                <li>Fournisseur de services email (SendGrid) - Pour l'envoi de newsletters et emails transactionnels</li>
                <li>Analyse marketing (HubSpot) - Pour l'analyse des soumissions de formulaires et campagnes marketing</li>
                <li>Fournisseurs de vin (uniquement les informations nécessaires à la livraison)</li>
                <li>Prestataires externes qui nous soutiennent (hébergement, comptabilité)</li>
                <li>Autorités (si légalement requis)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toutes ces parties sont tenues de traiter vos données de manière confidentielle et ne peuvent les utiliser 
                que pour les fins pour lesquelles nous les avons fournies.
              </p>
            </>
          ),
        },
        {
          title: '8. Vos droits',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vous avez les droits suivants concernant vos données personnelles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Droit d'accès - Vous pouvez demander quelles données nous détenons sur vous</li>
                <li>Droit de rectification - Vous pouvez demander la correction de données incorrectes</li>
                <li>Droit à l'effacement - Vous pouvez demander la suppression de vos données</li>
                <li>Droit à la limitation - Vous pouvez demander la limitation du traitement</li>
                <li>Droit d'opposition - Vous pouvez vous opposer au traitement</li>
                <li>Droit à la portabilité - Vous pouvez recevoir vos données dans un format structuré</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, veuillez nous contacter à info@yentlquintelier.com
              </p>
            </>
          ),
        },
        {
          title: '9. Sécurité',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
              contre la perte, l'utilisation abusive, l'accès non autorisé et la divulgation indésirable.
            </p>
          ),
        },
        {
          title: '10. Cookies',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Notre site web utilise des cookies pour améliorer l'expérience utilisateur et collecter des statistiques. 
              Pour plus d'informations, veuillez consulter notre politique de cookies.
            </p>
          ),
        },
        {
          title: '11. Modifications de cette politique de confidentialité',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité. La version la plus récente se trouve toujours 
              sur notre site web. Nous vous recommandons de consulter régulièrement cette politique de confidentialité.
            </p>
          ),
        },
        {
          title: '12. Plaintes',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Si vous avez une plainte concernant la manière dont nous traitons vos données personnelles, veuillez nous contacter. 
              Vous avez également le droit de déposer une plainte auprès de l'Autorité belge de protection des données (APD).
            </p>
          ),
        },
        {
          title: '13. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, veuillez nous contacter:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier<br />
                TVA: BE1025083231<br />
                Email: <a href="mailto:info@yentlquintelier.com" className="text-primary hover:underline">info@yentlquintelier.com</a>
              </p>
            </>
          ),
        },
      ],
    };
  }

  // Default: Dutch (nl)
  return {
    title: 'Privacybeleid',
    lastUpdate: 'November 2025',
    metaDescription: 'Privacybeleid van Sommelier Quintelier - Hoe wij uw persoonlijke gegevens beschermen en gebruiken.',
    sections: [
      {
        title: '1. Inleiding',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Sommelier Quintelier, gevestigd in België en vertegenwoordigd door Yentl Quintelier, hecht groot belang aan de bescherming van uw privacy. 
            In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen, waarom we deze verzamelen en hoe we deze gebruiken.
          </p>
        ),
      },
      {
        title: '2. Verantwoordelijke voor gegevensverwerking',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Yentl Quintelier - Sommelier<br />
            BTW: BE1025083231<br />
            België<br />
            E-mail: info@yentlquintelier.com
          </p>
        ),
      },
      {
        title: '3. Welke gegevens verzamelen wij?',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij kunnen de volgende persoonsgegevens van u verzamelen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsgegevens (bedrijfsnaam, BTW-nummer indien van toepassing)</li>
              <li>Communicatiegegevens (berichten, vragen, feedback)</li>
              <li>Betalingsgegevens (voor abonnementen en diensten)</li>
              <li>Voorkeuren (wijnvoorkeuren, allergieën, dieetwensen)</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Waarom verzamelen wij uw gegevens?',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij gebruiken uw persoonsgegevens voor:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Het leveren van onze diensten (wijnadvies, proeverijen, abonnementen)</li>
              <li>Het verwerken van bestellingen, betalingen en recurring abonnementen</li>
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het versturen van nieuwsbrieven (alleen met uw toestemming)</li>
              <li>Het versturen van transactionele e-mails (bevestigingen, annulaties)</li>
              <li>Het verbeteren van onze dienstverlening en marketing</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>
          </>
        ),
      },
      {
        title: '4a. Nieuwsbrief en e-mailcommunicatie',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Wanneer u zich aanmeldt voor onze nieuwsbrief, gebruiken wij uw e-mailadres om u te informeren over 
              wijnselecties, evenementen en aanbiedingen. Uw e-mailadres wordt opgeslagen in onze database en verwerkt 
              via SendGrid, onze e-mailserviceprovider.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              U kunt zich te allen tijde uitschrijven via de link onderaan elke nieuwsbrief. Voor transactionele e-mails 
              (zoals orderbevestigingen) is geen aparte toestemming vereist, deze zijn noodzakelijk voor de uitvoering 
              van de overeenkomst.
            </p>
          </>
        ),
      },
      {
        title: '5. Rechtsgrondslag voor verwerking',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Wij verwerken uw persoonsgegevens op basis van:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Uw toestemming</li>
              <li>De uitvoering van een overeenkomst</li>
              <li>Wettelijke verplichtingen</li>
              <li>Gerechtvaardigde belangen van onze organisatie</li>
            </ul>
          </>
        ),
      },
      {
        title: '6. Hoe lang bewaren wij uw gegevens?',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, 
            tenzij een langere bewaartermijn wettelijk verplicht is. Klantgegevens worden maximaal 7 jaar bewaard 
            in verband met fiscale verplichtingen.
          </p>
        ),
      },
      {
        title: '7. Delen van gegevens met derden',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Wij verkopen uw gegevens niet aan derden. We kunnen uw gegevens delen met:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Betaalverwerkingsbedrijven (Mollie) - Voor het verwerken van betalingen en abonnementen</li>
              <li>E-mailserviceprovider (SendGrid) - Voor het versturen van nieuwsbrieven en transactionele e-mails</li>
              <li>Marketing analytics (HubSpot) - Voor het analyseren van formulierinzendingen en marketingcampagnes</li>
              <li>Leveranciers van wijn (alleen noodzakelijke informatie voor levering)</li>
              <li>Externe dienstverleners die ons ondersteunen (hosting, boekhouding)</li>
              <li>Autoriteiten (indien wettelijk vereist)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Al deze partijen zijn verplicht om uw gegevens vertrouwelijk te behandelen en mogen deze alleen gebruiken 
              voor de doeleinden waarvoor wij ze hebben aangeleverd.
            </p>
          </>
        ),
      },
      {
        title: '8. Uw rechten',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Recht op inzage - U kunt opvragen welke gegevens wij van u hebben</li>
              <li>Recht op rectificatie - U kunt vragen om onjuiste gegevens te corrigeren</li>
              <li>Recht op verwijdering - U kunt vragen om uw gegevens te verwijderen</li>
              <li>Recht op beperking - U kunt vragen om de verwerking te beperken</li>
              <li>Recht op bezwaar - U kunt bezwaar maken tegen de verwerking</li>
              <li>Recht op gegevensoverdracht - U kunt uw gegevens in een gestructureerd formaat ontvangen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Om deze rechten uit te oefenen, kunt u contact met ons opnemen via info@yentlquintelier.com
            </p>
          </>
        ),
      },
      {
        title: '9. Beveiliging',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen 
            tegen verlies, misbruik, ongeautoriseerde toegang en ongewenste openbaarmaking.
          </p>
        ),
      },
      {
        title: '10. Cookies',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Onze website gebruikt cookies om de gebruikerservaring te verbeteren en statistieken bij te houden. 
            Voor meer informatie verwijzen wij naar ons cookiebeleid.
          </p>
        ),
      },
      {
        title: '11. Wijzigingen in dit privacybeleid',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij behouden ons het recht voor om dit privacybeleid te wijzigen. De meest recente versie vindt u 
            altijd op onze website. Wij raden u aan om dit privacybeleid regelmatig te raadplegen.
          </p>
        ),
      },
      {
        title: '12. Klachten',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Als u een klacht heeft over de manier waarop wij uw persoonsgegevens verwerken, kunt u contact met ons opnemen. 
            U heeft ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA).
          </p>
        ),
      },
      {
        title: '13. Contact',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Voor vragen over dit privacybeleid of over de verwerking van uw persoonsgegevens kunt u contact met ons opnemen:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Yentl Quintelier - Sommelier<br />
              BTW: BE1025083231<br />
              E-mail: <a href="mailto:info@yentlquintelier.com" className="text-primary hover:underline">info@yentlquintelier.com</a>
            </p>
          </>
        ),
      },
    ],
  };
};

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const content = getPrivacyContent(i18n.language);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('legal.privacy.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('legal.privacy.metaDescription')} />
        <meta property="og:title" content={`${t('legal.privacy.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('legal.privacy.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sommelierquintelier.com/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <Breadcrumbs items={[{ label: t('legal.privacy.title') }]} />
              
              <h1 className="text-4xl md:text-5xl font-light mb-8 mt-8">{t('legal.privacy.title')}</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground">
                  <strong>{i18n.language === 'fr' ? 'Dernière mise à jour:' : i18n.language === 'en' ? 'Last update:' : 'Laatste update:'}</strong> {t('legal.privacy.lastUpdate')}
                </p>

                {content.sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-2xl font-light mb-4">{section.title}</h2>
                    {section.content}
                  </section>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
