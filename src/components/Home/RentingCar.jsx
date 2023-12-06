
import "../css/RenticgCar.css"
import rentingCar1 from "../../assets/rentingCar1.png"
import FlowReact from "../FlowReact"
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
                  <p className="num">{data.numbers}</p>
                  <p className="text">{data.text}</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default RentingCar
