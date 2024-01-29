import { Link, useNavigate } from "react-router-dom";
import MySlider from "../MySlider";
import wheels from "../../assets/home/final_logo.png"

 import "../css/home/TopSection.css";
import {
  FaFacebookF,
  
  FaInstagram,
  FaWhatsapp,
 
} from "react-icons/fa";
import { useState } from "react";
import RespNav from "../Responsive/RespNav";

export default function TopSection() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const handleNav = (url)=>{
    window.open(url, '_blank');
  }

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  return (
    <div className="main_top_container">
      <div className="navbar">
        <div>
          <Link to={"/"}>
            <img className="logo" src={wheels} alt="" />
          </Link>
        </div>
        {isMobile ? (
          <div className="fixed">
            
          <RespNav />
          </div>
        ) : (
          <div className="nav_options">
            <div className="nav_menus">
              <ul>
              <li onClick={() => handleNavigate("selfdrive")}>Self Drive</li>
                <li onClick={() => handleNavigate("cheuffeurdrive")}>Chauffeur Drive</li>
                <li onClick={() => handleNavigate("about-us")}>About Us</li>
                <li onClick={() => handleNavigate("gallery")}>Gallery</li>
                <li onClick={() => handleNavigate("faq")}>Faq</li>
              </ul>
            </div>
          </div>
        )}
         <div className="contact">
        {/* <div className="contact_button">
           
        </div> */}
        <FaWhatsapp size={'2rem'} cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=919885354321')}/>
      </div>
      </div>
      <div className="home_btm">

      <div className="social_links">
        <div className="social_icons">
          <span>
            <FaFacebookF />
          </span>
          {/* <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span> */}
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className="heading_text">
        <p>Experience the joy of riding on premium wheels</p>
      </div>
      <div className="detailed_desc">
        <p>
          Embark on unforgettable adventures and discover the world in
          unparalleled comfort and style with our fleet of exceptionally
          comfortable cars.
        </p>
      </div>
      <MySlider />
      </div>
    </div>
  );
}
