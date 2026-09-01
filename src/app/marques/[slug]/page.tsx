import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { MARQUES } from '@/data/site';
import { ARRONDISSEMENTS } from '@/data/lieux';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

export function generateStaticParams() {
  return MARQUES.map((m) => ({ slug: m.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = MARQUES.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `Serrures ${m.nom} — pose et remplacement à Marseille & Aubagne`,
    description: `${m.nom}, ${m.specialite.toLowerCase()} : pose, remplacement et dépannage par ABAO à Marseille, Aubagne, Aix. En stock dans notre quincaillerie. 06 60 09 49 76.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = MARQUES.find((x) => x.slug === slug);
  if (!m) notFound();
  const autres = MARQUES.filter((x) => x.slug !== m.slug);

  return (
    <article className="pt-24">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-5 py-4 text-[0.75rem] text-ivory/45 lg:px-8" aria-label="Fil d’Ariane">
        <Link href="/" className="hover:text-brass-2">Accueil</Link> <ChevronRight size={12} />
        <Link href="/marques" className="hover:text-brass-2">Marques</Link> <ChevronRight size={12} />
        <span className="text-ivory/75">{m.nom}</span>
      </nav>

      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4">{m.specialite}</p>
          <h1 className="h-chapter text-[clamp(2.6rem,7vw,5.5rem)]">
            <Reveal as="span"><span className="text-gradient-brass">{m.nom}</span></Reveal>
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70">{m.detail}</p>
          <p className="mt-4 max-w-xl text-sm text-ivory/55">
            Cylindres et serrures {m.nom} en stock dans notre quincaillerie de Roquevaire :
            remplacement à l’identique ou montée en gamme, posés le jour même à Marseille, Aubagne,
            Aix-en-Provence et alentours.
          </p>
          <div className="mt-8"><CallCta label={`Poser du ${m.nom}`} sub="conseil et devis gratuits" /></div>
        </div>
        <MediaPlaceholder src="/images/cylindre-produit.webp" alt={`Cylindre haute sécurité ${m.nom}`} plan={`Produit · cylindre ${m.nom}`} ratio="aspect-[4/3]" priority />
      </header>

      <section className="border-t border-line bg-night-2 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="→" kicker="Les autres marques du stock" />
          <div className="flex flex-wrap gap-2">
            {autres.map((x) => (
              <Link key={x.slug} href={`/marques/${x.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-ivory/60 hover:border-brass/60 hover:text-brass-2">
                {x.nom}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <span className="mr-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.25em] text-ivory/45">Intervenir chez vous :</span>
            {ARRONDISSEMENTS.slice(0, 8).map((a) => (
              <Link key={a.slug} href={`/serrurerie/${a.slug}`} className="text-ivory/55 underline-offset-4 hover:text-brass-2 hover:underline">{a.nom}</Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
