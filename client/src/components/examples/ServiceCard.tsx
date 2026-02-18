import { ServiceCard } from '../ServiceCard';
import { Wine } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={Wine}
        title="Wijnconsultancy"
        description="Professioneel advies voor uw perfecte wijnkeuze bij elke gelegenheid"
        href="/services/consultancy"
      />
    </div>
  );
}
