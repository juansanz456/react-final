

const TargetaEntrenadores = ({ imageSRC, nombre, especialidad, descripcion, isFollowing, handleAgregar }) => {
    return (
       
        <div className="card mb-5 container" style={{ alignContent:"center", maxWidth: "90%", padding:"20px", backgroundColor:"#fff", borderRadius:"8px", border:"1px solid #343a40" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imageSRC} className="img-fluid rounded-start" style={{width:"100%", height:"100%", padding:"5px"}} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Entrenador: {nombre}</h5>
                        <p className="card-text">{especialidad}</p>
                        <p className="card-text"><small className="text-body-secondary">{descripcion}</small></p>
                    </div>
                </div>
                <div className='col-md-12 d-flex justify-content-center'>
                <button className='btn btn-outline-primary w-75 mt-3'
                    >
                        {isFollowing = "Entrenador por agregar" }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TargetaEntrenadores;