import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Lightbulb, Users, Zap, PartyPopper, Shield } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Des solutions technologiques de pointe qui repoussent les frontières du possible.",
  },
  {
    icon: Zap,
    title: "Intelligence Artificielle",
    description: "L'IA au service de l'humain, pour des interactions plus riches et réfléchies.",
  },
  {
    icon: Users,
    title: "Santé Mentale",
    description: "Des outils numériques pour le dépistage, le suivi et l'accompagnement en santé mentale.",
  },
  {
    icon: PartyPopper,
    title: "Vie Nocturne",
    description: "Un réseau social alliant divertissement et sécurité dans les environnements festifs.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "La protection et le bien-être de nos utilisateurs au cœur de chaque produit.",
  },
  {
    icon: Globe,
    title: "Basé en Belgique",
    description: "Un groupe ancré à Bruxelles, au cœur de l'Europe technologique.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-50" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            À propos
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Un écosystème tech
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              à impact humain
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Stariax Belgium réunit sous un même toit des entreprises technologiques innovantes,
            chacune spécialisée dans un domaine clé de la transformation numérique.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="group rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20 group-hover:scale-110 transform duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
