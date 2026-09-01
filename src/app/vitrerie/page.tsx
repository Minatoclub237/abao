import type { Metadata } from 'next';
import ServiceHub from '@/components/ServiceHub';

export const metadata: Metadata = {
  title: 'Vitrier Marseille, Aubagne, Aix — 24h/24, moins de 30 min',
  description: "Vitres, doubles vitrages, feuilleté, Sécurit, vitrines et miroiterie sur mesure. Agréé toutes assurances, 24h/24 sur Marseille et sa région.",
};

export default function Page() {
  return <ServiceHub service="vitrerie" sub="Toutes épaisseurs, remplacées dans la journée." />;
}
