import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import CeoSection from "@/components/CeoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <AboutSection />
      <CeoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
