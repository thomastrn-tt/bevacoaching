import { motion } from "framer-motion";
import { PenTool, Mic, Calendar } from "lucide-react";

const pillars = [
  {
    icon: PenTool,
    title: "Méthodologie & excellence académique",
    points: [
      "Apprendre à rédiger des copies solides en français, histoire-géo, HGGSP, philo",
      "Savoir analyser un sujet, construire une problématique et un plan clair",
      "Gagner des points en maîtrisant les attentes précises des correcteurs"
    ]
  },
  {
    icon: Mic,
    title: "Prise de parole & oraux",
    points: [
      "Préparer les oraux du brevet, du bac ou des entretiens pour le supérieur",
      "Apprendre à structurer un discours clair et convaincant",
      "Gagner en aisance à l'oral et réussir à captiver son auditoire"
    ]
  },
  {
    icon: Calendar,
    title: "Organisation & apprentissage efficace",
    points: [
      "S'organiser sur le long terme : construire un rétro-planning, anticiper les révisions",
      "Apprendre à apprendre : mémorisation active adaptée au profil de l'élève",
      "Limiter le stress, éviter la procrastination, retrouver la motivation"
    ]
  }
];

const Pillars = () => {
  return (
    <section id="pillars" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Mes 3 piliers d'accompagnement
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-primary rounded-lg w-fit mb-6">
                <pillar.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
