import React from "react";
import {
  Navbar,
  Carousels,
  Cards,
  Drink,
  Menu,
  Reservas,
  Playlist,
  Maps,
  Footer,
  Design,
} from "../Components";
import "../css/Landing.css";

export default function Landing() {
  return (
    <div className="page_container">
      <Carousels />
      <Cards />
      <Drink />
      <Menu />
      <Reservas />
      <Playlist />
      <Maps />
    </div>
  );
}
