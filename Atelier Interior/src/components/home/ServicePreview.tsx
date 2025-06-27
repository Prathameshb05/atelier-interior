
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Sofa, Building, PaintBucket, Home } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential Interiors',
    description: 'Creating stunning, functional living spaces tailored to your lifestyle and preferences.',
    icon: Home
  },
  {
    id: 2,
    title: 'Commercial Design',
    description: 'Innovative workspace solutions that enhance productivity and reflect your brand identity.',
    icon: Building
  },
  {
    id: 3,
    title: 'Renovation Services',
    description: 'Revitalize and transform existing spaces with our comprehensive renovation expertise.',
    icon: PaintBucket
  },
  {
    id: 4,
    title: 'Bespoke Furniture',
    description: 'Custom-designed furniture pieces that perfectly complement your space and style.',
    icon: Sofa
  }
];

const ServicePreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={cn(
          "text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive design solutions tailored to your vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "glassmorphism p-6 hover-lift cursor-pointer opacity-0 translate-y-10 transition-all",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => window.location.href = '/services'}
            >
              <div className="bg-luxury-gold/10 p-3 rounded-full inline-flex mb-4">
                <service.icon className="h-6 w-6 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <Link to="/services" className="text-luxury-gold text-sm font-medium hover:underline">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
