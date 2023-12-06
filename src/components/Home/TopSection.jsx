import MySlider from "../MySlider";
import "../css/TopSection.css"
import { FaFacebookF,FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
export default function TopSection() {
  return (
    <div className="main_top_container">
        <div className="navbar">

      <div className="logo">logo</div>
      <div className="nav_options">
        <div className="nav_menus">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Gallery</li>
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
