import type { Metadata } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/inter';
import '@fontsource/monaspace-neon';
import './globals.css';
import LenisProvider from '@/components/motion/LenisProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import CallBar from '@/components/CallBar';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://abao.fr'),
  title: {
    default: 'ABAO — Serrurier & Vitrier à Marseille, Aubagne et Aix · 06 60 09 49 76',
    template: '%s · ABAO Marseille',
  },
  description:
    'Entreprise familiale de serrurerie, vitrerie et rideaux métalliques. Intervention en moins de 30 minutes, 24h/24 et 7j/7 sur Marseille, Aubagne, Aix-en-Provence. Devis gratuit, agréé assurances. Un seul numéro : 06 60 09 49 76.',
  openGraph: {
    siteName: 'ABAO',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'ABAO',
    telephone: '+33660094976',
    email: SITE.email,
    url: 'https://abao.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Route Nationale 96',
      addressLocality: 'Roquevaire',
      postalCode: '13360',
      addressCountry: 'FR',
    },
    areaServed: ['Marseille', 'Aubagne', 'Roquevaire', 'Aix-en-Provence', 'Cassis', 'Allauch', 'Auriol'],
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€€',
  };

  return (
    <html lang="fr">
      <body className="grain bg-night text-ivory antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LenisProvider>
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <CallBar />
        </LenisProvider>
      </body>
    </html>
  );
}
