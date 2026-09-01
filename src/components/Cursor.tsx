'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/* Curseur-lueur : halo laiton qui suit la souris, s'intensifie sur les liens */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current!;
    const qx = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
    const qy = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });
    const move = (e: PointerEvent) => {
      qx(e.clientX); qy(e.clientY);
      const interactive = (e.target as HTMLElement).closest('a, button');
      gsap.to(el, { scale: interactive ? 2.2 : 1, opacity: interactive ? 0.9 : 0.55, duration: 0.3 });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-6 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55 mix-blend-screen lg:block"
      style={{ background: 'radial-gradient(circle, rgba(232,199,102,0.9), rgba(232,199,102,0) 70%)' }}
    />
  );
}
