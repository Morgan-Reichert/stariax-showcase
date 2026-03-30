# Stariax Showcase

> Site vitrine officiel du groupe technologique Stariax Belgium — Bruxelles

---

## Présentation

**Stariax Showcase** est le site vitrine du groupe **Stariax Belgium**, présentant l'écosystème de produits technologiques développés par le groupe basé à Bruxelles. Il agrège et met en avant toutes les filiales et applications du groupe : MindScope, NightWatch, Challenger IA, et plus.

Site en ligne : [stariax.fr](https://stariax.fr)

---

## Stack Technique

| Composant     | Technologie                                |
|---------------|--------------------------------------------|
| Framework     | Vite 5 + React 18 + TypeScript 5           |
| UI / Styles   | Tailwind CSS 3 + shadcn/ui (Radix UI)      |
| Animations    | Framer Motion 12                           |
| Routing       | React Router DOM 6                         |
| Formulaires   | React Hook Form 7 + Zod                    |
| Requêtes      | TanStack Query 5                           |
| Icônes        | Lucide React                               |
| Tests         | Vitest + Playwright                        |
| Build         | Vite (SWC)                                 |

---

## Installation & Lancement

**Prérequis** : Node.js 18+ ou Bun

```bash
# Cloner le repo
git clone https://github.com/Morgan-Reichert/stariax-showcase.git
cd stariax-showcase

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build
```

---

## Structure du Projet

```
stariax-showcase/
├── src/                  # Code source React
│   ├── components/       # Composants réutilisables + shadcn/ui
│   ├── pages/            # Pages / routes
│   ├── hooks/            # Hooks personnalisés
│   └── lib/              # Utilitaires
├── public/               # Assets statiques
├── components.json       # Config shadcn/ui
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## Groupe Stariax

| Projet | Description |
|--------|-------------|
| [MindScope](https://github.com/Morgan-Reichert/mindscope) | Suivi santé mentale avec IA locale |
| [NightWatch](https://github.com/Morgan-Reichert/nightwatch) | PWA sociale de suivi en soirée |
| [Stariax Showcase](https://github.com/Morgan-Reichert/stariax-showcase) | Site vitrine du groupe |
| [Challenger IA](https://github.com/Morgan-Reichert/challenger-ia) | Plateforme IA — bientôt disponible |

---

*Stariax Belgium — Bruxelles, 2026*
