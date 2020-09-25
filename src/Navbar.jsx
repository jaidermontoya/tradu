import { Nav, Navbar } from "react-bootstrap";

import React, { Component } from "react";
import "./estilos1.scss";

export default class main extends Component {
  render() {
    return (
      <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Navbar bg="light" expand="lg">
                <Nav className="Titulo" href="/">
                  LS
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/Menu">Señas</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </>
    );
  }
}
