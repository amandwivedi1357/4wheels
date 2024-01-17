import "../css/CheuffeurDrive/CheuffeurTopSection.css"

import logo from "../../assets/cheuffeur-menu-cars/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import RespNav from "../Responsive/RespNav";
export default function CheuffeurTopSection({topic,subTopic}) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    setShowDropdown(false);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  window.addEventListener("resize", handleResize);

  return (
    <div className="main_top_container">
        <div className="navbar">

        <div >
       <Link to={'/'}> <img className="logo" src={logo} alt="" /></Link>
      </div>
      {isMobile ? (
          <RespNav setShowDropdown={setShowDropdown} />
        ) : (
          <div className="nav_options">
            <div className="nav_menus">
              <ul>
                <li onClick={() => handleNavigate("")}>Home</li>
                <li
                  onMouseEnter={() => setShowDropdown(true)}
                  onClick={() => setShowDropdown(true)}
                  className="service_nav"
                >
                  Services
                  {showDropdown && (
                    <div className="dropdown">
                      <ul>
                        <li onClick={() => handleNavigate("selfdrive")}>
                          Self Drive
                        </li>
                        <li onClick={() => handleNavigate("cheuffeurdrive")}>
                          Chauffeur Drive
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li onClick={() => handleNavigate("about-us")}>About Us</li>
                <li onClick={() => handleNavigate("gallery")}>Gallery</li>
              </ul>
            </div>
          </div>
        )}
      <div className="contact">
        <button className="contact_button">
            Contact us
        </button>
      </div>
        </div>
        
              <p className="ser_text">{topic}</p>
              <p className="sub_text">{subTopic}</p>
        
    </div>
  )
}
