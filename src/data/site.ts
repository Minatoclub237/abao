export const SITE = {
  name: 'ABAO',
  domain: 'abao.fr',
  baseline: 'Serrurier · Vitrier · Rideaux métalliques',
  phone: '06 60 09 49 76',
  phoneHref: 'tel:+33660094976',
  phoneFixe: '04 91 50 80 67',
  email: 'abao.fr13@gmail.com',
  address: '799 Av. des Alliés, 13360 Roquevaire',
  addressAubagne: 'Av. Roger Salengro, 13400 Aubagne',
  nicolas: 'Nicolas',
  hours: '24h/24 — 7j/7',
  delai: 'moins de 30 minutes',
} as const;

export const GARANTIES = [
  { titre: 'Intervention < 30 min', texte: 'Sur Marseille, Aubagne et alentours, un artisan est chez vous en moins de trente minutes.' },
  { titre: '24h/24 — 7j/7', texte: 'Nuits, week-ends et jours fériés compris. Une porte claquée n’attend pas.' },
  { titre: 'Devis gratuit', texte: 'Le prix est annoncé avant l’intervention. Aucune surprise sur la facture.' },
  { titre: 'Agréé assurances', texte: 'Tarifs agréés par les assurances, facture et attestation fournies pour votre dossier.' },
  { titre: 'Stock en quincaillerie', texte: 'Notre propre quincaillerie stocke des serrures de tous modèles : prix attractifs, pose immédiate.' },
  { titre: 'Facilités de paiement', texte: 'CB ou chèque, et facilités en attente de remboursement par votre assurance.' },
] as const;

export type Marque = { slug: string; nom: string; specialite: string; detail: string };
export const MARQUES: Marque[] = [
  { slug: 'fichet', nom: 'Fichet', specialite: 'Haute sécurité française', detail: 'Serrures multipoints certifiées A2P, garanties jusqu’à 10 ans. Le pêne principal s’insère horizontalement, les pênes secondaires verrouillent haut et bas : les effractions au pied-de-biche sont neutralisées.' },
  { slug: 'vachette', nom: 'Vachette', specialite: 'Le standard des immeubles français', detail: 'Cylindres et multipoints présents sur des millions de portes. Remplacement à l’identique immédiat grâce à notre stock.' },
  { slug: 'bricard', nom: 'Bricard', specialite: 'Serrurerie de tradition depuis 1782', detail: 'Serrures en applique et multipoints certifiés A2P, un classique du blindage parisien et marseillais.' },
  { slug: 'jpm', nom: 'JPM', specialite: 'Sécurité des accès professionnels', detail: 'Organigrammes de clés, serrures de sécurité pour immeubles, commerces et collectivités.' },
  { slug: 'mul-t-lock', nom: 'Mul-T-Lock', specialite: 'Cylindres haute sécurité israéliens', detail: 'Clés brevetées à double denture, protection anti-crochetage et anti-perçage reconnue mondialement.' },
  { slug: 'heracles', nom: 'Héraclès', specialite: 'Cylindres et protections anti-effraction', detail: 'Cylindres débrayables, protège-cylindres et serrures certifiées, un excellent rapport sécurité/prix.' },
  { slug: 'picard', nom: 'Picard Serrures', specialite: 'Portes blindées et multipoints', detail: 'Blocs-portes blindés certifiés BP1 à BP3 et serrures A2P, fabrication française.' },
  { slug: 'dierre', nom: 'Dierre', specialite: 'Portes blindées italiennes', detail: 'Leader européen du bloc-porte blindé, très présent dans les résidences du sud de la France.' },
  { slug: 'mottura', nom: 'Mottura', specialite: 'Serrures à pompe et gorges', detail: 'Serrures italiennes à double palastre et cylindres européens, réputées inviolables au crochetage.' },
  { slug: 'iseo', nom: 'Iseo', specialite: 'Cylindres européens et contrôle d’accès', detail: 'Cylindres modulaires, béquilles électroniques et solutions de contrôle d’accès.' },
];
export const MARQUES_AUTRES = ['Medeco', 'Ferco', 'Yale', 'Pollux', 'Stremler', 'Metalux', 'Ronis', 'Reelax', 'Laperche', 'Abus', 'FTH'];

export const RAMONAGE_PRIX = [
  { conduit: 'Conduit bois', prix: 60 },
  { conduit: 'Conduit fioul', prix: 80 },
  { conduit: 'Conduit gaz', prix: 50 },
  { conduit: 'Entretien chaudière fioul (≤ 35 kW)', prix: 125 },
] as const;
