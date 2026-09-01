'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { KeyRound } from 'lucide-react';

/* Ouverture : la clé tourne un quart de tour, « clic », le rideau se lève */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('abao-intro') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return;
    }
    const tl = gsap.timeline({
      onComplete: () => { sessionStorage.setItem('abao-intro', '1'); setDone(true); },
    });
    tl.fromTo('.pre-key', { rotation: -45, scale: 0.6, opacity: 0 }, { rotation: 0, scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.6)' })
      .to('.pre-key', { rotation: 90, duration: 0.55, ease: 'power4.inOut' }, '+=0.15')
      .fromTo('.pre-word', { yPercent: 120 }, { yPercent: 0, duration: 0.6, stagger: 0.07, ease: 'power4.out' }, '-=0.3')
      .to(ref.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', delay: 0.5 });
  }, []);

  if (done) return null;
  return (
    <div ref={ref} className="fixed inset-0 z-[100] grid place-items-center bg-night">
      <div className="text-center">
        <span className="pre-key mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-brass-2 to-brass text-night">
          <KeyRound size={34} strokeWidth={2} />
        </span>
        <div className="mt-6 flex gap-3 overflow-hidden font-display text-3xl font-extrabold lowercase">
          <span className="pre-word inline-block">abao</span>
          <span className="pre-word inline-block text-flame">.fr</span>
          <span className="pre-word inline-block font-serif-it text-2xl font-normal text-ivory/60">un seul numéro</span>
        </div>
      </div>
    </div>
  );
}
