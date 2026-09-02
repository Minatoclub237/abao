import type { Lieu } from '@/data/lieux';

export type ServiceKey = 'serrurerie' | 'vitrerie' | 'rideau-metallique';

export const SERVICES: Record<ServiceKey, {
  nom: string; metier: string; img: string; video: string; videoSrc: string; poster: string;
  prestations: { t: string; d: string }[];
  intro: (l: Lieu) => string;
  faq: (l: Lieu) => { q: string; a: string }[];
}> = {
  serrurerie: {
    nom: 'Serrurerie',
    metier: 'Serrurier',
    img: '/images/serrure-poignee.webp',
    videoSrc: '/videos/pv-serrurerie.mp4', poster: '/videos/pv-serrurerie-poster.jpg',
    video: 'PLAN · Ouverture fine d’une porte claquée · 6 s',
    prestations: [
      { t: 'Ouverture de porte', d: 'porte claquée ouverte « zéro dégât » à la radio ou au by-pass, porte verrouillée ouverte proprement' },
      { t: 'Remplacement de serrure', d: 'serrures en applique, à encastrer, multipoints — toutes marques, stock en quincaillerie' },
      { t: 'Cylindres haute sécurité', d: 'cylindres débrayables, anti-perçage, anti-crochetage, sur organigramme si besoin' },
      { t: 'Après effraction', d: 'remise en sécurité immédiate, blindage, attestation pour votre assurance' },
    ],
    intro: (l) =>
      `Une porte claquée, une serrure forcée ou une clé cassée à ${l.nom} ? Nicolas et son équipe interviennent en ${l.delai} environ, 24h/24 et 7j/7, dans tous les quartiers : ${l.quartiers.join(', ')}. Nous connaissons bien les ${l.habitat}.`,
    faq: (l) => [
      { q: `Combien coûte un serrurier à ${l.nom} ?`, a: 'Le déplacement et le devis sont gratuits : le prix exact est annoncé avant toute intervention, selon la serrure et l’heure. Nos tarifs sont agréés par les assurances.' },
      { q: `En combien de temps arrivez-vous à ${l.nom} (${l.cp}) ?`, a: `En ${l.delai} environ depuis notre base — l’artisan disponible le plus proche part dès votre appel, de jour comme de nuit.` },
      { q: 'Ouvrez-vous une porte claquée sans rien casser ?', a: 'Oui. Une porte simplement claquée s’ouvre « zéro dégât » à la radio dans la grande majorité des cas : votre serrure et votre porte restent intactes.' },
      { q: 'Travaillez-vous avec les assurances ?', a: 'Nos tarifs sont agréés : nous fournissons facture et attestation, et proposons des facilités de paiement en attendant votre remboursement.' },
    ],
  },
  vitrerie: {
    nom: 'Vitrerie',
    metier: 'Vitrier',
    img: '/images/bris-de-glace.webp',
    videoSrc: '/videos/pv-vitrerie.mp4', poster: '/videos/pv-vitrerie-poster.jpg',
    video: 'PLAN · Remplacement de vitrine, avant/après · 8 s',
    prestations: [
      { t: 'Remplacement de vitre', d: 'toutes épaisseurs : simple, double vitrage thermique et acoustique, survitrage' },
      { t: 'Verres de sécurité', d: 'feuilleté 44.2, Sécurit trempé, anti-effraction, Néocéram pour inserts de cheminée' },
      { t: 'Vitrines de commerces', d: 'mise en sécurité immédiate après bris, remplacement sur mesure' },
      { t: 'Miroiterie', d: 'miroirs sur mesure, crédences, parois, pose et remplacement de mastic' },
    ],
    intro: (l) =>
      `Vitre brisée, double vitrage embué ou vitrine à remplacer à ${l.nom} ? Nos vitriers-miroitiers interviennent en ${l.delai} environ dans les quartiers ${l.quartiers.join(', ')} — mise en sécurité immédiate puis remplacement à dimensions exactes, agréé toutes assurances.`,
    faq: (l) => [
      { q: `Remplacez-vous une vitre en urgence à ${l.nom} ?`, a: `Oui, 24h/24 : nous sécurisons d’abord l’ouverture, puis remplaçons le vitrage — souvent dans la journée pour les dimensions courantes.` },
      { q: 'Le bris de glace est-il pris en charge par l’assurance ?', a: 'Dans la plupart des contrats habitation, oui. Nos tarifs sont agréés et nous fournissons la facture détaillée pour votre dossier.' },
      { q: 'Quels vitrages proposez-vous ?', a: 'Simple, double vitrage thermique/acoustique, feuilleté, Sécurit, anti-effraction et Néocéram — conseillés selon votre usage et votre exposition.' },
    ],
  },
  'rideau-metallique': {
    nom: 'Rideau métallique',
    metier: 'Dépannage rideau métallique',
    img: '/images/rideau-depannage.webp',
    videoSrc: '/videos/pv-rideau.mp4', poster: '/videos/pv-rideau-poster.jpg',
    video: 'PLAN · Rideau de boutique qui remonte · 5 s',
    prestations: [
      { t: 'Déblocage d’urgence', d: 'rideau coincé ouvert ou fermé, intervention immédiate pour rouvrir votre commerce' },
      { t: 'Réparation', d: 'lames, tablier, axes, ressorts, serrures de rideau — réparation partielle quand c’est possible' },
      { t: 'Motorisation', d: 'passage du manuel au motorisé, remplacement moteur, télécommandes et sécurité' },
      { t: 'Fabrication sur mesure', d: 'lames pleines, micro-perforées ou grilles, aux cotes exactes de votre devanture' },
    ],
    intro: (l) =>
      `Rideau métallique bloqué à ${l.nom} un jour d’ouverture ? Nos techniciens interviennent en ${l.delai} environ sur les devantures des quartiers ${l.quartiers.join(', ')} — déblocage, réparation ou remplacement, y compris en fabrication sur mesure.`,
    faq: (l) => [
      { q: `Mon rideau est bloqué à ${l.nom}, en combien de temps intervenez-vous ?`, a: `En ${l.delai} environ. Nous rouvrons votre commerce en priorité, puis réparons ou programmons le remplacement.` },
      { q: 'Réparez-vous seulement une partie du rideau ?', a: 'Oui : quand le tablier ou le mécanisme seul est en cause, nous remplaçons uniquement la pièce fautive — c’est souvent bien moins cher.' },
      { q: 'Faites-vous la motorisation ?', a: 'Oui, avec ou sans remplacement du tablier : moteur, fins de course, télécommandes et dispositifs de sécurité.' },
    ],
  },
};
