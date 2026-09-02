import type { Metadata } from 'next';
import { TreeDeciduous, Droplets, Scissors } from 'lucide-react';
import { MediaPlaceholder, SectionHead } from '@/components/ui';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Jardinier paysagiste à Aubagne & Marseille — Thierry Scarica, 30 ans de métier',
  description:
    'Taille, élagage, abattage délicat, arrosage automatique, création et entretien de jardins à Aubagne, Marseille 13011, Auriol, Gémenos. Le paysagiste du réseau ABAO.',
};

const PRESTA = [
  { icon: Scissors, t: 'Taille & élagage', d: 'haies, palmiers, fruitiers, abattages délicats et travaux acrobatiques' },
  { icon: Droplets, t: 'Arrosage automatique', d: 'création, réparation et mise en hivernage de réseaux d’arrosage' },
  { icon: TreeDeciduous, t: 'Création & entretien', d: 'engazonnement, plantations, débroussaillage, maçonnerie paysagère, contrats à l’année' },
];

export default function Page() {
  return (
    <article>
      <PageHero
        videoSrc="/videos/pv-jardinier.mp4"
        poster="/videos/pv-jardinier-poster.jpg"
        kicker="Le réseau abao.fr — Aubagne · Marseille 11e · Auriol · Gémenos"
        titre="Jardinier paysagiste"
        accent="Thierry Scarica, 30 ans de métier."
        intro="De la taille de haie au jardin créé de A à Z, en passant par les contrats d’entretien à l’année, dans toute la vallée de l’Huveaune."
        itemsTitre="Prestations"
        items={[
          { t: 'Taille & élagage', d: 'haies, palmiers, fruitiers, abattages délicats et travaux acrobatiques' },
          { t: 'Arrosage automatique', d: 'création, réparation et mise en hivernage de réseaux d’arrosage' },
          { t: 'Création & entretien', d: 'engazonnement, plantations, débroussaillage, contrats à l’année' },
          { t: 'Maçonnerie paysagère', d: 'murets, bordures, allées — le jardin pensé comme un tout' },
        ]}
      />

      <section id="suite" className="border-y border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Prestations" />
          <div className="grid gap-6 lg:grid-cols-3">
            {PRESTA.map((x) => (
              <div key={x.t} className="card-glass rounded-2xl p-7">
                <span className="grid size-11 place-items-center rounded-xl border border-[#8fbe6d]/40 bg-[#8fbe6d]/10 text-[#8fbe6d]"><x.icon size={18} /></span>
                <h2 className="mt-4 font-display text-xl font-bold">{x.t}</h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ivory/60">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <MediaPlaceholder src="/images/jardin-paysager.webp" alt="Jardin paysager entretenu" plan="Réalisation · jardin d’agrément" ratio="aspect-[21/9]" />
      </section>
    </article>
  );
}
