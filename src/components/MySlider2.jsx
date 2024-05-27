

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Home/Services";
import SelfDrive from "./Home/SelfDrive";
import ElectricCars from "./Home/ElectricCars";
import "./css/home/MySlider2.css"
import { useState } from "react";

const MySlider2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    prevArrow: null, // Hide previous arrow
    nextArrow: null, // Hide next arrow
  
  };

  const slides = [
    { id:1,component: <Services /> },
    { id:2,component: <SelfDrive /> },  
  ];
  
  return (
    <div className="car_compss">
    <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
      {slides.map((component) => (
        <div className="" key={component.id}>{component.component}</div>
      ))}
    </Slider>
    <div className="custom-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`custom-dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => sliderRef.slickGoTo(index)}
          >
            {/* Custom dot content */} 
          </button>
        ))}
      </div>
  </div>
  );
};

export default MySlider2