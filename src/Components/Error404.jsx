import React from "react";
import "../css/Error404.css";

import Button from "./Button";

import { TbChefHat } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";

const Error404 = () => {
  return (
    <div className="container_error">
      <div className="error-404">
        <h5 className="text_404">
          4<span className="text_span_404"><GiFullPizza/></span>4
        </h5>
        <h2 className="h2_404">Error: 404 Página no encontrada</h2>
        <p className="p_404">¡Oops! Parece que hemos tenido un pequeño accidente culinario.</p>
        <Button text="Volvamos a la cocina" link="/restaurante/" />
      </div>
    </div>
  );
};

export default Error404;
