import type { Metadata } from 'next';
import { Flame, FileCheck, Brush } from 'lucide-react';
import { RAMONAGE_PRIX } from '@/data/site';
import { MediaPlaceholder, SectionHead } from '@/components/ui';
import { Fade } from '@/components/motion/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Ramonage à Marseille & en PACA — dès 50 €, certificat fourni',
  description:
    'Ramonage de cheminées, poêles et conduits par le réseau ABAO : bois 60 €, gaz 50 €, fioul 80 €. Certificat numéroté pour votre assurance. Marseille, Aubagne et toute la région.',
};

export default function Page() {
  return (
    <article>
      <PageHero
        videoSrc="/videos/pv-ramonage.mp4"
        poster="/videos/pv-ramonage-poster.jpg"
        kicker="Le réseau abao.fr — Marseille & PACA"
        titre="Ramonage certifié"
        accent="obligatoire une fois par an, dès 50 €."
        intro="Nos ramoneurs protègent votre intérieur, travaillent aux cannes carbone et délivrent un certificat numéroté exigé par votre assurance."
        itemsTitre="Ce que comprend chaque passage"
        items={[
          { t: 'Matériel professionnel', d: 'cannes carbone, hérissons nylon ou métal selon le conduit, contrôle du tirage' },
          { t: 'Tous les foyers', d: 'cheminées ouvertes, inserts, poêles à bois et granulés, conduits gaz et fioul' },
          { t: 'Certificat numéroté', d: 'remis avec la facture après chaque passage — votre assurance l’exige en cas de sinistre' },
          { t: 'Tarifs affichés', d: 'bois 60 € · gaz 50 € · fioul 80 € · entretien chaudière fioul 125 €' },
        ]}
      />

      <section id="suite" className="border-y border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Tarifs — les seuls prix affichés du métier" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RAMONAGE_PRIX.map((p, i) => (
              <Fade key={p.conduit} delay={i * 0.07} className="card-glass rounded-2xl p-6 text-center">
                <p className="font-mono-tech text-4xl text-gradient-brass">{p.prix} €</p>
                <p className="mt-2 text-sm text-ivory/65">{p.conduit}</p>
              </Fade>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Brush, t: 'Matériel professionnel', d: 'cannes carbone, hérissons nylon ou métal selon le conduit, contrôle du tirage' },
              { icon: Flame, t: 'Cheminées, poêles, chaudières', d: 'foyers ouverts, inserts, poêles à bois et granulés, conduits gaz et fioul' },
              { icon: FileCheck, t: 'Certificat numéroté', d: 'remis après chaque passage avec la facture — exigé par les assurances en cas de sinistre' },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-flame/40 bg-flame/10 text-flame-2"><x.icon size={18} /></span>
                <div>
                  <p className="font-display font-bold">{x.t}</p>
                  <p className="mt-1 text-sm text-ivory/55">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <MediaPlaceholder src="/images/cheminee-interieur.webp" alt="Cheminée après ramonage" plan="Réalisation · foyer fermé" ratio="aspect-[16/10]" />
          <MediaPlaceholder src="/images/cheminee-salon.webp" alt="Salon avec cheminée entretenue" plan="Réalisation · foyer ouvert" ratio="aspect-[16/10]" />
        </div>
      </section>
    </article>
  );
}
