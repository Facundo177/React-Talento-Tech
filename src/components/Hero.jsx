function Hero({bigImage, smallImage}) {
    return (
        <>

            <section id="hero" class="hero">
                <div class="hero-container">

                    <picture class="hero-picture">

                        <source srcSet={bigImage} media="(max-width: 2000px)" />
                        <img src={smallImage} alt="Hero page" />
                    </picture>

                    <div class="hero-title">
                        <h1>
                            Las mejores ofertas en tecnología
                        </h1>
                        <h2>
                            ¡Aprovechá descuentos de hasta un 70% en productos seleccionados!
                        </h2>
                    </div>

                </div>
            </section>

        </>
    )
} export default Hero;