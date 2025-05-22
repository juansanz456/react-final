import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home.jsx";
import Entrenadores from "./Pages/Entrenadores.jsx";
import Planes from "./Pages/Planes.jsx";
import Sucursales from "./Pages/Sucursales.jsx";
import Shop from "./Pages/Shop.jsx";
import SobreNosotros from "./Pages/SobreNosotros.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-light bg-dark">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Planes" element={<Planes/>} />
          <Route path="/Sobre_nosotros" element={<SobreNosotros/>} />
          <Route path="/Sucursales" element={<Sucursales/>} />
          <Route path="/Entrenadores" element={<Entrenadores/>} />
          <Route path="/Shop" element={<Shop/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
