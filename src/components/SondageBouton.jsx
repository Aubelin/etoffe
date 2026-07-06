import { Link, useLocation } from "react-router-dom";

export default function SondageBouton() {
  const location = useLocation();
  if (location.pathname === "/sondage") return null;

  return (
    <Link
      to="/sondage"
      style={{
        position: "fixed",
        right: "1.25rem",
        bottom: "1.25rem",
        zIndex: 30,
        background: "var(--color-text)",
        color: "var(--color-bg)",
        textDecoration: "none",
        padding: "0.65rem 1.1rem",
        borderRadius: "999px",
        fontSize: "0.85rem",
        fontWeight: 600,
        boxShadow: "var(--shadow)",
      }}
    >
      💬 Donnez votre avis
    </Link>
  );
}
