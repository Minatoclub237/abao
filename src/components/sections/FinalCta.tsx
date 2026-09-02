'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SITE, GARANTIES } from '@/data/site';
import { Magnetic, Tilt3D } from '@/components/motion/motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Final cinématique : les paires de chiffres du numéro cascadent depuis la
 * profondeur en bascule 3D, puis flottent — les engagements se relèvent en 3D.
 */
export default function FinalCta() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // chiffres : bascule 3D en cascade…
      gsap.fromTo('.digit-pair',
        { rotateX: -85, y: 90, z: -220, opacity: 0 },
        {
          rotateX: 0, y: 0, z: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.numero-final', start: 'top 80%' },
        });
      // …puis flottement perpétuel en vague
      gsap.utils.toArray<HTMLElement>('.digit-pair').forEach((el, i) => {
        gsap.to(el, { y: -9, duration: 2.1, delay: 1.2 + i * 0.18, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
      // halo qui pulse derrière le numéro
      gsap.to('.halo-final', { scale: 1.25, opacity: 0.8, duration: 3.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      // engagements : relevés 3D en quinconce
      gsap.fromTo('.gar-card',
        { rotateX: 24, y: 70, z: -120, opacity: 0 },
        {
          rotateX: 0, y: 0, z: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.gar-grid', start: 'top 82%' },
        });
      // boutons
      gsap.fromTo('.cta-row', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-row', start: 'top 88%' },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden py-28 lg:py-36" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,#1a2338_0%,#0b1220_55%,#06090f_100%)]" />
      <div className="halo-final absolute bottom-[-20%] left-1/2 size-[60vmin] -translate-x-1/2 rounded-full bg-flame/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 text-center lg:px-8">
        <p className="kicker">Une urgence ? Une question ? Un devis ?</p>
        <p className="mt-6 font-serif-it text-2xl text-ivory/75 lg:text-3xl">Un seul numéro, celui de Nicolas —</p>

        <Magnetic strength={0.18} className="inline-block">
          <a
            href={SITE.phoneHref}
            className="numero-final mt-4 flex flex-wrap justify-center gap-[0.35em] font-mono-tech text-[clamp(2.1rem,8.5vw,6.4rem)] font-medium leading-none transition-opacity hover:opacity-80"
            style={{ perspective: 900 }}
          >
            {SITE.phone.split(' ').map((pair, i) => (
              <span key={i} className="digit-pair inline-block text-gradient-brass will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
                {pair}
              </span>
            ))}
          </a>
        </Magnetic>

        <div className="cta-row mt-10 flex flex-wrap items-center justify-center gap-4">
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

        <div className="gar-grid mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {GARANTIES.map((g) => (
            <div key={g.titre} className="gar-card will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
              <Tilt3D max={7}>
                <div className="card-glass h-full rounded-2xl p-6 text-left">
                  <p className="font-display font-bold text-brass-2">{g.titre}</p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ivory/55">{g.texte}</p>
                </div>
              </Tilt3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
