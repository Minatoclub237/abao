// Convertit les images récupérées de l'ancien site abao.fr en WebP optimisés
import sharp from 'sharp';
import fs from 'fs';
const SRC = process.env.OLD_DIR;
const MAP = {
  'serrure-poignee': 'c_38745881', 'cylindres-atelier': 'c_38745882', 'cylindre-macro': 's_9003223',
  'cylindre-produit': 's_15713254', 'quincaillerie-cles': 's_9002958', 'reproduction-cles': 's_9003030',
  'trousseau': 's_9003538', 'verrou': 's_9003434', 'cle-plan': 's_9002827', 'serrures-stock': 's_36374722',
  'remise-cles': 'c_40909324', 'vitrerie-couleurs': 't_38745883', 'bris-de-glace': 's_9636017',
  'facade-verre': 's_9636014', 'briques-verre': 's_9636008', 'atrium-verre': 's_17556011',
  'rideau-texture': 's_36377519', 'rideau-lames': 's_36427636', 'rideau-depannage': 's_36468612',
  'rideau-fabrication': 's_36432931', 'ferronnerie-forge': 't_40710703', 'ferronnerie-portail': 'c_40065200',
  'ramonage-feu': 'c_40710701', 'cheminee-moderne': 's_9280552', 'jardinier': 't_40710702',
  'jardin-paysager': 's_40670491', 'menuiserie-projet': 'c_40710704', 'marseille-littoral': 's_36427635',
};
for (const [name, id] of Object.entries(MAP)) {
  try {
    await sharp(`${SRC}/${id}.jpg`).resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(`public/images/${name}.webp`);
    console.log('ok', name);
  } catch (e) { console.log('FAIL', name, id); }
}
