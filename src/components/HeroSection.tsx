import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import heroImg from "@/assets/amani-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Renovated home in Nairobi at golden hour" className="w-full h-full object-cover animate-ken-burns" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-xs font-medium text-primary-foreground uppercase tracking-widest">Social Impact · Real Estate · Nairobi</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6 text-balance">
            Turning Abandoned Homes <em className="text-secondary not-italic">into</em> Hopeful Futures
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            We renovate neglected properties across Nairobi and provide affordable, dignified housing to families who need it most — restoring spaces, restoring hope.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#homes" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition shadow-card">
              Browse Available Homes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#involved" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition">
              Partner With Us
            </a>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {[
              { n: "127", l: "Homes Renovated" },
              { n: "412", l: "Families Housed" },
              { n: "85+", l: "Local Jobs Created" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl md:text-4xl text-secondary">{s.n}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-primary-foreground/60 text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-px h-12 bg-primary-foreground/40 animate-float-slow" />
      </div>
    </section>
  );
};

export default HeroSection;
