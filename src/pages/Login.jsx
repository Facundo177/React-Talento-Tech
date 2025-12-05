import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import "../styles/Login.css";

export default function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const { iniciarSesion } = useAuthContext();

  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();

    // if (formulario.nombre && formulario.email) {
    //   setIsAuthenticated(true);
    //   setUsuario(formulario);

    //   // Si venía del carrito, redirige a pagar
    //   if (ubicacion.state?.carrito) {
    //     navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
    //   } else {
    //     navigate('/tienda');
    //   }
    // } else {
    //   alert('Completa todos los datos');
    // }

    // Verificar credenciales (admin/1234@admin)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      // Guarda el email ingresado y pasa nombre para el token admin
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin");
      navigate("/dashboard");
    }
    // Lógica para usuarios normales - si NO es admin
    else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {
      // Guarda el email ingresado y pasa nombre para el token user
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/tienda");
      }
    } else {
      alert(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
      );
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

        <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
          <strong>Credenciales de prueba para Dashboard:</strong>
          <br />
          Nombre: admin
          <br />
          Email: 1234@admin
        </p>

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