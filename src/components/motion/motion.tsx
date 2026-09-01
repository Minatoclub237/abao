'use client';

/**
 * Primitives cinématiques ABAO — composables sur toutes les sections.
 * Parallax · Scroll3D · Tilt3D · Depth · Reveal (split-text) · Magnetic · Counter
 * Toutes court-circuitent sur prefers-reduced-motion.
 */

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Translation scrubée — speed négatif = premier plan (monte plus vite) */
export function Parallax({ speed = 60, x = 0, className, children }: {
  speed?: number; x?: number; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: -speed, x: -x }, {
        y: speed, x, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [speed, x]);
  return <div ref={ref} className={className}>{children}</div>;
}

/* L'élément arrive couché dans la profondeur et se redresse */
export function Scroll3D({ rotateX = 26, y = 90, z = -120, className, children }: {
  rotateX?: number; y?: number; z?: number; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { rotateX, y, z, opacity: 0.25, transformPerspective: 900 },
        {
          rotateX: 0, y: 0, z: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top 92%', end: 'center 58%', scrub: true },
        });
    }, ref);
    return () => ctx.revert();
  }, [rotateX, y, z]);
  return <div style={{ transformStyle: 'preserve-3d' }} ref={ref} className={className}>{children}</div>;
}

/* Bascule 3D au survol via quickTo — zéro re-render */
export function Tilt3D({ max = 7, className, style, children }: {
  max?: number; className?: string; style?: CSSProperties; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const el = ref.current!;
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.55, ease: 'power3.out' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.55, ease: 'power3.out' });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      rx(-((e.clientY - r.top) / r.height - 0.5) * 2 * max);
      ry(((e.clientX - r.left) / r.width - 0.5) * 2 * max);
    };
    const leave = () => { rx(0); ry(0); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, [max]);
  return (
    <div style={{ perspective: 900 }} className={className}>
      <div ref={ref} style={{ transformStyle: 'preserve-3d', ...style }}>{children}</div>
    </div>
  );
}

/* Couche interne détachée en Z — parents en preserve-3d obligatoires */
export function Depth({ z = 40, className, children }: { z?: number; className?: string; children: ReactNode }) {
  return (
    <div className={className} style={{ transform: `translateZ(${z}px)`, transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}

/* Split-text : chaque mot monte depuis un masque, décalé */
export function Reveal({ as = 'div', delay = 0, stagger = 0.045, y = '110%', once = true, className, children }: {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span'; delay?: number; stagger?: number;
  y?: string; once?: boolean; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const words = el.querySelectorAll<HTMLElement>('.rv-w');
    if (reduced()) { words.forEach((w) => (w.style.transform = 'none')); return; }
    // IntersectionObserver plutôt que ScrollTrigger : joue aussi pour les
    // éléments déjà visibles au chargement (hero, entêtes de page).
    let tween: gsap.core.Tween | null = null;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      tween = gsap.to(words, {
        y: 0, yPercent: 0, rotateZ: 0, duration: 1.05, delay, stagger, ease: 'power4.out',
      });
    }, { threshold: 0.12 });
    gsap.set(words, { rotateZ: 4 });
    io.observe(el);
    return () => { io.disconnect(); tween?.kill(); };
  }, [delay, stagger, y, once]);

  const Tag = as as 'div';
  const split = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      return node.split(/(\s+)/).map((part, i) =>
        /^\s+$/.test(part) ? part : (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span className="rv-w inline-block will-change-transform" style={{ transform: `translateY(${y})` }}>{part}</span>
          </span>
        ),
      );
    }
    return (
      <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
        <span className="rv-w inline-block will-change-transform" style={{ transform: `translateY(${y})` }}>{node}</span>
      </span>
    );
  };
  return (
    <Tag ref={ref as never} className={className}>
      {Array.isArray(children) ? children.map((c, i) => <span key={i}>{split(c)}</span>) : split(children)}
    </Tag>
  );
}

/* Fondu + montée simple pour blocs de texte courants */
export function Fade({ delay = 0, y = 28, className, children }: {
  delay?: number; y?: number; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, y }, {
        opacity: 1, y: 0, duration: 1, delay, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      });
    }, ref);
    return () => ctx.revert();
  }, [delay, y]);
  return <div ref={ref} className={className}>{children}</div>;
}

/* Bouton magnétique */
export function Magnetic({ strength = 0.35, className, children }: {
  strength?: number; className?: string; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const el = ref.current!;
    const qx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const qy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      qx((e.clientX - r.left - r.width / 2) * strength);
      qy((e.clientY - r.top - r.height / 2) * strength);
    };
    const leave = () => { qx(0); qy(0); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, [strength]);
  return <div ref={ref} className={className}>{children}</div>;
}

/* Compteur scrubé (chiffres Monaspace) */
export function Counter({ to, suffix = '', className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (reduced()) { el.textContent = `${to}${suffix}`; return; }
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: to, duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
        onUpdate: () => { el.textContent = `${Math.round(obj.v)}${suffix}`; },
      });
    }, ref);
    return () => ctx.revert();
  }, [to, suffix]);
  return <span ref={ref} className={className}>0{suffix}</span>;
}
