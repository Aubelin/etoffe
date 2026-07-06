import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

export default function Sondage() {
  const [note, setNote] = useState(0);
  const [commentaire, setCommentaire] = useState("");
  const [envoye, setEnvoye] = useState(false);

  function envoyer(ev) {
    ev.preventDefault();
    setEnvoye(true);
  }

  if (envoye) {
    return (
      <div className="section">
        <div className="container checkout-container confirmation-box">
          <div className="confirmation-icon">💬</div>
          <h1>Merci beaucoup pour votre retour !</h1>
          <p>Vos réponses nous aident à améliorer votre expérience chez Étoffe.</p>
          <Link to="/boutique" className="btn btn-primary">Retour à la boutique</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container checkout-container">
        {/* Établir une connexion : ton interrogatif et engageant */}
        <h1>Comment s'est passée votre visite ?</h1>
        <p>Votre avis compte pour nous — répondre ne prend qu'une minute, et vous pouvez fermer cette page à tout moment sans perdre votre commande.</p>

        <form onSubmit={envoyer}>
          <div className="form-field">
            <label>Quelle note donneriez-vous à votre expérience sur Étoffe ?</label>
            <div style={{ display: "flex", gap: "0.4rem" }} role="radiogroup" aria-label="Note sur 5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className="btn"
                  style={{
                    border: "1.5px solid var(--color-border)",
                    background: note >= n ? "var(--color-accent-soft)" : "transparent",
                    color: note >= n ? "var(--color-accent-dark)" : "var(--color-text-muted)",
                    padding: "0.5rem 0.9rem",
                  }}
                  aria-pressed={note === n}
                  onClick={() => setNote(n)}
                >
                  {n} ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="commentaire">Qu'avez-vous pensé de la recherche de produits ou du parcours d'achat ?</label>
            <textarea
              id="commentaire"
              rows={4}
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
              placeholder="Dites-nous ce qui vous a plu, ou ce qu'on pourrait améliorer..."
              style={{ padding: "0.65rem 0.8rem", border: "1px solid var(--color-border)", borderRadius: "var(--radius)", fontFamily: "inherit", resize: "vertical" }}
            />
          </div>

          <div className="step-actions">
            <Link to="/" className="btn btn-outline">Non merci, plus tard</Link>
            <button type="submit" className="btn btn-primary" disabled={note === 0}>Envoyer mon avis</button>
          </div>
        </form>
      </div>
    </div>
  );
}
