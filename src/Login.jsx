import React from "react";
import {} from "react-bootstrap";
import "./login.scss";

export default function login() {
  return (
    <form className="formulario">
      <h1>Login</h1>
      <div className="contenedor">
        <div className="input-contenedor">
          <i className="fas fa-envelope icon" />
          <input type="text" placeholder="Correo Electronico" />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <input type="submit" defaultValue="Login" className="button" />
        <p>
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </p>
        <p>
          ¿No tienes una cuenta?{" "}
          <a className="link" href="register.html">
            Registrate{" "}
          </a>
        </p>
      </div>
    </form>
  );
}
