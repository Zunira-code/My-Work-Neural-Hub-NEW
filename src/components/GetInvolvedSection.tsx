import { motion } from "framer-motion";
import { Home, TrendingUp, Users, ArrowRight } from "lucide-react";

const paths = [
  {
    icon: Home,
    label: "Property Owners",
    title: "List your abandoned property",
    desc: "Have a derelict home gathering dust? We'll evaluate it, renovate it, and turn it into income with impact.",
    cta: "List Your Property",
    color: "from-primary to-primary-glow",
  },
  {
    icon: TrendingUp,
    label: "Donors & Investors",
    title: "Invest in dignified housing",
    desc: "Join our impact investing programme — measurable returns alongside measurable social transformation.",
    cta: "Partner With Us",
    color: "from-secondary to-secondary",
  },
  {
    icon: Users,
    label: "Families",
    title: "Apply for affordable housing",
    desc: "If you're seeking safe, dignified housing in Nairobi at rents you can truly afford — we want to hear from you.",
    cta: "Apply for Housing",
    color: "from-accent to-accent",
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="involved" className="section bg-gradient-soft kanga-pattern">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Get Involved</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 text-balance">Three ways to help build peace</h2>
          <p className="text-muted-foreground text-lg">Whether you have property, capital, or simply a need for a home — there's a place for you here.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all group">
              <div className={`h-2 bg-gradient-to-r ${p.color}`} />
              <div className="p-7">
                <div className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">For {p.label}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition">
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
