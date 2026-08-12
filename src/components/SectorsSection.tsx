import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Headset, Coffee, Martini, ArrowUpRight } from "lucide-react";

const sectors = [
  {
    icon: HeartPulse,
    title: "Caregivers",
    desc: "Home care, elderly care and live-in support roles for families and care providers abroad.",
    skills: ["Elderly care", "Live-in care", "Disability support", "Palliative care"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Assistants",
    desc: "HCAs and nursing support staff for hospitals, care homes and rehabilitation centres.",
    skills: ["Care homes", "Hospital wards", "Patient handling", "Vitals & charting"],
  },
  {
    icon: Headset,
    title: "Receptionists",
    desc: "Front-office and guest relations professionals for hotels, clinics and corporate offices.",
    skills: ["Hotel front desk", "Medical reception", "Guest relations", "Admin support"],
  },
  {
    icon: Coffee,
    title: "Baristas",
    desc: "Speciality coffee professionals trained on espresso craft, latte art and high-volume service.",
    skills: ["Espresso craft", "Latte art", "Café operations", "Customer service"],
  },
  {
    icon: Martini,
    title: "Mixologists",
    desc: "Bartenders and cocktail specialists for hotels, cruise lines, lounges and fine-dining venues.",
    skills: ["Cocktail craft", "Bar management", "Wine & spirits", "Cruise & hotel bars"],
  },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Our Specialisms</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
            Five sectors. Deep expertise in each.
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't recruit for everything — we recruit exceptionally well for the roles the world is short of, and Kenya trains best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-card hover:border-primary/25 transition-all">
              <div className="w-11 h-11 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.skills.map((k) => (
                  <span key={k} className="text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{k}</span>
                ))}
              </div>
              <a href="#jobs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-secondary transition">
                View openings <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="rounded-xl bg-gradient-brand text-primary-foreground p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-semibold text-xl mb-2">Hiring at volume?</h3>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">
                We run bulk mobilisation campaigns — sourcing, screening, training and documentation for cohorts of 10 to 500 workers.
              </p>
            </div>
            <a href="#employers" className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:brightness-105 transition">
              Talk to our team <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
