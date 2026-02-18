import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { ServiceMediaCard } from '@/components/ServiceMediaCard';
import { useTranslation } from 'react-i18next';
import privateImage from '@assets/stock_images/sommelier_wine_tasti_45a95a04.jpg';
import restaurantImage from '@assets/Sfeerbeeld Restaurant_1763861697489.webp';

export default function PrivateSommelier() {
  const { t } = useTranslation();

  return (
    <ServicePageTemplate
      serviceKey="private"
      featuredImage={privateImage}
      featuredImageAlt="Restaurant wine service moment"
    >
      <section className="mb-12" data-testid="section-restaurant-atmosphere">
        <ServiceMediaCard
          title={t('services.private.atmosphereTitle')}
          description={t('services.private.atmosphereDescription')}
          imageSrc={restaurantImage}
          imageAlt="Elegant restaurant dining atmosphere with fine wine service"
          testIdBase="restaurant-atmosphere"
          enableHoverElevate={true}
        />
      </section>
    </ServicePageTemplate>
  );
}
