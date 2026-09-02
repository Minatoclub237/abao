import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Fade } from '@/components/motion/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Le réseau abao.fr — ramonage, jardin, menuiserie, conciergerie',
  description:
    'Autour de la serrurerie ABAO, un réseau d’artisans choisis pour leur sérieux : ramonage certifié, jardinier paysagiste, ébénisterie-menuiserie, fenêtres et conciergerie à Marseille.',
};

const RESEAU = [
  {
    t: 'Ramonage PACA', href: '/ramonage', img: '/images/cheminee-interieur.webp', plan: 'Réseau · ramonage certifié',
    d: 'Cheminées, poêles et chaudières dans toute la région — certificat numéroté pour l’assurance, dès 50 €.',
  },
  {
    t: 'Jardinier paysagiste', href: '/jardinier', img: '/images/jardin-paysager.webp', plan: 'Réseau · Thierry Scarica',
    d: 'Thierry Scarica, 30 ans de métier : taille, élagage, arrosage automatique et entretien à l’année autour d’Aubagne.',
  },
  {
    t: 'Ébénisterie & menuiserie', href: '/contact', img: '/images/menuiserie-projet.webp', plan: 'Réseau · agencement sur mesure',
    d: 'Agencements, meubles et menuiseries sur mesure par des ébénistes partenaires — projets étudiés dans toute la France.',
  },
  {
    t: 'Fenêtres & menuiseries', href: '/contact', img: '/images/facade-verre.webp', plan: 'Réseau · pose & remplacement',
    d: 'Pose et remplacement de fenêtres, volets et menuiseries extérieures, en lien direct avec notre équipe vitrerie.',
  },
  {
    t: 'Conciergerie Marseille', href: '/contact', img: '/images/remise-cles.webp', plan: 'Réseau · Check Services · 13008',
    d: 'Check Services gère vos locations courte durée (Airbnb, Abritel, Booking) : annonces, ménage, remise de clés.',
  },
];

export default function Page() {
  return (
    <article>
      <PageHero
        videoSrc="/videos/pv-atelier.mp4"
        poster="/videos/pv-atelier-poster.jpg"
        kicker="Choisis pour leur sérieux et leur efficacité"
        titre="Le réseau abao.fr"
        accent="une maison, des artisans amis."
        intro="Une maison ne se résume pas à sa serrure — un seul appel au 06 60 09 49 76 mobilise tout le réseau."
        itemsTitre="Les artisans du réseau"
        items={[
          { t: 'Ramonage certifié', d: 'cheminées, poêles et chaudières partout en PACA, certificat numéroté — dès 50 €' },
          { t: 'Jardinier paysagiste', d: 'Thierry Scarica, 30 ans de métier autour d’Aubagne et de la vallée de l’Huveaune' },
          { t: 'Menuiserie & fenêtres', d: 'ébénistes et menuisiers pour agencements et menuiseries, partout en France' },
          { t: 'Conciergerie Marseille', d: 'Check Services gère vos locations courte durée : Airbnb, Abritel, Booking' },
        ]}
      />

      <section id="suite" className="border-t border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Les artisans du réseau" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RESEAU.map((r, i) => (
              <Fade key={r.t} delay={i * 0.06}>
                <Link href={r.href} className="group block">
                  <MediaPlaceholder src={r.img} alt={r.t} plan={r.plan} ratio="aspect-[4/3]" />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h2 className="font-display text-xl font-bold group-hover:text-brass-2">{r.t}</h2>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-ivory/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass-2" />
                  </div>
                  <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ivory/55">{r.d}</p>
                </Link>
              </Fade>
            ))}
          </div>
          <div className="mt-14"><CallCta label="Joindre le réseau" sub="Nicolas vous met en relation" /></div>
        </div>
      </section>
    </article>
  );
}
