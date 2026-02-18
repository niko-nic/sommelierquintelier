import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AgeGateModalProps {
  onVerified: () => void;
}

export function AgeGateModal({ onVerified }: AgeGateModalProps) {
  const { t } = useTranslation();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  const validateAge = () => {
    setError('');

    if (!day || !month || !year) {
      setError(t('ageGate.invalidDateError'));
      return;
    }

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
    if (birthDate.toString() === 'Invalid Date' || 
        birthDate > new Date() ||
        birthDate.getDate() !== parseInt(day) ||
        birthDate.getMonth() !== parseInt(month) - 1) {
      setError(t('ageGate.invalidDateError'));
      return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setError(t('ageGate.underageError'));
      return;
    }

    localStorage.setItem('ageVerified', 'true');
    onVerified();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-md w-full mx-4"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border rounded-lg shadow-2xl p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <Wine 
                  className="w-20 h-20 text-primary" 
                  strokeWidth={1.5}
                  data-testid="icon-age-gate-wine"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                  style={{ originY: 1 }}
                  className="absolute inset-x-0 bottom-0 h-12 bg-primary/20 rounded-b-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="text-2xl font-serif mb-2 text-foreground" data-testid="text-age-gate-title">
                {t('ageGate.title')}
              </h2>
              <p className="text-sm font-semibold text-primary mb-2" data-testid="text-age-gate-subtitle">
                {t('ageGate.subtitle')}
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-age-gate-description">
                {t('ageGate.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">
                    {t('ageGate.dayLabel')}
                  </label>
                  <Select value={day} onValueChange={setDay}>
                    <SelectTrigger data-testid="select-day">
                      <SelectValue placeholder={t('ageGate.dayPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent position="popper" sideOffset={4}>
                      {days.map((d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">
                    {t('ageGate.monthLabel')}
                  </label>
                  <Select value={month} onValueChange={setMonth}>
                    <SelectTrigger data-testid="select-month">
                      <SelectValue placeholder={t('ageGate.monthPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent position="popper" sideOffset={4}>
                      {months.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">
                    {t('ageGate.yearLabel')}
                  </label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger data-testid="select-year">
                      <SelectValue placeholder={t('ageGate.yearPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent position="popper" sideOffset={4}>
                      {years.map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Alert variant="destructive" data-testid="alert-age-error">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <Button
                onClick={validateAge}
                className="w-full"
                size="lg"
                data-testid="button-verify-age"
              >
                {t('ageGate.confirmButton')}
              </Button>

              <div className="space-y-2 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center" data-testid="text-legal-notice">
                  {t('ageGate.legalDrinkingAge')}
                </p>
                <p className="text-xs text-muted-foreground text-center font-semibold">
                  {t('ageGate.responsibleConsumption')}
                </p>
                <p className="text-xs text-muted-foreground/70 text-center italic">
                  {t('ageGate.privacyNotice')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
