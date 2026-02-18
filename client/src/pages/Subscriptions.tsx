import { useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle, Wine, Package, Truck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SubscriptionProductSchema } from '@/components/seo/SubscriptionProductSchema';
import { HreflangTags } from '@/components/HreflangTags';

const CheckoutModal = lazy(() => import('@/components/checkout/CheckoutModal'));
const CustomPackageModal = lazy(() => import('@/components/checkout/CustomPackageModal'));

export default function Subscriptions() {
  const { t } = useTranslation();
  const [checkoutData, setCheckoutData] = useState<{
    isOpen: boolean;
    tier: string;
    tierName: string;
    bottles: number;
    amount: number;
    extras: string[];
  }>({
    isOpen: false,
    tier: '',
    tierName: '',
    bottles: 3,
    amount: 0,
    extras: [],
  });

  const [customPackageModalOpen, setCustomPackageModalOpen] = useState(false);

  const [selectedExtras, setSelectedExtras] = useState<Record<string, string[]>>({
    selection: [],
    cuvee: [],
    prestige: [],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const tiers = [
    {
      key: 'selection',
      popular: false,
      icon: Wine,
    },
    {
      key: 'cuvee',
      popular: true,
      icon: Package,
    },
    {
      key: 'prestige',
      popular: false,
      icon: Heart,
    },
    {
      key: 'champagne',
      popular: false,
      icon: Wine,
    },
    {
      key: 'custom',
      popular: false,
      icon: Package,
    },
  ];

  const handleSubscribe = (tierKey: string, bottles: number) => {
    if (tierKey === 'custom') {
      setCustomPackageModalOpen(true);
      return;
    }

    const tierName = t(`services.subscription.tiers.${tierKey}.name`);
    const extras = selectedExtras[tierKey] || [];

    setCheckoutData({
      isOpen: true,
      tier: tierKey,
      tierName,
      bottles,
      amount: 0,
      extras,
    });
  };

  const toggleExtra = (tierKey: string, extraType: string) => {
    setSelectedExtras(prev => {
      const current = prev[tierKey] || [];
      const isSelected = current.includes(extraType);
      
      return {
        ...prev,
        [tierKey]: isSelected 
          ? current.filter(e => e !== extraType)
          : [...current, extraType]
      };
    });
  };

  const handleCloseCheckout = () => {
    setCheckoutData({
      isOpen: false,
      tier: '',
      tierName: '',
      bottles: 3,
      amount: 0,
      extras: [],
    });
  };

  const steps = [
    {
      icon: Package,
      titleKey: 'services.subscription.step1Title',
      descKey: 'services.subscription.step1Description',
    },
    {
      icon: Truck,
      titleKey: 'services.subscription.step2Title',
      descKey: 'services.subscription.step2Description',
    },
    {
      icon: Wine,
      titleKey: 'services.subscription.step3Title',
      descKey: 'services.subscription.step3Description',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('services.subscription.title')} | Sommelier Quintelier</title>
        <meta name="description" content={t('services.subscription.description')} />
        <meta property="og:title" content={`${t('services.subscription.title')} | Sommelier Quintelier`} />
        <meta property="og:description" content={t('services.subscription.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sommelierquintelier.com/subscriptions" />
        <link rel="canonical" href="https://sommelierquintelier.com/subscriptions" />
      </Helmet>
      <HreflangTags path="/subscriptions" />
      <SubscriptionProductSchema />

      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="min-h-screen bg-background">
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Breadcrumbs items={[{ label: t('services.subscription.title') }]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 lg:mb-24"
            >
              <p
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
                data-testid="text-subscription-label"
              >
                {t('services.subscription.title')}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
                data-testid="text-subscription-title"
              >
                {t('services.subscription.description')}
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light"
                data-testid="text-subscription-subtitle"
              >
                {t('services.subscription.subtitle')}
              </p>
            </motion.div>

            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20 lg:mb-32"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-serif text-center mb-12"
                data-testid="text-how-it-works"
              >
                {t('services.subscription.howItWorks')}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                    data-testid={`step-${index}`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 text-primary">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-serif mb-3">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(step.descKey)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {tiers.map((tier) => {
                  const isCustom = tier.key === 'custom';
                  const hasExtras = tier.key !== 'champagne' && tier.key !== 'custom';
                  
                  return (
                    <motion.div key={tier.key} variants={itemVariants}>
                      <Card
                        className={`p-8 h-full flex flex-col relative ${
                          tier.popular ? 'border-primary border-2' : ''
                        }`}
                        data-testid={`tier-card-${tier.key}`}
                      >
                        {tier.popular && (
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-wider font-medium"
                            data-testid="badge-popular"
                          >
                            {t('services.subscription.popularBadge')}
                          </div>
                        )}

                        <div className="flex items-center gap-3 mb-4">
                          <tier.icon className="w-6 h-6 text-primary" />
                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {t(`services.subscription.tiers.${tier.key}.tagline`)}
                          </span>
                        </div>

                        <h3
                          className="text-2xl md:text-3xl font-serif mb-3"
                          data-testid={`text-tier-name-${tier.key}`}
                        >
                          {t(`services.subscription.tiers.${tier.key}.name`)}
                        </h3>

                        <p className="text-muted-foreground mb-6 text-sm">
                          {t(`services.subscription.tiers.${tier.key}.description`)}
                        </p>

                        {!isCustom ? (
                          <>
                            <div className="mb-6 pb-6 border-b">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                    {t(`services.subscription.tiers.${tier.key}.bottles3`)}
                                  </p>
                                  <div className="flex items-baseline gap-2">
                                    <span
                                      className="text-3xl font-light"
                                      data-testid={`text-tier-price3-${tier.key}`}
                                    >
                                      {t(`services.subscription.tiers.${tier.key}.price3`)}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {t('services.subscription.perMonth')}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                                    {t(`services.subscription.tiers.${tier.key}.bottles6`)}
                                  </p>
                                  <div className="flex items-baseline gap-2">
                                    <span
                                      className="text-3xl font-light"
                                      data-testid={`text-tier-price6-${tier.key}`}
                                    >
                                      {t(`services.subscription.tiers.${tier.key}.price6`)}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {t('services.subscription.perMonth')}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {hasExtras && (() => {
                              const extras = t(`services.subscription.tiers.${tier.key}.extras`, {
                                returnObjects: true,
                              });
                              const extraTypes = ['champagne', 'dessert'];
                              return Array.isArray(extras) && (
                                <div className="mb-6 pb-6 border-b">
                                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                                    {t('services.subscription.options')}
                                  </p>
                                  <div className="space-y-3">
                                    {(extras as string[]).map((extra, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-start gap-3 group"
                                        data-testid={`extra-${tier.key}-${idx}`}
                                      >
                                        <Checkbox
                                          id={`extra-${tier.key}-${idx}`}
                                          checked={(selectedExtras[tier.key] || []).includes(extraTypes[idx])}
                                          onCheckedChange={() => toggleExtra(tier.key, extraTypes[idx])}
                                          data-testid={`checkbox-extra-${tier.key}-${idx}`}
                                          className="mt-0.5"
                                        />
                                        <label
                                          htmlFor={`extra-${tier.key}-${idx}`}
                                          className="text-sm cursor-pointer hover:text-foreground transition-colors"
                                        >
                                          {extra}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })()}
                          </>
                        ) : (
                          <div className="mb-6 pb-6 border-b">
                            <div className="flex items-baseline gap-2">
                              <span
                                className="text-3xl font-light"
                                data-testid={`text-tier-price-${tier.key}`}
                              >
                                {t(`services.subscription.tiers.${tier.key}.price`)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              {t(`services.subscription.tiers.${tier.key}.bottles`)}
                            </p>
                          </div>
                        )}

                        <ul className="space-y-3 mb-8 flex-1">
                          {(t(`services.subscription.tiers.${tier.key}.features`, {
                            returnObjects: true,
                          }) as string[]).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3"
                              data-testid={`feature-${tier.key}-${idx}`}
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {tier.key !== 'custom' ? (
                          <div className="grid grid-cols-2 gap-3">
                            <Button
                              className="w-full"
                              variant={tier.popular ? 'default' : 'outline'}
                              size="lg"
                              onClick={() => handleSubscribe(tier.key, 3)}
                              data-testid={`button-subscribe-${tier.key}-3`}
                            >
                              3 {t('services.subscription.bottlesCount')}
                            </Button>
                            <Button
                              className="w-full"
                              variant={tier.popular ? 'default' : 'outline'}
                              size="lg"
                              onClick={() => handleSubscribe(tier.key, 6)}
                              data-testid={`button-subscribe-${tier.key}-6`}
                            >
                              6 {t('services.subscription.bottlesCount')}
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="w-full"
                            variant="outline"
                            size="lg"
                            onClick={() => handleSubscribe(tier.key, 0)}
                            data-testid={`button-subscribe-${tier.key}`}
                          >
                            {t('services.subscription.cta')}
                          </Button>
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('services.subscription.body')}
              </p>
              <div className="mt-12 pt-12 border-t">
                <h3 className="text-2xl font-serif mb-4" data-testid="text-flexibility-title">
                  {t('services.subscription.flexibility')}
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('services.subscription.flexibilityText')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

        <Footer />
      </div>

      <Suspense fallback={null}>
        <CheckoutModal
          isOpen={checkoutData.isOpen}
          onClose={handleCloseCheckout}
          tier={checkoutData.tier}
          tierName={checkoutData.tierName}
          bottles={checkoutData.bottles}
          amount={checkoutData.amount}
          extras={checkoutData.extras}
        />
      </Suspense>

      <Suspense fallback={null}>
        <CustomPackageModal
          key={`custom-package-${t('nav.home')}`}
          isOpen={customPackageModalOpen}
          onClose={() => setCustomPackageModalOpen(false)}
        />
      </Suspense>
    </>
  );
}
