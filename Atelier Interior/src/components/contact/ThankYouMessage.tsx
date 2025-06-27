
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThankYouMessageProps {
  onReset: () => void;
}

const ThankYouMessage = ({ onReset }: ThankYouMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
      role="alert"
      aria-live="polite"
    >
      <div 
        className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
        aria-hidden="true"
      >
        <CheckCircle className="h-10 w-10 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-playfair">Thank You!</h3>
      <p className="text-muted-foreground text-lg mb-6">
        Your message has been received. We look forward to bringing your vision to life.
      </p>
      <Button 
        onClick={onReset} 
        variant="outline"
        className="border-luxury-taupe/30 hover:bg-luxury-beige/20"
        aria-label="Send another message"
      >
        Send Another Message
      </Button>
    </motion.div>
  );
};

export default ThankYouMessage;
