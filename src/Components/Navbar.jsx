import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
import Logo from "/logo.png";

export default function Navbar() {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        <Link className="nav_link" to="/acerca-de">Acerca de</Link>
        <Link className="nav_link" to="/menu">Menú</Link>
      </div>
      <div className="nav_img">
        <img className="img_logo" src={Logo} alt="Logo Restaurante" />
      </div>
      <div className="nav_rigth">
        <Link className="nav_link" to="/reservas">Reservas</Link>
        <Link className="nav_link" to="/contacto">Contáctenos</Link>
      </div>
    </nav>
  );
}
