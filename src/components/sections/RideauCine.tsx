'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wrench, Cog, Factory } from 'lucide-react';
import { SectionHead, MediaPlaceholder } from '@/components/ui';
import { Reveal } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

/* Un tablier de rideau métallique (lames CSS) remonte au scroll et révèle la section */
export default function RideauCine() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.tablier', { yPercent: -101 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.to('.tablier', {
        yPercent: -101, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top 55%', end: 'top -10%', scrub: 0.5 },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden bg-night py-24 lg:py-32">
      {/* tablier : lames horizontales qui s'enroulent vers le haut */}
      <div className="tablier pointer-events-none absolute inset-0 z-20 will-change-transform">
        <div className="flex h-full flex-col">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="w-full flex-1 border-b border-black/50"
              style={{ background: 'linear-gradient(180deg, #566072 0%, #39414f 42%, #6b7689 55%, #2c3340 100%)' }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-3 bg-[#1c212b]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHead num="CH. 06" kicker="Rideaux métalliques & devantures" />
          <h2 className="h-chapter text-[clamp(2.2rem,5.5vw,4.2rem)]">
            <Reveal as="span">Le rideau</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">se lève.</span>
          </h2>
          <p className="mt-6 max-w-md text-ivory/65">
            Rideau bloqué un matin de marché ? Nos équipes débloquent, réparent et remplacent
            tabliers, axes, ressorts et moteurs — et fabriquent sur mesure pour toute devanture.
          </p>
          <ul className="mt-9 space-y-4">
            {[
              { icon: Wrench, t: 'Déblocage 24h/24', d: 'rideau coincé ouvert ou fermé, intervention immédiate' },
              { icon: Cog, t: 'Motorisation', d: 'passage du manuel au motorisé, télécommande et sécurité' },
              { icon: Factory, t: 'Fabrication sur mesure', d: 'lames pleines, micro-perforées ou grilles, aux cotes exactes' },
            ].map((x) => (
              <li key={x.t} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface text-brass-2"><x.icon size={16} /></span>
                <div>
                  <p className="font-display font-bold">{x.t}</p>
                  <p className="text-sm text-ivory/55">{x.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/rideau-metallique" className="group mt-10 inline-flex items-center gap-2 font-mono-tech text-[0.75rem] uppercase tracking-[0.25em] text-brass-2 transition-all hover:gap-4">
            Dépannage & fabrication <ArrowRight size={15} />
          </Link>
        </div>

        <div className="space-y-6">
          <MediaPlaceholder
            videoSrc="/videos/rideau-ouverture.mp4" poster="/videos/rideau-ouverture-poster.jpg"
            alt="Technicien ouvrant le rideau métallique d’un commerce"
            plan="Rideau métallique · ouverture d’un commerce"
            ratio="aspect-[16/10]"
          />
          <div className="grid grid-cols-2 gap-6">
            <MediaPlaceholder plain src="/images/rideau-microperfore.webp" alt="Tablier aluminium micro-perforé" plan="Matière · micro-perforé" ratio="aspect-[4/3]" />
            <MediaPlaceholder plain src="/images/rideau-atelier.webp" alt="Métallier mesurant des lames d’aluminium" plan="Atelier · fabrication sur mesure" ratio="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
