import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packs = [
  {
    id: "01",
    title: "Pack Confiance & Réussite",
    level: "tous niveaux",
    price: "480€ TTC",
    duration: "6h30 d'accompagnement",
    description: "Offrez à votre enfant un accompagnement sur mesure pour progresser, gagner en sérénité et reprendre confiance.",
    steps: [
      "Diagnostic initial : échange en visio ou téléphone, identification des points forts et blocages",
      "Organisation & planification : structurer son travail, anticiper les devoirs et examens",
      "Méthodes d'apprentissage : acquérir des méthodes efficaces, lutter contre la procrastination",
      "Révisions efficaces : fiches utiles, réviser intelligemment, s'auto-évaluer",
      "Gérer stress & erreurs : techniques pratiques, transformer les erreurs en leviers"
    ]
  },
  {
    id: "02",
    title: "Pack Méthodologie Écrite",
    level: "tous niveaux",
    price: "480€ TTC",
    duration: "6h30 d'accompagnement",
    description: "Maîtriser les grands types d'écrits scolaires, progresser en autonomie et améliorer durablement ses résultats.",
    steps: [
      "Diagnostic initial : analyse des copies et du bulletin pour identifier forces et lacunes",
      "Acquérir la méthodologie : présentation claire par type d'exercice (dissertation, analyse)",
      "Structurer sa réflexion : analyser un sujet, poser une problématique claire",
      "Améliorer sa rédaction : intro, développement, conclusion, clarté et style",
      "S'entraîner et progresser : exercices variés, corrections détaillées"
    ]
  },
  {
    id: "03",
    title: "Pack Préparation à l'Oral",
    level: "tous niveaux",
    price: "360€ TTC",
    duration: "5h d'accompagnement",
    description: "Maîtriser la prise de parole, structurer un discours convaincant et s'entraîner en conditions réelles.",
    steps: [
      "Diagnostic initial : évaluation des besoins spécifiques à l'oral",
      "Acquérir la méthodologie : bases d'une prise de parole réussie (regard, posture, discours)",
      "Délimitation du sujet : analyse critique, structuration de l'oral",
      "Simulations d'oral avec débriefings détaillés et retours constructifs"
    ]
  },
  {
    id: "04",
    title: "Pack Première – Vers les épreuves anticipées",
    level: "Première",
    price: "600€ TTC",
    duration: "8h d'accompagnement",
    description: "Préparer les épreuves anticipées avec méthode, renforcer ses compétences écrites et orales.",
    steps: [
      "Diagnostic initial : bilan des points forts et axes de progrès",
      "Maîtriser la méthodologie : dissertation (français, HG, HGGSP)",
      "Entraînement + corrections : bacs blancs, retours méthodologiques",
      "Préparation à l'oral : prise de parole, gestion du stress, simulations"
    ]
  },
  {
    id: "05",
    title: "Pack Terminale – Construire son avenir",
    level: "Terminale",
    price: "680€ TTC",
    duration: "8h d'accompagnement",
    description: "Clarifier son projet d'orientation, identifier ses forces et bâtir un dossier Parcoursup solide.",
    steps: [
      "Diagnostic initial : bilan des besoins, des attentes et des objectifs",
      "Mieux se connaître : identifier ses centres d'intérêt, valeurs, sources de motivation",
      "Affirmer son projet : identifier les domaines attractifs, approfondir les pistes",
      "Valoriser ses expériences : identifier ses atouts, construire un CV efficace",
      "Réussir Parcoursup : rédiger des lettres motivées convaincantes"
    ]
  },
  {
    id: "06",
    title: "Pack Prépa Sciences Po",
    level: "Terminale",
    price: "840€",
    duration: "11h d'accompagnement",
    description: "Comprendre les attendus de Sciences Po, affirmer ses atouts et s'entraîner efficacement à l'oral.",
    steps: [
      "Diagnostic initial : évaluation du dossier scolaire et pertinence de la candidature",
      "Connaître Sciences Po : valeurs, esprit, critères d'évaluation",
      "Identifier ses atouts : forces, qualités, récit personnel cohérent",
      "Construire un dossier solide : lettres percutantes, relectures détaillées",
      "Préparer l'oral : présentation 2 min, commentaire d'image, simulations"
    ]
  }
];

const Packs = () => {
  return (
    <section id="packs" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Découvrez les packs de coaching
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {packs.map((pack) => (
              <AccordionItem
                key={pack.id}
                value={pack.id}
                className="bg-card border border-border rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-accent font-serif text-2xl font-bold">{pack.id}</span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {pack.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{pack.level}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="border-t border-border pt-6">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="bg-accent/10 text-accent font-medium px-3 py-1 rounded-full text-sm">
                        {pack.price}
                      </span>
                      <span className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                        {pack.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{pack.description}</p>
                    <ul className="space-y-2">
                      {pack.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground italic mt-4">
                      Diagnostic initial offert (30 min) • Possibilité d'ajouter des séances supplémentaires
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Packs;
