import { motion } from "framer-motion";
import { FileCheck2, UserSearch, GraduationCap, PlaneTakeoff, LifeBuoy } from "lucide-react";
import consultImg from "@/assets/aegis-consult.jpg";

const steps = [
  { icon: FileCheck2, title: "Apply & verify", desc: "Submit your CV and documents. We verify certificates, experience and police clearance." },
  { icon: UserSearch, title: "Screening & matching", desc: "Competency interview, English assessment and a match to a live employer vacancy." },
  { icon: GraduationCap, title: "Pre-departure training", desc: "Role-specific upskilling, cultural orientation and employer interview coaching." },
  { icon: PlaneTakeoff, title: "Documentation & travel", desc: "Contract, visa, medicals, NEA clearance and flight logistics handled end to end." },
  { icon: LifeBuoy, title: "Aftercare abroad", desc: "Arrival support and a dedicated welfare officer for the full length of your contract." },
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
              Most candidates move from first interview to boarding pass in 8 to 16 weeks. You'll always know
              which stage you're at and what happens next.
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
