import { Link, useNavigate } from "react-router-dom";
import MySlider from "../MySlider";
import wheels from "../../assets/home/final_logo.png"

 import "../css/home/TopSection.css";
import {
  FaFacebookF,
  
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
 
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
      <img src="images/Ellipse.svg" alt="" className="ellipse1"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse2"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse3"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse4"/>
      <div className="navbar">
        <div>
          <Link to={"/"}>
            <img className="logo" src='images/4wheelLogo.svg' alt="" />
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
                <li onClick={() => handleNavigate("about-us")}>About Us</li>
                <li onClick={() => handleNavigate("cheuffeurdrive")}>Chauffeur Drive</li>
              <li onClick={() => handleNavigate("selfdrive")}>Self Drive</li>
                <li onClick={() => handleNavigate("gallery")}>Gallery</li>
                <li onClick={() => handleNavigate("faq")}>Faq</li>
                <li onClick={() => handleNavigate("contact-us")}>Contact us</li>

              </ul>
            </div>
          </div>
        )}
         <div className="contact">
        {/* <div className="contact_button">
           
        </div> */}
               <FaWhatsapp color="#25d366" size={'2rem'} cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=919885354321')}/>
      </div>
      </div>
      <div className="home_btm">

      <div className="social_links">
        <div className="social_icons">
          <span>
            <FaFacebookF onClick={()=>handleNav('https://www.facebook.com/profile.php?id=100069861290873')}/>
          </span>
          {/* <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span> */}
          <span>
            <FaInstagram onClick={()=>handleNav('https://www.instagram.com/4wheelindia?igsh=N2NmdjN4aTY5M29l')}/>
          </span>
          <span>
            <FaLinkedinIn  onClick={()=>handleNav('https://in.linkedin.com/company/4-wheel-travels')}/>
          </span>
          <span> 
            <FaYoutube   onClick={()=>handleNav('https://www.youtube.com/@4WheelTravels1981')}/>
          </span>
        </div>
      </div>
      <div className="heading_text">
        <p>Experience the joy of travelling on premium wheels</p>
      </div>
      <div className="detailed_desc">
        <p>
        Embark on unforgettable adventures and discover the world in unparalleled luxury and style with our fleet of exceptionally comfortable cars.
        </p>
      </div>
      <MySlider />
      </div>
    </div>
  );
}
