import "../css/CheuffeurDrive/CheuffeurTopSection.css"
import logo from "../../assets/cheuffeur-menu-cars/logo.png"
import { Link, useNavigate } from "react-router-dom"
import "../css/CheuffeurDrive/TopSec.css"
import { useEffect, useState } from "react";
export default function TopSectionServe() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async()=>{
    let res = await fetch(`http://localhost:8080/car`)
    let response = await res.json();

    console.log(response[0].cars[0].name)
  }
  useEffect(() => {
    getData()
  }, [data]);
  const handleClick = (route)=>{
    navigate(`/${route}`)
  }
  return (
    <div className="main_top_container">
        <div className="navbar">

        <div >
       <Link to={'/'}> <img className="logo" src={logo} alt="" /></Link>
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
              <p className="head_text">Services</p>
        </div>
    </div>
  )
}
