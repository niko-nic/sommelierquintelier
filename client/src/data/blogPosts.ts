import { BlogPost } from '@/types/blog';
const authorImage = "https://picsum.photos/800/600?1";
const rieslingImage = "https://picsum.photos/800/600?2";
const merlotImage = "https://picsum.photos/800/600?3";
const cabernetImage = "https://picsum.photos/800/600?4";
const cellarImage = "https://picsum.photos/800/600?5";
const sauvignonImage = "https://picsum.photos/800/600?6";
const pinotImage  = "https://picsum.photos/800/600?7";
const chardonnayImage = "https://picsum.photos/800/600?8";
const vineyardImage  = "https://picsum.photos/800/600?9";
const wineInspectionImage = "https://picsum.photos/800/600?10";
const champagneImage = "https://picsum.photos/800/600?11";

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'riesling',
    featuredImage: rieslingImage,
    date: '2024-08-25',
    category: 'druiven',
    readTime: 8,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Riesling',
        excerpt: 'Ontdek de veelzijdige witte druif die gedijt in koele klimaten en varieert van droog en fris tot rijk en zoet.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Alles over Riesling: van oorsprong tot smaakprofiel. Ontdek waarom deze druif zo geliefd is wereldwijd.',
          keywords: ['riesling', 'witte wijn', 'duitsland', 'elzas', 'druivensoort']
        },
        content: {
          intro: 'Riesling is een veelzijdige witte druivensoort die vooral gedijt in koele klimaten zoals in Duitsland, de Elzas, en delen van de Verenigde Staten en Australië. De wijnen variëren van droog en fris tot rijk en zoet, met kenmerkende aroma\'s van citrus, perzik en bloemen. Dankzij de hoge aanwezige zuren kan Riesling uitstekend verouderen, waarbij complexe smaken zoals honing en petrol zich ontwikkelen.',
          keyTakeaways: {
            'Kleur': 'Wit',
            'Stijl': 'Mousserend, fris wit, expressief wit',
            'Smaakprofiel': 'Van citrus tot gerijpt fruit',
            'Bekend door': 'Elzas, Duitsland',
            'Probeer ook': 'Furmint, Assyrtiko, Loureiro, Müller-Thurgau'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Riesling, een van de meest iconische druivensoorten ter wereld, vindt zijn oorsprong in de schilderachtige wijngaarden van Duitsland. De eerste gedocumenteerde vermelding van Riesling dateert uit 1435 in de regio Rheingau, toen een koopman een aankoop van Rieslingdruiven noteerde. Deze vroege referentie markeert het begin van een rijke geschiedenis die deze druif zou transformeren tot een symbool van kwaliteit en traditie.\n\nRond de 17e en 18e eeuw verwierf Riesling internationale bekendheid, mede door de toenemende vraag naar Duitse wijnen in heel Europa. Monniken speelden een cruciale rol in het cultiveren van de beste wijngaarden en het ontwikkelen van technieken die de kwaliteit van Riesling naar nieuwe hoogten tilden. Tegenwoordig wordt Riesling wereldwijd aangeplant en gevinifieerd, van de Elzas tot Australië. Maar het hart van de druif zal altijd in Duitsland blijven.'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Riesling is een druivensoort die specifieke bodem- en klimaatcondities nodig heeft om zijn volledig potentieel te bereiken. Het is een druif die vooral gedijt in koele klimaten, waar het groeiseizoen lang genoeg is om de druiven langzaam te laten rijpen. Dit zorgt voor een ideale balans tussen suiker, zuren en aroma\'s.\n\nEen koel, gematigd klimaat is essentieel voor Riesling. De beste regio\'s voor Riesling, zoals de Moezel en de Rheingau in Duitsland, de Elzas in Frankrijk, en delen van Oostenrijk en Australië, kennen koele zomers en lange, gematigde herfsten. Het contrast tussen warme dagen en koele nachten is ook cruciaal.\n\nDe bodem waarop Riesling groeit is minstens zo belangrijk als het klimaat. In Duitsland, met name in de Moezel, groeit Riesling op steile hellingen met een bodem van leisteen. Deze leisteenbodems slaan overdag warmte op en geven deze \'s nachts langzaam af, wat de rijping van de druiven bevordert en een mineraal karakter aan de wijn toevoegt.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'Riesling kan sterk veranderen naarmate het suikergehalte toeneemt. Riesling met weinig tot geen restsuiker kenmerken vooral jong wit pitfruit en citrus, maar ook het florale kan aanwezig zijn. Terwijl riesling met veel restsuiker zich zal kenmerken door gekonfijt tropisch fruit met zelf een aanwezigheid van petrol en specerijen.\n\n**Tropisch fruit**: Mango, ananas, guave\n**Fruit**: Appel, peer, meloen, abrikoos, nectarine, gember\n**Citrus**: Limoen, citroen, pompelmoes\n**Specerijen**: Kaneel, nootmuskaat, saffraan\n**Floraal**: Witte bloemen, jasmijn\n**Aards**: Leisteen, krijt'
            },
            {
              title: 'Invloed van hout',
              content: 'Houtgebruik bij Riesling is zeldzaam omdat het de delicate aroma\'s en frisse zuren van de druif kan overheersen. Wanneer hout wordt ingezet, gebeurt dit meestal met oude eiken vaten, die subtiele invloeden hebben en de wijn meer structuur en een mondvullend gevoel geven zonder de kenmerkende frisheid te verliezen. Vooral in regio\'s als de Rheingau en Pfalz wordt soms gebruik gemaakt van grote, oude vaten om een lichte romigheid en extra diepte te creëren.'
            },
            {
              title: 'Populariteit',
              content: 'Wereldwijd staat er ongeveer 60.000 hectare aan Riesling aangeplant. Duitsland heeft veruit het grootste aandeel met ongeveer 24.000 hectare, gevolgd door landen als Australië, Frankrijk en de Verenigde Staten. Deze aanplant weerspiegelt de wereldwijde populariteit van Riesling als een van de meest gewaardeerde witte druivensoorten.\n\nTop 10 landen:\n1. Duitsland\n2. Australië\n3. Frankrijk\n4. Verenigde Staten\n5. Oostenrijk\n6. Canada\n7. Nieuw-Zeeland\n8. Tsjechië\n9. Slovenië\n10. Zuid-Afrika'
            },
            {
              title: 'Serveer- & bewaartips',
              content: 'Een **lichte, frisse Riesling** komt het best tot zijn recht als hij goed gekoeld wordt geserveerd op 7°C, in een slank wijnglas dat de jonge, frisse aroma\'s benadrukt. Deze stijl Riesling drink je het best binnen de 2 tot 3 jaar na oogst.\n\nEen **rijke, volle Riesling** komt het best tot zijn recht bij een serveertemperatuur van 12°C, waardoor de complexe aroma\'s en diepe smaken goed naar voren komen. Dankzij zijn verouderingspotentieel kan een volle Riesling 5 tot 15 jaar rijpen, soms zelfs nog langer.\n\nEen **licht zoete Riesling** serveer je het best licht gekoeld op 9°C, om de zoetheid en levendige zuren in balans te brengen. Deze stijl Riesling kan dankzij de balans tussen zoet en zuur gemakkelijk 5 tot 10 jaar rijpen.\n\nEen zeer **zoete Riesling** serveer je het best ijskoud op 3°C. Hierdoor neemt de aciditeit de bovenhand en zal de wijn niet te stroperig aanvoelen.'
            },
            {
              title: 'Foodpairing',
              content: 'Een **lichte, frisse Riesling** serveer je het best bij rauwe visgerechten waar de chef speelt met zuren. Luchtige salades met bijvoorbeeld groene appel en geitenkaas zijn ook altijd een topper bij deze stijl Riesling. Deze stijl kan je ook serveren als aperitief wijn bij frisse springrolls met een zoet-zure dip.\n\nEen **rijke, volle Riesling** kunnen gerechten aan met meer structuur en body. Een aziatisch getint gerecht zoals gelakt buikspek met noedels, gember en soja doen het zeer goed. Maar ook kreeft met dimsums van butternut gevuld met kimchi en zure kool en mergpijp.\n\nEen **licht zoete Riesling** waar er een harmonie is tussen restsuiker en fraîcheur combineer je best met gerechten waar je ook speelt met zoet en zuur. Zoals een gelakte Sint-Jakobsschelp aangeschroeid op de teppanyaki.\n\nEen zeer **zoete Riesling** kan je serveren met blauwgeaderde kazen zoals de Blue Stilton uit Engeland, de Gorgonzola uit Italië of de Roquefort uit Frankrijk. Dessertwijn gemaakt van Riesling passen uiteraard ook bij desserten zoals een klassieke tarte tatin.'
            }
          ]
        }
      },
      en: {
        title: 'Riesling',
        excerpt: 'Discover the versatile white grape that thrives in cool climates, ranging from dry and crisp to rich and sweet.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Everything about Riesling: from origin to flavor profile. Discover why this grape is so beloved worldwide.',
          keywords: ['riesling', 'white wine', 'germany', 'alsace', 'grape variety']
        },
        content: {
          intro: 'Riesling is a versatile white grape variety that particularly thrives in cool climates such as Germany, Alsace, and parts of the United States and Australia. The wines range from dry and fresh to rich and sweet, with characteristic aromas of citrus, peach, and flowers. Thanks to its high acidity, Riesling can age exceptionally well, developing complex flavors such as honey and petrol.',
          keyTakeaways: {
            'Color': 'White',
            'Style': 'Sparkling, crisp white, expressive white',
            'Flavor Profile': 'From citrus to aged fruit',
            'Known for': 'Alsace, Germany',
            'Also try': 'Furmint, Assyrtiko, Loureiro, Müller-Thurgau'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Riesling, one of the world\'s most iconic grape varieties, originates from the picturesque vineyards of Germany. The first documented mention of Riesling dates from 1435 in the Rheingau region, when a merchant recorded a purchase of Riesling grapes. This early reference marks the beginning of a rich history that would transform this grape into a symbol of quality and tradition.\n\nAround the 17th and 18th centuries, Riesling gained international recognition, partly due to the increasing demand for German wines throughout Europe. Monks played a crucial role in cultivating the finest vineyards and developing techniques that elevated Riesling quality to new heights. Today, Riesling is planted and vinified worldwide, from Alsace to Australia. But the heart of the grape will always remain in Germany.'
            },
            {
              title: 'Soil & Climate',
              content: 'Riesling is a grape variety that requires specific soil and climate conditions to reach its full potential. It is a grape that particularly thrives in cool climates, where the growing season is long enough to allow the grapes to ripen slowly. This creates an ideal balance between sugar, acidity, and aromas.\n\nA cool, temperate climate is essential for Riesling. The best regions for Riesling, such as the Mosel and Rheingau in Germany, Alsace in France, and parts of Austria and Australia, experience cool summers and long, moderate autumns. The contrast between warm days and cool nights is also crucial.\n\nThe soil on which Riesling grows is at least as important as the climate. In Germany, particularly in the Mosel, Riesling grows on steep slopes with slate soil. These slate soils store heat during the day and release it slowly at night, promoting grape ripening and adding a mineral character to the wine.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'Riesling can change dramatically as sugar content increases. Riesling with little to no residual sugar features young white stone fruit and citrus, though floral notes can also be present. Meanwhile, Riesling with high residual sugar will be characterized by candied tropical fruit with even a presence of petrol and spices.\n\n**Tropical fruit**: Mango, pineapple, guava\n**Fruit**: Apple, pear, melon, apricot, nectarine, ginger\n**Citrus**: Lime, lemon, grapefruit\n**Spices**: Cinnamon, nutmeg, saffron\n**Floral**: White flowers, jasmine\n**Earthy**: Slate, chalk'
            },
            {
              title: 'Influence of Oak',
              content: 'Oak usage with Riesling is rare because it can overpower the grape\'s delicate aromas and fresh acidity. When oak is used, it\'s usually with old oak barrels that have subtle influences and give the wine more structure and mouthfeel without losing its characteristic freshness. Especially in regions like the Rheingau and Pfalz, large old barrels are sometimes used to create a light creaminess and extra depth.'
            },
            {
              title: 'Popularity',
              content: 'Approximately 60,000 hectares of Riesling are planted worldwide. Germany has by far the largest share with about 24,000 hectares, followed by countries like Australia, France, and the United States. This plantation reflects the global popularity of Riesling as one of the most valued white grape varieties.\n\nTop 10 countries:\n1. Germany\n2. Australia\n3. France\n4. United States\n5. Austria\n6. Canada\n7. New Zealand\n8. Czech Republic\n9. Slovenia\n10. South Africa'
            },
            {
              title: 'Serving & Storage Tips',
              content: 'A **light, crisp Riesling** is best served well-chilled at 7°C, in a slender wine glass that emphasizes the young, fresh aromas. This style of Riesling is best enjoyed within 2 to 3 years of harvest.\n\nA **rich, full Riesling** comes into its own at a serving temperature of 12°C, allowing complex aromas and deep flavors to shine. Thanks to its aging potential, a full Riesling can mature for 5 to 15 years, sometimes even longer.\n\nA **lightly sweet Riesling** is best served lightly chilled at 9°C to balance sweetness and vibrant acidity. This style of Riesling can easily age for 5 to 10 years thanks to the balance between sweet and acid.\n\nA very **sweet Riesling** is best served ice-cold at 3°C. This allows the acidity to take the lead and prevents the wine from feeling too syrupy.'
            },
            {
              title: 'Food Pairing',
              content: 'A **light, crisp Riesling** pairs best with raw fish dishes where the chef plays with acids. Light salads with, for example, green apple and goat cheese are also always a winner with this style of Riesling. This style can also be served as an aperitif wine with fresh spring rolls and a sweet-and-sour dip.\n\nA **rich, full Riesling** can handle dishes with more structure and body. An Asian-inspired dish like glazed pork belly with noodles, ginger, and soy works very well. But also lobster with butternut dumplings filled with kimchi and sauerkraut and bone marrow.\n\nA **lightly sweet Riesling** where there is harmony between residual sugar and freshness pairs best with dishes where you also play with sweet and sour. Like a glazed scallop seared on the teppanyaki.\n\nA very **sweet Riesling** can be served with blue-veined cheeses like Blue Stilton from England, Gorgonzola from Italy, or Roquefort from France. Dessert wine made from Riesling also naturally pairs with desserts like a classic tarte tatin.'
            }
          ]
        }
      },
      fr: {
        title: 'Riesling',
        excerpt: 'Découvrez le cépage blanc polyvalent qui prospère dans les climats frais, allant du sec et vif au riche et doux.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Tout sur le Riesling : de l\'origine au profil gustatif. Découvrez pourquoi ce cépage est si apprécié dans le monde entier.',
          keywords: ['riesling', 'vin blanc', 'allemagne', 'alsace', 'cépage']
        },
        content: {
          intro: 'Le Riesling est un cépage blanc polyvalent qui prospère particulièrement dans les climats frais comme l\'Allemagne, l\'Alsace et certaines parties des États-Unis et de l\'Australie. Les vins vont du sec et frais au riche et doux, avec des arômes caractéristiques d\'agrumes, de pêche et de fleurs. Grâce à son acidité élevée, le Riesling peut vieillir exceptionnellement bien, développant des saveurs complexes comme le miel et l\'essence.',
          keyTakeaways: {
            'Couleur': 'Blanc',
            'Style': 'Effervescent, blanc vif, blanc expressif',
            'Profil Gustatif': 'Des agrumes aux fruits mûrs',
            'Connu pour': 'Alsace, Allemagne',
            'À essayer aussi': 'Furmint, Assyrtiko, Loureiro, Müller-Thurgau'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Riesling, l\'un des cépages les plus emblématiques au monde, trouve son origine dans les vignobles pittoresques d\'Allemagne. La première mention documentée du Riesling date de 1435 dans la région du Rheingau, lorsqu\'un marchand a enregistré un achat de raisins Riesling. Cette référence précoce marque le début d\'une riche histoire qui transformerait ce cépage en symbole de qualité et de tradition.\n\nAutour des XVIIe et XVIIIe siècles, le Riesling a acquis une renommée internationale, notamment grâce à la demande croissante de vins allemands dans toute l\'Europe. Les moines ont joué un rôle crucial dans la culture des meilleurs vignobles et le développement de techniques qui ont élevé la qualité du Riesling vers de nouveaux sommets. Aujourd\'hui, le Riesling est planté et vinifié dans le monde entier, de l\'Alsace à l\'Australie. Mais le cœur du cépage restera toujours en Allemagne.'
            },
            {
              title: 'Sol & Climat',
              content: 'Le Riesling est un cépage qui nécessite des conditions de sol et de climat spécifiques pour atteindre son plein potentiel. C\'est un raisin qui prospère particulièrement dans les climats frais, où la saison de croissance est suffisamment longue pour permettre aux raisins de mûrir lentement. Cela crée un équilibre idéal entre sucre, acidité et arômes.\n\nUn climat frais et tempéré est essentiel pour le Riesling. Les meilleures régions pour le Riesling, comme la Moselle et le Rheingau en Allemagne, l\'Alsace en France et certaines parties de l\'Autriche et de l\'Australie, connaissent des étés frais et de longs automnes modérés. Le contraste entre les journées chaudes et les nuits fraîches est également crucial.\n\nLe sol sur lequel pousse le Riesling est au moins aussi important que le climat. En Allemagne, en particulier dans la Moselle, le Riesling pousse sur des pentes abruptes avec un sol d\'ardoise. Ces sols ardoisés stockent la chaleur pendant la journée et la libèrent lentement la nuit, favorisant la maturation des raisins et ajoutant un caractère minéral au vin.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'Le Riesling peut changer considérablement à mesure que la teneur en sucre augmente. Le Riesling avec peu ou pas de sucre résiduel présente principalement des fruits à noyau blanc jeunes et des agrumes, bien que le floral puisse également être présent. Tandis que le Riesling avec beaucoup de sucre résiduel se caractérisera par des fruits tropicaux confits avec même une présence d\'essence et d\'épices.\n\n**Fruits tropicaux**: Mangue, ananas, goyave\n**Fruits**: Pomme, poire, melon, abricot, nectarine, gingembre\n**Agrumes**: Citron vert, citron, pamplemousse\n**Épices**: Cannelle, muscade, safran\n**Floral**: Fleurs blanches, jasmin\n**Terreux**: Ardoise, craie'
            },
            {
              title: 'Influence du Bois',
              content: 'L\'utilisation du bois avec le Riesling est rare car elle peut dominer les arômes délicats et l\'acidité fraîche du raisin. Lorsque le bois est utilisé, c\'est généralement avec de vieux fûts de chêne qui ont des influences subtiles et donnent au vin plus de structure et de sensation en bouche sans perdre sa fraîcheur caractéristique. En particulier dans des régions comme le Rheingau et le Pfalz, de grands vieux fûts sont parfois utilisés pour créer une légère onctuosité et une profondeur supplémentaire.'
            },
            {
              title: 'Popularité',
              content: 'Environ 60 000 hectares de Riesling sont plantés dans le monde. L\'Allemagne possède de loin la plus grande part avec environ 24 000 hectares, suivie par des pays comme l\'Australie, la France et les États-Unis. Cette plantation reflète la popularité mondiale du Riesling comme l\'un des cépages blancs les plus appréciés.\n\nTop 10 des pays:\n1. Allemagne\n2. Australie\n3. France\n4. États-Unis\n5. Autriche\n6. Canada\n7. Nouvelle-Zélande\n8. République tchèque\n9. Slovénie\n10. Afrique du Sud'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Un **Riesling léger et vif** est mieux servi bien frais à 7°C, dans un verre à vin élancé qui met en valeur les arômes jeunes et frais. Ce style de Riesling se déguste de préférence dans les 2 à 3 ans suivant la récolte.\n\nUn **Riesling riche et corsé** s\'exprime à une température de service de 12°C, permettant aux arômes complexes et aux saveurs profondes de briller. Grâce à son potentiel de vieillissement, un Riesling corsé peut mûrir de 5 à 15 ans, parfois même plus longtemps.\n\nUn **Riesling légèrement doux** est mieux servi légèrement frais à 9°C pour équilibrer la douceur et l\'acidité vibrante. Ce style de Riesling peut facilement vieillir de 5 à 10 ans grâce à l\'équilibre entre le sucre et l\'acidité.\n\nUn **Riesling très doux** est mieux servi glacé à 3°C. Cela permet à l\'acidité de prendre le dessus et empêche le vin de sembler trop sirupeux.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Un **Riesling léger et vif** s\'accorde mieux avec des plats de poisson cru où le chef joue avec les acides. Les salades légères avec, par exemple, de la pomme verte et du fromage de chèvre sont également toujours gagnantes avec ce style de Riesling. Ce style peut également être servi en apéritif avec des rouleaux de printemps frais et une sauce aigre-douce.\n\nUn **Riesling riche et corsé** peut accompagner des plats avec plus de structure et de corps. Un plat d\'inspiration asiatique comme le porc laqué avec des nouilles, du gingembre et du soja fonctionne très bien. Mais aussi du homard avec des raviolis à la courge butternut farcis de kimchi et choucroute et moelle osseuse.\n\nUn **Riesling légèrement doux** où il y a harmonie entre le sucre résiduel et la fraîcheur s\'accorde mieux avec des plats où vous jouez également avec le sucré et l\'acide. Comme une coquille Saint-Jacques glacée saisie au teppanyaki.\n\nUn **Riesling très doux** peut être servi avec des fromages à pâte persillée comme le Blue Stilton d\'Angleterre, le Gorgonzola d\'Italie ou le Roquefort de France. Les vins de dessert à base de Riesling s\'accordent naturellement aussi avec des desserts comme une tarte tatin classique.'
            }
          ]
        }
      }
    },
    relatedPosts: ['sauvignon-blanc', 'chardonnay', 'pinot-noir']
  },
  {
    id: '2',
    slug: 'merlot',
    featuredImage: merlotImage,
    date: '2024-08-20',
    category: 'druiven',
    readTime: 7,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Merlot',
        excerpt: 'Een van de meest populaire druivenrassen ter wereld, gewaardeerd om zijn soepele en toegankelijke karakter.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Alles over Merlot: van Bordeaux tot wereldwijd. Ontdek de zachte tannines en fruitige aroma\'s van deze populaire druif.',
          keywords: ['merlot', 'rode wijn', 'bordeaux', 'druivensoort', 'wijn']
        },
        content: {
          intro: 'Merlot is een van de meest populaire en wijdverspreide druivenrassen ter wereld, vooral gewaardeerd om zijn soepele en toegankelijke karakter. Deze druif is van oorsprong Frans en wordt veel verbouwd in de Bordeaux, waar hij vaak wordt geassembleerd met Cabernet Sauvignon en andere druiven. Merlot staat bekend om zijn zachte tannines, fruitige aroma\'s van zwart en rood fruit zoals pruimen en kersen, en soms tonen van chocolade en kruiden.',
          keyTakeaways: {
            'Kleur': 'Rood',
            'Stijl': 'Soepel rood, sterk rood, rosé',
            'Smaakprofiel': 'Van rood fruit tot hout aroma\'s',
            'Bekend door': 'Bordeaux, Toscane, Californië',
            'Probeer ook': 'Cabernet Sauvignon, Malbec, Petit Verdot, Corvina'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Merlot vindt zijn oorsprong in Bordeaux, Frankrijk, waar het al sinds de 18e eeuw wordt verbouwd. De naam "Merlot" zou zijn afgeleid van het Franse woord "merle", wat merel betekent, een vogel die graag de rijpe druiven eet. Merlot is vermoedelijk ontstaan uit een kruising van de oude Franse druivenrassen Cabernet Franc en Magdeleine Noire des Charentes. De druif werd voor het eerst vermeld in 1784 door een wijnmakelaar uit Bordeaux, die de kwaliteit van de wijn van Merlot prees.\n\nIn Bordeaux werd Merlot aanvankelijk voornamelijk gebruikt in blends, met name in de beroemde wijnen van de rechteroever van de Gironde, zoals die uit Pomerol en Saint-Émilion. De zachte, fruitige eigenschappen van Merlot maken het een ideale aanvulling op de meer gestructureerde en tanninerijke Cabernet Sauvignon.'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Merlot gedijt het beste in een gematigd tot warm klimaat met voldoende zonneschijn om volledig te rijpen. De druif staat bekend om zijn vroegrijpe karakter, wat betekent dat hij eerder rijpt dan veel andere rassen, zoals Cabernet Sauvignon. Dit maakt Merlot geschikt voor koelere klimaten, hoewel hij ook goed presteert in warmere streken, mits er voldoende temperatuurverschil is tussen dag en nacht om de frisheid en zuurgraad in de druiven te behouden.\n\nWat de bodem betreft, geeft Merlot de voorkeur aan kleihoudende gronden. In Bordeaux vooral op de rechteroever in gebieden zoals Pomerol en Saint-Émilion, worden de druiven geteeld op klei- en kalksteenrijke bodems. Deze bodems behouden goed vocht, wat essentieel is voor Merlot, omdat de druif gevoelig kan zijn voor droogte. De kleibodem helpt om de groei van de wijnstok in toom te houden en de druiven een goede balans tussen suikers en zuren te geven.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'Het smakenpallet van Merlot wordt beïnvloed door klimaat, bodem, oogstmoment, vinificatie, houtlagering en de leeftijd van de wijn. In koele klimaten overheersen rode fruittonen en frisse zuren, terwijl warmere klimaten rijper, donker fruit opleveren.\n\n**Zwart fruit**: Pruim, zwarte kers, bosbes, braambes\n**Rood fruit**: Aalbes, aardbei, framboos\n**Droog fruit**: Vijg, dadel\n**Specerijen**: Anijs\n**Kruiden**: Salie, laurier\n**Met hout**: Vanille, toffee, chocolade, cederhout\n**Aards**: Leer, aarde'
            },
            {
              title: 'Invloed van hout',
              content: 'Merlot **zonder rijping op eiken vaten** levert een frisse, fruitgedreven wijn op met een puur en toegankelijk karakter. Zonder de invloed van hout komen de natuurlijke eigenschappen van de druif naar voren, met de nadruk op rood en zwart fruit zoals kersen, pruimen en bessen. Ook kunnen deze wijnen subtiele hints van viooltjes. De tannines zijn doorgaans zacht en soepel.\n\nMerlot **met rijping op eiken vaten** heeft een diepere en complexere smaak, waarbij de invloed van het hout duidelijk naar voren komt. De fruitige tonen van rood en zwart fruit blijven aanwezig, maar worden aangevuld met warme en kruidige aroma\'s die afkomstig zijn van het eikenhout. Vaak komen er nuances van vanille, cederhout, tabak, en chocolade bij, samen met een subtiele rokerigheid of toast.'
            },
            {
              title: 'Populariteit',
              content: 'Merlot is wereldwijd een van de meest aangeplante druivenrassen, met meer dan 260.000 hectare. Frankrijk, vooral in Bordeaux, heeft de grootste aanplant. In Californië en Chili, met hun warmere klimaten, worden vollere en rijpere Merlot-wijnen geproduceerd, met zachtere tannines en uitgesproken fruitaroma\'s.\n\nTop 10 landen:\n1. Frankrijk\n2. Italië\n3. Verenigde Staten\n4. Spanje\n5. Chili\n6. China\n7. Australië\n8. Zuid-Afrika\n9. Argentinië\n10. Roemenië'
            },
            {
              title: 'Serveer- & bewaartips',
              content: 'Merlot wordt het best geserveerd op een temperatuur tussen 15 en 18°C. **Jonge, fruitige Merlot** komt het best tot zijn recht rond 15°C, terwijl **oudere en complexere Merlot** beter tot zijn recht komt rond 17-18°C. Dit helpt de wijn zijn volle aroma\'s en smaken optimaal te laten uitkomen. Het decanteren van Merlot, vooral bij oudere flessen, kan nuttig zijn om de wijn te wat lucht te geven en eventuele bezinksel te verwijderen.\n\nMerlot kan goed rijpen, afhankelijk van de kwaliteit. **Jonge, toegankelijke Merlot** is op zijn best tussen 3 tot 5 jaar na de oogst. **Complexe, volle Merlot**, vaak met rijping op eiken vaten, kan 8 tot 15 jaar of langer bewaard worden.'
            },
            {
              title: 'Foodpairing',
              content: 'De **lichte, elegante Merlot** drink je het best bij zachte gerechten met een verfijnd karakter. Zoals onder andere gegrilde kip met ovengebakken tomaten en een gegrilde aubergine. Ben je een pastaliefhebber dan kan je ook hier verrast worden door de combinatie van de lichte Merlot samen met een klassieke pasta met tomatensaus.\n\nDe **volle, krachtige Merlot** combineer je het best bij karaktervolle gerechten, zonder al te uitgesproken smaken. Denk maar aan een Beef Wellington met een paddenstoelenrisoto of een verfijnde lamskotelet met vleesjus. Probeer deze stijl Merlot ook zeker en vast bij kazen. Als je kiest voor kazen dan is het best om voor harde kazen te gaan. Zoals een Comté die 24 maand gerijpt heeft, of een Mancho Gran Reserva van 12 maand oud.'
            }
          ]
        }
      },
      en: {
        title: 'Merlot',
        excerpt: 'One of the world\'s most popular grape varieties, valued for its smooth and approachable character.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Everything about Merlot: from Bordeaux to worldwide. Discover the soft tannins and fruity aromas of this popular grape.',
          keywords: ['merlot', 'red wine', 'bordeaux', 'grape variety', 'wine']
        },
        content: {
          intro: 'Merlot is one of the world\'s most popular and widespread grape varieties, especially valued for its smooth and approachable character. This grape is originally French and is widely grown in Bordeaux, where it is often blended with Cabernet Sauvignon and other grapes. Merlot is known for its soft tannins, fruity aromas of black and red fruit such as plums and cherries, and sometimes hints of chocolate and herbs.',
          keyTakeaways: {
            'Color': 'Red',
            'Style': 'Smooth red, robust red, rosé',
            'Flavor Profile': 'From red fruit to oak aromas',
            'Known for': 'Bordeaux, Tuscany, California',
            'Also try': 'Cabernet Sauvignon, Malbec, Petit Verdot, Corvina'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Merlot finds its origin in Bordeaux, France, where it has been cultivated since the 18th century. The name "Merlot" is said to be derived from the French word "merle," meaning blackbird, a bird that loves to eat the ripe grapes. Merlot likely originated from a cross between the old French grape varieties Cabernet Franc and Magdeleine Noire des Charentes. The grape was first mentioned in 1784 by a wine merchant from Bordeaux, who praised the quality of Merlot wine.\n\nIn Bordeaux, Merlot was initially mainly used in blends, particularly in the famous wines from the right bank of the Gironde, such as those from Pomerol and Saint-Émilion. The soft, fruity characteristics of Merlot make it an ideal complement to the more structured and tannic Cabernet Sauvignon.'
            },
            {
              title: 'Soil & Climate',
              content: 'Merlot thrives best in a temperate to warm climate with sufficient sunshine to ripen fully. The grape is known for its early-ripening character, meaning it ripens earlier than many other varieties, such as Cabernet Sauvignon. This makes Merlot suitable for cooler climates, although it also performs well in warmer regions, provided there is sufficient temperature difference between day and night to maintain freshness and acidity in the grapes.\n\nAs for soil, Merlot prefers clay-based soils. In Bordeaux, especially on the right bank in areas like Pomerol and Saint-Émilion, grapes are grown on clay and limestone-rich soils. These soils retain moisture well, which is essential for Merlot, as the grape can be sensitive to drought. The clay soil helps control vine growth and gives the grapes a good balance between sugars and acids.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'Merlot\'s flavor palette is influenced by climate, soil, harvest timing, vinification, oak aging, and wine age. In cool climates, red fruit tones and fresh acids dominate, while warmer climates produce riper, darker fruit.\n\n**Black fruit**: Plum, black cherry, blueberry, blackberry\n**Red fruit**: Redcurrant, strawberry, raspberry\n**Dried fruit**: Fig, date\n**Spices**: Anise\n**Herbs**: Sage, bay leaf\n**With oak**: Vanilla, toffee, chocolate, cedarwood\n**Earthy**: Leather, earth'
            },
            {
              title: 'Influence of Oak',
              content: 'Merlot **without oak aging** produces a fresh, fruit-driven wine with a pure and approachable character. Without the influence of oak, the grape\'s natural characteristics come forward, emphasizing red and black fruit such as cherries, plums, and berries. These wines can also have subtle hints of violets. The tannins are generally soft and supple.\n\nMerlot **with oak aging** has a deeper and more complex flavor, with the influence of wood clearly prominent. The fruity tones of red and black fruit remain present but are complemented by warm and spicy aromas from the oak. Often nuances of vanilla, cedarwood, tobacco, and chocolate are added, along with subtle smokiness or toast.'
            },
            {
              title: 'Popularity',
              content: 'Merlot is one of the most planted grape varieties worldwide, with more than 260,000 hectares. France, especially Bordeaux, has the largest plantation. In California and Chile, with their warmer climates, fuller and riper Merlot wines are produced, with softer tannins and pronounced fruit aromas.\n\nTop 10 countries:\n1. France\n2. Italy\n3. United States\n4. Spain\n5. Chile\n6. China\n7. Australia\n8. South Africa\n9. Argentina\n10. Romania'
            },
            {
              title: 'Serving & Storage Tips',
              content: 'Merlot is best served at a temperature between 15 and 18°C. **Young, fruity Merlot** comes into its own around 15°C, while **older and more complex Merlot** better expresses itself around 17-18°C. This helps the wine fully develop its aromas and flavors. Decanting Merlot, especially older bottles, can be useful to give the wine some air and remove any sediment.\n\nMerlot can age well, depending on quality. **Young, approachable Merlot** is at its best between 3 to 5 years after harvest. **Complex, full Merlot**, often with oak aging, can be stored for 8 to 15 years or longer.'
            },
            {
              title: 'Food Pairing',
              content: 'A **light, elegant Merlot** pairs best with soft dishes with a refined character. Such as grilled chicken with oven-baked tomatoes and grilled eggplant. If you\'re a pasta lover, you can also be surprised by the combination of light Merlot with a classic pasta with tomato sauce.\n\nA **full, powerful Merlot** pairs best with characterful dishes without overly pronounced flavors. Think of Beef Wellington with mushroom risotto or a refined lamb chop with meat jus. Also definitely try this style of Merlot with cheeses. If you choose cheeses, it\'s best to go for hard cheeses. Like a Comté aged 24 months, or a Manchego Gran Reserva aged 12 months.'
            }
          ]
        }
      },
      fr: {
        title: 'Merlot',
        excerpt: 'L\'un des cépages les plus populaires au monde, apprécié pour son caractère souple et accessible.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Tout sur le Merlot : de Bordeaux au monde entier. Découvrez les tanins doux et les arômes fruités de ce cépage populaire.',
          keywords: ['merlot', 'vin rouge', 'bordeaux', 'cépage', 'vin']
        },
        content: {
          intro: 'Le Merlot est l\'un des cépages les plus populaires et les plus répandus au monde, particulièrement apprécié pour son caractère souple et accessible. Ce raisin est d\'origine française et est largement cultivé à Bordeaux, où il est souvent assemblé avec le Cabernet Sauvignon et d\'autres cépages. Le Merlot est connu pour ses tanins doux, ses arômes fruités de fruits noirs et rouges comme les prunes et les cerises, et parfois des notes de chocolat et d\'herbes.',
          keyTakeaways: {
            'Couleur': 'Rouge',
            'Style': 'Rouge souple, rouge robuste, rosé',
            'Profil Gustatif': 'Des fruits rouges aux arômes de chêne',
            'Connu pour': 'Bordeaux, Toscane, Californie',
            'À essayer aussi': 'Cabernet Sauvignon, Malbec, Petit Verdot, Corvina'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Merlot trouve son origine à Bordeaux, en France, où il est cultivé depuis le XVIIIe siècle. Le nom "Merlot" serait dérivé du mot français "merle", un oiseau qui aime manger les raisins mûrs. Le Merlot est probablement issu d\'un croisement entre les anciens cépages français Cabernet Franc et Magdeleine Noire des Charentes. Le raisin a été mentionné pour la première fois en 1784 par un marchand de vin de Bordeaux, qui louait la qualité du vin de Merlot.\n\nÀ Bordeaux, le Merlot était initialement principalement utilisé dans les assemblages, en particulier dans les vins célèbres de la rive droite de la Gironde, comme ceux de Pomerol et Saint-Émilion. Les caractéristiques douces et fruitées du Merlot en font un complément idéal au Cabernet Sauvignon plus structuré et tannique.'
            },
            {
              title: 'Sol & Climat',
              content: 'Le Merlot prospère mieux dans un climat tempéré à chaud avec suffisamment d\'ensoleillement pour mûrir complètement. Le cépage est connu pour son caractère précoce, ce qui signifie qu\'il mûrit plus tôt que de nombreuses autres variétés, comme le Cabernet Sauvignon. Cela rend le Merlot adapté aux climats plus frais, bien qu\'il performe également bien dans les régions plus chaudes, à condition qu\'il y ait une différence de température suffisante entre le jour et la nuit pour maintenir la fraîcheur et l\'acidité des raisins.\n\nEn ce qui concerne le sol, le Merlot préfère les sols argileux. À Bordeaux, en particulier sur la rive droite dans des zones comme Pomerol et Saint-Émilion, les raisins sont cultivés sur des sols riches en argile et en calcaire. Ces sols retiennent bien l\'humidité, ce qui est essentiel pour le Merlot, car le raisin peut être sensible à la sécheresse. Le sol argileux aide à contrôler la croissance de la vigne et donne aux raisins un bon équilibre entre sucres et acides.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'La palette de saveurs du Merlot est influencée par le climat, le sol, le moment de la récolte, la vinification, le vieillissement en chêne et l\'âge du vin. Dans les climats frais, les tons de fruits rouges et les acides frais dominent, tandis que les climats plus chauds produisent des fruits plus mûrs et plus foncés.\n\n**Fruits noirs**: Prune, cerise noire, myrtille, mûre\n**Fruits rouges**: Groseille, fraise, framboise\n**Fruits secs**: Figue, datte\n**Épices**: Anis\n**Herbes**: Sauge, laurier\n**Avec chêne**: Vanille, caramel, chocolat, cèdre\n**Terreux**: Cuir, terre'
            },
            {
              title: 'Influence du Bois',
              content: 'Le Merlot **sans élevage en fûts de chêne** produit un vin frais et fruité avec un caractère pur et accessible. Sans l\'influence du bois, les caractéristiques naturelles du raisin ressortent, mettant l\'accent sur les fruits rouges et noirs comme les cerises, les prunes et les baies. Ces vins peuvent également avoir de subtiles notes de violettes. Les tanins sont généralement doux et souples.\n\nLe Merlot **avec élevage en fûts de chêne** a une saveur plus profonde et plus complexe, l\'influence du bois étant clairement proéminente. Les tons fruités de fruits rouges et noirs restent présents mais sont complétés par des arômes chauds et épicés provenant du chêne. Souvent, des nuances de vanille, de cèdre, de tabac et de chocolat s\'ajoutent, avec un fumé subtil ou du pain grillé.'
            },
            {
              title: 'Popularité',
              content: 'Le Merlot est l\'un des cépages les plus plantés dans le monde, avec plus de 260 000 hectares. La France, en particulier Bordeaux, possède la plus grande plantation. En Californie et au Chili, avec leurs climats plus chauds, des vins Merlot plus pleins et plus mûrs sont produits, avec des tanins plus doux et des arômes de fruits prononcés.\n\nTop 10 des pays:\n1. France\n2. Italie\n3. États-Unis\n4. Espagne\n5. Chili\n6. Chine\n7. Australie\n8. Afrique du Sud\n9. Argentine\n10. Roumanie'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Le Merlot se sert mieux à une température entre 15 et 18°C. Le **Merlot jeune et fruité** s\'exprime au mieux autour de 15°C, tandis que le **Merlot plus âgé et plus complexe** s\'exprime mieux autour de 17-18°C. Cela aide le vin à développer pleinement ses arômes et ses saveurs. Décanter le Merlot, en particulier les bouteilles plus anciennes, peut être utile pour donner un peu d\'air au vin et éliminer tout sédiment.\n\nLe Merlot peut bien vieillir, selon la qualité. Le **Merlot jeune et accessible** est à son meilleur entre 3 et 5 ans après la récolte. Le **Merlot complexe et corsé**, souvent avec un élevage en chêne, peut être conservé de 8 à 15 ans ou plus.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Un **Merlot léger et élégant** s\'accorde mieux avec des plats doux au caractère raffiné. Comme du poulet grillé avec des tomates au four et des aubergines grillées. Si vous êtes amateur de pâtes, vous pouvez également être surpris par la combinaison du Merlot léger avec des pâtes classiques à la sauce tomate.\n\nUn **Merlot corsé et puissant** s\'accorde mieux avec des plats de caractère sans saveurs trop prononcées. Pensez au Bœuf Wellington avec risotto aux champignons ou une côtelette d\'agneau raffinée avec jus de viande. Essayez également ce style de Merlot avec des fromages. Si vous choisissez des fromages, il est préférable d\'opter pour des fromages à pâte dure. Comme un Comté affiné 24 mois, ou un Manchego Gran Reserva affiné 12 mois.'
            }
          ]
        }
      }
    },
    relatedPosts: ['cabernet-sauvignon', 'pinot-noir']
  },
  {
    id: '3',
    slug: 'cabernet-sauvignon',
    featuredImage: cabernetImage,
    date: '2024-08-18',
    category: 'druiven',
    readTime: 8,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Cabernet Sauvignon',
        excerpt: 'De koning van de rode druiven - ontdek de meest aangeplante rode druivensoort wereldwijd.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Cabernet Sauvignon: de koning van rode druiven. Ontdek alles over oorsprong, smaak en perfecte combinaties.',
          keywords: ['cabernet sauvignon', 'rode wijn', 'bordeaux', 'wijn', 'druif']
        },
        content: {
          intro: 'Cabernet Sauvignon is een van de meest populaire druivensoort wereldwijd. Het is ook de meest aangeplante druivensoorten voor rode wijn. Afkomstig uit de Bordeaux-regio in Frankrijk, staat deze druif bekend om zijn stevige structuur, diepe kleur en volle smaak. De wijn heeft vaak aroma\'s van zwarte bes, cederhout, tabak en soms een vleugje vanille, vooral wanneer hij gerijpt is op eikenhout.',
          keyTakeaways: {
            'Kleur': 'Rood',
            'Stijl': 'Complex rood, rosé',
            'Smaakprofiel': 'Van zwart fruit tot aards en hout',
            'Bekend door': 'Bordeaux',
            'Probeer ook': 'Merlot, Cabernet Franc, Carménère'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Cabernet Sauvignon ontstond in de 17e eeuw in de Bordeaux-regio in Frankrijk. De druivensoort is het resultaat van een spontane kruising tussen Cabernet Franc en Sauvignon Blanc. Deze natuurlijke kruising werd pas in de jaren 1990 bevestigd door een grondig DNA-onderzoek.\n\nCabernet Sauvignon groeide snel uit tot een van de belangrijkste druivensoorten in Bordeaux, waar hij veel wordt gebruikt in de befaamde Bordeaux-blend. Zijn robuuste karakter, goede weerstand tegen ziekten en vermogen om zich aan te passen aan verschillende klimaatzones hebben bijgedragen aan zijn wereldwijde populariteit. Vandaag de dag wordt Cabernet Sauvignon in vrijwel alle wijnproducerende landen geteeld en staat hij bekend als de "koning van de rode druiven".'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Cabernet Sauvignon gedijt het beste in goed doorlatende, arme bodems, zoals grind of zand. Deze bodems zorgen ervoor dat de wijnstokken zich diep gaan wortelen, wat ervoor zorgt dat de druiven geconcentreerder en complexer worden. In Bordeaux, waar de druif oorspronkelijk vandaan komt, zijn de grindrijke bodems van de Médoc ideaal. Ze reflecteren de zon, wat bijdraagt aan een gelijkmatige rijping van de druiven.\n\nWat het klimaat betreft, heeft Cabernet Sauvignon een warm tot gematigd klimaat nodig om volledig te rijpen. Te koele omstandigheden kunnen leiden tot onrijpe druiven, met onrijpe tannines en groene aroma\'s zoals paprika. In warme klimaten, zoals Napa Valley in Californië, kan de druif optimaal rijpen en ontwikkelt hij rijke smaken van zwart fruit en kruiden.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'De aroma\'s en smaken van Cabernet Sauvignon worden beïnvloed door het terroir, klimaat, vinificatie en rijping. Terroir en klimaat bepalen de rijpheid van de druiven; koele klimaten geven groene tonen zoals paprika, terwijl warme klimaten rijp fruit zoals zwarte bes bevorderen.\n\n**Zwart fruit**: Zwarte bes, braambes, zwarte kers\n**Rood fruit**: Aardbei, framboos, rode pruim, aalbes\n**Specerijen**: Gerookte paprika, zwarte peper, rode peper, zoethout\n**Kruiden**: Rode paprika, lavas\n**Met hout**: Cacao, koffie, zoete tabak, vanille\n**Aards**: Gedroogde bladeren, oud leer, teer'
            },
            {
              title: 'Invloed van hout',
              content: 'Cabernet Sauvignon **zonder houtrijping** biedt een puur en fris karakter, waarin de natuurlijke druivenaroma\'s en smaken centraal staan. Deze wijnen hebben vaak levendige tonen van rood en zwart fruit, zoals kersen, bessen en pruimen, met subtiele hints van kruiden en soms een lichte groenheid, zoals paprika. Zonder invloed van eikenhout behouden deze wijnen hun frisse zuurgraad en lichtere body, met tannines die zachter en minder prominent zijn.\n\nCabernet Sauvignon **met houtrijping** ontwikkelt een complexer en voller smaakprofiel. Door rijping in eikenhouten vaten krijgt de wijn extra aroma\'s van vanille, ceder, tabak en specerijen, die de natuurlijke fruittonen van zwarte bes, pruimen en kersen aanvullen. Het hout verzacht de tannines, waardoor de wijn een zijdezachte structuur en grotere diepte krijgt.'
            },
            {
              title: 'Populariteit',
              content: 'Cabernet Sauvignon is een van de meest populaire druivensoorten ter wereld, met ongeveer 340.000 hectare aangeplant. De druif wordt wereldwijd gewaardeerd om zijn kracht en veelzijdigheid.\n\nTop 10 landen:\n1. Frankrijk\n2. Verenigde Staten\n3. Chili\n4. Australië\n5. China\n6. Italië\n7. Zuid-Afrika\n8. Argentinië\n9. Spanje\n10. Nieuw-Zeeland'
            },
            {
              title: 'Serveer- & bewaartips',
              content: '**Cabernet Sauvignon zonder houtrijping** moet idealiter op een koelere temperatuur van 16-18°C worden geserveerd om zijn frisse fruitaroma\'s en levendige smaken volledig tot hun recht te laten komen. Deze wijnen zijn meestal eerder toegankelijk en kunnen zonder verdere veroudering genoten worden. Om deze te bewaren, hoeven wijnen zonder houtrijping doorgaans niet langdurig opgeslagen te worden. Ze zijn meestal op hun best binnen 3 tot 5 jaar na de oogst.\n\n**Cabernet Sauvignon met houtrijping** wordt het best geserveerd op een temperatuur van 18-20°C om de complexe aroma\'s en smaken volledig tot hun recht te laten komen. Deze stijl heeft een groter bewaarpotentieel. Ze kunnen doorgaans 5 tot 15 jaar of zelfs langer worden bewaard, afhankelijk van de kwaliteit en structuur van de wijn.'
            },
            {
              title: 'Foodpairing',
              content: '**Cabernet Sauvignon zonder houtrijping** serveer je het best bij lichte, fijne gerechten. Ik denk dan aan verfijnde voorgerechten zoals een tartaar van tonijn afgewerkt met wasabi en radijs. Wil je iets meer karakter in het gerecht kan je eventueel ook een tartaar maken van rund in plaats van tonijn. Eet je graag vegetarisch dan past deze stijl bij een gerecht met opgelegde rode biet in combinatie met burrata en rozemarijn.\n\n**Cabernet Sauvignon met houtrijping** drink je het best bij zware, complexe gerechten. Wildgerechten bijvoorbeeld. Zoals een stukje hertenfilet met winterse groenten en een portosaus. Hou je het graag iets simpeler kan je gaan voor een gegrilde chateaubriand, geserveerd met een hartige salade en zelfgemaakte frieten. Probeer ook zeker eens een gerijpte Cabernet Sauvignon te combineren met een chocoladedessert met zwart fruit en karamel.'
            }
          ]
        }
      },
      en: {
        title: 'Cabernet Sauvignon',
        excerpt: 'The king of red grapes - discover the most planted red grape variety worldwide.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Cabernet Sauvignon: the king of red grapes. Discover everything about origin, taste, and perfect pairings.',
          keywords: ['cabernet sauvignon', 'red wine', 'bordeaux', 'wine', 'grape']
        },
        content: {
          intro: 'Cabernet Sauvignon is one of the most popular grape varieties worldwide. It is also the most planted grape variety for red wine. Originating from the Bordeaux region in France, this grape is known for its firm structure, deep color, and full flavor. The wine often has aromas of blackcurrant, cedar, tobacco, and sometimes a hint of vanilla, especially when aged in oak.',
          keyTakeaways: {
            'Color': 'Red',
            'Style': 'Complex red, rosé',
            'Flavor Profile': 'From black fruit to earthy and oak',
            'Known for': 'Bordeaux',
            'Also try': 'Merlot, Cabernet Franc, Carménère'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Cabernet Sauvignon originated in the 17th century in the Bordeaux region of France. The grape variety is the result of a spontaneous cross between Cabernet Franc and Sauvignon Blanc. This natural crossing was only confirmed in the 1990s through thorough DNA research.\n\nCabernet Sauvignon quickly grew to become one of the most important grape varieties in Bordeaux, where it is extensively used in the famous Bordeaux blends. Its robust character, good disease resistance, and ability to adapt to different climate zones have contributed to its worldwide popularity. Today, Cabernet Sauvignon is grown in virtually all wine-producing countries and is known as the "king of red grapes".'
            },
            {
              title: 'Soil & Climate',
              content: 'Cabernet Sauvignon thrives best in well-draining, poor soils such as gravel or sand. These soils cause the vines to root deeply, making the grapes more concentrated and complex. In Bordeaux, where the grape originally comes from, the gravel-rich soils of the Médoc are ideal. They reflect the sun, contributing to even ripening of the grapes.\n\nAs for climate, Cabernet Sauvignon needs a warm to temperate climate to ripen fully. Too cool conditions can lead to unripe grapes, with unripe tannins and green aromas like bell pepper. In warm climates, such as Napa Valley in California, the grape can ripen optimally and develops rich flavors of black fruit and herbs.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'The aromas and flavors of Cabernet Sauvignon are influenced by terroir, climate, vinification, and aging. Terroir and climate determine grape ripeness; cool climates give green tones like bell pepper, while warm climates promote ripe fruit like blackcurrant.\n\n**Black fruit**: Blackcurrant, blackberry, black cherry\n**Red fruit**: Strawberry, raspberry, red plum, redcurrant\n**Spices**: Smoked paprika, black pepper, red pepper, licorice\n**Herbs**: Red bell pepper, lovage\n**With oak**: Cocoa, coffee, sweet tobacco, vanilla\n**Earthy**: Dried leaves, old leather, tar'
            },
            {
              title: 'Influence of Oak',
              content: 'Cabernet Sauvignon **without oak aging** offers a pure and fresh character, with the grape\'s natural aromas and flavors at the forefront. These wines often have vibrant tones of red and black fruit, such as cherries, berries, and plums, with subtle hints of herbs and sometimes a light greenness, like bell pepper. Without the influence of oak, these wines maintain their fresh acidity and lighter body, with tannins that are softer and less prominent.\n\nCabernet Sauvignon **with oak aging** develops a more complex and fuller flavor profile. Through aging in oak barrels, the wine gains additional aromas of vanilla, cedar, tobacco, and spices, which complement the natural fruit tones of blackcurrant, plums, and cherries. The oak softens the tannins, giving the wine a silky structure and greater depth.'
            },
            {
              title: 'Popularity',
              content: 'Cabernet Sauvignon is one of the most popular grape varieties in the world, with approximately 340,000 hectares planted. The grape is valued worldwide for its strength and versatility.\n\nTop 10 countries:\n1. France\n2. United States\n3. Chile\n4. Australia\n5. China\n6. Italy\n7. South Africa\n8. Argentina\n9. Spain\n10. New Zealand'
            },
            {
              title: 'Serving & Storage Tips',
              content: '**Cabernet Sauvignon without oak aging** should ideally be served at a cooler temperature of 16-18°C to fully bring out its fresh fruit aromas and vibrant flavors. These wines are usually more approachable and can be enjoyed without further aging. For storage, wines without oak aging generally don\'t need to be stored long-term. They are usually at their best within 3 to 5 years of harvest.\n\n**Cabernet Sauvignon with oak aging** is best served at a temperature of 18-20°C to fully express its complex aromas and flavors. This style has greater storage potential. They can generally be stored for 5 to 15 years or even longer, depending on the wine\'s quality and structure.'
            },
            {
              title: 'Food Pairing',
              content: '**Cabernet Sauvignon without oak aging** pairs best with light, refined dishes. I\'m thinking of sophisticated appetizers like tuna tartare finished with wasabi and radish. If you want more character in the dish, you could also make a beef tartare instead of tuna. If you prefer vegetarian, this style pairs with a dish of pickled beets combined with burrata and rosemary.\n\n**Cabernet Sauvignon with oak aging** drinks best with heavy, complex dishes. Game dishes, for example. Like a piece of venison fillet with winter vegetables and a port sauce. If you prefer something simpler, you can go for a grilled chateaubriand, served with a hearty salad and homemade fries. Also definitely try pairing an aged Cabernet Sauvignon with a chocolate dessert with dark fruit and caramel.'
            }
          ]
        }
      },
      fr: {
        title: 'Cabernet Sauvignon',
        excerpt: 'Le roi des raisins rouges - découvrez le cépage rouge le plus planté au monde.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Cabernet Sauvignon : le roi des raisins rouges. Découvrez tout sur l\'origine, le goût et les accords parfaits.',
          keywords: ['cabernet sauvignon', 'vin rouge', 'bordeaux', 'vin', 'raisin']
        },
        content: {
          intro: 'Le Cabernet Sauvignon est l\'un des cépages les plus populaires au monde. C\'est également le cépage le plus planté pour le vin rouge. Originaire de la région de Bordeaux en France, ce raisin est connu pour sa structure ferme, sa couleur profonde et sa saveur pleine. Le vin a souvent des arômes de cassis, de cèdre, de tabac et parfois une touche de vanille, surtout lorsqu\'il est vieilli en chêne.',
          keyTakeaways: {
            'Couleur': 'Rouge',
            'Style': 'Rouge complexe, rosé',
            'Profil Gustatif': 'Des fruits noirs au terreux et au chêne',
            'Connu pour': 'Bordeaux',
            'À essayer aussi': 'Merlot, Cabernet Franc, Carménère'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Cabernet Sauvignon est né au XVIIe siècle dans la région de Bordeaux en France. Le cépage est le résultat d\'un croisement spontané entre le Cabernet Franc et le Sauvignon Blanc. Ce croisement naturel n\'a été confirmé que dans les années 1990 par une recherche ADN approfondie.\n\nLe Cabernet Sauvignon est rapidement devenu l\'un des cépages les plus importants à Bordeaux, où il est largement utilisé dans les célèbres assemblages bordelais. Son caractère robuste, sa bonne résistance aux maladies et sa capacité à s\'adapter à différentes zones climatiques ont contribué à sa popularité mondiale. Aujourd\'hui, le Cabernet Sauvignon est cultivé dans pratiquement tous les pays producteurs de vin et est connu comme le "roi des raisins rouges".'
            },
            {
              title: 'Sol & Climat',
              content: 'Le Cabernet Sauvignon prospère mieux dans des sols bien drainés et pauvres, comme le gravier ou le sable. Ces sols font que les vignes s\'enracinent profondément, rendant les raisins plus concentrés et plus complexes. À Bordeaux, d\'où le raisin est originaire, les sols graveleux du Médoc sont idéaux. Ils réfléchissent le soleil, contribuant à une maturation uniforme des raisins.\n\nPour le climat, le Cabernet Sauvignon a besoin d\'un climat chaud à tempéré pour mûrir complètement. Des conditions trop fraîches peuvent conduire à des raisins non mûrs, avec des tanins verts et des arômes herbacés comme le poivron. Dans les climats chauds, comme la Napa Valley en Californie, le raisin peut mûrir de manière optimale et développe de riches saveurs de fruits noirs et d\'herbes.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'Les arômes et saveurs du Cabernet Sauvignon sont influencés par le terroir, le climat, la vinification et le vieillissement. Le terroir et le climat déterminent la maturité des raisins; les climats frais donnent des tons verts comme le poivron, tandis que les climats chauds favorisent les fruits mûrs comme le cassis.\n\n**Fruits noirs**: Cassis, mûre, cerise noire\n**Fruits rouges**: Fraise, framboise, prune rouge, groseille\n**Épices**: Paprika fumé, poivre noir, poivron rouge, réglisse\n**Herbes**: Poivron rouge, livèche\n**Avec chêne**: Cacao, café, tabac doux, vanille\n**Terreux**: Feuilles séchées, vieux cuir, goudron'
            },
            {
              title: 'Influence du Bois',
              content: 'Le Cabernet Sauvignon **sans élevage en chêne** offre un caractère pur et frais, avec les arômes et saveurs naturels du raisin au premier plan. Ces vins ont souvent des tons vibrants de fruits rouges et noirs, comme les cerises, les baies et les prunes, avec de subtiles notes d\'herbes et parfois une légère verdeur, comme le poivron. Sans l\'influence du chêne, ces vins conservent leur acidité fraîche et leur corps plus léger, avec des tanins plus doux et moins proéminents.\n\nLe Cabernet Sauvignon **avec élevage en chêne** développe un profil de saveur plus complexe et plus complet. Grâce au vieillissement en fûts de chêne, le vin acquiert des arômes supplémentaires de vanille, de cèdre, de tabac et d\'épices, qui complètent les tons fruités naturels de cassis, de prunes et de cerises. Le chêne adoucit les tanins, donnant au vin une structure soyeuse et une plus grande profondeur.'
            },
            {
              title: 'Popularité',
              content: 'Le Cabernet Sauvignon est l\'un des cépages les plus populaires au monde, avec environ 340 000 hectares plantés. Le raisin est apprécié dans le monde entier pour sa force et sa polyvalence.\n\nTop 10 des pays:\n1. France\n2. États-Unis\n3. Chili\n4. Australie\n5. Chine\n6. Italie\n7. Afrique du Sud\n8. Argentine\n9. Espagne\n10. Nouvelle-Zélande'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Le **Cabernet Sauvignon sans élevage en chêne** devrait idéalement être servi à une température plus fraîche de 16-18°C pour faire ressortir pleinement ses arômes fruités frais et ses saveurs vibrantes. Ces vins sont généralement plus accessibles et peuvent être dégustés sans vieillissement supplémentaire. Pour la conservation, les vins sans élevage en chêne n\'ont généralement pas besoin d\'être stockés à long terme. Ils sont généralement à leur meilleur dans les 3 à 5 ans suivant la récolte.\n\nLe **Cabernet Sauvignon avec élevage en chêne** se sert mieux à une température de 18-20°C pour exprimer pleinement ses arômes et saveurs complexes. Ce style a un plus grand potentiel de conservation. Ils peuvent généralement être conservés de 5 à 15 ans ou même plus longtemps, selon la qualité et la structure du vin.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Le **Cabernet Sauvignon sans élevage en chêne** s\'accorde mieux avec des plats légers et raffinés. Je pense à des amuse-bouches sophistiqués comme un tartare de thon fini avec du wasabi et du radis. Si vous voulez plus de caractère dans le plat, vous pourriez également faire un tartare de bœuf au lieu du thon. Si vous préférez végétarien, ce style s\'accorde avec un plat de betteraves marinées combinées avec de la burrata et du romarin.\n\nLe **Cabernet Sauvignon avec élevage en chêne** se boit mieux avec des plats lourds et complexes. Des plats de gibier, par exemple. Comme un morceau de filet de chevreuil avec des légumes d\'hiver et une sauce au porto. Si vous préférez quelque chose de plus simple, vous pouvez opter pour un chateaubriand grillé, servi avec une salade copieuse et des frites maison. Essayez également de combiner un Cabernet Sauvignon vieilli avec un dessert au chocolat avec des fruits noirs et du caramel.'
            }
          ]
        }
      }
    },
    relatedPosts: ['merlot', 'pinot-noir']
  },
  {
    id: '4',
    slug: 'de-wijnkelder',
    featuredImage: cellarImage,
    date: '2023-12-15',
    category: 'tips',
    readTime: 5,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'De Wijnkelder',
        excerpt: 'Ontdek de 6 belangrijke aspecten voor het creëren van een perfecte wijnkelder en hoe je wijn optimaal bewaart.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Leer hoe je een perfecte wijnkelder creëert met de juiste temperatuur, vochtigheid en bewaaromstandigheden.',
          keywords: ['wijnkelder', 'wijn bewaren', 'wijn opslag', 'temperatuur', 'tips']
        },
        content: {
          intro: 'Veel wijnen moeten nog even blijven rijpen in de kelder vooraleer ze op dronk zijn. Zolang dit gebeurd onder de correcte omstandigheden dan komt het allemaal goed. Maar wat zijn die correcte omstandigheden juist? Hieronder laat ik jullie ontdekken wat je net wel en net niet mag doen om een perfecte omgeving te creëren, op welke aspecten je moet letten en hoe je zelf zo een omgeving kan maken.',
          keyTakeaways: {
            'Temperatuur': '10-14°C (ideaal 12°C)',
            'Vochtigheid': '60-80%',
            'Licht': 'Donkere omgeving (UV-bescherming)',
            'Trilling': 'Vermijd trillingen',
            'Ventilatie': 'Verse lucht nodig',
            'Geur': 'Vermijd sterke geuren'
          },
          sections: [
            {
              title: 'Temperatuur',
              content: 'Een wijnkelder heeft een constante temperatuur nodig. Bij een te grote schommeling in temperatuur kan de kwaliteit zeer snel achteruit gaan. Een ideale temperatuur, voor zowel witte als rode wijn, ligt rond de 12°C. Hier zit een kleine speling op van 2°C, zolang dit maar gebeurd op een geleidelijke, trage manier. In de winter mag de temperatuur zakken tot 10°C en in de zomer mag die stijgen tot 14°C. Dit vormt geen gevaar voor de wijn.'
            },
            {
              title: 'Vocht',
              content: 'Een vochtige omgeving is één van de belangrijkste aspecten voor het bewaren van de wijn. Een te hoge luchtvochtigheid kan geen kwaad doen aan de inhoud van de flessen, maar dit zorgt er wel voor dat de etiketten zullen beschimmelen en eventueel loskomen. Als je graag nog wenst te weten wat je drinkt dan is dit toch ook belangrijk.\n\nEen te lage luchtvochtigheid is erger dan we denken. Hierbij zal de kurk gaan uitdrogen en als gevolg krimpen waardoor er veel meer lucht in de fles kan. Dit zorgt ervoor dat de wijn veel sneller zal verouderen en in een veel korter tijdsbestek slecht wordt. Het juiste percentage ligt rond de 60-80%.'
            },
            {
              title: 'Lucht',
              content: 'Wijn is een levend product en heeft dus voortdurend verse lucht nodig. De kurk in de fles zorgt ervoor dat de wijn op een langzame basis zal gaan verouderen. Als de lucht in de kamer rondom de flessen wijn niet ververst wordt ontstaan er schimmels en onaangename geuren. Om dit te voorkomen is er dus ventilatie nodig in de wijnkelder.'
            },
            {
              title: 'Licht',
              content: 'De wijn in een fles verouderd slechter door de UV-stralen in het licht zelf. Daarom is een fles wijn meestal donkergroen of zwart. Ondanks deze donkere flessen kunnen de UV-stralen toch nog door het glas en tasten zo de wijn aan. Het is dus beter dat je de wijn gaat stockeren in een donkere omgeving waar het licht zo weinig mogelijk aan kan.'
            },
            {
              title: 'Trilling',
              content: 'Het verouderingsproces van de wijn wordt verstoord door trillingen. Probeer dus de wijn weg te houden van een dichtbijzijnde straat die veel verkeer bevat. Ook een constant gezoem van elektrische apparaten probeer je beter te vermijden in de buurt van de opgeslagen wijn.'
            },
            {
              title: 'Geur',
              content: 'Omdat het grootste deel van de wijnen die bewaard kunnen worden met kurk afgesloten zijn, en de wijn door die kurk kan ademen, is het zeer belangrijk om geen producten te plaatsen met geuren in de wijnkelder. Die geuren gaan na een zekere tijd overgenomen worden in de wijn. Geuren zoals aardappelen, ui-achtigen, benzine, kuisproducten en zeer expressieve geuren vermijdt je dus zeker.'
            }
          ]
        }
      },
      en: {
        title: 'The Wine Cellar',
        excerpt: 'Discover the 6 important aspects for creating a perfect wine cellar and how to store wine optimally.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Learn how to create a perfect wine cellar with the right temperature, humidity, and storage conditions.',
          keywords: ['wine cellar', 'wine storage', 'wine preservation', 'temperature', 'tips']
        },
        content: {
          intro: 'Many wines still need to age in the cellar before they are ready to drink. As long as this happens under the correct conditions, everything will be fine. But what exactly are those correct conditions? Below, I\'ll help you discover what you should and shouldn\'t do to create a perfect environment, which aspects to pay attention to, and how you can create such an environment yourself.',
          keyTakeaways: {
            'Temperature': '10-14°C (ideal 12°C)',
            'Humidity': '60-80%',
            'Light': 'Dark environment (UV protection)',
            'Vibration': 'Avoid vibrations',
            'Ventilation': 'Fresh air needed',
            'Odor': 'Avoid strong odors'
          },
          sections: [
            {
              title: 'Temperature',
              content: 'A wine cellar needs a constant temperature. With too much temperature fluctuation, quality can deteriorate very quickly. An ideal temperature, for both white and red wine, is around 12°C. There\'s a small margin of 2°C, as long as this happens gradually and slowly. In winter, the temperature may drop to 10°C and in summer it may rise to 14°C. This poses no danger to the wine.'
            },
            {
              title: 'Humidity',
              content: 'A humid environment is one of the most important aspects for storing wine. Too high humidity cannot harm the bottle contents, but it will cause the labels to mold and possibly come off. If you still want to know what you\'re drinking, this is also important.\n\nToo low humidity is worse than we think. This will cause the cork to dry out and shrink, allowing much more air into the bottle. This causes the wine to age much faster and go bad in a much shorter timeframe. The right percentage is around 60-80%.'
            },
            {
              title: 'Air',
              content: 'Wine is a living product and therefore constantly needs fresh air. The cork in the bottle ensures that the wine will age slowly. If the air in the room around the wine bottles is not refreshed, mold and unpleasant odors will develop. To prevent this, ventilation is needed in the wine cellar.'
            },
            {
              title: 'Light',
              content: 'Wine in a bottle ages poorly due to UV rays in the light itself. That\'s why a wine bottle is usually dark green or black. Despite these dark bottles, UV rays can still penetrate the glass and affect the wine. It\'s therefore better to store wine in a dark environment where light can reach it as little as possible.'
            },
            {
              title: 'Vibration',
              content: 'The aging process of wine is disrupted by vibrations. So try to keep the wine away from a nearby street with heavy traffic. Also, try to avoid a constant hum from electrical appliances near the stored wine.'
            },
            {
              title: 'Odor',
              content: 'Because most wines that can be aged are sealed with cork, and the wine can breathe through that cork, it is very important not to place products with odors in the wine cellar. Those odors will be absorbed into the wine after a certain time. Odors such as potatoes, onions, gasoline, cleaning products, and very expressive odors should definitely be avoided.'
            }
          ]
        }
      },
      fr: {
        title: 'La Cave à Vin',
        excerpt: 'Découvrez les 6 aspects importants pour créer une cave à vin parfaite et comment conserver le vin de manière optimale.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Apprenez à créer une cave à vin parfaite avec la bonne température, l\'humidité et les conditions de conservation.',
          keywords: ['cave à vin', 'conservation du vin', 'stockage du vin', 'température', 'conseils']
        },
        content: {
          intro: 'De nombreux vins doivent encore vieillir en cave avant d\'être prêts à boire. Tant que cela se produit dans les bonnes conditions, tout ira bien. Mais quelles sont exactement ces bonnes conditions? Ci-dessous, je vous aide à découvrir ce que vous devriez et ne devriez pas faire pour créer un environnement parfait, sur quels aspects vous devez prêter attention, et comment vous pouvez créer un tel environnement vous-même.',
          keyTakeaways: {
            'Température': '10-14°C (idéal 12°C)',
            'Humidité': '60-80%',
            'Lumière': 'Environnement sombre (protection UV)',
            'Vibration': 'Éviter les vibrations',
            'Ventilation': 'Air frais nécessaire',
            'Odeur': 'Éviter les odeurs fortes'
          },
          sections: [
            {
              title: 'Température',
              content: 'Une cave à vin a besoin d\'une température constante. Avec trop de fluctuations de température, la qualité peut se détériorer très rapidement. Une température idéale, pour le vin blanc et rouge, est d\'environ 12°C. Il y a une petite marge de 2°C, tant que cela se produit progressivement et lentement. En hiver, la température peut descendre à 10°C et en été elle peut monter à 14°C. Cela ne présente aucun danger pour le vin.'
            },
            {
              title: 'Humidité',
              content: 'Un environnement humide est l\'un des aspects les plus importants pour conserver le vin. Une humidité trop élevée ne peut pas nuire au contenu de la bouteille, mais cela fera moisir les étiquettes et peut-être se détacher. Si vous voulez encore savoir ce que vous buvez, c\'est également important.\n\nUne humidité trop faible est pire que nous ne le pensons. Cela fera sécher le bouchon et le rétrécir, permettant beaucoup plus d\'air dans la bouteille. Cela fait vieillir le vin beaucoup plus rapidement et se gâter dans un délai beaucoup plus court. Le bon pourcentage est d\'environ 60-80%.'
            },
            {
              title: 'Air',
              content: 'Le vin est un produit vivant et a donc constamment besoin d\'air frais. Le bouchon dans la bouteille assure que le vin vieillira lentement. Si l\'air dans la pièce autour des bouteilles de vin n\'est pas renouvelé, des moisissures et des odeurs désagréables se développeront. Pour éviter cela, une ventilation est nécessaire dans la cave à vin.'
            },
            {
              title: 'Lumière',
              content: 'Le vin dans une bouteille vieillit mal à cause des rayons UV dans la lumière elle-même. C\'est pourquoi une bouteille de vin est généralement vert foncé ou noir. Malgré ces bouteilles sombres, les rayons UV peuvent encore pénétrer le verre et affecter le vin. Il est donc préférable de stocker le vin dans un environnement sombre où la lumière peut l\'atteindre le moins possible.'
            },
            {
              title: 'Vibration',
              content: 'Le processus de vieillissement du vin est perturbé par les vibrations. Essayez donc de garder le vin loin d\'une rue voisine avec un trafic intense. Essayez également d\'éviter un bourdonnement constant d\'appareils électriques près du vin stocké.'
            },
            {
              title: 'Odeur',
              content: 'Parce que la plupart des vins qui peuvent vieillir sont scellés avec du liège, et que le vin peut respirer à travers ce bouchon, il est très important de ne pas placer de produits avec des odeurs dans la cave à vin. Ces odeurs seront absorbées dans le vin après un certain temps. Les odeurs telles que les pommes de terre, les oignons, l\'essence, les produits de nettoyage et les odeurs très expressives doivent absolument être évitées.'
            }
          ]
        }
      }
    },
    relatedPosts: ['5-fouten-in-wijn']
  },
  {
    id: '5',
    slug: 'sauvignon-blanc',
    featuredImage: sauvignonImage,
    date: '2023-10-30',
    category: 'druiven',
    readTime: 8,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Sauvignon Blanc',
        excerpt: 'De veelzijdige witte druif die verantwoordelijk is voor de meest onderscheidende aromatische droge witte wijn wereldwijd.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Alles over Sauvignon Blanc: van Loire tot Nieuw-Zeeland. Ontdek deze aromatische witte druif.',
          keywords: ['sauvignon blanc', 'witte wijn', 'loire', 'nieuw-zeeland', 'druif']
        },
        content: {
          intro: 'Sauvignon Blanc is verantwoordelijk voor de meest onderscheidende aromatische droge witte wijn wereldwijd. De easy-to-appreciate stijl van Sauvignon Blanc is wat de moderne wijnconsument nodig heeft als ze opzoek zijn naar puurheid en fruit in de wijn, zonder bewaarpotentieel. In Bordeaux kennen we de druif door zijn befaamde blend met Sémillon. Terwijl deze in de Loirevallei net als een monocépage wordt gevinifieerd.',
          keyTakeaways: {
            'Kleur': 'Wit',
            'Stijl': 'Mousserend, fris wit, dessertwijn',
            'Smaakprofiel': 'Van citrus tot exotisch fruit tot vegetaal',
            'Bekend door': 'Loirevallei, Bordeaux, Nieuw-Zeeland',
            'Probeer ook': 'Vermentino, Chenin Blanc, Colombard, Verdejo'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Sauvignon Blanc is oorspronkelijk afkomstig uit Frankrijk. In de 18e eeuw is ontdekt dat Cabernet Sauvignon een kruising is van Sauvignon Blanc samen met Cabernet Franc. DNA studies doen denken dat de originele oorsprong van Sauvignon Blanc gelegen is in de Loirevallei. Het zou een nakomeling zijn van Savagnin Blanc en daardoor zou het dus ook familie zijn van Chenin Blanc en Sémillon.'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Sauvignon Blanc is een druif die veel eigenschappen in zich zal opnemen door middel van de ondergrond waarop die aangeplant staat. Vaak gaat de wijnbouwer de Sauvignon Blanc aanplanten op een kalkrijke bodem met fossielen of vuursteen zoals in Sancerre of Pouilly-Fumé. Dit zorgt voor een extra frisse, minerale touch in de wijn. Maar de druif groeit ook gemakkelijk op een bodem vol leisteen, klei en kiezel.\n\nIn Nieuw-Zeeland of in Californië bijvoorbeeld zal de focus minder op de mineraliteit liggen, maar meer op het exotisch fruit. Dit komt door de warmere en zonnigere dagen. Sauvignon Blanc zoekt wel altijd het koele klimaat op. Staat die toch aangeplant in een land met veel, warme zonuren, dan hebben we toch elementen zoals zeer koele nachten of invloed van wind en dichtbijzijnd water die ervoor zorgen dat er genoeg afkoeling is.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'Sauvignon Blanc in samenwerking met zijn blend-partner Sémillon zorgt in grote witte wijnen, zoet of droog, voor extra nervositeit en zeste. De druif heeft ook altijd een aromatische gemeenschap gehad met Cabernet Sauvignon. Bij beide druiven is er een zekere vegetale/herbal touch aanwezig.\n\n**Citrus**: Limoen, citroen, pompelmoes\n**Boomfruit**: Peer, witte perzik\n**Tropisch fruit**: Passievrucht, kiwi, guava\n**Floraal**: Appelbloesem, jasmijn\n**Kruidig**: Kervel, gras, groene paprika, citroengras, tomatenloof, asperge, matcha, salie, dille\n**Met hout**: Vanille, room, nootmuskaat\n**Overige**: Meloen, gember, kruisbes, krijt, leisteen, zilt, rook, mineralen'
            },
            {
              title: 'Invloed van hout',
              content: 'Sauvignon Blanc wordt nog in weinige hoeveelheid gerijpt op eiken vaten. Wijnen met 100% Sauvignon Blanc is aan te raden om jong te drinken. Toch zijn er in de Loirevallei en in Bordeaux enkele wijnen die we perfect ouder kunnen laten worden, soms zelfs tot 15 jaar. Zoals bijvoorbeeld Pavillon blanc van Château Margaux uit Bordeaux of Cuvée Silex van Domaine Dagueneau uit Pouilly-Fumé, Loirevallei.\n\nKrijgt de wijn toch een rijping op eiken vaten dan is het aan te raden die niet direct te consumeren. De wijn heeft 2 of meerdere jaren nodig om open te bloeien en zo tot zijn recht te komen.'
            },
            {
              title: 'Populariteit',
              content: 'Sauvignon Blanc is een populaire druif met een totale aanplant van 111.500 ha. Sauvignon Blanc is een specialiteit uit de Loirevallei en behoort in combinatie met Sémillon tot de witte Bordeaux blend. Daarnaast is ze de belangrijkste druif van Nieuw-Zeeland met Marlborough als topstreek.\n\nTop 10 landen:\n1. Frankrijk\n2. Nieuw-Zeeland\n3. Chili\n4. Zuid-Afrika\n5. Moldavië\n6. Verenigde Staten\n7. Australië\n8. Roemenië\n9. Spanje\n10. Argentinië'
            },
            {
              title: 'Serveer- & bewaartips',
              content: '**Frisse** Sauvignon Blanc wordt het best geserveerd op een temperatuur tussen de 7°C en 10°C en wordt het liefst geserveerd in een iets smaller glas. Deze stijl wijn moet niet worden gedecanteerd. Je kan deze het best binnen de 2 jaar na aankoop consumeren.\n\n**Zoete** Sauvignon Blanc serveer je beter op een ijskoude temperatuur van 5°C tot 6°C. Het decanteren van deze wijn geeft geen meerwaarde. Net door het hoge suikergehalte in de wijn heeft deze de ideale omstandigheden om goed en lang te verouderen.'
            },
            {
              title: 'Foodpairing',
              content: '**Frisse, vegetale Sauvignon Blanc** gaat zeer goed samen met gerechten waar er ook geaccentueerd wordt op de vegetale smaken. Zoals een gegrilde asperge met humus en tagliatelle. Maar ook bij een frisse salade op basis van verse kerstomaten, mozzarella en basilicum. Probeer zeker ook eens te combineren met zeevruchten zoals oesters en zeescharen.\n\n**Frisse, exotische Sauvignon Blanc** kan je dan eerder bij de Aziatische keuken combineren. Perfect bij sushi in combinatie met sojasaus. Een carpaccio van langoustine in combinatie met appel, mango en citrus zou ook een uitdagende match zijn met deze stijl Sauvignon Blanc.\n\n**Zoete Sauvignon Blanc** zoals een Sauternes of een Icewine kan zeer mooie combinaties geven met zachte kazen zoals Brie maar ook met blauwschimmelkazen zoals Stilton. Combineer deze stijl met desserten waar de focus rond het citrus- of exotisch fruit ligt.'
            }
          ]
        }
      },
      en: {
        title: 'Sauvignon Blanc',
        excerpt: 'The versatile white grape responsible for the most distinctive aromatic dry white wine worldwide.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Everything about Sauvignon Blanc: from Loire to New Zealand. Discover this aromatic white grape.',
          keywords: ['sauvignon blanc', 'white wine', 'loire', 'new zealand', 'grape']
        },
        content: {
          intro: 'Sauvignon Blanc is responsible for the most distinctive aromatic dry white wine worldwide. The easy-to-appreciate style of Sauvignon Blanc is what the modern wine consumer needs when searching for purity and fruit in wine, without aging potential. In Bordeaux, we know the grape through its famous blend with Sémillon. While in the Loire Valley, it is vinified as a single varietal.',
          keyTakeaways: {
            'Color': 'White',
            'Style': 'Sparkling, crisp white, dessert wine',
            'Flavor Profile': 'From citrus to exotic fruit to herbaceous',
            'Known for': 'Loire Valley, Bordeaux, New Zealand',
            'Also try': 'Vermentino, Chenin Blanc, Colombard, Verdejo'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Sauvignon Blanc is originally from France. In the 18th century, it was discovered that Cabernet Sauvignon is a cross between Sauvignon Blanc and Cabernet Franc. DNA studies suggest that the original origin of Sauvignon Blanc is in the Loire Valley. It would be a descendant of Savagnin Blanc and would therefore also be related to Chenin Blanc and Sémillon.'
            },
            {
              title: 'Soil & Climate',
              content: 'Sauvignon Blanc is a grape that absorbs many characteristics through the soil on which it is planted. Often, winemakers plant Sauvignon Blanc on limestone-rich soils with fossils or flint, such as in Sancerre or Pouilly-Fumé. This provides an extra fresh, mineral touch to the wine. But the grape also grows easily on soils full of slate, clay, and gravel.\n\nIn New Zealand or California, for example, the focus will be less on minerality, but more on exotic fruit. This is due to warmer and sunnier days. Sauvignon Blanc always seeks cool climates. Even if planted in a country with many warm sun hours, there are elements like very cool nights or the influence of wind and nearby water that ensure sufficient cooling.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'Sauvignon Blanc in collaboration with its blending partner Sémillon provides extra nervousness and zest in great white wines, sweet or dry. The grape has also always had an aromatic kinship with Cabernet Sauvignon. Both grapes have a certain herbaceous/vegetal touch.\n\n**Citrus**: Lime, lemon, grapefruit\n**Stone fruit**: Pear, white peach\n**Tropical fruit**: Passion fruit, kiwi, guava\n**Floral**: Apple blossom, jasmine\n**Herbaceous**: Chervil, grass, green bell pepper, lemongrass, tomato leaf, asparagus, matcha, sage, dill\n**With oak**: Vanilla, cream, nutmeg\n**Other**: Melon, ginger, gooseberry, chalk, slate, saline, smoke, minerals'
            },
            {
              title: 'Influence of Oak',
              content: 'Sauvignon Blanc is still aged in small quantities in oak barrels. Wines with 100% Sauvignon Blanc are recommended to drink young. However, in the Loire Valley and Bordeaux there are some wines that we can perfectly age, sometimes even up to 15 years. Such as Pavillon blanc from Château Margaux in Bordeaux or Cuvée Silex from Domaine Dagueneau in Pouilly-Fumé, Loire Valley.\n\nIf the wine does get oak aging, it is recommended not to consume it immediately. The wine needs 2 or more years to open up and come into its own.'
            },
            {
              title: 'Popularity',
              content: 'Sauvignon Blanc is a popular grape with a total planting of 111,500 ha. Sauvignon Blanc is a specialty from the Loire Valley and, in combination with Sémillon, belongs to the white Bordeaux blend. In addition, it is the most important grape of New Zealand with Marlborough as the top region.\n\nTop 10 countries:\n1. France\n2. New Zealand\n3. Chile\n4. South Africa\n5. Moldova\n6. United States\n7. Australia\n8. Romania\n9. Spain\n10. Argentina'
            },
            {
              title: 'Serving & Storage Tips',
              content: '**Crisp** Sauvignon Blanc is best served at a temperature between 7°C and 10°C and is preferably served in a slightly narrower glass. This style of wine should not be decanted. You can best consume it within 2 years of purchase.\n\n**Sweet** Sauvignon Blanc is better served at an ice-cold temperature of 5°C to 6°C. Decanting this wine adds no value. Precisely because of the high sugar content in the wine, it has the ideal conditions to age well and long.'
            },
            {
              title: 'Food Pairing',
              content: '**Crisp, herbaceous Sauvignon Blanc** pairs very well with dishes where herbaceous flavors are also emphasized. Like grilled asparagus with hummus and tagliatelle. But also with a fresh salad based on fresh cherry tomatoes, mozzarella and basil. Also definitely try pairing with seafood like oysters and scallops.\n\n**Crisp, exotic Sauvignon Blanc** can be paired with Asian cuisine. Perfect with sushi combined with soy sauce. A carpaccio of langoustine combined with apple, mango and citrus would also be a challenging match with this style of Sauvignon Blanc.\n\n**Sweet Sauvignon Blanc** like a Sauternes or an Icewine can give very beautiful combinations with soft cheeses like Brie but also with blue cheeses like Stilton. Combine this style with desserts where the focus is on citrus or exotic fruit.'
            }
          ]
        }
      },
      fr: {
        title: 'Sauvignon Blanc',
        excerpt: 'Le cépage blanc polyvalent responsable du vin blanc sec aromatique le plus distinctif au monde.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Tout sur le Sauvignon Blanc : de la Loire à la Nouvelle-Zélande. Découvrez ce cépage blanc aromatique.',
          keywords: ['sauvignon blanc', 'vin blanc', 'loire', 'nouvelle-zélande', 'cépage']
        },
        content: {
          intro: 'Le Sauvignon Blanc est responsable du vin blanc sec aromatique le plus distinctif au monde. Le style facile à apprécier du Sauvignon Blanc est ce dont le consommateur moderne a besoin lorsqu\'il recherche la pureté et le fruit dans le vin, sans potentiel de vieillissement. À Bordeaux, nous connaissons le raisin par son célèbre assemblage avec le Sémillon. Alors que dans la Vallée de la Loire, il est vinifié en monocépage.',
          keyTakeaways: {
            'Couleur': 'Blanc',
            'Style': 'Effervescent, blanc vif, vin de dessert',
            'Profil Gustatif': 'Des agrumes aux fruits exotiques en passant par l\'herbacé',
            'Connu pour': 'Vallée de la Loire, Bordeaux, Nouvelle-Zélande',
            'À essayer aussi': 'Vermentino, Chenin Blanc, Colombard, Verdejo'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Sauvignon Blanc est originaire de France. Au XVIIIe siècle, il a été découvert que le Cabernet Sauvignon est un croisement entre le Sauvignon Blanc et le Cabernet Franc. Les études ADN suggèrent que l\'origine originale du Sauvignon Blanc se situe dans la Vallée de la Loire. Il serait un descendant du Savagnin Blanc et serait donc également lié au Chenin Blanc et au Sémillon.'
            },
            {
              title: 'Sol & Climat',
              content: 'Le Sauvignon Blanc est un raisin qui absorbe de nombreuses caractéristiques à travers le sol sur lequel il est planté. Souvent, les vignerons plantent le Sauvignon Blanc sur des sols calcaires riches en fossiles ou en silex, comme à Sancerre ou Pouilly-Fumé. Cela apporte une touche minérale supplémentaire au vin. Mais le raisin pousse également facilement sur des sols pleins d\'ardoise, d\'argile et de gravier.\n\nEn Nouvelle-Zélande ou en Californie, par exemple, l\'accent sera moins mis sur la minéralité, mais plus sur les fruits exotiques. Cela est dû aux journées plus chaudes et ensoleillées. Le Sauvignon Blanc recherche toujours les climats frais. Même s\'il est planté dans un pays avec de nombreuses heures de soleil chaudes, il y a des éléments comme des nuits très fraîches ou l\'influence du vent et de l\'eau à proximité qui assurent un refroidissement suffisant.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'Le Sauvignon Blanc en collaboration avec son partenaire d\'assemblage Sémillon apporte une nervosité et un zeste supplémentaires dans les grands vins blancs, doux ou secs. Le raisin a toujours eu une parenté aromatique avec le Cabernet Sauvignon. Les deux raisins ont une certaine touche herbacée/végétale.\n\n**Agrumes**: Citron vert, citron, pamplemousse\n**Fruits à noyau**: Poire, pêche blanche\n**Fruits tropicaux**: Fruit de la passion, kiwi, goyave\n**Floral**: Fleur de pommier, jasmin\n**Herbacé**: Cerfeuil, herbe, poivron vert, citronnelle, feuille de tomate, asperge, matcha, sauge, aneth\n**Avec chêne**: Vanille, crème, muscade\n**Autre**: Melon, gingembre, groseille à maquereau, craie, ardoise, salin, fumée, minéraux'
            },
            {
              title: 'Influence du Bois',
              content: 'Le Sauvignon Blanc est encore vieilli en petites quantités dans des fûts de chêne. Les vins avec 100% Sauvignon Blanc sont recommandés pour être bus jeunes. Cependant, dans la Vallée de la Loire et à Bordeaux, il existe quelques vins que nous pouvons parfaitement faire vieillir, parfois même jusqu\'à 15 ans. Comme le Pavillon blanc du Château Margaux à Bordeaux ou la Cuvée Silex du Domaine Dagueneau à Pouilly-Fumé, Vallée de la Loire.\n\nSi le vin reçoit un élevage en chêne, il est recommandé de ne pas le consommer immédiatement. Le vin a besoin de 2 ans ou plus pour s\'ouvrir et s\'exprimer pleinement.'
            },
            {
              title: 'Popularité',
              content: 'Le Sauvignon Blanc est un cépage populaire avec une plantation totale de 111 500 ha. Le Sauvignon Blanc est une spécialité de la Vallée de la Loire et, en combinaison avec le Sémillon, appartient à l\'assemblage blanc de Bordeaux. De plus, c\'est le raisin le plus important de Nouvelle-Zélande avec Marlborough comme région phare.\n\nTop 10 des pays:\n1. France\n2. Nouvelle-Zélande\n3. Chili\n4. Afrique du Sud\n5. Moldavie\n6. États-Unis\n7. Australie\n8. Roumanie\n9. Espagne\n10. Argentine'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Le **Sauvignon Blanc vif** se sert mieux à une température entre 7°C et 10°C et de préférence dans un verre légèrement plus étroit. Ce style de vin ne doit pas être décanté. Vous pouvez le consommer de préférence dans les 2 ans suivant l\'achat.\n\nLe **Sauvignon Blanc doux** se sert mieux à une température glacée de 5°C à 6°C. Décanter ce vin n\'apporte aucune valeur ajoutée. Précisément en raison de la teneur élevée en sucre du vin, il a les conditions idéales pour bien vieillir et longtemps.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Le **Sauvignon Blanc vif et herbacé** s\'accorde très bien avec des plats où les saveurs herbacées sont également mises en valeur. Comme des asperges grillées avec houmous et tagliatelles. Mais aussi avec une salade fraîche à base de tomates cerises fraîches, mozzarella et basilic. Essayez également de l\'associer avec des fruits de mer comme des huîtres et des coquilles Saint-Jacques.\n\nLe **Sauvignon Blanc vif et exotique** peut être associé à la cuisine asiatique. Parfait avec des sushis combinés avec de la sauce soja. Un carpaccio de langoustine combiné avec pomme, mangue et agrumes serait également un accord stimulant avec ce style de Sauvignon Blanc.\n\nLe **Sauvignon Blanc doux** comme un Sauternes ou un Icewine peut donner de très belles combinaisons avec des fromages doux comme le Brie mais aussi avec des fromages bleus comme le Stilton. Combinez ce style avec des desserts où l\'accent est mis sur les agrumes ou les fruits exotiques.'
            }
          ]
        }
      }
    },
    relatedPosts: ['riesling', 'chardonnay']
  },
  {
    id: '6',
    slug: 'pinot-noir',
    featuredImage: pinotImage,
    date: '2023-03-15',
    category: 'druiven',
    readTime: 8,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Pinot Noir',
        excerpt: 'Ontdek een van de oudste en meest geliefde druivenrassen ter wereld, bekend om zijn elegantie en veelzijdigheid.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Alles over Pinot Noir: van Bourgogne tot wereldwijd. Ontdek de elegante rode druif met zachte tannines en fruitige aroma\'s.',
          keywords: ['pinot noir', 'rode wijn', 'bourgogne', 'champagne', 'druivensoort']
        },
        content: {
          intro: 'Pinot Noir hebben we allemaal wel al eens gedronken, maar wat weten we eigenlijk over deze druif? Dat het een blauwe druif is en dat ze zeer gekend is in de Champagnestreek en in Bourgogne, dat moet ik jullie niet meer vertellen. Maar wisten jullie dat het eigenlijk niet zo gemakkelijk is om druif te telen? De trossen van de Pinot Noir zijn zeer compact. Dit in combinatie met de zeer dunne schil zorgt ervoor dat het zeer gevoelig is voor rotting en schimmels. De schil bevat een lager pigmentgehalte waardoor de wijn een zeer lichte, heldere kleur krijgt. Hierdoor bevat de schil minder tannines. Daarom zijn de meeste wijnen gemaakt van Pinot Noir zeer toegankelijk en vlot drinkbaar.',
          keyTakeaways: {
            'Kleur': 'Rood',
            'Stijl': 'Mousserend, fruitig rood, complex rood, rosé',
            'Smaakprofiel': 'Van jong rood fruit tot het aardse',
            'Bekend door': 'Champagne, Bourgogne',
            'Probeer ook': 'Nebbiolo, Nerello Mascalese, Sankt Laurent'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Pinot Noir is één van de oudste druivenrassen ter wereld. Door onderzoek naar de genetische achtergrond is er ontdekt dat het telen van de druif al ruim tot 2.000 jaar terug gaat. Tot in de tijd van de Galliërs. Door de ouderdom van de druif is deze al veel gemuteerd geweest en heeft het een extreme instabiliteit. Pinot Noir is oorspronkelijk uit de Côte de Nuits in Bourgogne.'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Pinot Noir is een vroegrijpe druif en doet het hierdoor het best in een gematigd klimaat met een langer groeiseizoen. Het groeiseizoen is van cruciaal belang voor de Pinot Noir. Het is tijdens deze periode dat de druif zich gaat ontwikkelen tot een zeer aromatische, smaakvolle smaakbom. Als we Pinot Noir gaan aanplanten in een warm klimaat dan gaan de druiven veel te vroeg rijp zijn. Met als gevolg dat de aroma\'s en smaken veel zwakker zullen zijn.\n\nOok Pinot Noir heeft een favoriete bodem om op te groeien. Het liefst groeit deze druif op een kalkrijke bodem met ijzerhoudende klei. Deze komen veel voor in de Champagnestreek en in Bourgogne, waardoor de druif hier ook rijkelijk staat aangeplant. Er zijn ook uitzonderingen met als voorbeeld de Ahr in Duitsland. Hier groeit de Pinot Noir op een leisteenbodem.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'Pinot Noir wordt sterk beïnvloedt door de soort ondergrond en het soort klimaat. Het belangrijkste is vooral of de Pinot Noir een rijping heeft gekregen op houten vaten of niet.\n\n**Zwart fruit**: Pruim, blauwe bes, zwarte kers\n**Rood fruit**: Veenbes, granaatappel, aardbei, framboos, rode kers\n**Floraal**: Viooltje, hibiscus, roos, potpouri, rozenbottel\n**Kruiden**: Zwarte peper\n**Met hout**: Kruidnagel, bruine suiker, piment, vanille, kaneel\n**Aards**: Cacao, tabaksblad, geroosterd brood, paddenstoel, truffel'
            },
            {
              title: 'Invloed van hout',
              content: 'Pinot Noir die **geen rijping op houten vaten** heeft gehad, is zeer licht van kleur. Net iets donkerder dan rosé. De wijn heeft een zeer lichte body, met een zeer lichte structuur. De aroma\'s en smaken gaan meer richting het fris rood fruit zoals framboos, aardbei, rode kers met soms ook het florale zoals viooltjes en rozen.\n\nPinot Noir die **wel een rijping op houten vaten** heeft gehad, is veel intenser, voller en rijker aan aroma\'s en smaken. De kleur is donkerder en veel dieper. Pinot Noir krijgt door het rijpen op houten vaten meer kruidigheid en aardse aroma\'s en smaken, zoals zwarte peper, boschampignon, vanille, kaneel, cacao, geroosterd brood en tabaksblad.'
            },
            {
              title: 'Populariteit',
              content: 'Frankrijk is en blijft het belangrijkste land voor Pinot Noir. Buiten Frankrijk is ze ook de meest aangeplante druif in Duitsland. Pinot Noir heeft in verschillende landen een andere naam. In Duitsland is ze gekend als Spätburgunder, in Oostenrijk is ze eerder gekend als Blauburgunder en in Italië wordt ze Pinot Nero genoemd.\n\nPinot Noir is ook gekend als de stamvader van vele andere druiven, zowel witte als rode druiven. Met een totale aanplanting van 99.000 ha is Pinot Noir één van de populairste druivenrassen wereldwijd.\n\nTop 10 landen:\n1. Frankrijk\n2. Verenigde Staten\n3. Duitsland\n4. Moldavië\n5. Italië\n6. Nieuw-Zeeland\n7. Australië\n8. Zwitserland\n9. Chili\n10. Argentinië'
            },
            {
              title: 'Serveer- & bewaartips',
              content: '**Lichte Pinot Noir** mag gerust iets koeler geserveerd worden. Rode wijn wordt best niet te koel geserveerd, omdat dan de tannines heel wrang en bitter gaan overkomen. Maar Pinot Noir zonder invloed van een houten vat bevat zeer weinig tannines. Daarom moeten we geen schrik hebben om deze koeler te serveren. De ideale serveertemperatuur ligt tussen de 12°C en 14°C. Deze stijl van Pinot Noir kan je niet heel lang bewaren. Het geeft geen meerwaarde aan de wijn. Je drinkt deze het best binnen de 2 jaar na botteling.\n\n**Intense, volle Pinot Noir** heeft meer body, meer tannines en is veel rijker in aroma\'s. Als we deze stijl van Pinot Noir koeler zouden serveren, dan gaan de aroma\'s en smaken verloren door de friste. Te warm is ook niet goed. Door Pinot Noir te serveren op kamertemperatuur of warmer krijg je meer een confituur gevoel en gaat het alcoholvolume meer aanwezig zijn. Het is dus uitermate belangrijk om extra aandacht te geven aan de temperatuur. De ideale serveertemperatuur ligt tussen de 14°C en 16°C. Deze stijl van Pinot Noir kan je best enkele jaren laten liggen. Doordat deze de nodige aspecten heeft om goed te verouderen, kan je hem 8 tot 10 jaar laten rijpen.'
            },
            {
              title: 'Foodpairing',
              content: '**Frisse Pinot Noir** zonder rijping op houten vaten kan perfect geserveerd worden bij een stukje vis. Bijvoorbeeld pasta met zalm en een roomsaus. Serveer een frisse Pinot Noir bij een veganistisch slaatje waar je vooral hartige en aardse groenten, zoals rode biet en boschampginon, zal gebruiken. Deze stijl wijn gaat ook perfect in combinatie met mi-cuit tonijn en verschillende bereidingen van rode biet. Probeer ook zeker eens te serveren bij een rundercarpaccio afgewerkt met parmezaan, rucola en balsamicoazijn.\n\n**Volle, rijke Pinot Noir** met rijping op eiken vaten is perfect te drinken bij een lamscarré met lamsjus, een aardappelbereiding en enkele warme groenten. Je kan deze stijl ook drinken bij een stukje kaas zoals Brie, Gouda, Manchego of zelfs bij een blauwgeaderde schimmelkaas zoals Gorgonzola. Wie Pinot Noir zegt, zegt zeker en vast ook truffel, serveer daarom bij een pasta met roomsaus, Girolles en zomertruffel.'
            }
          ]
        }
      },
      en: {
        title: 'Pinot Noir',
        excerpt: 'Discover one of the world\'s oldest and most beloved grape varieties, known for its elegance and versatility.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Everything about Pinot Noir: from Burgundy to worldwide. Discover the elegant red grape with soft tannins and fruity aromas.',
          keywords: ['pinot noir', 'red wine', 'burgundy', 'champagne', 'grape variety']
        },
        content: {
          intro: 'We\'ve all had Pinot Noir at some point, but what do we actually know about this grape? That it\'s a blue grape and highly renowned in Champagne and Burgundy, that goes without saying. But did you know it\'s actually quite challenging to cultivate? Pinot Noir clusters are very compact. Combined with its very thin skin, this makes it highly susceptible to rot and mold. The skin contains lower pigment levels, giving the wine a very light, clear color. This also means the skin contains fewer tannins. That\'s why most wines made from Pinot Noir are very accessible and easy to drink.',
          keyTakeaways: {
            'Color': 'Red',
            'Style': 'Sparkling, fruity red, complex red, rosé',
            'Flavor Profile': 'From young red fruit to earthy notes',
            'Known for': 'Champagne, Burgundy',
            'Also try': 'Nebbiolo, Nerello Mascalese, Sankt Laurent'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Pinot Noir is one of the world\'s oldest grape varieties. Research into its genetic background has revealed that cultivation of this grape dates back approximately 2,000 years, to the time of the Gauls. Due to the grape\'s age, it has undergone many mutations and exhibits extreme instability. Pinot Noir originally hails from the Côte de Nuits in Burgundy.'
            },
            {
              title: 'Soil & Climate',
              content: 'Pinot Noir is an early-ripening grape and therefore performs best in a temperate climate with a longer growing season. The growing season is crucial for Pinot Noir. It\'s during this period that the grape develops into an extremely aromatic, flavorful powerhouse. If we plant Pinot Noir in a warm climate, the grapes will ripen far too early, resulting in much weaker aromas and flavors.\n\nPinot Noir also has a preferred soil type. This grape grows best on limestone-rich soil with iron-containing clay. These soils are common in Champagne and Burgundy, which is why the grape is abundantly planted there. There are exceptions, such as the Ahr region in Germany, where Pinot Noir grows on slate soils.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'Pinot Noir is strongly influenced by the type of soil and climate. The most important factor is whether or not the Pinot Noir has been aged in oak barrels.\n\n**Black fruit**: Plum, blueberry, black cherry\n**Red fruit**: Cranberry, pomegranate, strawberry, raspberry, red cherry\n**Floral**: Violet, hibiscus, rose, potpourri, rose hip\n**Spices**: Black pepper\n**With oak**: Clove, brown sugar, allspice, vanilla, cinnamon\n**Earthy**: Cocoa, tobacco leaf, toasted bread, mushroom, truffle'
            },
            {
              title: 'Influence of Oak',
              content: 'Pinot Noir that has **not been aged in oak barrels** is very light in color, just slightly darker than rosé. The wine has a very light body with a delicate structure. The aromas and flavors lean toward fresh red fruits like raspberry, strawberry, red cherry, with sometimes floral notes like violets and roses.\n\nPinot Noir that **has been aged in oak barrels** is much more intense, fuller, and richer in aromas and flavors. The color is darker and much deeper. Through oak aging, Pinot Noir gains more spiciness and earthy aromas and flavors, such as black pepper, forest mushroom, vanilla, cinnamon, cocoa, toasted bread, and tobacco leaf.'
            },
            {
              title: 'Popularity',
              content: 'France remains the most important country for Pinot Noir. Outside France, it\'s also the most planted grape in Germany. Pinot Noir has different names in various countries. In Germany it\'s known as Spätburgunder, in Austria as Blauburgunder, and in Italy it\'s called Pinot Nero.\n\nPinot Noir is also known as the parent of many other grapes, both white and red varieties. With a total planting of 99,000 hectares, Pinot Noir is one of the world\'s most popular grape varieties.\n\nTop 10 countries:\n1. France\n2. United States\n3. Germany\n4. Moldova\n5. Italy\n6. New Zealand\n7. Australia\n8. Switzerland\n9. Chile\n10. Argentina'
            },
            {
              title: 'Serving & Storage Tips',
              content: '**Light Pinot Noir** can certainly be served slightly cooler. Red wine is best not served too cold, as this makes the tannins taste very astringent and bitter. However, Pinot Noir without oak influence contains very few tannins, so we needn\'t worry about serving it cooler. The ideal serving temperature is between 12°C and 14°C. This style of Pinot Noir cannot be aged for very long as it adds no value to the wine. It\'s best enjoyed within 2 years of bottling.\n\n**Intense, full Pinot Noir** has more body, more tannins, and is much richer in aromas. If we serve this style of Pinot Noir cooler, the aromas and flavors will be lost due to the coolness. Too warm isn\'t good either. Serving Pinot Noir at room temperature or warmer creates more of a jam-like sensation and the alcohol becomes more pronounced. Therefore, it\'s extremely important to pay extra attention to temperature. The ideal serving temperature is between 14°C and 16°C. This style of Pinot Noir benefits from several years of aging. With the necessary components to age well, it can mature for 8 to 10 years.'
            },
            {
              title: 'Food Pairing',
              content: '**Fresh Pinot Noir** without oak aging can be perfectly served with fish dishes, such as pasta with salmon and cream sauce. Serve a fresh Pinot Noir with a vegan salad featuring savory and earthy vegetables like beetroot and forest mushrooms. This wine style also pairs perfectly with mi-cuit tuna and various beetroot preparations. Also try serving it with beef carpaccio finished with Parmesan, arugula, and balsamic vinegar.\n\n**Full, rich Pinot Noir** with oak aging is perfect with rack of lamb with lamb jus, a potato preparation, and some warm vegetables. You can also enjoy this style with cheeses like Brie, Gouda, Manchego, or even blue-veined cheeses like Gorgonzola. Pinot Noir and truffle are a classic pairing, so serve it with pasta with cream sauce, Girolles mushrooms, and summer truffle.'
            }
          ]
        }
      },
      fr: {
        title: 'Pinot Noir',
        excerpt: 'Découvrez l\'un des cépages les plus anciens et les plus appréciés au monde, connu pour son élégance et sa polyvalence.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Tout sur le Pinot Noir : de la Bourgogne au monde entier. Découvrez le cépage rouge élégant aux tanins soyeux et aux arômes fruités.',
          keywords: ['pinot noir', 'vin rouge', 'bourgogne', 'champagne', 'cépage']
        },
        content: {
          intro: 'Nous avons tous déjà bu du Pinot Noir, mais que savons-nous réellement de ce raisin ? Qu\'il s\'agit d\'un raisin bleu très réputé en Champagne et en Bourgogne, cela va de soi. Mais saviez-vous qu\'il est en fait assez difficile à cultiver ? Les grappes de Pinot Noir sont très compactes. Combiné à sa peau très fine, cela le rend très sensible à la pourriture et aux moisissures. La peau contient moins de pigments, donnant au vin une couleur très claire et limpide. Cela signifie également que la peau contient moins de tanins. C\'est pourquoi la plupart des vins élaborés à partir de Pinot Noir sont très accessibles et faciles à boire.',
          keyTakeaways: {
            'Couleur': 'Rouge',
            'Style': 'Effervescent, rouge fruité, rouge complexe, rosé',
            'Profil Gustatif': 'Des fruits rouges jeunes aux notes terreuses',
            'Connu pour': 'Champagne, Bourgogne',
            'À essayer aussi': 'Nebbiolo, Nerello Mascalese, Sankt Laurent'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Pinot Noir est l\'un des cépages les plus anciens au monde. Des recherches sur son patrimoine génétique ont révélé que la culture de ce raisin remonte à environ 2 000 ans, à l\'époque des Gaulois. En raison de son âge, le raisin a subi de nombreuses mutations et présente une instabilité extrême. Le Pinot Noir est originaire de la Côte de Nuits en Bourgogne.'
            },
            {
              title: 'Sol & Climat',
              content: 'Le Pinot Noir est un raisin précoce et performe donc mieux dans un climat tempéré avec une longue saison de croissance. La saison de croissance est cruciale pour le Pinot Noir. C\'est pendant cette période que le raisin se développe en une bombe aromatique et savoureuse. Si nous plantons du Pinot Noir dans un climat chaud, les raisins mûriront beaucoup trop tôt, ce qui donnera des arômes et des saveurs beaucoup plus faibles.\n\nLe Pinot Noir a également un type de sol préféré. Ce raisin pousse mieux sur un sol riche en calcaire avec de l\'argile ferrugineuse. Ces sols sont courants en Champagne et en Bourgogne, c\'est pourquoi le raisin y est abondamment planté. Il existe des exceptions, comme la région de l\'Ahr en Allemagne, où le Pinot Noir pousse sur des sols d\'ardoise.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'Le Pinot Noir est fortement influencé par le type de sol et le climat. Le facteur le plus important est de savoir si le Pinot Noir a été élevé ou non en fûts de chêne.\n\n**Fruits noirs**: Prune, myrtille, cerise noire\n**Fruits rouges**: Canneberge, grenade, fraise, framboise, cerise rouge\n**Floral**: Violette, hibiscus, rose, pot-pourri, cynorrhodon\n**Épices**: Poivre noir\n**Avec chêne**: Clou de girofle, cassonade, piment de la Jamaïque, vanille, cannelle\n**Terreux**: Cacao, feuille de tabac, pain grillé, champignon, truffe'
            },
            {
              title: 'Influence du Bois',
              content: 'Le Pinot Noir qui **n\'a pas été élevé en fûts de chêne** est très clair en couleur, juste un peu plus foncé qu\'un rosé. Le vin a un corps très léger avec une structure délicate. Les arômes et les saveurs penchent vers les fruits rouges frais comme la framboise, la fraise, la cerise rouge, avec parfois des notes florales comme les violettes et les roses.\n\nLe Pinot Noir qui **a été élevé en fûts de chêne** est beaucoup plus intense, plus corsé et plus riche en arômes et en saveurs. La couleur est plus foncée et beaucoup plus profonde. Grâce à l\'élevage en chêne, le Pinot Noir acquiert plus d\'épices et d\'arômes et saveurs terreux, comme le poivre noir, le champignon des bois, la vanille, la cannelle, le cacao, le pain grillé et la feuille de tabac.'
            },
            {
              title: 'Popularité',
              content: 'La France reste le pays le plus important pour le Pinot Noir. En dehors de la France, c\'est également le raisin le plus planté en Allemagne. Le Pinot Noir porte différents noms selon les pays. En Allemagne, il est connu sous le nom de Spätburgunder, en Autriche sous le nom de Blauburgunder, et en Italie il s\'appelle Pinot Nero.\n\nLe Pinot Noir est également connu comme le parent de nombreux autres raisins, tant blancs que rouges. Avec une plantation totale de 99 000 hectares, le Pinot Noir est l\'un des cépages les plus populaires au monde.\n\nTop 10 des pays:\n1. France\n2. États-Unis\n3. Allemagne\n4. Moldavie\n5. Italie\n6. Nouvelle-Zélande\n7. Australie\n8. Suisse\n9. Chili\n10. Argentine'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Le **Pinot Noir léger** peut certainement être servi un peu plus frais. Le vin rouge ne doit pas être servi trop froid, car cela rend les tanins très astringents et amers. Cependant, le Pinot Noir sans influence de chêne contient très peu de tanins, nous n\'avons donc pas à craindre de le servir plus frais. La température de service idéale se situe entre 12°C et 14°C. Ce style de Pinot Noir ne peut pas être conservé très longtemps car cela n\'ajoute aucune valeur au vin. Il est préférable de le consommer dans les 2 ans suivant la mise en bouteille.\n\nLe **Pinot Noir intense et corsé** a plus de corps, plus de tanins et est beaucoup plus riche en arômes. Si nous servons ce style de Pinot Noir plus frais, les arômes et les saveurs seront perdus à cause de la fraîcheur. Trop chaud n\'est pas bon non plus. Servir le Pinot Noir à température ambiante ou plus chaud crée une sensation plus confite et l\'alcool devient plus prononcé. Il est donc extrêmement important de porter une attention particulière à la température. La température de service idéale se situe entre 14°C et 16°C. Ce style de Pinot Noir bénéficie de plusieurs années de vieillissement. Avec les composants nécessaires pour bien vieillir, il peut mûrir de 8 à 10 ans.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Le **Pinot Noir frais** sans élevage en chêne peut être parfaitement servi avec des plats de poisson, comme des pâtes au saumon et sauce crémeuse. Servez un Pinot Noir frais avec une salade végane mettant en vedette des légumes savoureux et terreux comme la betterave et les champignons des bois. Ce style de vin se marie également parfaitement avec le thon mi-cuit et diverses préparations de betterave. Essayez également de le servir avec un carpaccio de bœuf garni de Parmesan, roquette et vinaigre balsamique.\n\nLe **Pinot Noir corsé et riche** avec élevage en chêne est parfait avec un carré d\'agneau au jus d\'agneau, une préparation de pommes de terre et quelques légumes chauds. Vous pouvez également déguster ce style avec des fromages comme le Brie, le Gouda, le Manchego ou même des fromages à pâte persillée comme le Gorgonzola. Pinot Noir et truffe sont un accord classique, servez-le donc avec des pâtes à la crème, champignons Girolles et truffe d\'été.'
            }
          ]
        }
      }
    },
    relatedPosts: ['chardonnay', 'merlot', 'cabernet-sauvignon']
  },
  {
    id: '7',
    slug: 'chardonnay',
    featuredImage: chardonnayImage,
    date: '2023-03-10',
    category: 'druiven',
    readTime: 8,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Chardonnay',
        excerpt: 'De meest aangeplante witte druif ter wereld, van fris en mineraal tot vol en boterrijk.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Alles over Chardonnay: van Bourgogne tot wereldwijd. Ontdek de veelzijdige witte druif die elke stijl wijn kan maken.',
          keywords: ['chardonnay', 'witte wijn', 'bourgogne', 'champagne', 'druivensoort']
        },
        content: {
          intro: 'Chardonnay is voor velen een merknaam, een soort wijn. Velen weten niet dat dit eigenlijk een druivenras is. Chardonnay is wereldwijd de meest aangeplante witte druif. Er is geen enkel wijnland dat niet probeert om deze druif te telen. Chardonnay heeft een vroege ontbloeming, waardoor deze cool-climate druiven dus risico lopen op voorjaarsvorst. Het tijdstip van de pluk is hier zeer belangrijk. Bij een latere oogst met rijpere druiven verliezen ze sneller hun zuurtegraad. Wijnen gemaakt van de Chardonnay, zijn over het algemeen droog. Het kan ook zijn dat ze zoet zijn, al dan niet door invloed van Botrytis. De druif is zeer beïnvloedbaar door de bodem waarop het geteeld wordt.',
          keyTakeaways: {
            'Kleur': 'Wit',
            'Stijl': 'Mousserend, fijn wit, vol wit',
            'Smaakprofiel': 'Van jong wit fruit tot vanille en boter',
            'Bekend door': 'Champagne, Bourgogne',
            'Probeer ook': 'Marsanne, Roussanne, Viognier, Chenin Blanc'
          },
          sections: [
            {
              title: 'Oorsprong',
              content: 'Chardonnay is een kruising tussen Pinot Noir en Gouais Blanc. Chardonnay werd al in de 16e eeuw voor het eerst ontdekt in de wijngaarden van Frankrijk. Het is pas sinds de 17e eeuw dat de druif effectief geregistreerd werd en een naam kreeg.\n\nTot op vandaag is de herkomst van Chardonnay nog steeds niet geweten. Wat we wel zeker weten is dat de druif oorspronkelijk uit Bourgogne komt. In het departement Saône-et-Loire, is er een dorpje genaamd Chardonnay. Velen zeggen dat hier de oorsprong van de druif ligt en dat het druivenras dus vernoemd is naar dit dorp.'
            },
            {
              title: 'Bodem & klimaat',
              content: 'Het klimaat heeft een zeer groot effect op de stijl van de wijn die wordt gemaakt met Chardonnay. Zo is er een heel groot verschil in smaak, geur en kleur bij Chardonnay die geteeld wordt in een koel klimaat of in een warm klimaat.\n\nChardonnay uit een **koel klimaat** zorgt voor frissere wijnen met een duidelijke hogere zuurtegraad, light-body en heeft ook vaker een lager alcoholpercentage. De kleur is vooral citroengeel. Qua aroma\'s en smaak gaat dit meer richting wit fruit en citrus. Deze stijl van wijn wordt ook vaak gevinifieerd in roestvrijstalen tanks en wordt amper gerijpt op eiken vaten.\n\nChardonnay uit een **warm klimaat** zorgt voor complexe wijnen met een lagere zuurtegraad, is full-body en heeft een hoger alcoholpercentage. De wijn krijgt meer een gouden kleur en heeft aroma\'s en smaken van rijp citrus- en tropisch fruit. Deze wijnen worden vaak gerijpt op eiken vaten, waardoor deze nog complexer worden.\n\nChardonnay is heel makkelijk te telen op verschillende bodems. Toch heeft dit druivenras een voorkeur voor rijke kalkbodems. Dit zal zich meer uiten in een zekere mineraliteit in de wijn.'
            },
            {
              title: 'Aroma\'s & smaken',
              content: 'Omdat Chardonnay een druif is die zeer gevoelig is aan zijn omgeving, veranderen de smaken mee met de verschillende invloeden van de bodem, het klimaat en de toegepaste vinificatie.\n\n**Citrus**: Citroen, limoenschil\n**Tropisch fruit**: Mango, ananas\n**Boomfruit**: Gele appel, peer, witte perzik\n**Floraal**: Witte bloesem, kamperfoelie\n**Gerijpt**: Hazelnoot, geroosterde amandel\n**Met hout**: Nootmuskaat, vanille, gebrande karamel, biscuit, crème brulée, toast\n**Fruit**: Gedroogde vijg\n**Overige**: Meloen, rook, paddenstoel, vuursteen, ziltigheid, kalk, boter, room'
            },
            {
              title: 'Invloed van hout',
              content: 'Chardonnay die **geen rijping op houten vaten** heeft gehad, wordt vaak tot bijna altijd gevinifieerd in roestvrijstalen tanks. Dit soort tanks vermindert de invloed van zuurstof waardoor de fraîcheur meer tot uiting komt. Dit zijn meer lichte, easy-to-drink wijnen. Met in aroma\'s en smaak een duidelijke overvloed van citrus- en jong, wit fruit. Deze wijnen zijn het best jong te drinken.\n\nChardonnay die **wel een rijping op houten vaten** heeft gehad, is voller en complexer. Deze stijl van wijnen krijgen een langere rijping op houten vaten en kunnen na de botteling ook nog eens langer rijpen op de fles in de kelder. Hier rijken de aroma\'s en smaken zich tot vanille, boter, room en in sommige gevallen zelfs tot karamel.'
            },
            {
              title: 'Populariteit',
              content: 'Chardonnay is zodanig populair dat bijna elk wijnland probeert om hiermee wijn te maken. Wereldwijd staat er 211.000 ha Chardonnay aangeplant.\n\nTop 10 landen:\n1. Frankrijk\n2. Verenigde Staten\n3. Australië\n4. Italië\n5. Chili\n6. Zuid-Afrika\n7. Spanje\n8. Argentinië\n9. Moldavië\n10. Nieuw-Zeeland'
            },
            {
              title: 'Serveer- & bewaartips',
              content: '**Cool-climate Chardonnay** wordt het best geserveerd op een temperatuur tussen de 8°C en 10°C en wordt het liefst geserveerd in een iets smaller glas. Het bewaren van deze wijnen heeft niet veel nut, het brengt geen meerwaarde. Het is dus niet nodig om ze langer dan 2 jaar te laten liggen in de kelder.\n\n**Warm-climate Chardonnay** wordt het best geserveerd op een temperatuur tussen de 10°C en 12°C en serveer je best in een breed, rond glas. Hierdoor komt de wijn meer open en kan er beter genoten worden van de complexe, aromatische stijl. Het bewaren van deze wijnen geeft nog meer complexiteit en diepgang. Deze stijl van wijnen kan perfect 5 tot 10 jaar blijven liggen in de kelder. In Bourgogne zijn er zelfs bepaalde Chardonnays die langer dan 15 jaar goed bewaard blijven.'
            },
            {
              title: 'Foodpairing',
              content: '**Frisse Chardonnay** waar we aroma\'s en smaken waarnemen van citroen, limoenschil, zure appel en jonge peer kan perfect gedronken worden als verfrissend aperitief bij fine-food hapjes. Koude gerechten met een rauwe bereiding, zoals een carpaccio van Sint-Jakobsnoot met een vinaigrette, zorgen ook voor een topcombinatie. Salades met een glas Chardonnay doen het ook zeer goed. Bijvoorbeeld een zomerse garnaalsalade of een salade met gebakken scampi\'s. Een plateau fruits de mer in samenstelling met een glas frisse Chardonnay moet iedereen zeker en vast eens geprobeerd hebben.\n\n**Volle, rijke Chardonnay** waar we meer naar de aroma\'s en smaken gaan van room, geroosterde amandel, vanille, karamel, biscuit en boter. Al dan niet houtgerijpt. Dit vraagt om stevigere gerechten. Een sappige Bresse kip met een jus van salie of een zeetong à la meunière met een botersaus is veel voller en complexer. Waardoor we dus ook een stijl van Chardonnay nodig hebben die voller is. Nog een mooie match is een visgerecht met een béarnaise of hollandaise. Of een macaroni met kaassaus. Probeer zeker ook eens een bordje met romige kazen.'
            }
          ]
        }
      },
      en: {
        title: 'Chardonnay',
        excerpt: 'The world\'s most planted white grape, ranging from crisp and mineral to full and buttery.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Everything about Chardonnay: from Burgundy to worldwide. Discover the versatile white grape that can make any style of wine.',
          keywords: ['chardonnay', 'white wine', 'burgundy', 'champagne', 'grape variety']
        },
        content: {
          intro: 'For many, Chardonnay is a brand name, a type of wine. Many don\'t know this is actually a grape variety. Chardonnay is the world\'s most planted white grape. There isn\'t a single wine-producing country that doesn\'t try to cultivate this grape. Chardonnay has early bud break, making these cool-climate grapes susceptible to spring frost. Harvest timing is crucial here. With a later harvest of riper grapes, they lose their acidity more quickly. Wines made from Chardonnay are generally dry. They can also be sweet, whether or not influenced by Botrytis. The grape is highly influenced by the soil on which it\'s grown.',
          keyTakeaways: {
            'Color': 'White',
            'Style': 'Sparkling, fine white, full white',
            'Flavor Profile': 'From young white fruit to vanilla and butter',
            'Known for': 'Champagne, Burgundy',
            'Also try': 'Marsanne, Roussanne, Viognier, Chenin Blanc'
          },
          sections: [
            {
              title: 'Origin',
              content: 'Chardonnay is a cross between Pinot Noir and Gouais Blanc. Chardonnay was first discovered in French vineyards in the 16th century. It wasn\'t until the 17th century that the grape was officially registered and given a name.\n\nTo this day, the origin of Chardonnay is still unknown. What we do know for certain is that the grape originally comes from Burgundy. In the Saône-et-Loire department, there\'s a village called Chardonnay. Many say this is where the grape originated and that the variety is named after this village.'
            },
            {
              title: 'Soil & Climate',
              content: 'Climate has a very significant effect on the style of wine made with Chardonnay. There\'s a huge difference in taste, aroma, and color between Chardonnay grown in a cool climate versus a warm climate.\n\nChardonnay from a **cool climate** produces fresher wines with clearly higher acidity, light body, and often lower alcohol percentage. The color is predominantly lemon yellow. In terms of aromas and flavor, this leans more toward white fruit and citrus. This style of wine is also often vinified in stainless steel tanks and rarely aged in oak barrels.\n\nChardonnay from a **warm climate** produces complex wines with lower acidity, full body, and higher alcohol percentage. The wine takes on more of a golden color and has aromas and flavors of ripe citrus and tropical fruit. These wines are often aged in oak barrels, making them even more complex.\n\nChardonnay is very easy to grow on various soils. However, this grape variety prefers rich limestone soils. This expresses itself more in a certain minerality in the wine.'
            },
            {
              title: 'Aromas & Flavors',
              content: 'Because Chardonnay is a grape that\'s very sensitive to its environment, the flavors change with the different influences of soil, climate, and applied vinification.\n\n**Citrus**: Lemon, lime zest\n**Tropical fruit**: Mango, pineapple\n**Stone fruit**: Yellow apple, pear, white peach\n**Floral**: White blossom, honeysuckle\n**Aged**: Hazelnut, toasted almond\n**With oak**: Nutmeg, vanilla, burnt caramel, biscuit, crème brulée, toast\n**Fruit**: Dried fig\n**Other**: Melon, smoke, mushroom, flint, salinity, chalk, butter, cream'
            },
            {
              title: 'Influence of Oak',
              content: 'Chardonnay that has **not been aged in oak barrels** is often, almost always, vinified in stainless steel tanks. This type of tank reduces oxygen influence, allowing freshness to come through more. These are lighter, easy-to-drink wines with aromas and flavors clearly abundant in citrus and young white fruit. These wines are best drunk young.\n\nChardonnay that **has been aged in oak barrels** is fuller and more complex. This style of wine gets longer aging in oak barrels and can age even longer in the bottle in the cellar after bottling. Here the aromas and flavors develop toward vanilla, butter, cream, and in some cases even caramel.'
            },
            {
              title: 'Popularity',
              content: 'Chardonnay is so popular that almost every wine-producing country tries to make wine with it. Worldwide, 211,000 hectares of Chardonnay are planted.\n\nTop 10 countries:\n1. France\n2. United States\n3. Australia\n4. Italy\n5. Chile\n6. South Africa\n7. Spain\n8. Argentina\n9. Moldova\n10. New Zealand'
            },
            {
              title: 'Serving & Storage Tips',
              content: '**Cool-climate Chardonnay** is best served at a temperature between 8°C and 10°C and preferably in a slightly narrower glass. Storing these wines doesn\'t add much value. It\'s therefore not necessary to keep them longer than 2 years in the cellar.\n\n**Warm-climate Chardonnay** is best served at a temperature between 10°C and 12°C and best served in a wide, round glass. This allows the wine to open up more and the complex, aromatic style can be better enjoyed. Storing these wines adds even more complexity and depth. This style of wine can easily be kept in the cellar for 5 to 10 years. In Burgundy, there are even certain Chardonnays that keep well for longer than 15 years.'
            },
            {
              title: 'Food Pairing',
              content: '**Fresh Chardonnay** where we perceive aromas and flavors of lemon, lime zest, tart apple, and young pear can be perfectly drunk as a refreshing aperitif with fine-food appetizers. Cold dishes with raw preparation, such as a scallop carpaccio with vinaigrette, also make a great combination. Salads with a glass of Chardonnay also work very well, such as a summery shrimp salad or a salad with pan-fried scampi. A plateau fruits de mer paired with a glass of fresh Chardonnay is something everyone should definitely try.\n\n**Full, rich Chardonnay** where we lean more toward aromas and flavors of cream, toasted almond, vanilla, caramel, biscuit, and butter, whether or not oak-aged, calls for more substantial dishes. A juicy Bresse chicken with sage jus or a sole meunière with butter sauce is much fuller and more complex, requiring a fuller style of Chardonnay. Another beautiful pairing is a fish dish with béarnaise or hollandaise sauce, or macaroni with cheese sauce. Also definitely try a plate of creamy cheeses.'
            }
          ]
        }
      },
      fr: {
        title: 'Chardonnay',
        excerpt: 'Le cépage blanc le plus planté au monde, allant du vif et minéral au corsé et beurré.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Tout sur le Chardonnay : de la Bourgogne au monde entier. Découvrez le cépage blanc polyvalent qui peut produire tout style de vin.',
          keywords: ['chardonnay', 'vin blanc', 'bourgogne', 'champagne', 'cépage']
        },
        content: {
          intro: 'Pour beaucoup, Chardonnay est un nom de marque, un type de vin. Beaucoup ne savent pas qu\'il s\'agit en fait d\'un cépage. Le Chardonnay est le cépage blanc le plus planté au monde. Il n\'y a pas un seul pays producteur de vin qui n\'essaie pas de cultiver ce raisin. Le Chardonnay a un débourrement précoce, rendant ces raisins de climat frais sensibles au gel printanier. Le moment de la récolte est crucial ici. Avec une récolte tardive de raisins plus mûrs, ils perdent leur acidité plus rapidement. Les vins élaborés à partir de Chardonnay sont généralement secs. Ils peuvent aussi être doux, influencés ou non par le Botrytis. Le raisin est fortement influencé par le sol sur lequel il est cultivé.',
          keyTakeaways: {
            'Couleur': 'Blanc',
            'Style': 'Effervescent, blanc fin, blanc corsé',
            'Profil Gustatif': 'Des fruits blancs jeunes à la vanille et au beurre',
            'Connu pour': 'Champagne, Bourgogne',
            'À essayer aussi': 'Marsanne, Roussanne, Viognier, Chenin Blanc'
          },
          sections: [
            {
              title: 'Origine',
              content: 'Le Chardonnay est un croisement entre le Pinot Noir et le Gouais Blanc. Le Chardonnay a été découvert pour la première fois dans les vignobles français au XVIe siècle. Ce n\'est qu\'au XVIIe siècle que le raisin a été officiellement enregistré et nommé.\n\nÀ ce jour, l\'origine du Chardonnay est toujours inconnue. Ce que nous savons avec certitude, c\'est que le raisin vient à l\'origine de Bourgogne. Dans le département de Saône-et-Loire, il y a un village appelé Chardonnay. Beaucoup disent que c\'est là que le raisin est né et que le cépage porte le nom de ce village.'
            },
            {
              title: 'Sol & Climat',
              content: 'Le climat a un effet très significatif sur le style de vin produit avec le Chardonnay. Il y a une énorme différence de goût, d\'arôme et de couleur entre le Chardonnay cultivé dans un climat frais et un climat chaud.\n\nLe Chardonnay d\'un **climat frais** produit des vins plus frais avec une acidité clairement plus élevée, un corps léger et souvent un pourcentage d\'alcool plus faible. La couleur est principalement jaune citron. En termes d\'arômes et de saveur, cela penche plus vers les fruits blancs et les agrumes. Ce style de vin est également souvent vinifié en cuves inox et rarement élevé en fûts de chêne.\n\nLe Chardonnay d\'un **climat chaud** produit des vins complexes avec une acidité plus faible, un corps corsé et un pourcentage d\'alcool plus élevé. Le vin prend une couleur plus dorée et a des arômes et des saveurs d\'agrumes et de fruits tropicaux mûrs. Ces vins sont souvent élevés en fûts de chêne, les rendant encore plus complexes.\n\nLe Chardonnay est très facile à cultiver sur différents sols. Cependant, ce cépage préfère les sols calcaires riches. Cela s\'exprime davantage par une certaine minéralité dans le vin.'
            },
            {
              title: 'Arômes & Saveurs',
              content: 'Parce que le Chardonnay est un raisin très sensible à son environnement, les saveurs changent avec les différentes influences du sol, du climat et de la vinification appliquée.\n\n**Agrumes**: Citron, zeste de citron vert\n**Fruits tropicaux**: Mangue, ananas\n**Fruits à noyau**: Pomme jaune, poire, pêche blanche\n**Floral**: Fleur blanche, chèvrefeuille\n**Vieilli**: Noisette, amande grillée\n**Avec chêne**: Muscade, vanille, caramel brûlé, biscuit, crème brulée, toast\n**Fruit**: Figue séchée\n**Autre**: Melon, fumée, champignon, silex, salinité, craie, beurre, crème'
            },
            {
              title: 'Influence du Bois',
              content: 'Le Chardonnay qui **n\'a pas été élevé en fûts de chêne** est souvent, presque toujours, vinifié en cuves inox. Ce type de cuve réduit l\'influence de l\'oxygène, permettant à la fraîcheur de s\'exprimer davantage. Ce sont des vins plus légers, faciles à boire, avec des arômes et des saveurs clairement abondants en agrumes et fruits blancs jeunes. Ces vins se boivent de préférence jeunes.\n\nLe Chardonnay qui **a été élevé en fûts de chêne** est plus corsé et plus complexe. Ce style de vin bénéficie d\'un élevage plus long en fûts de chêne et peut vieillir encore plus longtemps en bouteille en cave après la mise en bouteille. Ici, les arômes et les saveurs évoluent vers la vanille, le beurre, la crème et dans certains cas même le caramel.'
            },
            {
              title: 'Popularité',
              content: 'Le Chardonnay est si populaire que presque tous les pays producteurs de vin essaient d\'en faire du vin. Dans le monde, 211 000 hectares de Chardonnay sont plantés.\n\nTop 10 des pays:\n1. France\n2. États-Unis\n3. Australie\n4. Italie\n5. Chili\n6. Afrique du Sud\n7. Espagne\n8. Argentine\n9. Moldavie\n10. Nouvelle-Zélande'
            },
            {
              title: 'Conseils de Service & Conservation',
              content: 'Le **Chardonnay de climat frais** se sert mieux à une température entre 8°C et 10°C et de préférence dans un verre légèrement plus étroit. Conserver ces vins n\'ajoute pas beaucoup de valeur. Il n\'est donc pas nécessaire de les garder plus de 2 ans en cave.\n\nLe **Chardonnay de climat chaud** se sert mieux à une température entre 10°C et 12°C et de préférence dans un verre large et rond. Cela permet au vin de s\'ouvrir davantage et le style complexe et aromatique peut être mieux apprécié. Conserver ces vins ajoute encore plus de complexité et de profondeur. Ce style de vin peut facilement être conservé en cave pendant 5 à 10 ans. En Bourgogne, il existe même certains Chardonnays qui se conservent bien pendant plus de 15 ans.'
            },
            {
              title: 'Accords Mets & Vins',
              content: 'Le **Chardonnay frais** où nous percevons des arômes et des saveurs de citron, zeste de citron vert, pomme acidulée et poire jeune peut être parfaitement bu en apéritif rafraîchissant avec des amuse-bouches fins. Les plats froids avec une préparation crue, comme un carpaccio de coquille Saint-Jacques avec vinaigrette, font également une excellente combinaison. Les salades avec un verre de Chardonnay fonctionnent également très bien, comme une salade de crevettes estivale ou une salade avec scampis poêlés. Un plateau de fruits de mer accompagné d\'un verre de Chardonnay frais est quelque chose que tout le monde devrait absolument essayer.\n\nLe **Chardonnay corsé et riche** où nous penchons plus vers des arômes et des saveurs de crème, amande grillée, vanille, caramel, biscuit et beurre, élevé en chêne ou non, demande des plats plus consistants. Un poulet de Bresse juteux avec jus de sauge ou une sole meunière avec sauce au beurre est beaucoup plus corsé et complexe, nécessitant un style de Chardonnay plus corsé. Un autre bel accord est un plat de poisson avec sauce béarnaise ou hollandaise, ou des macaronis au fromage. Essayez également une assiette de fromages crémeux.'
            }
          ]
        }
      }
    },
    relatedPosts: ['pinot-noir', 'riesling', 'sauvignon-blanc']
  },
  {
    id: '8',
    slug: 'de-cyclus-van-een-wijnrank',
    featuredImage: vineyardImage,
    date: '2023-03-05',
    category: 'tips',
    readTime: 6,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'De cyclus van een wijnrank',
        excerpt: 'Ontdek het jaarlijkse ritme van de wijngaard, van knoppen tot oogst.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'De complete cyclus van een wijnrank: van knopvorming tot oogst. Begrijp het jaarlijkse ritme van de wijngaard.',
          keywords: ['wijnrank', 'druiven', 'wijngaard', 'oogst', 'véraison']
        },
        content: {
          intro: 'De wijnrank doorloopt elk jaar een fascinerende cyclus van groei, bloei en oogst. Van het ontwaken in de lente tot de rust in de winter, elke fase is cruciaal voor de kwaliteit van de uiteindelijke druiven. Ontdek hier het volledige jaarritme van de wijngaard.',
          keyTakeaways: {
            'Seizoen': 'Maart - februari (noordelijk halfrond)',
            'Fases': '6 belangrijke groeifases',
            'Duur': '12 maanden cyclus',
            'Klimaat': 'Temperatuur cruciaal',
            'Focus': 'Van knop tot druif'
          },
          sections: [
            {
              title: 'Maart - April: Tot bloei komen van de knoppen',
              content: 'Het openbloeien van de knoppen gebeurt in de lente. De knoppen gaan beginnen opzwellen en ontplooien zich tot nieuwe scheuten.\n\nHet tot bloei komen van de knoppen is de start van het groeiseizoen. Het begint meestal wanneer de gemiddelde dagtemperatuur boven 10°C stijgt. De exacte temperatuur waarop de knoppen openbloeien hangt af van het druivenras.\n\nNieuwe scheuten zijn zeer gevoelig en kunnen kapot gaan door voorjaarsvorst. Met als gevolg een aanzienlijke vermindering van productie en dus ook opbrengst. Dit is vooral een probleem bij vroegbloeiende druivenrassen. Chardonnay en Pinot Noir komen tot bloei bij redelijk lage temperaturen en zijn hierdoor vroegbloeiende druivenrassen. Cabernet Sauvignon heeft warmere temperaturen nodig om tot bloei te komen en wordt dus een laatbloeiend druivenras genoemd.'
            },
            {
              title: 'April - Mei: Groei van scheuten en bladeren',
              content: 'Scheuten groeien aan een snel tempo tot de wijnstokken beginnen te bloeien. In eerste instantie wordt dit gevoed door de reserves van koolhydraten die de wijnstokken hebben opgeslagen tijdens de winter. Naarmate de bladeren groeien, ondersteunen ze de groei via fotosynthese.\n\nIn het begin van het seizoen is het cruciaal dat de wijnstokken voldoende water en voedingsstoffen krijgen. Indien de wijnbouwer hiervoor kiest, worden de uitlopende scheuten opegbonden aan een ijzeren draad. Dit zorgt ervoor dat het bladerdek open blijft.'
            },
            {
              title: 'Mei - Juni: Bloei en vruchtzetting',
              content: 'Tijdens het bloeien van de clusters hebben de wijnstokken warme temperaturen, heel veel zonneschijn en weinig tot geen regen nodig. Anders zal de bestuiving verstoord worden, waardoor de vruchtzetting zal verminderen.\n\nDe vruchtzetting begint van zodra een bloemetje zich begint te ontwikkelen tot en druif. Niet elk bloemetje zal een druif worden. Na dit proces zullen alle onbevruchte bloemetjes afvallen.\n\nWe spreken van coulure als er meer bloemetjes onbevrucht blijven dan gewoonlijk. Als de druiven zicht vormen zonder pitten en daardoor klein blijven, spreken we van millerandage. Beide aandoeningen zorgen voor een opvallende vermindering in opbrengst. Dit komt vooral voor gedurende de bestuivingsperiode bij koud, regenachtig of bewolkt weer.'
            },
            {
              title: 'Juli - September: Rijpen en verkleuren van druiven',
              content: 'Na de vruchtzetting volgt een periode van 6 tot 8 weken waarin de druiven beginnen te groeien. Zowel blauwe als witte druiven zijn momenteel groen en voelen hard aan. Véraison is het punt waarop de druiven beginnen te rijpen. De schil van de druif begint te verkleuren. Blauwe druiven worden eerst rood en dan paars. Witte druiven worden doorschijnend en goudkleurig.\n\nTussen véraison en de oogst zwellen de druiven op en vulen ze zich met water. Tijdens het rijpingsproces stijgt het suikergehalte en daalt het zuurgehalte. Kleurpigment en smaakstoffen hopen zich op en de tannines beginnen zich te ontwikkelen. Warme, zonnige omstandigheden zijn ideaal in dit proces. Waterschaarste remt de scheutgroei en stimuleert de rijping van de druif.\n\nIndien nodig, kan er een zomersnoei worden gedaan waarbij de overtollige bladeren verwijderd worden. Vendange vert neemt plaats kort na de véraison. Dit wil zeggen dat er een deel van de groene druiven geplukt worden. Dit wordt gedaan om de productie te beperken en zodus een hogere kwaliteit te bekomen.'
            },
            {
              title: 'September - Oktober: Oogst',
              content: 'Het ideale zou zijn dat de oogstperiode droog blijft. Overmatige regenval net voor de oogst kan ervoor zorgen dat de druiven gaan zwellen waardoor het sap wordt verdund en de kwaliteit zal dalen. Door vochtige omstandigheden is er meer risico op rotting.'
            },
            {
              title: 'December - Maart: Winterrust',
              content: 'Naarmate het weer kouder wordt, eindigt het groeiseizoen en begint een periode van winterrust. De scheuten worden houtachtig en staan vanaf dit punt bekend als een druivenstok. Het bladerdek zal beginnen vallen en de druivenstok zal zijn reserves van koolhydraten opslaan in de wortel.\n\nIn een continentaal klimaat moet men vooral opletten voor het vriezen tijdens de winter. De knoppen kunnen hieraan kapot gaan. In extreme gevallen kan zelfs de hele druienstok eraan kapot gaan. Sommige wijnbouwers gaan omliggende aarde rond de wijnstok leggen om deze te beschermen tegen lage temperaturen. Dit wordt buttage genoemd. De wintersnoei neemt plaats.'
            }
          ]
        }
      },
      en: {
        title: 'The Cycle of a Grapevine',
        excerpt: 'Discover the annual rhythm of the vineyard, from buds to harvest.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'The complete cycle of a grapevine: from bud formation to harvest. Understand the annual rhythm of the vineyard.',
          keywords: ['grapevine', 'grapes', 'vineyard', 'harvest', 'véraison']
        },
        content: {
          intro: 'The grapevine goes through a fascinating cycle each year of growth, flowering, and harvest. From awakening in spring to dormancy in winter, each phase is crucial for the quality of the final grapes. Discover here the complete annual rhythm of the vineyard.',
          keyTakeaways: {
            'Season': 'March - February (Northern Hemisphere)',
            'Phases': '6 major growth phases',
            'Duration': '12-month cycle',
            'Climate': 'Temperature crucial',
            'Focus': 'From bud to grape'
          },
          sections: [
            {
              title: 'March - April: Bud Break',
              content: 'Bud break occurs in spring. The buds begin to swell and unfold into new shoots.\n\nBud break is the start of the growing season. It usually begins when the average daily temperature rises above 10°C. The exact temperature at which buds break depends on the grape variety.\n\nNew shoots are very sensitive and can be damaged by spring frost, resulting in a significant reduction in production and yield. This is especially problematic for early-budding grape varieties. Chardonnay and Pinot Noir bud at relatively low temperatures and are therefore early-budding varieties. Cabernet Sauvignon requires warmer temperatures to bud and is therefore called a late-budding variety.'
            },
            {
              title: 'April - May: Shoot and Leaf Growth',
              content: 'Shoots grow at a rapid pace until the vines begin to flower. Initially, this is fueled by carbohydrate reserves that the vines stored during winter. As the leaves grow, they support growth through photosynthesis.\n\nEarly in the season, it\'s crucial that the vines get sufficient water and nutrients. If the winegrower chooses, emerging shoots are tied to an iron wire. This ensures the canopy remains open.'
            },
            {
              title: 'May - June: Flowering and Fruit Set',
              content: 'During cluster flowering, the vines need warm temperatures, plenty of sunshine, and little to no rain. Otherwise, pollination will be disrupted, reducing fruit set.\n\nFruit set begins as soon as a flower starts developing into a grape. Not every flower will become a grape. After this process, all unpollinated flowers will drop off.\n\nWe speak of coulure when more flowers remain unpollinated than usual. When grapes form without seeds and therefore remain small, we speak of millerandage. Both conditions cause a significant reduction in yield. This mainly occurs during the pollination period in cold, rainy, or cloudy weather.'
            },
            {
              title: 'July - September: Grape Ripening and Color Change',
              content: 'After fruit set follows a period of 6 to 8 weeks in which the grapes begin to grow. Both blue and white grapes are currently green and feel hard. Véraison is the point at which grapes begin to ripen. The grape skin begins to change color. Blue grapes first turn red and then purple. White grapes become translucent and golden.\n\nBetween véraison and harvest, grapes swell and fill with water. During the ripening process, sugar content rises and acidity falls. Color pigment and flavor compounds accumulate and tannins begin to develop. Warm, sunny conditions are ideal in this process. Water scarcity slows shoot growth and stimulates grape ripening.\n\nIf necessary, summer pruning can be done to remove excess leaves. Vendange vert takes place shortly after véraison. This means a portion of green grapes are picked. This is done to limit production and thus achieve higher quality.'
            },
            {
              title: 'September - October: Harvest',
              content: 'Ideally, the harvest period would remain dry. Excessive rainfall just before harvest can cause grapes to swell, diluting the juice and reducing quality. Humid conditions increase the risk of rot.'
            },
            {
              title: 'December - March: Winter Dormancy',
              content: 'As the weather gets colder, the growing season ends and a period of winter dormancy begins. The shoots become woody and are from this point known as a cane. The canopy will begin to fall and the vine will store carbohydrate reserves in the roots.\n\nIn a continental climate, one must especially watch out for freezing during winter. The buds can be damaged by this. In extreme cases, even the entire vine can be damaged. Some winemakers place surrounding earth around the vine to protect it from low temperatures. This is called buttage. Winter pruning takes place.'
            }
          ]
        }
      },
      fr: {
        title: 'Le cycle d\'une vigne',
        excerpt: 'Découvrez le rythme annuel du vignoble, des bourgeons aux vendanges.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Le cycle complet d\'une vigne : de la formation des bourgeons aux vendanges. Comprenez le rythme annuel du vignoble.',
          keywords: ['vigne', 'raisins', 'vignoble', 'vendange', 'véraison']
        },
        content: {
          intro: 'La vigne traverse chaque année un cycle fascinant de croissance, floraison et récolte. Du réveil printanier au repos hivernal, chaque phase est cruciale pour la qualité des raisins finaux. Découvrez ici le rythme annuel complet du vignoble.',
          keyTakeaways: {
            'Saison': 'Mars - février (hémisphère nord)',
            'Phases': '6 phases de croissance majeures',
            'Durée': 'Cycle de 12 mois',
            'Climat': 'Température cruciale',
            'Focus': 'Du bourgeon au raisin'
          },
          sections: [
            {
              title: 'Mars - Avril: Débourrement',
              content: 'Le débourrement se produit au printemps. Les bourgeons commencent à gonfler et se déploient en nouvelles pousses.\n\nLe débourrement marque le début de la saison de croissance. Il commence généralement lorsque la température quotidienne moyenne dépasse 10°C. La température exacte à laquelle les bourgeons éclatent dépend du cépage.\n\nLes nouvelles pousses sont très sensibles et peuvent être endommagées par le gel printanier, entraînant une réduction significative de la production et du rendement. Ceci est particulièrement problématique pour les cépages à débourrement précoce. Le Chardonnay et le Pinot Noir bourgeonnent à des températures relativement basses et sont donc des variétés à débourrement précoce. Le Cabernet Sauvignon nécessite des températures plus chaudes pour bourgeonner et est donc appelé une variété à débourrement tardif.'
            },
            {
              title: 'Avril - Mai: Croissance des pousses et des feuilles',
              content: 'Les pousses poussent à un rythme rapide jusqu\'à ce que les vignes commencent à fleurir. Initialement, cela est alimenté par les réserves de glucides que les vignes ont stockées pendant l\'hiver. Au fur et à mesure que les feuilles poussent, elles soutiennent la croissance par photosynthèse.\n\nAu début de la saison, il est crucial que les vignes reçoivent suffisamment d\'eau et de nutriments. Si le viticulteur le choisit, les pousses émergentes sont attachées à un fil de fer. Cela garantit que la canopée reste ouverte.'
            },
            {
              title: 'Mai - Juin: Floraison et nouaison',
              content: 'Pendant la floraison des grappes, les vignes ont besoin de températures chaudes, de beaucoup de soleil et de peu ou pas de pluie. Sinon, la pollinisation sera perturbée, réduisant la nouaison.\n\nLa nouaison commence dès qu\'une fleur commence à se développer en raisin. Toutes les fleurs ne deviendront pas des raisins. Après ce processus, toutes les fleurs non pollinisées tomberont.\n\nNous parlons de coulure lorsque plus de fleurs restent non pollinisées que d\'habitude. Lorsque les raisins se forment sans pépins et restent donc petits, nous parlons de millerandage. Les deux conditions causent une réduction significative du rendement. Cela se produit principalement pendant la période de pollinisation par temps froid, pluvieux ou nuageux.'
            },
            {
              title: 'Juillet - Septembre: Maturation et changement de couleur des raisins',
              content: 'Après la nouaison suit une période de 6 à 8 semaines pendant laquelle les raisins commencent à grossir. Les raisins bleus et blancs sont actuellement verts et se sentent durs. La véraison est le point où les raisins commencent à mûrir. La peau du raisin commence à changer de couleur. Les raisins bleus deviennent d\'abord rouges puis violets. Les raisins blancs deviennent translucides et dorés.\n\nEntre la véraison et la récolte, les raisins gonflent et se remplissent d\'eau. Pendant le processus de maturation, la teneur en sucre augmente et l\'acidité diminue. Le pigment de couleur et les composés aromatiques s\'accumulent et les tanins commencent à se développer. Des conditions chaudes et ensoleillées sont idéales dans ce processus. Le manque d\'eau ralentit la croissance des pousses et stimule la maturation des raisins.\n\nSi nécessaire, une taille en vert peut être effectuée pour enlever les feuilles excédentaires. La vendange en vert a lieu peu après la véraison. Cela signifie qu\'une partie des raisins verts est cueillie. Cela est fait pour limiter la production et ainsi obtenir une qualité supérieure.'
            },
            {
              title: 'Septembre - Octobre: Vendange',
              content: 'Idéalement, la période de vendange resterait sèche. Des précipitations excessives juste avant la récolte peuvent faire gonfler les raisins, diluant le jus et réduisant la qualité. Les conditions humides augmentent le risque de pourriture.'
            },
            {
              title: 'Décembre - Mars: Repos hivernal',
              content: 'À mesure que le temps se refroidit, la saison de croissance se termine et une période de repos hivernal commence. Les pousses deviennent ligneuses et sont à partir de ce point connues comme un sarment. La canopée commencera à tomber et la vigne stockera des réserves de glucides dans les racines.\n\nDans un climat continental, il faut surtout faire attention au gel pendant l\'hiver. Les bourgeons peuvent être endommagés par cela. Dans les cas extrêmes, même toute la vigne peut être endommagée. Certains viticulteurs placent de la terre autour de la vigne pour la protéger des basses températures. Cela s\'appelle le buttage. La taille d\'hiver a lieu.'
            }
          ]
        }
      }
    },
    relatedPosts: ['riesling', 'cabernet-sauvignon']
  },
  {
    id: '9',
    slug: '5-fouten-in-wijn',
    featuredImage: wineInspectionImage,
    date: '2023-02-20',
    category: 'tips',
    readTime: 5,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: '5 fouten in wijn',
        excerpt: 'Leer de meest voorkomende wijnfouten herkennen en wat je eraan kunt doen.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'De 5 meest voorkomende wijnfouten: TCA, oxidatie, reductie, zwavel en azijn. Leer ze herkennen en behandelen.',
          keywords: ['wijnfouten', 'kurk', 'oxidatie', 'TCA', 'wijnkwaliteit']
        },
        content: {
          intro: 'Als je graag een fles wijn drinkt bij je maaltijd, dan zijn er veel aspecten waar je rekening mee moet houden. Eerst en vooral is het zeer belangrijk dat de wijn op de juiste temperatuur geserveerd wordt. Ga je de wijn in een karaf gieten om extra lucht te geven? Dit zijn allemaal belangrijke keuzes. Maar het is nog belangrijker om een wijn te serveren zonder fout. Hieronder leg ik jullie de 5 meest voorkomende wijnfouten uit. Maar ook of je er iets aan kan doen of niet.',
          keyTakeaways: {
            'Fouten': '5 meest voorkomende',
            'Herkenning': 'Geur en smaak',
            'Oorzaken': 'Diverse bronnen',
            'Oplossing': 'Soms mogelijk',
            'Preventie': 'Juiste bewaring'
          },
          sections: [
            {
              title: '2,4,6-Trichlooranisol',
              content: 'Ook wel gekend als TCA of kurk (bouchonné). Deze organische verbinding is de voornaamste oorzaak van de muffe geur en smaak in wijn. Vaak herkend als nat karton, natte hond of een beschimmelde kelder. TCA ontstaat door bacteriën die zich gaan inwerken op de chloorfenolen. Dit wordt gevormd bij het behandelen van de bomen met bestrijdingsmiddelen. Maar ook bij het gebruik van chloor bij het ontsmetten en schoonmaken van de kurken. TCA kan ook aanwezig zijn in het eiken vat waar de wijn op rijpt.\n\nSinds 1996 mag er geen chloor meer gebruikt worden voor het ontsmetten van de kurken. Sindsdien gebruiken de kurkfabrikanten andere producten. Door deze nieuwe methoden voor het reinigen van de kurk is er een sterke daling van TCA in wijn.\n\nHet bestaan van 2,4,6-trichlooranisol heeft er voor gezorgd dat er sinds 1995 andere afsluitingen, zoals kunststof en de schroefdop zijn ontstaan. Deze fout in wijn kan je niet meer rechttrekken. De fles is direct om weg te gooien.'
            },
            {
              title: 'Oxidatie',
              content: 'Oxidatie is de meest voorkomende fout in wijn. Elke wijn zal na enige tijd oxideren. Maar door het verkeerd bewaren van de fles wijn, wordt het oxidatieproces versneld. Geoxideerde wijn herken je aan de kleur en smaak.\n\nWitte wijn is gevoeliger aan oxidatie dan rode wijn. Omdat bij rode wijn de tannines zorgen voor een verzachtend effect. Bij rode wijn gaat de kleur van rood naar oranje-bruin. De smaak wordt kenmerkend droog en bitter. Bij witte wijn wordt de kleur donker geel tot oranje en in de smaak zal er meer noten waargenomen worden.\n\nAls je de fles wijn opent dan begint het oxidatieproces meteen. Daarom wordt een fles wijn die 2-3 dagen open staat onmiddelijk slecht. Dit kan je vertragen door het gebruik van Coravin of eventueel een vacuumsysteem.'
            },
            {
              title: 'Reductie',
              content: 'Reductie is net het tegenovergestelde van oxidatie. Net zoals oxidatie kan dit een positief alsnog een negatief resultaat geven.\n\nDit proces wordt veroorzaakt door het uitsluiten van zuurstof tijdens de verwerking en bewaring van wijn. Vanaf de oogst zal er zodanig gewerkt worden dat er geen zuurstof aan de most of aan het sap kan komen. De wijnmakers gebruiken hiervoor droogijs. Dit zal werken als een beschermende gaslaag over de druiven. Ook zal er een beetje sulfiet toegevoegd worden tijdens de ontvangst van de druiven in de vinificatieruime. Hierdoor zullen de gistcellen naast alcohol, koolzuur en warmte ook waterstofsulfide produceren. In het slechtste geval kan dit stinken naar rotte eieren of dierlijke geuren. Indien dit voorvalt kan je de wijn eerst proberen extra lucht te geven op een karaf. Vermindert de geur niet of stoort het je nog te veel dan zal de wijn niet meer te redden zijn.'
            },
            {
              title: 'Zwavel',
              content: 'Zwavel is een zeer complex voorkomen in wijn. Zwaveldioxide of sulfiet (SO2) wordt aan veel wijn toegevoegd om te stabiliseren. Dit kan geen kwaad en merk je niet in de geur of smaak van de wijn.\n\nDiwaterstofsulfide (H2S) is een natuurlijk bijproduct die ontstaat bij een ongezonde gisting. Ook dit is niet schadelijk voor de gezondheid, maar het kan wel zorgen voor zeer onaangename geuren en smaken in de wijn. De meest voorkomende fout van zwavel is mercaptine, die zorgt voor geuren zoals rotte eieren, verbrand rubber en verbrande ui of knoflook.\n\nDeze onaangename geuren kan je verzachten door de wijn lucht te geven op een karaf. Is het te extreem aanwezig dan is het best dat je de wijn weg doet.'
            },
            {
              title: 'Azijn',
              content: 'Soms kan de wijn een zeer scherpe azijngeur hebben. Soms ruikt het zelfs naar aceton. Dit komt door het overvloedige gebruik van vluchtig zuur. Dit gebruiken ze voor extra complexiteit toe te voegen aan de wijn. In dit proces gaan de bacteriën oxideren en creëren zo een smaak van azijnzuur. Dit wordt aanzien als een fout in de wijn. Sommige mensen storen hun er niet aan, anderen net heel veel.\n\nOok hier kan je altijd eens proberen van de wijn extra lucht te geven op karaf. Blijft het zeer sterk naar azijn ruiken dan is het best dat je de wijn weg doet.'
            }
          ]
        }
      },
      en: {
        title: '5 Wine Faults',
        excerpt: 'Learn to recognize the most common wine faults and what you can do about them.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'The 5 most common wine faults: TCA, oxidation, reduction, sulfur and vinegar. Learn to recognize and treat them.',
          keywords: ['wine faults', 'cork taint', 'oxidation', 'TCA', 'wine quality']
        },
        content: {
          intro: 'If you enjoy drinking a bottle of wine with your meal, there are many aspects to consider. First and foremost, it\'s very important that the wine is served at the right temperature. Will you pour the wine into a decanter to give it extra air? These are all important choices. But it\'s even more important to serve a wine without faults. Below I\'ll explain the 5 most common wine faults and whether or not you can do something about them.',
          keyTakeaways: {
            'Faults': '5 most common',
            'Recognition': 'Smell and taste',
            'Causes': 'Various sources',
            'Solution': 'Sometimes possible',
            'Prevention': 'Proper storage'
          },
          sections: [
            {
              title: '2,4,6-Trichloroanisole',
              content: 'Also known as TCA or cork taint (bouchonné). This organic compound is the main cause of musty smell and taste in wine. Often recognized as wet cardboard, wet dog, or a moldy cellar. TCA is formed by bacteria acting on chlorophenols. This is formed when treating trees with pesticides. But also when using chlorine for disinfecting and cleaning corks. TCA can also be present in the oak barrel in which the wine ages.\n\nSince 1996, chlorine can no longer be used for disinfecting corks. Since then, cork manufacturers have used other products. Through these new methods for cleaning corks, there has been a sharp decline in TCA in wine.\n\nThe existence of 2,4,6-trichloroanisole has led to the development of other closures since 1995, such as synthetic corks and screw caps. This wine fault cannot be corrected. The bottle should be discarded immediately.'
            },
            {
              title: 'Oxidation',
              content: 'Oxidation is the most common fault in wine. Every wine will oxidize after some time. But through incorrect storage of the wine bottle, the oxidation process is accelerated. Oxidized wine is recognized by color and taste.\n\nWhite wine is more sensitive to oxidation than red wine, because in red wine the tannins provide a softening effect. In red wine, the color goes from red to orange-brown. The taste becomes characteristically dry and bitter. In white wine, the color becomes dark yellow to orange and in taste more nuts will be perceived.\n\nWhen you open the wine bottle, the oxidation process begins immediately. That\'s why a wine bottle that\'s been open for 2-3 days immediately goes bad. You can slow this down by using Coravin or possibly a vacuum system.'
            },
            {
              title: 'Reduction',
              content: 'Reduction is the opposite of oxidation. Just like oxidation, this can give a positive or negative result.\n\nThis process is caused by excluding oxygen during wine processing and storage. From harvest onward, work is done in such a way that no oxygen can reach the must or juice. Winemakers use dry ice for this. This works as a protective gas layer over the grapes. A bit of sulfite will also be added upon receipt of the grapes in the winemaking room. This causes yeast cells to produce hydrogen sulfide in addition to alcohol, carbon dioxide, and heat. In the worst case, this can smell like rotten eggs or animal odors. If this occurs, you can first try giving the wine extra air in a decanter. If the smell doesn\'t diminish or bothers you too much, the wine can no longer be saved.'
            },
            {
              title: 'Sulfur',
              content: 'Sulfur is a very complex occurrence in wine. Sulfur dioxide or sulfite (SO2) is added to much wine to stabilize it. This can do no harm and you don\'t notice it in the smell or taste of the wine.\n\nHydrogen sulfide (H2S) is a natural byproduct that occurs during unhealthy fermentation. This too is not harmful to health, but it can cause very unpleasant smells and tastes in wine. The most common sulfur fault is mercaptan, which creates smells like rotten eggs, burnt rubber, and burnt onion or garlic.\n\nYou can soften these unpleasant smells by giving the wine air in a decanter. If it\'s too extremely present, it\'s best to discard the wine.'
            },
            {
              title: 'Vinegar',
              content: 'Sometimes wine can have a very sharp vinegar smell. Sometimes it even smells like acetone. This comes from excessive use of volatile acid. They use this to add extra complexity to the wine. In this process, bacteria oxidize and thus create an acetic acid taste. This is seen as a wine fault. Some people aren\'t bothered by it, others very much so.\n\nHere too you can always try giving the wine extra air in a decanter. If it continues to smell very strongly of vinegar, it\'s best to discard the wine.'
            }
          ]
        }
      },
      fr: {
        title: '5 défauts du vin',
        excerpt: 'Apprenez à reconnaître les défauts de vin les plus courants et ce que vous pouvez faire à leur sujet.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Les 5 défauts de vin les plus courants : TCA, oxydation, réduction, soufre et vinaigre. Apprenez à les reconnaître et les traiter.',
          keywords: ['défauts du vin', 'goût de bouchon', 'oxydation', 'TCA', 'qualité du vin']
        },
        content: {
          intro: 'Si vous aimez boire une bouteille de vin avec votre repas, il y a de nombreux aspects à considérer. Tout d\'abord, il est très important que le vin soit servi à la bonne température. Allez-vous verser le vin dans une carafe pour lui donner plus d\'air ? Ce sont toutes des décisions importantes. Mais il est encore plus important de servir un vin sans défaut. Ci-dessous, je vais vous expliquer les 5 défauts de vin les plus courants et si vous pouvez ou non faire quelque chose à leur sujet.',
          keyTakeaways: {
            'Défauts': '5 plus courants',
            'Reconnaissance': 'Odeur et goût',
            'Causes': 'Diverses sources',
            'Solution': 'Parfois possible',
            'Prévention': 'Bonne conservation'
          },
          sections: [
            {
              title: '2,4,6-Trichloroanisole',
              content: 'Également connu sous le nom de TCA ou goût de bouchon (bouchonné). Ce composé organique est la principale cause d\'odeur et de goût de moisi dans le vin. Souvent reconnu comme du carton mouillé, un chien mouillé ou une cave moisie. Le TCA est formé par des bactéries agissant sur les chlorophénols. Cela se forme lors du traitement des arbres avec des pesticides. Mais aussi lors de l\'utilisation de chlore pour désinfecter et nettoyer les bouchons. Le TCA peut également être présent dans le fût de chêne dans lequel le vin vieillit.\n\nDepuis 1996, le chlore ne peut plus être utilisé pour désinfecter les bouchons. Depuis lors, les fabricants de bouchons utilisent d\'autres produits. Grâce à ces nouvelles méthodes de nettoyage des bouchons, il y a eu une forte diminution du TCA dans le vin.\n\nL\'existence du 2,4,6-trichloroanisole a conduit au développement d\'autres fermetures depuis 1995, telles que les bouchons synthétiques et les capsules à vis. Ce défaut du vin ne peut pas être corrigé. La bouteille doit être jetée immédiatement.'
            },
            {
              title: 'Oxydation',
              content: 'L\'oxydation est le défaut le plus courant dans le vin. Chaque vin s\'oxydera après un certain temps. Mais en raison d\'un stockage incorrect de la bouteille de vin, le processus d\'oxydation s\'accélère. Le vin oxydé se reconnaît à la couleur et au goût.\n\nLe vin blanc est plus sensible à l\'oxydation que le vin rouge, car dans le vin rouge, les tanins fournissent un effet adoucissant. Dans le vin rouge, la couleur passe du rouge à l\'orange-brun. Le goût devient caractéristiquement sec et amer. Dans le vin blanc, la couleur devient jaune foncé à orange et au goût, plus de noix seront perçues.\n\nLorsque vous ouvrez la bouteille de vin, le processus d\'oxydation commence immédiatement. C\'est pourquoi une bouteille de vin ouverte depuis 2-3 jours se détériore immédiatement. Vous pouvez ralentir cela en utilisant Coravin ou éventuellement un système de vide.'
            },
            {
              title: 'Réduction',
              content: 'La réduction est le contraire de l\'oxydation. Tout comme l\'oxydation, cela peut donner un résultat positif ou négatif.\n\nCe processus est causé par l\'exclusion de l\'oxygène pendant le traitement et le stockage du vin. Dès la récolte, le travail est effectué de manière à ce qu\'aucun oxygène ne puisse atteindre le moût ou le jus. Les vignerons utilisent de la glace carbonique pour cela. Cela fonctionne comme une couche de gaz protectrice sur les raisins. Un peu de sulfite sera également ajouté à la réception des raisins dans la salle de vinification. Cela fait que les cellules de levure produisent du sulfure d\'hydrogène en plus de l\'alcool, du dioxyde de carbone et de la chaleur. Dans le pire des cas, cela peut sentir les œufs pourris ou les odeurs animales. Si cela se produit, vous pouvez d\'abord essayer de donner au vin plus d\'air dans une carafe. Si l\'odeur ne diminue pas ou vous dérange trop, le vin ne peut plus être sauvé.'
            },
            {
              title: 'Soufre',
              content: 'Le soufre est une occurrence très complexe dans le vin. Le dioxyde de soufre ou sulfite (SO2) est ajouté à beaucoup de vin pour le stabiliser. Cela ne peut pas faire de mal et vous ne le remarquez pas dans l\'odeur ou le goût du vin.\n\nLe sulfure d\'hydrogène (H2S) est un sous-produit naturel qui se produit lors d\'une fermentation malsaine. Cela aussi n\'est pas nocif pour la santé, mais il peut causer des odeurs et des goûts très désagréables dans le vin. Le défaut de soufre le plus courant est le mercaptan, qui crée des odeurs comme les œufs pourris, le caoutchouc brûlé et l\'oignon ou l\'ail brûlé.\n\nVous pouvez adoucir ces odeurs désagréables en donnant au vin de l\'air dans une carafe. Si c\'est trop extrêmement présent, il vaut mieux jeter le vin.'
            },
            {
              title: 'Vinaigre',
              content: 'Parfois, le vin peut avoir une odeur de vinaigre très forte. Parfois, il sent même l\'acétone. Cela vient de l\'utilisation excessive d\'acide volatil. Ils l\'utilisent pour ajouter une complexité supplémentaire au vin. Dans ce processus, les bactéries s\'oxydent et créent ainsi un goût d\'acide acétique. Ceci est considéré comme un défaut du vin. Certaines personnes ne sont pas dérangées par cela, d\'autres beaucoup.\n\nIci aussi, vous pouvez toujours essayer de donner au vin plus d\'air dans une carafe. S\'il continue à sentir très fortement le vinaigre, il vaut mieux jeter le vin.'
            }
          ]
        }
      }
    },
    relatedPosts: ['de-cyclus-van-een-wijnrank', 'service-van-mousserende-wijn']
  },
  {
    id: '10',
    slug: 'service-van-mousserende-wijn',
    featuredImage: champagneImage,
    date: '2023-02-15',
    category: 'service',
    readTime: 4,
    author: {
      name: 'Yentl Quintelier',
      image: authorImage
    },
    translations: {
      nl: {
        title: 'Service van mousserende wijn',
        excerpt: 'De perfecte service van champagne en mousserende wijn in 17 stappen.',
        author: {
          bio: 'Gediplomeerd sommelier en Sommelier of the Year Belgium 2022. Gepassioneerd door het delen van wijnkennis en het creëren van unieke wijnervaringen.'
        },
        seo: {
          metaDescription: 'Leer de professionele service van champagne en mousserende wijn. Complete handleiding in 17 stappen.',
          keywords: ['champagne service', 'mousserende wijn', 'wijn serveren', 'sommelierservice']
        },
        content: {
          intro: 'Het serveren van mousserende wijn en champagne vereist een specifieke techniek en aandacht voor detail. Van presentatie tot het inschenken, elke stap is belangrijk voor een perfecte service-ervaring. Volg deze professionele handleiding voor een foutloze service.',
          keyTakeaways: {
            'Stappen': '17 service stappen',
            'Materiaal': 'Plateau, ijsemmer, servetten',
            'Techniek': 'Rustig openen zonder lawaai',
            'Temperatuur': 'Goed gekoeld',
            'Volgorde': 'Dames eerst, van jong naar oud'
          },
          sections: [
            {
              title: 'Benodigdheden',
              content: '1. Een plateau\n2. Een ijsemmer met water en ijs\n3. Een proefglas\n4. Twee dienstservetten\n5. Twee broodbordjes'
            },
            {
              title: 'Service stappen',
              content: '1. Gebruik je plateau om het nodige materiaal naar de diensttafel te brengen.\n2. Presenteer de fles duidelijk en zichtbaar bij de klanten.\n3. Plaats de fles op een servet naast de ijsemmer.\n4. Verwijder netjes het lood tot onder de muselet en leg deze op een bordje of in je vestzak.\n5. Verwijder de muselet en plaats deze op een ander broodbordje.\n6. Hou met de ene hand de kurk tegen (met servet) en hou met de andere hand de onderkant van de fles vast (zonder servet).\n7. Hou de fles schuin en verwijder de kurk met draaiende bewegingen met de hand onderaan de fles (zonder lawaai of morsen).\n8. Controleer de kurk terwijl die nog in de servet zit.\n9. Leg de kurk op het bordje bij de muselet.\n10. Reinig de binnenkant en de buitenkant van de hals van de fles.\n11. Proef de wijn voor met je eigen proefglas.\n12. Presenteer de kurk en muselet op een bordje rechts van de gastheer.\n13. Schenk de gastheer uit (zonder het glas in de hand te nemen) en laat de gastheer voorproeven.\n14. Schenk na goedkeuring van de gastheer alle andere tafelgenoten in (zonder het glas in de hand te nemen). Dames eerst en van jong naar oud serveren.\n15. Neem bordje met muselet en kurk weg.\n16. Ontruim je diensttafel en laat de ijsemmer met fles en het bordje met kurk en muselet staan.\n17. Schenk bij, indien nodig.'
            }
          ]
        }
      },
      en: {
        title: 'Sparkling Wine Service',
        excerpt: 'The perfect service of champagne and sparkling wine in 17 steps.',
        author: {
          bio: 'Certified sommelier and Belgium Sommelier of the Year 2022. Passionate about sharing wine knowledge and creating unique wine experiences.'
        },
        seo: {
          metaDescription: 'Learn the professional service of champagne and sparkling wine. Complete guide in 17 steps.',
          keywords: ['champagne service', 'sparkling wine', 'wine service', 'sommelier service']
        },
        content: {
          intro: 'Serving sparkling wine and champagne requires a specific technique and attention to detail. From presentation to pouring, every step is important for a perfect service experience. Follow this professional guide for flawless service.',
          keyTakeaways: {
            'Steps': '17 service steps',
            'Equipment': 'Tray, ice bucket, napkins',
            'Technique': 'Open quietly without noise',
            'Temperature': 'Well chilled',
            'Order': 'Ladies first, young to old'
          },
          sections: [
            {
              title: 'Requirements',
              content: '1. A tray\n2. An ice bucket with water and ice\n3. A tasting glass\n4. Two service napkins\n5. Two bread plates'
            },
            {
              title: 'Service Steps',
              content: '1. Use your tray to bring the necessary materials to the service table.\n2. Present the bottle clearly and visibly to the guests.\n3. Place the bottle on a napkin next to the ice bucket.\n4. Neatly remove the foil to below the muselet and place it on a plate or in your vest pocket.\n5. Remove the muselet and place it on another bread plate.\n6. Hold the cork with one hand (with napkin) and hold the bottom of the bottle with the other hand (without napkin).\n7. Hold the bottle at an angle and remove the cork with twisting movements using the hand at the bottom of the bottle (without noise or spilling).\n8. Check the cork while it\'s still in the napkin.\n9. Place the cork on the plate with the muselet.\n10. Clean the inside and outside of the bottle neck.\n11. Taste the wine first with your own tasting glass.\n12. Present the cork and muselet on a plate to the right of the host.\n13. Pour for the host (without taking the glass in hand) and let the host taste first.\n14. After approval from the host, pour for all other table guests (without taking the glass in hand). Ladies first and serve from young to old.\n15. Remove the plate with muselet and cork.\n16. Clear your service table and leave the ice bucket with bottle and the plate with cork and muselet.\n17. Refill as needed.'
            }
          ]
        }
      },
      fr: {
        title: 'Service du vin mousseux',
        excerpt: 'Le service parfait du champagne et du vin mousseux en 17 étapes.',
        author: {
          bio: 'Sommelier diplômé et Sommelier de l\'Année Belgique 2022. Passionné par le partage de connaissances vinicoles et la création d\'expériences uniques.'
        },
        seo: {
          metaDescription: 'Apprenez le service professionnel du champagne et du vin mousseux. Guide complet en 17 étapes.',
          keywords: ['service champagne', 'vin mousseux', 'service du vin', 'service sommelier']
        },
        content: {
          intro: 'Servir du vin mousseux et du champagne nécessite une technique spécifique et une attention aux détails. De la présentation au service, chaque étape est importante pour une expérience de service parfaite. Suivez ce guide professionnel pour un service impeccable.',
          keyTakeaways: {
            'Étapes': '17 étapes de service',
            'Équipement': 'Plateau, seau à glace, serviettes',
            'Technique': 'Ouvrir tranquillement sans bruit',
            'Température': 'Bien frais',
            'Ordre': 'Dames d\'abord, du jeune au vieux'
          },
          sections: [
            {
              title: 'Nécessaire',
              content: '1. Un plateau\n2. Un seau à glace avec de l\'eau et de la glace\n3. Un verre de dégustation\n4. Deux serviettes de service\n5. Deux assiettes à pain'
            },
            {
              title: 'Étapes du service',
              content: '1. Utilisez votre plateau pour apporter le matériel nécessaire à la table de service.\n2. Présentez la bouteille clairement et visiblement aux clients.\n3. Placez la bouteille sur une serviette à côté du seau à glace.\n4. Retirez soigneusement la coiffe jusqu\'en dessous du muselet et placez-la sur une assiette ou dans votre poche de gilet.\n5. Retirez le muselet et placez-le sur une autre assiette à pain.\n6. Tenez le bouchon d\'une main (avec serviette) et tenez le fond de la bouteille de l\'autre main (sans serviette).\n7. Tenez la bouteille en angle et retirez le bouchon avec des mouvements de rotation avec la main en bas de la bouteille (sans bruit ni renversement).\n8. Vérifiez le bouchon pendant qu\'il est encore dans la serviette.\n9. Placez le bouchon sur l\'assiette avec le muselet.\n10. Nettoyez l\'intérieur et l\'extérieur du col de la bouteille.\n11. Goûtez le vin d\'abord avec votre propre verre de dégustation.\n12. Présentez le bouchon et le muselet sur une assiette à droite de l\'hôte.\n13. Versez pour l\'hôte (sans prendre le verre en main) et laissez l\'hôte goûter d\'abord.\n14. Après approbation de l\'hôte, versez pour tous les autres invités (sans prendre le verre en main). Dames d\'abord et servir du jeune au vieux.\n15. Retirez l\'assiette avec le muselet et le bouchon.\n16. Débarrassez votre table de service et laissez le seau à glace avec la bouteille et l\'assiette avec le bouchon et le muselet.\n17. Remplissez à nouveau si nécessaire.'
            }
          ]
        }
      }
    },
    relatedPosts: ['5-fouten-in-wijn', 'riesling']
  }
];
