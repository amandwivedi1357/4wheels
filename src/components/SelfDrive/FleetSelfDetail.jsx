import { useEffect, useState } from "react";
import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate, useParams } from "react-router-dom";
import CheuffeurTopSection from "../CheuffeurDrive/TopSection";
import "../css/CheuffeurDrive/fleetDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSelfCars,
  getSelfCarById,
  getSelfFleetById,
} from "../../redux/actions/SelfDrive.action";
import { Image } from "@chakra-ui/react";
import Loader from "../designs/Loader";

const FleetSelfDetail = () => {
  const [localCars, setLocalCars] = useState({ cars: [] });
  const { fleetType, id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars, fleets, loading } = useSelector((state) => state.selfData);

  const [selectedFleet, setSelectedFleet] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState("Petrol"); // Default to "Petrol"

  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);

  useEffect(() => {
    dispatch(getAllSelfCars());
    dispatch(getSelfFleetById(id));
  }, [dispatch, id]);

  const handleCheckboxChange = (fleetName, fleetId) => {
    setSelectedFleet({ fleetName, fleetId });
    navigate(`/selfdrive/${fleetName}/${fleetId}`);
  };

  const handleBookNow = (fleetId, carId) => {
    dispatch(getSelfCarById(id, carId));
    navigate(`/selfdrive/${fleetType}/${id}/car/${carId}`);
  };

  const handleFuelTypeChange = (fuelType) => {
    setSelectedFuelType(fuelType);
  };

  const filteredCars = localCars.cars.filter(
    (car) => car.properties.fuelType === selectedFuelType
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <CheuffeurTopSection topic={"Self Drive"} subTopic={fleetType} />
      {localCars.cars && (
        <>
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
                          (!selectedFleet && fleetType === data.fleetType)
                        }
                      />
                    </div>
                    <div className="check_text">
                      <p className="filter_text">{data.fleetType}</p>
                    </div>
                  </div>
                ))}
                <p className="fleet_text">Fuel Type</p>
                {["Electric", "Petrol", "Diesel"].map((fuelType) => (
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
    {filteredCars &&
      filteredCars
        .filter((car) => car.properties.status === 'In Stock')
        .map((data) => (
          <div key={data._id} className="single_cont">
            <div className="img_sec">
              <img src={data.properties.img} alt={data.carName} />
            </div>
            <div className="specification_sec">
              <p className="carName">{data.carName}</p>
              <div className="Single_car_details">
                {/* Render your specification content here */}
                <ul className="list_cont" style={{ listStyle: 'none' }}>
                  <li>4 Hours/40kms: {data.properties.hourlyPack}</li>
                  <li>8 Hours/80kms: {data.properties.allotedKMs}</li>
                  <li>Ext hour beyond 8Hr: {data.properties.zeroMileage}</li>
                  <li>Ext hour beyond 80kms: {data.properties.perKM}</li>
                </ul>
                <ul className="list_cont" style={{ listStyle: 'none' }}>
                  <li>True Unlimited: {data.properties.trueUnlimited}</li>
                  <li>FUP pack: {data.properties.fupPack}</li>
                  <li>Security Deposit: {data.properties.securityDeposit}</li>
                  <li>Fuel Type: {data.properties.fuelType}</li>
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
    </div>
  );
};

export default FleetSelfDetail;
