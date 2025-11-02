import { useEffect, useState } from "react";

function CategoriaProductos({ categoria, agregarAlCarrito }) {

    // const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch('https://dummyjson.com/products/category/' + categoria, { signal })
    //         .then(response => response.json())
    //         .then(data => setProductos(data))
    //         .catch(err => {
    //             if (err.name === 'AbortError') {
    //                 console.log('Fetch aborted');
    //             } else {
    //                 console.error('Another error occurred:', err);
    //             }
    //         });

    //     return () => controller.abort();
    // }, []);


    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/category/' + categoria);
                const result = await response.json();
                const productos = result.products;
                setData(productos);
                setCargando(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setCargando(false);
            }
        };

        fetchData();
    }, [categoria]);

    function agregarProductoAlCarrito(producto) {
        const nuevoProducto = {
            id: producto.id,
            nombre: producto.title,
            precio: producto.price
        };

        agregarAlCarrito(nuevoProducto);
    }


    if (cargando) return <p>Cargando productos...</p>;

    return (
        <>
            <div class="products-title">
                <h2>
                    {categoria}
                </h2>
            </div>

            <div class="products-container">
                {data.map((producto) => (
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
                ))}
            </div>
        </>
    )
}

export default CategoriaProductos
