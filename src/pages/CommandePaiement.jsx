import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import Stepper from "../components/Stepper.jsx";
import "./Checkout.css";

export default function CommandePaiement() {
  const { items, total, infosLivraison, finaliserCommande } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nomCarte: "", numero: "", expiration: "", cvv: "" });
  const [erreurs, setErreurs] = useState({});

  // Vérifié seulement au montage : évite de rediriger vers /panier quand
  // le paiement réussi vide le panier juste avant la navigation vers la confirmation.
  useEffect(() => {
    if (items.length === 0) navigate("/panier");
    else if (!infosLivraison) navigate("/commande/infos");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function valider() {
    const e = {};
    if (!form.nomCarte.trim()) e.nomCarte = "Veuillez entrer le nom inscrit sur la carte.";
    if (!/^[0-9 ]{16,19}$/.test(form.numero.trim())) e.numero = "Veuillez entrer un numéro de carte à 16 chiffres.";
    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(form.expiration.trim())) e.expiration = "Format attendu : MM/AA.";
    if (!/^[0-9]{3,4}$/.test(form.cvv.trim())) e.cvv = "Le CVV doit contenir 3 ou 4 chiffres.";
    setErreurs(e);
    return Object.keys(e).length === 0;
  }

  function confirmer(ev) {
    ev.preventDefault();
    if (!valider()) return;
    finaliserCommande();
    navigate("/commande/confirmation");
  }

  return (
    <div className="section">
      <div className="container checkout-container">
        <h1>Paiement</h1>
        <Stepper etapeActuelle={3} />
        <p style={{ marginTop: "-0.5rem" }}>Ceci est un prototype pédagogique — aucune transaction réelle n'est traitée. Total à payer : <strong>{total} $</strong>.</p>

        <form onSubmit={confirmer} noValidate>
          <div className="form-field">
            <label htmlFor="nomCarte">Nom sur la carte</label>
            <input id="nomCarte" className={erreurs.nomCarte ? "invalide" : ""} value={form.nomCarte}
              onChange={(e) => setForm({ ...form, nomCarte: e.target.value })} />
            {erreurs.nomCarte && <span className="form-error">{erreurs.nomCarte}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="numero">Numéro de carte</label>
            <input id="numero" className={erreurs.numero ? "invalide" : ""} value={form.numero} inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              onChange={(e) => setForm({ ...form, numero: e.target.value })} />
            {erreurs.numero && <span className="form-error">{erreurs.numero}</span>}
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="expiration">Date d'expiration</label>
              <input id="expiration" className={erreurs.expiration ? "invalide" : ""} value={form.expiration}
                placeholder="MM/AA" onChange={(e) => setForm({ ...form, expiration: e.target.value })} />
              {erreurs.expiration && <span className="form-error">{erreurs.expiration}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" className={erreurs.cvv ? "invalide" : ""} value={form.cvv} inputMode="numeric"
                placeholder="123" onChange={(e) => setForm({ ...form, cvv: e.target.value })} />
              {erreurs.cvv && <span className="form-error">{erreurs.cvv}</span>}
            </div>
          </div>

          <div className="step-actions">
            <Link to="/commande/infos" className="btn btn-outline">← Retour aux informations</Link>
            <button type="submit" className="btn btn-primary">Confirmer et payer {total} $</button>
          </div>
        </form>
      </div>
    </div>
  );
}
