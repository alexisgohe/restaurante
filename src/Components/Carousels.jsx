import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "../css/Carousel.css";

const slides = [
  {
    url: "img1.webp",
  },
  {
    url: "img2.webp",
  },
  {
    url: "img3.webp",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000); // Cambiar el slide cada 6 segundos

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="slide-container">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="slide-image"
        >
          <div className="slide-content">
            <h1 className="slide-welcome">Sabores auténticos de Coatepec</h1>
            <h2 className="slide-caption">fusionando tradición y modernidad</h2>
          </div>

          <div className="arrow-container arrow-left" onClick={prevSlide}>
            <BsArrowLeft className="arrow" size={30} />
          </div>

          {/* Dots */}
          <div className="dot-container">
            {slides.map((slideIndex, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${currentIndex === index ? "active" : ""}`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>

          <div className="arrow-container arrow-right" onClick={nextSlide}>
            <BsArrowRight className="arrow" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}