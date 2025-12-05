function AcercaDe({ titulo, parrafos }) {
    return (
        <>

            <section id="acerca" class="about">

                <h3 class="about-title">
                    {titulo}
                </h3>

                <div class="about-content">
                    {parrafos.map(parrafo =>
                        <p>{parrafo}</p>
                    )}

                </div>

            </section>

        </>
    )
} export default AcercaDe;