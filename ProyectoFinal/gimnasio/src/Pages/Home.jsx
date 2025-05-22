const Home=()=>{
    return(
        <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
    <div className="container-fluid container-fluid bg-dark text-light">
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner container align-center" >
                <div className="carousel-item active">
                    <img src="https://png.pngtree.com/background/20230516/original/pngtree-dark-gym-where-you-can-take-in-the-surrounding-light-picture-image_2611114.jpg" className="d-block w-100"  alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://png.pngtree.com/background/20230516/original/pngtree-gym-with-many-weights-in-dark-lighting-picture-image_2611113.jpg" className="d-block w-100"  alt="" />
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        <div className="container text-center mt-5">
            <h1 className="display-4">Bienvenido al Gimnasio</h1>
            <p className="lead">Tu lugar para ponerte en forma y alcanzar tus metas.</p>
            <a href="/sucursales" className="btn btn-primary btn-lg">Conoce nuestras sedes</a>

        </div>
        </div>
    );
}

export default Home;