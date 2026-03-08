import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding hero-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Ready to supercharge your business with an AI-enhanced virtual assistant? Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-6"
        >
          <a
            href="mailto:hello@mywork.co.ke"
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition"
          >
            <Mail className="w-8 h-8 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">hello@mywork.co.ke</span>
          </a>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition"
          >
            <MessageCircle className="w-8 h-8 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">WhatsApp</span>
          </a>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <MapPin className="w-8 h-8 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Nairobi, Kenya</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
