import { Link, useNavigate } from "react-router-dom";
import MySlider from "../MySlider";
import logo from "../../assets/cheuffeur-menu-cars/logo.png"
import "../css/home/TopSection.css"
import { FaFacebookF,FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
export default function TopSection() {
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
        <div className="social_links">
            <div className="social_icons">
                <span><FaFacebookF/></span>
                <span><FaTwitter/></span>
                <span><FaYoutube/></span>
                <span><FaInstagram/></span>
            </div>
        </div>
        <div className="heading_text">
            <p>
            Experience the joy of riding on premium wheels
            </p>
        </div>
        <div className="detailed_desc">
            <p>
            Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.
            </p>
        </div>

        <MySlider/>
    </div>
  )
}
