import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="h-full block">
      <Card className="h-full hover-elevate cursor-pointer transition-transform hover:-translate-y-1 flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <CardContent className="p-8 flex-1 flex flex-col">
          <div className="mb-6">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{description}</p>
          <div className="flex items-center text-sm font-medium text-primary">
            <span className="uppercase tracking-wider">Meer info</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
