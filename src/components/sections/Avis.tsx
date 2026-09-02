'use client';

import { useEffect, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { AVIS, GOOGLE_AVIS } from '@/data/avis';
import { SectionHead } from '@/components/ui';

const COULEURS = ['#c9a227', '#f07818', '#5f9ad1', '#8fbe6d', '#b07cc6', '#e8c766'];
const initiales = (nom: string) => nom.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();

function Etoiles() {
  return (
    <span className="flex gap-0.5 text-brass-2">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
    </span>
  );
}

/**
 * Bande de témoignages : carrousel 3D façon « person analysis » — la carte
 * centrale nette, les voisines inclinées en perspective et estompées,
 * sélecteur d'avatars dessous. Avance seule, clic pour choisir.
 */
export default function Avis() {
  const [actif, setActif] = useState(0);
  const N = AVIS.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActif((a) => (a + 1) % N), 5200);
    return () => clearInterval(id);
  }, [N]);

  // position relative de chaque carte par rapport à l'active : -1 / 0 / +1, sinon cachée
  const pos = (i: number) => {
    const d = (i - actif + N) % N;
    if (d === 0) return 0;
    if (d === 1) return 1;
    if (d === N - 1) return -1;
    return null;
  };

  return (
    <section className="relative overflow-hidden border-y border-line bg-night-2 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHead num="CH. 06½" kicker="Ils ont appelé Nicolas" />
            <h2 className="h-chapter text-[clamp(1.9rem,4.5vw,3.2rem)]">
              4,9<span className="text-gradient-brass">/5</span>{' '}
              <span className="font-serif-it normal-case tracking-normal text-gradient-brass">sur Google</span>
            </h2>
          </div>
          <a
            href={GOOGLE_AVIS.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-line px-5 py-2.5 transition-colors hover:border-brass/60"
          >
            <Etoiles />
            <span className="text-sm text-ivory/75 group-hover:text-brass-2">
              {GOOGLE_AVIS.total} avis Google
            </span>
            <ExternalLink size={13} className="text-ivory/40 group-hover:text-brass-2" />
          </a>
        </div>

        {/* carrousel 3D */}
        <div className="relative mx-auto mt-10 h-[300px] max-w-4xl sm:h-[260px]" style={{ perspective: 1300 }}>
          {AVIS.map((a, i) => {
            const p = pos(i);
            if (p === null) return null;
            const centre = p === 0;
            return (
              <button
                key={a.nom}
                type="button"
                onClick={() => setActif(i)}
                aria-label={`Avis de ${a.nom}`}
                className={`absolute inset-y-0 left-1/2 w-[min(92vw,540px)] text-left transition-all duration-700 ease-out ${
                  centre ? 'z-10' : 'z-0 hidden sm:block'
                }`}
                style={{
                  transform: `translateX(-50%) translateX(${p * 62}%) rotateY(${p * -28}deg) scale(${centre ? 1 : 0.86})`,
                  opacity: centre ? 1 : 0.28,
                  filter: centre ? 'none' : 'blur(1.5px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={`card-glass h-full rounded-3xl p-6 lg:p-7 ${centre ? 'border-brass/30' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-full font-display text-base font-bold text-night"
                      style={{ background: COULEURS[i % COULEURS.length] }}
                    >
                      {initiales(a.nom)}
                    </span>
                    <div>
                      <p className="font-display font-bold">{a.nom}</p>
                      <div className="flex items-center gap-2 text-[0.72rem] text-ivory/50">
                        <Etoiles /> {a.quand}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/75">« {a.texte} »</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* sélecteur d'avatars */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {AVIS.map((a, i) => (
            <button
              key={a.nom}
              type="button"
              onClick={() => setActif(i)}
              aria-label={a.nom}
              className={`grid size-9 place-items-center rounded-full font-mono-tech text-[0.62rem] font-bold text-night transition-all duration-300 ${
                actif === i ? 'scale-110 ring-2 ring-flame ring-offset-2 ring-offset-night-2' : 'opacity-45 hover:opacity-80'
              }`}
              style={{ background: COULEURS[i % COULEURS.length] }}
            >
              {initiales(a.nom)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
