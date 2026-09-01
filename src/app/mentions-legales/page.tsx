import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 lg:px-8">
      <h1 className="h-chapter text-4xl">Mentions légales</h1>

      <div className="prose-sm mt-10 space-y-8 text-ivory/70">
        <section>
          <h2 className="font-display text-xl font-bold text-ivory">Éditeur du site</h2>
          <p className="mt-2">
            ABAO — entreprise familiale de serrurerie et vitrerie<br />
            {SITE.address}<br />
            Téléphone : {SITE.phone} · E-mail : {SITE.email}<br />
            <em className="text-ivory/45">[SIRET, forme juridique et capital à compléter par le client]</em>
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ivory">Directeur de la publication</h2>
          <p className="mt-2">Nicolas — ABAO. <em className="text-ivory/45">[Nom complet à compléter]</em></p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ivory">Hébergement</h2>
          <p className="mt-2">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ivory">Données personnelles</h2>
          <p className="mt-2">
            Ce site ne dépose aucun cookie de suivi et ne collecte aucune donnée personnelle.
            Les appels et messages adressés à ABAO servent uniquement au traitement de votre demande d’intervention.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ivory">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des contenus de ce site (textes, visuels, code) est la propriété d’ABAO ou de ses
            partenaires. Toute reproduction sans autorisation est interdite.
          </p>
        </section>
      </div>
    </article>
  );
}
