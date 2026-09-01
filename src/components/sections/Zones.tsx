'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Timer } from 'lucide-react';
import { ARRONDISSEMENTS, COMMUNES } from '@/data/lieux';
import { SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

/* Zone d'intervention : littoral en toile de fond, grille interactive 16 arr. + communes */
export default function Zones() {
  const [actif, setActif] = useState(ARRONDISSEMENTS[0]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" id="zones">
      <Image
        src="/images/marseille-littoral.webp" alt="" fill aria-hidden
        className="duotone-strong object-cover opacity-40" sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/70 to-night" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead num="CH. 07" kicker="De l’Estaque à La Ciotat" />
        <h2 className="h-chapter max-w-3xl text-[clamp(2.2rem,5.5vw,4.2rem)]">
          <Reveal as="span">16 arrondissements,</Reveal><br />
          <span className="font-serif-it normal-case tracking-normal text-gradient-brass">et tous les villages autour</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
              {ARRONDISSEMENTS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/serrurerie/${a.slug}`}
                  onMouseEnter={() => setActif(a)}
                  onFocus={() => setActif(a)}
                  className={`group relative grid aspect-square place-items-center rounded-lg border font-mono-tech text-[0.72rem] transition-all duration-300 ${
                    actif.slug === a.slug
                      ? 'border-flame bg-flame/15 text-flame-2 shadow-[0_0_24px_rgba(240,120,24,0.25)]'
                      : 'border-line bg-night/60 text-ivory/60 hover:border-brass/60 hover:text-brass-2'
                  }`}
                >
                  {a.cp.slice(2)}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {COMMUNES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/serrurerie/${c.slug}`}
                  onMouseEnter={() => setActif(c)}
                  className={`rounded-full border px-4 py-1.5 text-[0.78rem] transition-all duration-300 ${
                    actif.slug === c.slug
                      ? 'border-flame bg-flame/15 text-flame-2'
                      : 'border-line bg-night/60 text-ivory/60 hover:border-brass/60 hover:text-brass-2'
                  }`}
                >
                  {c.nom}
                </Link>
              ))}
            </div>
          </div>

          {/* fiche du lieu survolé */}
          <div className="card-glass rounded-2xl p-7" key={actif.slug}>
            <p className="flex items-center gap-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.25em] text-flame">
              <MapPin size={13} /> {actif.cp}
            </p>
            <p className="h-chapter mt-2 text-3xl">{actif.nom}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-brass-2">
              <Timer size={14} /> chez vous en {actif.delai} environ
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60">
              Serrurier, vitrier et rideaux métalliques pour les {actif.habitat}.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {actif.quartiers.map((q) => (
                <span key={q} className="rounded-full bg-surface px-3 py-1 text-[0.7rem] text-ivory/55">{q}</span>
              ))}
            </div>
            <Link href={`/serrurerie/${actif.slug}`} className="mt-6 inline-block font-mono-tech text-[0.7rem] uppercase tracking-[0.25em] text-brass-2 hover:text-ivory">
              Voir la page {actif.nom} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
