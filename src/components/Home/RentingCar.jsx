import "../css/home/RenticgCar.css";
// import rentingCar1 from "../../assets/home/rentingCar1.webp";
// import FlowReact from "../FlowReact";
import { FaArrowRightLong } from "react-icons/fa6";
import bann_Car from "../../assets/home/banner_Car-removebg.webp"
import red_mobile from "../../assets/home/red_mobile.png"

import steps_mobile from "../../assets/home/mobile_steps.webp"

import car2 from "../../assets/home/custom_sols.webp"
import car1 from "../../assets/home/newgal_1.webp";
import car3 from "../../assets/home/newgal_3.webp";

import quote from "../../assets/home/quote.svg";
import starry from "../../assets/home/starry_night.webp"
import sport_front from "../../assets/home/sport_front.webp"
import back from "../../assets/home/backview.webp"
import Footer from "../Footer";
import Steps from "./Steps";
import red_car_info from "../../assets/home/car_image.webp"
import MySlider3 from "../Sliders/MySlider3";
import car11 from '../../assets/home/marriage.webp'
import car12 from '../../assets/home/bl_sport.webp'
import car13 from '../../assets/home/front_bl_sedan.webp'

import CustomSliders from "../Sliders/CustomSliders";
import TestSlider from "../Sliders/TestSlider";

const special2 = [
  {
    id:1,
    img:starry
  },
  {
    id:2,
    img:back
  },
  {
    id:3,
    img:sport_front
  }
]
const special = [
  {
    id:1,
    img:'images/royale.png',
    text:"Royale"
  },
  {
    id:2,
    img:'images/pres.png',
    text:"Presindent"
  },
  {
    id:3,
    img:'images/hatch.png',
    text:"Hatchbacks"
  },
  {
    id:4,
    img:'images/lux.png',
    text:"Luxury SUV"
  },
]
const car_data = [
  {
    id: 1,
    
    title:(<>
    <p>Wedding Events</p>
    </>)
  },
  {
    id: 2,
   
    title:'Corporate Travels'
  },
  {
    id: 3,
    
    title:'Hotel Travel Desk'
  },
  {
    id: 4,
   
    title:(<>Official Events</>)
  },
  {
    id: 5,
   
    title:(<>Luxury Events</>)
  },
  {
    id: 6,
    
    title:'Employee Transportation'
  },
  {
    id: 7,
    
    title:'Bus Transportation'
    
  },
  {
    id: 8,
   
    title:'Self Drive Rentals'
  },
]
const second_car_data = [
  {
    id: 1,
    img: car1,
    test:'On a memorable occasion, my family and I had the pleasure of traveling with 4 Wheel Travels. With a group of 25 people, we enjoyed a 10-hour journey in a minibus. Despite minor issues, the staff provided excellent service. Heartfelt thanks to S.M. Jain and the 4 Wheel Travels team for the wonderful experience.',
    user:'Life Insurance Corporation Of India'
  },
  {
    id: 2,
    img: car2,
    test:'The vehicle arrived on time, and the service from the 4 Wheel team was excellent including the driver. The vehicle was in great condition, and the air conditioning worked perfectly despite the hot weather. I plan to become a regular customer and recommend 4 Wheel Travels to others.',
    user:'Afsar Hussain (Naj Soft pvt Ltd)'
  },
  {
    id: 3,
    img: car3,
    test:'A big thank you to Mr. S.M. Jain and the 4 Wheel Travels team for making our family function a grand success. Their exceptional service and round-the-clock assistance were greatly appreciated. Special thanks to Mr. Rambabu and Babu for their dedication.I wish you all the success in future.',
    user:'Yogesh Agarwal (Agarwal Global Steels Limited)'
  },
];
const animate_data = [
  {
    id: 1,
    text: "Happy Customers",
    numbers: "1.2M",
  },
  {
    id: 2,
    text: "Total Transactions",
    numbers: "1L",
  },
  {
    id: 3,
    text: "Kilometers of Service",
    numbers: "12.2M",
  },
  {
    id: 4,
    text: "Years of Experience",
    numbers: "42",
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
  margin:'2rem auto',
  marginBottom:'2rem'
}
const cust_text = {
  width:'90%',
  textAlign:'left',
  color:'rgba(3, 3, 3, 0.90)',
  margin:'auto',
  padding:'0 22px',
  fontSize:'15px',

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
textAlign:'left',margin:'0.5rem 1rem',
padding:'0 22px',
letterSpacing: '0.25px',
marginLeft:'1rem'
}
const RentingCar = () => {
  return (
    <div className="renting_main_container">
      
      <p className="head_text">A fleet that meets your needs</p>
      <p className="desc_text rent_desc">Have a look at our different category of cars</p>
      <div className="sports_car">
     
       
      </div>
      
    
      <div className="red_car_container">
       
       <div>
          <CustomSliders/>
        </div>
        <img src={red_car_info} alt="" className="info_red" />
        <img src={red_mobile} alt="" className="info_mobile_red" />
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
               {data.numbers}
                <span>+</span>
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
        <div className="content">
    <Steps/> {/* Default: Display Steps component */}
    
  </div>
  <img src={steps_mobile} alt="Mobile Image" className="mobile_image"/> {/* Display this image for mobile view */}
      </div>

      <div className="Special_Services">
        <div className="left">
        <div className="special_heading">
      <p className="head_text">Our Special Services</p>
       <p className="desc_text">We work for your comfort</p>
      </div>
      <div className="special_serv_list">
          {
            car_data.map((data,idx)=>(
              <div className="service_list" key={idx}>
                <img src="images/conc.png" alt="" className="conc"/>
                <p className="serv_names">{data.title}</p>
              </div>
            ))
          }
      </div>
      
        </div>
        <div className="right">
          <img src="images/car_service.png" alt="" className="serv_car"/>
        </div>
      
       
        {/* <div className="cars_det_mob">
          <MySlider3 data={car_data}/>
        </div> */}
      </div>
       <div className="btm_container_1">
        <p className="head_text">Gallery</p>
        <p className="desc_text">4 Wheels Gallery </p>

        {/* <div className="second_car_data">
          <div className="cont1">
            <img src={new_car} alt="" />
          </div>
          <div className="cont2">
            <img src={cust} alt="" />
            <img src={car3} alt="" />
          </div>
          <div className="cont3">
            <img src={car4} alt="" />
          </div>
          <div className="cont4">
            <img src={car5} alt="" /><img src={car6} alt="" />
            </div>  
        </div> */}
        <div className="gallery_cards_main">
          <div className="inner_cards">
           
                <>
                <div  className="gal_single_cards">
                  <div className="text_container">
                  <p className="gal_text">Royale 
                  
                 <p style={{marginLeft:'1.5rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                 
</p>
                  </div>
                  <img src='images/royale.png' alt="" className="gal_car_image"/>
                </div>
                
                </>
                <>
                <div  className="gal_single_cards">
                  <div className="text_container">
                  <p className="gal_text">President
                  <p style={{marginLeft:'2rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p>
                  </p>
                   
                  </div>
                  <img src='images/pres.png' alt="" className="gal_car_image" style={{marginTop:'10rem'}}/>
                </div>
                
                </>
                <>
                <div  className="gal_single_cards">
                  <div className="text_container">
                  <p className="gal_text">Hatchbacks
                  <p style={{marginLeft:'3rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                  </p>
                  
                  </div>
                  <img src='images/hatch.png' alt="" className="gal_car_image" style={{marginTop:'9rem'}}/>
                </div>
                
                </>
                <>
                <div  className="gal_single_cards">
                  <div className="text_container">
                  <p className="gal_text">Luxury SUV
                  <p style={{marginLeft:'4rem'}}>
                 <FaArrowRightLong size={30}/>
                  </p> 
                  </p>
                  </div>
                  <img src='images/lux.png' alt="" className="gal_car_image"/>
                </div>
                
                </>
              
          </div>
        </div>
        <div className="second_car_mobile">
          <MySlider3 data = {special2}/>
        </div>
      </div> 
      
      <div className="btm_container_2">
        
        <p className="head_text">Our Clients Say About Us</p>
        <p className="desc_text">We Believe in Quality Service</p>


        <TestSlider/>
        {/* <div className="second_car_data"> */}

          
          {/* <div className="main_test_cont">
            <div className="left_test">
              <img src="images/test1.png" alt="" className="test_img"/>
            </div>
            <div className="right_test">
              <div className="quote_cont">
            <img  src={quote} alt="" className="quote"/>
            <p className="cust_text">On a memorable occasion, my family and I had the pleasure of traveling with 4 Wheel Travels. With a group of 25 people, we enjoyed a 10-hour journey in a minibus. Despite minor issues, the staff provided excellent service. Heartfelt thanks to S.M. Jain and the 4 Wheel Travels team for the wonderful experience.</p>

            <p style={{textAlign:'left',margin:'2rem 1rem 0rem 0rem',padding:'0',display:"flex"}}>
              {animate_data.map((data)=>(
                <svg key={data.id} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Star" clipPath="url(#clip0_5889_3879)">
                <path id="Vector" d="M13.0607 14.9549C12.5525 15.3346 9.29213 12.9274 8.66769 12.9221C8.04325 12.9169 4.74613 15.2687 4.24393 14.8804C3.74172 14.4921 4.92238 10.504 4.73423 9.8811C4.54608 9.25816 1.38929 6.70414 1.58704 6.08444C1.78482 5.46473 5.77491 5.40717 6.28305 5.02743C6.79118 4.64772 8.13733 0.717416 8.76181 0.722661C9.38621 0.727952 10.6715 4.68047 11.1737 5.06875C11.6759 5.45698 15.6647 5.58195 15.8529 6.20489C16.041 6.82783 12.8453 9.32822 12.6475 9.94792C12.4498 10.5676 13.5688 14.5751 13.0607 14.9549Z" fill="#FFC444"/>
                </g>
                <defs>
                <clipPath id="clip0_5889_3879">
                <rect width="15.2494" height="16" fill="white" transform="translate(0.625)"/>
                </clipPath>
                </defs>
                </svg>
              ))}
              </p>
              <p className='cust_name'>Varun Gupta</p>
              </div>

            </div>
          </div> */}
          {/* <div className="cars_det">
            
            {second_car_data.map((data) => (
              
              <div key={data.id} className="single_car_detail2" style={singleCarStyle}>
                {console.log(data)}
                <img style={quoteStyle} src={quote} alt="" />
                <p className="customer_text" style={cust_text}>{data.test}</p>

              <p style={{textAlign:'left',margin:'2rem 1rem 0rem 1rem',padding:'0 22px',display:"flex"}}>
              {animate_data.map((data)=>(
                <svg key={data.id} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Star" clipPath="url(#clip0_5889_3879)">
                <path id="Vector" d="M13.0607 14.9549C12.5525 15.3346 9.29213 12.9274 8.66769 12.9221C8.04325 12.9169 4.74613 15.2687 4.24393 14.8804C3.74172 14.4921 4.92238 10.504 4.73423 9.8811C4.54608 9.25816 1.38929 6.70414 1.58704 6.08444C1.78482 5.46473 5.77491 5.40717 6.28305 5.02743C6.79118 4.64772 8.13733 0.717416 8.76181 0.722661C9.38621 0.727952 10.6715 4.68047 11.1737 5.06875C11.6759 5.45698 15.6647 5.58195 15.8529 6.20489C16.041 6.82783 12.8453 9.32822 12.6475 9.94792C12.4498 10.5676 13.5688 14.5751 13.0607 14.9549Z" fill="#FFC444"/>
                </g>
                <defs>
                <clipPath id="clip0_5889_3879">
                <rect width="15.2494" height="16" fill="white" transform="translate(0.625)"/>
                </clipPath>
                </defs>
                </svg>
              ))}
              </p>
              <p style={cust_name}>{data.user}</p>
              </div>
            ))}
           </div> */}
          {/* <div className="cars_det_mobile"> 
            <Slider {...settings}>
            {second_car_data.map((data) => (
              <div key={data.id} className="single_car_detail2" style={singleCarStyle}>
                <img style={quoteStyle} src={quote} alt="" />
                <p className="customer_text" style={cust_text}>Excellent Service! Car Rent Service!
We have been using 4wheel for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.</p>

              <p style={{textAlign:'left',margin:'2rem 1rem 0rem 1rem',padding:'0 22px',display:"flex"}}>
              {animate_data.map((data)=>(
                <svg key={data.id} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Star" clipPath="url(#clip0_5889_3879)">
                <path id="Vector" d="M13.0607 14.9549C12.5525 15.3346 9.29213 12.9274 8.66769 12.9221C8.04325 12.9169 4.74613 15.2687 4.24393 14.8804C3.74172 14.4921 4.92238 10.504 4.73423 9.8811C4.54608 9.25816 1.38929 6.70414 1.58704 6.08444C1.78482 5.46473 5.77491 5.40717 6.28305 5.02743C6.79118 4.64772 8.13733 0.717416 8.76181 0.722661C9.38621 0.727952 10.6715 4.68047 11.1737 5.06875C11.6759 5.45698 15.6647 5.58195 15.8529 6.20489C16.041 6.82783 12.8453 9.32822 12.6475 9.94792C12.4498 10.5676 13.5688 14.5751 13.0607 14.9549Z" fill="#FFC444"/>
                </g>
                <defs>
                <clipPath id="clip0_5889_3879">
                <rect width="15.2494" height="16" fill="white" transform="translate(0.625)"/>
                </clipPath>
                </defs>
                </svg>
              ))}
              </p>
              <p style={cust_name}>Varun Gupta</p>
              </div>
            ))}
            </Slider>
          </div> */}
        
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
            <button className="bann_btn" onClick={()=>window.open('https://api.whatsapp.com/send?phone=919885354321','_blank')}>
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
