import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, BadgeCheck, Plane, Users } from "lucide-react";
import heroImg from "@/assets/aegis-hero.jpg";

const roles = ["Caregivers", "Healthcare Assistants", "Receptionists", "Baristas", "Mixologists"];

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Kenyan caregiver and healthcare assistant placed abroad by Aegis Global Recruitment Agency"
          className="w-full h-full object-cover object-center" width={1600} height={1104} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container-narrow relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 mb-6">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">Global Placement · Nairobi, Kenya</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.4rem] text-primary-foreground leading-[1.08] mb-5 text-balance">
            Kenyan talent, placed in trusted jobs around the world.
          </h1>

          <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Aegis Global Recruitment Agency connects skilled caregivers, healthcare assistants, receptionists, baristas
            and mixologists with vetted employers across the Gulf, Europe, North America and beyond — ethically, transparently and end to end.
          </p>

          {/* Search bar */}
          <div className="bg-background rounded-xl shadow-lift p-3 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-md bg-muted">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input aria-label="Job title" placeholder="Job title e.g. Caregiver" className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-md bg-muted">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input aria-label="Destination country" placeholder="Country e.g. UAE" className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground" />
            </div>
            <a href="#jobs" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition">
              Search Jobs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-primary-foreground/70 mr-1">Popular:</span>
            {roles.map((r) => (
              <a key={r} href="#jobs" className="text-xs px-3 py-1.5 rounded-full border border-primary-foreground/25 text-primary-foreground/90 hover:bg-primary-foreground/10 transition">
                {r}
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 max-w-lg">
            {[
              { icon: Users, n: "3,800+", l: "Candidates placed" },
              { icon: Plane, n: "14", l: "Destination countries" },
              { icon: BadgeCheck, n: "96%", l: "Contract completion" },
            ].map((s) => (
              <div key={s.l}>
                <s.icon className="w-4 h-4 text-primary mb-2" />
                <div className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">{s.n}</div>
                <div className="text-[11px] md:text-xs text-primary-foreground/70 mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
