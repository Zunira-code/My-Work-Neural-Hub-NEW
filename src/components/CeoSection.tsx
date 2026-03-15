import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import zuniraPhoto from "@/assets/zunira-yusuf.jpg";

const CeoSection = () => {
  return (
    <section id="ceo" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our <span className="text-gradient">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-accent/20">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQEuhWSx92zjbg/feedshare-shrink_800/B4DZxs9O6KH4Ag-/0/1771354517392?e=1773273600&v=beta&t=7knN39LLE52MictgpEiy0UrEA1PjcekTJkRex8jazGU"
                alt="Zunira Yusuf, Founder and CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-1">Zunira Yusuf</h3>
            <p className="text-accent font-semibold mb-4">Founder & CEO</p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Zunira is the visionary leader behind My Work Neural Hub, driving innovation in AI-powered virtual assistance from Nairobi, Kenya. Her mission is to connect global businesses with top-tier African talent.
            </p>
            <a
              href="https://www.linkedin.com/in/zunira-yusuf-b802713a4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeoSection;
