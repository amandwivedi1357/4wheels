
import { GrLocation } from "react-icons/gr";
import "./css/Footer.css"
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (route)=>{
    navigate(`/${route}`)
  }
  return (
    <div className="footer-cont">
      <p className="head_text">Let’s Get Started</p>
    
 <div className="footer_flex">
 <div className="flex_cont">
     <ul className="unordered_list" style={{listStyle:'none'}}>
         <li className="list_head">Contact Now</li>
         <li><span><GrLocation /></span> 203 Fake St. Mountain View,11378 New York</li>
         <li><span><CiMail /></span> rental@example.com</li>
         <li><span><FiPhone /></span> +012-345-6789</li>
     
     </ul>
 </div>
 <div className="flex_cont">
 <ul className="unordered_list center" style={{listStyle:'none'}}>
         <li className="list_head">Quick Links</li>
         <li onClick={()=>handleClick('services')}>Services</li>
             <li onClick={()=>handleClick('about-us')}>About Us</li>
             <li onClick={()=>handleClick('gallery')}>Gallery</li>
     
     </ul>
 </div>
 <div className="flex_cont">
   <p className="head">Don’t miss a thing</p>
   
   <div className="desc_cont">
   <p className="subT">Subscribe to our news letter for exclusive deals </p>
   </div>
   <div className="footer_inp">
    <Input w={'15rem'} placeholder="Sign up for our news letter"/> <span><Button color={'rgba(255, 255, 255, 0.71);'} bg={'transparent'}>Join now</Button></span>
   </div>
 </div>
 </div>
     <div className="btm_text">
        <p>@2023 4wheels. All Rights Reserved . <span>| Privacy Policy</span></p>
      </div>
    </div>

  )
}

export default Footer


