'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { SectionHead, MediaPlaceholder } from '@/components/ui';
import { Parallax, Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const VERRES = ['Simple vitrage', 'Double vitrage thermique', 'Feuilleté 44.2', 'Sécurit trempé', 'Anti-effraction', 'Néocéram insert'];

/* Vitrerie : panneaux de « verre » qui glissent en parallaxe croisée, teinte glass */
export default function VitrerieCine() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.pane').forEach((el, i) => {
        gsap.fromTo(el, { y: 16 + (i % 3) * 9 }, {
          y: -10 - (i % 3) * 7, ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-x-clip bg-[#08101c] py-24 lg:py-32">
      {/* halo verre */}
      <div className="absolute right-[-10%] top-[10%] size-[46vmin] rounded-full bg-glass/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHead num="CH. 05" kicker="Vitrerie & miroiterie" />
          <h2 className="h-chapter text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">La transparence,</Reveal><br />
            <span className="font-serif-it normal-case tracking-normal" style={{ color: '#9ad6e8' }}>
              remplacée dans la journée
            </span>
          </h2>
          <p className="mt-6 max-w-md text-ivory/65">
            Vitre brisée, vitrine de commerce, double vitrage embué ou miroir sur mesure :
            nos vitriers découpent, remplacent et mastiquent toutes les épaisseurs — agréés toutes assurances.
          </p>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {VERRES.map((v, i) => (
              <li
                key={v}
                className="pane rounded-lg border border-glass/25 bg-glass/[0.06] px-4 py-2 font-mono-tech text-[0.7rem] uppercase tracking-[0.16em] text-glass/90 backdrop-blur-sm"
                style={{ willChange: 'transform' }}
              >
                {v}
              </li>
            ))}
          </ul>

          <Link href="/vitrerie" className="group mt-10 inline-flex items-center gap-2 font-mono-tech text-[0.75rem] uppercase tracking-[0.25em] text-glass transition-all hover:gap-4">
            Tous les vitrages & la miroiterie <ArrowRight size={15} />
          </Link>
        </div>

        <div className="relative">
          <Parallax speed={-34} className="relative z-[1]">
            <MediaPlaceholder
              videoSrc="/videos/vitrerie-pose.mp4" poster="/videos/vitrerie-pose-poster.jpg"
              alt="Vitrier posant une vitrine de commerce"
              plan="Vitrerie · pose d’une vitrine" ratio="aspect-[4/3]"
            />
          </Parallax>
          <Parallax speed={26} className="relative z-0 -mt-16 ml-[18%] w-[70%]">
            <MediaPlaceholder plain src="/images/verre-feuillete-macro.webp" alt="Tranche d’un verre feuilleté en macro" plan="Matière · verre feuilleté" ratio="aspect-square" />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
