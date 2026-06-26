import { motion } from "framer-motion";
import { Search, HandshakeIcon, Hammer, Key, HeartHandshake } from "lucide-react";
import beforeAfter from "@/assets/amani-before-after.jpg";

const steps = [
  { icon: Search, title: "Identify", desc: "We scout abandoned and derelict homes across Nairobi neighbourhoods." },
  { icon: HandshakeIcon, title: "Consult & Acquire", desc: "We meet community leaders, secure ownership transparently, plan with care." },
  { icon: Hammer, title: "Thoughtful Renovation", desc: "Local artisans rebuild with sustainable materials, solar where possible, water harvesting." },
  { icon: Key, title: "Affordable Leasing", desc: "Vetted families move in at rents they can genuinely afford — KSh 7k to 25k." },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "We stay present — maintenance, community programmes, financial coaching." },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="section bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container-narrow relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Our Process</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">From neglected to nurtured</h2>
          <p className="text-primary-foreground/80 text-lg">Five intentional steps. Hundreds of lives transformed.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src={beforeAfter} alt="Before and after renovation of a Nairobi home" loading="lazy" width={1280} height={800}
              className="rounded-2xl shadow-lift w-full" />
            <div className="flex justify-between mt-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">Before</span>
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">After</span>
            </div>
          </motion.div>

          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-5 group">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-2xl text-primary-foreground mb-1">{s.title}</h3>
                  <p className="text-primary-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
