import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import "..//css/CheuffeurDrive/CheuffeurTopSection.css"
import logo from "../../assets/home/final_logo.png";
import { Link, useNavigate } from "react-router-dom"
import RespNav from "../Responsive/RespNav";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
// import Breadcrumbs from "../BredCrumbs";
export default function TopSectionGallery() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    setShowDropdown(false);
  };
  const handleNav = (url)=>{
    window.open(url, '_blank');
  }
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
      <FaWhatsapp size={'2rem'} cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=919885354321')}/>

      </div>
        </div>
        <p className="ser_text">Gallery</p>
        {/* <p className="bred"><Breadcrumbs/></p> */}
    </div>
  )
}
