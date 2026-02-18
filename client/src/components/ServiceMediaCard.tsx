import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import type { StaticImageData } from 'next/image';

interface ServiceMediaCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  testIdBase: string;
  enableHoverElevate?: boolean;
}

export function ServiceMediaCard({
  title,
  description,
  imageSrc,
  imageAlt,
  testIdBase,
  enableHoverElevate = false
}: ServiceMediaCardProps) {
  const imageUrl = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  
  const cardContent = (
    <Card className="overflow-hidden" data-testid={`card-${testIdBase}`}>
      <CardHeader className="p-0" data-testid={`card-header-${testIdBase}`}>
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover"
            data-testid={`img-${testIdBase}`}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-6">
        <h3 
          className="text-2xl font-light text-foreground mb-2"
          data-testid={`text-${testIdBase}-title`}
        >
          {title}
        </h3>
        <p 
          className="text-muted-foreground leading-relaxed"
          data-testid={`text-${testIdBase}-description`}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );

  if (enableHoverElevate) {
    return (
      <div className="hover-elevate">
        {cardContent}
      </div>
    );
  }

  return cardContent;
}
