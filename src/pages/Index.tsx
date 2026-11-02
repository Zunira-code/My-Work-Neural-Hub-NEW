import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import SectorsSection from "@/components/SectorsSection";
import JobsSection from "@/components/JobsSection";
import DestinationsSection from "@/components/DestinationsSection";
import ProcessSection from "@/components/ProcessSection";
import EmployersSection from "@/components/EmployersSection";
import FAQSection from "@/components/FAQSection";
import KenyaSection from "@/components/KenyaSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Healthcare Jobs in Germany for Kenyans | Aegis Global"
        description="Aegis Global recruits Kenyan nurses, clinical officers, healthcare support professionals and doctors for healthcare pathways in Germany. Enquire online."
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
        <FAQSection />
        <ContactSection />
      </main>
      <WhatsAppFab />
      <Footer />
    </div>
  );
};


export default Index;
