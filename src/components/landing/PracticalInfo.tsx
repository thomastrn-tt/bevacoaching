import { motion } from "framer-motion";
import { MapPin, Video, Calendar, FileText, Clock, CreditCard } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    title: "Lieu des séances",
    content: "32 rue d'Aboukir, 75002 Paris (présence d'un chat, prévoir antihistaminiques si besoin)"
  },
  {
    icon: Video,
    title: "Séances en visio",
    content: "Possibles sur demande via Google Meet"
  },
  {
    icon: Calendar,
    title: "Réservation des créneaux",
    content: "Via un lien Calendly communiqué après validation du pack choisi"
  },
  {
    icon: FileText,
    title: "Matériel à apporter",
    content: "Cahier d'histoire-géo, de français (ou autre matière), copies récentes et tout document utile"
  },
  {
    icon: Clock,
    title: "Modalités d'annulation",
    content: "Prévenir au moins 24h à l'avance. Toute séance annulée à moins de 24h reste due"
  },
  {
    icon: CreditCard,
    title: "Conditions de paiement",
    content: "Paiement demandé avant le premier cours par virement ou liquide. Paiement en deux fois sans frais possible"
  }
];

const PracticalInfo = () => {
  return (
    <section id="practical" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Aspects pratiques
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infos.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
