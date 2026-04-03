import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Lock, ArrowRight, Sparkles } from "lucide-react";

const SurveySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="survey" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 radial-glow opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Votre avis compte
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Façonnez l'IA
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              de demain
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Les IA actuelles sont-elles vraiment à la hauteur ? Répondez à notre questionnaire anonyme
            et aidez-nous à construire une IA qui vous challenge — pas une qui vous flatte.
          </p>
        </motion.div>

        {/* Cards row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {[
            {
              icon: ClipboardList,
              title: "3 minutes",
              desc: "Un questionnaire court, pensé pour aller à l'essentiel.",
            },
            {
              icon: Lock,
              title: "100% anonyme",
              desc: "Aucune donnée personnelle collectée. Aucun compte requis.",
            },
            {
              icon: Sparkles,
              title: "Votre impact",
              desc: "Vos réponses influencent directement le développement de Challenger IA.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <div className="font-semibold text-foreground">{item.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://questionnaire-compla-kdjx.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-blue"
          >
            <ClipboardList size={20} />
            Répondre au questionnaire
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Lock size={12} />
            Anonyme · Aucune inscription · 3 min
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SurveySection;
