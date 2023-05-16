import React from "react";
import "../css/Menu.css";

import Button from "./Button";

export default function Menu() {
  return (
    <div className="container_menu">
      <h2 className="text_encabezado">Estas listo para ordenar</h2>
      <Button text="Conoce Nuestro Menú" page="_blank" link="/restaurante/menu" />
    </div>
  );
}
