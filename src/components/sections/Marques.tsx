import Link from 'next/link';
import { MARQUES, MARQUES_AUTRES } from '@/data/site';
import { SectionHead } from '@/components/ui';

/* Coffre à marques : double marquee inversé, chaque nom cliquable */
export default function Marques() {
  const ligne1 = MARQUES.map((m) => ({ nom: m.nom, slug: m.slug }));
  const ligne2 = MARQUES_AUTRES.map((nom) => ({ nom, slug: null as string | null }));

  return (
    <section className="relative overflow-x-clip border-y border-line bg-night-2 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead num="CH. 04" kicker="Notre quincaillerie stocke toutes les grandes marques" />
        <h2 className="h-chapter text-[clamp(1.9rem,4.5vw,3.4rem)]">
          21 marques, <span className="font-serif-it normal-case tracking-normal text-gradient-brass">en stock, tout de suite</span>
        </h2>
      </div>

      <div className="mt-12 space-y-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...ligne1, ...ligne1].map((m, i) => (
            <Link
              key={i}
              href={m.slug ? `/marques/${m.slug}` : '/marques'}
              className="card-glass group flex items-center gap-3 whitespace-nowrap rounded-full px-7 py-3.5 transition-colors hover:border-brass/50"
            >
              <span className="size-1.5 rounded-full bg-flame transition-transform group-hover:scale-150" />
              <span className="font-display text-xl font-bold text-ivory/85 group-hover:text-brass-2">{m.nom}</span>
            </Link>
          ))}
        </div>
        <div className="flex w-max animate-marquee-slow gap-6 pr-6" style={{ animationDirection: 'reverse' }}>
          {[...ligne2, ...ligne2].map((m, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border border-line px-7 py-3 font-mono-tech text-sm uppercase tracking-[0.2em] text-ivory/45">
              {m.nom}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
