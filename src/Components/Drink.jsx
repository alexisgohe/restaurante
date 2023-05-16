import React from "react";
import "../css/Drink.css";
import ThreeSixty from "react-360-view";

export default function Drink() {
  return (
    <div className="container_drinks">
      <h2 className="encabezado_drink">Escapa de lo ordinario con nuestros cocteles</h2>
      <div className="container_drink">
        <div className="container_text">
          <h3 className="text_encabezado">Artesanía apasionada</h3>
          <p className="card_p">
            ¿Alguna vez te has preguntado a qué sabe la artesanía apasionada?
            Venga y pruebe nuestros cócteles de diseño creativo y experiméntelo
            usted mismo
          </p>
        </div>
        <div className="container_coctel">
          <ThreeSixty
            className="coctel_size"
            amount={17}
            imagePath="coctel"
            fileName="cocktail_360_{index}.png"
            spinReverse
          />
        </div>
        <div className="container_text">
          <h3 className="text_encabezado">La mejor calidad</h3>
          <p className="card_p">
            Los productos locales simplemente saben mejor. Es por eso que
            obtenemos nuestros productos en gran parte de agricultores y
            proveedores de nuestra región
          </p>
        </div>
      </div>
      <div className="container_paragraphs">
        <h4 className="paragraphs_text">Placer sumiller:</h4>
        <h5 className="paragraphs_span">
          El mejor bar del mundo es el de siempre
        </h5>
        <p className="paragraphs_p">
          Nuestro equipo de expertos mixólogos ha creado una selección única de
          bebidas que combina sabores frescos y emocionantes con la técnica y la
          presentación impecables. Además, ofrecemos una variedad de opciones,
          desde clásicos intemporales hasta creaciones modernas y audaces. Si
          eres un amante de los cócteles, no querrás perderte la oportunidad de
          probar nuestros favoritos,
        </p>
      </div>
    </div>
  );
}
