/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import TopSectionServe from "../Services/TopSectionServe";
import "./SingleCarBook.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import BookingForm from "./BookingForm";
import { getSelfCarById } from "../../redux/actions/SelfDrive.action";
import Loader from "../designs/Loader";
export default function SingleSelfCarBook({ topic }) {
  const { fleetType, id, carId } = useParams();

  const dispatch = useDispatch();
  console.log(id);

  const { cars,loading,error } = useSelector((state) => state.selfData);

  useEffect(() => {
    dispatch(getSelfCarById(id,carId))
  }, [dispatch,id,carId]);
  console.log(cars);

  
  

  if (loading) {
    return <div><Loader/></div>;
  }
  
  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }
  // console.log(cars)
  
  return (
    <div>
    {cars && cars.properties && (
        
      <>
        <TopSectionServe topic={"Self Drive"} subTopic={fleetType} />
      <div className="Single_container">
        <div className="head_cont">
          <p className="head_text">{topic}</p>
          <p className="desc_text">
            Driving your dreams to reality with an exquisite fleet of versatile
            vehicles for unforgettable journeys.
          </p>
        </div>
        <div className="car_cont">
          <div className="car_infos" style={{ display: "flex" }}>
            <div className="left_img" style={{ flex: "0 0 30%" }}>
              {/* Left Div - 30% Width */}
              <img src={cars.properties.img} alt="" />
            </div>
            <div className="all_details">
              {/* Right Div - 70% Width */}
              <div className="top_cont">
                <p className="carName_text">{cars.carName}</p>
                <button className="price_btn">
                  <span className="btn_text">
                    Hourly Pack:{" "}
                    <span className="price_text">
                      {cars.properties.hourlyPack} ₹
                    </span>
                  </span>
                </button>
              </div>
              <p className="specs">Specifications</p>
              <div className="main_Details">
                <ul className="list_cont">
                  <li className="listItem">
                    <span className="bold_props">Hourly Pack :</span>
                    <span className="normal_props">{cars.properties.hourlyPack}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Alloted KMs :</span>
                    <span className="normal_props">{cars.properties.allotedKMs}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Zero Mileage :</span>
                    <span className="normal_props">{cars.properties.zeroMileage}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">per KM:</span>
                    <span className="normal_props">{cars.properties.perKM}</span>
                  </li>
                </ul>
                <ul className="list_cont">
                  <li className="listItem">
                    <span className="bold_props">FUP Pack(350KM) :</span>
                    <span className="normal_props">{cars.properties.fupPack}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">True Unlimited :</span>
                    <span className="normal_props">{cars.properties.trueUnlimited}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Security Deposit :</span>
                    <span className="normal_props">{cars.properties.securityDeposit}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Fuel Type :</span>
                    <span className="normal_props">{cars.properties.fuelType}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* input container */}
        {console.log(cars)}
        <BookingForm car = {cars} fleetType={fleetType} service={'self drive'}/>
        </div>
      </div>
      
      </>
    )}
    
    </div>
  );
}




// export default function SingleCarBook() {
//   const { fleetType, id, carId } = useParams();
//   const [cars, setcars] = useState([]);
//   const dispatch = useDispatch();
//   console.log(id);

//   const { cars,loading,error } = useSelector((state) => state.data);

//   useEffect(() => {
//      dispatch(getCarById(id, carId));
//   }, [dispatch,id, carId]);
//   console.log(cars)
//   return (
//     <div>
//       {cars && cars.properties && (
//   <>
//     <p>Car Name: {cars.carName}</p>
//     <img src={cars.properties.img} alt="Car" />
//     <p>Hours 4 (40kms): {cars.properties.hours4_40kms}</p>
//     {/* Other property displays */}
//   </>
// )}
//     </div>
//   )
// }
