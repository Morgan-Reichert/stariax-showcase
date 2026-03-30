import logo from "@/assets/stariax-logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container mx-auto px-6 py-16">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <img src={logo} alt="Stariax" className="h-16 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Groupe technologique basé à Bruxelles, réunissant l'innovation au service de l'humain.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Filiales</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#subsidiaries" className="hover:text-foreground transition-colors">Challenger IA</a></li>
            <li><a href="#subsidiaries" className="hover:text-foreground transition-colors">MindScope</a></li>
            <li><a href="#subsidiaries" className="hover:text-foreground transition-colors">NightWatch</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Liens</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">À propos</a></li>
            <li><a href="#values" className="hover:text-foreground transition-colors">Nos valeurs</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            <li>
              <a href="https://www.linkedin.com/company/stariax" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stariax Belgium. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
