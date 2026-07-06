import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Header.css";

export default function Header() {
  const { nombreArticles } = useCart();

  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="logo">Étoffe</NavLink>
        <nav className="nav-links" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/boutique">Boutique</NavLink>
          <NavLink to="/panier" className="cart-link" aria-label={`Panier, ${nombreArticles} article(s)`}>
            🛍 Panier
            {nombreArticles > 0 && <span className="cart-badge">{nombreArticles}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
