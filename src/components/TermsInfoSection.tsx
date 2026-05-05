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
          <div className="text-center mb-16" ref={ref}>
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
            className="flex flex-col items-center gap-6"
          >
            <p className="text-muted-foreground text-center">
              Enne sõitu palume tutvuda vastutusest lahtiütlemise lepinguga.
            </p>
            <Button variant="racing" size="lg" asChild>
              <a
                href="/documents/Vastutusest_lahtiutlemise_disclaimer_leping.docx"
                download
              >
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