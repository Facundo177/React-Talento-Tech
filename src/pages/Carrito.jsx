import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

import "../styles/Carrito.css"

function Carrito() {

  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  return (
    <>
      <main style={{ justifyItems: "center" }}>

        <h2>Carrito de Compras</h2>

        <section className="listado-compras">

          {carrito.length === 0
            ? (<p>El carrito está vacío</p>)
            : (
              <>
                {carrito.map((producto) => (
                  <div key={producto.id}>
                    {producto.title} - ${Number(producto.price).toFixed(2)}
                    (Catidad: {producto.cantidad || 1})

                    <Link to={`/productos/${producto.category}/${producto.id}`} state={{ producto }}>
                      <button className="boton-ver-producto">Ver</button>
                    </Link>

                    <button onClick={() => quitarCantidad(producto.id)}>-</button>
                    <button onClick={() => agregarCantidad(producto.id)}>+</button>

                  </div>
                ))}

                <div style={{ fontWeight: 'bold' }}>
                  Total: ${Number(total).toFixed(2)}
                </div>

                <div className="botones-carrito">

                  <button
                    className="boton-vaciar"
                    onClick={vaciarCarrito}>
                    Vaciar Carrito
                  </button>

                  <button
                    className="boton-pagar"
                    onClick={irAPagar}>
                    Pagar
                  </button>

                </div>
              </>
            )}

        </section>

      </main>
    </>
  )
}

export default Carrito