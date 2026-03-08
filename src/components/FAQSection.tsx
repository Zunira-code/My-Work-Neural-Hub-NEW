import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What time zones do your virtual assistants work in?",
    a: "Our VAs are based in Kenya (EAT, GMT+3) and are trained to align with your business hours — whether you're in the US, UK, Canada, Germany, or Australia. Many of our VAs work flexible or overnight shifts to provide real-time support.",
  },
  {
    q: "How do you ensure data security and confidentiality?",
    a: "Every VA signs a strict NDA before onboarding. We use encrypted communication channels, secure cloud storage, and role-based access controls. Your data privacy is our top priority.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "After you book a consultation, we match you with a VA based on your industry and needs. You'll receive an onboarding checklist, a kick-off call, and your VA will be fully briefed and operational within 48 hours.",
  },
  {
    q: "Can I scale up or change my package later?",
    a: "Absolutely. You can upgrade, downgrade, or add additional VAs at any time. We're built to scale with your business — from solo founder to full C-suite support.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, PayPal, Wise, and major credit/debit cards. Invoices are sent monthly, and we offer flexible billing cycles for long-term clients.",
  },
  {
    q: "What tools and platforms are your VAs trained on?",
    a: "Our VAs are proficient in Slack, Notion, Trello, Asana, HubSpot, Salesforce, Shopify, QuickBooks, Google Workspace, Microsoft 365, Zapier, and many more. We also train VAs on your custom tools.",
  },
  {
    q: "What if I'm not satisfied with my virtual assistant?",
    a: "We offer a free replacement guarantee. If your VA isn't the right fit, we'll match you with a new one within 48 hours at no extra cost. Your satisfaction is non-negotiable.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
