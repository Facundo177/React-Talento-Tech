import Hero from "../components/Hero"
import Productos from "../components/Productos"
import AcercaDe from "../components/AcercaDe"

import bigImage from "../assets/images/pexels-jakubzerdzicki-32150913-big.jpg"
import smallImage from "../assets/images/pexels-jakubzerdzicki-32150913-very-big.jpg"

import imagen1 from "../assets/images/andrey-matveev-PLHT-9b3WTw-unsplash-small.jpg"
import imagen2 from "../assets/images/andrey-matveev-rn39Ab-nSkg-unsplash-small.jpg"
import imagen3 from "../assets/images/andrey-matveev-ipHBTtGumPg-unsplash-small.jpg"
import imagen4 from "../assets/images/andrey-matveev-O454z-EMz7k-unsplash-small.jpg"
import imagen5 from "../assets/images/andrey-matveev-rmY0zSYsAUc-unsplash-small.jpg"
import imagen6 from "../assets/images/andrey-matveev-jpywGp9McEA-unsplash-small.jpg"
import imagen7 from "../assets/images/andrey-matveev-UcMWaJRNM6U-unsplash-small.jpg"
import imagen8 from "../assets/images/andrey-matveev-SvLpGADs4gA-unsplash-small.jpg"
import imagen9 from "../assets/images/andrey-matveev-uHETeFHexH4-unsplash-small.jpg"
import imagen10 from "../assets/images/andrey-matveev-a6WorCr9CR4-unsplash-small.jpg"
import imagen11 from "../assets/images/andrey-matveev-nfuuFQ41byY-unsplash-small.jpg"
import imagen12 from "../assets/images/andrey-matveev-YFAz5YAMQhk-unsplash-small.jpg"



function Home() {
    return (
        <>
            <main>
                <Hero
                    bigImage={bigImage}
                    smallImage={smallImage}
                />
                <Productos
                    listaProductos={[
                        {
                            id: "1",
                            nombre: "Celulares",
                            imagen: imagen1,
                        },
                        {
                            id: "2",
                            nombre: "Gráficas",
                            imagen: imagen2,
                        },
                        {
                            id: "3",
                            nombre: "Motherboards",
                            imagen: imagen3,
                        },
                        {
                            id: "4",
                            nombre: "Memorias RAM",
                            imagen: imagen4,
                        },
                        {
                            id: "5",
                            nombre: "Procesadores",
                            imagen: imagen5,
                        },
                        {
                            id: "6",
                            nombre: "Fuentes de alimentación",
                            imagen: imagen6,
                        },
                        {
                            id: "7",
                            nombre: "Coolers",
                            imagen: imagen7,
                        },
                        {
                            id: "8",
                            nombre: "Mouse",
                            imagen: imagen8,
                        },
                        {
                            id: "9",
                            nombre: "Teclados",
                            imagen: imagen9,
                        },
                        {
                            id: "10",
                            nombre: "Auriculares",
                            imagen: imagen10,
                        },
                        {
                            id: "11",
                            nombre: "Discos duros",
                            imagen: imagen11,
                        },
                        {
                            id: "12",
                            nombre: "Discos sólidos",
                            imagen: imagen12,
                        }
                    ]}
                />
                <AcercaDe
                    titulo={"Acerca de TechStore"}
                    parrafos={[`En TechStore, nos apasiona la innovación y la tecnología. Desde nuestra creación, hemos
                        dedicado nuestro esfuerzo a ofrecer a nuestros clientes las mejores soluciones en gadgets,
                        dispositivos
                        electrónicos y accesorios de última generación. Nuestra misión es facilitar el acceso a productos
                        tecnológicos de calidad, confiables y a precios competitivos, para que puedas mantenerte siempre a
                        la
                        vanguardia.`,
                        `Contamos con un equipo de expertos en tecnología que te asesorará en cada paso, asegurando que
                        encuentres exactamente lo que necesitas para potenciar tu vida personal y profesional. Nos
                        enorgullece
                        brindar un servicio cercano, transparente y eficiente, porque para nosotros, la satisfacción del
                        cliente
                        es lo más importante.`,
                        `En TechStore, la innovación no se detiene. Continuamos ampliando nuestro catálogo con las
                        últimas novedades del mercado, para que puedas descubrir y adquirir las mejores soluciones
                        tecnológicas
                        en un solo lugar.`,
                        `¡Gracias por confiar en nosotros y formar parte de la familia TechStore!`
                    ]}
                />
            </main>
        </>
    )
} export default Home