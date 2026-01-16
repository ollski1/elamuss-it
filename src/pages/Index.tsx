import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CarDriverSection from "@/components/CarDriverSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <CarDriverSection />
      <GallerySection />
      <PricingSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
