
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  // { name: 'Process', path: '/process' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-white/80 dark:bg-luxury-charcoal/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-luxury-gold">ATELIER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'font-poppins text-sm uppercase tracking-wider hover:text-luxury-gold transition-colors',
                location.pathname === link.path ? 'text-luxury-gold font-medium' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'py-4 text-lg font-playfair uppercase animate-fade-in-up',
                    location.pathname === link.path ? 'text-luxury-gold font-medium' : '',
                    // Stagger the animation
                    { 'animation-delay-100': index === 0 },
                    { 'animation-delay-200': index === 1 },
                    { 'animation-delay-300': index === 2 },
                    { 'animation-delay-400': index === 3 },
                    { 'animation-delay-500': index === 4 },
                    { 'animation-delay-600': index === 5 },
                    { 'animation-delay-700': index === 6 }
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both' 
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
