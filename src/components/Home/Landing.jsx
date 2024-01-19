import {  useNavigate } from "react-router-dom";
import MySlider from "../MySlider";
import logo from "../../assets/home/logo_img.png";
import "../css/home/Landing.css"
import {
    FaFacebookF,
    FaLinkedin,
  } from "react-icons/fa";
  import { useState } from "react";
  import RespNav from "../Responsive/RespNav";
export default function Landing() {
    // const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const redirectLink = (link)=>{
    window.open(link,'_blank')
  }

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
  return (
    
    <div className="landing">
        <div className="main_cont">
            <div className="navigation_bar">
                <div className="logos">
                <img className="logo_img" onClick={()=>handleNavigate('/')} src={logo} alt="" />
                </div>
                {
                    isMobile ? (
                        <div className="fixed">
                          
                        <RespNav/>
                        </div>
                      ) : (
                        <div className="nav_options1">
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
                <div className="contact_btn">
                <button className="contact_button">Contact us</button>
                </div>
            </div>
            
            
        </div>
        <div className="home_btm">
        <div className="social_links">
        <div className="social_icons">
          <span>
            <FaFacebookF onClick={()=>redirectLink('https://www.facebook.com/profile.php?id=100069861290873')}/>
          </span>
          {/* <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span> */}
          <span>
            <FaLinkedin onClick={()=>redirectLink('https://www.linkedin.com/company/4-wheel-travels/about/')}/>
          </span>
        </div>
      </div>

      <div className="heading_text">
        <p>Experience the joy of riding on premium wheels</p>
      </div>
      <div className="detailed_desc1">
        <p>
          Embark on unforgettable adventures and discover the world in
          unparalleled comfort and style with our fleet of exceptionally
          comfortable cars.
        </p>
      </div>
      
            <MySlider />
            </div>
            
           
    </div>
  )
}
