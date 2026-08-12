import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import hospitalityImg from "@/assets/aegis-hospitality.jpg";

const services = [
  { title: "Permanent placement", desc: "Direct-hire recruitment with a 90-day replacement guarantee." },
  { title: "Bulk mobilisation", desc: "Cohorts of 10–500 workers sourced, trained and deployed on schedule." },
  { title: "Contract & seasonal staffing", desc: "Peak-season hospitality and care crews on fixed-term contracts." },
  { title: "Managed compliance", desc: "NEA licensing, attestation, medicals, visas and destination labour law." },
];

const guarantees = [
  "Pre-vetted, English-assessed candidates only",
  "Full document, medical and police-clearance pack",
  "Role-specific pre-departure training included",
  "Transparent, single-fee employer pricing",
  "Named account manager in Nairobi and on the ground",
  "Ethical recruitment — candidates never pay placement fees",
];

const EmployersSection = () => {
  return (
    <section id="employers" className="section bg-gradient-soft">
      <div className="container-narrow grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">For Employers</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
            Reliable staff, screened in Kenya, ready to work.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Kenya trains one of the world's strongest pipelines of care and hospitality professionals. We find them,
            verify them, prepare them, and hand you a shortlist you can actually hire from.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-lg border border-border p-4">
                <h3 className="font-semibold text-sm text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <ul className="space-y-2.5 mb-8">
            {guarantees.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                {g}
              </li>
            ))}
          </ul>

          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:brightness-105 transition shadow-soft">
            Request a shortlist <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lift">
            <img src={hospitalityImg} alt="Barista and hotel receptionist placed abroad by Aegis Global" loading="lazy" width={1200} height={900} className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 md:left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-card max-w-[15rem]">
            <div className="font-display font-bold text-3xl text-accent">21 days</div>
            <div className="text-xs text-primary-foreground/80 mt-1 leading-snug">Average time from brief to signed candidate offer</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmployersSection;
