import type { Metadata } from 'next';
import ServiceHub from '@/components/ServiceHub';

export const metadata: Metadata = {
  title: 'Serrurier Marseille, Aubagne, Aix — 24h/24, moins de 30 min',
  description: "Ouverture de porte zéro dégât, remplacement de serrures et cylindres, blindage. Intervention en moins de 30 min, 24h/24 sur Marseille, Aubagne, Aix.",
};

export default function Page() {
  return <ServiceHub service="serrurerie" sub="Ouvrir, remplacer, sécuriser — sans casser." />;
}
