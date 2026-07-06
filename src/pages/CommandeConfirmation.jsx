import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Stepper from "../components/Stepper.jsx";
import "./Checkout.css";

export default function CommandeConfirmation() {
  const { numeroCommande, infosLivraison } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!numeroCommande) navigate("/");
  }, [numeroCommande, navigate]);

  if (!numeroCommande) return null;

  return (
    <div className="section">
      <div className="container checkout-container">
        <Stepper etapeActuelle={4} />
        <div className="confirmation-box">
          <div className="confirmation-icon">✅</div>
          <h1>Merci pour votre commande{infosLivraison ? `, ${infosLivraison.nom.split(" ")[0]}` : ""} !</h1>
          {/* Variation locale en "je" pour créer un effet de conversation, voir DESIGN_NOTES.md */}
          <p style={{ fontSize: "1.05rem" }}>Je prépare votre commande dès maintenant — vous recevrez un courriel de confirmation sous peu.</p>
          <p>Numéro de commande : <strong>{numeroCommande}</strong></p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link to="/boutique" className="btn btn-primary">Continuer mes achats</Link>
            <Link to="/sondage" className="btn btn-outline">Donnez votre avis sur votre visite</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
