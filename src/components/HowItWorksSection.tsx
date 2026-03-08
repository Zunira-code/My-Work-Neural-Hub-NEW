import { motion } from "framer-motion";
import { PhoneCall, UserCheck, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Book a Call",
    description: "Schedule a free consultation to discuss your business needs and goals.",
  },
  {
    icon: UserCheck,
    title: "Get Matched",
    description: "We pair you with a trained, vetted virtual assistant tailored to your industry.",
  },
  {
    icon: Rocket,
    title: "Onboard & Launch",
    description: "Your VA is briefed, tooled up, and ready to hit the ground running from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Grow",
    description: "Focus on strategy while your VA handles the rest. Scale up anytime.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Four steps to a more productive business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 relative">
                <step.icon className="w-8 h-8 text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
