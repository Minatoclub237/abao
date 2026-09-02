'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall, MapPin, Timer, Search, FileCheck, ShieldCheck } from 'lucide-react';
import { SectionHead, MediaPlaceholder, CallCta } from '@/components/ui';
import { Parallax, Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const ETAPES = [
  { icon: PhoneCall, t: 'Vous appelez Nicolas', d: 'Un seul numéro, une vraie voix — pas de plateforme, pas de sous-traitance.' },
  { icon: MapPin, t: 'On vous localise', d: 'Marseille, Aubagne, Aix ou les villages : l’artisan le plus proche part immédiatement.' },
  { icon: Timer, t: 'Moins de 30 minutes', d: 'Le camion arrive avec la quincaillerie à bord : serrures, cylindres, vitrages de service.' },
  { icon: Search, t: 'Diagnostic honnête', d: 'Porte claquée ? On ouvre sans percer. Serrure morte ? On vous montre pourquoi.' },
  { icon: FileCheck, t: 'Devis avant tout', d: 'Le prix est annoncé et accepté avant le premier tour de vis. Gratuit, toujours.' },
  { icon: ShieldCheck, t: 'Facture assurance', d: 'Tarifs agréés, attestation fournie — et facilités de paiement en attendant le remboursement.' },
];

/* Timeline verticale : la ligne laiton se trace au scroll, les étapes s'allument */
export default function Intervention() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.ligne-laiton', { scaleY: 0 }, {
        scaleY: 1, ease: 'none', transformOrigin: 'top',
        scrollTrigger: { trigger: '.etapes', start: 'top 75%', end: 'bottom 55%', scrub: true },
      });
      gsap.utils.toArray<HTMLElement>('.etape').forEach((el) => {
        gsap.fromTo(el, { opacity: 0.18, x: -18 }, {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 72%', toggleActions: 'play none none reverse' },
        });
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative bg-night-2 py-24 lg:py-32" id="intervention">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHead num="CH. 02" kicker="Porte claquée, minuit passé" />
          <h2 className="h-chapter text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">Ouvrir</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">sans casser,</span>
            <br />
            <Reveal as="span" delay={0.1}>en 30 minutes</Reveal>
          </h2>
          <p className="mt-6 max-w-md text-ivory/65">
            La spécialité de la maison : l’ouverture « zéro dégât » des portes claquées, à la radio ou
            au by-pass. Votre serrure survit, votre porte aussi — et votre nuit reprend son cours.
          </p>

          <div className="etapes relative mt-12">
            <span className="absolute left-[21px] top-2 h-[calc(100%-16px)] w-px bg-line" />
            <span className="ligne-laiton absolute left-[21px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-brass-2 to-flame" />
            <ol className="space-y-8">
              {ETAPES.map((e, i) => (
                <li key={i} className="etape relative flex gap-5 pl-0">
                  <span className="z-[1] grid size-11 shrink-0 place-items-center rounded-full border border-brass/40 bg-night text-brass-2">
                    <e.icon size={17} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold">
                      <span className="mr-2 font-mono-tech text-[0.65rem] text-flame">0{i + 1}</span>{e.t}
                    </p>
                    <p className="mt-1 text-sm text-ivory/60">{e.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12"><CallCta sub="jour et nuit, week-ends compris" /></div>
        </div>

        <div className="relative" style={{ perspective: 1000 }}>
          <div className="sticky top-24 space-y-6" style={{ transformStyle: 'preserve-3d' }}>
            <Parallax speed={-30}>
              <MediaPlaceholder
                plain src="/images/intervention-ouverture.webp" alt="Ouverture zéro dégât d’une serrure multipoints"
                plan="Intervention · ouverture zéro dégât"
                ratio="aspect-[4/3]"
              />
            </Parallax>
            <div className="grid grid-cols-2 gap-6">
              <Parallax speed={22}>
                <MediaPlaceholder plain src="/images/quincaillerie-mur.webp" alt="Mur de clés et machine de la quincaillerie ABAO" plan="Quincaillerie · stock réel" ratio="aspect-[4/5]" />
              </Parallax>
              <Parallax speed={-16}>
                <MediaPlaceholder plain src="/images/atelier-reproduction.webp" alt="Reproduction de clé à l’établi" plan="Atelier · reproduction de clés" ratio="aspect-[4/5]" />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
