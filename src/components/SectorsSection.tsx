import { healthcareRoles } from "@/lib/recruitment";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Headset, ArrowUpRight } from "lucide-react";

const icons = [HeartPulse, Stethoscope, Headset, Stethoscope, HeartPulse, HeartPulse];
const sectors = healthcareRoles.map((role, index) => ({ ...role, icon: icons[index], desc: role.description }));

const SectorsSection = () => {
  return (
    <section id="sectors" className="section bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Our Specialisms</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
            Healthcare expertise. A Germany-focused pathway.
          </h2>
          <p className="text-muted-foreground text-lg">
            Our focus is healthcare: registered nursing, clinical practice, medical care and health service support. Each application is assessed against the relevant German requirements.
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


        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
