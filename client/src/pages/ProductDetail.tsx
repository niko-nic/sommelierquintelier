import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ArrowLeft, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HreflangTags } from '@/components/HreflangTags';

import mainImage from '@assets/Elegant_product_photography_202512150320_1765765275267.jpeg';
import thumb1 from '@assets/Elegant_product_photography_202512150320_(1)_1765765273378.jpeg';
import thumb2 from '@assets/Elegant_lifestyle_photography_202512150320_1765765269472.jpeg';
import thumb3 from '@assets/Extreme_closeup_macro_202512150320_1765765271367.jpeg';
import thumb4 from '@assets/Atmospheric_photography_of_202512150320_1765765267236.jpeg';

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

const wineColorClasses: Record<WineType, string> = {
  red: 'bg-red-800 dark:bg-red-700',
  white: 'bg-amber-100 dark:bg-amber-200',
  rose: 'bg-pink-300 dark:bg-pink-400',
  champagne: 'bg-yellow-400 dark:bg-yellow-500',
  dessert: 'bg-amber-500 dark:bg-amber-600',
};

const wineData: Record<string, WineData> = {
  'chateau-margaux': {
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
};

const productImages = [mainImage, thumb1, thumb2, thumb3, thumb4];

export default function ProductDetail() {
  const { t } = useTranslation();
  const params = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const wine = wineData[params.productId || ''];

  if (!wine) {
    return (
      <>
        <Header />
        <main className="flex-1 bg-background min-h-screen">
          <section className="py-20 lg:py-32 px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl text-center">
              <Wine className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
              <h1 className="text-3xl font-serif mb-4" data-testid="text-product-not-found">
                {t('productDetail.productNotFound')}
              </h1>
              <Button variant="outline" asChild data-testid="button-back-to-shop">
                <Link href="/shop">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('productDetail.backToShop')}
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{wine.name} | Sommelier Quintelier</title>
        <meta name="description" content={t(`shop.wines.${wine.id}.notes`)} />
        <meta property="og:title" content={`${wine.name} | Sommelier Quintelier`} />
        <meta property="og:description" content={t(`shop.wines.${wine.id}.notes`)} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://sommelierquintelier.com/shop/${wine.id}`} />
        <link rel="canonical" href={`https://sommelierquintelier.com/shop/${wine.id}`} />
      </Helmet>
      <HreflangTags path={`/shop/${wine.id}`} />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <section className="py-12 lg:py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 mt-[38px] mb-[38px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Breadcrumbs 
                  items={[
                    { label: t('shop.title'), href: '/shop' },
                    { label: wine.name }
                  ]} 
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <Button variant="ghost" size="sm" asChild data-testid="button-back-to-shop">
                  <Link href="/shop">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('productDetail.backToShop')}
                  </Link>
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={productImages[selectedImage]}
                        alt={wine.name}
                        className="w-full h-full object-cover"
                        data-testid="img-main-product"
                      />
                    </div>
                  </Card>

                  <div className="grid grid-cols-5 gap-3">
                    {productImages.map((img, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                          selectedImage === index 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-transparent hover:border-muted-foreground/30'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        data-testid={`button-thumbnail-${index}`}
                      >
                        <img
                          src={img}
                          alt={`${wine.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border border-white/20 shadow-sm mt-2 flex-shrink-0 ${wineColorClasses[wine.type]}`}
                      title={t(`shop.filters.${wine.type}`)}
                      aria-label={t(`shop.filters.${wine.type}`)}
                    />
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        {wine.producer}
                      </p>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4" data-testid="text-wine-name">
                        {wine.name}
                      </h1>
                    </div>
                  </div>

                  {wine.featured && (
                    <Badge className="bg-primary text-primary-foreground" data-testid="badge-sommelier-choice">
                      {t('shop.sommelierChoice')}
                    </Badge>
                  )}

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif text-primary" data-testid="text-price">
                      €{wine.price.toLocaleString()}
                    </span>
                  </div>

                  <Card className="p-6">
                    <h2 className="text-lg font-serif mb-3" data-testid="text-sommelier-notes-title">
                      {t('productDetail.sommelierNotes')}
                    </h2>
                    <p className="text-muted-foreground italic leading-relaxed" data-testid="text-sommelier-notes">
                      "{t(`shop.wines.${wine.id}.notes`)}"
                    </p>
                  </Card>

                  <Card className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.region')}
                        </p>
                        <p className="font-medium" data-testid="text-region">{wine.region}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.country')}
                        </p>
                        <p className="font-medium" data-testid="text-country">{wine.country}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.grape')}
                        </p>
                        <p className="font-medium" data-testid="text-grape">{wine.grape}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.vintage')}
                        </p>
                        <p className="font-medium" data-testid="text-vintage">{wine.vintage}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.alcohol')}
                        </p>
                        <p className="font-medium" data-testid="text-alcohol">{wine.alcohol}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {t('productDetail.volume')}
                        </p>
                        <p className="font-medium" data-testid="text-volume">{wine.volume}</p>
                      </div>
                    </div>
                  </Card>

                  <Button size="lg" className="w-full" data-testid="button-add-to-cart">
                    {t('productDetail.addToCart')}
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
