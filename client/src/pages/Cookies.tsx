import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface CookiesContent {
  title: string;
  lastUpdate: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  metaDescription: string;
}

const getCookiesContent = (lang: string): CookiesContent => {
  if (lang === 'en') {
    return {
      title: 'Cookie Policy',
      lastUpdate: 'November 2025',
      metaDescription: 'Cookie Policy of Sommelier Quintelier - Information about the use of cookies on our website.',
      sections: [
        {
          title: '1. What Are Cookies?',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              Cookies ensure that the website works properly and remember your preferences for future visits.
            </p>
          ),
        },
        {
          title: '2. Why Do We Use Cookies?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Making the website function (functional cookies)</li>
                <li>Analyzing website visits and user behavior (analytical cookies)</li>
                <li>Improving the user experience</li>
                <li>Remembering your language preference</li>
                <li>Remembering your cookie preferences</li>
              </ul>
            </>
          ),
        },
        {
          title: '3. Which Cookies Do We Use?',
          content: (
            <>
              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.1 Necessary Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are essential for the website to function. Without these cookies, the website cannot work properly. 
                  These cookies do not store any personally identifiable information.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Session cookies - For tracking your session during your visit</li>
                  <li>Language preference cookie - For remembering your chosen language</li>
                  <li>Cookie consent cookie - For remembering your cookie preferences</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.2 Functional Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies ensure that the website functions properly and remember your preferences.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Shopping cart cookies - For remembering products in your shopping cart</li>
                  <li>Preference cookies - For remembering your website settings</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.3 Analytical Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies help us understand how visitors use the website. The information is collected anonymously.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Google Analytics - For analyzing website traffic and user behavior</li>
                  <li>Visitor statistics - For tracking page views and visitor numbers</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.4 Marketing Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are used to make advertisements more relevant to you and your interests. 
                  They are only placed with your consent.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>HubSpot tracking - For analyzing form submissions and marketing campaigns</li>
                  <li>SendGrid tracking - For tracking email opens and clicks</li>
                  <li>Social media cookies - For sharing content on social media</li>
                  <li>Advertising cookies - For showing relevant advertisements</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          title: '4. Third-Party Cookies',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In addition to our own cookies, third parties also place cookies. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics</strong> - For analyzing website visits</li>
                <li><strong>HubSpot</strong> - For analyzing form submissions and marketing campaigns</li>
                <li><strong>Mollie</strong> - For secure payment processing and subscription management</li>
                <li><strong>SendGrid</strong> - For email tracking (open rates, click rates)</li>
                <li><strong>Social media platforms</strong> - For sharing content (if you use share buttons)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These parties may place cookies on your device. We have no control over the cookies that 
                these third parties place. Please consult the privacy and cookie statements of these parties for more information.
              </p>
            </>
          ),
        },
        {
          title: '5. How Long Are Cookies Stored?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                The retention period of cookies varies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><strong>Session cookies</strong> - Are deleted when you close your browser</li>
                <li><strong>Persistent cookies</strong> - Remain on your device for a certain period (varying from a few days to several years)</li>
              </ul>
            </>
          ),
        },
        {
          title: '6. Your Consent and Preferences',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                On your first visit to our website, we ask for your consent to place cookies. 
                You can change your preferences at any time via the cookie settings on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can choose to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Accept all cookies</li>
                <li>Accept only necessary cookies</li>
                <li>Accept or refuse specific categories of cookies</li>
              </ul>
            </>
          ),
        },
        {
          title: '7. Deleting and Blocking Cookies',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                You can delete cookies at any time via your browser settings. 
                You can also set your browser to automatically block cookies or to notify you 
                when a cookie is placed.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Please note:</strong> If you disable cookies, certain features of the website may no longer work.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-3">
                For instructions on managing cookies in different browsers, consult:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome cookie help</a></li>
                <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox cookie help</a></li>
                <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari cookie help</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge cookie help</a></li>
              </ul>
            </>
          ),
        },
        {
          title: '8. Changes to This Cookie Policy',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to make changes to this cookie policy. 
              The most recent version can always be found on this page. We recommend that you consult this cookie policy regularly.
            </p>
          ),
        },
        {
          title: '9. More Information',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                For more information about cookies and privacy, you can consult the following resources:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
                <li><a href="https://www.dataprotectionauthority.be" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Belgian Data Protection Authority</a></li>
              </ul>
            </>
          ),
        },
        {
          title: '10. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Do you have questions about our cookie policy? Feel free to contact us:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier<br />
                VAT: BE1025083231<br />
                Email: <a href="mailto:info@sommelierquintelier.com" className="text-primary hover:underline">info@sommelierquintelier.com</a>
              </p>
            </>
          ),
        },
      ],
    };
  }

  if (lang === 'fr') {
    return {
      title: 'Politique de Cookies',
      lastUpdate: 'Novembre 2025',
      metaDescription: 'Politique de cookies de Sommelier Quintelier - Informations sur l\'utilisation des cookies sur notre site web.',
      sections: [
        {
          title: '1. Que sont les cookies?',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Les cookies sont de petits fichiers texte qui sont placés sur votre ordinateur ou appareil mobile lorsque vous visitez notre site web. 
              Les cookies permettent au site web de fonctionner correctement et de mémoriser vos préférences pour les visites futures.
            </p>
          ),
        },
        {
          title: '2. Pourquoi utilisons-nous des cookies?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous utilisons des cookies aux fins suivantes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Faire fonctionner le site web (cookies fonctionnels)</li>
                <li>Analyser les visites du site web et le comportement des utilisateurs (cookies analytiques)</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Mémoriser votre préférence linguistique</li>
                <li>Mémoriser vos préférences de cookies</li>
              </ul>
            </>
          ),
        },
        {
          title: '3. Quels cookies utilisons-nous?',
          content: (
            <>
              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.1 Cookies nécessaires</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ces cookies sont essentiels au fonctionnement du site web. Sans ces cookies, le site web ne peut pas fonctionner correctement. 
                  Ces cookies ne stockent aucune information personnellement identifiable.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Cookies de session - Pour suivre votre session pendant votre visite</li>
                  <li>Cookie de préférence linguistique - Pour mémoriser votre langue choisie</li>
                  <li>Cookie de consentement aux cookies - Pour mémoriser vos préférences de cookies</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.2 Cookies fonctionnels</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ces cookies permettent au site web de fonctionner correctement et de mémoriser vos préférences.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Cookies de panier d'achat - Pour mémoriser les produits dans votre panier</li>
                  <li>Cookies de préférences - Pour mémoriser vos paramètres de site web</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.3 Cookies analytiques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ces cookies nous aident à comprendre comment les visiteurs utilisent le site web. Les informations sont collectées de manière anonyme.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Google Analytics - Pour analyser le trafic du site web et le comportement des utilisateurs</li>
                  <li>Statistiques des visiteurs - Pour suivre les pages vues et le nombre de visiteurs</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-light mb-3">3.4 Cookies marketing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ces cookies sont utilisés pour rendre les publicités plus pertinentes pour vous et vos intérêts. 
                  Ils ne sont placés qu'avec votre consentement.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                  <li>Suivi HubSpot - Pour analyser les soumissions de formulaires et les campagnes marketing</li>
                  <li>Suivi SendGrid - Pour suivre les ouvertures et clics d'emails</li>
                  <li>Cookies de réseaux sociaux - Pour partager du contenu sur les réseaux sociaux</li>
                  <li>Cookies publicitaires - Pour afficher des publicités pertinentes</li>
                </ul>
              </div>
            </>
          ),
        },
        {
          title: '4. Cookies de tiers',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En plus de nos propres cookies, des tiers placent également des cookies. Ceux-ci comprennent:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics</strong> - Pour analyser les visites du site web</li>
                <li><strong>HubSpot</strong> - Pour analyser les soumissions de formulaires et les campagnes marketing</li>
                <li><strong>Mollie</strong> - Pour le traitement sécurisé des paiements et la gestion des abonnements</li>
                <li><strong>SendGrid</strong> - Pour le suivi des emails (taux d'ouverture, taux de clics)</li>
                <li><strong>Plateformes de réseaux sociaux</strong> - Pour partager du contenu (si vous utilisez les boutons de partage)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ces parties peuvent placer des cookies sur votre appareil. Nous n'avons aucun contrôle sur les cookies que 
                ces tiers placent. Veuillez consulter les déclarations de confidentialité et de cookies de ces parties pour plus d'informations.
              </p>
            </>
          ),
        },
        {
          title: '5. Combien de temps les cookies sont-ils conservés?',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                La durée de conservation des cookies varie:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><strong>Cookies de session</strong> - Sont supprimés lorsque vous fermez votre navigateur</li>
                <li><strong>Cookies persistants</strong> - Restent sur votre appareil pendant une certaine période (variant de quelques jours à plusieurs années)</li>
              </ul>
            </>
          ),
        },
        {
          title: '6. Votre consentement et préférences',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Lors de votre première visite sur notre site web, nous vous demandons votre consentement pour placer des cookies. 
                Vous pouvez modifier vos préférences à tout moment via les paramètres de cookies de notre site web.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous pouvez choisir de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Accepter tous les cookies</li>
                <li>Accepter uniquement les cookies nécessaires</li>
                <li>Accepter ou refuser des catégories spécifiques de cookies</li>
              </ul>
            </>
          ),
        },
        {
          title: '7. Supprimer et bloquer les cookies',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez supprimer les cookies à tout moment via les paramètres de votre navigateur. 
                Vous pouvez également configurer votre navigateur pour bloquer automatiquement les cookies ou pour vous avertir 
                lorsqu'un cookie est placé.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Attention:</strong> Si vous désactivez les cookies, certaines fonctionnalités du site web peuvent ne plus fonctionner.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-3">
                Pour des instructions sur la gestion des cookies dans différents navigateurs, consultez:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Aide Chrome pour les cookies</a></li>
                <li>Mozilla Firefox: <a href="https://support.mozilla.org/fr/kb/effacer-cookies-donnees-site-firefox" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Aide Firefox pour les cookies</a></li>
                <li>Safari: <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Aide Safari pour les cookies</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Aide Edge pour les cookies</a></li>
              </ul>
            </>
          ),
        },
        {
          title: '8. Modifications de cette politique de cookies',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit d'apporter des modifications à cette politique de cookies. 
              La version la plus récente se trouve toujours sur cette page. Nous vous recommandons de consulter régulièrement cette politique de cookies.
            </p>
          ),
        },
        {
          title: '9. Plus d\'informations',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Pour plus d'informations sur les cookies et la confidentialité, vous pouvez consulter les ressources suivantes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL - Cookies et traceurs</a></li>
                <li><a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Autorité belge de protection des données</a></li>
              </ul>
            </>
          ),
        },
        {
          title: '10. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Avez-vous des questions sur notre politique de cookies? N'hésitez pas à nous contacter:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier<br />
                TVA: BE1025083231<br />
                Email: <a href="mailto:info@sommelierquintelier.com" className="text-primary hover:underline">info@sommelierquintelier.com</a>
              </p>
            </>
          ),
        },
      ],
    };
  }

  // Default: Dutch (nl)
  return {
    title: 'Cookiebeleid',
    lastUpdate: 'November 2025',
    metaDescription: 'Cookiebeleid van Sommelier Quintelier - Informatie over het gebruik van cookies op onze website.',
    sections: [
      {
        title: '1. Wat zijn cookies?',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Cookies zijn kleine tekstbestanden die op uw computer of mobiel apparaat worden geplaatst wanneer u onze website bezoekt. 
            Cookies zorgen ervoor dat de website goed werkt en onthouden uw voorkeuren voor toekomstige bezoeken.
          </p>
        ),
      },
      {
        title: '2. Waarom gebruiken wij cookies?',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij gebruiken cookies voor de volgende doeleinden:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Het laten functioneren van de website (functionele cookies)</li>
              <li>Het analyseren van websitebezoek en gebruikersgedrag (analytische cookies)</li>
              <li>Het verbeteren van de gebruikerservaring</li>
              <li>Het onthouden van uw taalvoorkeur</li>
              <li>Het onthouden van uw cookie-voorkeuren</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Welke cookies gebruiken wij?',
        content: (
          <>
            <div className="mt-6">
              <h3 className="text-xl font-light mb-3">3.1 Noodzakelijke cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies kan de website niet goed werken. 
                Deze cookies slaan geen persoonlijk identificeerbare informatie op.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Sessie cookies - Voor het bijhouden van uw sessie tijdens het bezoek</li>
                <li>Taalvoorkeur cookie - Voor het onthouden van uw gekozen taal</li>
                <li>Cookie consent cookie - Voor het onthouden van uw cookie-voorkeuren</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-light mb-3">3.2 Functionele cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deze cookies zorgen ervoor dat de website naar behoren functioneert en onthouden uw voorkeuren.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Winkelwagen cookies - Voor het onthouden van producten in uw winkelmandje</li>
                <li>Voorkeurscookies - Voor het onthouden van uw website-instellingen</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-light mb-3">3.3 Analytische cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken. De informatie wordt anoniem verzameld.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Google Analytics - Voor het analyseren van websiteverkeer en gebruikersgedrag</li>
                <li>Bezoekersstatistieken - Voor het bijhouden van paginaweergaven en bezoekersaantallen</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-light mb-3">3.4 Marketing cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deze cookies worden gebruikt om advertenties relevanter te maken voor u en uw interesses. 
                Ze worden alleen geplaatst met uw toestemming.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>HubSpot tracking - Voor het analyseren van formulierinzendingen en marketingcampagnes</li>
                <li>SendGrid tracking - Voor het bijhouden van e-mail opens en clicks</li>
                <li>Social media cookies - Voor het delen van content op sociale media</li>
                <li>Advertentiecookies - Voor het tonen van relevante advertenties</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        title: '4. Cookies van derden',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Naast onze eigen cookies plaatsen derde partijen ook cookies. Dit zijn onder andere:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Google Analytics</strong> - Voor het analyseren van websitebezoek</li>
              <li><strong>HubSpot</strong> - Voor het analyseren van formulierinzendingen en marketingcampagnes</li>
              <li><strong>Mollie</strong> - Voor veilige betalingsverwerking en abonnementsbeheer</li>
              <li><strong>SendGrid</strong> - Voor e-mailtracking (open rates, click rates)</li>
              <li><strong>Social media platforms</strong> - Voor het delen van content (indien u gebruik maakt van share-knoppen)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Deze partijen kunnen mogelijk cookies op uw apparaat plaatsen. Wij hebben geen invloed op de cookies die 
              door deze derde partijen worden geplaatst. Raadpleeg de privacy- en cookieverklaringen van deze partijen voor meer informatie.
            </p>
          </>
        ),
      },
      {
        title: '5. Hoe lang blijven cookies bewaard?',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              De bewaartermijn van cookies varieert:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li><strong>Sessiecookies</strong> - Worden verwijderd wanneer u uw browser sluit</li>
              <li><strong>Permanente cookies</strong> - Blijven op uw apparaat staan voor een bepaalde periode (variërend van enkele dagen tot meerdere jaren)</li>
            </ul>
          </>
        ),
      },
      {
        title: '6. Uw toestemming en voorkeuren',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Bij uw eerste bezoek aan onze website vragen wij uw toestemming voor het plaatsen van cookies. 
              U kunt uw voorkeuren te allen tijde aanpassen via de cookie-instellingen op onze website.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              U kunt ervoor kiezen om:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li>Alle cookies te accepteren</li>
              <li>Alleen noodzakelijke cookies te accepteren</li>
              <li>Specifieke categorieën cookies te accepteren of weigeren</li>
            </ul>
          </>
        ),
      },
      {
        title: '7. Cookies verwijderen en blokkeren',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              U kunt cookies te allen tijde verwijderen via de instellingen van uw browser. 
              U kunt uw browser ook zo instellen dat cookies automatisch worden geblokkeerd of dat u een melding krijgt 
              wanneer een cookie wordt geplaatst.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Let op:</strong> Als u cookies uitschakelt, kan het zijn dat bepaalde functies van de website niet meer werken.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 mb-3">
              Voor instructies over het beheren van cookies in verschillende browsers, raadpleeg:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome cookiehulp</a></li>
              <li>Mozilla Firefox: <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox cookiehulp</a></li>
              <li>Safari: <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari cookiehulp</a></li>
              <li>Microsoft Edge: <a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge cookiehulp</a></li>
            </ul>
          </>
        ),
      },
      {
        title: '8. Wijzigingen in dit cookiebeleid',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij behouden ons het recht voor om wijzigingen aan te brengen in dit cookiebeleid. 
            De meest recente versie vindt u altijd op deze pagina. Wij raden u aan om dit cookiebeleid regelmatig te raadplegen.
          </p>
        ),
      },
      {
        title: '9. Meer informatie',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Voor meer informatie over cookies en privacy, kunt u de volgende bronnen raadplegen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
              <li><a href="https://www.consumentenbond.nl/internet-privacy/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Consumentenbond - Cookies</a></li>
              <li><a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Belgische Gegevensbeschermingsautoriteit</a></li>
            </ul>
          </>
        ),
      },
      {
        title: '10. Contact',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Heeft u vragen over ons cookiebeleid? Neem gerust contact met ons op:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Yentl Quintelier - Sommelier<br />
              BTW: BE1025083231<br />
              E-mail: <a href="mailto:info@sommelierquintelier.com" className="text-primary hover:underline">info@sommelierquintelier.com</a>
            </p>
          </>
        ),
      },
    ],
  };
};

export default function Cookies() {
  const { t, i18n } = useTranslation();
  const content = getCookiesContent(i18n.language);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('legal.cookies.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('legal.cookies.metaDescription')} />
        <meta property="og:title" content={`${t('legal.cookies.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('legal.cookies.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sommelierquintelier.com/cookies" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <Breadcrumbs items={[{ label: t('legal.cookies.title') }]} />
              
              <h1 className="text-4xl md:text-5xl font-light mb-8 mt-8">{t('legal.cookies.title')}</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground">
                  <strong>{i18n.language === 'fr' ? 'Dernière mise à jour:' : i18n.language === 'en' ? 'Last update:' : 'Laatste update:'}</strong> {t('legal.cookies.lastUpdate')}
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
