import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Wine, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HreflangTags } from '@/components/HreflangTags';

import chateauMargauxVideo from '@assets/Elegant_product_photography_202512150335_1765766197123.mp4';

type WineType = 'red' | 'white' | 'rose' | 'champagne' | 'dessert';

interface WineData {
  id: string;
  name: string;
  type: WineType;
  region: string;
  country: string;
  grape: string;
  vintage: number;
  price: number;
  alcohol: string;
  volume: string;
  producer: string;
  featured: boolean;
}

// Using Tailwind-compatible color classes for wine type indicators
const wineColorClasses: Record<WineType, string> = {
  red: 'bg-red-800 dark:bg-red-700',
  white: 'bg-amber-100 dark:bg-amber-200',
  rose: 'bg-pink-300 dark:bg-pink-400',
  champagne: 'bg-yellow-400 dark:bg-yellow-500',
  dessert: 'bg-amber-500 dark:bg-amber-600',
};

const wines: WineData[] = [
  {
    id: 'puligny-montrachet',
    name: 'Domaine Leflaive Puligny-Montrachet',
    type: 'white',
    region: 'Bourgogne',
    country: 'France',
    grape: 'Chardonnay',
    vintage: 2021,
    price: 89,
    alcohol: '13%',
    volume: '750ml',
    producer: 'Domaine Leflaive',
    featured: false,
  },
  {
    id: 'chateau-margaux',
    name: 'Château Margaux 2018',
    type: 'red',
    region: 'Bordeaux',
    country: 'France',
    grape: 'Cabernet Sauvignon, Merlot',
    vintage: 2018,
    price: 450,
    alcohol: '13.5%',
    volume: '750ml',
    producer: 'Château Margaux',
    featured: true,
  },
  {
    id: 'ruinart-blanc-de-blancs',
    name: 'Ruinart Blanc de Blancs',
    type: 'champagne',
    region: 'Champagne',
    country: 'France',
    grape: 'Chardonnay',
    vintage: 0,
    price: 85,
    alcohol: '12.5%',
    volume: '750ml',
    producer: 'Ruinart',
    featured: false,
  },
  {
    id: 'tempier-bandol-rose',
    name: 'Domaine Tempier Bandol Rosé',
    type: 'rose',
    region: 'Provence',
    country: 'France',
    grape: 'Mourvèdre, Grenache, Cinsault',
    vintage: 2023,
    price: 38,
    alcohol: '13%',
    volume: '750ml',
    producer: 'Domaine Tempier',
    featured: false,
  },
  {
    id: 'chateau-dyquem',
    name: "Château d'Yquem 2015",
    type: 'dessert',
    region: 'Sauternes',
    country: 'France',
    grape: 'Sémillon, Sauvignon Blanc',
    vintage: 2015,
    price: 320,
    alcohol: '14%',
    volume: '750ml',
    producer: "Château d'Yquem",
    featured: true,
  },
  {
    id: 'drc-echezeaux',
    name: 'Domaine de la Romanée-Conti Échezeaux',
    type: 'red',
    region: 'Bourgogne',
    country: 'France',
    grape: 'Pinot Noir',
    vintage: 2019,
    price: 1850,
    alcohol: '13%',
    volume: '750ml',
    producer: 'Domaine de la Romanée-Conti',
    featured: true,
  },
];

const wineVideos: Record<string, string> = {
  'chateau-margaux': chateauMargauxVideo,
};

function WineCard({ wine }: { wine: WineData }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const videoSrc = wineVideos[wine.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        tabIndex={0}
        className="group relative overflow-visible hover-elevate cursor-pointer h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid={`card-wine-${wine.id}`}
        role="article"
        aria-label={`${wine.name} - €${wine.price}`}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative overflow-visible">
            <div className="relative aspect-[3/4] bg-muted/30 flex items-center justify-center overflow-hidden rounded-t-md">
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  data-testid={`video-wine-${wine.id}`}
                />
              ) : (
                <Wine className="w-16 h-16 text-muted-foreground/30" aria-hidden="true" />
              )}
              
              <div
                className={`absolute top-4 left-4 w-3 h-3 rounded-full border border-white/20 shadow-sm ${wineColorClasses[wine.type]}`}
                title={t(`shop.filters.${wine.type}`)}
                aria-label={t(`shop.filters.${wine.type}`)}
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                aria-hidden={!isActive}
              >
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{t(`shop.wines.${wine.id}.notes`)}"
                </p>
                <Button size="sm" variant="outline" data-testid={`button-details-${wine.id}`}>
                  {t('shop.viewDetails')}
                </Button>
              </motion.div>
            </div>
            
            {wine.featured && (
              <Badge 
                className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs z-10"
                data-testid={`badge-featured-${wine.id}`}
              >
                {t('shop.sommelierChoice')}
              </Badge>
            )}
          </div>
          
          <div className="p-4 space-y-2 flex-1 flex flex-col">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {wine.producer}
            </p>
            <h3 className="font-serif text-lg leading-tight line-clamp-2" data-testid={`text-wine-name-${wine.id}`}>
              {wine.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {wine.region}, {wine.country}
            </p>
            <div className="flex items-center justify-between gap-2 pt-2 mt-auto">
              <div className="text-xs text-muted-foreground">
                {wine.vintage > 0 && <span>{wine.vintage} · </span>}
                <span>{wine.volume}</span>
              </div>
              <p className="font-serif text-xl text-primary" data-testid={`text-price-${wine.id}`}>
                €{wine.price.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Shop() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions: { key: string; value: string }[] = [
    { key: 'all', value: t('shop.filters.all') },
    { key: 'red', value: t('shop.filters.red') },
    { key: 'white', value: t('shop.filters.white') },
    { key: 'rose', value: t('shop.filters.rose') },
    { key: 'champagne', value: t('shop.filters.champagne') },
    { key: 'dessert', value: t('shop.filters.dessert') },
  ];

  const filteredWines = activeFilter === 'all'
    ? wines
    : wines.filter(wine => wine.type === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('shop.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('shop.subtitle')} />
        <meta property="og:title" content={`${t('shop.title')} | Sommelier Quintelier`} />
        <meta property="og:description" content={t('shop.subtitle')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/shop" />
        <link rel="canonical" href="https://sommelierquintelier.com/shop" />
      </Helmet>
      <HreflangTags path="/shop" />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Breadcrumbs items={[{ label: t('shop.title') }]} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12 p-6 border border-primary/30 bg-primary/5 rounded-md"
                data-testid="banner-coming-soon"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="font-serif text-lg text-primary" data-testid="text-coming-soon-title">
                    {t('shop.comingSoon')}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm" data-testid="text-coming-soon-description">
                  {t('shop.comingSoonText')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
                  {t('shop.title')}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6" data-testid="text-shop-title">
                  {t('shop.subtitle')}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
              >
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.key}
                    variant={activeFilter === filter.key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveFilter(filter.key)}
                    className="toggle-elevate"
                    data-testid={`button-filter-${filter.key}`}
                  >
                    {filter.value}
                  </Button>
                ))}
              </motion.div>

              {filteredWines.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filteredWines.map((wine) => (
                    <Link key={wine.id} href={`/shop/${wine.id}`} className="h-full">
                      <WineCard wine={wine} />
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Wine className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground" data-testid="text-no-wines">
                    {t('shop.noWinesFound')}
                  </p>
                </motion.div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
