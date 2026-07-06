// Données produits en dur — pas de backend.
// Couvre volontairement toutes les facettes (catégorie, taille, couleur, matière, prix, style)
// pour que le filtrage divergent/convergent soit visiblement utile. Voir DESIGN_NOTES.md.

export const CATEGORIES = ["T-shirts", "Pantalons", "Robes", "Vestes", "Chaussures", "Accessoires"];
export const TAILLES = ["XS", "S", "M", "L", "XL", "XXL"];
export const MATIERES = ["Coton", "Laine", "Lin", "Polyester", "Denim"];
export const STYLES = ["Casual", "Formel", "Sport", "Streetwear"];
export const TRANCHES_PRIX = [
  { id: "moins-30", label: "Moins de 30 $", min: 0, max: 30 },
  { id: "30-60", label: "30 $ – 60 $", min: 30, max: 60 },
  { id: "60-100", label: "60 $ – 100 $", min: 60, max: 100 },
  { id: "plus-100", label: "Plus de 100 $", min: 100, max: Infinity },
];

const img = (seed) => `https://picsum.photos/seed/etoffe-${seed}/400/500`;

export const PRODUITS = [
  { id: 1, nom: "T-shirt Essentiel Coton Bio", categorie: "T-shirts", prix: 24, couleur: "Blanc", matiere: "Coton", style: "Casual", tailles: ["XS", "S", "M", "L", "XL"], description: "Coton biologique 100 %, coupe régulière. Basique intemporel pour un style casual au quotidien.", image: img("tshirt-blanc") },
  { id: 2, nom: "T-shirt Graphique Streetwear", categorie: "T-shirts", prix: 29, couleur: "Noir", matiere: "Coton", style: "Streetwear", tailles: ["S", "M", "L", "XL", "XXL"], description: "Sérigraphie oversize, coton épais 220 g/m². Coupe ample pour un look urbain affirmé.", image: img("tshirt-noir") },
  { id: 3, nom: "T-shirt Manches Longues Lin", categorie: "T-shirts", prix: 38, couleur: "Beige", matiere: "Lin", style: "Casual", tailles: ["XS", "S", "M", "L"], description: "Lin respirant à 55 %, léger et fluide. Idéal pour les journées chaudes.", image: img("tshirt-lin") },
  { id: 4, nom: "Polo Sport Technique", categorie: "T-shirts", prix: 34, couleur: "Bleu marine", matiere: "Polyester", style: "Sport", tailles: ["S", "M", "L", "XL"], description: "Tissu polyester respirant à séchage rapide. Col polo, coupe ajustée pour l'activité physique.", image: img("polo-sport") },
  { id: 5, nom: "Jean Slim Denim Brut", categorie: "Pantalons", prix: 68, couleur: "Bleu", matiere: "Denim", style: "Casual", tailles: ["XS", "S", "M", "L", "XL"], description: "Denim brut 100 % coton, coupe slim. Passe du bureau décontracté au week-end.", image: img("jean-slim") },
  { id: 6, nom: "Pantalon Chino Coton", categorie: "Pantalons", prix: 52, couleur: "Kaki", matiere: "Coton", style: "Casual", tailles: ["S", "M", "L", "XL", "XXL"], description: "Coton stretch, coupe droite. Polyvalent, se porte aussi bien au travail qu'en sortie.", image: img("chino-kaki") },
  { id: 7, nom: "Pantalon Habillé Laine", categorie: "Pantalons", prix: 95, couleur: "Gris anthracite", matiere: "Laine", style: "Formel", tailles: ["S", "M", "L", "XL"], description: "Mélange de laine fine, pli marqué. Coupe classique pour un rendu professionnel.", image: img("pantalon-laine") },
  { id: 8, nom: "Jogger Sport Polyester", categorie: "Pantalons", prix: 45, couleur: "Noir", matiere: "Polyester", style: "Sport", tailles: ["XS", "S", "M", "L", "XL", "XXL"], description: "Tissu extensible quatre directions, poches zippées. Conçu pour l'entraînement.", image: img("jogger-sport") },
  { id: 9, nom: "Robe d'Été Fleurie Lin", categorie: "Robes", prix: 72, couleur: "Corail", matiere: "Lin", style: "Casual", tailles: ["XS", "S", "M", "L"], description: "Lin léger à motif floral, coupe évasée. Fraîche et confortable pour les journées ensoleillées.", image: img("robe-ete") },
  { id: 10, nom: "Robe de Soirée Élégante", categorie: "Robes", prix: 128, couleur: "Noir", matiere: "Polyester", style: "Formel", tailles: ["XS", "S", "M", "L", "XL"], description: "Tissu satiné fluide, coupe cintrée. Pensée pour les occasions habillées.", image: img("robe-soiree") },
  { id: 11, nom: "Robe Portefeuille Coton", categorie: "Robes", prix: 58, couleur: "Bordeaux", matiere: "Coton", style: "Casual", tailles: ["S", "M", "L", "XL"], description: "Coton stretch, coupe portefeuille ajustable. Un classique facile à porter.", image: img("robe-portefeuille") },
  { id: 12, nom: "Veste en Jean Denim", categorie: "Vestes", prix: 85, couleur: "Bleu", matiere: "Denim", style: "Streetwear", tailles: ["XS", "S", "M", "L", "XL"], description: "Denim délavé, coupe classique cintrée. Pièce polyvalente à superposer toute l'année.", image: img("veste-jean") },
  { id: 13, nom: "Blazer Laine Ajusté", categorie: "Vestes", prix: 145, couleur: "Marine", matiere: "Laine", style: "Formel", tailles: ["S", "M", "L", "XL"], description: "Mélange de laine structuré, doublure intérieure. Coupe ajustée pour un rendu soigné.", image: img("blazer-laine") },
  { id: 14, nom: "Veste Coupe-Vent Sport", categorie: "Vestes", prix: 79, couleur: "Rouge", matiere: "Polyester", style: "Sport", tailles: ["XS", "S", "M", "L", "XL", "XXL"], description: "Polyester déperlant, capuche ajustable. Légère et compressible pour l'activité extérieure.", image: img("veste-coupevent") },
  { id: 15, nom: "Veste Oversize Streetwear", categorie: "Vestes", prix: 98, couleur: "Noir", matiere: "Coton", style: "Streetwear", tailles: ["M", "L", "XL", "XXL"], description: "Coton épais, coupe oversize, poches larges. Pièce statement pour un look urbain.", image: img("veste-oversize") },
  { id: 16, nom: "Baskets Blanches Minimalistes", categorie: "Chaussures", prix: 89, couleur: "Blanc", matiere: "Coton", style: "Casual", tailles: ["S", "M", "L", "XL"], description: "Tige en toile de coton, semelle légère. Un basique qui s'accorde avec tout.", image: img("baskets-blanches") },
  { id: 17, nom: "Baskets de Course Techniques", categorie: "Chaussures", prix: 112, couleur: "Gris", matiere: "Polyester", style: "Sport", tailles: ["S", "M", "L", "XL", "XXL"], description: "Mesh respirant, amorti réactif. Conçues pour la course et l'entraînement quotidien.", image: img("baskets-course") },
  { id: 18, nom: "Bottines Denim Streetwear", categorie: "Chaussures", prix: 96, couleur: "Bleu", matiere: "Denim", style: "Streetwear", tailles: ["S", "M", "L"], description: "Empeigne en denim, semelle épaisse. Un choix affirmé pour compléter un look urbain.", image: img("bottines-denim") },
  { id: 19, nom: "Casquette Coton Brodée", categorie: "Accessoires", prix: 22, couleur: "Noir", matiere: "Coton", style: "Streetwear", tailles: ["Unique"], description: "Coton épais, broderie discrète, sangle ajustable. Complète un look décontracté.", image: img("casquette") },
  { id: 20, nom: "Écharpe en Laine", categorie: "Accessoires", prix: 34, couleur: "Gris", matiere: "Laine", style: "Formel", tailles: ["Unique"], description: "Laine douce tissée serré, chaude sans être épaisse. Idéale pour les tenues habillées.", image: img("echarpe-laine") },
  { id: 21, nom: "Ceinture Cuir Classique", categorie: "Accessoires", prix: 42, couleur: "Brun", matiere: "Polyester", style: "Formel", tailles: ["Unique"], description: "Boucle métallique mate, finition texturée. Un accessoire discret pour les tenues de bureau.", image: img("ceinture") },
  { id: 22, nom: "Sac Fourre-Tout Toile", categorie: "Accessoires", prix: 27, couleur: "Beige", matiere: "Coton", style: "Casual", tailles: ["Unique"], description: "Toile de coton résistante, fond renforcé. Pratique pour les courses ou l'université.", image: img("sac-toile") },
];
