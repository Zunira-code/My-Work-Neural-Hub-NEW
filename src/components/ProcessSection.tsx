import { motion } from "framer-motion";
import { FileCheck2, UserSearch, GraduationCap, PlaneTakeoff, LifeBuoy } from "lucide-react";
import consultImg from "@/assets/aegis-consult.jpg";

const steps = [
  { icon: FileCheck2, title: "Apply & assess", desc: "Share your CV, healthcare qualifications, registration and clinical experience for an individual review." },
  { icon: GraduationCap, title: "Language & recognition", desc: "Identify German language, qualification recognition and licensing requirements for your profession." },
  { icon: UserSearch, title: "Employer matching", desc: "Discuss suitable vacancies and interview with healthcare employers, subject to eligibility and availability." },
  { icon: PlaneTakeoff, title: "Visa & preparation", desc: "Review the employment offer and applicable visa requirements before making travel arrangements." },
  { icon: LifeBuoy, title: "Arrival & onboarding", desc: "Agree your arrival arrangements and professional onboarding with your employer before departure." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">How It Works</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
              From application to arrival — five clear stages
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your Germany pathway depends on your profession, language level, qualification recognition and visa process. We discuss the next steps for your circumstances — without promising a fixed timeline.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={consultImg} alt="Aegis recruitment consultant briefing a candidate in Nairobi" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative bg-card rounded-xl border border-border p-5 hover:shadow-soft transition">
              <div className="text-[11px] font-bold text-secondary mb-3">STEP {i + 1}</div>
              <div className="w-10 h-10 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
