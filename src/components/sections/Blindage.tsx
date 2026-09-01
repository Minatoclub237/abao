'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const COUCHES = [
  { nom: 'Porte existante', desc: 'votre porte d’origine, conservée', tone: 'bg-[#3a4356]' },
  { nom: 'Tôle acier 15/10ᵉ', desc: 'pliée en fourreau, épouse la porte', tone: 'bg-gradient-to-br from-[#8a93a3] to-[#5c6474]' },
  { nom: 'Cornières anti-pince', desc: 'le pied-de-biche ne mord plus', tone: 'bg-gradient-to-br from-[#6d7787] to-[#454d5c]' },
  { nom: 'Serrure multipoints A2P', desc: '3 à 7 pênes, certifiée CNPP', tone: 'bg-gradient-to-br from-brass to-[#8a6d14]' },
];

/* Coupe de porte blindée : les couches s'écartent en Z + X au scroll */
export default function Blindage() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>('.couche');
      layers.forEach((el, i) => {
        gsap.fromTo(el, { x: 0, z: 0, rotateY: 0 }, {
          x: i * 44, z: i * 60, rotateY: -16, ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top 65%', end: 'center 40%', scrub: 0.5 },
        });
      });
      gsap.utils.toArray<HTMLElement>('.jauge').forEach((el) => {
        gsap.fromTo(el, { width: 0 }, {
          width: el.dataset.w + '%', duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-x-clip bg-night py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        {/* coupe 3D en couches */}
        <div className="order-2 lg:order-1" style={{ perspective: 1200 }}>
          <div className="relative mx-auto h-[380px] w-[min(300px,80%)] lg:h-[460px]" style={{ transformStyle: 'preserve-3d' }}>
            {COUCHES.map((c, i) => (
              <div
                key={c.nom}
                className={`couche absolute inset-0 rounded-xl border border-white/10 ${c.tone} shadow-2xl`}
                style={{ transformStyle: 'preserve-3d', zIndex: COUCHES.length - i }}
              >
                <div className="absolute -bottom-1 left-3 translate-y-full pt-2">
                  <p className="whitespace-nowrap font-mono-tech text-[0.6rem] uppercase tracking-[0.2em] text-brass-2">{c.nom}</p>
                  <p className="whitespace-nowrap text-[0.68rem] text-ivory/50">{c.desc}</p>
                </div>
                {/* poignée sur la 1re couche */}
                {i === 0 && <span className="absolute right-4 top-1/2 h-16 w-2 rounded-full bg-brass-2/80" />}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHead num="CH. 03" kicker="Blindage & portes blindées" />
          <h2 className="h-chapter text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">Votre porte,</Reveal><br />
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">en armure.</span>
          </h2>
          <p className="mt-6 max-w-lg text-ivory/65">
            Le blindage <em className="font-serif-it text-brass-2">fourreau</em> habille votre porte existante d’acier
            plié, de cornières anti-pince et d’une multipoints certifiée — la sécurité d’un bloc-porte blindé,
            <strong className="text-ivory"> pour bien moins cher</strong>.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { label: 'Serrures certifiées A2P ★ / ★★ / ★★★', w: 100 },
              { label: 'Blindages niveaux BP1 · BP2 · BP3 (CNPP)', w: 82 },
              { label: 'Résistance pied-de-biche & perçage', w: 90 },
            ].map((j) => (
              <div key={j.label}>
                <p className="mb-1.5 flex justify-between font-mono-tech text-[0.68rem] uppercase tracking-[0.18em] text-ivory/70">
                  {j.label}
                </p>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                  <div className="jauge h-full rounded-full bg-gradient-to-r from-brass to-brass-2" data-w={j.w} style={{ width: 0 }} />
                </div>
              </div>
            ))}
          </div>

          <Link href="/blindage-de-porte" className="group mt-10 inline-flex items-center gap-2 font-mono-tech text-[0.75rem] uppercase tracking-[0.25em] text-brass-2 transition-all hover:gap-4">
            Blindage à plat ou fourreau — le comparatif <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
