import { healthcareRoles } from "@/lib/recruitment";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

const jobs = healthcareRoles;

const JobsSection = () => {
  return (
    <section id="jobs" className="section bg-gradient-soft">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Healthcare Opportunities</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3 text-balance">Healthcare roles we recruit for</h2>
            <p className="text-muted-foreground">Explore our healthcare recruitment categories. Current vacancy availability, recognition requirements and employer criteria are confirmed during assessment.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition shrink-0">
            Enquire about a role <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((j, i) => (
            <motion.article key={j.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.06 }}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-card hover:border-primary/25 transition-all group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">{j.tag}</span>
                  <h3 className="font-display font-semibold text-lg text-foreground mt-1 group-hover:text-primary transition-colors">{j.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-md bg-muted text-primary flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Professional eligibility and vacancy availability assessed individually
              </div>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition">
                Apply now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
