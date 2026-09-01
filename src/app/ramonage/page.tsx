import type { Metadata } from 'next';
import { Flame, FileCheck, Brush } from 'lucide-react';
import { RAMONAGE_PRIX } from '@/data/site';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

export const metadata: Metadata = {
  title: 'Ramonage à Marseille & en PACA — dès 50 €, certificat fourni',
  description:
    'Ramonage de cheminées, poêles et conduits par le réseau ABAO : bois 60 €, gaz 50 €, fioul 80 €. Certificat numéroté pour votre assurance. Marseille, Aubagne et toute la région.',
};

export default function Page() {
  return (
    <article className="pt-24">
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-8 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4">Le réseau abao.fr — Marseille & PACA</p>
          <h1 className="h-chapter text-[clamp(2.4rem,6.5vw,5rem)]">
            <Reveal as="span">Ramonage</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-flame">certifié</span>
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70">
            Obligatoire une fois par an pour rester couvert par votre assurance. Nos ramoneurs
            travaillent aux cannes en fibre de carbone et hérissons adaptés, protègent votre intérieur
            (bâches, aspirateur professionnel) et délivrent un <strong className="text-ivory">certificat numéroté</strong>.
          </p>
          <div className="mt-8"><CallCta label="Prendre rendez-vous" sub="créneaux rapides toute l’année" /></div>
        </div>
        <MediaPlaceholder type="video" src="/images/cheminee-moderne.webp" alt="Cheminée moderne" plan="PLAN · Feu qui prend dans l’âtre, macro · 6 s" ratio="aspect-[4/3]" priority />
      </header>

      <section className="border-y border-line bg-night-2 py-16">
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
