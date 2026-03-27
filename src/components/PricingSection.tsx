import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Sprint elamus",
    price: "350",
    laps: "3 ringi",
    popular: false,
    features: [
      "3 kiiret ringi Porsche Ringil",
      "Kogenud võidusõitja roolis",
      "Kohustuslik turvavarustus",
      "Raadioside läbi kiivri juhiga",
      "Juhised ja ülevaade enne sõitu",
      "Fotod autos/autoga/juhiga",
    ],
  },
  {
    name: "Endurance elamus",
    price: "500",
    laps: "5 ringi",
    popular: true,
    features: [
      "5 kiiret ringi Porsche Ringil",
      "Kogenud võidusõitja roolis",
      "Kohustuslik turvavarustus",
      "Raadioside läbi kiivri juhiga",
      "Juhised ja ülevaade enne sõitu",
      "GoPro video elamusest",
      "Fotod autos/autoga/juhiga",
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-racing-carbon">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Hinnad
          </motion.p>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-gradient mb-4"
          >
            VALI OMA ELAMUS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Kõik paketid sisaldavad kogenud võidusõitjat roolis ja täielikku turvavarustust. Võtame vastu ka ettevõtete
            tellimusi.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative bg-gradient-card rounded-lg p-8 border flex flex-col ${
                pkg.popular ? "border-accent glow-accent" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded">
                    Populaarseim
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.laps}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl">{pkg.price}</span>
                  <span className="text-muted-foreground">€</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={pkg.popular ? "racing" : "outline"} size="lg" className="w-full uppercase font-semibold tracking-widest" asChild>
                <a href="#contact">BRONEERI</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          Suurematele gruppidele teeme erihinda.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
