

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./css/home/MySlider2.css"
import Services from "../Home/Services";
import SelfDrive from "../Home/SelfDrive";
import Test1 from "../../Testimonials/Test1";
import Test2 from "../../Testimonials/Test2";
import Test3 from "../../Testimonials/Test3";

const TestSlider = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null, // Hide previous arrow
    nextArrow: null, // Hide next arrow
  };

  const slides = [
    { id:1,component: <Test1 /> },
    { id:2,component: <Test2 /> },  
    { id:2,component: <Test3 /> },  
  ];
  
  return (
    <div className="car_comps">
    <Slider {...settings}>
      {slides.map((component) => (
        <div className="" key={component.id}>{component.component}</div>
      ))}
    </Slider>
  </div>
  );
};

export default TestSlider