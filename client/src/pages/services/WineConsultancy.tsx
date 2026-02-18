import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { ServiceMediaCard } from '@/components/ServiceMediaCard';
import { useTranslation } from 'react-i18next';
const consultancyImage = "https://picsum.photos/1200/800?wine-consulting";
import topBourgogneImage from '@assets/Top Uit Bourgogne_1763852173789.webp';
import romaneeContiImage from '@assets/Société Civile Du Domaine De La Romanée-Conti_1763852180101.webp';

export default function WineConsultancy() {
  const { t } = useTranslation();

  return (
    <ServicePageTemplate
      serviceKey="consultancy"
      featuredImage={consultancyImage}
      featuredImageAlt="Professional sommelier examining wine"
    >
      <section className="mb-12" data-testid="section-wine-collections">
        <h2 
          className="text-3xl md:text-4xl font-light text-foreground mb-8 text-center"
          data-testid="text-collections-title"
        >
          {t('services.consultancy.collectionsTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceMediaCard
            title={t('services.consultancy.bourgogneTitle')}
            description={t('services.consultancy.bourgogneDescription')}
            imageSrc={topBourgogneImage}
            imageAlt="Top selections from Bourgogne - Premium Burgundy wine collection"
            testIdBase="collection-bourgogne"
            enableHoverElevate={true}
          />

          <ServiceMediaCard
            title={t('services.consultancy.drcTitle')}
            description={t('services.consultancy.drcDescription')}
            imageSrc={romaneeContiImage}
            imageAlt="Domaine de la Romanée-Conti - Exclusive Grand Cru collection"
            testIdBase="collection-drc"
            enableHoverElevate={true}
          />
        </div>
      </section>
    </ServicePageTemplate>
  );
}
