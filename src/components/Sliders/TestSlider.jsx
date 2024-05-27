

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./css/home/MySlider2.css"
import "./TestSlider.css"
import Services from "../Home/Services";
import SelfDrive from "../Home/SelfDrive";
import Test1 from "../../Testimonials/Test1";
import Test2 from "../../Testimonials/Test2";
import Test3 from "../../Testimonials/Test3";
import { useState } from "react";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    >
      Previous
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    >
      Next
    </button>
  );
};
const TestSlider = () => {
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
  };

  const slides = [
    { id:1,component: <Test1 /> },
    { id:2,component: <Test2 /> },  
    { id:2,component: <Test3 /> },  
  ];
  
  return (
    <div className="car_comps">
    <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
      {slides.map((component) => (
        <div className="" key={component.id}>{component.component}</div>
      ))}
    </Slider>
    {/* <div className="custom-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`custom-dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => sliderRef.slickGoTo(index)}
          >
           
          </button>
        ))}
      </div> */}
  </div>
  );
};

export default TestSlider