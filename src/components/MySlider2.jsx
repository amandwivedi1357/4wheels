

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Home/Services";
import SelfDrive from "./Home/SelfDrive";
import ElectricCars from "./Home/ElectricCars";
import "./css/home/MySlider2.css"

const MySlider2 = () => {
  // const CustomPrevArrow = (props) => (
  //   <button {...props} className="slick-prev">
  //     Previous
  //   </button>
  // );

  // const CustomNextArrow = (props) => (
  //   <button {...props} className="slick-next">
  //     Next
  //   </button>
  //);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    // Add Services component as a slide
    { id:1,component: <Services /> },
    { id:2,component: <SelfDrive /> },
    { id:3,component: <ElectricCars /> },
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