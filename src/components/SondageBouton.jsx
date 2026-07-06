import { Link, useLocation } from "react-router-dom";
import { IconChat } from "./Icons.jsx";

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
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
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
      <IconChat width={18} height={18} aria-hidden="true" /> Donnez votre avis
    </Link>
  );
}
