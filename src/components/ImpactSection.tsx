import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stats = [
  { n: "127", l: "Homes Renovated", sub: "across 14 Nairobi neighbourhoods" },
  { n: "412", l: "Families Housed", sub: "including 87 single-parent homes" },
  { n: "85", l: "Local Jobs Created", sub: "artisans, builders, gardeners" },
  { n: "62 t", l: "CO₂ Saved", sub: "through sustainable renovation" },
  { n: "98%", l: "Tenant Retention", sub: "our families stay and thrive" },
  { n: "KSh 11k", l: "Average Monthly Rent", sub: "less than half of market rate" },
];

const stories = [
  { name: "Wanjiru M.", role: "Mother of three, Eastleigh", quote: "For the first time in my life, I have keys to a home I am proud of. My children sleep peacefully. That is everything." },
  { name: "Joseph K.", role: "Tenant, Kasarani", quote: "Amani didn't just give me a house. They gave me back my dignity. The neighbours, the garden, the light — it changed me." },
  { name: "Grace N.", role: "Community Partner", quote: "What they have done in our estate is beyond renovation. They have rebuilt belief in the place we call home." },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Our Impact</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 text-balance">Numbers that mean something</h2>
          <p className="text-muted-foreground text-lg">Every figure represents a key turned, a family welcomed, a future restored.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {stats.map((s, i) => (
            <motion.div key={s.l}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-border/60">
              <div className="font-serif text-4xl md:text-5xl text-primary mb-1">{s.n}</div>
              <div className="font-semibold text-foreground text-sm uppercase tracking-wider">{s.l}</div>
              <div className="text-muted-foreground text-xs mt-2 leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.figure key={s.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 relative">
              <Quote className="w-8 h-8 text-secondary/40 mb-3" />
              <blockquote className="text-foreground/85 leading-relaxed mb-5 italic">"{s.quote}"</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-warm text-secondary-foreground font-semibold flex items-center justify-center text-sm">
                  {s.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
