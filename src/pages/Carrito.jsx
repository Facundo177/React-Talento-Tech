import "../styles/Carrito.css"

function Carrito({ carrito, agregarAlCarrito, vaciarCarrito }) {

  const listaProductos = [
    { id: 1, nombre: 'Camiseta', precio: 15.000 },
    { id: 2, nombre: 'Pantalón', precio: 30.000 },
    { id: 3, nombre: 'Zapatos', precio: 50.000 },
  ];

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <>
      <main>



        <ul>
          {listaProductos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre}: ${producto.precio.toFixed(2)}
              <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            </li>
          ))}
        </ul>

        <h2>Carrito de Compras</h2>
        {carrito.length === 0 
        ? (<p>El carrito está vacío</p>) 
        : (
          <>
            {carrito.map((item) => (
              <div >
                {item.nombre} - ${item.precio.toFixed(2)}
              </div>
            ))}

            <div style={{ fontWeight: 'bold' }}>
              Total: ${total.toFixed(3)}
            </div>

            <button
              onClick={vaciarCarrito}
              style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
            >
              Vaciar Carrito
            </button>
          </>
        )}


      </main>
    </>
  )
}

export default Carrito