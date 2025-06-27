
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Hammer, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery",
    description: "We begin by understanding your vision, requirements, and constraints. This involves in-depth consultations, site visits, and lifestyle discussions to gather all the information needed for a successful design.",
    color: "bg-luxury-gold"
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Concept Design",
    description: "Our designers create initial concepts and mood boards based on your brief. We present layout options, material selections, color palettes, and 3D visualizations to help you envision the final result.",
    color: "bg-luxury-brown"
  },
  {
    id: 3,
    icon: Hammer,
    title: "Execution",
    description: "Once the design is approved, we move to implementation. Our team coordinates with contractors, supervises the work, and ensures every detail is executed according to plan with the highest quality standards.",
    color: "bg-luxury-taupe"
  },
  {
    id: 4,
    icon: Star,
    title: "Reveal",
    description: "The most rewarding phase - when you experience your transformed space. We conduct a final walkthrough, address any adjustments needed, and ensure you're completely satisfied with the finished project.",
    color: "bg-luxury-darkbrown"
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });
  
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

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
            <h1 className="section-title text-center">Our Process</h1>
            <p className="section-subtitle text-center mb-16">How we bring your vision to life</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative" ref={containerRef}>
            {/* Timeline Line */}
            <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-taupe/20 translate-x-[-50%]">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-luxury-gold"
                style={{ height: progressHeight }}
              />
            </div>
            
            {/* Timeline Steps */}
            <div className="space-y-24 md:space-y-32 py-8">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative grid grid-cols-[80px_1fr] md:grid-cols-[1fr_80px_1fr]"
                  >
                    {/* Timeline point */}
                    <div className={`
                      absolute left-[40px] md:left-1/2 w-[20px] h-[20px] rounded-full ${step.color} 
                      shadow-lg transform translate-x-[-50%] z-10
                      flex items-center justify-center
                    `}>
                      <span className="text-white text-xs font-bold">{step.id}</span>
                    </div>
                    
                    {/* Content placement based on even/odd */}
                    <div className={`
                      md:col-start-${isEven ? 1 : 3}
                      col-start-2
                      ${isEven ? "md:text-right" : ""}
                      ${isEven ? "md:pr-16" : "md:pl-16"}
                    `}>
                      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-luxury-taupe/10">
                        <div className={`
                          w-12 h-12 rounded-lg ${step.color} flex items-center justify-center
                          mb-4 ${isEven ? "ml-auto md:ml-auto" : ""}
                        `}>
                          <step.icon className="text-white h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-playfair font-bold mb-4">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty column for layout in mobile and to maintain grid structure */}
                    <div className={`
                      ${isEven ? "col-start-1 md:col-start-2" : "hidden md:block md:col-start-2"} 
                    `}></div>
                    
                    {/* Empty column for layout */}
                    <div className={`
                      hidden md:block md:col-start-${isEven ? 3 : 1}
                    `}></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-24 bg-luxury-beige/20 rounded-lg p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Ready to start your design journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific vision in mind or need guidance in discovering your style,
              our team is ready to bring your dream space to life.
            </p>
            <Button 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white text-lg px-8 py-6 h-auto group"
              asChild
            >
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
