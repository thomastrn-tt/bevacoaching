import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Globe } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Enseignante agrégée passionnée",
    description: "Professeure agrégée d'histoire-géographie à l'École alsacienne (Paris), depuis 2021, dans un cadre exigeant et prestigieux."
  },
  {
    icon: Award,
    title: "Experte de l'accompagnement scolaire",
    description: "Responsable du programme d'excellence AlsaSup, qui guide les lycéens vers la réussite académique et l'orientation."
  },
  {
    icon: Briefcase,
    title: "Ancienne consultante en stratégie",
    description: "Une expérience professionnelle m'ayant permis de développer rigueur, gestion de projet et une fine compréhension des attentes du monde professionnel."
  },
  {
    icon: Globe,
    title: "Parcours international",
    description: "Une formation académique entre France, Canada et Royaume-Uni, me permettant d'allier exigence académique et pédagogie active tournée vers l'autonomie."
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <exp.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
