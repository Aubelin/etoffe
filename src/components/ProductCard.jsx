import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ produit }) {
  const { ajouterAuPanier } = useCart();
  const [tailleChoisie, setTailleChoisie] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  function handleAjouter() {
    if (!tailleChoisie) return; // prévention des erreurs : impossible d'ajouter sans taille
    ajouterAuPanier(produit, tailleChoisie);
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 1600);
  }

  return (
    <article className="product-card">
      <img src={produit.image} alt={`${produit.nom} — ${produit.couleur}`} loading="lazy" />
      <div className="product-card-body">
        <span className="product-card-cat">{produit.categorie} · {produit.couleur}</span>
        <h3>{produit.nom}</h3>
        <p className="product-card-desc">{produit.description}</p>

        <div className="product-card-tailles" role="group" aria-label="Choisir une taille">
          {produit.tailles.map((t) => (
            <button
              key={t}
              type="button"
              className={`taille-chip ${tailleChoisie === t ? "selected" : ""}`}
              onClick={() => setTailleChoisie(t)}
              aria-pressed={tailleChoisie === t}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="product-card-footer">
          <span className="product-card-price">{produit.prix} $</span>
          <button
            type="button"
            className="btn btn-primary"
            style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem" }}
            onClick={handleAjouter}
            disabled={!tailleChoisie}
            title={!tailleChoisie ? "Choisissez une taille d'abord" : "Ajouter au panier"}
          >
            {confirmation ? "Ajouté ✓" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </article>
  );
}
