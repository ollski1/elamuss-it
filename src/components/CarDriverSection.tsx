import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import driverImage from "@/assets/driver.jpg";

const specs = [
  { label: "Mootor", value: "3.8L Bokser" },
  { label: "Võimsus", value: "460 hp" },
  { label: "0-100 km/h", value: "3.2s" },
  { label: "Tippkiirus", value: "296 km/h" },
  { label: "Kaal", value: "1,200 kg" },
  { label: "Käigukast", value: "6-käiguline Sequential" },
];

const CarDriverSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="car" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Tehnika
          </motion.p>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-gradient"
          >
            PORSCHE 911 GT3 CUP
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl mb-6">KOGENUD VÕIDUSÕITJA</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Autoroolis on kogenud võidusõitja, kes on sõitnud rahvusvahelistel võistlustel ja ringradadel aastast
              2014. Ta tunneb Porsche Ringi igat kurvi ja tagab sulle ohutu ja võimalikult autentse võidusõidu kogemuse.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              GT3 Cup on sama auto, mida on kasutatud Porsche Supercupis ja muudes Porsche Cupi sarjades üle maailma.
              See on puhas võidusõidumasin, mis on on loodud rajale - ilma kompromissideta.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="bg-card p-4 rounded border border-border"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="font-display text-xl text-foreground">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden card-shadow">
              <img src={driverImage} alt="Professional racing driver" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarDriverSection;
