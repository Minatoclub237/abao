import type { Metadata } from 'next';
import ServiceHub from '@/components/ServiceHub';

export const metadata: Metadata = {
  title: 'Rideau métallique Marseille, Aubagne, Aix — 24h/24, moins de 30 min',
  description: "Déblocage 24h/24, réparation de tablier et moteur, fabrication sur mesure de rideaux métalliques à Marseille, Aubagne et alentours.",
};

export default function Page() {
  return <ServiceHub service="rideau-metallique" sub="Débloquer, réparer, motoriser, fabriquer." />;
}
