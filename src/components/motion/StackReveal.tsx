'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Recouvrement cinématique : la section précédente se fige (sticky) pendant
 * que la suivante glisse par-dessus. `top = min(0, vh − hauteur)` posé en JS —
 * jamais `sticky bottom:0`, qui ne s'active pas en descendant.
 */
export function StackUnder({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const set = () => { el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`; };
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    window.addEventListener('resize', set);
    return () => { ro.disconnect(); window.removeEventListener('resize', set); };
  }, []);
  return (
    <div ref={ref} className={className} style={{ position: 'sticky', zIndex: 0 }}>
      {children}
    </div>
  );
}

export function StackOver({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`relative z-[2] rounded-t-[2.5rem] bg-night shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.85)] ${className}`}
    >
      {children}
    </div>
  );
}
