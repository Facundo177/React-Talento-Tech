import { Link, useParams, useLocation } from "react-router-dom";
import "../styles/DetalleProducto.css";

const ProductoDetalle = () => {

  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="detalle-producto">
        <h2 className="detalle-producto-encabezado">Detalles del Producto ({id})</h2>
        <h3 className="detalle-producto-titulo">{producto.title}</h3>
        <p className="detalle-producto-descripcion"><strong>Descripción: </strong>{producto.description}</p>
        <p className="detalle-producto-precio">Precio: ${producto.price}</p>
        <img className="detalle-producto-imagen" srcSet={producto.images.join(", ")} alt="${producto.title}" />
        <Link to={`/tienda`}><button className="detalle-producto-boton">Volver</button></Link>
      </section>
    </>
  );
}; export default ProductoDetalle;