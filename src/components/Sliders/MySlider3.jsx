

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./css/home/MySlider2.css"
import "./Myslider3.css"

import { useState,useRef  } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const settings = {
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
    { id:2,component: <Test4 /> },  
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
        <div className="" key={component.id} onClick={()=>navigate('/gallery')}>{component.component}</div>
      ))}
    </Slider>
    <div className="gal_dots">
            {Array.from({ length: 4 }).map((_, idx) => (
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


const Test1 = ()=>{
  return (
   <>
                <div  className="gal_single_cards">
                  <div className="text_container">
                  <p className="gal_text">Royale 
                  
                 <p style={{marginLeft:'1.5rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                 
</p>
                  </div>
                  <img src='images/royale.png' alt="" className="gal_car_image_royale" style={{marginTop:'-2rem'}}/>
                </div>
                
                </>
               
  )
}
const Test2 = ()=>{
  return (
<>
                <div  className="gal_single_cards2">
                  <div className="text_container">
                  <p className="gal_text">President
                  <p style={{marginLeft:'8rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p>
                  </p>
                   
                  </div>
                  <img src='images/pres.png' alt="" className="gal_car_image" style={{marginTop:'3rem'}}/>
                </div>
                
                </>
  )
  
  
}
const Test3 = ()=>{
  return (
<>
                <div  className="gal_single_cards3">
                  <div className="text_container">
                  <p className="gal_text">Hatchbacks
                  <p style={{marginLeft:'8rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                  </p>
                  
                  </div>
                  <img src='images/hatch.png' alt="" className="gal_car_image" style={{marginTop:'2rem'}}/>
                </div>
                
                </>
  )
  
}
const Test4 = ()=>{
  return (
    <>
                <div  className="gal_single_cards4">
                  <div className="text_container">
                  <p className="gal_text">Luxury SUV
                  <p style={{marginLeft:'8rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                  </p>
                  
                  </div>
                  <img src='images/lux.png' alt="" className="gal_car_image" style={{marginTop:'1rem'}}/>
                </div>
                
                </>
    // <>
    // <div  className="gal_single_cards4">
    //   <div className="text_container">
    //   <p className="gal_text " style={{marginTop:'4rem'}}>Luxury SUV
    //   <p style={{marginLeft:'11rem'}}>
    //  <FaArrowRightLong size={30}/>
    //   </p> 
    //   </p>
    //   </div>
    //   <img src='images/lux.png' alt="" className="gal_car_image1"/>
    // </div>
    
    // </>
  )
  
}