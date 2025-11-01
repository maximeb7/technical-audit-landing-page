export const siteConfig = {
  title: "Audit technique express — 1 jour | Maxime Bouger",
  description: "Audit technique express (1 jour) pour SaaS, startups et PME : diagnostic rapide, rapport synthétique, 3 quick wins actionnables et plan 30 jours.",
  ogImage: "/og-image.png",
};

export const home = {
  subtitle: "👋 Bonjour, moi c’est Maxime — Développeur Full‑Stack & consultant technique",
  title: "Audit technique express — 1 jour",
  description:
    "Audit technique express (1 jour) pour SaaS, startups et PME : diagnostic opérationnel, rapport synthétique, 3 quick wins actionnables et plan 30 jours.Idéal pour lever les freins techniques rapidement et prioriser les actions à fort impact.",
  features: [
    {
      title: "Diagnostic rapide",
      description: "Entretien de cadrage et revue ciblée du code & infra pour identifier les freins immédiats.",
    },
    {
      title: "Actions concrètes",
      description: "3 quick‑wins actionnables et priorisation pour impact mesurable à court terme.",
    },
    {
      title: "Restitution claire",
      description: "Rapport synthétique + réunion de restitution de 30 min pour passer à l’action.",
    },
  ],
  stats: [
    { value: "24h", label: "Délai d'exécution" },
    { value: "3", label: "Quick wins livrés" },
    { value: "30min", label: "Réunion de restitution" },
  ],
  services: [
    {
      title: "Audit express (1 jour)",
      description: "Brief 20 min, revue code/infra, rapport synthétique et 3 actions immédiates à déployer.",
    },
    {
      title: "Audit complet (3–5 jours)",
      description: "Analyse approfondie, plan d'actions priorisé et estimation des correctifs.",
    },
    {
      title: "Accompagnement / CTO partiel",
      description: "Intervention corrective, coaching tech ou CTO part‑time pour suivre l’exécution.",
    },
  ],
  process: [
    { step: "1. Réservation", detail: "Réservez un créneau via Calendly." },
    { step: "2. Brief & accès", detail: "Entretien 20 min pour cadrer périmètre et fournir accès lecture." },
    { step: "3. Audit 1j", detail: "Revue technique : code, CI/CD, monitoring, infra & sécurité." },
    { step: "4. Restitution", detail: "Rapport synthétique + réunion 30 min, Q&A et plan 30 jours." },
  ],
  proofs: [
    {
      name: "SNCF",
      logo: "/logos/sncf.svg",
      short: "Refonte d’un outil interne — amélioration fiabilité et performance.",
      alt: "Logo SNCF",
    },
    {
      name: "Rodeeo",
      logo: "/logos/rodeo.svg",
      short: "Plateforme SaaS de réservation — optimisation infra et scalabilité.",
      alt: "Logo Rodeeo",
    },
    {
      name: "SuiviDeFlotte",
      logo: "/logos/suivideflotte.svg",
      short: "Microservices & intégrations télésurveillance — fiabilité accrue.",
      alt: "Logo SuiviDeFlotte",
    },
  ],
  faq: [
    {
      q: "Dois‑je montrer mon code ?",
      a: "Oui, un accès lecture au repository est nécessaire. Nous pouvons signer une NDA si besoin et tout est examiné en lecture seule.",
    },
    {
      q: "Quels accès fournir ?",
      a: "Accès lecture Git, accès aux dashboards de monitoring (Sentry/Datadog) et, si possible, aux pipelines CI/CD.",
    },
    {
      q: "Combien de personnes participent ?",
      a: "Un contact technique (CTO / tech lead) suffit pour le brief initial; je m’occupe du reste.",
    },
    {
      q: "Peut‑on transformer l’audit en mission corrective ?",
      a: "Oui — après restitution je fournis une proposition chiffrée pour corriger les points critiques.",
    },
  ],
  cta: {
    title: "Prêt à diagnostiquer vos freins techniques ?",
    description: "Audit express 1j — rapport synthétique + 3 quick wins. Réservez votre diagnostic rapide.",
    primary: "Réserver un créneau",
    secondary: "Me contacter",
    calendly: "CALENDLY_LINK", // <-- remplace par ton identifiant Calendly ex: 'maximebouger/30min'
    email: "EMAIL_PLACEHOLDER", // <-- remplace par ton email
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Maxime Bouger`,
    contactLine: "Contact : EMAIL_PLACEHOLDER", // remplace par ton email
  }
};
