import type { Metadata } from 'next';
import { Star, ExternalLink } from 'lucide-react';
import { SITE, GARANTIES } from '@/data/site';
import { AVIS, GOOGLE_AVIS } from '@/data/avis';
import { SectionHead } from '@/components/ui';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

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

      <div id="suite" className="border-t border-line bg-night-2">
        <ContactForm />
      </div>

      {/* avis Google */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHead num="★" kicker="La fiche Google d’ABAO" />
            <h2 className="h-chapter text-3xl">
              {GOOGLE_AVIS.note}<span className="text-gradient-brass">/5</span>{' '}
              <span className="font-serif-it normal-case tracking-normal text-gradient-brass">— {GOOGLE_AVIS.total} avis</span>
            </h2>
            <p className="mt-2 text-sm text-ivory/55">Zones desservies : Marseille et les zones à proximité · tous les jours 8 h – 22 h, urgences 24h/24.</p>
          </div>
          <a
            href={GOOGLE_AVIS.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-line px-5 py-2.5 transition-colors hover:border-brass/60"
          >
            <span className="flex gap-0.5 text-brass-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
            </span>
            <span className="text-sm text-ivory/75 group-hover:text-brass-2">Lire les avis sur Google</span>
            <ExternalLink size={13} className="text-ivory/40 group-hover:text-brass-2" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[AVIS[0], AVIS[2], AVIS[7]].map((a) => (
            <figure key={a.nom} className="card-glass rounded-2xl p-6">
              <span className="flex gap-0.5 text-brass-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </span>
              <blockquote className="mt-3 text-sm leading-relaxed text-ivory/75">« {a.texte} »</blockquote>
              <figcaption className="mt-4 flex items-baseline justify-between gap-3">
                <span className="font-display font-bold text-brass-2">{a.nom}</span>
                <span className="text-[0.7rem] text-ivory/45">{a.quand} · avis Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
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
