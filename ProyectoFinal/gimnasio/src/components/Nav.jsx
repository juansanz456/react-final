import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Gym{" "}
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/017/330/767/original/sport-man-and-woman-in-training-fitness-silhouette-dumbbells-logo-gym-bodybuilding-vector.jpg"
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                    />
                </Link>
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Entrenadores" className="nav-link">
                                Entrenadores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Planes" className="nav-link">
                                Planes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Shop" className="nav-link">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sobre nosotros
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/Sobre_nosotros" className="dropdown-item">
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Sucursales" className="dropdown-item">
                                        Sucursales
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
