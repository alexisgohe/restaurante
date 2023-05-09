import React from "react";
import "../css/Cards.css";

export default function Cards() {
  return (
    <section className="card">
      <div className="text_card_header">
        <h3 className="text_encabezado">Buena comida al estilo Jarocho</h3>
        <p className="card_p">
          Bienvenido a Origen Restaurante, donde ofrecemos una excelente comida
          única experiencia con el sabor único de la cocina del coatepecana. Si
          usted están aquí para un almuerzo o cena de negocios, celebrando un
          especial ocasión, o buscando un ambiente romántico para una cita,
          nuestro menú ofrece algo para todos.
        </p>
      </div>
      <div className="card_top">
        <div className="card_recomendacion">
          <div className="card_text">
            <h3 className="text_encabezado_card">Para ti: la fajita quesadilla</h3>
            <p className="card_p">
              Presentamos la quesadilla que tomó por asalto tu página For You.
              La Fajita Quesadilla ahora está disponible exclusivamente para
              recoger o entregar en línea y en la aplicación.
            </p>
            <a className="card_link" href="/">Ordena Ahora</a>
          </div>
          <div className="card_video">
            <video className="video" src="video1.mp4" muted autoPlay loop></video>
          </div>
        </div>
        <div className="card_recomendacion">
          <div className="card_text">
            <h3 className="text_encabezado_card">Un tazón para cada estilo de vida</h3>
            <p className="card_p">
              Ya sea que estés haciendo tu mejor esfuerzo, Keto, Vegan o
              Whole30®, nuestros nuevos Lifestyle Bowls son siempre frescos y
              están llenos de ingredientes reales.
            </p>
            <a className="card_link" href="/">Ordena Ahora</a>
          </div>
          <div className="card_video">
            <video className="video" src="video2.mp4" muted autoPlay loop></video>
          </div>
        </div>
      </div>
    </section>
  );
}
