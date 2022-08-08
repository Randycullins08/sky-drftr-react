import { useState } from "react";
import { flyerImages } from "../sliderData/flyerImages";

export default function FlyerImgSlider({ shows }) {
  const [current, setCurrent] = useState(0);
  const length = shows.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(shows) || shows.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <i className="fas fa-angle-left" onClick={prevSlide}></i>
      <i className="fas fa-angle-right" onClick={nextSlide}></i>
      {flyerImages.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} alt={slide.alt} />}
          </div>
        );
      })}
    </div>
  );
}
