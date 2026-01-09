import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import evaPortrait from "@/assets/eva-portrait.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--gold)/0.2),transparent_50%)]" />
      </div>
      
      <div className="container-narrow relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-2xl">
            <img 
              src={evaPortrait} 
              alt="Eva Boisrond" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
            Eva Boisrond
          </h1>
          <p className="text-accent text-lg md:text-xl font-serif italic mb-8">
            Coaching Scolaire
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-12">
            Le coaching scolaire : un complément qui renforce l'enseignement, 
            libère les connaissances et maximise, avec confiance, les résultats 
            personnels et académiques.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-accent text-accent hover:bg-accent hover:text-primary font-medium px-8"
            asChild
          >
            <a href="mailto:bevacoaching@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              bevacoaching@gmail.com
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8"
            asChild
          >
            <a href="tel:0667175765">
              <Phone className="w-4 h-4 mr-2" />
              06 67 17 57 65
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
