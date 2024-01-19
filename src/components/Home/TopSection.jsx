import { Link, useNavigate } from "react-router-dom";
import MySlider from "../MySlider";
import logo from "../../assets/home/logo_img.png";

 import "../css/home/TopSection.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import RespNav from "../Responsive/RespNav";

export default function TopSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    setShowDropdown(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  return (
    <div className="main_top_container">
      <div className="navbar">
        <div>
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        {isMobile ? (
          <div className="fixed">
            
          <RespNav setShowDropdown={setShowDropdown} />
          </div>
        ) : (
          <div className="nav_options">
            <div className="nav_menus">
              <ul>
              <li onClick={() => handleNavigate("selfdrive")}>Self Drive</li>
                <li onClick={() => handleNavigate("cheuffeurdrive")}>Chauffeur Drive</li>
               
                <li onClick={() => handleNavigate("about-us")}>About Us</li>
                <li onClick={() => handleNavigate("gallery")}>Gallery</li>
                <li onClick={() => handleNavigate("gallery")}>Faq</li>
              </ul>
            </div>
          </div>
        )}
        <div className="contact">
          <button className="contact_button">Contact us</button>
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
