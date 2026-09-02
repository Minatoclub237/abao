import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MARQUES, MARQUES_AUTRES } from '@/data/site';
import { SectionHead } from '@/components/ui';
import { Fade } from '@/components/motion/motion';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Marques de serrures posées et remplacées — Fichet, Vachette, Bricard…',
  description:
    'Notre quincaillerie stocke 21 grandes marques de serrures et cylindres : Fichet, Vachette, Bricard, JPM, Mul-T-Lock, Picard… Pose et remplacement à Marseille, Aubagne, Aix.',
};

export default function Page() {
  return (
    <article>
      <PageHero
        videoSrc="/videos/pv-marques.mp4"
        poster="/videos/pv-marques-poster.jpg"
        kicker="La quincaillerie ABAO — stock permanent"
        titre="Les grandes marques"
        accent="en stock, tout de suite."
        intro="Toutes testées, contrôlées et certifiées aux normes françaises et européennes (A2P) — le bon cylindre au bon prix, posé le jour même."
        itemsTitre="Pourquoi notre stock change tout"
        items={[
          { t: '21 marques en rayon', d: 'Fichet, Vachette, Bricard, JPM, Mul-T-Lock, Picard… en stock physique à Roquevaire' },
          { t: 'Certifiées A2P', d: 'cylindres et multipoints certifiés CNPP, du standard au très haute sécurité' },
          { t: 'Remplacement à l’identique', d: 'la même référence posée le jour même — pas de commande, pas d’attente' },
          { t: 'Conseil gratuit', d: 'le bon niveau de sécurité selon votre porte, votre quartier et votre assurance' },
        ]}
      />

      <section id="suite" className="border-t border-line bg-night-2 py-16">
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
