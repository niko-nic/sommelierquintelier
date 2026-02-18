import { ServicePageTemplate } from '@/components/ServicePageTemplate';
const tastingImage = "https://picsum.photos/1200/800?wine-tasting";
import tastingImage1 from '@assets/Wijndegustatie (1)_1763863386138.webp';
import tastingImage2 from '@assets/Wijndegustatie_1763863388132.webp';

export default function WineTastings() {
  return (
    <ServicePageTemplate
      serviceKey="tasting"
      featuredImage={tastingImage}
      featuredImageAlt="Private wine tasting gathering"
    >
      <div className="mb-12" data-testid="section-tasting-gallery">
        <h2 className="text-3xl font-bold mb-6" data-testid="text-gallery-title">
          Impressies van onze wijndegustaties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-md border h-80">
            <img 
              src={tastingImage1} 
              alt="Wijndegustatie met selectie van premium wijnen"
              className="w-full h-full object-cover"
              data-testid="img-tasting-1"
            />
          </div>
          <div className="overflow-hidden rounded-md border h-80">
            <img 
              src={tastingImage2} 
              alt="Professionele wijndegustatie setup met diverse wijnen"
              className="w-full h-full object-cover"
              data-testid="img-tasting-2"
            />
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
