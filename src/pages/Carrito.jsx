import "../styles/Carrito.css"

function Carrito({ carrito, vaciarCarrito }) {

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <>
      <main style={{justifyItems: "center"}}>

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