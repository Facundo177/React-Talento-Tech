import { Link, Route, Routes } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import '../styles/Navbar.css'

function Navbar() {

    const { isAuthenticated, usuario, cerrarSesion } = useAuthContext();
    const { cantidadProductos } = useCartContext();


    return (
        <>
            <header>
                {/* <nav className="navbar-custom">
                    <picture className="nav-logo">
                        <svg className="nav-svg-logo" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512">
                            <path
                                d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </picture>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <a href="#acerca">Acerca de</a>
                                <a href="#footer">Contacto</a>
                                <Link to="/tienda">Tienda</Link>
                            </>
                        } />
                        <Route path='/tienda' element={
                            <>
                                <Link to="/">Home</Link>
                            </>
                        } />
                        <Route path='/carrito' element={
                            <>
                                <Link to="/">Home</Link>
                                <Link to="/tienda">Tienda</Link>
                            </>
                        } />
                        <Route path='/login' element={
                            <>
                                <Link to="/">Home</Link>
                                <Link to="/tienda">Tienda</Link>
                            </>
                        } />
                    </Routes>

                    {isAuthenticated ? (
                        <div >
                            <span className='nav-usuario'>Hola, <strong>{usuario.nombre}</strong></span>
                            <button className='nav-boton-logout' onClick={cerrarSesion}>
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className='nav-boton-login'>
                            Iniciar Sesión
                            </button>
                            </Link>
                    )}

                    <Link to="/carrito" className="nav-shopping-cart">
                        <svg className="nav-svg-shop" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        {cantidadProductos > 0
                            ? <div className="nav-shopping-cart-number" style={{ display: "inline" }}>{cantidadProductos}</div>
                            : <div className="nav-shopping-cart-number" style={{ display: "none" }}></div>}
                    </Link>
                </nav> */}








                <nav class="navbar-custom navbar navbar-expand-lg">
                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-brand me-0" href="#">
                            <picture className="nav-logo">
                                <svg className="nav-svg-logo" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512">
                                    <path
                                        d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                </svg>
                            </picture>

                            <span className='ms-1'>
                                <Link to="/carrito" className="nav-shopping-cart">
                                    <svg className="nav-svg-shop" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path
                                            d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                    </svg>
                                    {cantidadProductos > 0
                                        ? <div className="nav-shopping-cart-number" style={{ display: "inline" }}>{cantidadProductos}</div>
                                        : <div className="nav-shopping-cart-number" style={{ display: "none" }}></div>}
                                </Link>
                            </span>
                        </div>

                        <div class="collapse navbar-collapse ms-0 ms-lg-4" id="navbarTogglerDemo03">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <Routes>
                                    <Route path='/' element={
                                        <>
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#acerca">Acerca de</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#footer">Contacto</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/tienda">Tienda</Link>
                                            </li>
                                        </>
                                    } />
                                    <Route path='/tienda' element={
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                        </>
                                    } />
                                    <Route path='/carrito' element={
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/tienda">Tienda</Link>
                                            </li>
                                        </>
                                    } />
                                    <Route path='/login' element={
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/tienda">Tienda</Link>
                                            </li>
                                        </>
                                    } />
                                </Routes>
                            </ul>

                            <div class="d-flex mb-2 mb-lg-0">
                                {isAuthenticated ? (
                                    <div >
                                        <span className='nav-usuario me-3'>Hola, <strong>{usuario.nombre}</strong></span>
                                        <button className='nav-boton-logout' onClick={cerrarSesion}>
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="/login">
                                        <button className='nav-boton-login'>
                                            Iniciar Sesión
                                        </button>
                                    </Link>
                                )}
                            </div>

                        </div>
                    </div>
                </nav>


            </header>
        </>
    )
} export default Navbar;