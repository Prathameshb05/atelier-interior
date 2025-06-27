
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import ThankYouMessage from "./ThankYouMessage";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  newsletter: z.boolean().default(false),
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      newsletter: false,
    },
  });

  useEffect(() => {
    // Focus the name input on mount for better user experience
    if (nameInputRef.current && !isSubmitted) {
      nameInputRef.current.focus();
    }
  }, [isSubmitted]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-luxury-taupe/10">
      <h2 
        className="font-playfair text-2xl md:text-3xl font-bold mb-8"
        id="contact-form-heading" 
      >
        Book a Free Consultation
      </h2>
      
      {isSubmitted ? (
        <ThankYouMessage onReset={() => setIsSubmitted(false)} />
      ) : (
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6" 
            ref={formRef}
            aria-labelledby="contact-form-heading"
            noValidate
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-luxury-charcoal" htmlFor="name">
                          Your Name
                          <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-white/70 border-luxury-taupe/30 focus-visible:ring-luxury-gold" 
                            {...field} 
                            id="name"
                            ref={nameInputRef}
                            aria-required="true"
                            autoComplete="name"
                          />
                        </FormControl>
                        <FormMessage aria-live="polite" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-luxury-charcoal" htmlFor="email">
                          Email Address
                          <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="email@example.com" 
                            type="email"
                            className="bg-white/70 border-luxury-taupe/30 focus-visible:ring-luxury-gold" 
                            {...field} 
                            id="email"
                            aria-required="true"
                            autoComplete="email"
                          />
                        </FormControl>
                        <FormMessage aria-live="polite" />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-luxury-charcoal" htmlFor="phone">
                        Phone Number <span className="text-sm font-normal">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(123) 456-7890" 
                          className="bg-white/70 border-luxury-taupe/30 focus-visible:ring-luxury-gold" 
                          {...field} 
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                        />
                      </FormControl>
                      <FormDescription className="text-sm text-muted-foreground">
                        We'll only call if we need clarification about your project.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-luxury-charcoal" id="project-type-label">
                        Project Type
                        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                      </FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        aria-labelledby="project-type-label"
                        aria-required="true"
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/70 border-luxury-taupe/30 focus:ring-luxury-gold">
                            <SelectValue placeholder="Select the type of project" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential Design</SelectItem>
                          <SelectItem value="commercial">Commercial Design</SelectItem>
                          <SelectItem value="renovation">Full Renovation</SelectItem>
                          <SelectItem value="furniture">Custom Furniture</SelectItem>
                          <SelectItem value="consultation">Design Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage aria-live="polite" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-luxury-charcoal" htmlFor="message">
                        Your Message
                        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project, space, and vision..."
                          className="min-h-[150px] bg-white/70 border-luxury-taupe/30 focus-visible:ring-luxury-gold"
                          {...field}
                          id="message"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage aria-live="polite" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-luxury-gold data-[state=checked]:border-luxury-gold"
                          id="newsletter"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-luxury-charcoal" htmlFor="newsletter">
                          Subscribe to our design newsletter for inspiration, tips and trends
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-white font-medium py-6 h-auto"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={isSubmitting ? "Submitting form, please wait" : "Book your free consultation"}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center text-lg">
                      Book Your Free Consultation
                      <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
