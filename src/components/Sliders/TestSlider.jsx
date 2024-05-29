

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
import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const slides = [
    { id:1,component: <Test1 /> },
    { id:2,component: <Test2 /> },  
    { id:2,component: <Test3 /> },  
  ];
  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="car_comps">
    <Slider {...settings} ref={sliderRef}>
      {slides.map((component) => (
        <div className="" key={component.id}>{component.component}</div>
      ))}
    </Slider>
    <div className="gal_dots">
            {Array.from({ length: 3 }).map((_, idx) => (
                <div
                    key={idx}
                    className={idx === activeIndex ? 'active' : ''}
                    onClick={() => handleDotClick(idx)}

                     // Example onClick to change active dot
                ></div>
            ))}
        </div>
  </div>
  );
};

export default TestSlider