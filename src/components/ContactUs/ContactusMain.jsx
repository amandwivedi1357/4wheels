import { Link, useNavigate } from "react-router-dom"
import "./contact.css"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import RespNav from "../Responsive/RespNav";
export default function ContactusMain() {
    
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
    
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const handleNav = (url)=>{
    window.open(url, '_blank');
  }
  window.addEventListener("resize", handleResize);

  return (
    <div className="contact_main">
      <div className="contact_nav">
        <div className="cont_logo">
        <Link to={"/"}>
            <img className="logo" src='images/4wheelLogo.svg' alt="" />
          </Link>
        </div>
        {isMobile ? (
          <div className="fixed">
            
          <RespNav />
          </div>
        ) : (
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
        )}
        <div className="contact">
        {/* <div className="contact_button">
           
        </div> */}
               <FaWhatsapp color="#25d366" size={'2rem'} cursor={'pointer'} onClick={()=>handleNav('https://api.whatsapp.com/send?phone=919885354321')}/>
      </div>
      </div>
      {/* Main Contact us contiane r starts */}
      <div className="main_cont_container">
        <div className="inner_contact">
            <div className="contact_left">
                    <div className="inner_contact_left">
                        <p className="contact_head">
                            Contact Us
                        </p>
                        <p className="contact_desc">Not sure what you need? The team at 4Wheel will be happy to listen to you.</p>

                        <div className="contact_details">
                            <div className="cont_dets" style={{display:'flex',gap:'30px'}}>

                        <img src="images/location.svg" alt="" style={{marginTop:'-35px'}}/>
                        <p className="contact_desc">4 Wheel Travels Pvt Ltd,
8-2-268/S/91/A-2, Sagar Co-operative Society Ltd,
Road No.2, Banjara Hills, Hyderabad, Telangana-500034.</p>
                            </div>
                            <div className="cont_dets" style={{display:'flex',gap:'30px'}}>

                        <img src="images/call.svg" alt="" />
                        <p className="contact_desc">040 - 44774477 |  040 - 44384444 | +91 98853 54321</p>
                            </div>
                            <div className="cont_dets" style={{display:'flex',gap:'30px'}}>

                        <img src="images/mail.svg" alt="" />
                        <p className="contact_desc">Sales@4wheeltravels.com  Bookings@4wheeltravels.com</p>
                            </div>
                        </div>
                        <div className="contact_details1">
                            <div className="cont_dets" >

                        <img src="images/location.svg" alt="" />
                        <p className="contact_desc">4 Wheel Travels Pvt Ltd,
8-2-268/S/91/A-2, Sagar Co-operative Society Ltd,
Road No.2, Banjara Hills, Hyderabad, Telangana-500034.</p>
                            </div>
                            <div className="cont_dets" >

                        <img src="images/call.svg" alt="" />
                        <p className="contact_desc">040 - 44774477 |  040 - 44384444 | +91 98853 54321</p>
                            </div>
                            <div className="cont_dets" >

                        <img src="images/mail.svg" alt="" />
                        <p className="contact_desc">Sales@4wheeltravels.com  Bookings@4wheeltravels.com</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="contact_right">
                <img src="images/contactimage.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
