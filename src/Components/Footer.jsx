import React from "react";
import "../css/Footer.css";
import Logo from "../data/logo.webp";

import {
  BsSpotify,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="container_footer">
      <div className="container_logo">
        <img className="footer_logo" src={Logo} alt="Origen: Restaurante" />
      </div>
      <div className="more-info">
        <span className="span_more">Más informacion:</span>
        <ul>
          <li>
            <a className="link_footer" href="">
              Contacto
            </a>
          </li>
          <li>
            <a className="link_footer" href="">
              Política de privacidad
            </a>
          </li>
          <li>
            <a className="link_footer" href="">
              Política de cookies
            </a>
          </li>
          <li>
            <a className="link_footer" href="">
              Preguntas frecuentes
            </a>
          </li>
        </ul>
      </div>
      <div className="redes">
        <div>
          <BsInstagram className="icon_redes" />
          <BsFacebook className="icon_redes" />
          <BsTwitter className="icon_redes" />
          <BsTiktok className="icon_redes" />
          <BsSpotify className="icon_redes" />
          <BsApple className="icon_redes" />
        </div>
        <div className="correo_redes">
          <span>origen@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
