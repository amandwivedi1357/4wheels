
import "./css/MySlider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from '../assets/car1-removebg.png'
import car2 from '../assets/car2-removebg-preview.png'
import car3 from '../assets/car3-removebg-preview.png'
import car4 from '../assets/car4-removebg-preview.png'
import car5 from '../assets/car5-removebg-preview.png'
import car6 from '../assets/car6-removebg-preview.png'
const MySlider = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-prev">
      Previous
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-next">
      Next
    </button>
  );
  const settings = {
    dots: true,
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
      <div className="car_images">
      <img src={car6} alt="" />
      </div>
      
    </Slider>
      </div>
  );
};

export default MySlider