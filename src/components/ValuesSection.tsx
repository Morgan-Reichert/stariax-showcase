import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Handshake, Rocket, Eye } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparence",
    description: "Une communication ouverte et honnête avec nos utilisateurs, partenaires et collaborateurs.",
  },
  {
    icon: Rocket,
    title: "Audace",
    description: "Oser repousser les limites du possible et emprunter des chemins inexplorés dans la tech.",
  },
  {
    icon: Handshake,
    title: "Impact Social",
    description: "Chaque produit est conçu pour apporter une valeur réelle à la société et améliorer le quotidien.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "La quête permanente de qualité dans chaque ligne de code, chaque interaction, chaque décision.",
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="values" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Nos valeurs
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Ce qui nous
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              anime au quotidien
            </span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border/50 bg-card/40 p-10 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 text-primary group-hover:from-primary/30 group-hover:to-primary/10 transition-colors duration-300">
                  <v.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
