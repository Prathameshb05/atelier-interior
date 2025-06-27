
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutBlurb from "@/components/home/AboutBlurb";
import ServicePreview from "@/components/home/ServicePreview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <AboutBlurb />
        <ServicePreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
