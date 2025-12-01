import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/Pagar.css";

export default function Pagar() {

  const { isAuthenticated, setIsAuthenticated, usuario, setUsuario } = useAppContext();

  const location = useLocation();
  const navigate = useNavigate();

  // Datos del carrito
  const carrito = location.state?.carrito || [];
  // Calculo del total
  const total = carrito.reduce(
    (suma, producto) => suma + Number(producto.price),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    navigate("/tienda");
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
  };

  return (
    <section className="pagar-section">
      <div className="pagar-usuario">
        <h2 className="pagar-usuario-nombre">{usuario.nombre}</h2>
        <p className="pagar-usuario-email">{usuario.email}</p>
        <button className="pagar-usuario-boton" onClick={cerrarSesion}>Cerrar sesión</button>
      </div>

      <div className="pagar-compra">
        <h2>Tu compra:</h2>
        <div className="pagar-lista-productos">

        {carrito.map((producto) => (
          <div key={producto.id}>
            <img srcSet={producto.images.join(", ")} alt={producto.title}/>
            <span>
            <p>{producto.title}</p>
            <strong>${producto.price}</strong>
            </span>
          </div>
        ))}

        </div>

        <h3>Total a pagar: ${total.toFixed(2)}</h3>
      </div>

      <div className="pagar-botones">
        <button className="pagar-boton-confirmar" onClick={comprar}>Confirmar y Pagar</button>
        <button className="pagar-boton-cancelar" onClick={() => navigate("/tienda")}>Cancelar</button>
      </div>
    </section>
  );
}