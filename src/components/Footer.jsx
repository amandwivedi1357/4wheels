
import {
  FaFacebookF,
  
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
 
} from "react-icons/fa";
import "./css/faq/NewFooter.css";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const socials = [
    {
      img:(<FaFacebookF color="#fff"/>),
      link:''
    },
    {
      img:(<FaInstagram color="#fff"/>),
      link:''
    },
    
    {
      img:(<FaYoutube color="#fff"/>),
      link:''
    },
    
    {
      img:(<FaLinkedinIn color="#fff"/>),
      link:''
    },
    
  ]
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(`/${route}`);
  };
  return (
    <div className="footercont">
      {/* <p className="head_text">Let’s Get Started</p> */}
      <div className="footer_flex">
        {/* <div className="flex_cont curs">
          <ul className="unordered_list" style={{ listStyle: "none" }}>
            <li className="list_head">Contact Now : </li>
            <li className="ml">
              <p className="list_head">Address : </p>Corporate office / registered
              office — 4 wheel travels 91/A-2 , sagar cooperative society , road
              no.2 , <br /> banjara hills , hyderabad — 500034
            </li>
            <li className="ml">
              <p className="list_head">Emails</p> Sales@4wheeltravels.com <br />
              Bookings@4wheeltravels.com
            </li>
            <li className="ml">
              <p className="list_head">Contacts</p>  040-44774477 <br />
              +91 9885354321{" "}
            </li>
          </ul>
        </div> */}
        <div className="flex_cont">
          <ul className="unordered_list center" style={{ listStyle: "none" }}>
            <li className="list_head quick">Quick Links</li>
            <img className='underline' src="images/underline.svg" alt="" />
            <li onClick={() => handleClick("/")}>Home</li>
            <li onClick={() => handleClick("about-us")}>About Us</li>
            <li onClick={() => handleClick("cheuffeurdrive")}>
              Chauffeur Drive
            </li>
            <li onClick={() => handleClick("selfdrive")}>Self Drive</li>
            <li onClick={() => handleClick("gallery")}>Gallery</li>
           
          </ul>
        </div>
        <div className="flex_cont">
          <ul className="unordered_list center" style={{ listStyle: "none" }}>
            <li className="list_head ">Support Center</li>
            <img className='underline1' src="images/underline.svg" alt="" />
            <li onClick={() => handleClick("faq")}>FAQ</li>
            <li onClick={() => handleClick("contact-us")}>Contact us</li>
            
          </ul>
        </div>
        <div className="flex_cont">
        <ul className="unordered_list center" style={{ listStyle: "none" }}>
            <li className="list_head ">Join our social media community</li>
            <div className="social_supports">
              {socials.map((item,idx)=>(
                <div className="socials_cont" key={idx} onClick={()=>window.open(item.link,'_blank')}>
                 {item.img}
                </div>
              ))}
            </div>
            
          </ul>
        </div>
        {/* <div className="flex_cont">
   <p className="head">Don’t miss a thing</p>
   
   <div className="desc_cont">
   <p className="subT">Subscribe to our news letter for exclusive deals </p>
   </div>
   <div className="footer_inp">
    <Input w={'15rem'} placeholder="Sign up for our news letter"/> <span><Button color={'rgba(255, 255, 255, 0.71);'} bg={'transparent'}>Join now</Button></span>
   </div>
 </div> */}
      </div>
      <div className="btm_text">
        <p>
          @2023 4wheels. All Rights Reserved . <span> Privacy Policy</span>
        </p>
        <div style={{display:'flex',justifyContent:'center',gap:'1rem',cursor:'pointer'}} onClick={()=>window.open('https://rayformula.com/','_blank')}>
        <p>Website By Ray Formula</p>
        <img src="images/rayformula.svg" alt="" style={{width:'20px'}}/>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
