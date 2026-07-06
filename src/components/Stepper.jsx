import "./Stepper.css";

const ETAPES = [
  { numero: 1, label: "Panier" },
  { numero: 2, label: "Infos" },
  { numero: 3, label: "Paiement" },
  { numero: 4, label: "Confirmation" },
];

/**
 * Stepper visuel permanent — indique à tout moment l'étape active,
 * les étapes complétées et celles restantes (heuristique : visibilité de l'état du système).
 */
export default function Stepper({ etapeActuelle }) {
  return (
    <nav className="stepper" aria-label="Étapes de la commande">
      {ETAPES.map((etape) => {
        const etat = etape.numero < etapeActuelle ? "done" : etape.numero === etapeActuelle ? "current" : "upcoming";
        return (
          <div key={etape.numero} className={`stepper-step ${etat}`}>
            <div className="stepper-dot" aria-hidden="true">
              {etat === "done" ? "✓" : etape.numero}
            </div>
            <div className="stepper-label">{etape.numero}. {etape.label}</div>
            <div className="stepper-status">
              {etat === "done" ? "Complétée" : etat === "current" ? "En cours" : "À venir"}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
