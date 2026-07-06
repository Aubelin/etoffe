import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { produit, taille, quantite }
  const [infosLivraison, setInfosLivraison] = useState(null);
  const [numeroCommande, setNumeroCommande] = useState(null);

  function ajouterAuPanier(produit, taille) {
    setItems((prev) => {
      const existant = prev.find((i) => i.produit.id === produit.id && i.taille === taille);
      if (existant) {
        return prev.map((i) =>
          i === existant ? { ...i, quantite: i.quantite + 1 } : i
        );
      }
      return [...prev, { produit, taille, quantite: 1 }];
    });
  }

  function retirerDuPanier(produitId, taille) {
    setItems((prev) => prev.filter((i) => !(i.produit.id === produitId && i.taille === taille)));
  }

  function modifierQuantite(produitId, taille, quantite) {
    if (quantite < 1) return retirerDuPanier(produitId, taille);
    setItems((prev) =>
      prev.map((i) =>
        i.produit.id === produitId && i.taille === taille ? { ...i, quantite } : i
      )
    );
  }

  function viderPanier() {
    setItems([]);
  }

  function finaliserCommande() {
    const numero = `ETF-${Math.floor(100000 + Math.random() * 900000)}`;
    setNumeroCommande(numero);
    setItems([]);
    return numero;
  }

  const nombreArticles = useMemo(() => items.reduce((sum, i) => sum + i.quantite, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.quantite * i.produit.prix, 0), [items]);

  const value = {
    items, ajouterAuPanier, retirerDuPanier, modifierQuantite, viderPanier, nombreArticles, total,
    infosLivraison, setInfosLivraison, numeroCommande, finaliserCommande,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
  return ctx;
}
