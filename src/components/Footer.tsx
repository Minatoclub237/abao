import Link from 'next/link';
import { KeyRound, Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { ARRONDISSEMENTS, COMMUNES } from '@/data/lieux';

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-night-2">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brass-2 to-brass text-night">
                <KeyRound size={18} />
              </span>
              <span className="font-display text-2xl font-extrabold lowercase">abao<span className="text-flame">.fr</span></span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Entreprise familiale de serrurerie et vitrerie. Toutes les interventions sur un seul numéro,
              celui de {SITE.nicolas}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 font-mono-tech text-brass-2 hover:text-ivory"><Phone size={14} /> {SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-ivory/70 hover:text-ivory"><Mail size={14} /> {SITE.email}</a>
              <p className="flex items-center gap-2 text-ivory/70"><MapPin size={14} /> {SITE.address}</p>
            </div>
          </div>

          <div>
            <p className="kicker mb-4">Métiers</p>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link className="hover:text-brass-2" href="/serrurerie">Serrurerie</Link></li>
              <li><Link className="hover:text-brass-2" href="/vitrerie">Vitrerie & miroiterie</Link></li>
              <li><Link className="hover:text-brass-2" href="/rideau-metallique">Rideaux métalliques</Link></li>
              <li><Link className="hover:text-brass-2" href="/blindage-de-porte">Blindage de porte</Link></li>
              <li><Link className="hover:text-brass-2" href="/marques">Marques de serrures</Link></li>
              <li><Link className="hover:text-brass-2" href="/partenaires">Le réseau ABAO</Link></li>
            </ul>
          </div>

          <div>
            <p className="kicker mb-4">Marseille</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.8rem] text-ivory/60">
              {ARRONDISSEMENTS.map((a) => (
                <li key={a.slug}><Link className="hover:text-brass-2" href={`/serrurerie/${a.slug}`}>{a.cp}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-4">Communes</p>
            <ul className="space-y-1.5 text-[0.8rem] text-ivory/60">
              {COMMUNES.map((c) => (
                <li key={c.slug}><Link className="hover:text-brass-2" href={`/serrurerie/${c.slug}`}>{c.nom}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} ABAO — Serrurier & vitrier, Roquevaire · Marseille · Aubagne</p>
          <p className="font-mono-tech">{SITE.hours} · Agréé assurances · Devis gratuit</p>
          <Link href="/mentions-legales" className="hover:text-ivory">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
