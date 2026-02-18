import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { HreflangTags } from '@/components/HreflangTags';
import { Sparkles } from 'lucide-react';

import pommardImage from '@assets/Domaine Comte Armand Pommard Clos Des Epeneaux Monopole 2017_1763865107069.webp?url';
import rousseauImage from '@assets/Domaine Armand Rousseau Clos De Le Roche 1996_1763865149398.webp?url';
import agrapartImage from '@assets/Champagne Agrapart_1763865216547.webp?url';
import vouvrayImage from '@assets/Domaine Huet Vouvray Le Mont 1995_1763865246106.webp?url';
import bollingerSignImage from '@assets/Champagne Bollinger Ontvangst_1763865263635.webp?url';
import collectionCabinetImage from '@assets/Collectie Exclusieve Wijnen_1763865280719.webp?url';
import yquemImage from '@assets/6L Château d\'Yquem Sauternes 1987_1763865295707.webp?url';
import clicquotCorkImage from '@assets/Kurk La Grand Dame Veuve Clicquot_1763865312624.webp?url';
import bollingerBarrelImage from '@assets/Eiken Vat Vieilles Vignes Françaises Champagne Bollinger_1763865326758.webp?url';
import ayalaImage from '@assets/Champagne Ayala_1763865341766.webp?url';
import certanImage from '@assets/6L Vieux Château Certan Pomerol 2007 (1)_1763865357525.webp?url';
import awardDecanterImage from '@assets/Prijs Sommelier Of The Year 2022_1763865377728.webp?url';
import loireVineyardImage from '@assets/Wijngaard Anjou _ Loire _ Frankrijk_1763865400050.webp?url';
import cellarBarrelsImage from '@assets/Wijnvaten In Kelder_1763865432295.webp?url';
import krugImage from '@assets/Champagne Krug Blanc De Blancs Clos Du Mesnil 2000_1763944930753.webp?url';
import jancisRobinsonImage from '@assets/Wine Jancis Robinson_1763944933527.webp?url';
import rousseau2016Image from '@assets/Domaine Armand Rousseau Clos De La Roche Grand Cru 2016_1763944935949.webp?url';
import tastingAtmosphereImage from '@assets/Sfeerbeeld (1)_1763944939292.webp?url';
import whiskyCollectionImage from '@assets/Exclusieve Whisky_1763944941991.webp?url';
import paillardCorksImage from '@assets/Kurk Champagne Bruno Paillard_1763944944883.webp?url';
import remuageCellarImage from '@assets/Remuage Champagne Kelder_1763944947049.webp?url';
import concreteEggsImage from '@assets/Betonneieren_1763944949471.webp?url';
import amphorasImage from '@assets/Amfora\'s_1763944951870.webp?url';

interface GalleryImage {
  id: number;
  src: string;
  altKey: string;
  categoryKey: string;
}

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set([1, 2, 3, 4, 5, 6]));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const galleryImages: GalleryImage[] = [
    { id: 1, src: pommardImage, altKey: 'pommard', categoryKey: 'premium' },
    { id: 2, src: rousseauImage, altKey: 'rousseau', categoryKey: 'vintage' },
    { id: 3, src: agrapartImage, altKey: 'agrapart', categoryKey: 'champagne' },
    { id: 4, src: vouvrayImage, altKey: 'vouvray', categoryKey: 'vintage' },
    { id: 5, src: bollingerSignImage, altKey: 'bollingerSign', categoryKey: 'champagne' },
    { id: 6, src: collectionCabinetImage, altKey: 'collection', categoryKey: 'premium' },
    { id: 7, src: yquemImage, altKey: 'yquem', categoryKey: 'dessert' },
    { id: 8, src: clicquotCorkImage, altKey: 'clicquotCork', categoryKey: 'champagne' },
    { id: 9, src: bollingerBarrelImage, altKey: 'bollingerBarrel', categoryKey: 'champagne' },
    { id: 10, src: ayalaImage, altKey: 'ayala', categoryKey: 'champagne' },
    { id: 11, src: certanImage, altKey: 'certan', categoryKey: 'premium' },
    { id: 12, src: awardDecanterImage, altKey: 'award', categoryKey: 'awards' },
    { id: 13, src: loireVineyardImage, altKey: 'loireVineyard', categoryKey: 'vineyards' },
    { id: 14, src: cellarBarrelsImage, altKey: 'cellarBarrels', categoryKey: 'cellar' },
    { id: 15, src: krugImage, altKey: 'krug', categoryKey: 'champagne' },
    { id: 16, src: jancisRobinsonImage, altKey: 'jancisRobinson', categoryKey: 'education' },
    { id: 17, src: rousseau2016Image, altKey: 'rousseau2016', categoryKey: 'vintage' },
    { id: 18, src: tastingAtmosphereImage, altKey: 'tastingAtmosphere', categoryKey: 'tasting' },
    { id: 19, src: whiskyCollectionImage, altKey: 'whiskyCollection', categoryKey: 'spirits' },
    { id: 20, src: paillardCorksImage, altKey: 'paillardCorks', categoryKey: 'champagne' },
    { id: 21, src: remuageCellarImage, altKey: 'remuageCellar', categoryKey: 'cellar' },
    { id: 22, src: concreteEggsImage, altKey: 'concreteEggs', categoryKey: 'cellar' },
    { id: 23, src: amphorasImage, altKey: 'amphoras', categoryKey: 'cellar' },
  ];

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(imageId);
      return newSet;
    });
    const element = imageRefs.current.get(imageId);
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = parseInt(entry.target.getAttribute('data-image-id') || '0');
            if (imageId) {
              setVisibleImages(prev => {
                const newSet = new Set(prev);
                newSet.add(imageId);
                return newSet;
              });
            }
          }
        });
      },
      {
        rootMargin: '200px',
      }
    );

    imageRefs.current.forEach((element, imageId) => {
      if (element && !visibleImages.has(imageId)) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const imageRef = (element: HTMLDivElement | null, imageId: number) => {
    if (element) {
      imageRefs.current.set(imageId, element);
      if (observerRef.current && !visibleImages.has(imageId)) {
        observerRef.current.observe(element);
      }
    } else {
      imageRefs.current.delete(imageId);
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const currentImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('gallery.title')} - Sommelier.quintelier</title>
        <meta name="description" content={t('gallery.subtitle')} />
        <meta property="og:title" content={`${t('gallery.title')} - Sommelier.quintelier`} />
        <meta property="og:description" content={t('gallery.subtitle')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/gallery" />
        <meta property="og:image" content={pommardImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="canonical" href="https://sommelierquintelier.com/gallery" />
      </Helmet>
      <HreflangTags path="/gallery" />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: t('breadcrumbs.gallery') }]} />
            </motion.div>
            
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-serif mb-6"
                variants={fadeInUp}
              >
                {t('gallery.title')}
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-4 my-8"
                variants={fadeInUp}
              >
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-4 h-4 text-primary/50" />
                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                {t('gallery.subtitle')}
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  ref={(el) => imageRef(el, image.id)}
                  data-image-id={image.id}
                  className="group relative aspect-[4/3] cursor-pointer active-elevate-2 overflow-hidden shadow-lg transition-all duration-500"
                  onClick={() => openLightbox(image.id)}
                  data-testid={`gallery-image-${image.id}`}
                  variants={cardVariants}
                >
                  {!loadedImages.has(image.id) && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-none skeleton-shimmer" />
                  )}
                  
                  {visibleImages.has(image.id) && (
                    <img
                      src={image.src}
                      alt={t(`gallery.images.${image.altKey}`)}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90 ${
                        loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      decoding="async"
                      onLoad={() => handleImageLoad(image.id)}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Badge 
                        variant="secondary" 
                        className="mb-3 bg-white/20 text-white backdrop-blur-sm border-white/30 no-default-hover-elevate"
                      >
                        {t(`gallery.categories.${image.categoryKey}`)}
                      </Badge>
                      <p className="text-white text-base font-medium leading-relaxed">
                        {t(`gallery.images.${image.altKey}`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl"
            onClick={closeLightbox}
            data-testid="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentImage && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={currentImage.src}
                  alt={t(`gallery.images.${currentImage.altKey}`)}
                  className="max-w-full max-h-full object-contain shadow-2xl cursor-zoom-out"
                  onClick={(e) => e.stopPropagation()}
                  decoding="async"
                  data-testid="img-lightbox-current"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
