/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import TopSectionServe from "../Services/TopSectionServe";
import "./SingleCarBook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../../redux/actions/CheuffeurDrive.action";
import Footer from "../Footer";
export default function SingleCarBook({ topic }) {
  const { fleetType, id, carId } = useParams();
  const [localCars, setLocalCars] = useState([]);
  const dispatch = useDispatch();
  console.log(id);

  const { cars,loading,error } = useSelector((state) => state.data);

  useEffect(() => {
    console.log(1);
    dispatch(getCarById(id, carId));
  }, [ dispatch,id, carId]);
  console.log(cars);

  useEffect(() => {
    if (!loading && !error) {
      setLocalCars(cars);
    }
  }, [loading, error, cars]);

  function generateFiveDigitNumber() {
    return Math.floor(10000 + Math.random() * 90000);
  }
  
  // Usage
  const randomFiveDigitNumber = generateFiveDigitNumber();
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }
  
  // Check if cars data is available
  // if (!cars || !cars.length) {
  //   return <div>No car data available.</div>;
  // }
  return (
    <div>
      <TopSectionServe topic={"Cheuffeur Drive"} subTopic={fleetType} />
      {/* Hello--{carId} <br />
      Hello--{fleetType} <br />
      Hello--{id}
       */}
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
              <img src={localCars.properties.img} alt="" />
            </div>
            <div className="all_details">
              {/* Right Div - 70% Width */}
              <div className="top_cont">
                <p className="carName_text">{localCars.carName}</p>
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
                    <span className="bold_props">4 Hours/40kms :</span>
                    <span className="normal_props">{localCars.properties.hours4_40kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">8 Hours/80kms :</span>
                    <span className="normal_props">{localCars.properties.hours8_80kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Ext hour beyond 8Hr :</span>
                    <span className="normal_props">{localCars.properties.extraHourBeyond80kms}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Ext hour beyond 8okms :</span>
                    <span className="normal_props">{localCars.properties.extraHourBeyond8hr}</span>
                  </li>
                </ul>
                <ul className="list_cont">
                  <li className="listItem">
                    <span className="bold_props">InterCity Minimum kms/km :</span>
                    <span className="normal_props">{localCars.properties.InterCityMinimumKmsPerkm}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">InterCity Minimum kms/Day :</span>
                    <span className="normal_props">{localCars.properties.InterCityMinimumkmsPerDay}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Driver Bhatta :</span>
                    <span className="normal_props">{localCars.properties.driverBhatta}</span>
                  </li>
                  <li className="listItem">
                    <span className="bold_props">Driver Bhatta/Km :</span>
                    <span className="normal_props">{localCars.properties.driverBhattaPerKm}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* input container */}

        <form className="input_container">
          <p className="inp_top_text">Book this car</p>
          <div className="outer_inp">
          <div className="input1">
            <div className="input11">
              <label htmlFor="name" >Name <span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper">
              <input  type="text" id="name"/>
              </div>
            </div>
            <div className="input12">
              <label htmlFor="tel">Contact Number <span style={{color:'red'}}>*</span></label>
              <div className="contact_numWrap">
                <p className="box"><span>+91</span></p>
                <input type="tel" id="tel"/>
              </div>
            </div>
            
          </div>
          <div className="input1">
            <div className="input11">
              <label htmlFor="email" >Email Id<span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper">
              <input  type="text" id="email"/>
              </div>
            </div>
            <div className="input12">
              <label htmlFor="tel">City where service is required <span style={{color:'red'}}>*</span></label>
              <div className="contact_numWrap">
                <select  >
                  <option value="">All</option>
                  <option value="">Type 1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
            
          </div>
          <div className="input1">
            <div className="input11">
              <label htmlFor="date" >Start day of travel<span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper">
              <input placeholder=" " type="date" id="start_day"/>
              </div>
            </div>
            <div className="input12">
              <label htmlFor="tel">End day of travel <span style={{color:'red'}}>*</span></label>
              <div className="contact_numWrap">
              <input placeholder=" " type="date" id="end_day"/>
              </div>
            </div>
            
          </div>
          <div className="input1">
            <div className="input11">
              <label htmlFor="date" >Time for reporting on 1st day<span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper2">
              <select>
                <option value="">all</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
              
              <select>
                <option value="">all</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
              </div>
            </div>
            <div className="input12">
              <label htmlFor="tel">Place of Reporting <span style={{color:'red'}}>*</span></label>
              <div className="contact_numWrap">
             <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
             </select>
              </div>
            </div>
            
          </div>

          <div className="input1">
            <div className="input11">
              <label htmlFor="date" >Choice of travel<span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper">
              <select >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              </div>
            </div>
            <div className="input12">
              <label htmlFor="tel">Type of vehicle <span style={{color:'red'}}>*</span></label>
              <div className="contact_numWrap">
              <select >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              </div>
            </div>
            
          </div>

          <div className="input1">
            <div className="input11">
              <label htmlFor="text" >Tentative Point of drop<span style={{color:'red'}}>*</span></label>
              <div className="input_wrapper">
              <input  type="text" id="email"/>
              </div>
            </div>
            <div className="input12">
            <label htmlFor="tel">Contact Number <span style={{color:'red'}}>*</span></label>
              <div className="captcha_numWrap">
                <p className="box2"><span>{randomFiveDigitNumber}</span></p>
                <input type="tel" id="tel"/>
              </div>
            </div>
            
          </div>

          <div className="input1">
            <div className="input11">
          <label htmlFor="text" >Special Instructions <span style={{color:'red'}}>*</span></label>
            <textarea name="" id="" cols="105" rows="10"></textarea>

            </div>
          </div>
          <button className="submit_btn" type="submit">Submit</button>


          <div className="terms">
            <p className="terms_text">Terms And Conditions:</p>
            <p>
              1. Booking will be confirmed subject to availability separately through email <br />
2. Type of vehicle mentioned is only indicative of the category and similar category vehicle shall be provided in case of non availability <br />
3. Service is on a best effort basis <br />
4. Rates indicated for the different cities apply and sending the request for vehicle indicates acceptance to the terms and conditions of hire outlined elsewhere on the website. <br />
5. We shall try and get back asap to you on your online enquiry / booking. However, please do factor a revert back in upto 24 hrs. from the time of placing the request. For immediate requirements, Please call at the operations nos. listed in the contact section. <br />
</p>
          </div>
          </div>
        </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
