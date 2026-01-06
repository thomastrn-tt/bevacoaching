import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary-foreground mb-2">
              Eva Boisrond
            </h2>
            <p className="text-accent italic font-serif">Coaching Scolaire</p>
          </div>
          
          <div className="space-y-3">
            <a 
              href="mailto:bevacoaching@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              bevacoaching@gmail.com
            </a>
            <a 
              href="tel:0667175765"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              06 67 17 57 65
            </a>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
              32 rue d'Aboukir, 75002 Paris
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Eva Boisrond Coaching. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
