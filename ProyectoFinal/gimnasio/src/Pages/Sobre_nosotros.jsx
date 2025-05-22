const Sobre_nosotros = () => {
    return (
        <div className="container mt-5">
            <div className="bg-gradient p-4 rounded-4 shadow-lg" style={{ background: "linear-gradient(120deg, #43c6ac 0%, #191654 100%)" }}>
                <div className="row align-items-center">
                    <div className="col-md-5 text-center mb-4 mb-md-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/017/330/767/original/sport-man-and-woman-in-training-fitness-silhouette-dumbbells-logo-gym-bodybuilding-vector.jpg"
                            alt="Logo Gimnasio"
                            style={{ width: "150px", borderRadius: "20px", border: "5px solid #fff", boxShadow: "0 8px 32px rgba(25,22,84,0.15)" }}
                        />
                      
                    </div>
                    <div className="col-md-7">
                        <div className="bg-white bg-opacity-75 p-4 rounded-4 shadow-sm">
                            <h2 className="mb-3 text-center" style={{ color: "#191654", fontWeight: "bold", letterSpacing: "2px" }}>¡Bienvenido a Gimnasio Fitness!</h2>
                            <hr style={{ borderTop: "2px solid #43c6ac", width: "80px", margin: "0 auto 20px auto" }} />
                            <p className="fs-5 text-center" style={{ color: "#191654" }}>
                                Somos una comunidad apasionada por el bienestar y la salud. Desde 2010, acompañamos a nuestros miembros a lograr sus metas físicas y personales en un ambiente moderno, seguro e inclusivo.
                            </p>
                            <div className="row text-center mb-3">
                                <div className="col-4">
                                    <div className="p-2">
                                        <i className="bi bi-people-fill text-success" style={{ fontSize: "2rem" }}></i>
                                        <div className="fw-bold mt-1" style={{ color: "#191654" }}>Comunidad</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="p-2">
                                        <i className="bi bi-award-fill text-warning" style={{ fontSize: "2rem" }}></i>
                                        <div className="fw-bold mt-1" style={{ color: "#191654" }}>Profesionales</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="p-2">
                                        <i className="bi bi-heart-pulse-fill text-danger" style={{ fontSize: "2rem" }}></i>
                                        <div className="fw-bold mt-1" style={{ color: "#191654" }}>Salud</div>
                                    </div>
                                </div>
                            </div>
                            <ul className="fs-5" style={{ color: "#191654", listStyle: "none", paddingLeft: 0 }}>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Entrenadores certificados y motivadores</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Equipos de última generación</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Clases grupales y personalizadas</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Ambiente familiar y seguro</li>
                            </ul>
                            <p className="mt-4 text-center" style={{ color: "#191654", fontWeight: "bold" }}>¡Te esperamos para entrenar juntos y lograr tus objetivos!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre_nosotros;