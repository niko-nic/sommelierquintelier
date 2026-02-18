import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FeaturedSubscriptionCard } from '@/components/FeaturedSubscriptionCard';
import heroVideoFrame from '@assets/image_1763866864307.png';

const heroVideo = '/hero-video.mp4';

export function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    
    if (video.readyState >= 3) {
      setVideoLoaded(true);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <>
      <Helmet>
        <link rel="preload" as="video" href={heroVideo} type="video/mp4" />
      </Helmet>
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          {/* Video for normal users (default visible) */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroVideoFrame}
            className={`absolute inset-0 w-full h-full object-cover [@media(prefers-reduced-data:reduce)]:hidden transition-opacity duration-300 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-testid="video-hero"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Poster image shown until video is ready */}
          <img
            src={heroVideoFrame}
            alt={t('hero.imageAlt')}
            className={`absolute inset-0 w-full h-full object-cover [@media(prefers-reduced-data:reduce)]:hidden transition-opacity duration-300 ${videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            loading="eager"
            data-testid="img-hero-poster"
          />
        {/* Static image fallback for reduced-data preference (default hidden) */}
        <img
          src={heroVideoFrame}
          alt={t('hero.imageAlt')}
          className="hidden absolute inset-0 w-full h-full object-cover [@media(prefers-reduced-data:reduce)]:block"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
          data-testid="img-hero-fallback"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>
      <motion.div 
        className="relative h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-white/90 mb-6 font-medium">
                {t('hero.title')}
              </p>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 leading-tight font-thin"
              >
                {t('hero.subtitle')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light italic">
                {t('hero.tagline')}
              </p>
              <div>
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="px-8 py-6 text-base uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                  data-testid="button-hero-cta"
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>

            <div className="hidden md:flex justify-center lg:justify-end">
              <FeaturedSubscriptionCard />
            </div>
          </div>
        </div>
      </motion.div>
      </section>
    </>
  );
}
