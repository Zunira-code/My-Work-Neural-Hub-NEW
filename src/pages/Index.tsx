import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import SectorsSection from "@/components/SectorsSection";
import JobsSection from "@/components/JobsSection";
import DestinationsSection from "@/components/DestinationsSection";
import ProcessSection from "@/components/ProcessSection";
import EmployersSection from "@/components/EmployersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import KenyaSection from "@/components/KenyaSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Recruitment Agency in Nairobi, Kenya | Jobs Abroad — Aegis Global"
        description="Nairobi-based recruitment agency placing Kenyan caregivers, healthcare assistants, receptionists, baristas and mixologists in verified jobs abroad. Apply online or via WhatsApp."
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <SectorsSection />
        <JobsSection />
        <DestinationsSection />
        <ProcessSection />
        <EmployersSection />
        <KenyaSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <WhatsAppFab />
      <Footer />
    </div>
  );
};


export default Index;
