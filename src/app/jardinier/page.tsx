import type { Metadata } from 'next';
import { TreeDeciduous, Droplets, Scissors } from 'lucide-react';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

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
    <article className="pt-24">
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-8 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4">Le réseau abao.fr — Aubagne · Marseille 11e · Auriol · Gémenos</p>
          <h1 className="h-chapter text-[clamp(2.4rem,6.5vw,5rem)]">
            <Reveal as="span">Jardinier</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-[#8fbe6d]">paysagiste</span>
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70">
            Thierry Scarica, <strong className="text-ivory">30 ans d’expérience</strong>, entretient jardins et
            espaces verts de la vallée de l’Huveaune : de la taille de haie au jardin créé de A à Z,
            en passant par les contrats d’entretien à l’année.
          </p>
          <div className="mt-8"><CallCta label="Demander un devis jardin" sub="déplacement et devis gratuits" /></div>
        </div>
        <MediaPlaceholder type="video" src="/images/jardinier.webp" alt="Travail de la terre au jardin" plan="PLAN · Bêchage au lever du soleil · 5 s" ratio="aspect-[4/3]" priority />
      </header>

      <section className="border-y border-line bg-night-2 py-16">
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
