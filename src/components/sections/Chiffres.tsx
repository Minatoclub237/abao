import { Counter } from '@/components/motion/motion';

const STATS = [
  { to: 30, suffix: ' min', label: 'délai moyen d’arrivée' },
  { to: 24, suffix: 'h/24', label: 'nuits & jours fériés compris' },
  { to: 16, suffix: '', label: 'arrondissements couverts' },
  { to: 21, suffix: '', label: 'marques de serrures en stock' },
  { to: 100, suffix: ' %', label: 'devis gratuits, prix annoncé avant' },
];

export default function Chiffres() {
  return (
    <section className="border-y border-line bg-night-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line md:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.label} className="px-6 py-12 text-center">
            <p className="font-mono-tech text-[clamp(1.9rem,3.6vw,3rem)] font-medium text-gradient-brass">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-[0.78rem] leading-snug text-ivory/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
