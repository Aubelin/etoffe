import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SondageBouton from "./components/SondageBouton.jsx";
import Accueil from "./pages/Accueil.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Panier from "./pages/Panier.jsx";
import CommandeInfos from "./pages/CommandeInfos.jsx";
import CommandePaiement from "./pages/CommandePaiement.jsx";
import CommandeConfirmation from "./pages/CommandeConfirmation.jsx";
import Sondage from "./pages/Sondage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/boutique" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/commande/infos" element={<CommandeInfos />} />
          <Route path="/commande/paiement" element={<CommandePaiement />} />
          <Route path="/commande/confirmation" element={<CommandeConfirmation />} />
          <Route path="/sondage" element={<Sondage />} />
        </Routes>
      </main>
      <SondageBouton />
      <Footer />
    </>
  );
}
