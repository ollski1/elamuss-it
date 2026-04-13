import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Timer, Shield, Zap, Trophy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "460 hobujõudu",
    description: "Võidusõiduks ehitatud 3.8L boksermootoriga GT3 Cup",
  },
  {
    icon: Timer,
    title: "3-5 kiiret ringi",
    description: "Võidusõidu kogemus Porsche Ringil",
  },
  {
    icon: Shield,
    title: "Ohutus",
    description: "Professionaalne varustus ja kogenud võidusõitja roolis",
  },
  {
    icon: Trophy,
    title: "Tehase võidusõiduauto",
    description: "Sama auto, mida on kasutatud Porsche Supercupis ja erinevates Porsche Cupi sarjades",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-racing-carbon">
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
              <iframe
                src="https://www.youtube.com/embed/-szBOjIngFU"
                title="Porsche GT3 Cup racing experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 inline-flex bg-accent text-accent-foreground px-8 py-4 rounded">
              <div>
                <p className="font-display text-4xl">10+</p>
                <p className="text-sm uppercase tracking-widest">aastat kogemust</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Elamus</p>
            <h2 className="font-display text-4xl md:text-5xl text-gradient mb-6">
              UNUSTAMATU
              <br />
              ADRENALIIN
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Istu kaassõitja kohale ehtsas Porsche 911 GT3 Cup võidusõiduautos ja saa osa tundest, mida kogeb
              võidusõitja rajal. Istudes kogenud võidusõitja kõrvalpingil, tunned igat kurvi, pidurdust, kiirendust täie
              intensiivsusega.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
