import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import home1 from "@/assets/home-1.jpg";
import home2 from "@/assets/home-2.jpg";
import home3 from "@/assets/home-3.jpg";

const homes = [
  { img: home1, name: "Kibera Family Apartment", area: "Kibera", rent: "KSh 8,500", beds: 2, baths: 1, size: "55 m²", tag: "Recently Renovated" },
  { img: home2, name: "Eastleigh Garden Cottage", area: "Eastleigh", rent: "KSh 12,000", beds: 3, baths: 1, size: "78 m²", tag: "Family Friendly" },
  { img: home3, name: "Kasarani Townhouse", area: "Kasarani", rent: "KSh 18,500", beds: 3, baths: 2, size: "95 m²", tag: "Sustainable Build" },
  { img: home1, name: "Mathare Sunlit Studio", area: "Mathare", rent: "KSh 7,000", beds: 1, baths: 1, size: "32 m²", tag: "For Single Earners" },
  { img: home2, name: "Dandora Family Home", area: "Dandora", rent: "KSh 14,000", beds: 3, baths: 2, size: "82 m²", tag: "Solar Powered" },
  { img: home3, name: "Korogocho Co-Living", area: "Korogocho", rent: "KSh 9,500", beds: 2, baths: 1, size: "60 m²", tag: "Community Built" },
];

const areas = ["All Areas", "Kibera", "Eastleigh", "Kasarani", "Mathare", "Dandora", "Korogocho"];

const HomesSection = () => {
  const [filter, setFilter] = useState("All Areas");
  const filtered = filter === "All Areas" ? homes : homes.filter((h) => h.area === filter);

  return (
    <section id="homes" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Our Homes</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 text-balance">Beautifully renovated. Affordably priced.</h2>
          <p className="text-muted-foreground text-lg">Browse homes across Nairobi — renovated with dignity, leased with love.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {areas.map((a) => (
            <button key={a} onClick={() => setFilter(a)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === a ? "bg-primary text-primary-foreground shadow-soft" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}>
              {a}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((h, i) => (
            <motion.article key={`${h.name}-${i}`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={h.img} alt={h.name} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/95 backdrop-blur-sm text-xs font-medium text-primary">
                  {h.tag}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold shadow-soft">
                  {h.rent}<span className="text-xs opacity-80">/mo</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-foreground mb-1">{h.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {h.area}, Nairobi
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mb-4">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4" /> {h.beds}</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4" /> {h.baths}</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4" /> {h.size}</span>
                </div>
                <a href="#involved" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#involved" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition">
            See All Properties <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomesSection;
