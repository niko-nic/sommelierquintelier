import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  nl: {
    translation: {
      announcement: {
        message: 'Deze website is momenteel in opbouw. Prijzen en etiketten kunnen afwijken van de werkelijkheid.'
      },
      nav: {
        home: 'Home',
        about: 'Over',
        services: 'Diensten',
        blog: 'Blog',
        gallery: 'Galerij',
        contact: 'Contact',
        cart: 'Winkelwagen'
      },
      checkout: {
        title: 'Betaling',
        description: 'Vul uw gegevens in om uw bestelling te voltooien',
        processing: 'Verwerken...',
        completePayment: 'Doorgaan naar betaling',
        success: 'Betaling geslaagd',
        successMessage: 'Bedankt voor uw bestelling!',
        error: 'Betaling mislukt',
        errorMessage: 'Er is iets misgegaan. Probeer het opnieuw.',
        mollieRedirectInfo: 'U wordt doorgestuurd naar Mollie om uw betaling veilig te voltooien. Na betaling keert u automatisch terug naar onze website.',
        extras: 'Extras',
        extraChampagne: 'Fles Champagne',
        extraDessert: 'Fles Dessertwijn',
        ageConfirmation: 'Ik bevestig dat ik 18 jaar of ouder ben',
        contactInformation: 'Contactgegevens',
        deliveryAddress: 'Afleveradres',
        optional: 'optioneel',
        nameLabel: 'Naam',
        namePlaceholder: 'Volledige naam',
        nameRequired: 'Naam is verplicht',
        emailLabel: 'E-mailadres',
        emailPlaceholder: 'uw@email.be',
        emailInvalid: 'Ongeldig e-mailadres',
        phoneLabel: 'Telefoonnummer',
        phonePlaceholder: '+32 xxx xx xx xx',
        addressLabel: 'Straat en nummer',
        addressPlaceholder: 'Straatnaam 123',
        addressRequired: 'Adres is verplicht',
        cityLabel: 'Stad',
        cityPlaceholder: 'Brussel',
        cityRequired: 'Stad is verplicht',
        postalCodeLabel: 'Postcode',
        postalCodePlaceholder: '1000',
        postalCodeRequired: 'Postcode is verplicht',
        countryLabel: 'Land',
        countryPlaceholder: 'Selecteer land',
        countryRequired: 'Land is verplicht',
        ageConfirmationRequired: 'U moet bevestigen dat u 18+ bent',
        recurringBilling: 'Maandelijks Abonnement',
        recurringDescription: 'Dit is een doorlopend abonnement dat maandelijks automatisch wordt verlengd. U kunt op elk moment opzeggen.'
      },
      ageGate: {
        title: 'Welkom bij Sommelier Quintelier',
        subtitle: 'Leeftijdsverificatie vereist',
        description: 'Deze website bevat informatie over alcoholische dranken. Vul uw geboortedatum in om te bevestigen dat u minstens 18 jaar oud bent.',
        dayLabel: 'Dag',
        monthLabel: 'Maand',
        yearLabel: 'Jaar',
        dayPlaceholder: 'DD',
        monthPlaceholder: 'MM',
        yearPlaceholder: 'JJJJ',
        confirmButton: 'Bevestig leeftijd',
        underageError: 'U moet minstens 18 jaar oud zijn om deze website te bezoeken.',
        invalidDateError: 'Vul een geldige geboortedatum in.',
        legalDrinkingAge: 'De wettelijke minimumleeftijd voor alcoholconsumptie in België is 18 jaar.',
        responsibleConsumption: 'Drink verantwoord. Alcohol is schadelijk voor de gezondheid.',
        privacyNotice: 'Uw geboortedatum wordt niet opgeslagen. Deze verificatie wordt alleen gebruikt om uw leeftijd te controleren.'
      },
      thankYou: {
        title: 'Bedankt voor uw bestelling',
        subtitle: 'Uw betaling is succesvol verwerkt',
        confirmation: 'We hebben uw bestelling ontvangen en deze wordt binnenkort verwerkt.',
        emailSent: 'Een bevestigingsmail is verzonden naar uw e-mailadres.',
        nextStepsTitle: 'Wat gebeurt er nu?',
        step1: 'U ontvangt binnen 24 uur een bevestigingsmail',
        step2: 'Wij stellen uw wijnselectie zorgvuldig samen',
        step3: 'Uw wijnabonnement wordt verzonden binnen 3-5 werkdagen',
        backToHome: 'Terug naar home',
        exploreBlog: 'Ontdek onze blog',
        payment: 'Betaling',
        status: 'Status',
        completed: 'Voltooid'
      },
      notFound: {
        title: 'Pagina niet gevonden',
        subtitle: 'De pagina die u zoekt bestaat niet of is verplaatst',
        message: 'Het lijkt erop dat deze fles niet in onze kelder te vinden is. Laten we u terugbrengen naar onze collectie.',
        backToHome: 'Terug naar home',
        contactUs: 'Neem contact op',
        errorCode: 'Foutcode: 404'
      },
      paymentFailed: {
        title: 'Betaling niet voltooid',
        subtitle: 'Uw betaling kon niet worden verwerkt',
        explanation: 'Dit kan gebeuren als u de betaling hebt geannuleerd of als er een probleem was met uw betaalmethode.',
        tryAgainText: 'Opnieuw proberen',
        contactText: 'Neem contact op',
        needHelp: 'Hulp nodig? Neem contact op met ons supportteam.',
        statusText: 'Niet voltooid'
      },
      hero: {
        title: 'Privé Sommelier België',
        subtitle: 'Uw Privé Sommelier voor Exclusieve Wijnervaringen',
        tagline: 'Wijn is een kunst van beleving, verfijning en emotie.',
        cta: 'Neem contact op',
        imageAlt: 'Privé sommelier schenkt rode wijn in tijdens exclusieve wijndegustatie in België'
      },
      seo: {
        title: 'Privé Sommelier België | Sommelier Quintelier',
        description: 'Zoekt u een privé sommelier in België? Yentl Quintelier biedt exclusieve wijnervaringen, degustaties en wijnadvies op maat. Sommelier of the Year 2022.'
      },
      intro: {
        opening: 'Wijn is een kunst van beleving, verfijning en emotie.',
        paragraph1: 'Als uw privé sommelier creëer ik exclusieve wijnervaringen voor fijnproevers, restaurants en privé-events. Ik bied wijnadvies, degustaties en kelderbeheer op maat, met oog voor harmonie tussen smaak, stijl en identiteit.',
        paragraph2: 'Elke samenwerking vertrekt vanuit jouw verhaal, met wijn als rode draad door smaak, stijl en emotie. Als privé sommelier in België sta ik garant voor persoonlijke begeleiding.',
        paragraph3: 'Van kelder tot glas, van advies tot beleving – als uw privé sommelier breng ik de essentie van wijn tot leven in haar meest verfijnde vorm.'
      },
      services: {
        title: 'Onze Diensten',
        subtitle: 'Professionele wijndiensten op maat, van consultancy tot exclusieve degustaties',
        seo: {
          description: 'Professionele wijnconsultancy diensten in België: wijnabonnementen, private tastings, wijnlijstcuratie, en kelderbeheer door Sommelier of the Year 2022.',
          ogDescription: 'Professionele wijnconsultancy diensten in België: wijnabonnementen, private tastings, wijnlijstcuratie, en kelderbeheer.'
        },
        consultancy: {
          title: 'Wijnconsultancy',
          description: 'Professioneel advies voor uw perfecte wijnkeuze bij elke gelegenheid',
          subtitle: 'Van selectie tot strategie: wijnadvies op maat.',
          intro: 'Als freelance sommelier begeleid ik zowel restaurants als particulieren in het selecteren, inkopen en beheren van wijnen. Samen zoeken we naar de perfecte balans tussen kwaliteit, stijl en budget, met aandacht voor identiteit en beleving. Elke klant krijgt een persoonlijk advies, geen standaardlijst, maar een wijnselectie die aansluit bij jouw smaak, zaak of concept. Van kelder tot kaart, van glas tot ervaring: wijnadvies op maat, met passie en precisie.',
          keyTakeaways: [
            'Persoonlijk advies afgestemd op uw identiteit en concept',
            'Perfecte balans tussen kwaliteit, stijl en budget',
            'Begeleiding voor restaurants én particulieren',
            'Van selectie tot inkoop en beheer'
          ],
          collectionsTitle: 'Exclusieve Wijncollecties',
          bourgogneTitle: 'Top Uit Bourgogne',
          bourgogneDescription: 'Een selectie van de meest prestigieuze wijnen uit de Bourgogne regio, zorgvuldig uitgekozen voor hun uitzonderlijke kwaliteit en karakter.',
          drcTitle: 'Domaine de la Romanée-Conti',
          drcDescription: 'De meest begeerde wijnen ter wereld. Een collectie van legendarische Grand Cru wijnen die het toppunt van verfijning en elegantie vertegenwoordigen.'
        },
        cellar: {
          title: 'Privé Wijnkelder',
          shortTitle: 'Privé Wijnkelder',
          description: 'Beheer en onderhoud van uw persoonlijke wijncollectie',
          subtitle: 'Een zorgeloze wijnkelder, perfect georganiseerd.',
          intro: 'Of je nu een beginnende verzamelaar bent of een uitgebreide collectie bezit, een goed georganiseerde kelder is essentieel. Ik bied professioneel advies, inventarisatie en onderhoud van privé-wijnkelders: van temperatuurcontrole en opslagadvies tot aankoop- en rotatieplanning. Zo blijft je collectie niet alleen op punt, maar ook klaar om op elk moment van te genieten.',
          keyTakeaways: [
            'Professionele inventarisatie en organisatie',
            'Temperatuurcontrole en opslagadvies',
            'Aankoop- en rotatieplanning',
            'Voor zowel beginnende als ervaren verzamelaars'
          ]
        },
        tasting: {
          title: 'Wijndegustaties',
          description: 'Exclusieve proeverijen op maat voor uw evenement',
          subtitle: 'Ontdek, proef en leer met een sommelier aan je zijde.',
          intro: 'Een degustatie is meer dan alleen wijn proeven, het is een ervaring, een moment van ontdekking. Tijdens mijn gepersonaliseerde wijndegustaties neem ik je mee door verschillende stijlen, regio\'s en verhalen. Elke sessie wordt aangepast aan jouw kennisniveau, interesses of thema (regio, druif, foodpairing...). Ideaal voor bedrijven, groepen, of privé-evenementen die op zoek zijn naar een originele en sfeervolle beleving.',
          keyTakeaways: [
            'Gepersonaliseerde sessies afgestemd op uw niveau',
            'Thematische degustaties naar keuze',
            'Ideaal voor bedrijven en privé-evenementen',
            'Een ervaring, geen proeverij'
          ]
        },
        menu: {
          title: 'Wijnkaart op Maat',
          description: 'Samengestelde wijnkaarten voor restaurants en hotels',
          subtitle: 'Een wijnkaart die past bij jouw keuken en concept.',
          intro: 'Een sterke wijnkaart is meer dan een lijst flessen, het is een verlengstuk van je verhaal. Ik help restaurants en horecazaken bij het opbouwen of verfijnen van hun wijnkaart, met focus op harmonie met de gerechten, seizoensinvloeden en margeoptimalisatie. Elke selectie wordt samengesteld op maat van jouw zaak, doelgroep en filosofie.',
          keyTakeaways: [
            'Harmonie met uw gerechten en concept',
            'Seizoensinvloeden en margeoptimalisatie',
            'Afgestemd op uw doelgroep en filosofie',
            'Van opbouw tot verfijning'
          ]
        },
        subscription: {
          title: 'Wijnabonnementen',
          shortTitle: 'Abonnementen',
          description: 'Zorgvuldig samengesteld & verpakt',
          subtitle: 'Elke fles vertelt een verhaal: van terroir tot vakmanschap tot passie',
          body: 'Elke maand kan u genieten van een nieuwe selectie wijnen die met zorg, kennis en finesse werden gekozen door onze sommelier. Onze wijnabonnementen brengen de wereld van wijn tot bij u. Zorgvuldig samengesteld en vergezeld van inspirerende proefnotities en pairingtips.',
          flexibility: 'Flexibel genieten',
          flexibilityText: 'Onze abonnementen zijn maandelijks beschikbaar. Je kunt ze eenvoudig pauzeren, aanpassen of beëindigen wanneer je wil. Ook voor wie graag eerst wenst te ontdekken zijn de pakketten per keer verkrijgbaar.',
          howItWorks: 'Hoe het werkt',
          step1Title: 'Kies uw pakket',
          step1Description: 'Selecteer het abonnement dat bij uw smaak past',
          step2Title: 'Maandelijkse levering',
          step2Description: 'Ontvangt uw wijnselectie rechtstreeks thuis',
          step3Title: 'Ontdek & geniet',
          step3Description: 'Proef met de bijgevoegde proefnotities en pairings',
          bottlesCount: 'flessen',
          featured: {
            title: 'Expérience Prestige',
            tagline: 'De topselectie',
            description: 'Drie of zes uitzonderlijke wijnen, rechtstreeks van exclusieve domeinen.',
            priceFrom: 'Vanaf',
            price3: '€250',
            price6: '€480',
            perMonth: '/maand',
            benefits: [
              'Uitzonderlijke wijnen van exclusieve domeinen',
              'Inclusief proefnotities en pairings',
              'Maandelijks opzegbaar'
            ],
            cta: 'Ontdek meer',
            bottles: '3 of 6 flessen per maand'
          },
          tiers: {
            selection: {
              name: 'Sélection Élégance',
              tagline: 'Voor wie houdt van elegantie in eenvoud',
              description: 'Een stijlvolle kennismaking met de wereld van wijn. Drie of zes zorgvuldig geselecteerde flessen per maand, telkens met karakter, balans en verfijning.',
              price3: '€55',
              price6: '€100',
              bottles3: '3 flessen',
              bottles6: '6 flessen',
              content3: '1 fris wit + 1 vol wit + 1 rood',
              content6: '2 fris wit + 2 vol wit + 2 rood',
              features: [
                'Karakter, balans en verfijning',
                'Inclusief proefnotities',
                'Suggestie voor perfecte foodpairing',
                'Maandelijks opzegbaar'
              ],
              extras: [
                '+ 1 Fles Champagne: €20',
                '+ 1 Fles dessertwijn: €20'
              ]
            },
            cuvee: {
              name: 'Cuvée Curieuse',
              tagline: 'Voor de nieuwsgierige liefhebber met een verfijnde smaak',
              description: 'Een stap verder in de wereld van smaak. Drie of zes expressieve wijnen die samen een thema vormen, een regio, druif of stijl.',
              price3: '€110',
              price6: '€200',
              bottles3: '3 flessen',
              bottles6: '6 flessen',
              content3: '1 fris wit + 1 vol wit + 1 rood',
              content6: '2 fris wit + 2 vol wit + 2 rood',
              features: [
                'Expressieve wijnen met thema',
                'Inclusief proefnotities',
                'Suggestie voor perfecte foodpairing',
                'Maandelijks opzegbaar'
              ],
              extras: [
                '+ 1 Fles Champagne: €35',
                '+ 1 Fles dessertwijn: €35'
              ]
            },
            prestige: {
              name: 'Expérience Prestige',
              tagline: 'Voor wie de essentie van wijn op het hoogste niveau wil beleven',
              description: 'De topselectie. Drie of zes uitzonderlijke wijnen, rechtstreeks van exclusieve domeinen, telkens met een eigen karakter en klasse. Een luxueuze ervaring, perfect voor kenners en verzamelaars.',
              price3: '€250',
              price6: '€480',
              bottles3: '3 flessen',
              bottles6: '6 flessen',
              content3: '1 fris wit + 1 vol wit + 1 rood',
              content6: '2 fris wit + 2 vol wit + 2 rood',
              features: [
                'Uitzonderlijke wijnen van exclusieve domeinen',
                'Inclusief proefnotities',
                'Suggestie voor perfecte foodpairing',
                'Maandelijks opzegbaar'
              ],
              extras: [
                '+ 1 Fles Champagne: €85',
                '+ 1 Fles dessertwijn: €85'
              ]
            },
            champagne: {
              name: 'Champagne Signature',
              tagline: 'Voor wie champagne niet enkel als feestmoment ziet, maar als een kunstvorm op zich',
              description: 'De essentie van verfijning, gevangen in bubbels. Ontdek een exclusieve selectie champagnes van onafhankelijke huizen en gerenommeerde Maisons. Elk met een eigen karakter, finesse en signatuur.',
              price3: '€150',
              price6: '€275',
              bottles3: '3 flessen',
              bottles6: '6 flessen',
              content3: '1 fles instap + 1 fles middel + 1 fles prestige',
              content6: '2 flessen instap + 2 flessen middel + 2 flessen prestige',
              features: [
                'Champagnes met persoonlijkheid',
                'Passie, kunst en terroir',
                'Harmonieuze balans tussen elegantie en complexiteit',
                'Onze sommelier selecteert met zorg'
              ]
            },
            custom: {
              name: 'Pakket op Maat',
              tagline: 'Maatwerk met karakter, geleverd met elegantie',
              description: 'Voor bijzondere gelegenheden, zakelijke geschenken of privé-evenementen bieden wij wijnpakketten op maat. Onze sommelier stelt een selectie samen die perfect aansluit bij jouw wensen, smaakprofiel en budget.',
              price: 'Op maat',
              bottles: 'Op maat',
              features: [
                'Volledig op maat samengesteld',
                'Perfect voor bijzondere gelegenheden',
                'Zakelijke geschenken en relatiegeschenken',
                'Met zorg samengesteld en verpakt'
              ]
            }
          },
          cta: 'Kies dit pakket',
          perMonth: '/maand',
          popularBadge: 'Populair',
          options: 'Opties',
          content: 'Inhoud',
          customPackageForm: {
            title: 'Pakket op Maat - Aanvraagformulier',
            description: 'Vertel ons meer over uw wensen, zodat wij het perfecte wijnpakket voor u kunnen samenstellen.',
            champagneLabel: 'Had u graag Champagne gewenst?',
            champagneYes: 'Ja',
            champagneNo: 'Nee',
            champagneQuantity: 'Hoeveel flessen Champagne?',
            whiteWineLabel: 'Hoeveel flessen witte wijn had u gewenst?',
            redWineLabel: 'Hoeveel flessen rode wijn had u gewenst?',
            dessertWineLabel: 'Had u graag een dessertwijn gewenst?',
            dessertWineYes: 'Ja',
            dessertWineNo: 'Nee',
            dessertWineQuantity: 'Hoeveel flessen dessertwijn?',
            budgetLabel: 'Welk budget hebt u over voor dit gepersonaliseerd wijnpakket?',
            budgetOptions: {
              '0-50': '€0 - €50',
              '50-100': '€50 - €100',
              '100-150': '€100 - €150',
              '150-250': '€150 - €250',
              '250-500': '€250 - €500',
              '500+': '€500+'
            },
            wishesLabel: 'Had u nog andere wensen of vragen?',
            wishesPlaceholder: 'Beschrijf hier uw specifieke wensen, voorkeuren, evenement of vragen...',
            emailLabel: 'Uw e-mailadres',
            emailPlaceholder: 'naam@voorbeeld.be',
            nameLabel: 'Uw naam',
            namePlaceholder: 'Uw volledige naam',
            phoneLabel: 'Telefoonnummer (optioneel)',
            phonePlaceholder: '+32 XXX XX XX XX',
            submit: 'Verstuur aanvraag',
            cancel: 'Annuleren',
            sending: 'Verzenden...',
            success: 'Uw aanvraag is succesvol verzonden!',
            successMessage: 'We nemen zo snel mogelijk contact met u op om uw gepersonaliseerd wijnpakket te bespreken.',
            error: 'Er is iets misgegaan',
            errorMessage: 'Probeer het later opnieuw of neem rechtstreeks contact met ons op.',
            bottles: 'flessen',
            selectBudget: 'Selecteer uw budget',
            nameRequired: 'Naam is verplicht',
            emailInvalid: 'Ongeldig e-mailadres',
            budgetRequired: 'Selecteer een budget',
            champagneQuantityRequired: 'Voer het aantal flessen Champagne in',
            dessertWineQuantityRequired: 'Voer het aantal flessen dessertwijn in'
          }
        },
        private: {
          title: 'Privé Sommelier',
          description: 'Persoonlijke begeleiding voor alle wijnbehoeften',
          subtitle: 'Een sommelier, exclusief voor jouw event, lunch of diner.',
          intro: 'Wil je een privé-etentje of evenement nét dat tikkeltje extra geven? Als privé sommelier verzorg ik de selectie, service en presentatie van wijnen aan huis of op locatie. Ik zorg voor de perfecte pairing bij jouw menu, vertel het verhaal achter elke wijn en creëer een ontspannen, professionele sfeer aan tafel. Ideaal voor thuisdiners, huwelijken, bedrijfsevents of exclusieve feesten.',
          keyTakeaways: [
            'Exclusieve service aan huis of op locatie',
            'Perfecte pairing bij uw menu',
            'Professionele sfeer aan tafel',
            'Voor thuisdiners, huwelijken en bedrijfsevents'
          ],
          atmosphereTitle: 'Een Verfijnde Ervaring',
          atmosphereDescription: 'Van intieme privé-diners tot grootse evenementen, ik creëer de perfecte wijnbeleving in elke setting. Met oog voor detail en een passie voor service, zorg ik ervoor dat elke fles een verhaal vertelt en elke toast een herinnering wordt.'
        },
        tastingBody: 'Komt er een bijzondere gelegenheid aan en wil je verrassen met een unieke wijnervaring? Ik organiseer exclusieve wijndegustaties die perfect zijn afgestemd op jouw wensen en budget. Of het nu gaat om een intiem samenzijn of een groter evenement, ik zorg voor een onvergetelijke smaakbeleving.',
        menuBody: 'Als restauranteigenaar wil je je gasten verrassen met de perfecte wijnkaart. Ik help je met het samenstellen van een wijnkaart die perfect aansluit bij je menu en concept. Van beginnende restaurants tot gevestigde namen, ik zorg dat het plaatje klopt.',
        moreInfo: 'Meer info'
      },
      about: {
        title: 'Over Yentl Quintelier',
        description: 'Wijn is voor mij meer dan een passie, het is een levensverhaal in geur, smaak en emotie.',
        cta: 'Lees meer',
        intro: 'Wijn is voor mij meer dan een passie',
        paragraph1: 'Ik ben Yentl Quintelier, sommelier met hart en ziel. Mijn reis begon op jonge leeftijd, met een droom om chef te worden. Tijdens mijn opleiding aan de Hotelschool Stella Matutina ontdekte ik echter een andere wereld: die van wijn. De finesse, de traditie, het verhaal achter elke fles, het liet me niet meer los.',
        paragraph2: 'Na een specialisatie in restaurantbeheer en drankenkennis - bekroond met de prijs voor beste leerling van het jaar - mocht ik ervaring opdoen bij enkele van de mooiste restaurants in België: Hertog Jan, Le Château du Mylord, La Table de Maxime en Nuance, waar ik als sommelier instond voor wine pairing, hospitality en het beheer van de wijnkelder.',
        paragraph3: 'In 2022 werd ik uitgeroepen tot Sommelier of the Year Belgium, een erkenning die mijn passie nog meer heeft aangewakkerd.',
        paragraph4: 'Vandaag werk ik als freelance sommelier op zelfstandige basis. Ik bied een breed scala aan diensten aan: van degustaties en wijnadvies tot het onderhoud en beheer van privé-wijnkelders. Of het nu gaat om een glas dat perfect past bij een gerecht of om een kelder die een verhaal vertelt, ik geloof dat wijn altijd een beleving hoort te zijn.',
        award: 'Sommelier of the Year Belgium 2022',
        featured: 'In de pers',
        articleTitle: 'Yentl Quintelier: "Ik wilde minimaal in een tweesterrenrestaurant werken"',
        articleDescription: 'Een kijkje in het artikel van L\'Avenir over Yentl Quintelier, één van de nieuwe sommeliers van het jaar. Lees meer over zijn passie voor wijn en zijn ambities.',
        hlnArticle: {
          title: 'Welke wijn serveer je bij mosselen?',
          description: 'In dit artikel voor HLN geeft Yentl advies over de perfecte wijnkeuze bij mosselen. Van frisse witte wijnen tot verrassende rode opties.',
          source: 'HLN.be',
          date: 'Augustus 2023',
          cta: 'Lees het artikel'
        }
      },
      newsletter: {
        title: 'Blijf op de hoogte',
        description: 'Meld je aan voor exclusieve tips, nieuws en aanbiedingen',
        placeholder: 'Uw e-mailadres',
        cta: 'Inschrijven',
        privacy: 'We respecteren uw privacy en spammen niet',
        subscribing: 'Inschrijven...',
        validation: {
          emailInvalid: 'Ongeldig e-mailadres'
        },
        success: {
          title: 'Inschrijving geslaagd!',
          message: 'Bedankt voor uw inschrijving. U ontvangt binnenkort onze nieuwsbrief.'
        },
        error: {
          title: 'Fout bij inschrijven',
          message: 'Er is iets misgegaan. Probeer het later opnieuw.',
          alreadySubscribed: 'Dit e-mailadres is al ingeschreven voor onze nieuwsbrief'
        }
      },
      contact: {
        title: 'Neem Contact Op',
        name: 'Naam',
        email: 'E-mail',
        phone: 'Telefoon',
        message: 'Bericht',
        submit: 'Verzenden',
        sending: 'Verzenden...',
        info: 'Heeft u vragen of wilt u meer informatie? Neem vrijblijvend contact met ons op.',
        location: 'Locatie',
        emailLabel: 'Email',
        validation: {
          nameRequired: 'Naam is verplicht (minimaal 2 tekens)',
          emailInvalid: 'Ongeldig e-mailadres',
          messageRequired: 'Bericht is verplicht (minimaal 10 tekens)'
        },
        success: {
          title: 'Bericht verzonden!',
          message: 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.'
        },
        error: {
          title: 'Fout bij verzenden',
          message: 'Er is iets misgegaan. Probeer het later opnieuw.'
        }
      },
      footer: {
        tagline: 'Fine Wine Adventures',
        location: 'België',
        rights: 'Alle rechten voorbehouden',
        brandDescription: 'Fine Wine Adventures door Yentl Quintelier.\nOntdek de wereld van wijn met expert begeleiding.',
        contentTitle: 'Content',
        servicesTitle: 'Services',
        contactTitle: 'Contact',
        newsletterTitle: 'Nieuwsbrief',
        newsletterDescription: 'Blijf op de hoogte van exclusieve wijnervaringen en aanbiedingen',
        emailPlaceholder: 'Uw e-mailadres',
        subscribe: 'Inschrijven',
        home: 'Home',
        about: 'Over',
        blog: 'Blog',
        gallery: 'Galerij',
        contactPage: 'Contact',
        subscriptions: 'Abonnementen',
        tastings: 'Wijndegustaties',
        menu: 'Wijnkaart op Maat',
        consultancy: 'Wijnconsultancy',
        private: 'Privé Sommelier',
        cellar: 'Privé Wijnkelder',
        email: 'info@yentlquintelier.com',
        locationText: 'Oost-Vlaanderen, België',
        copyright: 'Sommelier.Quintelier - Alle rechten voorbehouden.',
        privacy: 'Privacybeleid',
        terms: 'Algemene Voorwaarden',
        cookies: 'Cookies',
        cancelSubscription: 'Abonnement Opzeggen',
        madeBy: 'Gemaakt met passie door'
      },
      cancelSubscription: {
        pageTitle: 'Abonnement Opzeggen',
        pageDescription: 'Zeg uw wijnabonnement op',
        title: 'Abonnement Opzeggen',
        description: 'Voer uw e-mailadres in om een opzeglink te ontvangen. Deze link is 24 uur geldig.',
        emailLabel: 'E-mailadres',
        emailPlaceholder: 'uw@email.be',
        emailInvalid: 'Ongeldig e-mailadres',
        important: 'Belangrijk',
        importantNote: 'U ontvangt een beveiligde link via e-mail om uw opzegging te bevestigen. Deze link is 24 uur geldig.',
        processing: 'Verwerken...',
        sendLink: 'Stuur opzeglink',
        requestSent: 'Link verzonden',
        checkEmail: 'Controleer uw e-mail voor de opzeglink',
        error: 'Fout',
        errorMessage: 'Er is iets misgegaan. Probeer het opnieuw.',
        successTitle: 'Link verzonden!',
        successMessage: 'We hebben een beveiligde opzeglink naar uw e-mail gestuurd.',
        linkExpiry: 'Deze link is 24 uur geldig.',
        confirmTitle: 'Bevestig opzegging',
        confirmDescription: 'Bevestig de opzegging van uw wijnabonnement',
        confirmWarning: 'Deze actie kan niet ongedaan worden gemaakt',
        confirmWarningTitle: 'Let op',
        confirmPoint1: 'Uw abonnement wordt onmiddellijk geannuleerd',
        confirmPoint2: 'Er worden geen verdere betalingen in rekening gebracht',
        confirmPoint3: 'U behoudt toegang tot de huidige maand',
        confirmButton: 'Ja, opzeggen',
        keepSubscription: 'Behouden',
        noToken: 'Ongeldige of ontbrekende opzeglink',
        cancelSuccess: 'Abonnement opgezegd',
        cancelSuccessMessage: 'Uw wijnabonnement is succesvol opgezegd.',
        cancelSuccessDetail: 'Er worden geen verdere betalingen in rekening gebracht. U ontvangt een bevestigingsmail.',
        confirmError: 'Fout bij opzegging',
        backHome: 'Terug naar home',
        requestNewLink: 'Vraag nieuwe link aan'
      },
      blog: {
        allArticles: 'Alle artikelen',
        readMore: 'Lees meer',
        minutes: 'min',
        readTime: 'min leestijd',
        subtitle: 'Ontdek alles over wijn, druivensoorten en wijnkennis',
        backToBlog: 'Terug naar blog',
        relatedArticles: 'Gerelateerde artikelen',
        notFound: 'Artikel niet gevonden',
        tableOfContents: 'Inhoudsopgave',
        summary: 'Samenvatting',
        keyTakeaways: 'Belangrijkste Punten',
        categories: {
          all: 'Alles',
          druiven: 'Druiven',
          tips: 'Tips',
          service: 'Service'
        }
      },
      breadcrumbs: {
        home: 'Home',
        blog: 'Blog',
        about: 'Over',
        gallery: 'Galerij',
        contact: 'Contact',
        privacy: 'Privacybeleid',
        terms: 'Algemene Voorwaarden',
        cookies: 'Cookiebeleid'
      },
      legal: {
        privacy: {
          title: 'Privacybeleid',
          lastUpdate: 'November 2025',
          metaDescription: 'Privacybeleid van Sommelier Quintelier - Hoe wij uw persoonlijke gegevens beschermen en gebruiken.'
        },
        terms: {
          title: 'Algemene Voorwaarden',
          lastUpdate: 'November 2025',
          metaDescription: 'Algemene voorwaarden van Sommelier Quintelier voor diensten en wijnabonnementen.'
        },
        cookies: {
          title: 'Cookiebeleid',
          lastUpdate: 'November 2025',
          metaDescription: 'Cookiebeleid van Sommelier Quintelier - Informatie over het gebruik van cookies op onze website.'
        }
      },
      modal: {
        included: 'Inbegrepen:',
        extras: 'Optionele extra\'s:',
        viewAll: 'Bekijk alle abonnementen'
      },
      productDetail: {
        backToShop: 'Terug naar winkel',
        region: 'Regio',
        country: 'Land',
        grape: 'Druif',
        vintage: 'Jaargang',
        alcohol: 'Alcohol',
        volume: 'Inhoud',
        sommelierNotes: 'Sommelier Notities',
        addToCart: 'In winkelwagen',
        productNotFound: 'Product niet gevonden'
      },
      shop: {
        title: 'Wijnwinkel',
        subtitle: 'Ontdek onze exclusieve wijnselectie',
        comingSoon: 'Binnenkort beschikbaar',
        comingSoonText: 'Onze online wijnwinkel is momenteel in ontwikkeling. Binnenkort kunt u hier onze exclusieve wijnselectie ontdekken en bestellen.',
        filters: {
          all: 'Alle',
          red: 'Rood',
          white: 'Wit',
          rose: 'Rosé',
          champagne: 'Champagne',
          dessert: 'Dessert'
        },
        sommelierChoice: "Sommelier's keuze",
        price: 'Prijs',
        region: 'Regio',
        grape: 'Druif',
        vintage: 'Jaargang',
        volume: 'Inhoud',
        alcohol: 'Alcohol',
        addToCart: 'In winkelwagen',
        viewDetails: 'Bekijk details',
        noWinesFound: 'Geen wijnen gevonden',
        wines: {
          'puligny-montrachet': { notes: 'Verfijnd en mineraal met tonen van witte bloesem en citrus. Ideaal bij zeevruchten.' },
          'chateau-margaux': { notes: 'Een meesterwerk van elegantie. Intens bouquet van cassis en violet, zijdezachte tannines.' },
          'ruinart-blanc-de-blancs': { notes: 'Fijne perlage met elegante tonen van wit fruit en brioche. Perfect als aperitief.' },
          'tempier-bandol-rose': { notes: 'De referentie voor Bandol rosé. Subtiel, gastronomisch en verfijnd.' },
          'chateau-dyquem': { notes: 'Legendarische dessertwijn. Ongeëvenaarde complexiteit en balans tussen zoetheid en frisheid.' },
          'drc-echezeaux': { notes: 'Het summum van Bourgogne. Ongelooflijke finesse en een eeuwigdurende afdronk.' }
        }
      },
      gallery: {
        title: 'Galerij',
        subtitle: 'Sfeerbeelden van evenementen, proeverijen en de wereld van wijn',
        categories: {
          premium: 'Premium Collectie',
          vintage: 'Vintage Wijnen',
          champagne: 'Champagne',
          dessert: 'Dessertwijn',
          awards: 'Prijzen',
          vineyards: 'Wijngaarden',
          cellar: 'Wijnkelder',
          tasting: 'Proeverijen',
          spirits: 'Gedistilleerd',
          education: 'Educatie'
        },
        images: {
          pommard: 'Pommard Clos Epeneaux',
          rousseau: 'Clos de la Roche 1996',
          agrapart: 'Agrapart et Fils',
          vouvray: 'Vouvray Le Mont 1995',
          bollingerSign: 'Maison Bollinger',
          collection: 'Exclusieve Selectie',
          yquem: 'Château d\'Yquem 6L',
          clicquotCork: 'La Grande Dame Kurk',
          bollingerBarrel: 'Bollinger Eiken Vat',
          ayala: 'Maison Ayala',
          certan: 'Vieux Château Certan',
          award: 'Sommelier van het Jaar',
          loireVineyard: 'Wijngaard Loire',
          cellarBarrels: 'Traditionele Kelder',
          krug: 'Krug Clos du Mesnil 2000',
          jancisRobinson: 'Jancis Robinson Wine Encyclopedia',
          rousseau2016: 'Armand Rousseau Grand Cru 2016',
          tastingAtmosphere: 'Wijnproeverij Sfeer',
          whiskyCollection: 'Exclusieve Whisky Collectie',
          paillardCorks: 'Bruno Paillard Champagne Kurken',
          remuageCellar: 'Remuage in Champagne Kelder',
          concreteEggs: 'Betonnen Gist-eieren',
          amphoras: 'Terracotta Amfora\'s',
          event: 'Wine tasting evenement',
          sommelierExamining: 'Sommelier wijn onderzoeken',
          cellarCollection: 'Premium wijnkelder',
          vineyard: 'Wijngaard landschap',
          restaurantService: 'Restaurant wijnservice',
          workshop: 'Wijn educatie workshop',
          bottleCollection: 'Premium wijnflessen',
          privateTasting: 'Privé wijnproeverij',
          consultation: 'Restaurant consultatie',
          pairing: 'Wijn en kaas pairing',
          label: 'Wijnlabel onderzoeken',
          barrelCellar: 'Traditionele wijnkelder'
        }
      }
    }
  },
  en: {
    translation: {
      announcement: {
        message: 'This website is currently under construction. Prices and labels may differ from reality.'
      },
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        blog: 'Blog',
        gallery: 'Gallery',
        contact: 'Contact',
        cart: 'Cart'
      },
      checkout: {
        title: 'Checkout',
        description: 'Enter your details to complete your order',
        processing: 'Processing...',
        completePayment: 'Proceed to Payment',
        success: 'Payment Successful',
        successMessage: 'Thank you for your order!',
        error: 'Payment Failed',
        errorMessage: 'Something went wrong. Please try again.',
        mollieRedirectInfo: 'You will be redirected to Mollie to securely complete your payment. After payment, you will automatically return to our website.',
        extras: 'Extras',
        extraChampagne: 'Bottle Champagne',
        extraDessert: 'Bottle Dessert Wine',
        ageConfirmation: 'I confirm that I am 18 years or older',
        contactInformation: 'Contact Information',
        deliveryAddress: 'Delivery Address',
        optional: 'optional',
        nameLabel: 'Name',
        namePlaceholder: 'Full name',
        nameRequired: 'Name is required',
        emailLabel: 'Email address',
        emailPlaceholder: 'your@email.com',
        emailInvalid: 'Invalid email address',
        phoneLabel: 'Phone number',
        phonePlaceholder: '+32 xxx xx xx xx',
        addressLabel: 'Street and number',
        addressPlaceholder: 'Street name 123',
        addressRequired: 'Address is required',
        cityLabel: 'City',
        cityPlaceholder: 'Brussels',
        cityRequired: 'City is required',
        postalCodeLabel: 'Postal code',
        postalCodePlaceholder: '1000',
        postalCodeRequired: 'Postal code is required',
        countryLabel: 'Country',
        countryPlaceholder: 'Select country',
        countryRequired: 'Country is required',
        ageConfirmationRequired: 'You must confirm you are 18+',
        recurringBilling: 'Monthly Subscription',
        recurringDescription: 'This is a recurring subscription that automatically renews monthly. You can cancel at any time.'
      },
      ageGate: {
        title: 'Welcome to Sommelier Quintelier',
        subtitle: 'Age Verification Required',
        description: 'This website contains information about alcoholic beverages. Please enter your date of birth to confirm that you are at least 18 years old.',
        dayLabel: 'Day',
        monthLabel: 'Month',
        yearLabel: 'Year',
        dayPlaceholder: 'DD',
        monthPlaceholder: 'MM',
        yearPlaceholder: 'YYYY',
        confirmButton: 'Confirm Age',
        underageError: 'You must be at least 18 years old to visit this website.',
        invalidDateError: 'Please enter a valid date of birth.',
        legalDrinkingAge: 'The legal minimum age for alcohol consumption in Belgium is 18 years.',
        responsibleConsumption: 'Drink responsibly. Alcohol is harmful to your health.',
        privacyNotice: 'Your date of birth will not be stored. This verification is only used to check your age.'
      },
      thankYou: {
        title: 'Thank You for Your Order',
        subtitle: 'Your payment has been successfully processed',
        confirmation: 'We have received your order and it will be processed shortly.',
        emailSent: 'A confirmation email has been sent to your email address.',
        nextStepsTitle: 'What happens next?',
        step1: 'You will receive a confirmation email within 24 hours',
        step2: 'We will carefully curate your wine selection',
        step3: 'Your wine subscription will be shipped within 3-5 business days',
        backToHome: 'Back to home',
        exploreBlog: 'Explore our blog',
        payment: 'Payment',
        status: 'Status',
        completed: 'Completed'
      },
      notFound: {
        title: 'Page Not Found',
        subtitle: 'The page you are looking for does not exist or has been moved',
        message: 'It seems this bottle is not in our cellar. Let us bring you back to our collection.',
        backToHome: 'Back to home',
        contactUs: 'Contact us',
        errorCode: 'Error code: 404'
      },
      paymentFailed: {
        title: 'Payment not completed',
        subtitle: 'Your payment could not be processed',
        explanation: 'This can happen if you cancelled the payment or if there was an issue with your payment method.',
        tryAgainText: 'Try Again',
        contactText: 'Contact Us',
        needHelp: 'Need help? Contact our support team.',
        statusText: 'Not completed'
      },
      hero: {
        title: 'Private Sommelier Belgium',
        subtitle: 'Your Private Sommelier for Exclusive Wine Experiences',
        tagline: 'Wine is an art of experience, refinement and emotion.',
        cta: 'Contact Us',
        imageAlt: 'Private sommelier pouring red wine during exclusive wine tasting in Belgium'
      },
      seo: {
        title: 'Private Sommelier Belgium | Sommelier Quintelier',
        description: 'Looking for a private sommelier in Belgium? Yentl Quintelier offers exclusive wine experiences, tastings and tailored wine advice. Sommelier of the Year 2022.'
      },
      intro: {
        opening: 'Wine is an art of experience, refinement and emotion.',
        paragraph1: 'As your private sommelier, I create exclusive wine experiences for connoisseurs, restaurants and private events. I offer tailored wine advice, tastings and cellar management, with an eye for harmony between taste, style and identity.',
        paragraph2: 'Every collaboration starts from your story, with wine as the common thread through taste, style and emotion. As a private sommelier in Belgium, I guarantee personal guidance.',
        paragraph3: 'From cellar to glass, from advice to experience – as your private sommelier I bring the essence of wine to life in its most refined form.'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Professional wine services tailored to you, from consultancy to exclusive tastings',
        seo: {
          description: 'Professional wine consultancy services in Belgium: wine subscriptions, private tastings, wine list curation, and cellar management by Sommelier of the Year 2022.',
          ogDescription: 'Professional wine consultancy services in Belgium: wine subscriptions, private tastings, wine list curation, and cellar management.'
        },
        consultancy: {
          title: 'Wine Consultancy',
          description: 'Professional advice for your perfect wine selection for any occasion',
          subtitle: 'From selection to strategy: tailored wine advice.',
          intro: 'As a freelance sommelier, I guide both restaurants and private clients in selecting, purchasing and managing wines. Together we look for the perfect balance between quality, style and budget, with attention to identity and experience. Every client receives personal advice, not a standard list, but a wine selection that matches your taste, business or concept. From cellar to list, from glass to experience: tailored wine advice, with passion and precision.',
          keyTakeaways: [
            'Personal advice tailored to your identity and concept',
            'Perfect balance between quality, style and budget',
            'Guidance for restaurants and private clients',
            'From selection to purchase and management'
          ],
          collectionsTitle: 'Exclusive Wine Collections',
          bourgogneTitle: 'Top from Burgundy',
          bourgogneDescription: 'A selection of the most prestigious wines from the Burgundy region, carefully chosen for their exceptional quality and character.',
          drcTitle: 'Domaine de la Romanée-Conti',
          drcDescription: 'The most sought-after wines in the world. A collection of legendary Grand Cru wines representing the pinnacle of refinement and elegance.'
        },
        cellar: {
          title: 'Management and Maintenance of your Private Wine Cellar',
          shortTitle: 'Private Wine Cellar',
          description: 'Management and maintenance of your personal wine collection',
          subtitle: 'A worry-free wine cellar, perfectly organized.',
          intro: 'Whether you are a beginning collector or have an extensive collection, a well-organized cellar is essential. I offer professional advice, inventory and maintenance of private wine cellars: from temperature control and storage advice to purchase and rotation planning. This way your collection not only stays in perfect condition, but is also ready to enjoy at any moment.',
          keyTakeaways: [
            'Professional inventory and organization',
            'Temperature control and storage advice',
            'Purchase and rotation planning',
            'For both beginning and experienced collectors'
          ]
        },
        tasting: {
          title: 'Wine Tastings',
          description: 'Exclusive tastings tailored to your event',
          subtitle: 'Discover, taste and learn with a sommelier by your side.',
          intro: 'A tasting is more than just tasting wine, it is an experience, a moment of discovery. During my personalized wine tastings I take you through different styles, regions and stories. Each session is adapted to your level of knowledge, interests or theme (region, grape, food pairing...). Ideal for companies, groups, or private events looking for an original and atmospheric experience.',
          keyTakeaways: [
            'Personalized sessions tailored to your level',
            'Thematic tastings of your choice',
            'Ideal for companies and private events',
            'An experience, not just a tasting'
          ]
        },
        menu: {
          title: 'Custom Wine List',
          description: 'Curated wine lists for restaurants and hotels',
          subtitle: 'A wine list that fits your cuisine and concept.',
          intro: 'A strong wine list is more than a list of bottles, it is an extension of your story. I help restaurants and hospitality businesses in building or refining their wine list, with focus on harmony with dishes, seasonal influences and margin optimization. Each selection is composed tailored to your business, target audience and philosophy.',
          keyTakeaways: [
            'Harmony with your dishes and concept',
            'Seasonal influences and margin optimization',
            'Tailored to your target audience and philosophy',
            'From building to refinement'
          ]
        },
        subscription: {
          title: 'Wine Subscriptions',
          shortTitle: 'Subscriptions',
          description: 'Carefully curated, elegantly packaged',
          subtitle: 'Every bottle tells a story: from terroir to craftsmanship to passion',
          body: 'Every month you can enjoy a new selection of wines chosen with care, knowledge and finesse by our sommelier. Our wine subscriptions bring the world of wine to you. Carefully curated, elegantly packaged, and accompanied by inspiring tasting notes and pairing tips.',
          flexibility: 'Flexible enjoyment',
          flexibilityText: 'Our subscriptions are available monthly. You can easily pause, adjust or cancel them whenever you want. For those who wish to discover first, the packages are also available one-time.',
          howItWorks: 'How it works',
          step1Title: 'Choose your package',
          step1Description: 'Select the subscription that fits your taste',
          step2Title: 'Monthly delivery',
          step2Description: 'Receive your wine selection directly at home',
          step3Title: 'Discover & enjoy',
          step3Description: 'Taste with the included tasting notes and pairings',
          bottlesCount: 'bottles',
          featured: {
            title: 'Expérience Prestige',
            tagline: 'The top selection',
            description: 'Three or six exceptional wines, directly from exclusive estates.',
            priceFrom: 'From',
            price3: '€250',
            price6: '€480',
            perMonth: '/month',
            benefits: [
              'Exceptional wines from exclusive estates',
              'Including tasting notes and pairings',
              'Monthly cancellable'
            ],
            cta: 'Discover more',
            bottles: '3 or 6 bottles per month'
          },
          tiers: {
            selection: {
              name: 'Sélection Élégance',
              tagline: 'For those who love elegance in simplicity',
              description: 'A stylish introduction to the world of wine. Three or six carefully selected bottles per month, each with character, balance and refinement.',
              price3: '€55',
              price6: '€100',
              bottles3: '3 bottles',
              bottles6: '6 bottles',
              content3: '1 crisp white + 1 full white + 1 red',
              content6: '2 crisp white + 2 full white + 2 red',
              features: [
                'Character, balance and refinement',
                'Including tasting notes',
                'Suggestion for perfect food pairing',
                'Monthly cancellable'
              ],
              extras: [
                '+ 1 Bottle Champagne: €20',
                '+ 1 Bottle dessert wine: €20'
              ]
            },
            cuvee: {
              name: 'Cuvée Curieuse',
              tagline: 'For the curious enthusiast with refined taste',
              description: 'A step further in the world of flavor. Three or six expressive wines that together form a theme, region, grape or style.',
              price3: '€110',
              price6: '€200',
              bottles3: '3 bottles',
              bottles6: '6 bottles',
              content3: '1 crisp white + 1 full white + 1 red',
              content6: '2 crisp white + 2 full white + 2 red',
              features: [
                'Expressive wines with theme',
                'Including tasting notes',
                'Suggestion for perfect food pairing',
                'Monthly cancellable'
              ],
              extras: [
                '+ 1 Bottle Champagne: €35',
                '+ 1 Bottle dessert wine: €35'
              ]
            },
            prestige: {
              name: 'Expérience Prestige',
              tagline: 'For those who want to experience the essence of wine at the highest level',
              description: 'The top selection. Three or six exceptional wines, directly from exclusive estates, each with its own character and class. A luxurious experience, perfect for connoisseurs and collectors.',
              price3: '€250',
              price6: '€480',
              bottles3: '3 bottles',
              bottles6: '6 bottles',
              content3: '1 crisp white + 1 full white + 1 red',
              content6: '2 crisp white + 2 full white + 2 red',
              features: [
                'Exceptional wines from exclusive estates',
                'Including tasting notes',
                'Suggestion for perfect food pairing',
                'Monthly cancellable'
              ],
              extras: [
                '+ 1 Bottle Champagne: €85',
                '+ 1 Bottle dessert wine: €85'
              ]
            },
            champagne: {
              name: 'Champagne Signature',
              tagline: 'For those who see champagne not just as a celebration, but as an art form',
              description: 'The essence of refinement, captured in bubbles. Discover an exclusive selection of champagnes from independent houses and renowned Maisons. Each with its own character, finesse and signature.',
              price3: '€150',
              price6: '€275',
              bottles3: '3 bottles',
              bottles6: '6 bottles',
              content3: '1 bottle entry + 1 bottle mid-range + 1 bottle prestige',
              content6: '2 bottles entry + 2 bottles mid-range + 2 bottles prestige',
              features: [
                'Champagnes with personality',
                'Passion, art and terroir',
                'Harmonious balance between elegance and complexity',
                'Our sommelier selects with care'
              ]
            },
            custom: {
              name: 'Custom Package',
              tagline: 'Craftsmanship with character, delivered with elegance',
              description: 'For special occasions, corporate gifts or private events, we offer custom wine packages. Our sommelier creates a selection that perfectly matches your wishes, taste profile and budget.',
              price: 'Custom',
              bottles: 'Custom',
              features: [
                'Fully customized',
                'Perfect for special occasions',
                'Corporate gifts and client gifts',
                'Carefully curated and packaged'
              ]
            }
          },
          cta: 'Choose this package',
          perMonth: '/month',
          popularBadge: 'Popular',
          options: 'Options',
          content: 'Content',
          customPackageForm: {
            title: 'Custom Package - Request Form',
            description: 'Tell us more about your wishes, so we can create the perfect wine package for you.',
            champagneLabel: 'Would you like Champagne?',
            champagneYes: 'Yes',
            champagneNo: 'No',
            champagneQuantity: 'How many bottles of Champagne?',
            whiteWineLabel: 'How many bottles of white wine would you like?',
            redWineLabel: 'How many bottles of red wine would you like?',
            dessertWineLabel: 'Would you like a dessert wine?',
            dessertWineYes: 'Yes',
            dessertWineNo: 'No',
            dessertWineQuantity: 'How many bottles of dessert wine?',
            budgetLabel: 'What is your budget for this personalized wine package?',
            budgetOptions: {
              '0-50': '€0 - €50',
              '50-100': '€50 - €100',
              '100-150': '€100 - €150',
              '150-250': '€150 - €250',
              '250-500': '€250 - €500',
              '500+': '€500+'
            },
            wishesLabel: 'Do you have any other wishes or questions?',
            wishesPlaceholder: 'Describe your specific wishes, preferences, event or questions...',
            emailLabel: 'Your email address',
            emailPlaceholder: 'name@example.com',
            nameLabel: 'Your name',
            namePlaceholder: 'Your full name',
            phoneLabel: 'Phone number (optional)',
            phonePlaceholder: '+32 XXX XX XX XX',
            submit: 'Submit request',
            cancel: 'Cancel',
            sending: 'Sending...',
            success: 'Your request has been successfully submitted!',
            successMessage: 'We will contact you as soon as possible to discuss your personalized wine package.',
            error: 'Something went wrong',
            errorMessage: 'Please try again later or contact us directly.',
            bottles: 'bottles',
            selectBudget: 'Select your budget',
            nameRequired: 'Name is required',
            emailInvalid: 'Invalid email address',
            budgetRequired: 'Select a budget',
            champagneQuantityRequired: 'Enter the number of Champagne bottles',
            dessertWineQuantityRequired: 'Enter the number of dessert wine bottles'
          }
        },
        private: {
          title: 'Private Sommelier',
          description: 'Personal guidance for all your wine needs',
          subtitle: 'A sommelier, exclusively for your event, lunch or dinner.',
          intro: 'Want to give a private dinner or event that extra touch? As a private sommelier I take care of the selection, service and presentation of wines at home or on location. I ensure the perfect pairing with your menu, tell the story behind each wine and create a relaxed, professional atmosphere at the table. Ideal for home dinners, weddings, corporate events or exclusive parties.',
          keyTakeaways: [
            'Exclusive service at home or on location',
            'Perfect pairing with your menu',
            'Professional atmosphere at the table',
            'For home dinners, weddings and corporate events'
          ],
          atmosphereTitle: 'A Refined Experience',
          atmosphereDescription: 'From intimate private dinners to grand events, I create the perfect wine experience in any setting. With an eye for detail and a passion for service, I ensure that every bottle tells a story and every toast becomes a memory.'
        },
        tastingBody: 'Is a special occasion coming up and do you want to surprise with a unique wine experience? I organize exclusive wine tastings perfectly tailored to your wishes and budget. Whether it\'s an intimate gathering or a larger event, I ensure an unforgettable taste experience.',
        menuBody: 'As a restaurant owner, you want to surprise your guests with the perfect wine list. I help you create a wine list that perfectly matches your menu and concept. From beginning restaurants to established names, I make sure everything fits.',
        moreInfo: 'More info'
      },
      about: {
        title: 'About Yentl Quintelier',
        description: 'Wine is more than a passion for me, it is a life story in aroma, taste and emotion.',
        cta: 'Read more',
        intro: 'Wine is more than a passion for me',
        paragraph1: 'I am Yentl Quintelier, sommelier with heart and soul. My journey began at a young age, with a dream of becoming a chef. However, during my training at Hotel School Stella Matutina, I discovered another world: that of wine. The finesse, the tradition, the story behind every bottle, it captivated me completely.',
        paragraph2: 'After specializing in restaurant management and beverage knowledge - awarded the prize for best student of the year - I gained experience at some of Belgium\'s finest restaurants: Hertog Jan, Le Château du Mylord, La Table de Maxime and Nuance, where I was responsible for wine pairing, hospitality and cellar management as a sommelier.',
        paragraph3: 'In 2022, I was named Sommelier of the Year Belgium, a recognition that has further fueled my passion.',
        paragraph4: 'Today I work as a freelance sommelier on an independent basis. I offer a wide range of services: from tastings and wine advice to the maintenance and management of private wine cellars. Whether it\'s a glass that perfectly complements a dish or a cellar that tells a story, I believe wine should always be an experience.',
        award: 'Sommelier of the Year Belgium 2022',
        featured: 'Featured in Press',
        articleTitle: 'Yentl Quintelier: "I wanted to work in at least a two-star restaurant"',
        articleDescription: 'A glimpse into the L\'Avenir article about Yentl Quintelier, one of the new sommeliers of the year. Read more about their passion for wine and their ambitions.',
        hlnArticle: {
          title: 'Which wine to serve with mussels?',
          description: 'In this article for HLN, Yentl shares advice on the perfect wine choice for mussels. From fresh white wines to surprising red options.',
          source: 'HLN.be',
          date: 'August 2023',
          cta: 'Read the article'
        }
      },
      newsletter: {
        title: 'Stay Informed',
        description: 'Sign up for exclusive tips, news and offers',
        placeholder: 'Your email address',
        cta: 'Subscribe',
        privacy: 'We respect your privacy and do not spam',
        subscribing: 'Subscribing...',
        validation: {
          emailInvalid: 'Invalid email address'
        },
        success: {
          title: 'Successfully subscribed!',
          message: 'Thank you for subscribing. You will receive our newsletter soon.'
        },
        error: {
          title: 'Error subscribing',
          message: 'Something went wrong. Please try again later.',
          alreadySubscribed: 'This email address is already subscribed to our newsletter'
        }
      },
      contact: {
        title: 'Get In Touch',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send',
        sending: 'Sending...',
        info: 'Do you have questions or need more information? Feel free to contact us.',
        location: 'Location',
        emailLabel: 'Email',
        validation: {
          nameRequired: 'Name is required (minimum 2 characters)',
          emailInvalid: 'Invalid email address',
          messageRequired: 'Message is required (minimum 10 characters)'
        },
        success: {
          title: 'Message sent!',
          message: 'Thank you for your message. We will contact you as soon as possible.'
        },
        error: {
          title: 'Error sending message',
          message: 'Something went wrong. Please try again later.'
        }
      },
      footer: {
        tagline: 'Fine Wine Adventures',
        location: 'Belgium',
        rights: 'All rights reserved',
        brandDescription: 'Fine Wine Adventures by Yentl Quintelier. Discover the world of wine with expert guidance.',
        contentTitle: 'Content',
        servicesTitle: 'Services',
        contactTitle: 'Contact',
        newsletterTitle: 'Newsletter',
        newsletterDescription: 'Stay updated on exclusive wine experiences and offers',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        home: 'Home',
        about: 'About',
        blog: 'Blog',
        gallery: 'Gallery',
        contactPage: 'Contact',
        subscriptions: 'Subscriptions',
        tastings: 'Wine Tastings',
        menu: 'Custom Wine List',
        consultancy: 'Wine Consultancy',
        private: 'Private Sommelier',
        cellar: 'Wine Cellar Management',
        email: 'info@yentlquintelier.com',
        locationText: 'East Flanders, Belgium',
        copyright: 'Sommelier.Quintelier - All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookies',
        cancelSubscription: 'Cancel Subscription',
        madeBy: 'Made with passion by'
      },
      cancelSubscription: {
        pageTitle: 'Cancel Subscription',
        pageDescription: 'Cancel your wine subscription',
        title: 'Cancel Subscription',
        description: 'Enter your email address to receive a cancellation link. This link is valid for 24 hours.',
        emailLabel: 'Email address',
        emailPlaceholder: 'your@email.com',
        emailInvalid: 'Invalid email address',
        important: 'Important',
        importantNote: 'You will receive a secure link via email to confirm your cancellation. This link is valid for 24 hours.',
        processing: 'Processing...',
        sendLink: 'Send cancellation link',
        requestSent: 'Link sent',
        checkEmail: 'Check your email for the cancellation link',
        error: 'Error',
        errorMessage: 'Something went wrong. Please try again.',
        successTitle: 'Link sent!',
        successMessage: 'We have sent a secure cancellation link to your email.',
        linkExpiry: 'This link is valid for 24 hours.',
        confirmTitle: 'Confirm cancellation',
        confirmDescription: 'Confirm the cancellation of your wine subscription',
        confirmWarning: 'This action cannot be undone',
        confirmWarningTitle: 'Warning',
        confirmPoint1: 'Your subscription will be cancelled immediately',
        confirmPoint2: 'No further payments will be charged',
        confirmPoint3: 'You retain access for the current month',
        confirmButton: 'Yes, cancel',
        keepSubscription: 'Keep subscription',
        noToken: 'Invalid or missing cancellation link',
        cancelSuccess: 'Subscription cancelled',
        cancelSuccessMessage: 'Your wine subscription has been successfully cancelled.',
        cancelSuccessDetail: 'No further payments will be charged. You will receive a confirmation email.',
        confirmError: 'Error cancelling subscription',
        backHome: 'Back to home',
        requestNewLink: 'Request new link'
      },
      blog: {
        allArticles: 'All articles',
        readMore: 'Read more',
        minutes: 'min',
        readTime: 'min read',
        subtitle: 'Discover everything about wine, grape varieties and wine knowledge',
        backToBlog: 'Back to blog',
        relatedArticles: 'Related articles',
        notFound: 'Article not found',
        tableOfContents: 'Table of Contents',
        summary: 'Summary',
        keyTakeaways: 'Key Takeaways',
        categories: {
          all: 'All',
          druiven: 'Grapes',
          tips: 'Tips',
          service: 'Service'
        }
      },
      breadcrumbs: {
        home: 'Home',
        blog: 'Blog',
        about: 'About',
        gallery: 'Gallery',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy'
      },
      legal: {
        privacy: {
          title: 'Privacy Policy',
          lastUpdate: 'November 2025',
          metaDescription: 'Privacy Policy of Sommelier Quintelier - How we protect and use your personal data.'
        },
        terms: {
          title: 'Terms and Conditions',
          lastUpdate: 'November 2025',
          metaDescription: 'Terms and Conditions of Sommelier Quintelier for services and wine subscriptions.'
        },
        cookies: {
          title: 'Cookie Policy',
          lastUpdate: 'November 2025',
          metaDescription: 'Cookie Policy of Sommelier Quintelier - Information about the use of cookies on our website.'
        }
      },
      modal: {
        included: 'Included:',
        extras: 'Optional extras:',
        viewAll: 'View all subscriptions'
      },
      productDetail: {
        backToShop: 'Back to shop',
        region: 'Region',
        country: 'Country',
        grape: 'Grape',
        vintage: 'Vintage',
        alcohol: 'Alcohol',
        volume: 'Volume',
        sommelierNotes: 'Sommelier Notes',
        addToCart: 'Add to cart',
        productNotFound: 'Product not found'
      },
      shop: {
        title: 'Wine Shop',
        subtitle: 'Discover our exclusive wine selection',
        comingSoon: 'Coming Soon',
        comingSoonText: 'Our online wine shop is currently under development. Soon you will be able to discover and order our exclusive wine selection here.',
        filters: {
          all: 'All',
          red: 'Red',
          white: 'White',
          rose: 'Rosé',
          champagne: 'Champagne',
          dessert: 'Dessert'
        },
        sommelierChoice: "Sommelier's Choice",
        price: 'Price',
        region: 'Region',
        grape: 'Grape',
        vintage: 'Vintage',
        volume: 'Volume',
        alcohol: 'Alcohol',
        addToCart: 'Add to cart',
        viewDetails: 'View details',
        noWinesFound: 'No wines found',
        wines: {
          'puligny-montrachet': { notes: 'Refined and mineral with notes of white blossom and citrus. Ideal with seafood.' },
          'chateau-margaux': { notes: 'A masterpiece of elegance. Intense bouquet of cassis and violet, silky tannins.' },
          'ruinart-blanc-de-blancs': { notes: 'Fine perlage with elegant notes of white fruit and brioche. Perfect as an aperitif.' },
          'tempier-bandol-rose': { notes: 'The reference for Bandol rosé. Subtle, gastronomic and refined.' },
          'chateau-dyquem': { notes: 'Legendary dessert wine. Unparalleled complexity and balance between sweetness and freshness.' },
          'drc-echezeaux': { notes: 'The pinnacle of Burgundy. Incredible finesse and an everlasting finish.' }
        }
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Atmosphere images of events, tastings and the world of wine',
        categories: {
          premium: 'Premium Collection',
          vintage: 'Vintage Wines',
          champagne: 'Champagne',
          dessert: 'Dessert Wine',
          awards: 'Awards',
          vineyards: 'Vineyards',
          cellar: 'Wine Cellar',
          tasting: 'Tastings',
          spirits: 'Spirits',
          education: 'Education'
        },
        images: {
          pommard: 'Pommard Clos Epeneaux',
          rousseau: 'Clos de la Roche 1996',
          agrapart: 'Agrapart et Fils',
          vouvray: 'Vouvray Le Mont 1995',
          bollingerSign: 'Maison Bollinger',
          collection: 'Exclusive Selection',
          yquem: 'Château d\'Yquem 6L',
          clicquotCork: 'La Grande Dame Cork',
          bollingerBarrel: 'Bollinger Oak Barrel',
          ayala: 'Maison Ayala',
          certan: 'Vieux Château Certan',
          award: 'Sommelier of the Year',
          loireVineyard: 'Loire Vineyard',
          cellarBarrels: 'Traditional Cellar',
          krug: 'Krug Clos du Mesnil 2000',
          jancisRobinson: 'Jancis Robinson Wine Encyclopedia',
          rousseau2016: 'Armand Rousseau Grand Cru 2016',
          tastingAtmosphere: 'Wine Tasting Atmosphere',
          whiskyCollection: 'Exclusive Whisky Collection',
          paillardCorks: 'Bruno Paillard Champagne Corks',
          remuageCellar: 'Remuage in Champagne Cellar',
          concreteEggs: 'Concrete Fermentation Eggs',
          amphoras: 'Terracotta Amphoras',
          event: 'Wine tasting event',
          sommelierExamining: 'Sommelier examining wine',
          cellarCollection: 'Premium wine cellar',
          vineyard: 'Vineyard landscape',
          restaurantService: 'Restaurant wine service',
          workshop: 'Wine education workshop',
          bottleCollection: 'Premium wine bottles',
          privateTasting: 'Private wine tasting',
          consultation: 'Restaurant consultation',
          pairing: 'Wine and cheese pairing',
          label: 'Examining wine label',
          barrelCellar: 'Traditional wine cellar'
        }
      }
    }
  },
  fr: {
    translation: {
      announcement: {
        message: 'Ce site web est actuellement en construction. Les prix et les étiquettes peuvent différer de la réalité.'
      },
      nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        blog: 'Blog',
        gallery: 'Galerie',
        contact: 'Contact',
        cart: 'Panier'
      },
      checkout: {
        title: 'Paiement',
        description: 'Entrez vos coordonnées pour finaliser votre commande',
        processing: 'Traitement...',
        completePayment: 'Procéder au paiement',
        success: 'Paiement réussi',
        successMessage: 'Merci pour votre commande!',
        error: 'Échec du paiement',
        errorMessage: 'Une erreur s\'est produite. Veuillez réessayer.',
        mollieRedirectInfo: 'Vous serez redirigé vers Mollie pour finaliser votre paiement en toute sécurité. Après le paiement, vous reviendrez automatiquement sur notre site.',
        extras: 'Extras',
        extraChampagne: 'Bouteille Champagne',
        extraDessert: 'Bouteille Vin de Dessert',
        ageConfirmation: 'Je confirme que j\'ai 18 ans ou plus',
        contactInformation: 'Coordonnées',
        deliveryAddress: 'Adresse de livraison',
        optional: 'optionnel',
        nameLabel: 'Nom',
        namePlaceholder: 'Nom complet',
        nameRequired: 'Le nom est requis',
        emailLabel: 'Adresse e-mail',
        emailPlaceholder: 'votre@email.fr',
        emailInvalid: 'Adresse e-mail invalide',
        phoneLabel: 'Numéro de téléphone',
        phonePlaceholder: '+32 xxx xx xx xx',
        addressLabel: 'Rue et numéro',
        addressPlaceholder: 'Nom de rue 123',
        addressRequired: 'L\'adresse est requise',
        cityLabel: 'Ville',
        cityPlaceholder: 'Bruxelles',
        cityRequired: 'La ville est requise',
        postalCodeLabel: 'Code postal',
        postalCodePlaceholder: '1000',
        postalCodeRequired: 'Le code postal est requis',
        countryLabel: 'Pays',
        countryPlaceholder: 'Sélectionner le pays',
        countryRequired: 'Le pays est requis',
        ageConfirmationRequired: 'Vous devez confirmer avoir 18 ans+',
        recurringBilling: 'Abonnement Mensuel',
        recurringDescription: 'Il s\'agit d\'un abonnement récurrent qui se renouvelle automatiquement chaque mois. Vous pouvez annuler à tout moment.'
      },
      ageGate: {
        title: 'Bienvenue chez Sommelier Quintelier',
        subtitle: 'Vérification d\'âge requise',
        description: 'Ce site web contient des informations sur les boissons alcoolisées. Veuillez entrer votre date de naissance pour confirmer que vous avez au moins 18 ans.',
        dayLabel: 'Jour',
        monthLabel: 'Mois',
        yearLabel: 'Année',
        dayPlaceholder: 'JJ',
        monthPlaceholder: 'MM',
        yearPlaceholder: 'AAAA',
        confirmButton: 'Confirmer l\'âge',
        underageError: 'Vous devez avoir au moins 18 ans pour visiter ce site web.',
        invalidDateError: 'Veuillez entrer une date de naissance valide.',
        legalDrinkingAge: 'L\'âge minimum légal pour la consommation d\'alcool en Belgique est de 18 ans.',
        responsibleConsumption: 'Buvez avec modération. L\'alcool est nocif pour la santé.',
        privacyNotice: 'Votre date de naissance ne sera pas stockée. Cette vérification est uniquement utilisée pour vérifier votre âge.'
      },
      thankYou: {
        title: 'Merci pour votre commande',
        subtitle: 'Votre paiement a été traité avec succès',
        confirmation: 'Nous avons reçu votre commande et elle sera traitée sous peu.',
        emailSent: 'Un email de confirmation a été envoyé à votre adresse e-mail.',
        nextStepsTitle: 'Que se passe-t-il maintenant?',
        step1: 'Vous recevrez un email de confirmation dans les 24 heures',
        step2: 'Nous allons soigneusement composer votre sélection de vins',
        step3: 'Votre abonnement vin sera expédié dans 3-5 jours ouvrables',
        backToHome: 'Retour à l\'accueil',
        exploreBlog: 'Découvrez notre blog',
        payment: 'Paiement',
        status: 'Statut',
        completed: 'Terminé'
      },
      notFound: {
        title: 'Page introuvable',
        subtitle: 'La page que vous recherchez n\'existe pas ou a été déplacée',
        message: 'Il semble que cette bouteille ne se trouve pas dans notre cave. Laissez-nous vous ramener à notre collection.',
        backToHome: 'Retour à l\'accueil',
        contactUs: 'Contactez-nous',
        errorCode: 'Code d\'erreur: 404'
      },
      paymentFailed: {
        title: 'Paiement non effectué',
        subtitle: 'Votre paiement n\'a pas pu être traité',
        explanation: 'Cela peut se produire si vous avez annulé le paiement ou s\'il y a eu un problème avec votre méthode de paiement.',
        tryAgainText: 'Réessayer',
        contactText: 'Contactez-nous',
        needHelp: 'Besoin d\'aide ? Contactez notre équipe de support.',
        statusText: 'Non effectué'
      },
      hero: {
        title: 'Sommelier Privé Belgique',
        subtitle: 'Votre Sommelier Privé pour des Expériences Vinicoles Exclusives',
        tagline: 'Le vin est un art de l\'expérience, du raffinement et de l\'émotion.',
        cta: 'Contactez-nous',
        imageAlt: 'Sommelier privé versant du vin rouge lors d\'une dégustation exclusive en Belgique'
      },
      seo: {
        title: 'Sommelier Privé Belgique | Sommelier Quintelier',
        description: 'Vous cherchez un sommelier privé en Belgique? Yentl Quintelier offre des expériences vinicoles exclusives, dégustations et conseils sur mesure. Sommelier de l\'année 2022.'
      },
      intro: {
        opening: 'Le vin est un art de l\'expérience, du raffinement et de l\'émotion.',
        paragraph1: 'En tant que votre sommelier privé, je crée des expériences vinicoles exclusives pour les connaisseurs, les restaurants et les événements privés. J\'offre des conseils sur le vin, des dégustations et une gestion de cave sur mesure, avec un œil pour l\'harmonie entre le goût, le style et l\'identité.',
        paragraph2: 'Chaque collaboration part de votre histoire, avec le vin comme fil conducteur à travers le goût, le style et l\'émotion. En tant que sommelier privé en Belgique, je garantis un accompagnement personnalisé.',
        paragraph3: 'De la cave au verre, du conseil à l\'expérience – en tant que votre sommelier privé je donne vie à l\'essence du vin dans sa forme la plus raffinée.'
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Services vinicoles professionnels sur mesure, du conseil aux dégustations exclusives',
        seo: {
          description: 'Services professionnels de conseil en vin en Belgique: abonnements vinicoles, dégustations privées, création de cartes des vins et gestion de cave par le Sommelier de l\'Année 2022.',
          ogDescription: 'Services professionnels de conseil en vin en Belgique: abonnements vinicoles, dégustations privées, création de cartes des vins et gestion de cave.'
        },
        consultancy: {
          title: 'Conseil en Vin',
          description: 'Conseils professionnels pour votre sélection de vin parfaite pour toute occasion',
          subtitle: 'De la sélection à la stratégie : conseil en vin sur mesure.',
          intro: 'En tant que sommelier indépendant, j\'accompagne les restaurants et les particuliers dans la sélection, l\'achat et la gestion de vins. Ensemble, nous recherchons l\'équilibre parfait entre qualité, style et budget, avec une attention particulière à l\'identité et à l\'expérience. Chaque client reçoit un conseil personnalisé, pas une liste standard, mais une sélection de vins qui correspond à votre goût, votre établissement ou votre concept. De la cave à la carte, du verre à l\'expérience : conseil en vin sur mesure, avec passion et précision.',
          keyTakeaways: [
            'Conseils personnalisés adaptés à votre identité et concept',
            'Équilibre parfait entre qualité, style et budget',
            'Accompagnement pour restaurants et particuliers',
            'De la sélection à l\'achat et à la gestion'
          ],
          collectionsTitle: 'Collections de Vins Exclusives',
          bourgogneTitle: 'Le Meilleur de Bourgogne',
          bourgogneDescription: 'Une sélection des vins les plus prestigieux de la région Bourgogne, soigneusement choisis pour leur qualité et caractère exceptionnels.',
          drcTitle: 'Domaine de la Romanée-Conti',
          drcDescription: 'Les vins les plus recherchés au monde. Une collection de vins Grand Cru légendaires représentant le summum du raffinement et de l\'élégance.'
        },
        cellar: {
          title: 'Gestion et Entretien de votre Cave à Vin Privée',
          shortTitle: 'Cave à Vin Privée',
          description: 'Gestion et entretien de votre collection de vins personnelle',
          subtitle: 'Une cave à vin sans souci, parfaitement organisée.',
          intro: 'Que vous soyez un collectionneur débutant ou que vous possédiez une collection étendue, une cave bien organisée est essentielle. J\'offre des conseils professionnels, un inventaire et un entretien de caves à vin privées : du contrôle de la température et des conseils de stockage à la planification des achats et de la rotation. Ainsi votre collection reste non seulement en parfait état, mais est aussi prête à être appréciée à tout moment.',
          keyTakeaways: [
            'Inventaire et organisation professionnels',
            'Contrôle de la température et conseils de stockage',
            'Planification des achats et de la rotation',
            'Pour collectionneurs débutants et expérimentés'
          ]
        },
        tasting: {
          title: 'Dégustations de Vins',
          description: 'Dégustations exclusives adaptées à votre événement',
          subtitle: 'Découvrez, dégustez et apprenez avec un sommelier à vos côtés.',
          intro: 'Une dégustation est plus que simplement goûter du vin, c\'est une expérience, un moment de découverte. Lors de mes dégustations de vins personnalisées, je vous emmène à travers différents styles, régions et histoires. Chaque session est adaptée à votre niveau de connaissance, vos intérêts ou votre thème (région, cépage, accord mets-vins...). Idéal pour les entreprises, les groupes ou les événements privés à la recherche d\'une expérience originale et conviviale.',
          keyTakeaways: [
            'Sessions personnalisées adaptées à votre niveau',
            'Dégustations thématiques au choix',
            'Idéal pour entreprises et événements privés',
            'Une expérience, pas seulement une dégustation'
          ]
        },
        menu: {
          title: 'Carte des Vins Sur Mesure',
          description: 'Cartes de vins élaborées pour restaurants et hôtels',
          subtitle: 'Une carte des vins qui correspond à votre cuisine et concept.',
          intro: 'Une carte des vins solide est plus qu\'une liste de bouteilles, c\'est le prolongement de votre histoire. J\'aide les restaurants et les établissements hôteliers à construire ou affiner leur carte des vins, en mettant l\'accent sur l\'harmonie avec les plats, les influences saisonnières et l\'optimisation des marges. Chaque sélection est composée sur mesure pour votre établissement, votre public cible et votre philosophie.',
          keyTakeaways: [
            'Harmonie avec vos plats et concept',
            'Influences saisonnières et optimisation des marges',
            'Adapté à votre public cible et philosophie',
            'De la construction au raffinement'
          ]
        },
        subscription: {
          title: 'Abonnements de Vin',
          shortTitle: 'Abonnements',
          description: 'Soigneusement sélectionné, élégamment emballé',
          subtitle: 'Chaque bouteille raconte une histoire: du terroir à l\'artisanat jusqu\'à la passion',
          body: 'Chaque mois, vous pouvez profiter d\'une nouvelle sélection de vins choisis avec soin, connaissance et finesse par notre sommelier. Nos abonnements de vin apportent le monde du vin jusqu\'à chez vous. Soigneusement sélectionnés, élégamment emballés et accompagnés de notes de dégustation inspirantes et de conseils d\'accords.',
          flexibility: 'Profiter avec flexibilité',
          flexibilityText: 'Nos abonnements sont disponibles mensuellement. Vous pouvez facilement les mettre en pause, les ajuster ou les annuler quand vous le souhaitez. Pour ceux qui souhaitent d\'abord découvrir, les forfaits sont également disponibles à l\'unité.',
          howItWorks: 'Comment ça marche',
          step1Title: 'Choisissez votre forfait',
          step1Description: 'Sélectionnez l\'abonnement qui correspond à vos goûts',
          step2Title: 'Livraison mensuelle',
          step2Description: 'Recevez votre sélection de vins directement à domicile',
          step3Title: 'Découvrez & savourez',
          step3Description: 'Dégustez avec les notes de dégustation et accords inclus',
          bottlesCount: 'bouteilles',
          featured: {
            title: 'Expérience Prestige',
            tagline: 'La sélection premium',
            description: 'Trois ou six vins exceptionnels, directement de domaines exclusifs.',
            priceFrom: 'À partir de',
            price3: '€250',
            price6: '€480',
            perMonth: '/mois',
            benefits: [
              'Vins exceptionnels de domaines exclusifs',
              'Notes de dégustation et accords inclus',
              'Résiliable mensuellement'
            ],
            cta: 'En savoir plus',
            bottles: '3 ou 6 bouteilles par mois'
          },
          tiers: {
            selection: {
              name: 'Sélection Élégance',
              tagline: 'Pour ceux qui aiment l\'élégance dans la simplicité',
              description: 'Une introduction élégante au monde du vin. Trois ou six bouteilles soigneusement sélectionnées par mois, chacune avec caractère, équilibre et raffinement.',
              price3: '€55',
              price6: '€100',
              bottles3: '3 bouteilles',
              bottles6: '6 bouteilles',
              content3: '1 blanc vif + 1 blanc corsé + 1 rouge',
              content6: '2 blancs vifs + 2 blancs corsés + 2 rouges',
              features: [
                'Caractère, équilibre et raffinement',
                'Notes de dégustation incluses',
                'Suggestion pour accord mets-vins parfait',
                'Résiliable mensuellement'
              ],
              extras: [
                '+ 1 Bouteille Champagne: €20',
                '+ 1 Bouteille vin de dessert: €20'
              ]
            },
            cuvee: {
              name: 'Cuvée Curieuse',
              tagline: 'Pour l\'amateur curieux au goût raffiné',
              description: 'Un pas de plus dans le monde des saveurs. Trois ou six vins expressifs qui forment ensemble un thème, une région, un cépage ou un style.',
              price3: '€110',
              price6: '€200',
              bottles3: '3 bouteilles',
              bottles6: '6 bouteilles',
              content3: '1 blanc vif + 1 blanc corsé + 1 rouge',
              content6: '2 blancs vifs + 2 blancs corsés + 2 rouges',
              features: [
                'Vins expressifs avec thème',
                'Notes de dégustation incluses',
                'Suggestion pour accord mets-vins parfait',
                'Résiliable mensuellement'
              ],
              extras: [
                '+ 1 Bouteille Champagne: €35',
                '+ 1 Bouteille vin de dessert: €35'
              ]
            },
            prestige: {
              name: 'Expérience Prestige',
              tagline: 'Pour ceux qui veulent vivre l\'essence du vin au plus haut niveau',
              description: 'La sélection premium. Trois ou six vins exceptionnels, directement de domaines exclusifs, chacun avec son propre caractère et classe. Une expérience luxueuse, parfaite pour les connaisseurs et collectionneurs.',
              price3: '€250',
              price6: '€480',
              bottles3: '3 bouteilles',
              bottles6: '6 bouteilles',
              content3: '1 blanc vif + 1 blanc corsé + 1 rouge',
              content6: '2 blancs vifs + 2 blancs corsés + 2 rouges',
              features: [
                'Vins exceptionnels de domaines exclusifs',
                'Notes de dégustation incluses',
                'Suggestion pour accord mets-vins parfait',
                'Résiliable mensuellement'
              ],
              extras: [
                '+ 1 Bouteille Champagne: €85',
                '+ 1 Bouteille vin de dessert: €85'
              ]
            },
            champagne: {
              name: 'Champagne Signature',
              tagline: 'Pour ceux qui voient le champagne non seulement comme une célébration, mais comme une forme d\'art',
              description: 'L\'essence du raffinement, capturée dans des bulles. Découvrez une sélection exclusive de champagnes de maisons indépendantes et de Maisons renommées. Chacun avec son propre caractère, finesse et signature.',
              price3: '€150',
              price6: '€275',
              bottles3: '3 bouteilles',
              bottles6: '6 bouteilles',
              content3: '1 bouteille entrée + 1 bouteille moyenne gamme + 1 bouteille prestige',
              content6: '2 bouteilles entrée + 2 bouteilles moyenne gamme + 2 bouteilles prestige',
              features: [
                'Champagnes avec personnalité',
                'Passion, art et terroir',
                'Équilibre harmonieux entre élégance et complexité',
                'Notre sommelier sélectionne avec soin'
              ]
            },
            custom: {
              name: 'Forfait Sur Mesure',
              tagline: 'Artisanat avec caractère, livré avec élégance',
              description: 'Pour des occasions spéciales, des cadeaux d\'entreprise ou des événements privés, nous proposons des forfaits de vin sur mesure. Notre sommelier compose une sélection qui correspond parfaitement à vos souhaits, profil de goût et budget.',
              price: 'Sur mesure',
              bottles: 'Sur mesure',
              features: [
                'Entièrement personnalisé',
                'Parfait pour occasions spéciales',
                'Cadeaux d\'entreprise et cadeaux clients',
                'Soigneusement sélectionné et emballé'
              ]
            }
          },
          cta: 'Choisir ce forfait',
          perMonth: '/mois',
          popularBadge: 'Populaire',
          options: 'Options',
          content: 'Contenu',
          customPackageForm: {
            title: 'Forfait Sur Mesure - Formulaire de Demande',
            description: 'Dites-nous en plus sur vos souhaits, afin que nous puissions créer le forfait de vin parfait pour vous.',
            champagneLabel: 'Souhaitez-vous du Champagne?',
            champagneYes: 'Oui',
            champagneNo: 'Non',
            champagneQuantity: 'Combien de bouteilles de Champagne?',
            whiteWineLabel: 'Combien de bouteilles de vin blanc souhaitez-vous?',
            redWineLabel: 'Combien de bouteilles de vin rouge souhaitez-vous?',
            dessertWineLabel: 'Souhaitez-vous un vin de dessert?',
            dessertWineYes: 'Oui',
            dessertWineNo: 'Non',
            dessertWineQuantity: 'Combien de bouteilles de vin de dessert?',
            budgetLabel: 'Quel est votre budget pour ce forfait de vin personnalisé?',
            budgetOptions: {
              '0-50': '€0 - €50',
              '50-100': '€50 - €100',
              '100-150': '€100 - €150',
              '150-250': '€150 - €250',
              '250-500': '€250 - €500',
              '500+': '€500+'
            },
            wishesLabel: 'Avez-vous d\'autres souhaits ou questions?',
            wishesPlaceholder: 'Décrivez vos souhaits spécifiques, préférences, événement ou questions...',
            emailLabel: 'Votre adresse e-mail',
            emailPlaceholder: 'nom@exemple.fr',
            nameLabel: 'Votre nom',
            namePlaceholder: 'Votre nom complet',
            phoneLabel: 'Numéro de téléphone (optionnel)',
            phonePlaceholder: '+32 XXX XX XX XX',
            submit: 'Envoyer la demande',
            cancel: 'Annuler',
            sending: 'Envoi en cours...',
            success: 'Votre demande a été envoyée avec succès!',
            successMessage: 'Nous vous contacterons dans les plus brefs délais pour discuter de votre forfait de vin personnalisé.',
            error: 'Quelque chose s\'est mal passé',
            errorMessage: 'Veuillez réessayer plus tard ou nous contacter directement.',
            bottles: 'bouteilles',
            selectBudget: 'Sélectionnez votre budget',
            nameRequired: 'Le nom est requis',
            emailInvalid: 'Adresse e-mail invalide',
            budgetRequired: 'Sélectionnez un budget',
            champagneQuantityRequired: 'Entrez le nombre de bouteilles de Champagne',
            dessertWineQuantityRequired: 'Entrez le nombre de bouteilles de vin de dessert'
          }
        },
        private: {
          title: 'Sommelier Privé',
          description: 'Accompagnement personnel pour tous vos besoins en vin',
          subtitle: 'Un sommelier, exclusivement pour votre événement, déjeuner ou dîner.',
          intro: 'Vous voulez donner à un dîner privé ou un événement cette touche supplémentaire? En tant que sommelier privé, je m\'occupe de la sélection, du service et de la présentation des vins à domicile ou sur place. J\'assure l\'accord parfait avec votre menu, raconte l\'histoire derrière chaque vin et crée une atmosphère détendue et professionnelle à table. Idéal pour les dîners à domicile, les mariages, les événements d\'entreprise ou les fêtes exclusives.',
          keyTakeaways: [
            'Service exclusif à domicile ou sur place',
            'Accord parfait avec votre menu',
            'Atmosphère professionnelle à table',
            'Pour dîners à domicile, mariages et événements d\'entreprise'
          ],
          atmosphereTitle: 'Une Expérience Raffinée',
          atmosphereDescription: 'Des dîners privés intimes aux grands événements, je crée l\'expérience vinicole parfaite dans tous les contextes. Avec un souci du détail et une passion pour le service, je veille à ce que chaque bouteille raconte une histoire et que chaque toast devienne un souvenir.'
        },
        tastingBody: 'Une occasion spéciale arrive et vous voulez surprendre avec une expérience vinicole unique? J\'organise des dégustations de vins exclusives parfaitement adaptées à vos souhaits et votre budget. Qu\'il s\'agisse d\'une réunion intime ou d\'un événement plus important, j\'assure une expérience gustative inoubliable.',
        menuBody: 'En tant que restaurateur, vous voulez surprendre vos clients avec la carte des vins parfaite. Je vous aide à créer une carte des vins qui correspond parfaitement à votre menu et concept. Des restaurants débutants aux établissements renommés, je veille à ce que tout soit parfait.',
        moreInfo: 'Plus d\'infos'
      },
      about: {
        title: 'À propos de Yentl Quintelier',
        description: 'Le vin est plus qu\'une passion pour moi, c\'est une histoire de vie en arôme, goût et émotion.',
        cta: 'En savoir plus',
        intro: 'Le vin est plus qu\'une passion pour moi',
        paragraph1: 'Je suis Yentl Quintelier, sommelier corps et âme. Mon parcours a commencé à un jeune âge, avec un rêve de devenir chef. Cependant, lors de ma formation à l\'École Hôtelière Stella Matutina, j\'ai découvert un autre monde: celui du vin. La finesse, la tradition, l\'histoire derrière chaque bouteille, cela ne m\'a plus quitté.',
        paragraph2: 'Après une spécialisation en gestion de restaurant et connaissance des boissons - récompensée par le prix du meilleur élève de l\'année - j\'ai pu acquérir de l\'expérience dans certains des plus beaux restaurants de Belgique: Hertog Jan, Le Château du Mylord, La Table de Maxime et Nuance, où j\'étais responsable des accords mets-vins, de l\'hospitalité et de la gestion de la cave en tant que sommelier.',
        paragraph3: 'En 2022, j\'ai été nommé Sommelier de l\'année en Belgique, une reconnaissance qui a encore plus attisé ma passion.',
        paragraph4: 'Aujourd\'hui, je travaille comme sommelier indépendant. J\'offre une large gamme de services: des dégustations et conseils en vin à l\'entretien et la gestion de caves à vin privées. Qu\'il s\'agisse d\'un verre qui accompagne parfaitement un plat ou d\'une cave qui raconte une histoire, je crois que le vin doit toujours être une expérience.',
        award: 'Sommelier de l\'année Belgique 2022',
        featured: 'Présenté dans la presse',
        articleTitle: 'Yentl Quintelier : « Je voulais travailler dans au moins un restaurant deux étoiles »',
        articleDescription: 'Un aperçu de l\'article L\'Avenir sur Yentl Quintelier, l\'un des nouveaux sommeliers de l\'année. Découvrez sa passion pour le vin et ses ambitions.'
      },
      newsletter: {
        title: 'Restez Informé',
        description: 'Inscrivez-vous pour des conseils exclusifs, actualités et offres',
        placeholder: 'Votre adresse email',
        cta: 'S\'inscrire',
        privacy: 'Nous respectons votre vie privée et n\'envoyons pas de spam',
        subscribing: 'Inscription...',
        validation: {
          emailInvalid: 'Adresse email invalide'
        },
        success: {
          title: 'Inscription réussie!',
          message: 'Merci de votre inscription. Vous recevrez bientôt notre newsletter.'
        },
        error: {
          title: 'Erreur lors de l\'inscription',
          message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.',
          alreadySubscribed: 'Cette adresse email est déjà inscrite à notre newsletter'
        }
      },
      contact: {
        title: 'Contactez-nous',
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        submit: 'Envoyer',
        sending: 'Envoi...',
        info: 'Vous avez des questions ou besoin de plus d\'informations? N\'hésitez pas à nous contacter.',
        location: 'Localisation',
        emailLabel: 'Email',
        validation: {
          nameRequired: 'Le nom est requis (minimum 2 caractères)',
          emailInvalid: 'Adresse email invalide',
          messageRequired: 'Le message est requis (minimum 10 caractères)'
        },
        success: {
          title: 'Message envoyé!',
          message: 'Merci pour votre message. Nous vous contacterons dès que possible.'
        },
        error: {
          title: 'Erreur lors de l\'envoi',
          message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.'
        }
      },
      footer: {
        tagline: 'Fine Wine Adventures',
        location: 'Belgique',
        rights: 'Tous droits réservés',
        brandDescription: 'Fine Wine Adventures par Yentl Quintelier. Découvrez le monde du vin avec un accompagnement expert.',
        contentTitle: 'Contenu',
        servicesTitle: 'Services',
        contactTitle: 'Contact',
        newsletterTitle: 'Newsletter',
        newsletterDescription: 'Restez informé des expériences vinicoles exclusives et des offres',
        emailPlaceholder: 'Votre adresse e-mail',
        subscribe: 'S\'inscrire',
        home: 'Accueil',
        about: 'À propos',
        blog: 'Blog',
        gallery: 'Galerie',
        contactPage: 'Contact',
        subscriptions: 'Abonnements',
        tastings: 'Dégustations',
        menu: 'Carte des Vins Sur Mesure',
        consultancy: 'Conseil en Vin',
        private: 'Sommelier Privé',
        cellar: 'Gestion de Cave à Vin',
        email: 'info@yentlquintelier.com',
        locationText: 'Flandre Orientale, Belgique',
        copyright: 'Sommelier.Quintelier - Tous droits réservés.',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions Générales',
        cookies: 'Cookies',
        cancelSubscription: 'Résilier l\'Abonnement',
        madeBy: 'Créé avec passion par'
      },
      cancelSubscription: {
        pageTitle: 'Résilier l\'Abonnement',
        pageDescription: 'Résiliez votre abonnement vin',
        title: 'Résilier l\'Abonnement',
        description: 'Entrez votre adresse e-mail pour recevoir un lien de résiliation. Ce lien est valable 24 heures.',
        emailLabel: 'Adresse e-mail',
        emailPlaceholder: 'votre@email.fr',
        emailInvalid: 'Adresse e-mail invalide',
        important: 'Important',
        importantNote: 'Vous recevrez un lien sécurisé par e-mail pour confirmer votre résiliation. Ce lien est valable 24 heures.',
        processing: 'Traitement...',
        sendLink: 'Envoyer le lien de résiliation',
        requestSent: 'Lien envoyé',
        checkEmail: 'Vérifiez votre e-mail pour le lien de résiliation',
        error: 'Erreur',
        errorMessage: 'Une erreur s\'est produite. Veuillez réessayer.',
        successTitle: 'Lien envoyé!',
        successMessage: 'Nous avons envoyé un lien de résiliation sécurisé à votre adresse e-mail.',
        linkExpiry: 'Ce lien est valable 24 heures.',
        confirmTitle: 'Confirmer la résiliation',
        confirmDescription: 'Confirmer la résiliation de votre abonnement vin',
        confirmWarning: 'Cette action ne peut pas être annulée',
        confirmWarningTitle: 'Attention',
        confirmPoint1: 'Votre abonnement sera annulé immédiatement',
        confirmPoint2: 'Aucun autre paiement ne sera facturé',
        confirmPoint3: 'Vous conservez l\'accès pour le mois en cours',
        confirmButton: 'Oui, résilier',
        keepSubscription: 'Conserver',
        noToken: 'Lien de résiliation invalide ou manquant',
        cancelSuccess: 'Abonnement résilié',
        cancelSuccessMessage: 'Votre abonnement vin a été résilié avec succès.',
        cancelSuccessDetail: 'Aucun autre paiement ne sera facturé. Vous recevrez un e-mail de confirmation.',
        confirmError: 'Erreur lors de la résiliation',
        backHome: 'Retour à l\'accueil',
        requestNewLink: 'Demander un nouveau lien'
      },
      blog: {
        allArticles: 'Tous les articles',
        readMore: 'En savoir plus',
        minutes: 'min',
        readTime: 'min de lecture',
        subtitle: 'Découvrez tout sur le vin, les cépages et les connaissances vinicoles',
        backToBlog: 'Retour au blog',
        relatedArticles: 'Articles connexes',
        notFound: 'Article non trouvé',
        tableOfContents: 'Table des matières',
        summary: 'Résumé',
        keyTakeaways: 'Points Clés',
        categories: {
          all: 'Tout',
          druiven: 'Raisins',
          tips: 'Conseils',
          service: 'Service'
        }
      },
      breadcrumbs: {
        home: 'Accueil',
        blog: 'Blog',
        about: 'À propos',
        gallery: 'Galerie',
        contact: 'Contact',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions Générales',
        cookies: 'Politique de Cookies'
      },
      legal: {
        privacy: {
          title: 'Politique de Confidentialité',
          lastUpdate: 'Novembre 2025',
          metaDescription: 'Politique de confidentialité de Sommelier Quintelier - Comment nous protégeons et utilisons vos données personnelles.'
        },
        terms: {
          title: 'Conditions Générales',
          lastUpdate: 'Novembre 2025',
          metaDescription: 'Conditions générales de Sommelier Quintelier pour les services et abonnements vinicoles.'
        },
        cookies: {
          title: 'Politique de Cookies',
          lastUpdate: 'Novembre 2025',
          metaDescription: 'Politique de cookies de Sommelier Quintelier - Informations sur l\'utilisation des cookies sur notre site web.'
        }
      },
      modal: {
        included: 'Inclus:',
        extras: 'Extras optionnels:',
        viewAll: 'Voir tous les abonnements'
      },
      productDetail: {
        backToShop: 'Retour à la boutique',
        region: 'Région',
        country: 'Pays',
        grape: 'Cépage',
        vintage: 'Millésime',
        alcohol: 'Alcool',
        volume: 'Contenu',
        sommelierNotes: 'Notes du Sommelier',
        addToCart: 'Ajouter au panier',
        productNotFound: 'Produit non trouvé'
      },
      shop: {
        title: 'Cave à Vins',
        subtitle: 'Découvrez notre sélection exclusive de vins',
        comingSoon: 'Bientôt disponible',
        comingSoonText: 'Notre cave à vins en ligne est actuellement en développement. Bientôt vous pourrez découvrir et commander notre sélection exclusive de vins ici.',
        filters: {
          all: 'Tous',
          red: 'Rouge',
          white: 'Blanc',
          rose: 'Rosé',
          champagne: 'Champagne',
          dessert: 'Dessert'
        },
        sommelierChoice: "Choix du Sommelier",
        price: 'Prix',
        region: 'Région',
        grape: 'Cépage',
        vintage: 'Millésime',
        volume: 'Volume',
        alcohol: 'Alcool',
        addToCart: 'Ajouter au panier',
        viewDetails: 'Voir détails',
        noWinesFound: 'Aucun vin trouvé',
        wines: {
          'puligny-montrachet': { notes: 'Raffiné et minéral avec des notes de fleurs blanches et d\'agrumes. Idéal avec les fruits de mer.' },
          'chateau-margaux': { notes: 'Un chef-d\'œuvre d\'élégance. Bouquet intense de cassis et de violette, tanins soyeux.' },
          'ruinart-blanc-de-blancs': { notes: 'Perlage fin avec des notes élégantes de fruits blancs et de brioche. Parfait en apéritif.' },
          'tempier-bandol-rose': { notes: 'La référence du rosé de Bandol. Subtil, gastronomique et raffiné.' },
          'chateau-dyquem': { notes: 'Vin de dessert légendaire. Complexité et équilibre inégalés entre douceur et fraîcheur.' },
          'drc-echezeaux': { notes: 'Le sommet de la Bourgogne. Finesse incroyable et une finale éternelle.' }
        }
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Images d\'ambiance d\'événements, dégustations et du monde du vin',
        categories: {
          premium: 'Collection Premium',
          vintage: 'Vins Vintage',
          champagne: 'Champagne',
          dessert: 'Vin de Dessert',
          awards: 'Prix',
          vineyards: 'Vignobles',
          cellar: 'Cave à Vin',
          tasting: 'Dégustations',
          spirits: 'Spiritueux',
          education: 'Éducation'
        },
        images: {
          pommard: 'Pommard Clos Epeneaux',
          rousseau: 'Clos de la Roche 1996',
          agrapart: 'Agrapart et Fils',
          vouvray: 'Vouvray Le Mont 1995',
          bollingerSign: 'Maison Bollinger',
          collection: 'Sélection Exclusive',
          yquem: 'Château d\'Yquem 6L',
          clicquotCork: 'Bouchon La Grande Dame',
          bollingerBarrel: 'Fût de Chêne Bollinger',
          ayala: 'Maison Ayala',
          certan: 'Vieux Château Certan',
          award: 'Sommelier de l\'Année',
          loireVineyard: 'Vignoble de la Loire',
          cellarBarrels: 'Cave Traditionnelle',
          krug: 'Krug Clos du Mesnil 2000',
          jancisRobinson: 'Encyclopédie du Vin Jancis Robinson',
          rousseau2016: 'Armand Rousseau Grand Cru 2016',
          tastingAtmosphere: 'Ambiance de Dégustation',
          whiskyCollection: 'Collection de Whisky Exclusive',
          paillardCorks: 'Bouchons Bruno Paillard',
          remuageCellar: 'Remuage en Cave Champagne',
          concreteEggs: 'Œufs de Fermentation en Béton',
          amphoras: 'Amphores en Terre Cuite',
          event: 'Événement de dégustation de vin',
          sommelierExamining: 'Sommelier examinant le vin',
          cellarCollection: 'Cave à vin premium',
          vineyard: 'Paysage de vignoble',
          restaurantService: 'Service de vin au restaurant',
          workshop: 'Atelier d\'éducation vinicole',
          bottleCollection: 'Collection de bouteilles premium',
          privateTasting: 'Dégustation privée de vin',
          consultation: 'Consultation de restaurant',
          pairing: 'Accord vin et fromage',
          label: 'Examen de l\'étiquette de vin',
          barrelCellar: 'Cave à vin traditionnelle'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl',
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
