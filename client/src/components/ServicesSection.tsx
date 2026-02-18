import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { Wine, Archive, Users, FileText, Package, UserCheck } from 'lucide-react';

interface ServicesSectionProps {
  showAll?: boolean;
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  const { t } = useTranslation();

  const allServices = [
    {
      icon: Wine,
      title: t('services.consultancy.title'),
      description: t('services.consultancy.description'),
      href: '/services/wine-consultancy'
    },
    {
      icon: Users,
      title: t('services.tasting.title'),
      description: t('services.tasting.description'),
      href: '/services/wine-tastings'
    },
    {
      icon: UserCheck,
      title: t('services.private.title'),
      description: t('services.private.description'),
      href: '/services/private-sommelier'
    },
    {
      icon: FileText,
      title: t('services.menu.title'),
      description: t('services.menu.description'),
      href: '/services/custom-wine-list'
    },
    {
      icon: Archive,
      title: t('services.cellar.title'),
      description: t('services.cellar.description'),
      href: '/services/wine-cellar-management'
    }
  ];

  const services = showAll 
    ? allServices 
    : allServices.filter(service => 
        service.href !== '/services/wine-tastings' && 
        service.href !== '/services/custom-wine-list'
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
