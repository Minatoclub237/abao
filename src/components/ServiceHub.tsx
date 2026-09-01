import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ARRONDISSEMENTS, COMMUNES } from '@/data/lieux';
import { SERVICES, type ServiceKey } from '@/lib/services';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

/* Page-chapitre d'un métier : prestations + accès aux 28 pages locales */
export default function ServiceHub({ service, sub }: { service: ServiceKey; sub: string }) {
  const s = SERVICES[service];
  return (
    <article className="pt-24">
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-8 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4">Marseille · Aubagne · Aix-en-Provence & alentours</p>
          <h1 className="h-chapter text-[clamp(2.6rem,7vw,5.5rem)]">
            <Reveal as="span">{s.nom}</Reveal>
          </h1>
          <p className="mt-2 font-serif-it text-2xl text-brass-2">{sub}</p>
          <div className="mt-8"><CallCta sub="24h/24 — 7j/7, devis gratuit" /></div>
        </div>
        <MediaPlaceholder type="video" src={s.img} alt={s.nom} plan={s.video} ratio="aspect-[4/3]" priority />
      </header>

      <section className="border-y border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Ce que nous faisons" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.prestations.map((p, i) => (
              <Fade key={p.t} delay={i * 0.06} className="card-glass rounded-2xl p-6">
                <p className="font-mono-tech text-[0.65rem] text-flame">0{i + 1}</p>
                <h2 className="mt-2 font-display text-lg font-bold">{p.t}</h2>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ivory/55">{p.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
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
