import { useEffect, useState } from "react";
import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate, useParams } from "react-router-dom";
import CheuffeurTopSection from "./TopSection";
import "../css/CheuffeurDrive/fleetDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCars,
  getCarById,
  getFleetById,
} from "../../redux/actions/CheuffeurDrive.action";
import { Image } from "@chakra-ui/react";

const FleetDetail = () => {
  const [localCars, setLocalCars] = useState({ cars: [] });
  const { fleetType, id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.data);
  const { fleets } = useSelector((state) => state.data);

  const [selectedFleet, setSelectedFleet] = useState(null);

  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(getFleetById(id));
  }, [dispatch, id]);

  const handleCheckboxChange = (fleetName, fleetId) => {
    setSelectedFleet({ fleetName, fleetId });
    navigate(`/cheuffeurdrive/${fleetName}/${fleetId}`);
  };

  const handleBookNow = (fleetId, carId) => {
    dispatch(getCarById(id, carId));
    navigate(`/cheuffeurdrive/${fleetType}/${id}/car/${carId}`);
  };

  return (
    <div>
      {localCars.cars && (
        <>
          <CheuffeurTopSection topic={"cheuffeur drive"} subTopic={fleetType} />

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
                          selectedFleet && selectedFleet.fleetId === data._id
                        }
                      />
                    </div>
                    <div className="check_text">
                      <p className="filter_text">{data.fleetType}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="inner_right ">
              <div className="right_cont">
                {localCars.cars.map((data) => (
                  <div key={data._id} className="single_cont">
                    <div className="img_sec">
                      <img src={data.properties.img}  />
                    </div>

                    <div className="specification_sec">
                      {/* Render your specification content here */}
                      <p className="carName">{data.carName}</p>
                      <div className="Single_car_details">
                        <ul className="list_cont">
                          <li>4 Hours/40kms:{data.properties.hours4_40kms}</li>
                          <li>8 Hours/80kms:{data.properties.hours8_80kms}</li>
                          <li>
                            Ext hour beyond 8Hr:
                            {data.properties.extraHourBeyond8hr}
                          </li>
                          <li>
                            Ext hour beyond 8okms:
                            {data.properties.extraHourBeyond80kms}
                          </li>
                        </ul>
                        <ul className="list_cont">
                          <li>Driver Bhatta: {data.properties.driverBhatta}</li>
                          <li>
                            InterCity Minimum kms/Day:
                            {data.properties.InterCityMinimumkmsPerDay}
                          </li>
                          <li>
                            InterCity Minimum kms/km:
                            {data.properties.InterCityMinimumKmsPerkm}
                          </li>
                          <li>
                            Driver Bhatta/Km:{data.properties.driverBhattaPerKm}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="price_sec">
                      <p className="hourly">Hourly pack</p> <br />
                      <p className="hour">{data.properties.hours4_40kms} Rs</p>
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

export default FleetDetail;

{
  /* <div className="menu_cont" key={data.id}>
<img src={data.properties.img} alt={data.type} />
<p className="type_text">{data.carName}</p>
<p  className="explore" style={{textDecoration:'underline'}}>Explore</p>
</div> */
}
