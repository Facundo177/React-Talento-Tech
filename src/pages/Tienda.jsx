import "../styles/Tienda.css"
import CategoriaProductos from '../components/CategoriaProductos';

function Tienda() {

  return (
    <>
      <main>
        <section id="productos" class="products">
          <CategoriaProductos categoria={"smartphones"} />
          <CategoriaProductos categoria={"laptops"} />
          <CategoriaProductos categoria={"tablets"} />
        </section>
      </main>
    </>
  )
}

export default Tienda