import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="terms" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8" ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              Tingimused & Info
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6 -mt-4"
          >
            <div className="text-muted-foreground text-sm space-y-4 text-center mt-4">
              <p>Käesolev võidusõidu elamus teenus on täielikult sõltumatu eraettevõtte poolt pakutav teenus.</p>
              <p>
                Porsche AG, Porsche Motorsport ning Porsche Eesti ei ole antud teenusega mingil viisil seotud, seda ei
                toeta, ei sponsoriseeri ega volita.
              </p>
              <p>
                Teenuse raames kasutatav Porsche GT3 Cup sõiduk on eraomandis olev sõiduk ning teenuse pakkuja ei ole
                Porsche ametlik partner, edasimüüja ega esindaja. Kõik sõidud, koolitused ja elamused toimuvad
                täielikult teenuse pakkuja vastutusel ja organisatsiooni all.
              </p>
              <p>
                Porsche kaubamärgid (sh Porsche®, GT3 Cup jt) on kasutatud üksnes sõiduki mudeli kirjeldamiseks ega
                tähenda mingit koostööd või seost Porsche kontserniga.
              </p>
            </div>

            <p className="text-muted-foreground text-center">
              Enne sõitu palume tutvuda vastutusest lahtiütlemise lepinguga, mis tuleb osalejal allkirjastada enne
              elamust.
            </p>

            <Button variant="racing" size="lg" asChild>
              <a href="/documents/Vastutusest_lahtiutlemise_disclaimer_leping.docx" download>
                <FileDown className="w-5 h-5 mr-2" />
                Lae alla vastutuse leping
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TermsInfoSection;
