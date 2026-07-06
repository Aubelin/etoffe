# Notes de conception — Étoffe

Ces notes documentent les choix de conception faits pour le Devoir 4 (SEG3525). Elles sont pensées pour être réutilisées directement dans le rapport.

## 1. Facettes de recherche et réseau sémantique

Le réseau sémantique implicite d'un acheteur de vêtements tourne autour de six axes de description d'un produit, chacun devenu une facette dans `src/components/FacetFilters.jsx` :

- **Catégorie** (t-shirts, pantalons, robes, vestes, chaussures, accessoires) — le premier critère de tri mental de tout acheteur ("je cherche un pantalon").
- **Taille** — contrainte physique non négociable, présentée en chips plutôt qu'en cases à cocher car les tailles sont peu nombreuses et se scannent visuellement plus vite.
- **Couleur** — critère esthétique, généré dynamiquement à partir des données (`couleursDisponibles` dans `Catalogue.jsx`) pour rester toujours exact.
- **Matière** (coton, laine, lin, polyester, denim) — critère fonctionnel (confort, saison, entretien).
- **Style** (casual, formel, sport, streetwear) — critère d'usage/occasion.
- **Tranche de prix** — contrainte budgétaire, regroupée en 4 intervalles plutôt qu'en curseur continu pour rester simple et rapide à scanner.

22 produits couvrent délibérément toutes les combinaisons de ces facettes (`src/data/produits.js`) : sans filtre, la recherche est **divergente** (22 résultats, exploration libre) ; en combinant 2-3 facettes (ex. Robes + XS), elle devient **convergente** (1-3 résultats). Le filtrage est appliqué en direct (`useMemo` dans `Catalogue.jsx`, aucun bouton "Appliquer"), et un compteur ("X produits trouvés") rend visible l'effet de chaque filtre.

## 2. Le stepper et la visibilité de l'état du système

Le composant `src/components/Stepper.jsx` est affiché en permanence sur les 4 écrans du tunnel d'achat (Panier → Infos → Paiement → Confirmation). Chaque étape a 3 états visuels distincts :
- **Complétée** : cercle plein avec coche ✓, ligne de connexion colorée.
- **En cours** : cercle avec contour accentué et halo.
- **À venir** : cercle neutre, texte grisé.

Cela répond directement à l'exigence du devoir : l'utilisateur sait toujours où il se trouve, ce qui est fait, et ce qu'il reste à faire. Techniquement, l'étape provient d'une prop numérique (`etapeActuelle`) passée par chaque page de route, pas d'un état global — ce qui garde le composant réutilisable et testable.

## 3. Modèle rédacteur/lecteur et effet de conversation

Le site s'adresse au client au **"vous"**, sur un ton amical et direct — cohérent sur l'ensemble du site (bannière, descriptions, formulaires, sondage). Deux variations locales en **"je"** créent volontairement un effet de conversation personnalisée, à des moments où la marque "parle" directement au client plutôt que de simplement l'informer :
- Page de confirmation de commande (`CommandeConfirmation.jsx`) : *"Je prépare votre commande dès maintenant..."*
- Bouton flottant du sondage reste en "vous" mais le ton reste conversationnel et chaleureux.

## 4. Les 3 intentions de communication

| Intention | Où | Exemple réel du site |
|---|---|---|
| **Inciter à l'action** | Bannière promo, page d'accueil (`Accueil.jsx`) | *"Profitez de -20 % sur toute la collection aujourd'hui seulement — ne manquez pas cette offre !"* — phrase exclamative, impérative implicite. Bouton "Découvrez la collection !" |
| **Informer** | Descriptions produits (`data/produits.js`), section "Qui est Étoffe ?" | *"Coton biologique 100 %, coupe régulière."* — ton déclaratif, neutre, factuel, sans exclamation |
| **Établir une connexion** | Page sondage (`Sondage.jsx`) | *"Comment s'est passée votre visite ?"* / *"Qu'avez-vous pensé de la recherche de produits ?"* — phrases interrogatives, engageantes |

Le choix des mots pour les boutons évite l'ambiguïté : "Ajouter au panier" (pas "Ajouter"), "Passer à la caisse" (pas "Suivant"), "Retirer de mon panier" (pas "Supprimer").

## 5. Palette de couleurs et typographie

- **Palette** : neutres chauds (`--color-bg: #FAF7F2`, `--color-text: #241F1A`) + un accent terracotta vif (`--color-accent: #D9542F`) réservé exclusivement aux appels à l'action (boutons primaires, badges, éléments actifs). Ce choix évoque une boutique de vêtements chaleureuse et actuelle sans versé dans le criard, et garantit un contraste texte/fond élevé (charcoal sur crème).
- **Typographie** : **Fraunces** (serif à fort caractère) pour les titres — apporte une touche mode/éditoriale — et **Work Sans** (sans-serif neutre) pour le corps de texte, pour la lisibilité. Deux polices Google Fonts, comme requis.
- **Hiérarchie** : tailles de titres en `clamp()` (h1 > h2 > h3), poids de police distincts, espacement généreux entre sections.
- **Gestalt** : *similarité* dans les cartes produits (même structure visuelle répétée → perçues comme un ensemble cohérent, `ProductCard.css`) ; *proximité* dans les groupes de facettes (espacement plus grand entre groupes qu'entre options d'un même groupe, `FacetFilters.css`).

## 6. Le sondage et la non-intrusivité

Le sondage (`Sondage.jsx`) n'est jamais imposé : il est accessible via un bouton discret flottant ("💬 Donnez votre avis", toujours visible sauf sur la page du sondage elle-même) et suggéré (pas forcé) après la confirmation de commande. Aucun popup modal ne bloque la navigation ; le lien "Non merci, plus tard" permet de partir sans remplir le formulaire.

## 7. Heuristiques d'utilisabilité de Nielsen — un exemple concret par heuristique

1. **Visibilité de l'état du système** — Le stepper (`Stepper.jsx`) sur les pages de commande ; le compteur "X produits trouvés" dans `Catalogue.jsx` ; le badge numérique sur l'icône panier (`Header.jsx`).
2. **Correspondance entre le système et le monde réel** — Vocabulaire familier de boutique ("Panier", "Passer à la caisse", tailles S/M/L comme en magasin) plutôt que des termes techniques.
3. **Contrôle et liberté de l'utilisateur** — Possibilité de retirer un filtre individuellement ou de tout effacer (`active-filter-pill`, `Catalogue.jsx`) ; boutons "← Retour" à chaque étape du tunnel d'achat ; lien "Non merci, plus tard" dans le sondage.
4. **Cohérence et standards** — Un seul style de bouton primaire (accent terracotta) utilisé pour toutes les actions principales du site ; structure de carte identique pour tous les produits.
5. **Prévention des erreurs** — Le bouton "Ajouter au panier" (`ProductCard.jsx`) reste désactivé tant qu'aucune taille n'est choisie ; les boutons "Continuer" du tunnel d'achat valident le formulaire avant de permettre l'avancement.
6. **Reconnaissance plutôt que rappel** — Les filtres actifs sont affichés sous forme de pastilles visibles (`active-filters`) au lieu d'obliger l'utilisateur à se souvenir de ce qu'il a sélectionné ; les tailles disponibles sont montrées directement sur chaque carte produit.
7. **Flexibilité et efficacité d'utilisation** — Tri par prix croissant/décroissant dans la boutique ; ajout au panier possible directement depuis la grille de produits, sans passer par une fiche détaillée.
8. **Design esthétique et minimaliste** — Palette réduite à 3 couleurs fonctionnelles, beaucoup d'espace négatif, aucune information superflue sur les cartes produits.
9. **Aide à la reconnaissance, au diagnostic et à la récupération des erreurs** — Messages d'erreur explicites et localisés sous chaque champ de formulaire invalide (ex. "Veuillez entrer une adresse courriel valide.", `CommandeInfos.jsx`) ; état vide du catalogue avec suggestion claire ("Essayez de retirer un ou plusieurs filtres...").
10. **Aide et documentation** — Lien "guide des tailles et livraisons" dans le pied de page (`Footer.jsx`), accessible depuis n'importe quelle page.

## 8. Choix ambigus tranchés unilatéralement

- Pas de page de détail produit séparée : l'ajout au panier se fait directement depuis la carte, pour un parcours plus rapide (public cible = achats rapides mobile/desktop).
- Les tailles des chaussures et accessoires réutilisent la même échelle (XS-XXL, ou "Unique" pour les accessoires) plutôt qu'une pointure réelle, pour garder la facette "Taille" simple et cohérente dans ce prototype.
- Le paiement est un formulaire simulé (validation de format uniquement, aucune vraie transaction), conformément à l'énoncé.
