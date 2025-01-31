import "../css/Services.css"
import black_car from "../../assets/email/glc.webp"
import { useNavigate } from "react-router-dom"

const Services = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/cheuffeurdrive')
  }
  return (
    <div className="services">
      <p className="head_text mt">
        Services we offer
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
              Chauffeur Drive
              </p>
              <p className="desc_text">

           Where Luxury meets exceptional care, surpassing expectations, creating unforgettable moments.              </p>
              <div className="list">
                  <ul className="left_list">
                    <li>Comfort on every ride</li>
                    <li>No Parking Hassle</li>
                    <li>Cost Effective</li>
                  </ul>
                  <ul className="right_list">
                      <li>Extra Safety</li>
                      <li>Luxury Appearance</li>
                      <li>Limitless fun</li>
                  </ul>
              </div>
              <div className="book_now_btn">
                <button onClick={handleClick} className="book_btn">Book Now</button>
              </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Services
