import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHead, MediaPlaceholder } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

const PARTENAIRES = [
  {
    titre: 'Ramonage', href: '/ramonage', img: '/images/cheminee-interieur.webp',
    texte: 'Cheminées, poêles et chaudières — certificat numéroté pour votre assurance. Dès 50 €.',
    plan: 'Réseau · Ramonage PACA',
  },
  {
    titre: 'Jardinier paysagiste', href: '/jardinier', img: '/images/jardin-paysager.webp',
    texte: 'Thierry Scarica, 30 ans de métier : taille, élagage, arrosage, entretien à l’année.',
    plan: 'Réseau · Aubagne & vallée de l’Huveaune',
  },
  {
    titre: 'Menuiserie & fenêtres', href: '/partenaires', img: '/images/menuiserie-projet.webp',
    texte: 'Ébénistes et menuisiers pour agencements, fenêtres et menuiseries, partout en France.',
    plan: 'Réseau · agencement sur mesure',
  },
  {
    titre: 'Conciergerie Marseille', href: '/partenaires', img: '/images/trousseau.webp',
    texte: 'Check Services gère vos locations courte durée : Airbnb, Booking, remise de clés.',
    plan: 'Réseau · 13008 Marseille',
  },
];

/* Le réseau abao.fr : artisans choisis « pour leur sérieux et leur efficacité » */
export default function Reseau() {
  return (
    <section className="bg-night py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead num="CH. 08" kicker="Le réseau abao.fr" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-chapter max-w-2xl text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">Une maison,</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">des artisans amis</span>
          </h2>
          <p className="max-w-sm text-sm text-ivory/60">
            Autour de la serrurerie, ABAO a réuni des artisans choisis pour leur sérieux
            et leur efficacité — un seul appel les mobilise tous.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTENAIRES.map((p, i) => (
            <Fade key={p.titre} delay={i * 0.08}>
              <Link href={p.href} className="group block">
                <MediaPlaceholder src={p.img} alt={p.titre} plan={p.plan} ratio="aspect-[4/5]" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold group-hover:text-brass-2">{p.titre}</h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-ivory/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass-2" />
                </div>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ivory/55">{p.texte}</p>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
