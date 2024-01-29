import "../css/home/RenticgCar.css";
import rentingCar1 from "../../assets/home/rentingCar1.png";
import FlowReact from "../FlowReact";
import AnimatedNumberCounter from "./AnimatedNumberCounter";
import bann_Car from "../../assets/home/banner_Car-removebg.png"
import car_data_1 from "../../assets/home/car_Data_1.png";
import car_data_2 from "../../assets/home/car_data_2.png";
import car_data_3 from "../../assets/home/car_data_3.png";
import car1 from "../../assets/home/gal_1.png";
import car2 from "../../assets/home/gal_2.png";
import car3 from "../../assets/home/gal_3.png";
import quote from "../../assets/home/quote.svg";
import FAQSection from "../Faq/FAQSection";
import Footer from "../Footer";
import Steps from "./Steps";
import red_car_info from "../../assets/home/red_car_info.png"
const second_car_data = [
  {
    id: 1,
    img: car1,
  },
  {
    id: 2,
    img: car2,
  },
  {
    id: 3,
    img: car3,
  },
];
const animate_data = [
  {
    id: 1,
    text: "Happy Customers",
    numbers: 2345,
  },
  {
    id: 2,
    text: "Vehicles Fleet",
    numbers: 270,
  },
  {
    id: 3,
    text: "Completed Orders",
    numbers: 2345,
  },
  {
    id: 4,
    text: "Years of Experience",
    numbers: 42,
  },
];
const car_data = [
  {
    id: 1,
    img: car_data_1,
    desc: "Weddings & Special Events",
  },
  {
    id: 2,
    img: car_data_2,
    desc: "VIP",
  },
  {
    id: 3,
    img: car_data_3,
    desc: "Custom Solutions",
  },
];
const singleCarStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  width:'23rem',
  height:'auto',
  paddingBottom:'2rem',
  margin:'auto',
  color:"rgba(3, 3, 3, 0.90)",
  borderRadius: '5px',

  '@media screen and (min-width: 768px) and (max-width: 1025px)':{
    width:'18rem'
  }
}

const quoteStyle = {
  margin:'4rem auto',

}
const cust_text = {
  width:'90%',
  textAlign:'left',
  color:'rgba(3, 3, 3, 0.90)',
  margin:'auto',
  '@media screen and (min-width: 768px) and (max-width: 1023px)':{
    fontSize:'15px'
  }
}
const cust_name = {
  color: 'rgba(3, 3, 3, 0.90)',
fontFamily: 'Cormorant',
fontSize: '24px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '34.5px' ,/* 143.75% */
textAlign:'left',margin:'1rem 1rem',
letterSpacing: '0.25px',
marginLeft:'1rem'
}
const RentingCar = () => {
  return (
    <div className="renting_main_container">
      <p className="head_text">A fleet that meets your needs</p>
      <p className="desc_text rent_desc">Have a look at our different category of cars</p>
      <div className="sports_car">
        <div className="sports_info">
          <p className="head_text">Sports Car</p>
          <p className="desc_text">
            Have a look at our different category of cars
          </p>
        </div>
        <div className="sports_img">
          <img src={rentingCar1} alt="sports car" />
        </div>
      </div>

      {/* React Flow implementation */}
      <div className="red_car_container">
        {/* <p className="head_text">is Renting a Car worth it?</p>
        <p className="desc_text flow">
          Have a look at our different category of cars
        </p>

        <div className="react_flow">
          <Flow2 />
        </div> */}
        <img src={red_car_info} alt="" className="info_red" />
      </div>

      <div className="customer_offer">
        <div className="offer_text_container">
          <p className="offer_text">
            We offer customers a wide range of commercial cars and luxury cars
            for any occasion.
          </p>
        </div>

        <div className="animate_numbers">
          {animate_data.map((data) => (
            <div className="data_map" key={data.id}>
              <p className="num">
                <AnimatedNumberCounter
                  value={data.numbers}
                  duration={2000}
                  easing="easeInOutQuad"
                />
              </p>
              <p className="text">{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="steps_container">
        <p className="head_text">
        Simple steps to get the car
        </p>
        <p className="desc_text">
        How it works
        </p>
        <Steps/>
      </div>

      <div className="Special_Services">
        <p className="head_text spec">Our Special Services</p>
        <div className="cars_det">
        {car_data.map((data) => (
  <div key={data.id} className="single_car_detail">
    <img className="grid_img" src={data.img} alt="" />
    <div className="overlay">
      <p className="image-name">{data.desc}</p>
    </div>
  </div>
    ))}
</div>
      </div>
       <div className="btm_container_1">
        <p className="head_text">Gallery</p>
        <p className="desc_text">4 Wheels Gallery </p>

        <div className="second_car_data">
          <div className="cars_det1">
          {second_car_data.map((data) => (
  <div key={data.id} className="single_car_detail">
    <div className="image-container">
      <img className="grid_img1" src={data.img} alt="" />
      <div className="overlay1"></div>
    </div>
  </div>
))}

          </div>
        </div>
      </div> 
      <div className="btm_container_2">
        <p className="head_text">Our Clients Say About Us</p>
        <p className="desc_text">We Believe in Quality Service</p>

        <div className="second_car_data">
          <div className="cars_det">
            {second_car_data.map((data) => (
              <div key={data.id} className="single_car_detail2" style={singleCarStyle}>
                <img style={quoteStyle} src={quote} alt="" />
                <p className="customer_text" style={cust_text}>Excellent Service! Car Rent Service!
We have been using 4wheel for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.</p>

              <p style={{textAlign:'left',margin:'1rem 1rem'}}>⭐⭐⭐⭐</p>
              <p style={cust_name}>Varun Gupta</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="btm_container_3">
        <p className="head_text">Do you have any question?</p>
        <p style={{paddingBottom:'2rem'}} className="desc_text">We Believe in Quality Service</p>
      </div>
      <FAQSection/> */}

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
      <Footer/>
    </div>
  );
};

export default RentingCar;
