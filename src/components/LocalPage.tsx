import Link from 'next/link';
import { MapPin, Timer, ChevronRight } from 'lucide-react';
import type { Lieu } from '@/data/lieux';
import { LIEUX } from '@/data/lieux';
import { SERVICES, type ServiceKey } from '@/lib/services';
import { SITE, MARQUES } from '@/data/site';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

/* Gabarit unique des pages locales service × lieu — remplace les 200 pages doorway de l'ancien site */
export default function LocalPage({ service, lieu }: { service: ServiceKey; lieu: Lieu }) {
  const s = SERVICES[service];
  const faq = s.faq(lieu);
  const autres = (['serrurerie', 'vitrerie', 'rideau-metallique'] as ServiceKey[]).filter((k) => k !== service);
  const voisins = LIEUX.filter((l) => l.type === lieu.type && l.slug !== lieu.slug).slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${s.metier} ${lieu.nom}`,
    provider: { '@type': 'Locksmith', name: 'ABAO', telephone: '+33660094976' },
    areaServed: { '@type': 'Place', name: `${lieu.nom} (${lieu.cp})` },
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <article className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }} />

      {/* fil d'ariane */}
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-5 py-4 text-[0.75rem] text-ivory/45 lg:px-8" aria-label="Fil d’Ariane">
        <Link href="/" className="hover:text-brass-2">Accueil</Link> <ChevronRight size={12} />
        <Link href={`/${service}`} className="hover:text-brass-2">{s.nom}</Link> <ChevronRight size={12} />
        <span className="text-ivory/75">{lieu.nom}</span>
      </nav>

      {/* hero local */}
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4 flex items-center gap-3"><MapPin size={13} /> {lieu.cp} — {lieu.type === 'arrondissement' ? 'Marseille' : 'Bouches-du-Rhône'}</p>
          <h1 className="h-chapter text-[clamp(2.4rem,6vw,4.6rem)]">
            <Reveal as="span">{s.metier}</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">{lieu.nom}</span>
          </h1>
          <p className="mt-5 max-w-xl text-ivory/70">{s.intro(lieu)}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-sm text-brass-2">
            <Timer size={14} /> Intervention en {lieu.delai} environ · {SITE.hours}
          </p>
          <div className="mt-8"><CallCta sub="devis gratuit, prix annoncé avant" /></div>
        </div>
        <MediaPlaceholder videoSrc={s.videoSrc} poster={s.poster} alt={`${s.metier} à ${lieu.nom}`} plan={s.video} ratio="aspect-[4/3]" />
      </header>

      {/* prestations */}
      <section className="border-y border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker={`Nos interventions à ${lieu.nom}`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.prestations.map((p, i) => (
              <Fade key={p.t} delay={i * 0.06} className="card-glass rounded-2xl p-6">
                <p className="font-mono-tech text-[0.65rem] text-flame">0{i + 1}</p>
                <h2 className="mt-2 font-display text-lg font-bold">{p.t}</h2>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ivory/55">{p.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* quartiers + marques */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHead num="02" kicker="Quartiers desservis" />
          <div className="flex flex-wrap gap-2">
            {lieu.quartiers.map((q) => (
              <span key={q} className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ivory/70">{q}</span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ivory/55">
            Nous intervenons dans les {lieu.habitat}.
          </p>
        </div>
        {service === 'serrurerie' && (
          <div>
            <SectionHead num="03" kicker="Marques posées et remplacées" />
            <div className="flex flex-wrap gap-2">
              {MARQUES.map((m) => (
                <Link key={m.slug} href={`/marques/${m.slug}`} className="rounded-full border border-line px-4 py-1.5 text-sm text-ivory/70 transition-colors hover:border-brass/60 hover:text-brass-2">
                  {m.nom}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-night-2 py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHead num="04" kicker="Questions fréquentes" />
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="card-glass group rounded-xl px-6 py-4">
                <summary className="cursor-pointer list-none font-display font-bold text-ivory/85 transition-colors group-open:text-brass-2">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* maillage interne */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.25em] text-ivory/45">Aussi à {lieu.nom} :</span>
          {autres.map((k) => (
            <Link key={k} href={`/${k}/${lieu.slug}`} className="rounded-full border border-line px-4 py-1.5 text-ivory/70 hover:border-brass/60 hover:text-brass-2">
              {SERVICES[k].metier}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="mr-2 font-mono-tech text-[0.68rem] uppercase tracking-[0.25em] text-ivory/45">À proximité :</span>
          {voisins.map((v) => (
            <Link key={v.slug} href={`/${service}/${v.slug}`} className="text-ivory/55 underline-offset-4 hover:text-brass-2 hover:underline">
              {v.nom}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
