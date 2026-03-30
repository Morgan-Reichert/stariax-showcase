import { motion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import logo from "@/assets/stariax-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-glow" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <Puzzle size={16} className="text-primary" />
            <span>Group Tech — Bruxelles, Belgique</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-foreground">L'innovation</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              qui connecte
            </span>
            <br />
            <span className="text-foreground">les idées.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Stariax est un groupe technologique basé à Bruxelles, réunissant des filiales innovantes 
            dans l'intelligence artificielle, la santé mentale numérique et le divertissement connecté.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#subsidiaries"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-blue"
            >
              Découvrir nos filiales
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-colors hover:bg-muted"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-8 border-t border-border/50 pt-12"
        >
          {[
            { value: "3", label: "Filiales" },
            { value: "Bruxelles", label: "Siège" },
            { value: "IA · Social", label: "Domaines" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-foreground md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
