'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SITE, GARANTIES } from '@/data/site';
import { Magnetic } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

/* Final : le numéro géant, gravé comme une clé — zoom léger au scroll */
export default function FinalCta() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.numero-final', { scale: 0.86, opacity: 0.4 }, {
        scale: 1, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top 85%', end: 'center 55%', scrub: 0.6 },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden py-28 lg:py-36" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,#1a2338_0%,#0b1220_55%,#06090f_100%)]" />
      <div className="absolute bottom-[-20%] left-1/2 size-[60vmin] -translate-x-1/2 rounded-full bg-flame/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 text-center lg:px-8">
        <p className="kicker">Une urgence ? Une question ? Un devis ?</p>
        <p className="mt-6 font-serif-it text-2xl text-ivory/75 lg:text-3xl">Un seul numéro, celui de Nicolas —</p>

        <Magnetic strength={0.18} className="inline-block">
          <a
            href={SITE.phoneHref}
            className="numero-final mt-4 block font-mono-tech text-[clamp(2.1rem,8.5vw,6.4rem)] font-medium leading-none text-gradient-brass transition-opacity hover:opacity-80"
          >
            {SITE.phone}
          </a>
        </Magnetic>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={SITE.phoneHref} className="pulse-ring inline-flex items-center gap-2.5 rounded-full bg-flame px-8 py-4 font-bold text-white hover:bg-flame-2">
            <Phone size={17} /> Appeler maintenant
          </a>
          <a
            href={`https://wa.me/33660094976?text=${encodeURIComponent('Bonjour Nicolas, j’ai besoin d’une intervention.')}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 font-bold text-ivory/85 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 rounded-full border border-line px-8 py-4 font-bold text-ivory/85 transition-colors hover:border-brass-2 hover:text-brass-2">
            <Mail size={17} /> {SITE.email}
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ivory/50">
          <MapPin size={14} /> {SITE.address} · antenne {SITE.addressAubagne}
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {GARANTIES.map((g) => (
            <div key={g.titre} className="bg-night-2/90 p-6 text-left">
              <p className="font-display font-bold text-brass-2">{g.titre}</p>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ivory/55">{g.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
