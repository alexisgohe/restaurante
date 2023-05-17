import React from "react";
import "../css/Footer.css";
import Logo from "../data/logo.webp";

import {
  BsSpotify,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
} from "react-icons/bs";

import { FaAmazon } from "react-icons/fa";

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
        <div className="container_redes">
          <a
            className="icon_redes"
            target="_blank"
            href="https://www.instagram.com/"
            aria-label="Enlace a Instagram"
          >
            <BsInstagram />
          </a>
          <a
            className="icon_redes"
            target="_blank"
            href="https://www.facebook.com/"
            aria-label="Enlace a Facebook"
          >
            <BsFacebook />
          </a>
          <a
            className="icon_redes"
            target="_blank"
            href="https://twitter.com/home"
            aria-label="Enlace a Twitter"
          >
            <BsTwitter />
          </a>
          <a className="icon_redes" aria-label="Enlace a Tiktok" target="_blank" href="https://tiktok.com/">
            <BsTiktok />
          </a>
          <a
            className="icon_redes"
            target="_blank"
            aria-label="Enlace a Spotify"
            href="https://open.spotify.com/playlist/06mGAuGQMmvBJt7VmOOrO7?si=oqT5r_rdQg6D3N-h_Ajqtw"
          >
            <BsSpotify />
          </a>
          <a
            className="icon_redes"
            target="_blank"
            aria-label="Enlace a Amazon Music"
            href="https://music.amazon.com.mx/user-playlists/a5d17264ca4f47cabf32bb52090e9544m12x?ref=dm_sh_xbYxCPRpTormJ6qIt9zUw96bT"
          >
            <FaAmazon />
          </a>
        </div>
        <div>
          <a  className="correo_redes" target="_blank" href="mailto:origen@gmail.com">origen@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
