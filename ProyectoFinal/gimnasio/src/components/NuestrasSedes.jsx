const NuestrasSedes =({nombre, direccion, telefono, imagen, horario, descripcion})=>{
    return(
        <div className="card mb-5 container" style={{ alignContent:"center", maxWidth: "90%", padding:"20px", backgroundColor:"#fff", borderRadius:"8px", border:"1px solid #343a40" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" style={{width:"100%", height:"100%", padding:"5px"}} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Gimnasio: {nombre}</h5>
                        <p className="card-text">Direccion:{direccion}</p>
                        <p className="card-text">Telefono:{telefono}</p>
                        <p className="cart-text">Horario: {horario}</p>
                        <p className="card-text"><small className="text-body-secondary">{descripcion}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default NuestrasSedes;