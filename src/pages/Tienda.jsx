import "../styles/Tienda.css"
import CategoriaProductos from '../components/CategoriaProductos';

function Tienda({agregarAlCarrito}) {

  return (
    <>
      <main>
        <section id="productos" class="products">
          <CategoriaProductos categoria={"smartphones"} agregarAlCarrito={agregarAlCarrito} />
          <CategoriaProductos categoria={"laptops"} agregarAlCarrito={agregarAlCarrito} />
          <CategoriaProductos categoria={"tablets"} agregarAlCarrito={agregarAlCarrito} />
        </section>
      </main>
    </>
  )
}

export default Tienda