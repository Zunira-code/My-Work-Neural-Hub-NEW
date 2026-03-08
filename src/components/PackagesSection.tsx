import { motion } from "framer-motion";
import { Check, Zap, Crown, Briefcase } from "lucide-react";

const packages = [
  {
    icon: Briefcase,
    name: "Growth Package",
    subtitle: "General Admin",
    description: "Ideal for small business owners and solo entrepreneurs.",
    price: "1,200",
    period: "20hrs/week · Part-time",
    features: [
      "Email and calendar management",
      "Basic data entry and research",
      "Travel booking and expense tracking",
      "Basic customer support (chat/email)",
      "Social media scheduling & posting",
      "Bookkeeping & invoice management",
      "CRM data entry & lead tracking",
      "Document preparation & file organization",
    ],
    popular: false,
  },
  {
    icon: Zap,
    name: "Specialist Package",
    subtitle: "Niche Specific",
    description: "Best for real estate agents, law firms, and e-commerce businesses.",
    price: "2,800",
    period: "40hrs/week · Full-time",
    features: [
      "Real Estate: Listing management, CRM scrubbing, cold lead follow-up",
      "E-commerce: Shopify order fulfillment, Amazon seller central",
      "Graphic design, transcription, customer ticket handling",
      "Influencer outreach and stock level monitoring",
      "Sales pipeline management & cold outreach (LinkedIn/email)",
      "Email marketing campaigns & automation flows",
      "SEO content writing & blog management",
      "Workflow automation (Zapier, Notion, AI tools)",
    ],
    popular: true,
  },
  {
    icon: Crown,
    name: "Executive Partner",
    subtitle: "C-Suite Support",
    description: "Best for CEOs and high-level executives.",
    price: "3,500",
    period: "40hrs/week · Full-time",
    features: [
      "High-level project coordination",
      "Managing other team members",
      "AI-driven content creation & social media strategy",
      "24/7 emergency availability",
      "KPI reporting & analytics dashboards",
      "Event, webinar & product launch coordination",
      "Investor relations & board meeting prep",
      "Strategic vendor & partnership management",
    ],
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All packages include trained, managed virtual assistants ready from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.popular
                  ? "hero-bg text-primary-foreground ring-2 ring-accent shadow-2xl scale-[1.03]"
                  : "glass-card"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                pkg.popular ? "bg-accent/20" : "bg-accent/10"
              }`}>
                <pkg.icon className={`w-6 h-6 ${pkg.popular ? "text-accent" : "text-accent"}`} />
              </div>

              <h3 className={`text-xl font-bold mb-1 ${pkg.popular ? "" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm font-medium mb-3 ${
                pkg.popular ? "text-accent" : "text-accent"
              }`}>
                {pkg.subtitle}
              </p>
              <p className={`text-sm mb-6 ${
                pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                {pkg.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${pkg.popular ? "" : "text-foreground"}`}>
                  ${pkg.price}
                </span>
                <span className={`text-sm ${pkg.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  /month
                </span>
                <p className={`text-xs mt-1 ${pkg.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  {pkg.period}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      pkg.popular ? "text-accent" : "text-accent"
                    }`} />
                    <span className={`text-sm ${
                      pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition ${
                  pkg.popular
                    ? "bg-accent text-accent-foreground hover:brightness-110"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
