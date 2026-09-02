import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE, GARANTIES } from '@/data/site';
import { SectionHead } from '@/components/ui';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact — un seul numéro : 06 60 09 49 76',
  description:
    'Joindre ABAO 24h/24 : 06 60 09 49 76 (Nicolas). Serrurerie, vitrerie, rideaux métalliques à Marseille, Aubagne, Aix. Atelier Route Nationale 96, Roquevaire.',
};

export default function Page() {
  return (
    <article>
      <PageHero
        videoSrc="/videos/pv-atelier.mp4"
        poster="/videos/pv-atelier-poster.jpg"
        kicker="Une vraie voix, pas de plateforme"
        titre="Appelez Nicolas"
        accent="il décroche, jour et nuit."
        intro="Urgence, question ou devis : un seul numéro pour toute la maison — serrurerie, vitrerie, rideaux et le réseau d’artisans."
        itemsTitre="Nous joindre"
        items={[
          { t: 'Téléphone', d: `${SITE.phone} — fixe ${SITE.phoneFixe}, 24h/24 et 7j/7` },
          { t: 'WhatsApp', d: 'envoyez photos et vidéos de votre porte ou vitrage pour un pré-diagnostic' },
          { t: 'E-mail', d: `${SITE.email} — devis et demandes non urgentes` },
          { t: 'Atelier & quincaillerie', d: `${SITE.address} · antenne ${SITE.addressAubagne}` },
        ]}
      />

      <section id="suite" className="border-t border-line bg-night-2 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Phone, t: 'Téléphone', d: `${SITE.phone} — fixe ${SITE.phoneFixe}` },
            { icon: Mail, t: 'E-mail', d: SITE.email },
            { icon: MapPin, t: 'Atelier & quincaillerie', d: `${SITE.address} · antenne ${SITE.addressAubagne}` },
            { icon: Clock, t: 'Horaires', d: `${SITE.hours} — urgences comprises, arrivée en ${SITE.delai}` },
          ].map((x) => (
            <div key={x.t} className="card-glass rounded-2xl p-6">
              <span className="grid size-10 place-items-center rounded-lg border border-brass/40 bg-brass/10 text-brass-2"><x.icon size={16} /></span>
              <p className="mt-3 font-display font-bold">{x.t}</p>
              <p className="mt-1 break-words text-sm text-ivory/60">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHead num="→" kicker="Nos engagements" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {GARANTIES.map((g) => (
            <div key={g.titre} className="bg-night-2/90 p-6">
              <p className="font-display font-bold text-brass-2">{g.titre}</p>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ivory/55">{g.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
