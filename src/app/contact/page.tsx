import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE, GARANTIES } from '@/data/site';
import { SectionHead } from '@/components/ui';
import { Reveal, Magnetic } from '@/components/motion/motion';

export const metadata: Metadata = {
  title: 'Contact — un seul numéro : 06 60 09 49 76',
  description:
    'Joindre ABAO 24h/24 : 06 60 09 49 76 (Nicolas). Serrurerie, vitrerie, rideaux métalliques à Marseille, Aubagne, Aix. Atelier Route Nationale 96, Roquevaire.',
};

export default function Page() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-7xl px-5 pb-14 pt-8 text-center lg:px-8">
        <p className="kicker mb-4">Une vraie voix, pas de plateforme</p>
        <h1 className="h-chapter text-[clamp(2.4rem,6.5vw,5rem)]">
          <Reveal as="span">Appelez</Reveal>{' '}
          <span className="font-serif-it normal-case tracking-normal text-gradient-brass">Nicolas</span>
        </h1>
        <Magnetic strength={0.15} className="inline-block">
          <a href={SITE.phoneHref} className="mt-6 block font-mono-tech text-[clamp(1.8rem,7vw,4.5rem)] text-gradient-flame">
            {SITE.phone}
          </a>
        </Magnetic>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={SITE.phoneHref} className="pulse-ring inline-flex items-center gap-2.5 rounded-full bg-flame px-8 py-4 font-bold text-white hover:bg-flame-2">
            <Phone size={17} /> Appeler
          </a>
          <a
            href={`https://wa.me/33660094976?text=${encodeURIComponent('Bonjour Nicolas, j’ai besoin d’une intervention.')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 font-bold text-ivory/85 hover:border-[#25D366] hover:text-[#25D366]"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>
      </header>

      <section className="border-t border-line bg-night-2 py-16">
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
