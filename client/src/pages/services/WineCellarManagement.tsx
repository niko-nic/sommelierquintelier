import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import cellarImage from '@assets/stock_images/wine_bottle_collecti_ab5e4249.jpg';
import wijnkastImage from '@assets/Wijnkast_1763864357806.webp';
import wijnkelderImage from '@assets/Wijnkelder_1763864359360.webp';

export default function WineCellarManagement() {
  return (
    <ServicePageTemplate
      serviceKey="cellar"
      featuredImage={cellarImage}
      featuredImageAlt="Premium wine cellar collection"
    >
      <div className="mb-12" data-testid="section-cellar-gallery">
        <h2 className="text-3xl font-bold mb-6" data-testid="text-gallery-title">
          Privé Wijnkelder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-md border h-80">
            <img 
              src={wijnkastImage} 
              alt="Professionele wijnkast met premium wijnen"
              className="w-full h-full object-cover"
              data-testid="img-wine-cabinet"
            />
          </div>
          <div className="overflow-hidden rounded-md border h-80">
            <img 
              src={wijnkelderImage} 
              alt="Sommelier Yenti Quintelier in wijnkelder"
              className="w-full h-full object-cover object-top"
              data-testid="img-wine-cellar"
            />
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
