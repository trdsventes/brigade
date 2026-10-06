const VERS_OFFRE = "#offre";
// Le bouton de la section "offre" pointera vers Stripe à l'étape 3.
const VERS_PAIEMENT = "#offre";

const benefices = [
  {
    titre: "Un lien par clippeur",
    texte:
      "Chaque clippeur colle son lien dans sa bio. Tu sais d'où vient chaque clic, sans rien vérifier à la main.",
  },
  {
    titre: "La paie calculée pour toi",
    texte:
      "Tu fixes un tarif au millier de vues et un plafond mensuel. Brigade sort le montant dû à chacun.",
  },
  {
    titre: "Qui rapporte, qui a lâché",
    texte:
      "Un tableau, deux colonnes : ceux qui font des vues, ceux qui ne publient plus. Tu relances ou tu remplaces.",
  },
];

function Bouton({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      className={`flex min-h-14 items-center justify-center bg-accent px-6 text-center text-lg font-extrabold text-papier ${className}`}
    >
      Je pilote mon équipe — 59 €/mois
    </a>
  );
}

export default function Accueil() {
  return (
    <main className="mx-auto max-w-2xl px-5 pb-28 pt-8 sm:pb-16 sm:pt-14">
      <p className="font-mono text-sm font-bold uppercase tracking-widest">
        Brigade
      </p>

      <section className="mt-10">
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
          Pilote une équipe de clippeurs payés aux vues.
        </h1>
        <p className="mt-6 text-xl text-sourdine">
          Un lien de suivi par clippeur, les vues relevées, la paie calculée au
          millier de vues. Fini les tableurs.
        </p>
        <Bouton href={VERS_OFFRE} className="mt-8 w-full sm:w-auto" />
        <p className="mt-3 font-mono text-sm text-sourdine">
          Jusqu'à 25 clippeurs. Sans engagement.
        </p>
      </section>

      <section className="mt-16 border-y border-filet py-10">
        <p className="font-mono text-sm font-bold uppercase tracking-widest text-accent">
          Le vrai coût
        </p>
        <p className="mt-4 text-3xl font-extrabold leading-tight">
          25 comptes, 4 relevés par semaine :
          <span className="font-mono text-accent"> 100 relevés à la main</span>,
          chaque mois, avant même de calculer une paie.
        </p>
        <p className="mt-4 text-lg text-sourdine">
          Personne ne tient ce rythme plus de deux mois. Le levier s'arrête
          là où ton temps s'arrête.
        </p>
      </section>

      <section className="mt-12">
        <ol className="divide-y divide-filet border-b border-filet">
          {benefices.map((b, i) => (
            <li key={b.titre} className="flex gap-4 py-6">
              <span className="font-mono text-lg font-bold text-accent">
                0{i + 1}
              </span>
              <div>
                <h2 className="text-2xl font-extrabold">{b.titre}</h2>
                <p className="mt-2 text-lg text-sourdine">{b.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="offre" className="mt-12 border border-encre p-6">
        <p className="font-mono text-sm font-bold uppercase tracking-widest">
          L'offre
        </p>
        <p className="mt-3 font-mono text-5xl font-bold">
          59 €<span className="text-xl font-normal text-sourdine">/mois</span>
        </p>
        <ul className="mt-4 space-y-1 text-lg">
          <li>— Jusqu'à 25 clippeurs</li>
          <li>— Liens de suivi, relevé des vues, paie, tableau de bord</li>
          <li>— Résiliable à tout moment</li>
        </ul>
        <Bouton href={VERS_PAIEMENT} className="mt-6 w-full" />
        <p className="mt-4 text-sm text-sourdine">
          Les vues sont celles que chaque clippeur déclare ; tu les valides
          avant de payer. Brigade ne se connecte pas aux comptes des
          plateformes.
        </p>
      </section>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre bg-papier p-3 sm:hidden">
        <Bouton href={VERS_OFFRE} className="w-full" />
      </div>
    </main>
  );
}                                                                                                                                                   