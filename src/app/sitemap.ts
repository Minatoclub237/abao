import type { MetadataRoute } from 'next';
import { LIEUX } from '@/data/lieux';
import { MARQUES } from '@/data/site';

const BASE = 'https://abao.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = ['serrurerie', 'vitrerie', 'rideau-metallique'];
  const statics = ['', '/serrurerie', '/vitrerie', '/rideau-metallique', '/blindage-de-porte', '/marques', '/ramonage', '/jardinier', '/partenaires', '/contact'];
  return [
    ...statics.map((p) => ({ url: BASE + p, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...services.flatMap((s) => LIEUX.map((l) => ({ url: `${BASE}/${s}/${l.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 }))),
    ...MARQUES.map((m) => ({ url: `${BASE}/marques/${m.slug}`, changeFrequency: 'yearly' as const, priority: 0.4 })),
  ];
}
