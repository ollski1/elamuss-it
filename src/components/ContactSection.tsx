import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Sõnum saadetud!",
      description: "Võtame teiega peagi ühendust.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-racing-carbon">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4"
            >
              Kontakt
            </motion.p>
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-gradient mb-4"
            >
              VÕTA ÜHENDUST
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Saada meile päring või helista otse broneerimiseks
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-2xl mb-6">OTSEÜHENDUS</h3>
                <p className="text-muted-foreground mb-8">
                  Kas tekkis lisaküsimusi või on soov broneerida? Võta meiega ühendust ja leiame lahenduse.
                </p>
              </div>

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

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">Ettevõtetele pakume ka arveldamist. Küsi pakkumist!</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                      Nimi *
                    </label>
                    <Input id="name" name="name" required placeholder="Sinu nimi" className="bg-card border-border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-muted-foreground block mb-2">
                      E-post *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sinu@email.ee"
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm text-muted-foreground block mb-2">
                    Telefon
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="" className="bg-card border-border" />
                </div>

                <div>
                  <label htmlFor="package" className="text-sm text-muted-foreground block mb-2">
                    Pakett
                  </label>
                  <select
                    id="package"
                    name="package"
                    className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Vali pakett...</option>
                    <option value="adrenaliin">Sprint elamus (3 ringi) - 300€</option>
                    <option value="ekstreemelamus">Endurance elamus (5 ringi) - 400€</option>
                    <option value="group">Grupp / Ettevõte</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground block mb-2">
                    Sõnum
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Kirjelda oma soove või küsi küsimusi..."
                    rows={4}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button type="submit" variant="racing" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Saadan..."
                  ) : (
                    <>
                      Saada päring
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
