/* eslint-disable react/prop-types */
import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import logo from "../../assets/home/final_logo.png";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import RespNav from "../Responsive/RespNav";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumbs from "../BredCrumbs";
export default function CheuffeurTopSection({topic,subTopic}) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  window.addEventListener("resize", handleResize);
  const handleNav = (url)=>{
    window.open(url, '_blank');
  }
  return (
    <div className="main_top_container">
        <div className="navbar">

        <div >
       <Link to={'/'}> <img className="logo" src={logo} alt="" /></Link>
      </div>
      {isMobile ? (
          <RespNav />
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
      <FaWhatsapp size={'2rem'} cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=917440501499')}/>

      </div>
        </div>
        
              <p className="ser_text">{topic}</p>
              <p className="sub_text">{subTopic}</p>
              <p className="bred"><Breadcrumbs/></p>
    </div>
  )
}
