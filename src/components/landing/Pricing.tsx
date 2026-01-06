import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Tarifs
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque élève a des besoins différents : je propose un accompagnement sur mesure, 
            à la séance ou sous forme de packs dégressifs pour un suivi régulier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Cours à l'unité
            </h3>
            <p className="text-muted-foreground mb-6">Sans engagement</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-accent">85€</span>
                <span className="text-muted-foreground">/ 1h</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-accent">130€</span>
                <span className="text-muted-foreground">/ 1h30</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Idéal pour un besoin ponctuel ou un premier contact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary p-8 rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
              Recommandé
            </div>
            
            <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-6">
              Accompagnement dans la durée
            </h3>
            <p className="text-primary-foreground/80 mb-6">Packs de 3, 5 ou 10 séances</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <Check className="w-5 h-5 text-accent" />
                <span>Tarifs dégressifs selon la formule choisie</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <Check className="w-5 h-5 text-accent" />
                <span>Suivi régulier, gain de temps</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <Check className="w-5 h-5 text-accent" />
                <span>Progression visible</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="mailto:bevacoaching@gmail.com">Me contacter</a>
            </Button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-12 text-lg"
        >
          <span className="text-accent font-medium">Premier échange gratuit</span> pour cerner les besoins 
          et construire un accompagnement sur-mesure.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
