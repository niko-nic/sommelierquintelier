import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import menuImage from '@assets/stock_images/elegant_restaurant_w_506a749e.jpg';
import wineListImage from '@assets/Samengestelde_Wijnkaart_1763863777476.webp';

export default function CustomWineList() {
  return (
    <ServicePageTemplate
      serviceKey="menu"
      featuredImage={menuImage}
      featuredImageAlt="Custom wine list menu"
    >
      <div className="mb-12" data-testid="section-wine-list-example">
        <h2 className="text-3xl font-bold mb-6" data-testid="text-example-title">
          Voorbeeld van een samengestelde wijnkaart
        </h2>
        <div className="overflow-hidden rounded-md border">
          <img 
            src={wineListImage} 
            alt="Samengestelde wijnkaart - La Cave de Maxime door Yenti Quintelier"
            className="w-full h-auto object-cover"
            data-testid="img-wine-list-example"
          />
        </div>
      </div>
    </ServicePageTemplate>
  );
}
