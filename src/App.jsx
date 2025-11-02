// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home'
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


AOS.init();
function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <>
      <Navbar cantProductos={carrito.length} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Tienda agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/carrito' element={<Carrito
          carrito={carrito}
          vaciarCarrito={vaciarCarrito} />} />
      </Routes>

      <Footer mostrarSecciones={true} />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>

    </>

  )
}

export default App

