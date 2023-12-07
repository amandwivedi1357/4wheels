
import "../css/RenticgCar.css"
import rentingCar1 from "../../assets/rentingCar1.png"
import FlowReact from "../FlowReact"
import AnimatedNumberCounter from "./AnimatedNumberCounter"
import car_data_1 from "../../assets/car_Data_1.png"
import car_data_2 from "../../assets/car_Data_2.png"
import car_data_3 from "../../assets/car_Data_3.png"
const animate_data = [
  {
    id:1,
    text:'Happy Customers',
    numbers:2345
  },
  {
    id:2,
    text:'Vehicles Fleet',
    numbers:270
  },
  {
    id:3,
    text:'Completed Orders',
    numbers:2345
  },
  {
    id:4,
    text:'Years of Experience',
    numbers:42
  },
]
const car_data = [
  {
    id:1,
    img:car_data_1,
    desc:'Weddings & Special Events'
  },
  {
    id:2,
    img:car_data_2,
    desc:'VIP'
  },
  {
    id:3,
    img:car_data_3,
    desc:'Custom Solutions'
  },
]
const RentingCar = () => {
  return (
    <div className="renting_main_container">
      <p className="head_text">
      A fleet that meets your needs
      </p>
      <p className="desc_text">
      Have a look at our different category of cars
      </p>
      <div className="sports_car">
        <div className="sports_info">
          <p className="head_text">
            Sports Car
          </p>
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
        
        <p className="head_text">
          is Renting a Car worth it?
        </p>
        <p className="desc_text">
        Have a look at our different category of cars
        </p>

        <div className="react_flow">
            <FlowReact/>
        </div>
      </div>

      <div className="customer_offer">
        <div className="offer_text_container">
            <p className="offer_text">
            We offer customers a wide range of commercial cars and luxury cars for any occasion.
            </p>
        </div>

        <div className="animate_numbers">
            {
              animate_data.map((data)=>(
                <div className="data_map" key={data.id}>
                 <p className="num">
                 <AnimatedNumberCounter value={data.numbers} duration={2000} easing="easeInOutQuad"/>
                 </p>
                  <p className="text">{data.text}</p>
                </div>
              ))
            }
        </div>
      </div>

      <div className="steps_container">
        <div className="inner_cont">

        </div>
      </div>

      <div className="Special_Services">
        <p className="head_text">Our Special Services</p>
        <div className="cars_det">
              {
                car_data.map((data)=>(
                  <div key={data.id} className="single_car_detail">
                    <img src={data.img} alt="" />
                    <p>{data.desc}</p>
                  </div>
                  
                ))
              }
        </div>
      </div>
    </div>
  )
}

export default RentingCar
