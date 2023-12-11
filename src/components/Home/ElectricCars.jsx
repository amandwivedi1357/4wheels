import "../css/Services.css"
import black_car from "../../assets/home/cheauffeur-drive.png"
// import { useNavigate } from "react-router-dom"

const  ElectricCars = () => {
  // const navigate = useNavigate()
  // const handleClick = ()=>{
  //   navigate('/cheuffeurdrive')
  // }
  return (
    <div className="services">
      <p className="head_text">
        Services We Offer
      </p>
      <div className="desc">
      <p className="desc_text">
      Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.
      </p>
      </div>

      <div className="chauffeur_drive">
        <div className="left_car">
          <img src={black_car} alt="cheuaffer_drive" />
        </div>
        <div className="right_info">
          <div className="info">
              <p className="head_text">
              Electric Cars
              </p>
              <p className="desc_text">
              Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
              </p>
              
              {/* <div>
                <button onClick={handleClick} className="book_btn">Book Now</button>
              </div> */}
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ElectricCars
