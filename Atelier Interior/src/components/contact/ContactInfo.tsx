
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Design Boulevard, New York, NY 10010",
    link: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (800) 123-4567",
    link: "tel:+18001234567"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@atelierdesign.com",
    link: "mailto:info@atelierdesign.com"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday: 9AM - 6PM",
    link: null
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Map or Location Image */}
      <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border border-luxury-taupe/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24197.927269048315!2d-73.99493473075738!3d40.7316302510893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599fa8302585%3A0x6890aad4eecd576c!2sSoHo%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1684504112153!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Atelier Design Studio location"
        ></iframe>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            className="p-5 bg-white/50 backdrop-blur-sm rounded-lg shadow-md border border-luxury-taupe/10 transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="bg-luxury-beige/70 rounded-full p-3 mr-4">
                <item.icon className="h-5 w-5 text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-medium mb-1 font-playfair">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-sm text-muted-foreground hover:text-luxury-gold transition-colors"
                    target={item.link.startsWith('http') ? "_blank" : undefined}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional Message */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="bg-luxury-beige/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-luxury-taupe/20"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="font-playfair text-2xl font-semibold mb-3">Design is not just space—it's an experience.</h3>
            <p className="text-muted-foreground mb-4">
              Our complimentary consultation gives you the opportunity to discuss your vision with our design experts and explore the possibilities for your space.
            </p>
            <Button 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
              asChild
            >
              <a href="/portfolio">View Our Portfolio</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
