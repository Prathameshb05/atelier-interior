
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="section-title text-center">About Us</h1>
          <p className="section-subtitle text-center mb-12">Our story and design philosophy</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400" 
                  alt="Atelier Design Studio" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-luxury-gold/10 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-luxury-gold text-white p-4 rounded-lg w-40 text-center shadow-xl">
                <span className="block text-xl font-bold">Since</span>
                <span className="block text-3xl font-playfair">2012</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-playfair font-bold">Crafting Exceptional Spaces Since 2012</h2>
              <p className="text-lg">
                Atelier Design Studio was founded with a singular vision: to transform ordinary spaces into extraordinary experiences. 
                Based in New York, our boutique design firm specializes in creating interiors that marry timeless elegance with contemporary flair.
              </p>
              <p>
                Our team of passionate designers brings decades of combined experience to every project. 
                We believe that great design starts with listening—understanding your needs, preferences, and the way you live or work. 
                From there, we create spaces that are as functional as they are beautiful.
              </p>
              <Button className="bg-luxury-gold hover:bg-opacity-90 text-white mt-4 group">
                Meet Our Team <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Stats Section */}
        <section className="bg-luxury-beige/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div 
                className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Trophy className="mx-auto h-12 w-12 text-luxury-gold mb-4" />
                <div className="text-4xl font-playfair font-bold mb-2">300+</div>
                <div className="text-lg text-muted-foreground">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Users className="mx-auto h-12 w-12 text-luxury-gold mb-4" />
                <div className="text-4xl font-playfair font-bold mb-2">150+</div>
                <div className="text-lg text-muted-foreground">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Calendar className="mx-auto h-12 w-12 text-luxury-gold mb-4" />
                <div className="text-4xl font-playfair font-bold mb-2">13</div>
                <div className="text-lg text-muted-foreground">Years of Experience</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Our Design Philosophy</h2>
              <div className="relative py-8">
                <div className="absolute left-0 top-0 text-8xl text-luxury-gold/20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-playfair italic mb-6 px-10">
                  Design is the silent ambassador of your brand. It speaks volumes without saying a word.
                </p>
                <div className="absolute right-0 bottom-0 text-8xl text-luxury-gold/20 font-serif">"</div>
              </div>
              <p className="text-lg mt-8">
                We believe in crafting spaces that tell your story—whether that's through the quiet luxury of a 
                residential sanctuary or the bold statement of a commercial environment. Each project is approached 
                with meticulous attention to detail and an unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
