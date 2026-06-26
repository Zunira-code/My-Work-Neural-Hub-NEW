import { motion } from "framer-motion";
import { Sun, Droplets, Recycle, Trees } from "lucide-react";

const items = [
  { icon: Sun, title: "Solar Where Possible", desc: "Rooftop solar reduces tenant electricity bills by up to 60%." },
  { icon: Droplets, title: "Rainwater Harvesting", desc: "Every home includes water collection tanks for daily use." },
  { icon: Recycle, title: "Reclaimed Materials", desc: "We salvage and reuse wherever original materials hold integrity." },
  { icon: Trees, title: "Green Spaces", desc: "Indigenous plants, gardens, and trees in every renovation." },
];

const SustainabilitySection = () => {
  return (
    <section className="section bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Sustainability & Community</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-5 text-balance leading-tight">Building futures that don't cost the earth.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our renovations are environmentally conscious by design. We partner with local NGOs, women-led building cooperatives, and youth training programmes to make every home an act of community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <motion.div key={it.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-6 shadow-soft hover:shadow-card transition">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <it.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
