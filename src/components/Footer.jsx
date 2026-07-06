export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", padding: "2rem 0", marginTop: "2rem" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <strong style={{ fontFamily: "var(--font-titre)" }}>Étoffe</strong>
          <p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem" }}>Des vêtements pensés pour votre quotidien.</p>
        </div>
        <div style={{ fontSize: "0.85rem" }}>
          <p style={{ margin: 0 }}>Besoin d'aide ? Consultez notre <a href="#/aide" onClick={(e) => { e.preventDefault(); alert("Guide des tailles : XS–XXL selon coupe européenne. Livraison estimée 3-5 jours ouvrables. Retours gratuits sous 30 jours."); }} style={{ color: "var(--color-accent)" }}>guide des tailles et livraisons</a>.</p>
          <p style={{ margin: "0.4rem 0 0", color: "var(--color-text-muted)" }}>Projet pédagogique — SEG3525, Université d'Ottawa.</p>
        </div>
      </div>
    </footer>
  );
}
