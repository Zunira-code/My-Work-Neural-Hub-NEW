import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const towns = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Machakos",
  "Nyeri", "Kakamega", "Meru", "Kisii", "Kitale", "Malindi", "Garissa", "Embu", "Kericho",
];

const KenyaSection = () => {
  return (
    <section id="kenya" className="section bg-background">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">Recruitment Agency in Kenya</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 text-balance">
            Applying from Kenya? Start with our Nairobi office.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aegis Global Recruitment Agency is based in Westlands, Nairobi, and works with Kenyan job seekers countrywide —
            from Mombasa and Kisumu to Nakuru, Eldoret and Thika. Registered Nurses (RN, KRCHN/BSN), Clinical Officers, Health Service Support professionals, Medical Doctors, Perioperative Nurses and Psychiatric Nurses can enquire about healthcare recruitment pathways in Germany.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your pathway is assessed individually, including professional recognition and German language requirements. Apply online or contact our Nairobi team on WhatsApp to discuss your qualifications and experience.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-glow transition">
              Apply from Kenya <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+254716534393" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border font-semibold text-sm text-foreground hover:bg-muted transition">
              <Phone className="w-4 h-4" /> +254 716 534 393
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold text-lg text-foreground">Candidates we serve across Kenya</h3>
          </div>
          <ul className="flex flex-wrap gap-2 mb-6">
            {towns.map((t) => (
              <li key={t} className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">{t}</li>
            ))}
          </ul>

          <dl className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-semibold text-foreground">Office</dt>
              <dd className="text-muted-foreground">Westlands, Nairobi, Kenya</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Open</dt>
              <dd className="text-muted-foreground">Mon–Fri, 8:00am – 5:30pm EAT</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Languages</dt>
              <dd className="text-muted-foreground">English &amp; Kiswahili</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Email</dt>
              <dd><a href="mailto:linkedin@mywork.co.ke" className="text-primary hover:underline">linkedin@mywork.co.ke</a></dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default KenyaSection;
