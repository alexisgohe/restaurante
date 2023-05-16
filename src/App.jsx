import "./App.css";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import AcercaDe from "./pages/AcercaDe";
import Contactenos from "./pages/Contactenos";
import Error404 from "./Components/Error404";
import { Navbar, Footer, Design } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/restaurante" element={<Landing />} />
          <Route path="/restaurante/acerca-de" element={<AcercaDe />} />
          <Route path="/restaurante/menu" element={<Menu />} />
          <Route path="/restaurante/contacto" element={<Contactenos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <Design />
      </div>
    </BrowserRouter>
  );
}

export default App;
