
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20" id="main-content" tabIndex={-1}>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-4">
              Let's Design Something Beautiful
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-16 max-w-2xl mx-auto">
              Whether you're renovating, building, or simply dreaming, we're here to transform your vision into reality.
            </p>
          </motion.div>
          
          {/* Contact Section */}
          <div className="py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <ContactForm />
              </motion.div>
              
              {/* Contact Info and Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-1 lg:order-2"
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
