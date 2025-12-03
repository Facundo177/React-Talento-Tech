import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import "../styles/Pagar.css";

export default function Pagar() {

  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();

  const navigate = useNavigate();
  const tokenActual = localStorage.getItem('authToken');

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/tienda");
  };

  return (
    <section className="pagar-section">
      <div className="pagar-usuario">
        <h2 className="pagar-usuario-nombre">{usuario.nombre}</h2>
        <p className="pagar-usuario-email">{usuario.email}</p>

        <div style={{
          background: '#f0f0f0',
          padding: '8px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '12px',
          wordBreak: 'break-all',
          color: 'black'
        }}>
          <strong>Token:</strong> {tokenActual}
        </div>


        <button className="pagar-usuario-boton" onClick={cerrarSesion}>Cerrar sesión</button>
      </div>

      <div className="pagar-compra">
        <h2>Tu compra:</h2>

        {carrito.length > 0 ? (

          <>
            <div className="pagar-lista-productos">

              {carrito.map((producto) => (
                <div key={producto.id}>
                  <img srcSet={producto.images.join(", ")} alt={producto.title} />
                  <span>
                    <p>{producto.title}</p>
                    <strong>${producto.price}</strong>
                    <p>X{producto.cantidad}</p>
                  </span>
                </div>
              ))}

            </div>

            <h3>Total a pagar: ${total.toFixed(2)}</h3>

          </>

        ) : (
          <p>No hay productos en el carrito</p>
        )}

      </div>

      <div className="pagar-botones">
        <button className="pagar-boton-confirmar" onClick={comprar}>Confirmar y Pagar</button>
        <button className="pagar-boton-cancelar" onClick={() => navigate("/tienda")}>Cancelar</button>
      </div>
    </section>
  );
}