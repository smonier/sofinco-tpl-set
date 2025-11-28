import { Area, jahiaComponent } from "@jahia/javascript-modules-library";
import { Layout } from "../Layout.jsx";
import classes from "./sofincoHome.module.css";

type PageProps = {
  "jcr:title"?: string;
};

const navLinks = [
  { href: "#offres", label: "Nos offres" },
  { href: "#simuler", label: "Simuler" },
  { href: "#services", label: "Services" },
  { href: "#conseils", label: "Conseils" },
];

const loanOffers = [
  {
    title: "Crédit auto",
    description: "Financez l'achat ou le renouvellement de votre véhicule tout en gardant la maîtrise de votre budget.",
    rate: "Taux fixe indicatif : 4,10%", // static marketing copy only
    amount: "Jusqu'à 75 000 €",
    cta: "Simuler mon crédit auto",
  },
  {
    title: "Prêt travaux",
    description: "Réalisez vos projets de rénovation énergétique, d'agrandissement ou de décoration intérieure.",
    rate: "Taux fixe indicatif : 3,95%",
    amount: "Jusqu'à 75 000 €",
    cta: "Estimer mon budget travaux",
  },
  {
    title: "Crédit personnel",
    description: "Un financement souple pour vos envies : mariage, études, équipement ou coup de cœur imprévu.",
    rate: "Taux fixe indicatif : 5,20%",
    amount: "De 3 000 € à 75 000 €",
    cta: "Demander une simulation",
  },
];

const highlights = [
  {
    title: "Réponse rapide",
    description: "Une première indication de faisabilité en quelques minutes et une signature 100 % en ligne.",
  },
  {
    title: "Accompagnement",
    description: "Des conseillers disponibles par téléphone ou en agence pour affiner votre projet.",
  },
  {
    title: "Engagement responsable",
    description: "Un parcours simplifié et des informations claires pour vous aider à emprunter en toute confiance.",
  },
];

const insights = [
  {
    title: "Calculer sa capacité d'emprunt",
    description: "Nos guides pour estimer le montant à emprunter et choisir la durée adaptée à votre situation.",
  },
  {
    title: "Comprendre le crédit renouvelable",
    description: "Tout savoir sur son fonctionnement, ses avantages et comment bien l'utiliser.",
  },
  {
    title: "Assurance emprunteur",
    description: "Découvrez les garanties proposées et comment elles protègent votre projet et vos proches.",
  },
];

jahiaComponent(
  {
    componentType: "template",
    nodeType: "jnt:page",
    name: "sofincoHome",
    displayName: "Sofinco inspired home",
  },
  ({ "jcr:title": title }: PageProps) => (
    <Layout title={title ?? "Sofinco"}>
      <div className={classes.page}>
        <header className={classes.header}>
          <div className={classes.brand} aria-label="Sofinco">
            <span className={classes.brandMark} />
            <span className={classes.brandName}>Sofinco</span>
          </div>
          <nav className={classes.nav} aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={classes.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={classes.actions}>
            <button type="button" className={classes.secondaryButton}>
              Espace client
            </button>
            <button type="button" className={classes.primaryButton}>
              Faire une simulation
            </button>
          </div>
        </header>

        <main>
          <section className={classes.hero} id="simuler">
            <div className={classes.heroContent}>
              <p className={classes.kicker}>Crédits & solutions financières</p>
              <h1 className={classes.title}>Donnez vie à vos projets avec Sofinco</h1>
              <p className={classes.subtitle}>
                Une offre complète de crédits à la consommation pour accompagner vos envies : auto, travaux, loisirs ou projets
                de vie.
              </p>
              <div className={classes.heroCtas}>
                <button type="button" className={classes.primaryButton}>
                  Simuler mon projet
                </button>
                <button type="button" className={classes.ghostButton}>
                  Être rappelé par un conseiller
                </button>
              </div>
              <ul className={classes.trustList}>
                <li>Réponse de principe immédiate</li>
                <li>Signature électronique sécurisée</li>
                <li>Frais de dossier offerts</li>
              </ul>
            </div>
            <div className={classes.heroPanel}>
              <div className={classes.panelCard}>
                <p className={classes.panelLabel}>Simulation express</p>
                <p className={classes.panelValue}>À partir de 3 000 €</p>
                <p className={classes.panelHint}>Durée ajustable et mensualités modulables selon vos besoins.</p>
                <div className={classes.panelGrid}>
                  <div>
                    <p className={classes.panelSubLabel}>Montant</p>
                    <p className={classes.panelStrong}>75 000 €</p>
                  </div>
                  <div>
                    <p className={classes.panelSubLabel}>Durée</p>
                    <p className={classes.panelStrong}>Jusqu'à 84 mois</p>
                  </div>
                  <div>
                    <p className={classes.panelSubLabel}>Démarches</p>
                    <p className={classes.panelStrong}>100 % en ligne</p>
                  </div>
                </div>
                <button type="button" className={classes.secondaryButton}>
                  Lancer la simulation
                </button>
              </div>
            </div>
          </section>

          <section className={classes.offerSection} id="offres">
            <div className={classes.sectionHeader}>
              <p className={classes.kicker}>Offres Sofinco</p>
              <h2 className={classes.sectionTitle}>Des solutions pour chaque projet</h2>
              <p className={classes.sectionLead}>
                Des crédits souples et adaptés, avec des parcours guidés pour garder le contrôle sur votre budget.
              </p>
            </div>
            <div className={classes.cardGrid}>
              {loanOffers.map((offer) => (
                <article key={offer.title} className={classes.card}>
                  <div className={classes.cardHeader}>
                    <h3 className={classes.cardTitle}>{offer.title}</h3>
                    <span className={classes.badge}>Populaire</span>
                  </div>
                  <p className={classes.cardText}>{offer.description}</p>
                  <dl className={classes.cardMeta}>
                    <div>
                      <dt>Taux</dt>
                      <dd>{offer.rate}</dd>
                    </div>
                    <div>
                      <dt>Montant</dt>
                      <dd>{offer.amount}</dd>
                    </div>
                  </dl>
                  <button type="button" className={classes.primaryButton}>
                    {offer.cta}
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className={classes.highlightSection} id="services">
            <div className={classes.sectionHeader}>
              <p className={classes.kicker}>Nos engagements</p>
              <h2 className={classes.sectionTitle}>Un accompagnement à chaque étape</h2>
              <p className={classes.sectionLead}>
                Profitez d'outils simples, d'un suivi personnalisé et d'un parcours sécurisé de bout en bout.
              </p>
            </div>
            <div className={classes.highlightGrid}>
              {highlights.map((item) => (
                <article key={item.title} className={classes.highlightCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={classes.testimonials}>
            <div className={classes.sectionHeader}>
              <p className={classes.kicker}>Ils nous font confiance</p>
              <h2 className={classes.sectionTitle}>Des milliers de clients accompagnés</h2>
              <p className={classes.sectionLead}>
                "Une expérience fluide et une réponse rapide pour financer mes travaux. Les conseils sont clairs et rassurants." —
                Camille, cliente Sofinco
              </p>
            </div>
            <div className={classes.metrics}>
              <div>
                <p className={classes.metricValue}>4,7/5</p>
                <p className={classes.metricLabel}>Avis clients vérifiés</p>
              </div>
              <div>
                <p className={classes.metricValue}>+3 M</p>
                <p className={classes.metricLabel}>Clients accompagnés</p>
              </div>
              <div>
                <p className={classes.metricValue}>24h</p>
                <p className={classes.metricLabel}>Pour signer en ligne</p>
              </div>
            </div>
          </section>

          <section className={classes.insights} id="conseils">
            <div className={classes.sectionHeader}>
              <p className={classes.kicker}>Conseils</p>
              <h2 className={classes.sectionTitle}>Bien préparer votre crédit</h2>
              <p className={classes.sectionLead}>
                Nos ressources pour comprendre les étapes clés, comparer les offres et emprunter sereinement.
              </p>
            </div>
            <div className={classes.cardGrid}>
              {insights.map((item) => (
                <article key={item.title} className={classes.card}>
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                  <p className={classes.cardText}>{item.description}</p>
                  <button type="button" className={classes.secondaryButton}>
                    Lire l'article
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className={classes.contact}>
            <div>
              <p className={classes.kicker}>Besoin d'aide ?</p>
              <h2 className={classes.sectionTitle}>Nos conseillers sont à votre écoute</h2>
              <p className={classes.sectionLead}>
                Contactez-nous par téléphone, en agence ou planifiez un rendez-vous vidéo pour faire le point sur votre projet.
              </p>
            </div>
            <div className={classes.contactActions}>
              <button type="button" className={classes.primaryButton}>
                Contacter un conseiller
              </button>
              <button type="button" className={classes.ghostButton}>
                Trouver une agence
              </button>
            </div>
          </section>

          <Area name="main" />
        </main>
      </div>
    </Layout>
  ),
);
