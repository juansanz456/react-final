const productos = [
  {
    nombre: "Proteína Whey",
    precio: "$350.000 cop",
    descripcion: "Suplemento de proteína de alta calidad para recuperación muscular.",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_701814-MLC31212027299_062019-F.jpg"
  },
  {
    nombre: "Guantes de Gimnasio",
    precio: "$150.000 cop",
    descripcion: "Guantes antideslizantes y transpirables para entrenamiento.",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/71xJ2louoWL._SL1500_.jpg"
  },
  {
    nombre: "Botella Deportiva",
    precio: "$10.000 cop",
    descripcion: "Botella de agua reutilizable, ideal para hidratarte durante el ejercicio.",
    imagen: "https://www.deportesjotace.com/wp-content/uploads/botella-de-agua-deportiva-ecologica.jpg"
  },
  {
    nombre: "Cinturón de Levantamiento",
    precio: "$250.000 cop",
    descripcion: "Cinturón de soporte lumbar para levantamiento de pesas.",
    imagen: "https://sdmed.cl/wp-content/uploads/2023/03/Cinturon-de-Levantamiento-RDX-Cuero-10-mm-Espesor-Live-Buckle-TPL-USPA-Approved-Negro-WBL-4LN-1-600x600.png"
  },
  {
    nombre: "Toalla Microfibra",
    precio: "$8.000 cop",
    descripcion: "Toalla ligera y absorbente, perfecta para el gimnasio.",
    imagen: "https://images-na.ssl-images-amazon.com/images/I/71mxPE1jXaL._AC_SL1500_.jpg"
  },
  {
    nombre: "Bandas de Resistencia",
    precio: "$12.000 cop",
    descripcion: "Set de bandas elásticas para ejercicios de fuerza y estiramiento.",
    imagen: "https://dpq25p1ucac70.cloudfront.net/seller-place-files/mrkl-files/2075/ELECTROHOGAR/BANDASSSS_163712586044_25.jpeg"
  },
];

const Shop = () => {
  return (
    <div className="container py-5 my-5">
      <h2 className="mb-5 text-center fw-bold">Tienda del Gimnasio</h2>
      <div className="row justify-content-center align-items-stretch">
        {productos.map((producto, idx) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
            <div className="card mb-4 shadow-sm w-100" style={{ minHeight: "350px", background: "#fff", borderRadius: "18px", border: "1.5px solid #dee2e6" }}>
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{height: "200px", objectFit: "cover"}} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-center fw-bold">{producto.nombre}</h5>
                  <h6 className="card-subtitle mb-3 text-center text-success fs-4">{producto.precio}</h6>
                  <p className="card-text text-center">{producto.descripcion}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-success w-75 mt-3">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;