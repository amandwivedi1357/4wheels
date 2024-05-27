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
import Loader from "../designs/Loader";
import Footer from "../Footer";
import { Image, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const FleetDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [localCars, setLocalCars] = useState({ cars: [] });
  const { fleetType, id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars,loading } = useSelector((state) => state.data);
  const { fleets } = useSelector((state) => state.data);

  const [selectedFleet, setSelectedFleet] = useState(null);

  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);
  const defaultFleetType = fleetType || "";
  useEffect(() => {
    dispatch(getAllCars());
    dispatch(getFleetById(id));
  }, [dispatch, id]);

  const handleCheckboxChange = (fleetName, fleetId) => {
    setSelectedFleet({ fleetName, fleetId });
    navigate(`/cheuffeurdrive/${fleetName}/${fleetId}`);
    onClose()
  };

  const handleBookNow = (fleetId, carId) => {
    dispatch(getCarById(id, carId));
    navigate(`/cheuffeurdrive/${fleetType}/${id}/car/${carId}`);
  };
  if(loading){
    return <Loader/>
  }
  return (
    <div>
       <CheuffeurTopSection topic={"cheuffeur drive"} subTopic={fleetType} />
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
              </div>
            </div>
            <div className="inner_right ">
            <div className="mobile_filter">
            <div className="filter_icon">
              <p className="fil_text">Filter</p>
                </div>
                <div className="fleet_filter_mobile">
                  <button className="filter_btns1" onClick={onOpen}>{fleetType}</button>
                  
                </div>
                {/* <div className="fleet_filter_mobile">
                  <button className="filter_btns1" onClick={onOpen}>Type Of Fuels</button>
                  
                </div> */}
              </div>
              <div className="right_cont">
                {localCars.cars
                
                .filter((car) => car.properties.status === 'In Stock')
                .map((data) => (
                 <>
                 
                  <div key={data._id} className="single_cont">
                     {/* {console.log(data)} */} 
                    <div className="img_sec">
                      <img src={data.properties.img}  />
                    </div>

                    <div className="specification_sec">
                      {/* Render your specification content here */}
                      <div className="car_name_Sec">

                      <p className="carName">{data.carName}</p>
                      </div>
                      <div className="Single_car_details">
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>4 hrs/40kms: <span style={{fontWeight:'400'}}>{data.properties.hours4_40kms}</span></li>
                          <li>8 hrs/80kms: <span style={{fontWeight:'400'}}>{data.properties.hours8_80kms}</span></li>
                          <li>
                            Ext.hr/beyond 8Hr: <span style={{fontWeight:'400'}}>{data.properties.extraHourBeyond8hr}</span>
                          </li>
                          <li>
                            Ext.hr/beyond 8okms: <span style={{fontWeight:'400'}}>{data.properties.extraHourBeyond80kms}</span>
                          </li>
                        </ul>
                        <ul className="list_cont" style={{listStyle:'none'}}>
                          <li>Driver Allowance: <span style={{fontWeight:'400'}}> {data.properties.driverBhatta}</span></li>
                          <li>
                            InterCity Mini kms/Day: <span style={{fontWeight:'400'}}>{data.properties.InterCityMinimumkmsPerDay}
                          </span></li>
                          <li>
                            Per kilometer: <span style={{fontWeight:'400'}}>{data.properties.InterCityMinimumKmsPerkm}
                          </span></li>
                          <li>
                            Driver Allowance:<span style={{fontWeight:'400'}}>{data.properties.driverBhattaPerKm}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="price_sec_ch">
                      <button
                        onClick={() => handleBookNow(id, data._id)}
                        className="book_btn"
                      >
                        Rent now
                      </button>
                    </div>

                    
                  </div>
                  <div className="Single_Cont_mob"  onClick={() => handleBookNow(id, data._id)}>
                  <div className="img_sec">
                      <img src={data.properties.img}  />
                    </div>
                    <div className="price_section">
                      <p className="carName">{data.carName}</p>
                      <p className="hourly">4 hrs/40kms</p>
                      <p className="pricee">{data.properties.hours4_40kms} Rs</p>
                    </div>
                  </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer/>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filter Options</DrawerHeader>

        <DrawerBody>
          <div className="fleet_filter">
            <p className="fleet_text">Type of Cars</p>
            {fleets.map((data) => (
              <div className="inner_fleetFilter" key={data._id}>
                <div className="inp_check">
                  <input
                    type="radio"
                    className="checkbox"
                    value={data.fleetType}
                    onChange={() => handleCheckboxChange(data.fleetType, data._id)}
                    checked={selectedFleet && selectedFleet.fleetId === data._id}
                  />
                </div>
                <div className="check_text">
                  <p className="filter_text">{data.fleetType}</p>
                </div>
              </div>
            ))}
            
          </div>
        </DrawerBody>

        <DrawerFooter>
         
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
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
