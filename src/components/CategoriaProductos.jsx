function CategoriaProductos({ categoria }) {

    let productos = [];
    cargarProductos();

    async function cargarProductos() {
        try {
            const response = await fetch('https://dummyjson.com/products/category/' + categoria);
            const data = await response.json();

            productos = data.products;

        } catch (error) {
            console.error("Error al obtener productos: ", error);
        }
    }

    function agregarProductoAlCarrito(producto) {
        print(producto);
        
        // let carrito = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
        // const indiceProductoExistente = carrito.findIndex(item => item.id === producto.id);
        // if (indiceProductoExistente !== -1) {
        //     carrito[indiceProductoExistente].cantidad++;
        // } else {
        //     carrito.push({
        //         id: producto.id,
        //         nombre: producto.title,
        //         precio: producto.price,
        //         cantidad: 1
        //     });
        // }

        // localStorage.setItem("carritoDeCompras", JSON.stringify(carrito));

        // actualizarNumeroCarrito();
    }

    return (
        <>
            <div class="products-title">
                <h2>
                    {categoria}
                </h2>
            </div>

            <div class="products-container">
                {productos.map(producto =>
                    <>
                        <div class="product-card" data-aos="zoom-in-up">
                            <img srcSet={producto.images.join(", ")} alt="${producto.title}" />
                            <h3>{producto.title}</h3>
                            <p>{producto.description}</p>
                            <p class="precio">Precio: ${producto.price}</p>
                            <button
                                type="button"
                                class="product-btn-agregar"
                                id={"product-btn-agregar-$" + producto.id}
                                onClick={() => agregarProductoAlCarrito(producto)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CategoriaProductos
