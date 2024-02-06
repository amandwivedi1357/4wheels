
import "../css/MySlider.css"
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import car1 from '../../assets/home/marriage.webp'
import car2 from '../../assets/home/bl_sport.webp'
import car3 from '../../assets/home/front_bl_sedan.webp'

const MySlider3 = () => {
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
      <img src={car1} alt="" />
      </div>
      <div className="car_images">
      <img src={car1} alt="" />
      </div>
      {/* <div className="car_images">
      <img src={car6} alt="" />
      </div> */}
      
    </Slider>
      </div>
  );
};

export default MySlider3