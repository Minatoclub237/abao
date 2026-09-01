'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { MediaPlaceholder, SectionHead } from '@/components/ui';
import { Depth, Tilt3D } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const METIERS = [
  {
    href: '/serrurerie', num: '01', titre: 'Serrurerie', accent: 'ouvrir sans casser',
    texte: 'Ouverture de portes claquées zéro dégât, remplacement de serrures et cylindres, multipoints, remise en sécurité après effraction.',
    img: '/images/serrure-poignee.webp', video: 'PLAN 01 · Mains + radio sur porte claquée · 6 s',
  },
  {
    href: '/vitrerie', num: '02', titre: 'Vitrerie', accent: 'remplacer dans la journée',
    texte: 'Simple et double vitrage, feuilleté, Sécurit, anti-effraction, Néocéram pour inserts, miroiterie sur mesure et vitrines de commerces.',
    img: '/images/vitrerie-couleurs.webp', video: 'PLAN 02 · Pose ventouse d’un double vitrage · 6 s',
  },
  {
    href: '/rideau-metallique', num: '03', titre: 'Rideaux métalliques', accent: 'débloquer, motoriser',
    texte: 'Fabrication sur mesure, déblocage en position ouverte ou fermée, remplacement de tablier, lames, axes et motorisation.',
    img: '/images/rideau-depannage.webp', video: 'PLAN 03 · Rideau de boutique qui remonte · 5 s',
  },
  {
    href: '/contact', num: '04', titre: 'Ferronnerie', accent: 'forger sur mesure',
    texte: 'Grilles de défense, portails et ouvrages métalliques façonnés par nos artisans, dans la tradition de la forge.',
    img: '/images/ferronnerie-forge.webp', video: 'PLAN 04 · Étincelles à la forge, ralenti · 4 s',
  },
];

/* Section pinnée : les 4 métiers défilent horizontalement comme des plans de film */
export default function Metiers() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)').matches) return;
    const ctx = gsap.context(() => {
      const getX = () => -(track.current!.scrollWidth - window.innerWidth);
      const tl = gsap.to(track.current, {
        x: getX, ease: 'none',
        scrollTrigger: {
          trigger: wrap.current, start: 'top top', end: () => `+=${-getX()}`,
          scrub: 0.7, pin: true, invalidateOnRefresh: true,
        },
      });
      // légère rotation 3D de chaque panneau pendant la traversée
      gsap.utils.toArray<HTMLElement>('.metier-panel').forEach((panel) => {
        gsap.fromTo(panel, { rotateY: 9, scale: 0.96 }, {
          rotateY: -9, scale: 1, ease: 'none',
          scrollTrigger: { trigger: panel, containerAnimation: tl, start: 'left right', end: 'right left', scrub: true },
        });
      });
      return () => tl.scrollTrigger?.kill();
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} id="metiers" className="relative overflow-x-clip bg-night">
      <div className="pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="CH. 01" kicker="Quatre métiers, une famille" />
          <h2 className="h-chapter text-[clamp(2.2rem,6vw,4.8rem)]">
            Les mains <span className="font-serif-it normal-case tracking-normal text-gradient-brass">du métier</span>
          </h2>
        </div>

        <div ref={track} className="mt-10 flex flex-col gap-8 px-5 pb-20 md:mt-14 md:w-max md:flex-row md:flex-nowrap md:gap-10 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pr-24 lg:pb-24"
          style={{ perspective: 1100 }}
        >
          {METIERS.map((m) => (
            <article key={m.num} className="metier-panel w-full md:w-[min(72vw,860px)]" style={{ transformStyle: 'preserve-3d' }}>
              <Tilt3D max={4}>
                <Link href={m.href} className="card-glass group block overflow-hidden rounded-3xl">
                  <MediaPlaceholder type="video" src={m.img} alt={m.titre} plan={m.video} ratio="aspect-[16/9]" className="rounded-b-none border-0" />
                  <Depth z={30} className="p-7 lg:p-9">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="h-chapter text-3xl lg:text-4xl">
                        <span className="mr-3 font-mono-tech text-sm text-flame">{m.num}</span>
                        {m.titre}
                      </h3>
                      <span className="font-serif-it text-lg text-brass-2">{m.accent}</span>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-ivory/65">{m.texte}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[0.7rem] uppercase tracking-[0.25em] text-ivory/60 transition-all group-hover:gap-4 group-hover:text-brass-2">
                      Découvrir <ArrowRight size={14} />
                    </span>
                  </Depth>
                </Link>
              </Tilt3D>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
