import "../css/Services.css"
import black_car from "../../assets/email/glc2.webp"
import { useNavigate } from "react-router-dom"

const SelfDrive = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/selfdrive')
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
              Self Drive
              </p>
              <p className="desc_text">
              Enhance every single trip to the fullest with the most luxurious car rentals at the most affordable prices.</p>
              <div className="list">
                  <ul className="left_list">
                    <li>Meticulously maintained vehicles</li>
                    <li>Stringent hygiene standards</li>
                    <li>Privacy</li>
                  </ul>
                  <ul className="right_list">
                      <li>Flexibility</li>
                      <li>Safety and Security</li>
                      <li>Affordability</li>
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

export default SelfDrive
