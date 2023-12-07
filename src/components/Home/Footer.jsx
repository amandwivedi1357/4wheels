
import { GrLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer-cont">
      <p className="head_text">Let’s Get Started</p>
      <div className="footer_flex">
        <div className="flex_cont">
            <ul className="unordered_list" style={{listStyle:'none'}}>
                <li className="list_head">Contact Now</li>
                <li><GrLocation style={{marginRight:'15px'}}/>203 Fake St. Mountain View,11378 New York</li>
                <li><CiMail  style={{marginRight:'15px'}}/>rental@example.com</li>
                <li><FiPhone style={{marginRight:'15px'}}/>+012-345-6789</li>
                
            </ul>
        </div>
        <div className="flex_cont">
        <ul className="unordered_list" style={{listStyle:'none'}}>
                <li className="list_head">Contact Now</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Gallery</li>
                
            </ul>
        </div>
        <div className="flex_cont">
          <p className="head">Don’t miss a thing</p>
          <div className="desc_cont">

          <p className="desc">Subscribe to our news letter for exclusive deals </p>
          </div>
        </div>
        
      </div>
      <div className="btm_text">
        <p>@20234wheels. All Rights Reserved . <span>| Privacy Policy</span></p>
      </div>
    </div>

  )
}

export default Footer
