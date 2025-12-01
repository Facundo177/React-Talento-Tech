import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function CategoriaProductos({ categoria }) {

    const {agregarAlCarrito} = useAppContext();

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

    // function agregarProductoAlCarrito(producto) {
    //     const nuevoProducto = {
    //         id: producto.id,
    //         nombre: producto.title,
    //         precio: producto.price,
    //         descp
    //     };

    //     agregarAlCarrito(nuevoProducto);
    // }


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
                            <div className="tags-container">
                                {producto.tags.map((tag) =>
                                    <button className="tag">{tag}</button>
                                )}
                            </div>
                            <p class="precio">Precio: ${producto.price}</p>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <Link to={`/productos/${producto.category}/${producto.id}`} state={{producto}}>
                                <button
                                    type="button"
                                    class="product-btn-detalle">
                                    Detalles
                                </button>
                                </Link>
                                <button
                                    type="button"
                                    class="product-btn-agregar"
                                    id={"product-btn-agregar-$" + producto.id}
                                    onClick={() => agregarAlCarrito(producto)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default CategoriaProductos
