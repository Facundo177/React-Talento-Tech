function Productos({ listaProductos }) {

    return (
        <>
            

            <section id="productos" class="products">

                <div class="products-title">
                    <h2>
                        Revisa nuestros productos destacados
                    </h2>
                </div>

                <div class="products-container">
                    {listaProductos.map(producto =>
                    <>
                        <div key={producto.id} class="product-card" data-aos="zoom-in-up">
                            <img src={producto.imagen} />
                            <h3>{producto.nombre}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta itaque, ratione distinctio sunt totam amet laboriosam numquam impedit, odio dolore minus nemo tempora molestias harum quidem molestiae ipsam blanditiis.</p>
                            <a href="">
                                <button class="product-btn-agregar" type="button">Ver productos</button>
                            </a>
                        </div>
                    </>
                    )}

                </div>

            </section>

        </>
    )
}

export default Productos