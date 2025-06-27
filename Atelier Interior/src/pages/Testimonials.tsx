
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"; 

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    quote: "Working with Atelier was a dream. They transformed our outdated living space into a modern sanctuary that perfectly reflects our style. The attention to detail and commitment to quality exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "David Thompson",
    position: "CEO, Innovate Studios",
    quote: "The Atelier team designed our office space with both functionality and aesthetics in mind. The result is a workspace that inspires creativity and has significantly improved our team's morale and productivity.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Restaurant Owner",
    quote: "From concept to execution, Atelier demonstrated exceptional creativity and professionalism. They captured the essence of our culinary vision and translated it into a dining space that our customers love.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Michael Roberts",
    position: "Property Developer",
    quote: "I've worked with many interior design firms, but Atelier stands out for their innovative approach and ability to work within budget constraints. Their designs add significant value to our properties.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "Sophia Martinez",
    position: "Luxury Hotel Manager",
    quote: "The renovation of our hotel lobby and bar area by Atelier has been transformative. The space now exudes luxury while maintaining a welcoming atmosphere. Our guests frequently compliment the design.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Robert Wilson",
    position: "Penthouse Owner",
    quote: "Atelier's ability to blend comfort with sophistication is unmatched. They created a home that feels both luxurious and livable, with custom solutions that address our specific needs and preferences.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title text-center">Testimonials</h1>
            <p className="section-subtitle text-center">What our clients say about our work</p>
          </motion.div>
          
          {/* Featured Testimonial */}
          <motion.div 
            className="my-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute text-6xl md:text-8xl font-serif text-luxury-gold/10 top-0 left-0 -translate-y-1/2">❝</div>
            <div className="absolute text-6xl md:text-8xl font-serif text-luxury-gold/10 bottom-0 right-0 translate-y-1/2">❞</div>
            
            <div className="max-w-4xl mx-auto text-center px-8 py-12">
              <p className="text-xl md:text-2xl font-playfair italic mb-8">
                "Design is not just what it looks like and feels like. Design is how it works. At Atelier, they truly understand this philosophy and deliver spaces that are as functional as they are beautiful."
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-luxury-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium">James Wilson</p>
                  <p className="text-sm text-muted-foreground">Architectural Digest</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="py-16"
          >
            <h2 className="text-3xl font-playfair font-bold text-center mb-16">What Our Clients Say</h2>
            
            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="mx-10"
              >
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <div className="rounded-lg bg-white/70 backdrop-blur-sm shadow-sm p-6 border border-luxury-taupe/10 h-full flex flex-col">
                        <div className="mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`inline-block h-4 w-4 ${i < testimonial.rating ? "text-luxury-gold" : "text-luxury-taupe/30"}`} 
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <p className="italic text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </motion.div>
          
          {/* Client Logos and Trust Indicators */}
          <motion.section 
            className="py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-playfair font-medium">Trusted By</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {["Architectural Digest", "Elle Decor", "Luxury Living", "Design Today"].map((brand, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-16 px-6 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <span className="font-playfair text-lg font-bold text-luxury-taupe">{brand}</span>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Stats Section */}
          <motion.section 
            className="py-12 bg-luxury-beige/20 rounded-lg my-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <div className="text-4xl font-playfair font-bold text-luxury-gold mb-2">97%</div>
                <p className="text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-playfair font-bold text-luxury-gold mb-2">300+</div>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-playfair font-bold text-luxury-gold mb-2">13</div>
                <p className="text-sm">Design Awards</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-playfair font-bold text-luxury-gold mb-2">12+</div>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
