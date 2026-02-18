import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, ExternalLink } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: string;
  tierName: string;
  bottles: number;
  amount: number;
  extras?: string[];
}

const createCheckoutSchema = (t: any) => z.object({
  customerName: z.string().min(2, t('checkout.nameRequired')),
  customerEmail: z.string().email(t('checkout.emailInvalid')),
  customerPhone: z.string().optional(),
  deliveryAddress: z.string().min(5, t('checkout.addressRequired')),
  deliveryCity: z.string().min(2, t('checkout.cityRequired')),
  deliveryPostalCode: z.string().min(4, t('checkout.postalCodeRequired')),
  deliveryCountry: z.string().min(2, t('checkout.countryRequired')),
  ageConfirmed: z.boolean().refine((val) => val === true, {
    message: t('checkout.ageConfirmationRequired'),
  }),
});

type CheckoutFormData = z.infer<ReturnType<typeof createCheckoutSchema>>;

export default function CheckoutModal({
  isOpen,
  onClose,
  tier,
  tierName,
  bottles,
  amount,
  extras = [],
}: CheckoutModalProps) {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(createCheckoutSchema(t)),
    defaultValues: {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryPostalCode: '',
      deliveryCountry: 'BE',
      ageConfirmed: false,
    },
  });

  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      setIsProcessing(true);
      
      const response = await apiRequest("POST", "/api/create-mollie-payment", {
        tier,
        tierName,
        bottles,
        extras,
        ageVerified: data.ageConfirmed,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone || null,
        deliveryAddress: data.deliveryAddress,
        deliveryCity: data.deliveryCity,
        deliveryPostalCode: data.deliveryPostalCode,
        deliveryCountry: data.deliveryCountry,
        language: i18n.language,
      });

      if (!response.ok) {
        throw new Error("Failed to create Mollie payment");
      }

      const responseData = await response.json();
      
      if (responseData.checkoutUrl) {
        if (responseData.paymentId) {
          localStorage.setItem('pendingPaymentId', responseData.paymentId);
        }
        window.location.href = responseData.checkoutUrl;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error: any) {
      console.error("Error creating Mollie payment:", error);
      setIsProcessing(false);
      toast({
        title: t("checkout.error"),
        description: t("checkout.errorMessage"),
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col" data-testid="dialog-checkout">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>{t("checkout.title")}</DialogTitle>
          <DialogDescription>{t("checkout.description")}</DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 -mx-6 px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Order Summary */}
              <div className="bg-muted/30 p-4 space-y-2">
                <p className="text-sm font-medium">{tierName}</p>
                <p className="text-sm text-muted-foreground">
                  {bottles} {t("services.subscription.bottlesCount")}
                </p>
                {extras.length > 0 && (
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">{t("checkout.extras")}:</p>
                    <ul className="space-y-1">
                      {extras.includes("champagne") && (
                        <li className="text-sm text-muted-foreground">+ 1 {t("checkout.extraChampagne")}</li>
                      )}
                      {extras.includes("dessert") && (
                        <li className="text-sm text-muted-foreground">+ 1 {t("checkout.extraDessert")}</li>
                      )}
                    </ul>
                  </div>
                )}
                <div className="pt-3 border-t border-border/50 mt-3">
                  <p className="text-xs font-medium text-primary">{t("checkout.recurringBilling")}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("checkout.recurringDescription")}</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-sm">{t("checkout.contactInformation")}</h3>
                
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("checkout.nameLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("checkout.namePlaceholder")}
                          data-testid="input-customer-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("checkout.emailLabel")}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder={t("checkout.emailPlaceholder")}
                            data-testid="input-customer-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customerPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("checkout.phoneLabel")} ({t("checkout.optional")})</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder={t("checkout.phonePlaceholder")}
                            data-testid="input-customer-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-4">
                <h3 className="font-medium text-sm">{t("checkout.deliveryAddress")}</h3>
                
                <FormField
                  control={form.control}
                  name="deliveryAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("checkout.addressLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("checkout.addressPlaceholder")}
                          data-testid="input-delivery-address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="deliveryPostalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("checkout.postalCodeLabel")}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={t("checkout.postalCodePlaceholder")}
                            data-testid="input-delivery-postal-code"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deliveryCity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("checkout.cityLabel")}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={t("checkout.cityPlaceholder")}
                            data-testid="input-delivery-city"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deliveryCountry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("checkout.countryLabel")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-delivery-country">
                              <SelectValue placeholder={t("checkout.countryPlaceholder")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="BE">België</SelectItem>
                            <SelectItem value="NL">Nederland</SelectItem>
                            <SelectItem value="FR">Frankrijk</SelectItem>
                            <SelectItem value="DE">Duitsland</SelectItem>
                            <SelectItem value="LU">Luxemburg</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Age Confirmation */}
              <FormField
                control={form.control}
                name="ageConfirmed"
                render={({ field }) => (
                  <FormItem className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="checkbox-age-confirmation"
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="flex-1">
                      <FormLabel className="text-sm text-foreground leading-relaxed cursor-pointer">
                        {t("checkout.ageConfirmation")}
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Payment Info */}
              <div className="bg-primary/5 border border-primary/20 p-4 text-sm text-muted-foreground">
                <p>{t("checkout.mollieRedirectInfo")}</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isProcessing}
                data-testid="button-complete-payment"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("checkout.processing")}
                  </>
                ) : (
                  <>
                    {t("checkout.completePayment")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
