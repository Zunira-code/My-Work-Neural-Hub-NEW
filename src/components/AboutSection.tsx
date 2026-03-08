import { motion } from "framer-motion";
import { Globe, Users, Cpu, Shield } from "lucide-react";

const stats = [
  { icon: Globe, label: "Countries Served", value: "5+" },
  { icon: Users, label: "Active Clients", value: "50+" },
  { icon: Cpu, label: "AI-Powered Tools", value: "10+" },
  { icon: Shield, label: "Uptime Guarantee", value: "99%" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a Kenya-based virtual assistant agency revolutionizing productivity with AI. Our team supports clients across the globe — USA, Canada, UK, Germany, and Australia — ensuring efficient, results-oriented services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every assistant is trained, managed, and equipped with cutting-edge AI tools to deliver exceptional value from day one. We don't just assist — we accelerate your business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
