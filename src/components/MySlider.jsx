
import "./css/MySlider.css"
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import car1 from '../assets/home/slider1.webp'
import car2 from '../assets/home/slider1.webp'
import car3 from '../assets/home/slider2.webp'
import car4 from '../assets/home/car4-removebg-preview.webp'
import car5 from '../assets/home/car5-removebg-preview.webp'
import car6 from '../assets/home/car6-removebg-preview.webp'
const MySlider = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className=" ">
      {""}
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className=" ">
      {""}
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  
  
  return (
      <div className="cars">
    <Slider {...settings}>

      <div className="car_images">
        <img src={car1} alt="" />
      </div>
      <div className="car_images">
      <img src={car2} alt="" />
      </div>
      <div className="car_images">
      <img src={car3} alt="" />
      </div>
      <div className="car_images">
      <img src={car4} alt="" />
      </div>
      <div className="car_images">
      <img src={car5} alt="" />
      </div>
      {/* <div className="car_images">
      <img src={car6} alt="" />
      </div> */}
      
    </Slider>
      </div>
  );
};

export default MySlider