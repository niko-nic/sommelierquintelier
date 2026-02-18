import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import logoImage from '@assets/Sommelier.Quintelier-256px.png';

export function Header() {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services', hasSubmenu: true },
    { name: t('services.subscription.title'), mobileName: t('services.subscription.shortTitle'), href: '/subscriptions' },
    // Shop tijdelijk gedeactiveerd - wordt later opnieuw geactiveerd na fine-tuning
    // { name: t('shop.title'), href: '/shop' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const servicesItems = [
    { name: t('services.consultancy.title'), href: '/services/wine-consultancy' },
    { name: t('services.tasting.title'), href: '/services/wine-tastings' },
    { name: t('services.private.title'), href: '/services/private-sommelier' },
    { name: t('services.menu.title'), href: '/services/custom-wine-list' },
    { name: t('services.cellar.title'), mobileName: t('services.cellar.shortTitle'), href: '/services/wine-cellar-management' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Hide/show header on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <ScrollProgressBar />
      
      {/* Fullscreen Mobile Menu Overlay - MUST be outside header for proper z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] md:hidden bg-background/80 backdrop-blur-2xl"
            data-testid="mobile-menu-overlay"
          >
            {/* Close button */}
            <div className="absolute top-6 right-6 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="h-12 w-12 hover-elevate"
                data-testid="button-close-menu"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>

            {/* Navigation */}
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full w-full px-6 space-y-10"
            >
              {navigation.map((item, index) => (
                item.hasSubmenu ? (
                  <div key={item.href} className="flex flex-col items-center space-y-4 w-full">
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`text-3xl font-medium uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${
                        location === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services-menu"
                    >
                      {item.name}
                      <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="mobile-services-menu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center space-y-3 overflow-hidden"
                          role="menu"
                          aria-label="Services submenu"
                        >
                          {servicesItems.map((service, serviceIndex) => (
                            <motion.div
                              key={service.name}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: serviceIndex * 0.05, duration: 0.3 }}
                            >
                              <Link
                                href={service.href}
                                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setServicesOpen(false);
                                }}
                                data-testid={`mobile-submenu-${service.name.toLowerCase()}`}
                              >
                                {service.mobileName || service.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-3xl font-medium uppercase tracking-[0.2em] transition-colors ${
                        location === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.mobileName || item.name}
                    </Link>
                  </motion.div>
                )
              ))}

              {/* Language Selector at Bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pt-12 flex gap-6 border-t border-border/20 mt-8 pt-8"
              >
                <button
                  onClick={() => {
                    changeLanguage('nl');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xl font-medium uppercase tracking-[0.2em] transition-colors ${
                    i18n.language === 'nl' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-language-nl"
                >
                  NL
                </button>
                <span className="text-xl text-muted-foreground/40">|</span>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xl font-medium uppercase tracking-[0.2em] transition-colors ${
                    i18n.language === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-language-en"
                >
                  EN
                </button>
                <span className="text-xl text-muted-foreground/40">|</span>
                <button
                  onClick={() => {
                    changeLanguage('fr');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xl font-medium uppercase tracking-[0.2em] transition-colors ${
                    i18n.language === 'fr' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-language-fr"
                >
                  FR
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <header 
        className={`fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <AnnouncementBar />
        <div className="container mx-auto px-6 lg:px-8 border-b relative">
          <div className="flex h-20 items-center justify-center md:justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <img 
                src={logoImage} 
                alt="Sommelier.quintelier"
                width="256"
                height="256"
                loading="eager"
                decoding="async"
                className="h-16 md:h-12 w-auto transition-all duration-500 ease-out animate-in fade-in slide-in-from-left-4 group-hover:scale-105 group-hover:brightness-110"
                style={{ filter: 'invert(1) sepia(1) saturate(0.8) hue-rotate(340deg) brightness(0.4)' }}
                data-testid="img-logo"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.hasSubmenu ? (
                  <DropdownMenu key={item.href} modal={false}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary flex items-center gap-1 ${
                          location === item.href ? 'text-primary' : 'text-muted-foreground'
                        }`}
                        data-testid={`link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-72 p-2 bg-background/90 backdrop-blur-xl border border-border/50 shadow-2xl"
                    >
                      {servicesItems.map((service, index) => (
                        <DropdownMenuItem 
                          key={service.name} 
                          asChild
                          className="py-3 px-4 rounded-md cursor-pointer hover-elevate active-elevate-2"
                        >
                          <Link 
                            href={service.href} 
                            className="flex items-center gap-3 text-base font-medium transition-colors" 
                            data-testid={`submenu-${service.name.toLowerCase()}`}
                          >
                            <span className="text-primary text-xl">•</span>
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary ${
                      location === item.href ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            <div className="flex items-center space-x-4 absolute right-6 md:relative md:right-auto">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:inline-flex" data-testid="button-language">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end"
                  className="w-48 p-2 bg-background/90 backdrop-blur-xl border border-border/50 shadow-2xl"
                >
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('nl')} 
                    data-testid="language-nl"
                    className="py-3 px-4 rounded-md cursor-pointer hover-elevate active-elevate-2 flex items-center gap-3"
                  >
                    <span className={`text-lg ${i18n.language === 'nl' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {i18n.language === 'nl' ? '●' : '○'}
                    </span>
                    <span className="text-base font-medium">Nederlands</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('en')} 
                    data-testid="language-en"
                    className="py-3 px-4 rounded-md cursor-pointer hover-elevate active-elevate-2 flex items-center gap-3"
                  >
                    <span className={`text-lg ${i18n.language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {i18n.language === 'en' ? '●' : '○'}
                    </span>
                    <span className="text-base font-medium">English</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => changeLanguage('fr')} 
                    data-testid="language-fr"
                    className="py-3 px-4 rounded-md cursor-pointer hover-elevate active-elevate-2 flex items-center gap-3"
                  >
                    <span className={`text-lg ${i18n.language === 'fr' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {i18n.language === 'fr' ? '●' : '○'}
                    </span>
                    <span className="text-base font-medium">Français</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
