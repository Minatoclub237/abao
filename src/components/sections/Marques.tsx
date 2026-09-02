import Link from 'next/link';
import Image from 'next/image';
import { SectionHead } from '@/components/ui';

/* Logos officiels récupérés (logo.dev) — slug = page /marques correspondante */
const LOGOS: { file: string; nom: string; slug: string | null }[] = [
  { file: 'fichet', nom: 'Fichet', slug: 'fichet' },
  { file: 'vachette', nom: 'Vachette', slug: 'vachette' },
  { file: 'bricard', nom: 'Bricard', slug: 'bricard' },
  { file: 'jpm', nom: 'JPM', slug: 'jpm' },
  { file: 'mul-t-lock', nom: 'Mul-T-Lock', slug: 'mul-t-lock' },
  { file: 'heracles', nom: 'Héraclès', slug: 'heracles' },
  { file: 'dierre', nom: 'Dierre', slug: 'dierre' },
  { file: 'iseo', nom: 'Iseo', slug: 'iseo' },
  { file: 'abus', nom: 'Abus', slug: null },
  { file: 'yale', nom: 'Yale', slug: null },
  { file: 'medeco', nom: 'Medeco', slug: null },
  { file: 'pollux', nom: 'Pollux', slug: null },
];

/* Bande blanche : les logos réels défilent sur une seule ligne */
export default function Marques() {
  return (
    <section className="relative overflow-x-clip border-y border-line bg-night-2 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead num="CH. 04" kicker="Notre quincaillerie stocke toutes les grandes marques" />
        <h2 className="h-chapter text-[clamp(1.9rem,4.5vw,3.4rem)]">
          21 marques, <span className="font-serif-it normal-case tracking-normal text-gradient-brass">en stock, tout de suite</span>
        </h2>
      </div>

      {/* bande blanche pleine largeur */}
      <div className="mt-12 bg-white py-6 shadow-[0_0_60px_rgba(232,199,102,0.08)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <Link
              key={i}
              href={l.slug ? `/marques/${l.slug}` : '/marques'}
              className="group flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-105"
              aria-label={`Serrures ${l.nom}`}
            >
              <Image
                src={`/logos/${l.file}.png`}
                alt={`Logo ${l.nom}`}
                width={56}
                height={56}
                className="size-12 rounded-lg object-contain shadow-sm lg:size-14"
              />
              <span className="font-display text-lg font-bold text-night/85 group-hover:text-flame">{l.nom}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
