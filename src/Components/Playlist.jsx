import React from "react";
import "../css/Playlist.css";

import { BsSpotify, BsApple } from "react-icons/bs";

export default function Playlist() {
  return (
    <div className="container_playlist">
      <div className="playlist_text">
        <h2 className="playlist_encabezado">Origen Music</h2>
        <h2 className="playlist_encabezado">Ritmo para tus oidos</h2>
        <span className="span_playlist">Escucha nuestra playlist</span>
        <div className="link_plataforma">
          <a className="link_playlist" href="#">
            <BsSpotify /> Spotify
          </a>
          <a className="link_playlist" href="#">
            <BsApple /> Apple Music
          </a>
        </div>
      </div>
      <div className="container_img">
        <img
          className="img_playlist"
          src="./celular.png"
          alt="Celular con spotify abierto"
        />
      </div>
    </div>
  );
}
