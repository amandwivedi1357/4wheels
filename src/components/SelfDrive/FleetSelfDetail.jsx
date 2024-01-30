import { useEffect, useState } from "react";
import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate, useParams } from "react-router-dom";
import CheuffeurTopSection from "../CheuffeurDrive/TopSection";
import "../css/CheuffeurDrive/fleetDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCars,
  getCarById,
  getFleetById,
} from "../../redux/actions/CheuffeurDrive.action";
import { Image } from "@chakra-ui/react";
import Loader from "../designs/Loader";
import { getAllSelfCars, getSelfCarByFuelType, getSelfCarById, getSelfFleetById } from "../../redux/actions/SelfDrive.action";
import Footer from "../Footer";

const FleetSelfDetail = () => {
  const [localCars, setLocalCars] = useState({ cars: [] });
  const { fleetType, id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars,loading } = useSelector((state) => state.selfData);
  const { fleets } = useSelector((state) => state.selfData);
  const [selectedFuelType, setSelectedFuelType] = useState("Petrol"); // Default to "Petrol"
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedFleet, setSelectedFleet] = useState(null);

  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);
  const defaultFleetType = fleetType || "";
  useEffect(() => {
    dispatch(getAllSelfCars());
    dispatch(getSelfFleetById(id));
  }, [dispatch, id]);

  const handleCheckboxChange = (fleetName, fleetId) => {
    setSelectedFleet({ fleetName, fleetId });
    navigate(`/selfdrive/${fleetName}/${fleetId}`);
  };
  const handleFuelTypeChange = (fuelType) => {
    setSelectedFuelType(fuelType);
    dispatch(getSelfCarByFuelType(id,fuelType))
  };
  const handleBookNow = (fleetId, carId) => {
    dispatch(getSelfCarById(id, carId));
    navigate(`/selfdrive/${fleetType}/${id}/car/${carId}`);
  };
//   useEffect(() => {
//   // Filter the cars whenever selectedFuelType or localCars changes
//   const filtered = localCars.cars.filter((car) => {
//     const matchesFuelType = car.properties.fuelType === selectedFuelType;
//     const isInStock = car.properties.status === 'In Stock';
//     return matchesFuelType && isInStock;
//   });

//   setFilteredCars(filtered);
// }, [selectedFuelType, localCars.cars]);
  if(loading){
    return <Loader/>
  }
  return (
    <div>
      <CheuffeurTopSection topic={"Self Drive"} subTopic={fleetType} />
      {localCars.cars && (
        <>
          <p className="head_text">{fleetType}</p>
          <div className="desc_self">
          <p className="desc_text">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
          </div>
          <div className="btm_Sec">
            <div className="inner_left">
              <div className="fleet_filter">
                <p className="fleet_text">Type of Cars</p>
                {fleets.map((data) => (
                  <div className="inner_fleetFilter" key={data._id}>
                    <div className="inp_check">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={data.fleetType}
                        onChange={() =>
                          handleCheckboxChange(data.fleetType, data._id)
                        }
                        checked={
                          (selectedFleet && selectedFleet.fleetId === data._id) ||
                          (!selectedFleet && defaultFleetType === data.fleetType)
                        }
                      />
                    </div>
                    <div className="check_text">
                      <p className="filter_text">{data.fleetType}</p>
                    </div>
                  </div>
                ))}
              <p className="fleet_text">Fuel Type</p>
                {["EV", "Petrol", "Diesel"].map((fuelType) => (
                  <div className="inner_fleetFilter" key={fuelType}>
                    <div className="inp_check">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={fuelType}
                        onChange={() => handleFuelTypeChange(fuelType)}
                        checked={selectedFuelType === fuelType}
                      />
                    </div>
                    <div className="check_text">
                      <p className="filter_text">{fuelType}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="inner_right ">
              <div className="right_cont">
                {localCars.cars
                
                .filter((car) => car.properties.status === 'In Stock')
                .map((data) => (
                 
                  <div key={data._id} className="single_cont">
               
                    <div className="img_sec">
                      <img src={data.properties.img}  />
                    </div>

                    <div className="specification_sec">
                      {/* Render your specification content here */}
                      <p className="carName">{data.carName}</p>
                      <div className="Single_car_details">
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>4 Hours/40kms: {data.properties.hourlyPack}</li>
                          <li>8 Hours/80kms: {data.properties.allotedKMs}</li>
                          <li>
                            Ext hour beyond 8Hr: {data.properties.zeroMileage}
                          </li>
                          <li>
                            Ext hour beyond 8okms: {data.properties.perKM}
                          </li>
                        </ul>
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>Driver Bhatta: {data.properties.fupPack}</li>
                          <li>
                            InterCity Minimum kms/Day: {data.properties.trueUnlimited}
                          </li>
                          <li>
                            InterCity Minimum kms/km: {data.properties.securityDeposit}
                          </li>
                          <li>
                            Driver Bhatta/Km:{data.properties.fuelType}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="price_sec">
                      <p className="hourly">Hourly pack</p> <br />
                      <p className="hour">{data.properties.hourlyPack} Rs</p>
                      <button
                        onClick={() => handleBookNow(id, data._id)}
                        className="book_btn"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      |<Footer/>
    </div>
  );
};

export default FleetSelfDetail;

{
  /* <div className="menu_cont" key={data.id}>
<img src={data.properties.img} alt={data.type} />
<p className="type_text">{data.carName}</p>
<p  className="explore" style={{textDecoration:'underline'}}>Explore</p>
</div> */
}
