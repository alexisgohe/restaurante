import React from "react";
import "../css/Reservas.css";

import Button from "./Button";

import { TbClock2, TbCalendarEvent, TbMapSearch } from "react-icons/tb";

export default function Reservas() {
  return (
    <div id="reservas" className="container_revervar">
      <h2 className="text_encabezado">Información Práctica y Horario</h2>
      <div className="container_reservas">
        <div className="container_horario">
          <TbClock2 className="icon_reserva" />
          <span className="span_reserva">De martes a viernes</span>
          <p className="p_reserva">De 11:00 a 22:00h</p>
          <span className="span_reserva">Sábado y domingos</span>
          <p className="p_reserva">De 14:00 a 24:00h</p>
          <span className="span_reserva">Lunes</span>
          <p className="p_reserva">CERRADO</p>
        </div>
        <div className="container_reserva">
          <TbCalendarEvent className="icon_reserva" />
          <span className="span_reserva">Realiza tu reserva a través de nuestro WhatsApp</span>
          <Button text="Reservar ahora" page="_blank" link="https://wa.me/522283175642" />
          <span className="span_reserva">o por teléfono</span>
          <Button text="22 83 17 56 42"/>
          <p className="p_reserva">(reserva con al menos 48h de antelación):</p>
        </div>
        <div className="container_maps">
          <TbMapSearch className="icon_reserva" />
          <span className="span_reserva">Estamos en:</span>
          <p className="p_reserva">
            Juan de La Luz Enríquez s/n, Zona Centro,
          </p>
          <p className="p_reserva" > Centro, CP 91000
            Xalapa-Enríquez, Ver.</p>
            <p>A un costado del Parque Juarez</p>
        </div>
      </div>
    </div>
  );
}
