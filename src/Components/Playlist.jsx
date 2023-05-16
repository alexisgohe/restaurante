import React from "react";
import "../css/Playlist.css";

import { BsSpotify } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

export default function Playlist() {
  return (
    <div className="container_playlist">
      <div className="playlist_text">
        <h2 className="playlist_encabezado">Origen Music</h2>
        <h3 className="playlist_encabezado">Ritmo para tus oidos</h3>
        <span className="span_playlist">Escucha nuestra playlist</span>
        <div className="link_plataforma">
          <a className="link_playlist" target="_blank" href="https://open.spotify.com/playlist/06mGAuGQMmvBJt7VmOOrO7?si=oqT5r_rdQg6D3N-h_Ajqtw">
            <BsSpotify  />
            <span className="icon_playlist">Spotify</span>
          </a>
          <a className="link_playlist" target="_blank" href="https://music.amazon.com.mx/user-playlists/a5d17264ca4f47cabf32bb52090e9544m12x?ref=dm_sh_xbYxCPRpTormJ6qIt9zUw96bT">
            <FaAmazon  />
            <span className="icon_playlist">Amazon Music</span>
          </a>
        </div>
      </div>
      <div className="container_img">
        <img
          className="img_playlist"
          src="./celular.webp"
          alt="Celular con spotify abierto"
        />
      </div>
    </div>
  );
}
