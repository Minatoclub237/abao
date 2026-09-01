'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Phone } from 'lucide-react';
import { SITE } from '@/data/site';
import { Magnetic, Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const LockScene = dynamic(() => import('@/components/three/LockScene'), { ssr: false });

/**
 * Hero pinné 2 écrans : le cylindre de serrure 3D s'éclate au scroll
 * pendant que le titre cède la place au manifeste.
 */
export default function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    // 3D seulement si écran assez large et pas de reduced-motion
    const ok = window.matchMedia('(min-width: 768px)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShow3d(ok);

    const ctx = gsap.context(() => {
      gsap.to(progress, {
        current: 1, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
      });
      gsap.to('.hero-t1', {
        opacity: 0, yPercent: -30, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: '5% top', end: '28% top', scrub: true },
      });
      gsap.fromTo('.hero-t2', { opacity: 0, yPercent: 20 }, {
        opacity: 1, yPercent: 0, ease: 'none', immediateRender: true,
        scrollTrigger: { trigger: wrap.current, start: '26% top', end: '50% top', scrub: true },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative h-[240vh]" id="hero">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* fond : dégradé nuit + halo laiton */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_18%,#14203a_0%,#0b1220_48%,#06090f_100%)]" />
        <div className="absolute left-1/2 top-[22%] size-[52vmin] -translate-x-1/2 rounded-full bg-brass/12 blur-[110px]" />
        <div className="vignette absolute inset-0" />

        {/* scène 3D — fallback photo laiton sur mobile */}
        {show3d ? (
          <div className="absolute inset-0">
            <LockScene progress={progress} />
          </div>
        ) : (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/images/cylindre-macro.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
              filter: 'saturate(0.5) brightness(0.55)',
              maskImage: 'radial-gradient(80% 65% at 50% 35%, #000 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(80% 65% at 50% 35%, #000 40%, transparent 100%)',
            }}
          />
        )}

        {/* écran 1 */}
        <div className="hero-t1 relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-[16vh] pt-28 lg:px-8">
          <p className="kicker mb-5">Roquevaire · Marseille · Aubagne · Aix — depuis toujours en famille</p>
          <h1 className="h-hero text-[clamp(3rem,10.5vw,9rem)] uppercase">
            <Reveal as="span" stagger={0.07}>Serrurier</Reveal>{' '}
            <span className="font-serif-it lowercase text-[0.55em] text-ivory/80 align-middle">&</span>{' '}
            <Reveal as="span" delay={0.15} stagger={0.07}><span className="text-gradient-brass">Vitrier</span></Reveal>
          </h1>
          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-md text-ivory/70">
              Portes ouvertes sans dégât, vitrages remplacés, rideaux métalliques débloqués —
              jour et nuit, en moins de 30 minutes.
            </p>
            <Magnetic>
              <a href={SITE.phoneHref} className="pulse-ring hidden items-center gap-3 rounded-full bg-flame px-7 py-4 font-bold text-white md:inline-flex">
                <Phone size={18} /> <span className="font-mono-tech">{SITE.phone}</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* écran 2 : manifeste pendant l'éclaté */}
        <div className="hero-t2 pointer-events-none absolute inset-0 z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-5 text-center opacity-0">
          <p className="kicker mb-6">Une serrure n’a pas de secret pour nous</p>
          <p className="h-chapter text-[clamp(1.7rem,4.6vw,3.6rem)]">
            Toutes ces interventions<br />
            <span className="font-serif-it normal-case tracking-normal text-brass-2">sur un seul numéro,</span><br />
            celui de Nicolas.
          </p>
          <a href={SITE.phoneHref} className="pointer-events-auto mt-8 font-mono-tech text-[clamp(1.5rem,4.5vw,3rem)] text-gradient-flame">
            {SITE.phone}
          </a>
        </div>

        {/* affordance de défilement — toujours visible, jamais de scroll piégé */}
        <a
          href="#metiers"
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-ivory/60 transition-colors hover:text-brass-2"
        >
          <span className="font-mono-tech text-[0.6rem] uppercase tracking-[0.3em]">Défiler</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
