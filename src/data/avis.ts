/* Avis Google réels de la fiche « Serrurier-vitrier abao.fr » — sélection des plus positifs */

export const GOOGLE_AVIS = {
  note: '4,9',
  total: 128,
  lien: 'https://share.google/pWEeYAxaUrbw9Lm2d',
} as const;

export type Avis = { nom: string; quand: string; texte: string };

export const AVIS: Avis[] = [
  {
    nom: 'Marie Rova', quand: 'il y a 2 mois',
    texte: 'Serrurier très professionnel, intervention rapide, répond immédiatement aux appels et reste correct sur ses tarifs. Travail soigné et efficace. Je recommande sans hésiter !',
  },
  {
    nom: 'Silvia Silou', quand: 'il y a un an',
    texte: 'Rapidement disponible. Un travail consciencieux, précis et bien expliqué. La clarté et l’efficacité sont au rendez-vous. Un artisan fiable, vous pouvez faire confiance les yeux fermés. Merci.',
  },
  {
    nom: 'Guillaume Alarcon', quand: 'il y a un an',
    texte: 'Étonnamment surpris ! Panne d’un rideau métallique de ma boulangerie, je trouve le contact sur internet et m’attends à un escroc de plus profitant de l’urgence… tout l’inverse !',
  },
  {
    nom: 'Margot Brunet', quand: 'il y a un an',
    texte: 'Très satisfaite du service ! Nicolas a réparé mes fenêtres et changé ma serrure. Tout s’est déroulé sans accroc, avec une communication claire et transparente. Travail soigné, rapide et de qualité !',
  },
  {
    nom: 'Anthony Foucher', quand: 'il y a un an',
    texte: 'Disponible, souriant et de très bon conseil. Nicolas nous a conseillés au mieux pour notre porte blindée et il fait preuve d’une réactivité rare dans ce domaine. Nous le recommandons 👍',
  },
  {
    nom: 'Mélanie Fantino', quand: 'il y a 10 mois',
    texte: 'J’ai pris contact avec cette entreprise pour une urgence d’ouverture de porte. J’ai apprécié la disponibilité du technicien, son amabilité et son professionnalisme. Une entreprise sérieuse.',
  },
  {
    nom: 'Elisa D.', quand: 'il y a 9 mois',
    texte: 'Serrurier très sérieux et aimable. Le changement de serrure est propre et efficace, et les prix sont plus que corrects — il n’est pas là pour vous arnaquer. Je recommande vivement.',
  },
  {
    nom: 'Hélène Castelin', quand: 'il y a 2 ans',
    texte: 'Serrure de porte cassée un soir à 20 h, intervention dès le lendemain matin. Je suis ravie du travail réalisé, pour un tarif très raisonnable. Je recommande vivement cette entreprise.',
  },
  {
    nom: 'Axel L’huillier', quand: 'il y a 11 mois',
    texte: 'Je tiens encore à vous remercier pour la pose de notre porte d’entrée. Toute l’équipe est super réactive et cela fait énormément plaisir. Je recommande fortement l’entreprise.',
  },
  {
    nom: 'Éric Sartori', quand: 'il y a 7 mois',
    texte: 'Un travail sérieux et appliqué… ponctuel et rapide. Je recommande à 1000 %.',
  },
];
