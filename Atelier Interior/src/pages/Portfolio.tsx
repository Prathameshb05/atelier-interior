
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Portfolio data
const projects = [
  {
    id: 1,
    title: "Modern Minimalist Apartment",
    category: "residential",
    tags: ["Living Room", "Kitchen", "Bedroom"],
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A complete renovation of a 2,500 sq ft apartment with a focus on minimalist design and functional spaces."
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    category: "residential",
    tags: ["Bathroom", "Living Room", "Terrace"],
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "An elegant penthouse suite featuring custom-made furniture, smart home technology, and panoramic city views."
  },
  {
    id: 3,
    title: "Boutique Hotel Lobby",
    category: "commercial",
    tags: ["Reception", "Lounge"],
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A sophisticated hotel lobby design that balances luxury and comfort with a distinctive artistic flair."
  },
  {
    id: 4,
    title: "Contemporary Office Space",
    category: "commercial",
    tags: ["Office", "Conference Room"],
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A modern workspace designed to promote creativity, collaboration, and employee well-being."
  },
  {
    id: 5,
    title: "Heritage Home Renovation",
    category: "residential",
    tags: ["Living Room", "Dining Room"],
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Careful restoration of a historic property, preserving original features while introducing modern comforts."
  },
  {
    id: 6,
    title: "Upscale Restaurant",
    category: "commercial",
    tags: ["Dining Area", "Bar"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "An atmospheric dining space with custom lighting, bespoke furniture, and a distinctive ambiance."
  },
  {
    id: 7,
    title: "Mountain Retreat",
    category: "residential",
    tags: ["Living Room", "Bedroom", "Exterior"],
    image: "https://images.unsplash.com/photo-1464288550599-43d5a73451b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A luxurious cabin design that harmonizes with its natural surroundings while providing modern comforts."
  },
  {
    id: 8,
    title: "Urban Loft Conversion",
    category: "residential",
    tags: ["Kitchen", "Living Room"],
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Transformation of an industrial space into a contemporary living environment with open-plan design."
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" }
];

// Collect all unique tags
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter projects by category and tag
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const tagMatch = !selectedTag || project.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

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
            <h1 className="section-title text-center">Portfolio</h1>
            <p className="section-subtitle text-center mb-12">Explore our collection of signature projects</p>
          </motion.div>
          
          {/* Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={
                    selectedCategory === category.id 
                      ? "bg-luxury-gold hover:bg-luxury-gold/90 text-white" 
                      : "border-luxury-taupe hover:border-luxury-gold hover:text-luxury-gold"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
            <div className="h-px md:w-px md:h-auto bg-border mx-4 hidden md:block"></div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                className={
                  selectedTag === null 
                    ? "bg-luxury-gold hover:bg-luxury-gold/90 text-white" 
                    : "border-luxury-taupe hover:border-luxury-gold hover:text-luxury-gold"
                }
                onClick={() => setSelectedTag(null)}
                size="sm"
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={
                    selectedTag === tag 
                      ? "bg-luxury-gold hover:bg-luxury-gold/90 text-white" 
                      : "border-luxury-taupe hover:border-luxury-gold hover:text-luxury-gold"
                  }
                  onClick={() => setSelectedTag(tag)}
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>
          
          {/* Project Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                >
                  <div className="overflow-hidden rounded-lg shadow-md relative">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-playfair text-lg md:text-xl font-bold">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">No projects found with the selected filters.</p>
            </motion.div>
          )}
          
          {/* Project Modal */}
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="sm:max-w-3xl">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-playfair">{selectedProject.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Project Details</h4>
                      <p className="mb-4">{selectedProject.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-1">Category</h4>
                        <p className="text-muted-foreground">
                          {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-1">Spaces</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="bg-luxury-beige/20 text-xs py-1 px-2 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
