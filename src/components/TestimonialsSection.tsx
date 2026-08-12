import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  { role: "Caregiver, placed in Manchester, UK", text: "They handled my visa, my certificates and even my first month's accommodation. I paid nothing to be placed — I only paid for my own passport." },
  { role: "Healthcare Assistant, placed in Dublin, Ireland", text: "The pre-departure training made the difference. By the time I started on the ward I already understood the systems and the expectations." },
  { role: "Barista, placed in Doha, Qatar", text: "I trained on espresso and latte art in Nairobi for three weeks before I flew. My employer said I was the most prepared hire they had taken that year." },
  { role: "Receptionist, placed in Dubai, UAE", text: "Someone from Aegis called me every month for the first six months. That kind of follow-up is rare." },
  { role: "Mixologist, placed on a cruise line", text: "Clear contract, clear salary, clear rotation. No surprises, which is exactly what you want when you are leaving home." },
  { role: "Care home group, Ireland (employer)", text: "We asked for twelve HCAs. We received a vetted shortlist in under three weeks and retained eleven past their first year." },
];

const TestimonialsSection = () => {
  return (
    <section id="insights" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Success Stories</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3 text-balance">Trusted by candidates and employers alike</h2>
          <p className="text-muted-foreground text-lg">Names withheld to protect the privacy of our placed candidates and client organisations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.blockquote key={t.role}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition">
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-foreground/85 leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <footer className="text-xs font-semibold text-muted-foreground">{t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
