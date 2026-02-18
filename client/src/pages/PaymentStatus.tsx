import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Loader2 } from 'lucide-react';

export default function PaymentStatus() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const checkPaymentAndRedirect = async () => {
      const paymentId = localStorage.getItem('pendingPaymentId');

      if (!paymentId) {
        setLocation('/subscriptions');
        return;
      }

      try {
        const response = await fetch(`/api/payment-status/${paymentId}`);
        const data = await response.json();

        localStorage.removeItem('pendingPaymentId');

        if (data.status === 'paid') {
          setLocation('/thank-you');
        } else {
          setLocation('/payment-failed');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        localStorage.removeItem('pendingPaymentId');
        setLocation('/payment-failed');
      }
    };

    const timer = setTimeout(checkPaymentAndRedirect, 500);
    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
        <p className="text-muted-foreground">Even geduld...</p>
      </div>
    </div>
  );
}
