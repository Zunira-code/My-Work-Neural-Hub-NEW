import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import healthcareImg from "@/assets/aegis-germany-healthcare.jpg";

const services = [
  { title: "Nursing recruitment", desc: "Registered nurses and specialised perioperative and psychiatric nursing professionals." },
  { title: "Medical recruitment", desc: "Medical doctors assessed for the appropriate recognition and licensing pathway." },
  { title: "Healthcare support", desc: "Health service support professionals matched to role-specific requirements." },
  { title: "Individual assessment", desc: "Qualification, experience and language review, including suitable pathways for Clinical Officers." },
];
const guarantees = [
  "Professional qualifications and clinical experience review",
  "German language and recognition requirements considered",
  "Role-specific employer requirements discussed upfront",
  "Recruitment focused on hospitals, clinics and care providers in Germany",
];

const EmployersSection = () => {
  return (
    <section id="employers" className="section bg-gradient-soft overflow-hidden">
      <div className="container-narrow grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">For German Healthcare Employers</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
            Healthcare talent from Kenya. Built around your needs.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Connect with Kenyan healthcare professionals for your hospital, clinic or care organisation in Germany. Share the qualifications, experience, language level and recognition status your roles require.
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

          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-accent text-primary-foreground font-semibold text-sm hover:brightness-105 transition shadow-soft">
            Request a shortlist <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lift">
            <img src={healthcareImg} alt="Nurse and doctor in a modern hospital" loading="lazy" width={1200} height={900} className="w-full object-cover" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default EmployersSection;
