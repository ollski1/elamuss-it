import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import trackImage from "@/assets/track.jpg";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden card-shadow">
              <img
                src={trackImage}
                alt="Porsche Ring racing track aerial view"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Asukoht</p>
            <h2 className="font-display text-4xl md:text-5xl text-gradient mb-6">
              PORSCHE RING
              <br />
              PÄRNU
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Porsche Ring on Eesti esimene ja ainus rahvusvahelise tasemega ringrada, mis asub Audru vallas Pärnu
              lähistel. Rada on projekteeritud pakkuma mitmekesist ja tehnilist sõitu, sobides ideaalselt ja ohutult
              elamussõiduks.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Aadress</h3>
                  <p className="text-muted-foreground">
                    Porsche Ring, Audru vald
                    <br />
                    Pärnu maakond, Eesti
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hooaeg</h3>
                  <p className="text-muted-foreground">
                    Mai - September
                    <br />
                    Sõidud sõltuvad ilmast ja raja saadavusest
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Kestus</h3>
                  <p className="text-muted-foreground">
                    Kogu kogemus kestab umbes 1-2 tundi
                    <br />
                    Sisaldab juhiseid ja ettevalmistust
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
