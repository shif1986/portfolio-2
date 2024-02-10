import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Components/pages/Portfolio";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Contact from "./Components/pages/Contact";
import Service from "./Components/pages/Service";
import Accueil from "./Components/pages/Accueil";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;