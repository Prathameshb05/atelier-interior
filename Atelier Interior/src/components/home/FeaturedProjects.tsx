
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Serene Living Room',
    description: 'Modernist approach with neutral tones and bold accents.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Elegant Dining Space',
    description: 'Luxury dining area with custom lighting and furniture.',
    image: 'https://images.pexels.com/photos/27945011/pexels-photo-27945011/free-photo-of-a-modern-kitchen-and-dining-area-with-a-large-table.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Dining'
  },
  {
    id: 3,
    title: 'Minimalist Bedroom',
    description: 'Clean lines with a focus on texture and comfort.',
    image: 'https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Bedroom'
  },
  {
    id: 4,
    title: 'Modern Kitchen',
    description: 'Functional luxury with state-of-the-art appliances.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Kitchen'
  }
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

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
    <section id="featured-projects" ref={sectionRef} className="py-20 bg-luxury-offwhite relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-12 opacity-0 transform translate-y-10 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Discover our signature works of art and design.</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="relative h-[60vh] md:h-[70vh]">
                      <div className="absolute inset-0">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-12">
                        <div className="text-white">
                          <span className="inline-block px-3 py-1 bg-luxury-gold text-xs font-medium mb-3">
                            {project.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">{project.title}</h3>
                          <p className="text-white/80">{project.description}</p>
                          <Button 
                            className="mt-4 bg-transparent border border-white hover:bg-white hover:text-luxury-charcoal transition-colors"
                            onClick={() => window.location.href = '/portfolio'}
                          >
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-12 w-12 z-10"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full h-12 w-12 z-10"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-8 h-1 rounded-full transition-colors",
                    index === currentIndex ? "bg-luxury-gold" : "bg-luxury-taupe/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
