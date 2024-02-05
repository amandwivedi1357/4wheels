import { useEffect, useState } from "react";
import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate, useParams } from "react-router-dom";
import CheuffeurTopSection from "../CheuffeurDrive/TopSection";
import "../css/CheuffeurDrive/fleetDetail.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../designs/Loader";
import { getAllSelfCars, getSelfCarById, getSelfFleetById } from "../../redux/actions/SelfDrive.action";
import Footer from "../Footer";
import NocarModal from "./NocarModal";

const FleetSelfDetail = () => {
  const [localCars, setLocalCars] = useState({ cars: [] });
  const { fleetType, id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars,loading } = useSelector((state) => state.selfData);
  const { fleets } = useSelector((state) => state.selfData);
  const [selectedFuelType, setSelectedFuelType] = useState(""); // Default to "Petrol"

  const [selectedFleet, setSelectedFleet] = useState(null);
  const [isNoCarModalOpen, setIsNoCarModalOpen] = useState(false);
  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);
  console.log(cars)
  const defaultFleetType = fleetType || "";
  useEffect(() => {
    dispatch(getAllSelfCars());
    dispatch(getSelfFleetById(id));
  }, [dispatch, id]);
  
  const handleCheckboxChange = (fleetName, fleetId) => {
    setSelectedFleet({ fleetName, fleetId });
    navigate(`/selfdrive/${fleetName}/${fleetId}`);
    setSelectedFuelType("");
  };
  
  const handleBookNow = (fleetId, carId) => {
    dispatch(getSelfCarById(id, carId));
    navigate(`/selfdrive/${fleetType}/${id}/car/${carId}`);
  };

  const handleFuelTypeChange = async(fuelType)=>{
    const fleetId = id;
    setSelectedFuelType(fuelType);
    navigate({
      pathname: `/selfdrive/${fleetType}/${id}`,
      search: `?fuelType=${fuelType}`,
    });
    try {
      const res = await fetch(`https://stormy-fish-houndstooth.cyclic.app/api/v3/self/fleet/${fleetId}?fuelType=${fuelType}`);
      const data = await res.json();
      console.log(data);
      setLocalCars({ cars: data });
      if (data.filter((car) => car.properties.status === 'In Stock').length === 0) {
        setIsNoCarModalOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const closeNoCarModal = () => {
    setIsNoCarModalOpen(false);
  };
  if(loading){
    return <Loader/>
  }
  return (
    <div>
      <CheuffeurTopSection topic={"Self Drive"} subTopic={fleetType} />
      {localCars?.cars && (
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
                        type="radio"
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
                {["EV", "PETROL", "DIESEL"].map((fuelType) => (
                  <div className="inner_fleetFilter" key={fuelType}>
                    <div className="inp_check">
                      <input
                        type="radio"
                        className="checkbox"
                        value={fuelType.toUpperCase()}
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
                      <p className="carName_self">{data.carName}</p>
                      <div className="Single_car_details">
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>Hourly Pack:  <span style={{fontWeight:'400'}}>{data.properties.hourlyPack}</span></li>
                          <li>Alloted KMs: <span style={{fontWeight:'400'}}> {data.properties.allotedKMs}</span></li>
                          <li>
                          Zero Mileage:  <span style={{fontWeight:'400'}}>{data.properties.zeroMileage}</span>
                          </li>
                          <li>
                          Per Kilometer:  <span style={{fontWeight:'400'}}>{data.properties.perKM}</span>
                          </li>
                        </ul>
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>Fup Pack:  <span style={{fontWeight:'400'}}>{data.properties.fupPack}</span></li>
                          <li>
                          True Unlimited:  <span style={{fontWeight:'400'}}>{data.properties.trueUnlimited}</span>
                          </li>
                          <li>
                          Security Deposit:  <span style={{fontWeight:'400'}}>{data.properties.securityDeposit}</span>
                          </li>
                          <li>
                          Fuel Type: <span style={{fontWeight:'400'}}>{data.properties.fuelType}</span>
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
                       Rent now
                      </button>
                    </div>
                  </div>
                ))}
                {/* Conditionally render a message if no cars are available */}
                {isNoCarModalOpen && (
            <NocarModal onClose={closeNoCarModal} fuelType={selectedFuelType} fleet={fleetType}/>
          )}
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
