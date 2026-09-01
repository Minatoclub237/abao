export type Lieu = {
  slug: string; nom: string; cp: string; type: 'arrondissement' | 'commune';
  quartiers: string[]; delai: string; habitat: string;
};

export const ARRONDISSEMENTS: Lieu[] = [
  { slug: 'marseille-13001', nom: 'Marseille 1er', cp: '13001', type: 'arrondissement', quartiers: ['Belsunce', 'Noailles', 'Opéra', 'Saint-Charles', 'Le Chapitre', 'Thiers'], delai: '20 min', habitat: 'immeubles haussmanniens du centre, commerces de la Canebière et portes cochères anciennes' },
  { slug: 'marseille-13002', nom: 'Marseille 2e', cp: '13002', type: 'arrondissement', quartiers: ['Le Panier', 'La Joliette', 'Arenc', 'Les Grands Carmes'], delai: '20 min', habitat: 'ruelles du Panier, immeubles rénovés d’Euroméditerranée et bureaux des Docks' },
  { slug: 'marseille-13003', nom: 'Marseille 3e', cp: '13003', type: 'arrondissement', quartiers: ['Belle de Mai', 'Saint-Mauront', 'La Villette'], delai: '20 min', habitat: 'ateliers de la Belle de Mai, copropriétés anciennes et locaux d’artistes' },
  { slug: 'marseille-13004', nom: 'Marseille 4e', cp: '13004', type: 'arrondissement', quartiers: ['Les Chartreux', 'Cinq Avenues', 'La Blancarde'], delai: '18 min', habitat: 'immeubles bourgeois des Cinq Avenues et maisons de ville des Chartreux' },
  { slug: 'marseille-13005', nom: 'Marseille 5e', cp: '13005', type: 'arrondissement', quartiers: ['Baille', 'Le Camas', 'La Conception', 'Saint-Pierre'], delai: '18 min', habitat: 'copropriétés du Camas, abords de la Timone et commerces du cours Lieutaud' },
  { slug: 'marseille-13006', nom: 'Marseille 6e', cp: '13006', type: 'arrondissement', quartiers: ['Castellane', 'Vauban', 'Notre-Dame du Mont', 'Palais de Justice', 'Lodi'], delai: '18 min', habitat: 'beaux immeubles de la rue Paradis, cabinets et commerces autour de Castellane' },
  { slug: 'marseille-13007', nom: 'Marseille 7e', cp: '13007', type: 'arrondissement', quartiers: ['Le Pharo', 'Endoume', 'Saint-Victor', 'Bompard', 'Les Îles'], delai: '22 min', habitat: 'villas d’Endoume, immeubles avec vue sur le Vieux-Port et cabanons du littoral' },
  { slug: 'marseille-13008', nom: 'Marseille 8e', cp: '13008', type: 'arrondissement', quartiers: ['Périer', 'Prado', 'Bonneveine', 'Vieille Chapelle', 'Montredon'], delai: '22 min', habitat: 'résidences sécurisées du Prado, villas de Bonneveine et commerces de l’avenue de Mazargues' },
  { slug: 'marseille-13009', nom: 'Marseille 9e', cp: '13009', type: 'arrondissement', quartiers: ['Mazargues', 'Sainte-Marguerite', 'Le Redon', 'La Panouse', 'Vaufrèges'], delai: '25 min', habitat: 'lotissements calmes de Mazargues et résidences en lisière des Calanques' },
  { slug: 'marseille-13010', nom: 'Marseille 10e', cp: '13010', type: 'arrondissement', quartiers: ['La Timone', 'La Capelette', 'Pont-de-Vivaux', 'Saint-Loup', 'Menpenti'], delai: '20 min', habitat: 'copropriétés familiales de la Capelette et zones commerciales de Saint-Loup' },
  { slug: 'marseille-13011', nom: 'Marseille 11e', cp: '13011', type: 'arrondissement', quartiers: ['La Valentine', 'Les Trois-Lucs', 'Saint-Marcel', 'La Pomme', 'Les Camoins', 'Éoures'], delai: '15 min', habitat: 'villas de la vallée de l’Huveaune et enseignes de la Valentine' },
  { slug: 'marseille-13012', nom: 'Marseille 12e', cp: '13012', type: 'arrondissement', quartiers: ['Saint-Barnabé', 'Les Caillols', 'Montolivet', 'La Fourragère', 'Saint-Julien'], delai: '18 min', habitat: 'maisons de village de Saint-Barnabé et résidences arborées des Caillols' },
  { slug: 'marseille-13013', nom: 'Marseille 13e', cp: '13013', type: 'arrondissement', quartiers: ['Saint-Just', 'Malpassé', 'Château-Gombert', 'La Rose', 'Saint-Mitre'], delai: '22 min', habitat: 'technopôle de Château-Gombert, grands ensembles et noyaux villageois' },
  { slug: 'marseille-13014', nom: 'Marseille 14e', cp: '13014', type: 'arrondissement', quartiers: ['Le Merlan', 'Sainte-Marthe', 'Le Canet', 'Bon-Secours'], delai: '24 min', habitat: 'bastides de Sainte-Marthe, copropriétés et locaux d’activité du Canet' },
  { slug: 'marseille-13015', nom: 'Marseille 15e', cp: '13015', type: 'arrondissement', quartiers: ['Saint-Louis', 'La Cabucelle', 'Les Aygalades', 'La Viste', 'Verduron'], delai: '25 min', habitat: 'maisons ouvrières de Saint-Louis et entrepôts des quartiers portuaires' },
  { slug: 'marseille-13016', nom: 'Marseille 16e', cp: '13016', type: 'arrondissement', quartiers: ['L’Estaque', 'Saint-André', 'Saint-Henri', 'La Nerthe'], delai: '28 min', habitat: 'cabanons de l’Estaque, maisons de village et petites copropriétés du littoral nord' },
];

export const COMMUNES: Lieu[] = [
  { slug: 'aubagne', nom: 'Aubagne', cp: '13400', type: 'commune', quartiers: ['Centre-ville', 'Le Charrel', 'La Tourtelle', 'Pin Vert', 'Camp Major'], delai: '10 min', habitat: 'maisons provençales du centre ancien et lotissements du Charrel — notre antenne est av. Roger Salengro' },
  { slug: 'roquevaire', nom: 'Roquevaire', cp: '13360', type: 'commune', quartiers: ['Centre', 'Pont-de-Joux', 'Lascours'], delai: '5 min', habitat: 'notre village d’attache, sur la RN96 — l’atelier et la quincaillerie ABAO y sont installés' },
  { slug: 'aix-en-provence', nom: 'Aix-en-Provence', cp: '13100', type: 'commune', quartiers: ['Centre historique', 'Sextius-Mirabeau', 'Jas de Bouffan', 'Pont de l’Arc'], delai: '30 min', habitat: 'hôtels particuliers du centre, résidences étudiantes et commerces du cours Mirabeau' },
  { slug: 'allauch', nom: 'Allauch', cp: '13190', type: 'commune', quartiers: ['Le Village', 'La Pounche', 'Fontvieille', 'Le Logis-Neuf'], delai: '20 min', habitat: 'villas avec vue sur Marseille et maisons du vieux village' },
  { slug: 'auriol', nom: 'Auriol', cp: '13390', type: 'commune', quartiers: ['Centre', 'Moulin de Redon', 'La Bourine'], delai: '12 min', habitat: 'maisons de village et lotissements de la vallée de l’Huveaune' },
  { slug: 'plan-de-cuques', nom: 'Plan-de-Cuques', cp: '13380', type: 'commune', quartiers: ['Centre', 'La Marcelline', 'Les Ambrosis'], delai: '22 min', habitat: 'pavillons résidentiels et commerces de proximité' },
  { slug: 'cassis', nom: 'Cassis', cp: '13260', type: 'commune', quartiers: ['Port', 'Les Calanques', 'La Bédoule'], delai: '25 min', habitat: 'résidences secondaires, locations saisonnières et commerces du port' },
  { slug: 'gemenos', nom: 'Gémenos', cp: '13420', type: 'commune', quartiers: ['Centre', 'Saint-Jean-de-Garguier', 'Parc d’activités'], delai: '15 min', habitat: 'villas au pied du Garlaban et entreprises du parc d’activités' },
  { slug: 'la-penne-sur-huveaune', nom: 'La Penne-sur-Huveaune', cp: '13821', type: 'commune', quartiers: ['Centre', 'Les Candolles'], delai: '12 min', habitat: 'maisons familiales le long de la vallée de l’Huveaune' },
  { slug: 'carnoux-en-provence', nom: 'Carnoux-en-Provence', cp: '13470', type: 'commune', quartiers: ['Centre', 'Les Barles'], delai: '18 min', habitat: 'résidences des années 60-70 et copropriétés arborées' },
  { slug: 'cuges-les-pins', nom: 'Cuges-les-Pins', cp: '13780', type: 'commune', quartiers: ['Village', 'Les Vigneaux'], delai: '20 min', habitat: 'maisons de village et campagnes du pied de la Sainte-Baume' },
  { slug: 'la-ciotat', nom: 'La Ciotat', cp: '13600', type: 'commune', quartiers: ['Vieux port', 'Centre', 'Fardeloup', 'La Garde'], delai: '30 min', habitat: 'appartements du front de mer, vieux port et résidences des chantiers' },
];

export const LIEUX: Lieu[] = [...ARRONDISSEMENTS, ...COMMUNES];
export const lieuBySlug = (slug: string) => LIEUX.find((l) => l.slug === slug);
