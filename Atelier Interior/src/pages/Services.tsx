
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Home, Building, Hammer, Armchair, ArrowRight, Palette, Coffee, Ruler 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transform your living space into a personalized sanctuary that reflects your unique style and meets your everyday needs.",
    link: "#"
  },
  {
    icon: Building,
    title: "Commercial Design",
    description: "Create inspiring work environments that enhance productivity, impress clients, and embody your brand's essence.",
    link: "#"
  },
  {
    icon: Hammer,
    title: "Renovation Services",
    description: "Breathe new life into existing spaces with our comprehensive renovation services, from planning to execution.",
    link: "#"
  },
  {
    icon: Armchair,
    title: "Bespoke Furniture",
    description: "Commission custom-designed furniture pieces that are tailored to your exact specifications and preferences.",
    link: "#"
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Discover the perfect color palette that creates the mood and atmosphere you desire for your space.",
    link: "#"
  },
  {
    icon: Coffee,
    title: "Space Planning",
    description: "Optimize your layout for functionality and flow with our expert space planning and arrangement services.",
    link: "#"
  },
  {
    icon: Ruler,
    title: "3D Visualization",
    description: "See your design come to life before implementation with our detailed 3D renderings and virtual walkthroughs.",
    link: "#"
  },
  {
    icon: Armchair,
    title: "Styling & Staging",
    description: "Perfect your space with our finishing touches or prepare your property for sale with professional staging.",
    link: "#"
  }
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title text-center">Our Services</h1>
            <p className="section-subtitle text-center">Comprehensive design solutions for every space</p>
          </motion.div>
          
          <section className="py-16">
            <motion.h2 
              className="text-3xl font-playfair font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              What We Offer
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                >
                  <Card className="h-full border-transparent hover:border-luxury-gold/30 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 bg-luxury-beige/50 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-luxury-gold" />
                      </div>
                      <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="p-0 text-luxury-gold hover:text-luxury-gold/80 hover:bg-transparent group"
                      >
                        <span className="flex items-center">
                          Learn more 
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
          
          <section className="py-16">
            <div className="bg-luxury-beige/20 p-8 md:p-16 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-playfair font-bold mb-6">Our Design Process</h2>
                  <p className="mb-6 text-lg">
                    We believe that a structured approach leads to exceptional results. Our design process
                    ensures that your vision is translated into reality with precision and care.
                  </p>
                  <Button 
                    className="bg-luxury-gold hover:bg-opacity-90 text-white"
                    asChild
                  >
                    <motion.a 
                      href="/process" 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center"
                    >
                      Explore Our Process <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.a>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center">
                    <div className="bg-luxury-gold/10 rounded-full p-2.5 mr-4">
                      <span className="text-luxury-gold font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Discovery & Consultation</h3>
                      <p className="text-muted-foreground text-sm">Understanding your vision, goals, and requirements</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center">
                    <div className="bg-luxury-gold/10 rounded-full p-2.5 mr-4">
                      <span className="text-luxury-gold font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Concept Development</h3>
                      <p className="text-muted-foreground text-sm">Creating designs and presentations of your future space</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm flex items-center">
                    <div className="bg-luxury-gold/10 rounded-full p-2.5 mr-4">
                      <span className="text-luxury-gold font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Implementation</h3>
                      <p className="text-muted-foreground text-sm">Bringing your design to life with expert execution</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
