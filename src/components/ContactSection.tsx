import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, ArrowUpRight, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container relative z-10 mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Parlons de votre
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              prochain projet
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Vous avez une question, une opportunité de collaboration ou souhaitez en savoir plus sur nos filiales ?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {[
            {
              icon: MapPin,
              title: "Localisation",
              value: "Bruxelles, Belgique",
              href: undefined,
            },
            {
              icon: Mail,
              title: "Email",
              value: "stariax.dev.a@outlook.com",
              href: "mailto:stariax.dev.a@outlook.com",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "Stariax Group",
              href: "https://www.linkedin.com/company/stariax",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group rounded-xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} />
              </div>
              <div className="text-sm text-muted-foreground">{item.title}</div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <div className="mt-1 font-medium text-foreground">{item.value}</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:contact@stariax.be"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 glow-blue"
          >
            <Send size={20} />
            Envoyer un message
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
