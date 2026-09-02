'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

const COUCHES = [
  { nom: 'Porte existante', desc: 'votre porte d’origine, conservée avec sa décoration', img: '/images/couche-porte.webp' },
  { nom: 'Tôle acier 15/10ᵉ', desc: 'pliée en fourreau, elle épouse toute la porte', img: '/images/couche-tole.webp' },
  { nom: 'Cornières anti-pince', desc: 'le pied-de-biche ne mord plus nulle part', img: '/images/couche-cornieres.webp' },
  { nom: 'Serrure multipoints A2P', desc: '3 à 7 pênes, certifiée CNPP', img: '/images/couche-multipoints.webp' },
];

/* Les 4 couches du blindage en cartes photos commerciales + jauges de certification */
export default function Blindage() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
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
        {/* les 4 couches du blindage en cartes photos commerciales, opacité 100 % */}
        <ol className="order-2 grid grid-cols-2 gap-4 lg:order-1 lg:gap-5">
          {COUCHES.map((c, i) => (
            <Fade key={c.nom} delay={i * 0.08}>
              <li className={`card-glass group overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:translate-y-6' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.img} alt={c.nom} fill sizes="(max-width: 640px) 45vw, 300px"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-3 top-3 grid size-7 place-items-center rounded-full bg-flame font-mono-tech text-[0.72rem] font-bold text-white shadow-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono-tech text-[0.64rem] uppercase tracking-[0.16em] text-brass-2">{c.nom}</p>
                  <p className="mt-1 text-[0.76rem] leading-snug text-ivory/55">{c.desc}</p>
                </div>
              </li>
            </Fade>
          ))}
        </ol>

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
