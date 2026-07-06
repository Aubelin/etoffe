import { useMemo, useState } from "react";
import { PRODUITS, TRANCHES_PRIX } from "../data/produits.js";
import FacetFilters from "../components/FacetFilters.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { IconX } from "../components/Icons.jsx";
import "./Catalogue.css";
import "../components/FacetFilters.css";

const FILTRES_VIDES = () => ({
  categorie: new Set(),
  taille: new Set(),
  couleur: new Set(),
  matiere: new Set(),
  style: new Set(),
  prix: new Set(),
});

const LABELS_GROUPE = { categorie: "", taille: "Taille ", couleur: "", matiere: "", style: "", prix: "" };

export default function Catalogue() {
  const [filtres, setFiltres] = useState(FILTRES_VIDES);
  const [tri, setTri] = useState("pertinence");

  const couleursDisponibles = useMemo(
    () => [...new Set(PRODUITS.map((p) => p.couleur))].sort(),
    []
  );

  const produitsFiltres = useMemo(() => {
    let liste = PRODUITS.filter((p) => {
      if (filtres.categorie.size && !filtres.categorie.has(p.categorie)) return false;
      if (filtres.taille.size && !p.tailles.some((t) => filtres.taille.has(t))) return false;
      if (filtres.couleur.size && !filtres.couleur.has(p.couleur)) return false;
      if (filtres.matiere.size && !filtres.matiere.has(p.matiere)) return false;
      if (filtres.style.size && !filtres.style.has(p.style)) return false;
      if (filtres.prix.size) {
        const dansUneTranche = [...filtres.prix].some((id) => {
          const tp = TRANCHES_PRIX.find((t) => t.id === id);
          return p.prix >= tp.min && p.prix < tp.max;
        });
        if (!dansUneTranche) return false;
      }
      return true;
    });

    if (tri === "prix-asc") liste = [...liste].sort((a, b) => a.prix - b.prix);
    if (tri === "prix-desc") liste = [...liste].sort((a, b) => b.prix - a.prix);

    return liste;
  }, [filtres, tri]);

  const filtresActifs = useMemo(() => {
    const pills = [];
    for (const [groupe, set] of Object.entries(filtres)) {
      for (const valeur of set) {
        const label = groupe === "prix" ? TRANCHES_PRIX.find((t) => t.id === valeur)?.label : valeur;
        pills.push({ groupe, valeur, label: `${LABELS_GROUPE[groupe]}${label}` });
      }
    }
    return pills;
  }, [filtres]);

  function retirerFiltre(groupe, valeur) {
    setFiltres((prev) => {
      const copie = new Set(prev[groupe]);
      copie.delete(valeur);
      return { ...prev, [groupe]: copie };
    });
  }

  function effacerTout() {
    setFiltres(FILTRES_VIDES());
  }

  return (
    <div className="section">
      <div className="container">
        <h1>La boutique</h1>
        <p>Affinez votre recherche par catégorie, taille, couleur, matière, style ou budget — les résultats se mettent à jour instantanément.</p>

        <div className="results-bar">
          <span className="results-count">{produitsFiltres.length} produit{produitsFiltres.length > 1 ? "s" : ""} trouvé{produitsFiltres.length > 1 ? "s" : ""}</span>
          <select className="sort-select" value={tri} onChange={(e) => setTri(e.target.value)} aria-label="Trier les produits">
            <option value="pertinence">Trier par pertinence</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
          </select>
        </div>

        {filtresActifs.length > 0 && (
          <div className="active-filters">
            {filtresActifs.map((f) => (
              <button key={`${f.groupe}-${f.valeur}`} className="active-filter-pill" onClick={() => retirerFiltre(f.groupe, f.valeur)}>
                {f.label} <IconX width={12} height={12} strokeWidth={2.5} />
              </button>
            ))}
            <button className="btn-ghost" onClick={effacerTout}>Effacer tout</button>
          </div>
        )}

        <div className="catalogue-layout">
          <FacetFilters filtres={filtres} setFiltres={setFiltres} couleursDisponibles={couleursDisponibles} />

          {produitsFiltres.length === 0 ? (
            <div className="empty-state">
              <h3>Aucun produit ne correspond à ces filtres</h3>
              <p>Essayez de retirer un ou plusieurs filtres pour élargir votre recherche.</p>
              <button className="btn btn-outline" onClick={effacerTout}>Effacer tous les filtres</button>
            </div>
          ) : (
            <div className="product-grid">
              {produitsFiltres.map((p) => (
                <ProductCard key={p.id} produit={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
