import { ArrowRight, Stethoscope, Languages, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/aegis-germany-healthcare.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
    <img src={heroImg} alt="Healthcare professionals in a modern hospital" width={1600} height={1008} className="absolute inset-0 w-full h-full object-cover object-right" />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="container-narrow relative z-10 px-4 md:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary-foreground mb-5">HEALTHCARE RECRUITMENT · KENYA TO GERMANY</p>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground leading-tight mb-5">Aegis Global<br /><span className="text-primary-foreground">Healthcare careers in Germany.</span></h1>
        <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">Connecting Kenyan registered nurses, clinical officers, health service support professionals, medical doctors and specialised nurses with healthcare recruitment pathways in Germany.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#contact">Start your application <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="secondary"><a href="#jobs">Explore healthcare roles <ArrowRight /></a></Button>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-5 border-t border-primary-foreground/25 pt-6 max-w-xl">
          {[{ icon: Stethoscope, label: "Healthcare professionals" }, { icon: Languages, label: "German language pathway" }, { icon: FileCheck2, label: "Qualification assessment" }].map(({ icon: Icon, label }) => <div key={label} className="flex items-start gap-2 text-sm text-primary-foreground/85"><Icon className="w-5 h-5 shrink-0" />{label}</div>)}
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
