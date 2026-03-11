import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <a href="#" className="font-display text-2xl tracking-wider">
              ELAMUSSÕIT
            </a>
            <p className="text-muted-foreground text-sm mt-2">Porsche GT3 Cup võidusõidu kogemus</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Elamus
            </a>
            <a href="#car" className="text-muted-foreground hover:text-foreground transition-colors">
              Auto & Sõitja
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Hinnad
            </a>
            <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors">
              Asukoht
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Elamussõit. Kõik õigused kaitstud.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
