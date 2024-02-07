import { GrLocation } from "react-icons/gr";
import "./css/faq/NewFooter.css";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(`/${route}`);
  };
  return (
    <div className="footercont">
      <p className="head_text">Let’s Get Started</p>

      <div className="footer_flex">
        <div className="flex_cont curs">
          <ul className="unordered_list" style={{ listStyle: "none" }}>
            <li className="list_head">Contact Now : </li>
            <li className="ml">
              <p className="list_head">Address : </p>Corporate office / regs
              office — 4 wheel travels 91/A-2 , sagar cooperative society , road
              no.2 , banjara hills , hyderabad — 500034
            </li>
            <li className="ml">
              <p className="list_head">Emails</p> Sales@4wheeltravels.com <br />
              Bookings@4wheeltravels.com
            </li>
            <li className="ml">
              <p className="list_head">Contacts</p> +914044774477 <br />
              +919885354321{" "}
            </li>
          </ul>
        </div>
        <div className="flex_cont">
          <ul className="unordered_list center" style={{ listStyle: "none" }}>
            <li className="list_head">Quick Links</li>
            <li onClick={() => handleClick("selfdrive")}>Self Drive</li>
            <li onClick={() => handleClick("cheuffeurdrive")}>
              Chauffeur Drive
            </li>
            <li onClick={() => handleClick("about-us")}>About Us</li>
            <li onClick={() => handleClick("gallery")}>Gallery</li>
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
      </div>
    </div>
  );
};

export default Footer;
