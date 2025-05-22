import NuestrasSedes from "../components/NuestrasSedes";
const Sucursales=()=>{
    return(
        <>
            <div className="container d-flex flex-column align-items-center justify-content-center">
            <div>
                <h1 className="text-center mt-5">Nuestras Sucursales</h1>
                <NuestrasSedes
                nombre="Gimnasion Total Fitness"
                direccion="Ibague Calle 123 #45-67"
                telefono="3001234567"
                imagen="https://i.pinimg.com/originals/64/5e/1d/645e1d1ac4ebd842627f372cbc590632.jpg"
                horario="Lunes a Viernes: 6am - 10pm, Sabado: 8am - 6pm"
                descripcion="Un gimnasio moderno y bien equipado con entrenadores profesionales."
                />
                <NuestrasSedes
                nombre="prime gym"
                direccion="Ibague Calle 160#21 sur-19"
                telefono="3014087640"
                imagen="https://www.cuadrados.es/wp-content/uploads/2016/09/fachada-prime-gym-web2.jpg"
                horario="Lunes a Viernes: 6am - 10pm, Sabado: 8am - 6pm"
                descripcion="Un gimnasio moderno y bien equipado con entrenadores profesionales."
                />
                <NuestrasSedes
                nombre="Gimnasio Trinford"
                direccion="Medellin Calle 45 # 23-45"
                telefono="3193298163"
                imagen="https://i.pinimg.com/originals/9b/42/30/9b42304651ee57257d0f8a2d6fb49948.jpg"
                horario="Lunes a Viernes: 6am - 10pm, Sabado: 8am - 6pm"
                descripcion="Un gimnasio moderno y bien equipado con entrenadores profesionales."
                />
            </div>

            </div>
        </>
    )

}
export default Sucursales;  
