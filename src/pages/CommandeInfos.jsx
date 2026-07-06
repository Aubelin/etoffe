import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Stepper from "../components/Stepper.jsx";
import "./Checkout.css";

export default function CommandeInfos() {
  const { items, infosLivraison, setInfosLivraison } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(infosLivraison || { nom: "", email: "", adresse: "", ville: "", codePostal: "" });
  const [erreurs, setErreurs] = useState({});

  useEffect(() => {
    if (items.length === 0) navigate("/panier");
  }, [items, navigate]);

  function valider() {
    const e = {};
    if (!form.nom.trim()) e.nom = "Veuillez entrer votre nom complet.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Veuillez entrer une adresse courriel valide.";
    if (!form.adresse.trim()) e.adresse = "Veuillez entrer votre adresse de livraison.";
    if (!form.ville.trim()) e.ville = "Veuillez entrer votre ville.";
    if (!/^[A-Za-z0-9 ]{5,7}$/.test(form.codePostal.trim())) e.codePostal = "Veuillez entrer un code postal valide.";
    setErreurs(e);
    return Object.keys(e).length === 0;
  }

  function continuer(ev) {
    ev.preventDefault();
    if (!valider()) return;
    setInfosLivraison(form);
    navigate("/commande/paiement");
  }

  return (
    <div className="section">
      <div className="container checkout-container">
        <h1>Vos informations</h1>
        <Stepper etapeActuelle={2} />

        <form onSubmit={continuer} noValidate>
          <div className="form-field">
            <label htmlFor="nom">Nom complet</label>
            <input id="nom" className={erreurs.nom ? "invalide" : ""} value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })} />
            {erreurs.nom && <span className="form-error">{erreurs.nom}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Courriel</label>
            <input id="email" type="email" className={erreurs.email ? "invalide" : ""} value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vous@exemple.com" />
            {erreurs.email && <span className="form-error">{erreurs.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="adresse">Adresse de livraison</label>
            <input id="adresse" className={erreurs.adresse ? "invalide" : ""} value={form.adresse}
              onChange={(e) => setForm({ ...form, adresse: e.target.value })} />
            {erreurs.adresse && <span className="form-error">{erreurs.adresse}</span>}
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="ville">Ville</label>
              <input id="ville" className={erreurs.ville ? "invalide" : ""} value={form.ville}
                onChange={(e) => setForm({ ...form, ville: e.target.value })} />
              {erreurs.ville && <span className="form-error">{erreurs.ville}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="codePostal">Code postal</label>
              <input id="codePostal" className={erreurs.codePostal ? "invalide" : ""} value={form.codePostal}
                onChange={(e) => setForm({ ...form, codePostal: e.target.value })} placeholder="K1N 6N5" />
              {erreurs.codePostal && <span className="form-error">{erreurs.codePostal}</span>}
            </div>
          </div>

          <div className="step-actions">
            <Link to="/panier" className="btn btn-outline">← Retour au panier</Link>
            <button type="submit" className="btn btn-primary">Continuer vers le paiement →</button>
          </div>
        </form>
      </div>
    </div>
  );
}
