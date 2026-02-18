import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import authorImage from '@assets/img_5602_1761590055681.webp';

export function AuthorBioBox() {
  const { t } = useTranslation();

  return (
    <Card className="p-8 mt-16" data-testid="card-author-bio">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src={authorImage} 
            alt="Yentl Quintelier"
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
            decoding="async"
            data-testid="img-author"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2" data-testid="text-author-name">
            Yentl Quintelier
          </h3>
          <p className="text-sm text-muted-foreground mb-3" data-testid="text-author-award">
            {t('about.award')}
          </p>
          <p className="text-base leading-relaxed mb-4" data-testid="text-author-bio">
            {t('about.paragraph4')}
          </p>
          <a 
            href="/about" 
            className="text-primary hover:underline font-medium"
            data-testid="link-author-more"
          >
            {t('about.cta')} →
          </a>
        </div>
      </div>
    </Card>
  );
}
