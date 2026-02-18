import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BackToTop } from '@/components/BackToTop';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AgeGateModal } from '@/components/checkout/AgeGateModal';
import { PageLoader } from '@/components/PageLoader';
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from 'framer-motion';
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Subscriptions = lazy(() => import("@/pages/Subscriptions"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const PaymentStatus = lazy(() => import("@/pages/PaymentStatus"));
const PaymentFailed = lazy(() => import("@/pages/PaymentFailed"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Contact = lazy(() => import("@/pages/Contact"));
const WineConsultancy = lazy(() => import("@/pages/services/WineConsultancy"));
const WineTastings = lazy(() => import("@/pages/services/WineTastings"));
const PrivateSommelier = lazy(() => import("@/pages/services/PrivateSommelier"));
const CustomWineList = lazy(() => import("@/pages/services/CustomWineList"));
const WineCellarManagement = lazy(() => import("@/pages/services/WineCellarManagement"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const CancelSubscription = lazy(() => import("@/pages/CancelSubscription"));
const CancelSubscriptionConfirm = lazy(() => import("@/pages/CancelSubscriptionConfirm"));
const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  useAnalytics();
  
  return (
    <Suspense fallback={
      <AnimatePresence mode="wait">
        <PageLoader />
      </AnimatePresence>
    }>
      <Switch>
        <Route path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/subscriptions"><Subscriptions /></Route>
        <Route path="/thank-you"><ThankYou /></Route>
        <Route path="/payment-status"><PaymentStatus /></Route>
        <Route path="/payment-failed"><PaymentFailed /></Route>
        <Route path="/services/wine-consultancy"><WineConsultancy /></Route>
        <Route path="/services/wine-tastings"><WineTastings /></Route>
        <Route path="/services/private-sommelier"><PrivateSommelier /></Route>
        <Route path="/services/custom-wine-list"><CustomWineList /></Route>
        <Route path="/services/wine-cellar-management"><WineCellarManagement /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/blog/:slug"><BlogPost /></Route>
        <Route path="/gallery"><Gallery /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/privacy"><Privacy /></Route>
        <Route path="/terms"><Terms /></Route>
        <Route path="/cookies"><Cookies /></Route>
        <Route path="/cancel-subscription"><CancelSubscription /></Route>
        <Route path="/cancel-subscription/confirm"><CancelSubscriptionConfirm /></Route>
        <Route path="/shop"><Shop /></Route>
        <Route path="/shop/:productId"><ProductDetail /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </Suspense>
  );
}

function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [isCheckingAge, setIsCheckingAge] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setAgeVerified(true);
    }
    setIsCheckingAge(false);
  }, []);

  const handleAgeVerified = () => {
    setAgeVerified(true);
  };

  if (isCheckingAge) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <I18nextProvider i18n={i18n}>
          <TooltipProvider>
            <Toaster />
            <BackToTop />
            <ScrollToTop />
            {!ageVerified && <AgeGateModal onVerified={handleAgeVerified} />}
            <Router />
          </TooltipProvider>
        </I18nextProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
