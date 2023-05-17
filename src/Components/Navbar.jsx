import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import Logo from "/logo.webp";

export default function Navbar() {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        <Link className="nav_link fade-in" to="/restaurante/acerca-de">
          Acerca de
        </Link>
        <Link className="nav_link fade-in" to="/restaurante/menu">
          Menú
        </Link>
      </div>
      <div className="nav_img">
        <Link to="/restaurante/">
          <img
            className="img_logo slide-in-top"
            src={Logo}
            alt="Logo Restaurante"
          />
        </Link>
      </div>
      <div className="nav_rigth">
        <a
          className="nav_link fade-in"
          target="_blank"
          href="https://wa.me/522283175642"
        >
          Reservas
        </a>
        <Link className="nav_link fade-in" to="/restaurante/contacto">
          Contáctenos
        </Link>
      </div>
    </nav>
  );
}
