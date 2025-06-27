
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-luxury-gold">ATELIER</h3>
            <p className="mb-6 text-luxury-lightgrey">
              Crafting elegant and luxurious interior spaces that reflect your personality and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-luxury-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-luxury-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-luxury-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-luxury-gold" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-luxury-gold" />
                <span>info@atelierdesign.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-luxury-gold" />
                <span>123 Design Boulevard, New York, NY 10010</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-playfair mb-4">Newsletter</h4>
            <p className="mb-4 text-luxury-lightgrey">
              Subscribe to receive updates about our latest projects and design insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-luxury-charcoal border-luxury-taupe focus:border-luxury-gold"
              />
              <Button className="bg-luxury-gold hover:bg-opacity-90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-taupe/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-luxury-lightgrey mb-4 md:mb-0">
            © 2025 Atelier Design Studio. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="hover:text-luxury-gold transition-colors">About</Link>
            <Link to="/services" className="hover:text-luxury-gold transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-luxury-gold transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
