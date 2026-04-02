import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, MessageSquare, Shield, Heart, Activity, FileText, Moon, PartyPopper, MapPin, Users, Github, ExternalLink } from "lucide-react";

const subsidiaries = [
  {
    name: "Challenger IA",
    tagline: "Le chatbot qui pousse à la réflexion",
    description:
      "Un LLM conçu pour challenger réellement ses utilisateurs, avec le taux de complaisance le plus bas du marché. Fini les réponses faciles — place à la pensée critique.",
    features: [
      { icon: MessageSquare, label: "Maïeutique numérique" },
      { icon: Shield, label: "Friction ajustable" },
      { icon: Brain, label: "Vision socratique" },
    ],
    gradient: "from-primary to-primary/60",
    heroIcon: Bot,
    accentColor: "hsl(228 60% 65%)",
    githubUrl: "https://github.com/Morgan-Reichert/challenger-ia",
    liveUrl: "https://challenger-ia-nine.vercel.app",
  },
  {
    name: "MindScope",
    tagline: "La santé mentale, accompagnée par la tech",
    description:
      "Application PWA mobile et web de dépistage, suivi et accompagnement en santé mentale. Tests de dépistage, orientation vers des spécialistes, outils de suivi quotidien et rapports IA pour les thérapeutes.",
    features: [
      { icon: Activity, label: "Suivi quotidien complet" },
      { icon: Heart, label: "Dépistage & orientation" },
      { icon: FileText, label: "Rapports IA pour thérapeutes" },
    ],
    gradient: "from-secondary to-secondary/60",
    heroIcon: Brain,
    accentColor: "hsl(35 40% 75%)",
    githubUrl: "https://github.com/Morgan-Reichert/mindscope",
    liveUrl: "https://mindscope-eight.vercel.app",
  },
  {
    name: "NightWatch",
    tagline: "La nuit, en toute confiance",
    description:
      "Réseau social dédié aux sorties nocturnes, conçu pour allier divertissement et sécurité dans les environnements festifs. Découvrez les événements, connectez-vous avec vos amis et rentrez en sécurité.",
    features: [
      { icon: Moon, label: "Sorties nocturnes" },
      { icon: Users, label: "Réseau social festif" },
      { icon: MapPin, label: "Sécurité & géolocalisation" },
    ],
    gradient: "from-purple-500 to-pink-500",
    heroIcon: PartyPopper,
    accentColor: "hsl(270 60% 60%)",
    githubUrl: "https://github.com/Morgan-Reichert/nightwatch",
    liveUrl: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const SubsidiariesSection = () => {
  return (
    <section id="subsidiaries" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader />

        <div className="mt-20 space-y-28">
          {subsidiaries.map((sub, i) => (
            <SubsidiaryCard key={sub.name} sub={sub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <span className="text-sm font-medium uppercase tracking-widest text-primary">
        Nos filiales
      </span>
      <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
        Des solutions qui
        <br />
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          changent la donne
        </span>
      </h2>
    </motion.div>
  );
};

const SubsidiaryCard = ({ sub, index }: { sub: typeof subsidiaries[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`grid gap-12 items-center lg:grid-cols-2`}>
      {/* Text */}
      <motion.div
        custom={index}
        variants={isEven ? cardVariants : cardVariantsRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={isEven ? "" : "lg:order-2"}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Bot size={14} />
          Filiale Stariax
        </div>
        <h3 className="mt-5 text-3xl font-bold text-foreground md:text-5xl">
          {sub.name}
        </h3>
        <p className={`mt-3 text-xl font-medium bg-gradient-to-r ${sub.gradient} bg-clip-text text-transparent`}>
          {sub.tagline}
        </p>
        <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
          {sub.description}
        </p>

        {/* Feature chips */}
        <div className="mt-8 flex flex-wrap gap-3">
          {sub.features.map((f) => (
            <motion.div
              key={f.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card/80 px-5 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
            >
              <f.icon size={16} className="text-primary" />
              {f.label}
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href={sub.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github size={16} />
            Voir le code
          </motion.a>
          {sub.liveUrl && (
            <motion.a
              href={sub.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink size={16} />
              Voir le projet
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Visual card */}
      <motion.div
        custom={index}
        variants={isEven ? cardVariantsRight : cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={isEven ? "" : "lg:order-1"}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl border border-border/50 bg-card/30 p-12 backdrop-blur-sm overflow-hidden"
        >
          {/* Glow */}
          <div
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-15 blur-[100px]"
            style={{ background: `radial-gradient(circle, ${sub.accentColor}, transparent)` }}
          />

          <div className="relative z-10 space-y-8">
            <motion.div
              className={`inline-flex rounded-2xl bg-gradient-to-br ${sub.gradient} p-6`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <sub.heroIcon size={48} className="text-primary-foreground" />
            </motion.div>

            <div className="space-y-4">
              {sub.features.map((f, fi) => (
                <motion.div
                  key={fi}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + fi * 0.15, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-lg bg-muted/40 px-5 py-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: `${fi * 0.5}s` }} />
                  <span className="text-foreground">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SubsidiariesSection;
