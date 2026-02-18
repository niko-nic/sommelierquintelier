import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Facebook, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import logoImage from '@assets/Sommelier.Quintelier-256px.png';
import saLogo from '@assets/SA-logo-transparant_1761771335359.png';

export function Footer() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [contentOpen, setContentOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      const response = await apiRequest('POST', '/api/newsletter', {
        email: emailAddress,
        language: i18n.language,
      });
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: t('newsletter.success.title'),
        description: t('newsletter.success.message'),
      });
      setEmail('');
    },
    onError: async (error: any) => {
      let isAlreadySubscribed = false;
      if (error instanceof Response && error.status === 409) {
        isAlreadySubscribed = true;
      }
      toast({
        title: t('newsletter.error.title'),
        description: isAlreadySubscribed 
          ? t('newsletter.error.alreadySubscribed')
          : t('newsletter.error.message'),
        variant: 'destructive',
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      mutation.mutate(email);
    }
  };

  return (
    <footer className="text-white border-t border-white/10 bg-[#c7b79e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Brand and Social - Always visible */}
        <div className="text-center mb-8">
          <img 
            src={logoImage} 
            alt="Sommelier.quintelier"
            width="256"
            height="256"
            loading="lazy"
            decoding="async"
            className="h-16 sm:h-20 w-auto mb-4 brightness-0 invert mx-auto"
            data-testid="img-footer-logo"
          />
          <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-md mx-auto whitespace-pre-line">
            {t('footer.brandDescription')}
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary text-white hover:bg-white/10 rounded-none"
              data-testid="button-footer-instagram"
              asChild
            >
              <a 
                href="https://www.instagram.com/sommelier.quintelier/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary text-white hover:bg-white/10 rounded-none"
              data-testid="button-footer-linkedin"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/yentl-quintelier/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary text-white hover:bg-white/10 rounded-none"
              data-testid="button-footer-facebook"
              asChild
            >
              <a 
                href="https://www.facebook.com/yentl.quintelier" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile: Collapsible Sections, Desktop: Grid Layout */}
        <div className="border-t border-white/10 pt-8">
          {/* Mobile Collapsible Layout */}
          <div className="lg:hidden space-y-1">
            {/* Content Section */}
            <Collapsible open={contentOpen} onOpenChange={setContentOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between py-4 text-left border-b border-white/10">
                <span className="text-base font-medium">{t('footer.contentTitle')}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${contentOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-4">
                <ul className="space-y-3 pt-4 text-white/70 text-sm">
                  <li><a href="/" className="block hover:text-white transition-colors" data-testid="link-footer-home">{t('footer.home')}</a></li>
                  <li><a href="/about" className="block hover:text-white transition-colors" data-testid="link-footer-about">{t('footer.about')}</a></li>
                  <li><a href="/blog" className="block hover:text-white transition-colors" data-testid="link-footer-blog">{t('footer.blog')}</a></li>
                  <li><a href="/gallery" className="block hover:text-white transition-colors" data-testid="link-footer-gallery">{t('footer.gallery')}</a></li>
                  <li><a href="/contact" className="block hover:text-white transition-colors" data-testid="link-footer-contact-page">{t('footer.contactPage')}</a></li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            {/* Services Section */}
            <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between py-4 text-left border-b border-white/10">
                <span className="text-base font-medium">{t('footer.servicesTitle')}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-4">
                <ul className="space-y-3 pt-4 text-white/70 text-sm">
                  <li><a href="/services/wine-consultancy" className="block hover:text-white transition-colors" data-testid="link-footer-consultancy">{t('footer.consultancy')}</a></li>
                  <li><a href="/services/wine-tastings" className="block hover:text-white transition-colors" data-testid="link-footer-tastings">{t('footer.tastings')}</a></li>
                  <li><a href="/services/private-sommelier" className="block hover:text-white transition-colors" data-testid="link-footer-private">{t('footer.private')}</a></li>
                  <li><a href="/services/custom-wine-list" className="block hover:text-white transition-colors" data-testid="link-footer-menu">{t('footer.menu')}</a></li>
                  <li><a href="/services/wine-cellar-management" className="block hover:text-white transition-colors" data-testid="link-footer-cellar">{t('footer.cellar')}</a></li>
                  <li><a href="/subscriptions" className="block hover:text-white transition-colors" data-testid="link-footer-subscriptions">{t('footer.subscriptions')}</a></li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            {/* Contact Section */}
            <Collapsible open={contactOpen} onOpenChange={setContactOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between py-4 text-left border-b border-white/10">
                <span className="text-base font-medium">{t('footer.contactTitle')}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${contactOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pb-4">
                <ul className="space-y-3 pt-4 text-white/70 text-sm">
                  <li>
                    <a 
                      href="mailto:info@yentlquintelier.com" 
                      className="block hover:text-white transition-colors"
                      data-testid="link-footer-email"
                    >
                      {t('footer.email')}
                    </a>
                  </li>
                  <li data-testid="text-footer-location">{t('footer.locationText')}</li>
                  <li data-testid="text-footer-vat">BTW: BE1025083231</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            {/* Newsletter Section - Mobile */}
            <div className="py-6 border-b border-white/10">
              <h3 className="text-base font-medium mb-3">{t('footer.newsletterTitle')}</h3>
              <p className="text-white/70 text-sm mb-4">{t('footer.newsletterDescription')}</p>
              
              {/* NL Form - Mobile */}
              <form 
                id="footer-newsletter-form-mobile-nl"
                onSubmit={handleNewsletterSubmit} 
                className="space-y-3" 
                data-testid="form-newsletter-mobile"
                data-language="nl"
                style={{ display: i18n.language === 'nl' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="nl" />
                <input type="hidden" name="form_type" value="footer_newsletter_mobile" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email-mobile"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit-mobile"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
              
              {/* EN Form - Mobile */}
              <form 
                id="footer-newsletter-form-mobile-en"
                onSubmit={handleNewsletterSubmit} 
                className="space-y-3" 
                data-testid="form-newsletter-mobile"
                data-language="en"
                style={{ display: i18n.language === 'en' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="en" />
                <input type="hidden" name="form_type" value="footer_newsletter_mobile" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email-mobile"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit-mobile"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
              
              {/* FR Form - Mobile */}
              <form 
                id="footer-newsletter-form-mobile-fr"
                onSubmit={handleNewsletterSubmit} 
                className="space-y-3" 
                data-testid="form-newsletter-mobile"
                data-language="fr"
                style={{ display: i18n.language === 'fr' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="fr" />
                <input type="hidden" name="form_type" value="footer_newsletter_mobile" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email-mobile"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit-mobile"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-12">
            {/* Content Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.contentTitle')}</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="/" className="hover:text-white transition-colors" data-testid="link-footer-home">{t('footer.home')}</a></li>
                <li><a href="/about" className="hover:text-white transition-colors" data-testid="link-footer-about">{t('footer.about')}</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors" data-testid="link-footer-blog">{t('footer.blog')}</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors" data-testid="link-footer-gallery">{t('footer.gallery')}</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact-page">{t('footer.contactPage')}</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.servicesTitle')}</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="/services/wine-consultancy" className="hover:text-white transition-colors" data-testid="link-footer-consultancy">{t('footer.consultancy')}</a></li>
                <li><a href="/services/wine-tastings" className="hover:text-white transition-colors" data-testid="link-footer-tastings">{t('footer.tastings')}</a></li>
                <li><a href="/services/private-sommelier" className="hover:text-white transition-colors" data-testid="link-footer-private">{t('footer.private')}</a></li>
                <li><a href="/services/custom-wine-list" className="hover:text-white transition-colors" data-testid="link-footer-menu">{t('footer.menu')}</a></li>
                <li><a href="/services/wine-cellar-management" className="hover:text-white transition-colors" data-testid="link-footer-cellar">{t('footer.cellar')}</a></li>
                <li><a href="/subscriptions" className="hover:text-white transition-colors" data-testid="link-footer-subscriptions">{t('footer.subscriptions')}</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.contactTitle')}</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a 
                    href="mailto:info@yentlquintelier.com" 
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-email"
                  >
                    {t('footer.email')}
                  </a>
                </li>
                <li data-testid="text-footer-location">{t('footer.locationText')}</li>
                <li data-testid="text-footer-vat">BTW: BE1025083231</li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">{t('footer.newsletterTitle')}</h3>
              <p className="text-white/70 text-sm mb-4">{t('footer.newsletterDescription')}</p>
              
              {/* NL Form */}
              <form 
                id="footer-newsletter-form-nl"
                onSubmit={handleNewsletterSubmit} 
                className="footer-newsletter-form-nl space-y-3" 
                data-testid="form-newsletter"
                data-language="nl"
                style={{ display: i18n.language === 'nl' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="nl" />
                <input type="hidden" name="form_type" value="footer_newsletter" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
              
              {/* EN Form */}
              <form 
                id="footer-newsletter-form-en"
                onSubmit={handleNewsletterSubmit} 
                className="footer-newsletter-form-en space-y-3" 
                data-testid="form-newsletter"
                data-language="en"
                style={{ display: i18n.language === 'en' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="en" />
                <input type="hidden" name="form_type" value="footer_newsletter" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
              
              {/* FR Form */}
              <form 
                id="footer-newsletter-form-fr"
                onSubmit={handleNewsletterSubmit} 
                className="footer-newsletter-form-fr space-y-3" 
                data-testid="form-newsletter"
                data-language="fr"
                style={{ display: i18n.language === 'fr' ? 'block' : 'none' }}
              >
                <input type="hidden" name="form_language" value="fr" />
                <input type="hidden" name="form_type" value="footer_newsletter" />
                <Input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-[#c7b79e]"
                  data-testid="button-newsletter-submit"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('newsletter.subscribing') : t('footer.subscribe')}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/60 mb-3" data-testid="text-footer-copyright">
            © {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/50 mb-4">
            <a href="/privacy" className="hover:text-white transition-colors" data-testid="link-footer-privacy">{t('footer.privacy')}</a>
            <a href="/terms" className="hover:text-white transition-colors" data-testid="link-footer-terms">{t('footer.terms')}</a>
            <a href="/cookies" className="hover:text-white transition-colors" data-testid="link-footer-cookies">{t('footer.cookies')}</a>
            <a href="/cancel-subscription" className="hover:text-white transition-colors" data-testid="link-footer-cancel">{t('footer.cancelSubscription')}</a>
          </div>
          <div className="text-xs text-white/40">
            <a 
              href="https://saerensadvertising.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white/60 transition-colors group"
              data-testid="link-footer-saerens"
            >
              <img 
                src={saLogo} 
                alt="Saerens Advertising Logo" 
                className="h-3.5 w-3.5 opacity-40 group-hover:opacity-60 transition-opacity"
              />
              <span>Saerens Agency</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
