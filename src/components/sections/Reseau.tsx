'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const PARTENAIRES = [
  {
    titre: 'Ramonage', sous: 'certificat pour votre assurance', href: '/ramonage', img: '/images/reseau-ramonage.webp',
    texte: 'Cheminées, poêles et chaudières dans toute la région PACA — certificat numéroté remis après chaque passage. Dès 50 €.',
    num: '01',
  },
  {
    titre: 'Jardinier paysagiste', sous: 'Thierry Scarica · 30 ans de métier', href: '/jardinier', img: '/images/reseau-jardinier.webp',
    texte: 'Taille, élagage, arrosage automatique, création et entretien à l’année autour d’Aubagne et de la vallée de l’Huveaune.',
    num: '02',
  },
  {
    titre: 'Menuiserie & fenêtres', sous: 'agencement sur mesure', href: '/partenaires', img: '/images/reseau-menuiserie.webp',
    texte: 'Ébénistes et menuisiers pour agencements, meubles, fenêtres et menuiseries extérieures — projets étudiés partout en France.',
    num: '03',
  },
  {
    titre: 'Conciergerie Marseille', sous: 'Check Services · 13008', href: '/partenaires', img: '/images/reseau-conciergerie.webp',
    texte: 'Gestion complète de vos locations courte durée : annonces, ménage, remise de clés — Airbnb, Abritel, Booking.',
    num: '04',
  },
];

/**
 * Accordéon cinématique 3D : les 4 panneaux surgissent de la profondeur en
 * quinconce, puis le panneau survolé s'ouvre en grand pendant que les autres
 * se compressent en tranches verticales — balayage lumineux laiton à l'appui.
 */
export default function Reseau() {
  const wrap = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.res-panel',
        { rotateY: 22, z: -220, y: 90, opacity: 0 },
        {
          rotateY: 0, z: 0, y: 0, opacity: 1, duration: 1.15, stagger: 0.12, ease: 'power4.out',
          scrollTrigger: { trigger: wrap.current, start: 'top 72%' },
        });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="overflow-x-clip bg-night py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead num="CH. 08" kicker="Le réseau abao.fr" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-chapter max-w-2xl text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">Une maison,</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">des artisans amis</span>
          </h2>
          <p className="max-w-sm text-sm text-ivory/60">
            Autour de la serrurerie, ABAO a réuni des artisans choisis pour leur sérieux
            et leur efficacité — un seul appel les mobilise tous.
          </p>
        </div>

        {/* accordéon (desktop) / pile (mobile) */}
        <div
          className="mt-12 flex flex-col gap-4 lg:h-[540px] lg:flex-row"
          style={{ perspective: 1400 }}
          onMouseLeave={() => setActif(0)}
        >
          {PARTENAIRES.map((p, i) => {
            const ouvert = actif === i;
            return (
              <Link
                key={p.titre}
                href={p.href}
                onMouseEnter={() => setActif(i)}
                onFocus={() => setActif(i)}
                className="res-panel group relative block h-64 overflow-hidden rounded-3xl border border-line will-change-transform lg:h-full"
                style={{
                  flexGrow: ouvert ? 4.6 : 1,
                  flexBasis: 0,
                  transition: 'flex-grow 0.95s cubic-bezier(0.22, 1, 0.36, 1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* photo pleine opacité */}
                <Image
                  src={p.img} alt={p.titre} fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={`object-cover transition-transform duration-[1300ms] ease-out ${ouvert ? 'scale-100' : 'scale-[1.12]'}`}
                />
                {/* voile de lisibilité : fort en bas, léger ailleurs */}
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/15 to-night/20" />
                {/* tranche fermée : assombrie pour détacher le panneau ouvert */}
                <div className={`absolute inset-0 bg-night/55 transition-opacity duration-700 ${ouvert ? 'opacity-0' : 'opacity-100 lg:opacity-70'}`} />
                {/* balayage lumineux laiton à l'ouverture */}
                <div
                  className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-brass-2/25 to-transparent transition-transform duration-[1100ms] ease-out"
                  style={{ transform: ouvert ? 'translateX(320%)' : 'translateX(-160%)' }}
                />

                {/* numéro */}
                <span className={`absolute right-4 top-4 font-mono-tech text-[0.7rem] transition-colors duration-500 ${ouvert ? 'text-flame' : 'text-ivory/50'}`}>
                  {p.num}
                </span>

                {/* titre vertical quand la tranche est fermée (desktop) */}
                <span
                  className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-display text-xl font-bold tracking-wide text-ivory/90 transition-opacity duration-500 lg:block ${ouvert ? 'opacity-0' : 'opacity-100'}`}
                  style={{ writingMode: 'vertical-rl', transform: 'translateX(-50%) rotate(180deg)', textShadow: '0 2px 14px rgba(3,5,10,0.9)' }}
                >
                  {p.titre}
                </span>

                {/* contenu du panneau ouvert */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700 lg:p-8 ${
                    ouvert ? 'translate-y-0 opacity-100 delay-200' : 'lg:translate-y-6 lg:opacity-0'
                  }`}
                  style={{ textShadow: '0 2px 16px rgba(3,5,10,0.85)' }}
                >
                  <p className="kicker mb-2">{p.sous}</p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="h-chapter text-3xl lg:text-4xl">{p.titre}</h3>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass-2/50 bg-night/40 text-brass-2 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/80 lg:whitespace-normal">{p.texte}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
