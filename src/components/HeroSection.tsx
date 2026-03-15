import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-assistant.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Enhanced Virtual Assistants</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Welcome to{" "}
              <span className="text-gradient">My Work Neural Hub</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed">
              Based in Kenya, we provide AI-enhanced virtual assistants to clients in the USA, Canada, UK, Germany, and Australia. Trained, managed, and ready to work from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition text-base"
              >
                View Packages <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://httpslovabledevprojects436f5fd9-b4b8-4c8b-9f7.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold hover:bg-primary-foreground/5 transition text-base"
              >
                🧠 Neural Hub Login
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
              <img
                src={heroImg}
                alt="AI-enhanced virtual assistant professional"
                className="relative rounded-3xl w-full max-w-lg shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-16 glass-card rounded-2xl px-4 py-3"
              >
                <p className="text-sm font-semibold text-foreground">🌍 5+ Countries</p>
                <p className="text-xs text-muted-foreground">Global coverage</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-20 glass-card rounded-2xl px-4 py-3"
              >
                <p className="text-sm font-semibold text-foreground">⚡ AI-Powered</p>
                <p className="text-xs text-muted-foreground">Neural efficiency</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
