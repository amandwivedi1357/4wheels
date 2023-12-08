import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import "..//css/CheuffeurDrive/CheuffeurTopSection.css"
import logo from "../../assets/cheuffeur-menu-cars/logo.png"
import { Link } from "react-router-dom"
export default function CheuffeurTopSection() {
  return (
    <div className="main_top_container">
        <div className="navbar">

        <div className="logo">
       <Link to={'/'}> <img src={logo} alt="" /></Link>
      </div>
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
        <div className="btm_Sec">
              <p className="head_text">Chauffeur Drive</p>
        </div>
    </div>
  )
}
