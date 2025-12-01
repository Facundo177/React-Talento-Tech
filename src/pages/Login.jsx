import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from "../context/AppContext";
import "../styles/Login.css";

export default function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const { setIsAuthenticated, setUsuario } = useAppContext();

  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/tienda');
      }
    } else {
      alert('Completa todos los datos');
    }
  };

  return (
    <section className='login-section'>
      <h2>Inicia sesión para continuar</h2>
      <form onSubmit={manejarEnvio} className='formulario-inicio-sesion'>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
          required
        />

        <div className='login-botones'>
          <button className='login-boton-iniciar-sesion' type="submit">
            Iniciar Sesión
          </button>
          <button className='login-boton-cancelar' type="button"
            onClick={() => navigate('/tienda')}>
            Cancelar
          </button>
        </div>

      </form>
    </section>
  );
}