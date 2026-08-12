import { motion } from "framer-motion";
import { MapPin, Clock, Banknote, ArrowRight, Briefcase } from "lucide-react";

const jobs = [
  { title: "Live-in Caregiver", country: "United Kingdom", type: "Full-time · Sponsored", pay: "£23,200 – £26,000 / yr", tag: "Caregivers" },
  { title: "Healthcare Assistant (Care Home)", country: "Ireland", type: "Full-time · 2-yr contract", pay: "€30,000 – €34,000 / yr", tag: "Healthcare" },
  { title: "Hotel Receptionist", country: "United Arab Emirates", type: "Full-time · Live-in", pay: "AED 3,500 – 4,500 / mo", tag: "Receptionists" },
  { title: "Speciality Barista", country: "Qatar", type: "Full-time · Live-in", pay: "QAR 3,200 – 4,000 / mo", tag: "Baristas" },
  { title: "Cocktail Mixologist", country: "Saudi Arabia", type: "Full-time · Hotel group", pay: "SAR 4,000 – 5,200 / mo", tag: "Mixologists" },
  { title: "Elderly Care Assistant", country: "Canada", type: "Full-time · PR pathway", pay: "CAD 38,000 – 44,000 / yr", tag: "Caregivers" },
  { title: "Medical Receptionist", country: "Germany", type: "Full-time · Visa support", pay: "€2,400 – €2,900 / mo", tag: "Receptionists" },
  { title: "Cruise Line Bartender", country: "International (Cruise)", type: "8-month rotation", pay: "USD 1,800 – 2,600 / mo", tag: "Mixologists" },
];

const JobsSection = () => {
  return (
    <section id="jobs" className="section bg-gradient-soft">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Live Vacancies</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3 text-balance">Open roles hiring Kenyan talent now</h2>
            <p className="text-muted-foreground">Every listing is a verified employer contract with a written offer, defined hours and a lawful visa route.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition shrink-0">
            Submit your CV <ArrowRight className="w-4 h-4" />
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
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{j.country}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{j.type}</span>
                <span className="inline-flex items-center gap-1.5"><Banknote className="w-3.5 h-3.5" />{j.pay}</span>
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
