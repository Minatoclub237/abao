import type { Metadata } from 'next';
import { ShieldCheck, Layers, DoorClosed } from 'lucide-react';
import { MediaPlaceholder, CallCta, SectionHead } from '@/components/ui';
import { Reveal, Fade } from '@/components/motion/motion';

export const metadata: Metadata = {
  title: 'Blindage de porte à Marseille & Aubagne — A2P, BP1 à BP3',
  description:
    'Blindage à plat ou fourreau de votre porte existante : acier, cornières anti-pince, multipoints A2P. La sécurité d’une porte blindée pour bien moins cher. Devis gratuit.',
};

const TYPES = [
  {
    icon: Layers, t: 'Blindage à plat', d: 'Une tôle d’acier fixée sur la face intérieure de votre porte, avec pivots renforcés. La solution économique pour les appartements.',
  },
  {
    icon: ShieldCheck, t: 'Blindage fourreau', d: 'La tôle est pliée en retour sur les chants et la face extérieure : la porte est enveloppée d’acier. Le plus proche d’un vrai bloc-porte blindé.',
  },
  {
    icon: DoorClosed, t: 'Bloc-porte blindé', d: 'Porte et huisserie blindées d’usine, certifiées BP1 à BP3 (Picard, Dierre…). Pour les niveaux d’exigence maximum ou le neuf.',
  },
];

const FAQ = [
  { q: 'Blindage ou porte blindée : que choisir ?', a: 'Le blindage de votre porte existante coûte bien moins cher qu’un bloc-porte blindé, pour un niveau de sécurité équivalent lorsqu’il est certifié : acier, cornières anti-pince, gâche renforcée et multipoints A2P.' },
  { q: 'Que signifient A2P et BP ?', a: 'A2P (une à trois étoiles) certifie la résistance des serrures, BP1 à BP3 celle des blindages — deux référentiels du CNPP. Nous vous conseillons le niveau adapté à votre porte et à votre assurance.' },
  { q: 'L’assurance exige-t-elle un niveau minimum ?', a: 'Beaucoup de contrats exigent une serrure A2P ou un blindage certifié au-delà d’un certain capital assuré. Nous fournissons l’attestation de pose pour votre assureur.' },
  { q: 'Gardez-vous ma porte et ma décoration ?', a: 'Oui : le blindage conserve votre porte, son sens d’ouverture et sa décoration côté palier. L’habillage intérieur peut être peint ou plaqué.' },
];

export default function Page() {
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <article className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-8 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <p className="kicker mb-4">Serrurerie de sécurité — Marseille, Aubagne, Aix</p>
          <h1 className="h-chapter text-[clamp(2.4rem,6.5vw,5rem)]">
            <Reveal as="span">Blindage</Reveal>{' '}
            <span className="font-serif-it normal-case tracking-normal text-gradient-brass">de porte</span>
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70">
            Le blindage d’une porte coûte bien moins cher que la pose d’une porte blindée —
            et, certifié, il protège aussi bien. Acier plié, cornières anti-pince, gâche renforcée
            et serrure multipoints A2P : votre porte devient une armure.
          </p>
          <div className="mt-8"><CallCta label="Étudier mon blindage" sub="visite et devis gratuits" /></div>
        </div>
        <MediaPlaceholder type="video" src="/images/serrure-poignee.webp" alt="Porte blindée avec multipoints" plan="PLAN · Fermeture d’une multipoints, macro · 4 s" ratio="aspect-[4/3]" priority />
      </header>

      <section className="border-y border-line bg-night-2 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead num="01" kicker="Trois niveaux de protection" />
          <div className="grid gap-6 lg:grid-cols-3">
            {TYPES.map((t, i) => (
              <Fade key={t.t} delay={i * 0.08} className="card-glass rounded-2xl p-7">
                <span className="grid size-11 place-items-center rounded-xl border border-brass/40 bg-brass/10 text-brass-2"><t.icon size={18} /></span>
                <h2 className="mt-4 font-display text-xl font-bold">{t.t}</h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ivory/60">{t.d}</p>
              </Fade>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ivory/55">
            Chaque pose comprend l’habillage acier supportant le poids de la porte, la gâche renforcée
            recevant les pênes et une serrure multipoints — de préférence certifiée A2P.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <SectionHead num="02" kicker="Questions fréquentes" />
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="card-glass group rounded-xl px-6 py-4">
              <summary className="cursor-pointer list-none font-display font-bold text-ivory/85 group-open:text-brass-2">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ivory/60">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
