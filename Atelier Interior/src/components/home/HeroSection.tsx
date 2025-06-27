
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <h1 className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-playfair mb-6 opacity-0",
          loaded && "animate-fade-in-down opacity-100"
        )}
        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Crafting Spaces <span className="text-luxury-gold">That Speak Luxury</span>
        </h1>
        
        <p className={cn(
          "text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 opacity-0",
          loaded && "animate-fade-in-down opacity-100"
        )}
        style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          Modern interior design for inspired living.
        </p>
        
        <Button 
          className={cn(
            "bg-luxury-gold hover:bg-opacity-90 text-white px-8 py-6 text-lg rounded-none hover:translate-y-[-2px] transition-all duration-300 opacity-0",
            loaded && "animate-fade-in-up opacity-100"
          )}
          style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
          onClick={() => window.location.href = '/contact'}
        >
          Transform Your Space
        </Button>
      </div>

      {/* Animated furniture elements */}
      <div className={cn(
        "absolute left-[10%] top-[30%] w-20 h-20 opacity-0",
        loaded && "animate-fade-in opacity-100"
      )}
      style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/6447/6447663.png" 
          alt="Sofa" 
          className="w-full h-full object-contain animate-float"
        />
      </div>
      
      <div className={cn(
        "absolute right-[15%] top-[40%] w-16 h-16 opacity-0",
        loaded && "animate-fade-in opacity-100"
      )}
      style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7423/7423445.png" 
          alt="Lamp" 
          className="w-full h-full object-contain animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
      
      <div className={cn(
        "absolute right-[30%] bottom-[20%] w-14 h-14 opacity-0",
        loaded && "animate-fade-in opacity-100"
      )}
      style={{ animationDelay: "1800ms", animationFillMode: "forwards" }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" 
          alt="Table" 
          className="w-full h-full object-contain animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <div className="h-12 w-px bg-white mb-2"></div>
          <ArrowDown className="text-white animate-scroll-down-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
