import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import "../css/About/About.css"
import logo from "../../assets/cheuffeur-menu-cars/logo.png"
import { Link, useNavigate } from "react-router-dom"
export default function TopSectionAbout() {
  const navigate = useNavigate();
  const handleClick = (route)=>{
    navigate(`/${route}`)
  }
  return (
    <div className="main_top_container">
        <div className="navbar">

        <div className="logo">
       <Link to={'/'}> <img src={logo} alt="" /></Link>
      </div>
      <div className="nav_options">
        <div className="nav_menus">
                <ul>
                <li onClick={()=>handleClick('')}>Home</li>
                    <li onClick={()=>handleClick('services')}>Services</li>
                    <li onClick={()=>handleClick('about-us')}>About Us</li>
                    <li onClick={()=>handleClick('gallery')}>Gallery</li>
                </ul>
        </div>
      </div>
      <div className="contact">
        <button className="contact_button">
            Contact us
        </button>
      </div>
        </div>
        <div className="btm_Sec">
              <p className="head_text">Elevating Corporate Travel Experiences</p>
              <p className="desc_text">Established in 1981, 4 Wheel Travels, is one of the largest Car & bus rental companies operating out of Hyderabad.</p>
        </div>

        
    </div>
  )
}
