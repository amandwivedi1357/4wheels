import operations from  "../../assets/about/operations.webp"
import bann_Car from "../../assets/home/banner_Car-removebg.webp"
import "../css/home/RenticgCar.css"
import "../css/About/Bottom.css"
import who from "../../assets/about/who.webp"
import why from "../../assets/about/why.png"
import fleet from "../../assets/about/fleet.webp"
const BottomAboutUs = () => {
  return (
    <div className="About_cont">
      <div className="top">
        <div className="left">
          <img src={who} alt="" />
        </div>
        <div className="right">

        <p className="head_text">Who Are We?</p>
        <p className="desc_text">4 Wheel Travels, otherwise referred to by one & all as 4 wheel, is a Private Limited Firm owned by Mr. S. M. Jain.  The operations are managed by Mr. Ashwin Jain, the CEO of the company, assisted by a team of people who have been with the company for 15 years or more.</p>
        </div>
      </div>
      {/* <div className="who_car">
        <div className="who_info">
          <p className="head_text">Why Choose Us?</p>
          
        </div>
        <div className="who_img">
          <img src={why} alt="sports car" />
        </div>
      </div> */}
      <div className="mid">
        <div className="inner_mid">
          <div className="left">

            
        <p className="head_text">Fleet</p>
        <p className="desc_text">4 Wheel has one of the largest fleets in car rentals in Hyderabad.  With a own fleet of over 270 vehicles in almost 86 varieties (as on 1.11.23), the range of vehicles on offer to the clients is unmatched by probably any other company in Hyderabad or elsewhere.  4 wheel also probably has the most valuable fleet in car & bus rentals in Hyderabad.  Also, goes without saying that 4 wheel is also the undisputed leader in Hyderabad by fleet and value for luxury cars & luxury buses. <br /><br />

4 wheel also has the reputation for owning practically every car sold in the country and available in car rentals and for also being the first to buy a vehicle in car rentals the moment it is launched.
</p>
          </div>
          <div className="right">
            <img src={fleet} alt="" />
          </div>
        </div>
      </div>
      <div className="last_Sec">
        <div className="left_sec">
          <div className="top_head">
            <p className="head_text">Why Choose Us</p>
          </div>
          <div className="bottom_info">
            <ul>
              <li>24x7 operations for seamless service to clients in Hyderabad & elsewhere.</li>
              <li>100% of the own fleet is GPS enabled for enhanced security and tracking.</li>
              {/* <li>Comprehensive website with payment gateway enabled.</li> */}
              <li>All drivers on the rolls of the company for peace of mind.</li>
            </ul>
          </div>
        </div>
        <div className="right_sec">
          <img src={why} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="inner_btm">
        <p className="head_text">Operations</p>
        <p className="desc_text">4 Wheel operations is divided across 5 main verticals</p>

        <div className="conc_info">
          <img src={operations} alt="" />
        </div>
        
        <div className="btm_cont_text">
          <p className="btm_info">
          These are managed by a 24x7 operations centre located at Road no.5, Jubilee hills.  The own fleet is parked at multiple parking yards (both owned & rented) manned by 24x7 security and CCTV cameras.
The admin office & HO is based at Sagar society, road no.2, banjara hills.
          </p>
        </div>
        </div>

        <div className="banner_cont">
        <div className="banner">
          <div className="left">
            <div className="left_cont">

            <p className="bann_text">Still Have <br /> Questions ? </p>
            <p className="bann_text_2">
            Contact us for assistance
            </p>
            </div>
            <button className="bann_btn">
              Contact Us
            </button>
          </div>
          <div className="right">
            <img src={bann_Car} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BottomAboutUs
