import { CATEGORIES, TAILLES, MATIERES, STYLES, TRANCHES_PRIX } from "../data/produits.js";
import "./FacetFilters.css";

function toggleInSet(set, value) {
  const copie = new Set(set);
  if (copie.has(value)) copie.delete(value);
  else copie.add(value);
  return copie;
}

export default function FacetFilters({ filtres, setFiltres, couleursDisponibles }) {
  function toggle(groupe, valeur) {
    setFiltres((prev) => ({ ...prev, [groupe]: toggleInSet(prev[groupe], valeur) }));
  }

  return (
    <aside className="facets" aria-label="Filtrer les produits">
      <div className="facet-group">
        <h4>Catégorie</h4>
        <div className="facet-options">
          {CATEGORIES.map((c) => (
            <label key={c} className="facet-checkbox">
              <input type="checkbox" checked={filtres.categorie.has(c)} onChange={() => toggle("categorie", c)} />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="facet-group">
        <h4>Taille</h4>
        <div className="facet-options chips">
          {TAILLES.map((t) => (
            <button
              key={t}
              type="button"
              className={`facet-chip ${filtres.taille.has(t) ? "selected" : ""}`}
              onClick={() => toggle("taille", t)}
              aria-pressed={filtres.taille.has(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="facet-group">
        <h4>Couleur</h4>
        <div className="facet-options">
          {couleursDisponibles.map((c) => (
            <label key={c} className="facet-checkbox">
              <input type="checkbox" checked={filtres.couleur.has(c)} onChange={() => toggle("couleur", c)} />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="facet-group">
        <h4>Matière</h4>
        <div className="facet-options">
          {MATIERES.map((m) => (
            <label key={m} className="facet-checkbox">
              <input type="checkbox" checked={filtres.matiere.has(m)} onChange={() => toggle("matiere", m)} />
              {m}
            </label>
          ))}
        </div>
      </div>

      <div className="facet-group">
        <h4>Style</h4>
        <div className="facet-options">
          {STYLES.map((s) => (
            <label key={s} className="facet-checkbox">
              <input type="checkbox" checked={filtres.style.has(s)} onChange={() => toggle("style", s)} />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="facet-group">
        <h4>Prix</h4>
        <div className="facet-options">
          {TRANCHES_PRIX.map((tp) => (
            <label key={tp.id} className="facet-checkbox">
              <input type="checkbox" checked={filtres.prix.has(tp.id)} onChange={() => toggle("prix", tp.id)} />
              {tp.label}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
