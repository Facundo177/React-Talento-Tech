import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

import "../styles/Carrito.css"

function Carrito() {

  const {carrito, vaciarCarrito, isAuthenticated} = useAppContext();

  const navigate = useNavigate();

  const total = carrito.reduce((sum, producto) => sum + producto.price, 0);

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
                  <div >
                    {producto.title} - ${producto.price.toFixed(2)}
                    <Link to={`/productos/${producto.category}/${producto.id}`} state={{producto}}>
                    <button className="boton-ver-producto">Ver</button>
                    </Link>
                  </div>
                ))}

                <div style={{ fontWeight: 'bold' }}>
                  Total: ${total.toFixed(2)}
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