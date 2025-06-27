
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AboutBlurb = () => {
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
    <section ref={sectionRef} className="py-24 bg-luxury-charcoal text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className={cn(
            "glassmorphism p-10 md:p-16 opacity-0 translate-y-10 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-luxury-gold">About Atelier</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Founded on principles of excellence and creativity, Atelier is a premier interior design 
              studio dedicated to crafting spaces that reflect your unique personality and lifestyle. 
              With meticulous attention to detail and a passion for innovative design, we transform 
              ordinary spaces into extraordinary environments.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-luxury-gold hover:underline group"
            >
              Learn more about our story 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className={cn(
            "absolute w-20 h-20 border-4 border-luxury-gold top-[-20px] left-[-20px] opacity-0",
            isVisible && "opacity-100"
          )}
          style={{ 
            transition: "opacity 0.7s ease 0.3s",
          }}></div>
          
          <div className={cn(
            "absolute w-20 h-20 border-4 border-luxury-gold bottom-[-20px] right-[-20px] opacity-0",
            isVisible && "opacity-100"
          )}
          style={{ 
            transition: "opacity 0.7s ease 0.5s",
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlurb;
