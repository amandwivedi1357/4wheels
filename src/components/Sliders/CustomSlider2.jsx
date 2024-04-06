/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SpecialServicesSlider({ car_data }) {
    useEffect(() => {
      // Initialize Slick slider on component mount
      const slider = document.querySelector('.cars_det');
      if (slider) {
        new Slider(slider, {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000, // Change slide every 5 seconds (adjust as needed)
          dots: false,
          infinite: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    }, []);
  
    return (
     
        <div className="cars_det">
          {car_data.map((data) => (
            <div key={data.id} className="single_car_detail">
              <img className="grid_img" src={data.img} alt="" />
              <p className="desc_title">{data.title}</p>
            </div>
          ))}
        </div>
      
    );
  }
  
