import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "JM",
    role: "E-commerce Founder",
    location: "California, USA",
    rating: 5,
    quote:
      "Our VA handles everything from Shopify orders to customer support. Revenue is up 40% and I finally have time to focus on product development.",
  },
  {
    initials: "SK",
    role: "Real Estate Broker",
    location: "Toronto, Canada",
    rating: 5,
    quote:
      "The listing management and lead follow-up alone have paid for the service ten times over. I closed 12 more deals last quarter.",
  },
  {
    initials: "AL",
    role: "Marketing Agency CEO",
    location: "London, UK",
    rating: 5,
    quote:
      "Having an Executive Partner manage my calendar, team, and investor decks has been transformative. It's like having a chief of staff.",
  },
  {
    initials: "RH",
    role: "SaaS Startup Founder",
    location: "Berlin, Germany",
    rating: 5,
    quote:
      "The workflow automation and CRM management freed up 25 hours a week for our team. Best investment we've made this year.",
  },
  {
    initials: "TN",
    role: "Law Firm Partner",
    location: "Sydney, Australia",
    rating: 5,
    quote:
      "Document preparation and scheduling used to eat half my day. Now my VA handles it all flawlessly, even across time zones.",
  },
  {
    initials: "MW",
    role: "Content Creator",
    location: "New York, USA",
    rating: 5,
    quote:
      "Social media scheduling, influencer outreach, email campaigns — all handled. I just focus on creating content now.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding hero-bg relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Real results from businesses across five continents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
