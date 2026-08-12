import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const regions = [
  { region: "Gulf & Middle East", places: ["United Arab Emirates", "Qatar", "Saudi Arabia", "Oman", "Bahrain"] },
  { region: "Europe", places: ["United Kingdom", "Ireland", "Germany", "Poland", "Malta"] },
  { region: "North America", places: ["Canada", "United States"] },
  { region: "Asia-Pacific & Maritime", places: ["Australia", "Singapore", "International cruise lines"] },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="section bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Where We Place</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-balance">Fourteen countries. One standard of care.</h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              We only work with employers who meet our welfare charter: written contracts, lawful visas, fair wages,
              safe accommodation and a named contact on the ground. If an employer can't meet it, we walk away.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20">
              <Globe2 className="w-4 h-4 text-accent" />
              <span className="text-sm">Verified employers · Welfare-first placement</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {regions.map((r, i) => (
              <motion.div key={r.region}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/15 p-5">
                <h3 className="font-display font-semibold text-lg text-accent mb-3">{r.region}</h3>
                <ul className="space-y-1.5 text-sm text-primary-foreground/80">
                  {r.places.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
