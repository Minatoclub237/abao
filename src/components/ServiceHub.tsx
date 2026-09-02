import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ARRONDISSEMENTS, COMMUNES } from '@/data/lieux';
import { SERVICES, type ServiceKey } from '@/lib/services';
import { SectionHead } from '@/components/ui';
import PageHero from '@/components/PageHero';

const HERO_VIDEO: Record<ServiceKey, string> = {
  serrurerie: 'pv-serrurerie',
  vitrerie: 'pv-vitrerie',
  'rideau-metallique': 'pv-rideau',
};

/* Page-chapitre d'un métier : hero cinématique plein écran + accès aux 28 pages locales */
export default function ServiceHub({ service, sub }: { service: ServiceKey; sub: string }) {
  const s = SERVICES[service];
  const v = HERO_VIDEO[service];
  return (
    <article>
      <PageHero
        videoSrc={`/videos/${v}.mp4`}
        poster={`/videos/${v}-poster.jpg`}
        kicker="Marseille · Aubagne · Aix-en-Provence & alentours"
        titre={s.nom}
        accent={sub}
        items={s.prestations}
      />

      <section id="suite" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHead num="02" kicker="Choisissez votre secteur" />
        <h2 className="h-chapter text-3xl">Marseille, par arrondissement</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ARRONDISSEMENTS.map((a) => (
            <Link key={a.slug} href={`/${service}/${a.slug}`} className="card-glass group flex items-center justify-between rounded-xl px-5 py-3.5 transition-colors hover:border-brass/50">
              <span>
                <span className="block font-mono-tech text-[0.65rem] text-flame">{a.cp}</span>
                <span className="font-display font-bold text-ivory/85 group-hover:text-brass-2">{a.nom}</span>
              </span>
              <ChevronRight size={15} className="text-ivory/30 group-hover:text-brass-2" />
            </Link>
          ))}
        </div>
        <h2 className="h-chapter mt-12 text-3xl">Autour de Marseille</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COMMUNES.map((c) => (
            <Link key={c.slug} href={`/${service}/${c.slug}`} className="card-glass group flex items-center justify-between rounded-xl px-5 py-3.5 transition-colors hover:border-brass/50">
              <span>
                <span className="block font-mono-tech text-[0.65rem] text-flame">{c.cp}</span>
                <span className="font-display font-bold text-ivory/85 group-hover:text-brass-2">{c.nom}</span>
              </span>
              <ChevronRight size={15} className="text-ivory/30 group-hover:text-brass-2" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
