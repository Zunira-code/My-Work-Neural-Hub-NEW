import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Asante sana! Message received.", description: "We'll be in touch within two working days." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="section bg-primary text-primary-foreground">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Get in Touch</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance leading-tight">Let's build something <em className="text-secondary not-italic">peaceful</em> together.</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Property to list, family in need, partnership in mind — we read every message and reply within two working days.
          </p>

          <div className="space-y-5 mb-10">
            <a href="mailto:hello@amanihomes.co.ke" className="flex gap-4 items-start group">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-widest">Email</div>
                <div className="font-medium">hello@amanihomes.co.ke</div>
              </div>
            </a>
            <a href="tel:+254700000000" className="flex gap-4 items-start group">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-widest">Phone</div>
                <div className="font-medium">+254 700 000 000</div>
              </div>
            </a>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-widest">Office</div>
                <div className="font-medium">Westlands, Nairobi · Kenya</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition" aria-label="Social link">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-xs text-primary-foreground/60">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Registered company in Kenya · CR12/Amani/2021
            </div>
          </div>
        </motion.div>

        <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="bg-card text-foreground rounded-2xl p-7 md:p-9 shadow-lift">
          <h3 className="font-serif text-2xl text-primary mb-1">Send us a message</h3>
          <p className="text-muted-foreground text-sm mb-6">We read every word.</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
              <input id="name" name="name" required maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                placeholder="Jane Wanjiku" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input id="email" name="email" type="email" required maxLength={255}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1.5">I'm interested in</label>
              <select id="interest" name="interest" required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                <option>Applying for housing</option>
                <option>Listing a property</option>
                <option>Impact investing</option>
                <option>Partnership / volunteering</option>
                <option>Press & media</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea id="message" name="message" required maxLength={1000} rows={5}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                placeholder="Tell us your story..." />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition shadow-soft disabled:opacity-60">
              {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
