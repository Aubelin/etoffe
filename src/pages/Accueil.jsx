import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/produits.js";
import "./Accueil.css";

export default function Accueil() {
  return (
    <>
      {/* Inciter à l'action : bannière promo, ton impératif/exclamatif */}
      <div className="promo-banner">
        Profitez de <strong>-20 % sur toute la collection</strong> aujourd'hui seulement — ne manquez pas cette offre !
      </div>

      <section className="section">
        <div className="container hero">
          <div>
            <span className="badge">Nouvelle collection</span>
            <h1>Des vêtements pensés pour votre quotidien.</h1>
            <p style={{ fontSize: "1.05rem" }}>
              Étoffe habille les jeunes adultes qui bougent vite : du t-shirt du matin
              à la tenue du soir, trouvez des pièces confortables, bien coupées et
              faciles à assortir — livrées où vous voulez, quand vous voulez.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link to="/boutique" className="btn btn-primary">Découvrez la collection !</Link>
              <Link to="/boutique" className="btn btn-outline">Voir les nouveautés</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://picsum.photos/seed/etoffe-hero/700/560" alt="Mise en avant de vêtements Étoffe" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Magasinez par catégorie</h2>
          <p>Six familles de produits, pensées pour couvrir tous vos besoins.</p>
          <div className="categorie-grid">
            {CATEGORIES.map((c) => (
              <Link key={c} to="/boutique" className="categorie-tile">{c}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2>Qui est Étoffe ?</h2>
          {/* Informer : ton déclaratif, neutre et précis */}
          <p>
            Étoffe est une boutique en ligne de vêtements pour tous : t-shirts, pantalons,
            robes, vestes, chaussures et accessoires. Nos matières incluent le coton biologique,
            le lin, la laine, le denim et le polyester technique. Chaque fiche produit précise
            la composition, la coupe et les tailles disponibles pour vous aider à choisir
            en toute confiance.
          </p>
        </div>
      </section>
    </>
  );
}
