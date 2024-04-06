/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import TopSectionServe from "../Services/TopSectionServe";
import "./SingleCarBook.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCarById } from "../../redux/actions/CheuffeurDrive.action";
import BookingForm from "./BookingForm";
import Loader from "../designs/Loader";
import Footer from "../Footer";
export default function SingleCarBook({ topic }) {
  const { fleetType, id, carId } = useParams();

  const dispatch = useDispatch();
  // console.log(id);

  const { cars,loading,error } = useSelector((state) => state.data);


  
    // localStorage.setItem('carsData', JSON.stringify(cars));
 
  // useEffect(() => {
  //   const carsDataFromLocalStorage = localStorage.getItem(JSON.parse('carsData'));
  //   if (carsDataFromLocalStorage) {
  //     setcars(carsDataFromLocalStorage);
  //   } else {
  //   dispatch(getCarById(id, carId));
  //   }
  // }, [ dispatch,id, carId]);

  useEffect(() => {
    dispatch(getCarById(id,carId))
  }, [dispatch,id,carId]);
  // console.log(cars);

  
  

  if (loading) {
    return <div><Loader/></div>;
  }
  
  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }
  
  
  return (
    <div>
    {cars && cars.properties && (
      <>
        <TopSectionServe topic={"Cheuffeur Drive"} subTopic={fleetType} />
      <div className="Single_container">
        <div className="head_cont">
          <p className="head_text">{topic}</p>
          <p className="desc_text book_desc">
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
                      {cars.properties.hours4_40kms} ₹
                    </span>
                  </span>
                </button>
              </div>
              <p className="specs">Specifications</p>
              <div className="main_Details">
                <ul className="list_cont">
                  <li className="listItem">
                    <span className="bold_props">4 Hrs/40kms :</span>
                    <span className="normal_props">{cars.properties.hours4_40kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">8 Hrs/80kms :</span>
                    <span className="normal_props">{cars.properties.hours8_80kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Ext Hr beyond 8Hr :</span>
                    <span className="normal_props">{cars.properties.extraHourBeyond80kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Ext Hrs beyond 8okms :</span>
                    <span className="normal_props">{cars.properties.extraHourBeyond8hr}</span>
                  </li>
                </ul>
                <ul className="list_cont">
                  <li className="listItem">
                    <span className="bold_props">InterCity Mini kms/km :</span>
                    <span className="normal_props">{cars.properties.InterCityMinimumKmsPerkm}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">InterCity Mini kms/Day :</span>
                    <span className="normal_props">{cars.properties.InterCityMinimumkmsPerDay}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Driver Bhatta :</span>
                    <span className="normal_props">{cars.properties.driverBhatta}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Driver Bhatta/Km :</span>
                    <span className="normal_props">{cars.properties.driverBhattaPerKm}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* input container */}

        <BookingForm car={cars} service = {'chauffeur drive'} fleetType={fleetType}/>
        </div>
      </div>
      
      </>
    )}
   
      <Footer/>
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
