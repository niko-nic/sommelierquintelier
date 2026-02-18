import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AnnouncementBar() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('announcement-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 py-2.5 px-6" data-testid="announcement-bar">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm relative">
          <Info className="h-4 w-4 text-primary flex-shrink-0" />
          <p className="text-center text-foreground/90">
            {t('announcement.message')}
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="absolute right-0 h-7 w-7 hover-elevate"
            data-testid="button-dismiss-announcement"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
