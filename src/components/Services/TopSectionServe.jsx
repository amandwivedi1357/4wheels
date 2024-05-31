import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import logo from "../../assets/home/4wheelLogo.svg";
import { Link, useNavigate } from "react-router-dom"
 import "../css/CheuffeurDrive/TopSec.css"
import {  useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import ellipse from "../../assets/email/Ellipse.png" 

import Breadcrumbs from "../BredCrumbs";
export default function TopSectionServe({topic,subTopic}) {

  const navigate = useNavigate();

  const handleNav = (url)=>{
    window.open(url, '_blank');
  }
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };
  return (
    <div className="main_top_container2">
      <img src={ellipse} alt="" className="ellipse1"/>
      <img src={ellipse} alt="" className="ellipse2"/>
      <img src={ellipse} alt="" className="ellipse3"/>
      <img src={ellipse} alt="" className="ellipse4"/>
        <div className="navbar">

        <div >
       <Link to={'/'}> <img className="logo" src={logo} alt="" /></Link>
      </div>
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
      <div className="contact">
      <FaWhatsapp size={'2rem'} color="#25d366" cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=919885354321')}/>

      </div>
        </div>
        
              <p className="ser_text">{topic}</p>
        
        <p className="sub_text">{subTopic}</p>
        {/* <p className="bred">
          <Breadcrumbs/>
        </p> */}
    </div>
  )
}
