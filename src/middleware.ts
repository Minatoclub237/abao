import { NextResponse, type NextRequest } from 'next/server';

/**
 * Redirections 301 des ~227 anciennes URLs IONOS (doorway service × lieu).
 * On extrait le code postal et le mot-clé métier du chemin plutôt que de
 * maintenir une table exacte de 227 entrées.
 */
const CP_COMMUNES: Record<string, string> = {
  '13400': 'aubagne', '13360': 'roquevaire', '13100': 'aix-en-provence', '13190': 'allauch',
  '13390': 'auriol', '13380': 'plan-de-cuques', '13260': 'cassis', '13420': 'gemenos',
  '13821': 'la-penne-sur-huveaune', '13470': 'carnoux-en-provence', '13780': 'cuges-les-pins', '13600': 'la-ciotat',
};
const MARQUES = ['fichet', 'fiche', 'vachette', 'bricard', 'jpm', 'mul-t-lock', 'multlock', 'heracles', 'picard', 'dierre', 'mottura', 'iseo'];

function cible(path: string): string | null {
  const p = path.toLowerCase();
  const service = p.includes('vitr') ? 'vitrerie' : p.includes('rideau') ? 'rideau-metallique'
    : p.includes('ramonage') ? 'ramonage' : p.includes('jardin') ? 'jardinier'
    : p.includes('blindage') ? 'blindage-de-porte' : 'serrurerie';
  if (service === 'ramonage' || service === 'jardinier' || service === 'blindage-de-porte') return '/' + service;
  const marque = MARQUES.find((m) => p.includes('/' + m + '/') || p.endsWith('/' + m) || p.endsWith('/' + m + '/'));
  if (marque && service === 'serrurerie') return '/marques/' + (marque === 'fiche' ? 'fichet' : marque === 'multlock' ? 'mul-t-lock' : marque);
  const cpArr = p.match(/130(0[1-9]|1[0-6])/);
  if (cpArr) return `/${service}/marseille-${cpArr[0]}`;
  const cpCom = Object.keys(CP_COMMUNES).find((cp) => p.includes(cp));
  if (cpCom) return `/${service}/${CP_COMMUNES[cpCom]}`;
  for (const [, slug] of Object.entries(CP_COMMUNES)) if (p.includes(slug.replace(/-/g, '-'))) return `/${service}/${slug}`;
  return '/' + service;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const to = cible(url.pathname);
  if (to && to !== url.pathname) return NextResponse.redirect(new URL(to, url), 301);
  return NextResponse.next();
}

export const config = {
  // uniquement les anciens chemins IONOS — les nouvelles routes ne passent pas par ici
  matcher: ['/serrurerie/serrurerie-:path*', '/serrurier-:path*', '/vitrerie/vitrier-:path*', '/vitrerie/vitre-:path*', '/rideau-metallique-marseille/:path*', '/ramonage/:path*', '/jardinier/:path*'],
};
