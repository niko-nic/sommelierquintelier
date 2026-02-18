import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface TermsContent {
  title: string;
  lastUpdate: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  metaDescription: string;
}

const getTermsContent = (lang: string): TermsContent => {
  if (lang === 'en') {
    return {
      title: 'Terms and Conditions',
      lastUpdate: 'November 2025',
      metaDescription: 'Terms and Conditions of Sommelier Quintelier for services and wine subscriptions.',
      sections: [
        {
          title: '1. Scope',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions apply to all services offered by Yentl Quintelier, 
                operating under the name Sommelier Quintelier (hereinafter "we" or "us"), established in Belgium.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our services, you agree to these terms and conditions.
              </p>
            </>
          ),
        },
        {
          title: '2. Our Services',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Wine advice and consultancy for individuals and businesses</li>
                <li>Wine tastings and educational events</li>
                <li>Private sommelier services</li>
                <li>Wine list creation and management for restaurants</li>
                <li>Private Wine Cellar</li>
                <li>Monthly wine subscriptions</li>
              </ul>
            </>
          ),
        },
        {
          title: '3. Orders and Agreements',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              An agreement is concluded when you place an order and we confirm it by email. 
              All offers are non-binding unless otherwise stated. We reserve the right to refuse orders 
              without giving reasons.
            </p>
          ),
        },
        {
          title: '4. Prices and Payment',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                All prices are in euros and include VAT unless otherwise stated. Prices may be changed 
                without prior notice, but confirmed orders and ongoing subscriptions will not be affected.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Payment must be made according to the payment method stated on the invoice and within the specified period. 
                For wine subscriptions, payment is made via automatic direct debit through our payment provider Mollie. 
                In case of non-payment within the set term, we are entitled to charge late payment interest and collection costs.
              </p>
            </>
          ),
        },
        {
          title: '5. Wine Subscriptions',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                <strong>5.1 Duration and Renewal:</strong> Wine subscriptions are automatically renewed monthly unless otherwise agreed. 
                Payment is made via automatic direct debit through Mollie. By taking out a subscription, you consent to 
                automatic monthly payments until the subscription is cancelled.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.2 Cancellation:</strong> You can cancel your subscription at any time. Cancellation can be done via the link in your order confirmation 
                or by contacting info@sommelierquintelier.com. Upon cancellation, the subscription is immediately cancelled and 
                you will not receive any new deliveries. No future payments will be collected. 
                For amounts already paid: if your wine delivery has not yet been prepared or shipped, a proportional 
                refund will be made. Please contact us for a refund if applicable.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.3 Payment:</strong> The first monthly payment takes place when the subscription is concluded. 
                Subsequent payments are automatically collected around the same date in the following months. In case of unsuccessful payments, 
                the subscription will be automatically suspended until the payment is resolved.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.4 Delivery:</strong> We strive to deliver monthly selections on time. 
                Delays due to external factors (weather conditions, suppliers) cannot be attributed to us.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.5 Selection:</strong> All wines are carefully selected by us. The exact wines may vary 
                based on availability and season, but remain within the quality and price level of the chosen subscription.
              </p>
            </>
          ),
        },
        {
          title: '6. Delivery and Shipping',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Deliveries take place in Belgium. Delivery times are indicative and not binding. 
                We are not liable for delays beyond our control.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Risk of the goods passes to the customer at the time of delivery. In case of absence during delivery, 
                a second attempt will be made. Costs for redelivery may be charged.
              </p>
            </>
          ),
        },
        {
          title: '7. Right of Withdrawal (private individuals)',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Private customers have the right to withdraw from the agreement within 14 days of receiving the products, 
                without giving reasons. Returns must be made in original condition and packaging.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Exceptions:</strong> The right of withdrawal does not apply to services that have been fully performed 
                (such as tastings, consultations) and for perishable products such as wine where the seal has been broken.
              </p>
            </>
          ),
        },
        {
          title: '8. Warranty and Complaints',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                We guarantee that our products and services meet the agreed specifications. 
                Complaints about products must be reported within 7 days of receipt via info@sommelierquintelier.com
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In case of defects, we will choose to repair, replace, or refund. 
                Claims for damaged bottles during transport must be reported immediately upon delivery.
              </p>
            </>
          ),
        },
        {
          title: '9. Liability',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Our liability is limited to direct damage and a maximum of the amount of the relevant agreement. 
                We are not liable for indirect damage, consequential damage, or loss of profit.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Liability for alcohol-related damage from consumption lies with the consumer. 
                We promote responsible alcohol consumption and advise against consuming our products during pregnancy 
                or when operating vehicles.
              </p>
            </>
          ),
        },
        {
          title: '10. Intellectual Property',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              All intellectual property rights relating to our services, website, advice, and publications belong to us. 
              It is not permitted to reproduce or publish these without prior written permission.
            </p>
          ),
        },
        {
          title: '11. Privacy and Data Protection',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We handle your personal data carefully. For more information, please refer to our 
              <a href="/privacy" className="text-primary hover:underline ml-1">privacy policy</a>.
            </p>
          ),
        },
        {
          title: '12. Force Majeure',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              In case of force majeure (e.g., natural disasters, strikes, pandemics, government measures), 
              we are not obliged to fulfil our obligations. In such cases, both parties have 
              the right to dissolve the agreement without compensation.
            </p>
          ),
        },
        {
          title: '13. Changes to Terms and Conditions',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to change these terms and conditions. Changes take effect 
              after publication on our website. For ongoing agreements, the terms as they were at 
              the start of the agreement apply.
            </p>
          ),
        },
        {
          title: '14. Applicable Law and Disputes',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions and all agreements are governed by Belgian law. 
              Disputes will preferably be resolved through mutual consultation. If this is not possible, 
              the competent courts of Belgium have exclusive jurisdiction.
            </p>
          ),
        },
        {
          title: '15. Responsible Alcohol Consumption',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              We promote responsible alcohol consumption. Alcoholic products are only intended for persons aged 18 and over. 
              Do not drink during pregnancy and do not drink when operating vehicles or machinery.
            </p>
          ),
        },
        {
          title: '16. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms and conditions, please contact us:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier Quintelier<br />
                VAT: BE1025083231<br />
                Belgium<br />
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
      title: 'Conditions Générales',
      lastUpdate: 'Novembre 2025',
      metaDescription: 'Conditions générales de Sommelier Quintelier pour les services et abonnements vinicoles.',
      sections: [
        {
          title: '1. Champ d\'application',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Ces conditions générales s'appliquent à tous les services offerts par Yentl Quintelier, 
                opérant sous le nom Sommelier Quintelier (ci-après "nous"), établi en Belgique.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En utilisant nos services, vous acceptez ces conditions générales.
              </p>
            </>
          ),
        },
        {
          title: '2. Nos Services',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous offrons les services suivants:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Conseils en vin et consultance pour particuliers et entreprises</li>
                <li>Dégustations de vins et événements éducatifs</li>
                <li>Services de sommelier privé</li>
                <li>Création et gestion de cartes des vins pour restaurants</li>
                <li>Cave à Vin Privée</li>
                <li>Abonnements mensuels de vins</li>
              </ul>
            </>
          ),
        },
        {
          title: '3. Commandes et Contrats',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Un contrat est conclu lorsque vous passez une commande et que nous la confirmons par email. 
              Toutes les offres sont sans engagement sauf indication contraire. Nous nous réservons le droit de refuser des commandes 
              sans donner de raisons.
            </p>
          ),
        },
        {
          title: '4. Prix et Paiement',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Tous les prix sont en euros et incluent la TVA sauf indication contraire. Les prix peuvent être modifiés 
                sans préavis, mais les commandes confirmées et les abonnements en cours ne seront pas affectés.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Le paiement doit être effectué selon le mode de paiement indiqué sur la facture et dans le délai spécifié. 
                Pour les abonnements de vin, le paiement est effectué par prélèvement automatique via notre prestataire de paiement Mollie. 
                En cas de non-paiement dans le délai fixé, nous sommes en droit de facturer des intérêts de retard et des frais de recouvrement.
              </p>
            </>
          ),
        },
        {
          title: '5. Abonnements de Vin',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                <strong>5.1 Durée et Renouvellement:</strong> Les abonnements de vin sont automatiquement renouvelés mensuellement sauf accord contraire. 
                Le paiement est effectué par prélèvement automatique via Mollie. En souscrivant un abonnement, vous consentez aux 
                paiements mensuels automatiques jusqu'à l'annulation de l'abonnement.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.2 Annulation:</strong> Vous pouvez annuler votre abonnement à tout moment. L'annulation peut être effectuée via le lien dans votre confirmation de commande 
                ou en contactant info@sommelierquintelier.com. Lors de l'annulation, l'abonnement est immédiatement annulé et 
                vous ne recevrez plus de nouvelles livraisons. Aucun paiement futur ne sera prélevé. 
                Pour les montants déjà payés: si votre livraison de vin n'a pas encore été préparée ou expédiée, un remboursement 
                proportionnel sera effectué. Veuillez nous contacter pour un remboursement le cas échéant.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.3 Paiement:</strong> Le premier paiement mensuel a lieu lors de la souscription de l'abonnement. 
                Les paiements suivants sont automatiquement prélevés autour de la même date les mois suivants. En cas de paiements non réussis, 
                l'abonnement sera automatiquement suspendu jusqu'à ce que le paiement soit résolu.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.4 Livraison:</strong> Nous nous efforçons de livrer les sélections mensuelles dans les délais. 
                Les retards dus à des facteurs externes (conditions météorologiques, fournisseurs) ne peuvent nous être imputés.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>5.5 Sélection:</strong> Tous les vins sont soigneusement sélectionnés par nos soins. Les vins exacts peuvent varier 
                en fonction de la disponibilité et de la saison, mais restent dans le niveau de qualité et de prix de l'abonnement choisi.
              </p>
            </>
          ),
        },
        {
          title: '6. Livraison et Expédition',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Les livraisons ont lieu en Belgique. Les délais de livraison sont indicatifs et non contraignants. 
                Nous ne sommes pas responsables des retards hors de notre contrôle.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Le risque des marchandises passe au client au moment de la livraison. En cas d'absence lors de la livraison, 
                une deuxième tentative sera effectuée. Des frais de relivraison peuvent être facturés.
              </p>
            </>
          ),
        },
        {
          title: '7. Droit de Rétractation (particuliers)',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Les clients particuliers ont le droit de se rétracter du contrat dans les 14 jours suivant la réception des produits, 
                sans donner de raisons. Les retours doivent être effectués dans l'état et l'emballage d'origine.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Exceptions:</strong> Le droit de rétractation ne s'applique pas aux services qui ont été entièrement exécutés 
                (comme les dégustations, consultations) et aux produits périssables comme le vin dont le sceau a été brisé.
              </p>
            </>
          ),
        },
        {
          title: '8. Garantie et Réclamations',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Nous garantissons que nos produits et services répondent aux spécifications convenues. 
                Les réclamations concernant les produits doivent être signalées dans les 7 jours suivant la réception via info@sommelierquintelier.com
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En cas de défauts, nous choisirons de réparer, remplacer ou rembourser. 
                Les réclamations pour bouteilles endommagées pendant le transport doivent être signalées immédiatement à la livraison.
              </p>
            </>
          ),
        },
        {
          title: '9. Responsabilité',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Notre responsabilité est limitée aux dommages directs et à un maximum du montant du contrat concerné. 
                Nous ne sommes pas responsables des dommages indirects, des dommages consécutifs ou des pertes de profit.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La responsabilité pour les dommages liés à l'alcool résultant de la consommation incombe au consommateur. 
                Nous promouvons une consommation responsable d'alcool et déconseillons de consommer nos produits pendant la grossesse 
                ou lors de la conduite de véhicules.
              </p>
            </>
          ),
        },
        {
          title: '10. Propriété Intellectuelle',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Tous les droits de propriété intellectuelle relatifs à nos services, site web, conseils et publications nous appartiennent. 
              Il est interdit de les reproduire ou de les publier sans autorisation écrite préalable.
            </p>
          ),
        },
        {
          title: '11. Vie Privée et Protection des Données',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous traitons vos données personnelles avec soin. Pour plus d'informations, veuillez consulter notre 
              <a href="/privacy" className="text-primary hover:underline ml-1">politique de confidentialité</a>.
            </p>
          ),
        },
        {
          title: '12. Force Majeure',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              En cas de force majeure (par exemple, catastrophes naturelles, grèves, pandémies, mesures gouvernementales), 
              nous ne sommes pas tenus de remplir nos obligations. Dans de tels cas, les deux parties ont 
              le droit de dissoudre le contrat sans indemnité.
            </p>
          ),
        },
        {
          title: '13. Modifications des Conditions Générales',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions générales. Les modifications prennent effet 
              après publication sur notre site web. Pour les contrats en cours, les conditions telles qu'elles étaient au 
              début du contrat s'appliquent.
            </p>
          ),
        },
        {
          title: '14. Droit Applicable et Litiges',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Ces conditions générales et tous les contrats sont régis par le droit belge. 
              Les litiges seront de préférence résolus par concertation mutuelle. Si cela n'est pas possible, 
              les tribunaux compétents de Belgique ont compétence exclusive.
            </p>
          ),
        },
        {
          title: '15. Consommation Responsable d\'Alcool',
          content: (
            <p className="text-muted-foreground leading-relaxed">
              Nous promouvons une consommation responsable d'alcool. Les produits alcoolisés sont uniquement destinés aux personnes âgées de 18 ans et plus. 
              Ne buvez pas pendant la grossesse et ne buvez pas lorsque vous conduisez des véhicules ou utilisez des machines.
            </p>
          ),
        },
        {
          title: '16. Contact',
          content: (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant ces conditions générales, veuillez nous contacter:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Yentl Quintelier - Sommelier Quintelier<br />
                TVA: BE1025083231<br />
                Belgique<br />
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
    title: 'Algemene Voorwaarden',
    lastUpdate: 'November 2025',
    metaDescription: 'Algemene voorwaarden van Sommelier Quintelier voor dienstverlening en wijnabonnementen.',
    sections: [
      {
        title: '1. Toepassingsgebied',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Deze algemene voorwaarden zijn van toepassing op alle diensten aangeboden door Yentl Quintelier, 
              handelend onder de naam Sommelier Quintelier (hierna "wij" of "ons"), gevestigd in België.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Door gebruik te maken van onze diensten, gaat u akkoord met deze algemene voorwaarden.
            </p>
          </>
        ),
      },
      {
        title: '2. Onze diensten',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij bieden de volgende diensten aan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Wijnadvies en consultancy voor particulieren en bedrijven</li>
              <li>Wijnproeverijen en educatieve evenementen</li>
              <li>Privé sommelier services</li>
              <li>Samenstelling en beheer van wijnkaarten voor restaurants</li>
              <li>Privé Wijnkelder</li>
              <li>Maandelijkse wijnabonnementen</li>
            </ul>
          </>
        ),
      },
      {
        title: '3. Bestellingen en overeenkomsten',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Een overeenkomst komt tot stand op het moment dat u een bestelling plaatst en wij deze bevestigen via e-mail. 
            Alle aanbiedingen zijn vrijblijvend, tenzij anders vermeld. Wij behouden ons het recht voor om bestellingen 
            te weigeren zonder opgave van redenen.
          </p>
        ),
      },
      {
        title: '4. Prijzen en betaling',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Alle prijzen zijn in euro's en inclusief BTW, tenzij anders vermeld. Prijzen kunnen zonder voorafgaande 
              kennisgeving worden gewijzigd, maar reeds bevestigde bestellingen en lopende abonnementen worden niet beïnvloed.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Betaling dient te geschieden volgens de op de factuur vermelde betalingsmethode en binnen de aangegeven termijn. 
              Voor wijnabonnementen verloopt betaling via automatische incasso via onze payment provider Mollie. 
              Bij niet-betaling binnen de gestelde termijn zijn wij gerechtigd vertragingsinteresten en incassokosten in rekening te brengen.
            </p>
          </>
        ),
      },
      {
        title: '5. Wijnabonnementen',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              <strong>5.1 Duur en verlenging:</strong> Wijnabonnementen worden automatisch maandelijks verlengd, tenzij anders overeengekomen. 
              Betaling verloopt via automatische incasso via Mollie. Door een abonnement af te sluiten, geeft u toestemming voor 
              automatische maandelijkse betalingen tot opzegging van het abonnement.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>5.2 Opzegging:</strong> U kunt uw abonnement te allen tijde opzeggen. Opzeggen kan via de link in uw orderbevestiging 
              of door contact op te nemen met info@sommelierquintelier.com. Bij opzegging wordt het abonnement direct geannuleerd en 
              ontvangt u geen nieuwe leveringen meer. Er worden geen toekomstige betalingen meer geïncasseerd. 
              Voor reeds betaalde bedragen geldt: indien uw wijnlevering nog niet is voorbereid of verzonden, wordt een evenredig 
              deel terugbetaald. Neem contact op met ons voor terugbetaling indien van toepassing.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>5.3 Betaling:</strong> De eerste maandelijkse betaling vindt plaats bij het afsluiten van het abonnement. 
              Vervolgbetalingen worden automatisch geïncasseerd rond dezelfde datum van de volgende maanden. Bij niet-succesvolle betalingen 
              wordt het abonnement automatisch opgeschort totdat de betaling is geregeld.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>5.4 Levering:</strong> Wij streven ernaar om maandelijkse selecties tijdig te leveren. 
              Vertragingen door externe factoren (weersomstandigheden, leveranciers) kunnen niet aan ons worden toegerekend.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>5.5 Selectie:</strong> Alle wijnen worden zorgvuldig door ons geselecteerd. De exacte wijnen kunnen variëren 
              op basis van beschikbaarheid en seizoen, maar blijven binnen het kwaliteits- en prijsniveau van het gekozen abonnement.
            </p>
          </>
        ),
      },
      {
        title: '6. Levering en verzending',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Leveringen vinden plaats in België. Levertijden zijn indicatief en niet bindend. 
              Wij zijn niet aansprakelijk voor vertragingen buiten onze controle.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Het risico van de goederen gaat over op de klant op het moment van levering. Bij afwezigheid tijdens levering 
              zal een tweede poging worden ondernomen. Kosten voor herlevering kunnen in rekening worden gebracht.
            </p>
          </>
        ),
      },
      {
        title: '7. Herroepingsrecht (particulieren)',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Particuliere klanten hebben het recht om binnen 14 dagen na ontvangst van de producten de overeenkomst te herroepen, 
              zonder opgave van redenen. Retourneren dient te gebeuren in originele staat en verpakking.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Uitzonderingen:</strong> Het herroepingsrecht geldt niet voor diensten die volledig zijn uitgevoerd 
              (zoals proeverijen, adviesgesprekken) en voor bederfelijke producten zoals wijn waarvan de verzegeling is verbroken.
            </p>
          </>
        ),
      },
      {
        title: '8. Garantie en klachten',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Wij garanderen dat onze producten en diensten voldoen aan de overeengekomen specificaties. 
              Klachten over producten dienen binnen 7 dagen na ontvangst gemeld te worden via info@sommelierquintelier.com
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Bij gebreken zullen wij naar keuze overgaan tot herstel, vervanging of terugbetaling. 
              Claims voor beschadigde flessen tijdens transport moeten onmiddellijk bij levering worden gemeld.
            </p>
          </>
        ),
      },
      {
        title: '9. Aansprakelijkheid',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Onze aansprakelijkheid is beperkt tot directe schade en maximaal het bedrag van de betreffende overeenkomst. 
              Wij zijn niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Aansprakelijkheid voor alcoholgerelateerde schade door consumptie ligt bij de consument. 
              Wij promoten verantwoord alcoholgebruik en adviseren onze producten niet te consumeren tijdens zwangerschap 
              of bij het besturen van voertuigen.
            </p>
          </>
        ),
      },
      {
        title: '10. Intellectueel eigendom',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Alle intellectuele eigendomsrechten met betrekking tot onze diensten, website, adviezen en publicaties berusten bij ons. 
            Het is niet toegestaan om deze zonder voorafgaande schriftelijke toestemming te verveelvoudigen of openbaar te maken.
          </p>
        ),
      },
      {
        title: '11. Privacy en gegevensbescherming',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij gaan zorgvuldig om met uw persoonsgegevens. Voor meer informatie verwijzen wij naar ons 
            <a href="/privacy" className="text-primary hover:underline ml-1">privacybeleid</a>.
          </p>
        ),
      },
      {
        title: '12. Overmacht',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            In geval van overmacht (bijvoorbeeld natuurrampen, stakingen, pandemieën, overheidsmaatregelen) 
            zijn wij niet gehouden tot nakoming van onze verplichtingen. In dergelijke gevallen hebben beide partijen 
            het recht de overeenkomst te ontbinden zonder schadevergoeding.
          </p>
        ),
      },
      {
        title: '13. Wijzigingen algemene voorwaarden',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij behouden ons het recht voor om deze algemene voorwaarden te wijzigen. Wijzigingen worden van kracht 
            na publicatie op onze website. Voor lopende overeenkomsten gelden de voorwaarden zoals deze luidden 
            bij aanvang van de overeenkomst.
          </p>
        ),
      },
      {
        title: '14. Toepasselijk recht en geschillen',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Op deze algemene voorwaarden en alle overeenkomsten is Belgisch recht van toepassing. 
            Geschillen zullen bij voorkeur in onderling overleg worden opgelost. Indien dit niet mogelijk is, 
            zijn de bevoegde rechtbanken van België exclusief bevoegd.
          </p>
        ),
      },
      {
        title: '15. Verantwoord alcoholgebruik',
        content: (
          <p className="text-muted-foreground leading-relaxed">
            Wij promoten verantwoord alcoholgebruik. Alcoholhoudende producten zijn alleen bestemd voor personen van 18 jaar en ouder. 
            Drink niet tijdens zwangerschap en drink niet als u een voertuig bestuurt of machines bedient.
          </p>
        ),
      },
      {
        title: '16. Contact',
        content: (
          <>
            <p className="text-muted-foreground leading-relaxed">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Yentl Quintelier - Sommelier Quintelier<br />
              BTW: BE1025083231<br />
              België<br />
              E-mail: <a href="mailto:info@sommelierquintelier.com" className="text-primary hover:underline">info@sommelierquintelier.com</a>
            </p>
          </>
        ),
      },
    ],
  };
};

export default function Terms() {
  const { t, i18n } = useTranslation();
  const content = getTermsContent(i18n.language);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('legal.terms.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('legal.terms.metaDescription')} />
        <meta property="og:title" content={`${t('legal.terms.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('legal.terms.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sommelierquintelier.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <Breadcrumbs items={[{ label: t('legal.terms.title') }]} />
              
              <h1 className="text-4xl md:text-5xl font-light mb-8 mt-8">{t('legal.terms.title')}</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-muted-foreground">
                  <strong>{i18n.language === 'fr' ? 'Dernière mise à jour:' : i18n.language === 'en' ? 'Last update:' : 'Laatste update:'}</strong> {t('legal.terms.lastUpdate')}
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
