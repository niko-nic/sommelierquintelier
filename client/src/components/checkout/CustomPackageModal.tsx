import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const createCustomPackageSchema = (t: any) => z.object({
  name: z.string().min(2, t('services.subscription.customPackageForm.nameRequired')),
  email: z.string().email(t('services.subscription.customPackageForm.emailInvalid')),
  phone: z.string().optional(),
  wantsChampagne: z.enum(['yes', 'no']),
  champagneQuantity: z.string().optional(),
  whiteWineQuantity: z.string().optional(),
  redWineQuantity: z.string().optional(),
  wantsDessertWine: z.enum(['yes', 'no']),
  dessertWineQuantity: z.string().optional(),
  budget: z.string().min(1, t('services.subscription.customPackageForm.budgetRequired')),
  additionalWishes: z.string().optional(),
}).refine(
  (data) => {
    if (data.wantsChampagne === 'yes') {
      const qty = parseInt(data.champagneQuantity || '0');
      return qty > 0;
    }
    return true;
  },
  {
    message: t('services.subscription.customPackageForm.champagneQuantityRequired'),
    path: ['champagneQuantity'],
  }
).refine(
  (data) => {
    if (data.wantsDessertWine === 'yes') {
      const qty = parseInt(data.dessertWineQuantity || '0');
      return qty > 0;
    }
    return true;
  },
  {
    message: t('services.subscription.customPackageForm.dessertWineQuantityRequired'),
    path: ['dessertWineQuantity'],
  }
);

type CustomPackageForm = {
  name: string;
  email: string;
  phone?: string;
  wantsChampagne: 'yes' | 'no';
  champagneQuantity?: string;
  whiteWineQuantity?: string;
  redWineQuantity?: string;
  wantsDessertWine: 'yes' | 'no';
  dessertWineQuantity?: string;
  budget: string;
  additionalWishes?: string;
};

interface CustomPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomPackageModal({ isOpen, onClose }: CustomPackageModalProps) {
  const { t, i18n } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formValues, setFormValues] = useState<Partial<CustomPackageForm>>({});

  const schema = useMemo(() => createCustomPackageSchema(t), [t, i18n.language]);

  const form = useForm<CustomPackageForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: formValues.name || '',
      email: formValues.email || '',
      phone: formValues.phone || '',
      wantsChampagne: formValues.wantsChampagne || 'no',
      champagneQuantity: formValues.champagneQuantity || '',
      whiteWineQuantity: formValues.whiteWineQuantity || '',
      redWineQuantity: formValues.redWineQuantity || '',
      wantsDessertWine: formValues.wantsDessertWine || 'no',
      dessertWineQuantity: formValues.dessertWineQuantity || '',
      budget: formValues.budget || '',
      additionalWishes: formValues.additionalWishes || '',
    },
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      setFormValues(values as CustomPackageForm);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const wantsChampagne = form.watch('wantsChampagne');
  const wantsDessertWine = form.watch('wantsDessertWine');

  const onSubmit = async (data: CustomPackageForm) => {
    try {
      setSubmitStatus('loading');
      
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        wantsChampagne: data.wantsChampagne,
        champagneQuantity: data.wantsChampagne === 'yes' ? parseInt(data.champagneQuantity || '0') : null,
        whiteWineQuantity: parseInt(data.whiteWineQuantity || '0'),
        redWineQuantity: parseInt(data.redWineQuantity || '0'),
        wantsDessertWine: data.wantsDessertWine,
        dessertWineQuantity: data.wantsDessertWine === 'yes' ? parseInt(data.dessertWineQuantity || '0') : null,
        budget: data.budget,
        additionalWishes: data.additionalWishes,
        language: i18n.language as 'nl' | 'en' | 'fr',
      };

      const response = await fetch('/api/custom-package-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        setSubmitStatus('error');
        return;
      }
      
      setSubmitStatus('success');
      
      setTimeout(() => {
        onClose();
        form.reset();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting custom package request:', error);
      setSubmitStatus('error');
    }
  };

  const handleClose = () => {
    if (submitStatus !== 'loading') {
      onClose();
      form.reset();
      setSubmitStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={handleClose}
            data-testid="modal-overlay-custom-package"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-background rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            data-testid="modal-custom-package"
          >
            {submitStatus === 'success' ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <div className="rounded-full bg-primary/10 p-3">
                    <CheckCircle className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>
                <h2 className="text-2xl font-serif mb-2" data-testid="text-success-title">
                  {t('services.subscription.customPackageForm.success')}
                </h2>
                <p className="text-muted-foreground" data-testid="text-success-message">
                  {t('services.subscription.customPackageForm.successMessage')}
                </p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <div className="rounded-full bg-destructive/10 p-3">
                    <AlertCircle className="w-12 h-12 text-destructive" />
                  </div>
                </motion.div>
                <h2 className="text-2xl font-serif mb-2" data-testid="text-error-title">
                  {t('services.subscription.customPackageForm.error')}
                </h2>
                <p className="text-muted-foreground mb-6" data-testid="text-error-message">
                  {t('services.subscription.customPackageForm.errorMessage')}
                </p>
                <Button onClick={handleClose} data-testid="button-close-error">
                  {t('services.subscription.customPackageForm.cancel')}
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b">
                  <div>
                    <h2 className="text-2xl font-serif" data-testid="text-modal-title">
                      {t('services.subscription.customPackageForm.title')}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1" data-testid="text-modal-description">
                      {t('services.subscription.customPackageForm.description')}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    disabled={submitStatus === 'loading'}
                    data-testid="button-close-modal"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="overflow-y-auto max-h-[calc(90vh-200px)]">
                  <div className="p-6 space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" data-testid="label-name">
                          {t('services.subscription.customPackageForm.nameLabel')}
                        </Label>
                        <Input
                          id="name"
                          {...form.register('name')}
                          placeholder={t('services.subscription.customPackageForm.namePlaceholder')}
                          data-testid="input-name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-name">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" data-testid="label-email">
                          {t('services.subscription.customPackageForm.emailLabel')}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register('email')}
                          placeholder={t('services.subscription.customPackageForm.emailPlaceholder')}
                          data-testid="input-email"
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-email">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" data-testid="label-phone">
                          {t('services.subscription.customPackageForm.phoneLabel')}
                        </Label>
                        <Input
                          id="phone"
                          {...form.register('phone')}
                          placeholder={t('services.subscription.customPackageForm.phonePlaceholder')}
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    {/* Champagne Section */}
                    <div className="space-y-3 p-4 rounded-lg bg-muted/30">
                      <Label data-testid="label-champagne">
                        {t('services.subscription.customPackageForm.champagneLabel')}
                      </Label>
                      <RadioGroup
                        value={form.watch('wantsChampagne')}
                        onValueChange={(value) => form.setValue('wantsChampagne', value as 'yes' | 'no')}
                        className="flex gap-4"
                        data-testid="radio-champagne"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="champagne-yes" data-testid="radio-champagne-yes" />
                          <Label htmlFor="champagne-yes" className="font-normal">
                            {t('services.subscription.customPackageForm.champagneYes')}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="champagne-no" data-testid="radio-champagne-no" />
                          <Label htmlFor="champagne-no" className="font-normal">
                            {t('services.subscription.customPackageForm.champagneNo')}
                          </Label>
                        </div>
                      </RadioGroup>

                      {wantsChampagne === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Label htmlFor="champagneQuantity" data-testid="label-champagne-quantity">
                            {t('services.subscription.customPackageForm.champagneQuantity')}
                          </Label>
                          <Input
                            id="champagneQuantity"
                            type="number"
                            min="1"
                            {...form.register('champagneQuantity')}
                            placeholder="0"
                            data-testid="input-champagne-quantity"
                          />
                          {form.formState.errors.champagneQuantity && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-champagne-quantity">
                              {form.formState.errors.champagneQuantity.message}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Wine Quantities */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="whiteWineQuantity" data-testid="label-white-wine">
                          {t('services.subscription.customPackageForm.whiteWineLabel')}
                        </Label>
                        <Input
                          id="whiteWineQuantity"
                          type="number"
                          min="0"
                          {...form.register('whiteWineQuantity')}
                          placeholder="0"
                          data-testid="input-white-wine-quantity"
                        />
                        {form.formState.errors.whiteWineQuantity && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-white-wine">
                            {form.formState.errors.whiteWineQuantity.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="redWineQuantity" data-testid="label-red-wine">
                          {t('services.subscription.customPackageForm.redWineLabel')}
                        </Label>
                        <Input
                          id="redWineQuantity"
                          type="number"
                          min="0"
                          {...form.register('redWineQuantity')}
                          placeholder="0"
                          data-testid="input-red-wine-quantity"
                        />
                        {form.formState.errors.redWineQuantity && (
                          <p className="text-sm text-destructive mt-1" data-testid="error-red-wine">
                            {form.formState.errors.redWineQuantity.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Dessert Wine Section */}
                    <div className="space-y-3 p-4 rounded-lg bg-muted/30">
                      <Label data-testid="label-dessert-wine">
                        {t('services.subscription.customPackageForm.dessertWineLabel')}
                      </Label>
                      <RadioGroup
                        value={form.watch('wantsDessertWine')}
                        onValueChange={(value) => form.setValue('wantsDessertWine', value as 'yes' | 'no')}
                        className="flex gap-4"
                        data-testid="radio-dessert-wine"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="dessert-yes" data-testid="radio-dessert-yes" />
                          <Label htmlFor="dessert-yes" className="font-normal">
                            {t('services.subscription.customPackageForm.dessertWineYes')}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="dessert-no" data-testid="radio-dessert-no" />
                          <Label htmlFor="dessert-no" className="font-normal">
                            {t('services.subscription.customPackageForm.dessertWineNo')}
                          </Label>
                        </div>
                      </RadioGroup>

                      {wantsDessertWine === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Label htmlFor="dessertWineQuantity" data-testid="label-dessert-wine-quantity">
                            {t('services.subscription.customPackageForm.dessertWineQuantity')}
                          </Label>
                          <Input
                            id="dessertWineQuantity"
                            type="number"
                            min="1"
                            {...form.register('dessertWineQuantity')}
                            placeholder="0"
                            data-testid="input-dessert-wine-quantity"
                          />
                          {form.formState.errors.dessertWineQuantity && (
                            <p className="text-sm text-destructive mt-1" data-testid="error-dessert-wine-quantity">
                              {form.formState.errors.dessertWineQuantity.message}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <Label htmlFor="budget" data-testid="label-budget">
                        {t('services.subscription.customPackageForm.budgetLabel')}
                      </Label>
                      <Select
                        value={form.watch('budget')}
                        onValueChange={(value) => form.setValue('budget', value)}
                      >
                        <SelectTrigger id="budget" data-testid="select-budget">
                          <SelectValue placeholder={t('services.subscription.customPackageForm.selectBudget')} />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(t('services.subscription.customPackageForm.budgetOptions', { returnObjects: true }) as Record<string, string>).map(([key, value]) => (
                            <SelectItem key={key} value={key} data-testid={`option-budget-${key}`}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {form.formState.errors.budget && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-budget">
                          {form.formState.errors.budget.message}
                        </p>
                      )}
                    </div>

                    {/* Additional Wishes */}
                    <div>
                      <Label htmlFor="additionalWishes" data-testid="label-wishes">
                        {t('services.subscription.customPackageForm.wishesLabel')}
                      </Label>
                      <Textarea
                        id="additionalWishes"
                        {...form.register('additionalWishes')}
                        placeholder={t('services.subscription.customPackageForm.wishesPlaceholder')}
                        rows={4}
                        className="resize-none"
                        data-testid="textarea-wishes"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 p-6 border-t bg-muted/30">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClose}
                      disabled={submitStatus === 'loading'}
                      className="flex-1"
                      data-testid="button-cancel"
                    >
                      {t('services.subscription.customPackageForm.cancel')}
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="flex-1"
                      data-testid="button-submit"
                    >
                      {submitStatus === 'loading'
                        ? t('services.subscription.customPackageForm.sending')
                        : t('services.subscription.customPackageForm.submit')}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
