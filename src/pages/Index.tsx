import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectorsSection from "@/components/SectorsSection";
import JobsSection from "@/components/JobsSection";
import DestinationsSection from "@/components/DestinationsSection";
import ProcessSection from "@/components/ProcessSection";
import EmployersSection from "@/components/EmployersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SectorsSection />
        <JobsSection />
        <DestinationsSection />
        <ProcessSection />
        <EmployersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
