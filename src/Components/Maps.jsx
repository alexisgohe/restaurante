import React from "react";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/Maps.css";

export default function Maps() {
  const markerPosition = [19.5267, -96.92369]; // La posición del marcador
  const mapSettings = {
    scrollWheelZoom: false // Bloquear el desplazamiento del mapa
  };

  return (
    <div className="container_map">
      <MapContainer {...mapSettings}
        center={[19.5267, -96.92369]}
        zoom={17}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition}>
          {/* Puedes agregar contenido adicional dentro del marcador */}
        </Marker>
      </MapContainer>
    </div>
  );
}
