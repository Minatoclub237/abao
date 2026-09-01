import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalPage from '@/components/LocalPage';
import { LIEUX, lieuBySlug } from '@/data/lieux';

export function generateStaticParams() {
  return LIEUX.map((l) => ({ lieu: l.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lieu: string }> }): Promise<Metadata> {
  const l = lieuBySlug((await params).lieu);
  if (!l) return {};
  return {
    title: `Vitrier ${l.nom} (${l.cp}) — intervention en ${l.delai}, 24h/24`,
    description: `Vitrier à ${l.nom} : intervention en ${l.delai} environ, 24h/24 et 7j/7. Devis gratuit, agréé assurances. Quartiers ${l.quartiers.slice(0, 4).join(', ')}. Un seul numéro : 06 60 09 49 76.`,
  };
}

export default async function Page({ params }: { params: Promise<{ lieu: string }> }) {
  const l = lieuBySlug((await params).lieu);
  if (!l) notFound();
  return <LocalPage service="vitrerie" lieu={l} />;
}
