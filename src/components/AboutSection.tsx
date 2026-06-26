import { motion } from "framer-motion";
import { Sparkles, Shield, Users, Leaf, Eye } from "lucide-react";
import familyImg from "@/assets/amani-family.jpg";

const values = [
  { icon: Shield, label: "Dignity", desc: "Every family deserves a home that feels safe and beautiful." },
  { icon: Leaf, label: "Sustainability", desc: "Eco-conscious renovations using local materials." },
  { icon: Users, label: "Community", desc: "Built with and for the neighbourhoods we serve." },
  { icon: Eye, label: "Transparency", desc: "Open books, honest stories, measurable impact." },
  { icon: Sparkles, label: "Affordability", desc: "Truly accessible rents — not aspirational pricing." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gradient-soft kanga-pattern">
      <div className="container-narrow grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative">
          <img src={familyImg} alt="Kenyan family standing proudly outside their renovated home" loading="lazy" width={1024} height={1024}
            className="rounded-2xl shadow-lift w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl p-5 shadow-card max-w-[220px]">
            <div className="font-serif text-3xl text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Lives touched since we began our journey in Nairobi</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4">Our Story</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 text-balance leading-tight">
            A home is more than walls — <em className="text-secondary not-italic">it is peace.</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Amani Homes was born in the heart of Nairobi from a single conviction: every Kenyan family deserves a safe, dignified place to call home. We discovered hundreds of abandoned, derelict properties across the city — and a deep housing crisis that touches our communities every day.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            So we set out to bridge that gap. We acquire neglected buildings, renovate them with care and craftsmanship, and lease them at truly affordable rates to families, single mothers, the elderly, and the underserved.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {values.map((v, i) => (
              <motion.div key={v.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/60 hover:shadow-soft transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{v.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{v.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
