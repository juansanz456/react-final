import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-5">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div>
        <h5 className="mb-3">Navegación</h5>
        <ul className="list-unstyled mb-0">
          <li><Link to="/" className="text-light text-decoration-none">Inicio</Link></li>
          <li><Link to="/Entrenadores" className="text-light text-decoration-none">Entrenadores</Link></li>
          <li><Link to="/Planes" className="text-light text-decoration-none">Planes</Link></li>
          <li><Link to="/Shop" className="text-light text-decoration-none">Shop</Link></li>
          <li><Link to="/Sobre_nosotros" className="text-light text-decoration-none">Sobre nosotros</Link></li>
          <li><Link to="/Sucursales" className="text-light text-decoration-none">Sucursales</Link></li>
        </ul>
        <div className="mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer" className="text-light">
            <i className="bi bi-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-4 mt-md-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/017/330/767/original/sport-man-and-woman-in-training-fitness-silhouette-dumbbells-logo-gym-bodybuilding-vector.jpg"
          alt="Logo Gimnasio"
          style={{ width: "120px", borderRadius: "10px" }}
        />
      </div>
    </div>
    <div className="text-center mt-3">
      <small>&copy; {new Date().getFullYear()} Gimnasio. Todos los derechos reservados.</small>
    </div>
  </footer>
);

export default Footer;