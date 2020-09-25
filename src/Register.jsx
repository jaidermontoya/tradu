import React from "react";
import {} from "react-bootstrap";
import "./register.scss";

export default function register() {
  return (
    <form className="formulario">
      <h1>Registrate</h1>
      <div className="contenedor">
        <div className="input-contenedor">
          <i className="fas fa-user icon" />
          <input type="text" placeholder="Nombre Completo" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon" />
          <input type="text" placeholder="Correo Electronico" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <input type="submit" defaultValue="Registrate" className="button" />
        <p>
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </p>
        <p>
          ¿Ya tienes una cuenta?
          <a className="link" href="login.jsx">
            Iniciar Sesion
          </a>
        </p>
      </div>
    </form>
  );
}
