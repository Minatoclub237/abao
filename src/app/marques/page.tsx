import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MARQUES, MARQUES_AUTRES } from '@/data/site';
import { CallCta, SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

export const metadata: Metadata = {
  title: 'Marques de serrures posées et remplacées — Fichet, Vachette, Bricard…',
  description:
    'Notre quincaillerie stocke 21 grandes marques de serrures et cylindres : Fichet, Vachette, Bricard, JPM, Mul-T-Lock, Picard… Pose et remplacement à Marseille, Aubagne, Aix.',
};

export default function Page() {
  return (
    <article className="pt-24">
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-8">
        <p className="kicker mb-4">La quincaillerie ABAO — stock permanent</p>
        <h1 className="h-chapter text-[clamp(2.4rem,6.5vw,5rem)]">
          <Reveal as="span">Les grandes marques,</Reveal><br />
          <span className="font-serif-it normal-case tracking-normal text-gradient-brass">en stock, tout de suite</span>
        </h1>
        <p className="mt-6 max-w-2xl text-ivory/65">
          Toutes testées, contrôlées et certifiées aux normes françaises et européennes (A2P).
          Le bon cylindre au bon prix, posé le jour même — c’est l’avantage d’avoir sa propre quincaillerie.
        </p>
        <div className="mt-8"><CallCta label="Demander conseil" sub="devis gratuit" /></div>
      </header>

      <section className="border-t border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Marques principales" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARQUES.map((m, i) => (
              <Fade key={m.slug} delay={i * 0.04}>
                <Link href={`/marques/${m.slug}`} className="card-glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-brass/50">
                  <div className="flex items-start justify-between">
                    <h2 className="font-display text-2xl font-extrabold group-hover:text-brass-2">{m.nom}</h2>
                    <ArrowUpRight size={18} className="text-ivory/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass-2" />
                  </div>
                  <p className="mt-1 font-serif-it text-brass-2/90">{m.specialite}</p>
                  <p className="mt-3 text-[0.82rem] leading-relaxed text-ivory/55">{m.detail}</p>
                </Link>
              </Fade>
            ))}
          </div>

          <SectionHead num="02" kicker="Également en stock" />
          <div className="flex flex-wrap gap-2">
            {MARQUES_AUTRES.map((m) => (
              <span key={m} className="rounded-full border border-line px-5 py-2 font-mono-tech text-sm uppercase tracking-[0.15em] text-ivory/55">{m}</span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
