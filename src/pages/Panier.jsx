import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Stepper from "../components/Stepper.jsx";
import "./Checkout.css";

export default function Panier() {
  const { items, modifierQuantite, retirerDuPanier, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container checkout-container">
        <h1>Votre panier</h1>
        <Stepper etapeActuelle={1} />

        {items.length === 0 ? (
          <div className="empty-state">
            <h3>Votre panier est vide</h3>
            <p>Parcourez la boutique pour trouver votre bonheur.</p>
            <Link to="/boutique" className="btn btn-primary">Aller à la boutique</Link>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div className="panier-item" key={`${item.produit.id}-${item.taille}`}>
                <img src={item.produit.image} alt={item.produit.nom} />
                <div className="panier-item-info">
                  <h4>{item.produit.nom}</h4>
                  <div className="panier-item-meta">Taille {item.taille} · {item.produit.prix} $ / unité</div>
                  <button className="remove-link" onClick={() => retirerDuPanier(item.produit.id, item.taille)}>
                    Retirer de mon panier
                  </button>
                </div>
                <div className="qty-control" aria-label={`Quantité pour ${item.produit.nom}`}>
                  <button onClick={() => modifierQuantite(item.produit.id, item.taille, item.quantite - 1)} aria-label="Diminuer la quantité">−</button>
                  <span>{item.quantite}</span>
                  <button onClick={() => modifierQuantite(item.produit.id, item.taille, item.quantite + 1)} aria-label="Augmenter la quantité">+</button>
                </div>
                <strong>{item.produit.prix * item.quantite} $</strong>
              </div>
            ))}

            <div className="panier-summary">
              <span>Total</span>
              <span>{total} $</span>
            </div>

            <div className="step-actions">
              <Link to="/boutique" className="btn btn-outline">← Continuer mes achats</Link>
              <button className="btn btn-primary" onClick={() => navigate("/commande/infos")}>
                Passer à la caisse →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
