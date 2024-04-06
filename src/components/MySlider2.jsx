

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Home/Services";
import SelfDrive from "./Home/SelfDrive";
import ElectricCars from "./Home/ElectricCars";
import "./css/home/MySlider2.css"

const MySlider2 = () => {
  
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
    { id:1,component: <Services /> },
    { id:2,component: <SelfDrive /> },  
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

export default MySlider2