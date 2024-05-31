import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import "../css/About/About.css"
import logo from "../../assets/home/final_logo.png";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import RespNav from "../Responsive/RespNav";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumbs from "../BredCrumbs";
export default function TopSectionAbout() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const handleNav = (url)=>{
    window.open(url, '_blank');
  }
  window.addEventListener("resize", handleResize);

  return (
    <div className="main_top_container2">
      <img src="images/Ellipse.svg" alt="" className="ellipse1"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse2"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse3"/>
      <img src="images/Ellipse.svg" alt="" className="ellipse4"/>
        <div className="navbar">

        <div >
       <Link to={'/'}> <img className="logo"  src='images/4wheelLogo.svg' alt="" /></Link>
      </div>
      {isMobile ? (
          <RespNav />
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
       
              <p className="ser_text">Elevating travel experiences</p>
              <p className="about_text">About us</p>
              {/* <p className="bred"><Breadcrumbs/></p> */}

        
    </div>
  )
}
