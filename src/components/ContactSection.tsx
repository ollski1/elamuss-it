import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-racing-carbon">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16" ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              Kontakt
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl mb-6">OTSEÜHENDUS</h3>
              <p className="text-muted-foreground mb-8">
                Kas tekkis lisaküsimusi või on soov broneerida? Võta meiega ühendust ja leiame lahenduse.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a
                    href="tel:+372 5021060"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    +372 5021060
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-post</p>
                  <a
                    href="mailto:olivertiirmaa@gmail.com"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    olivertiirmaa@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">Ettevõtetele pakume ka arveldamist. Küsi pakkumist!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
