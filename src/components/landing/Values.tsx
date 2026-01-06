import { motion } from "framer-motion";
import { Target, Heart, Compass } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Exigence & excellence",
    description: "Proposer un accompagnement rigoureux, structuré et à la hauteur des exigences académiques les plus élevées, pour permettre à chaque élève d'atteindre son meilleur niveau."
  },
  {
    icon: Heart,
    title: "Bienveillance & épanouissement",
    description: "Valoriser les forces uniques de chaque élève, l'aider à s'épanouir, à gagner en confiance et à oser voir plus loin, en construisant des ambitions à la hauteur de son potentiel."
  },
  {
    icon: Compass,
    title: "Autonomie & pédagogie active",
    description: "Faire de l'élève l'acteur principal de ses progrès : je guide, j'encadre, mais je le pousse à réfléchir, à explorer et à faire émerger ses propres réussites, pour bâtir une autonomie durable."
  }
];

const Values = () => {
  return (
    <section id="values" className="section-padding bg-primary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Ma démarche et mes valeurs
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto mb-6">
                <value.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
