import { LuRefreshCw, LuSettings, LuTimer } from "react-icons/lu";
import red_car from "../../assets/home/red_car.png"
import { FaRetweet } from "react-icons/fa";

export default function Recommend() {
    // const {carName,retweet,imgUrl,rentPrice,percentage} = props.item
  return (
    <div className="recommend_cars_wrapper">
          <div className="recommend_car_card">
            <div className="recommend_car_top">
              <h5>
                <span>
                  <LuRefreshCw fontSize={'1.2rem'}/>
                </span>
                74% Recommended
              </h5>
            </div>
            <div >
              <img className="recommend_car_img" src={red_car} alt="" />
            </div>
            <div className="recommend_car_bottom">
              <h4>Audi RS 5</h4>
              <div className="recommend_car_other">
                <div className="recommend_icons">
                  <p>
                    
                      <FaRetweet fontSize={'1.2rem'}/>
                    
                    130k
                  </p>
                    <p><LuSettings fontSize={'1.2rem'}/></p>
                  <p>
                   
                      <LuTimer fontSize={'1.2rem'}/>
                    
                  </p>
                </div>
                $30/h
              </div>
            </div>
          </div>
        </div>
  )
}
