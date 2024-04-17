/* eslint-disable react/prop-types */


import Slider from "react-slick";
import "./Myslider3.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MySlider3 = ({data}) => {
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

      {/* <div className="slider_images">
        <img src={car1} alt="" />
        <div className="image_text">Weddings and Special Events</div>
      </div>
      <div className="slider_images">
      <img src={car2} alt="" />
      <div className="image_text">Exotic Sports</div>
      </div>
      <div className="slider_images">
      <img src={car3} alt="" />
      <div className="image_text">Long Drive</div>
      </div> */}
      {data.map((data)=>(
        <div key={data.id} className="slider_images">
        <img src={data.img} alt="" />
        <div className="image_text">{data.title}</div>
        </div>
      ))}
      {/* <div className="car_images">
      <img src={car6} alt="" />
      </div> */}
      
    </Slider>
      </div>
  );
};

export default MySlider3