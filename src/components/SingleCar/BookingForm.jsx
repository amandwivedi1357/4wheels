/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addBooking } from "../../redux/actions/Booking.action";
import email from "../../assets/email/template.png"
import { useNavigate } from "react-router-dom";
import OTPEntryModal from "./OtpModal";
import axios from "axios";


function generateFiveDigitNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}
const randomFiveDigitNumber = generateFiveDigitNumber();
export default function BookingForm({car,service,fleetType}) {
  // console.log(service)
  const resetForm = {
    name: "",
    
    carName:car.carName,
    fleetType:fleetType,
    // car:cars,
    contactNo: "",
    status:"Pending",
    emailId: "",
    serviceCity: "",
    startDate: "",
    endDate: "",
    reportingTimeHrs: "",
    reportingTime24Hrs: "",
    placeOfReporting: "",
    choiceOfTravel: "",
    typeOfVehicle: service,
    tentativePointOfDrop: "",
    specialInstruction: "",
  };
  const dispatch = useDispatch();
  const toast = useToast();
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    carName:car.carName,
    // car:car,
   
    status:"Pending",
    contactNo: "",
    fleetType:fleetType,
    emailId: "",
    serviceCity: "",
    startDate: "",
    endDate: "",
    reportingTimeHrs: "",
    reportingTime24Hrs: "",
    placeOfReporting: "",
    choiceOfTravel: "Local",
    typeOfVehicle: service,
    tentativePointOfDrop: "",
    specialInstruction: "",
  });

  

  const today = new Date().toISOString().split("T")[0];
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = e.target.type === 'date' ? value.split('T')[0] : value;    console.log(`Updating ${id} with value: ${value}`);
    setFormData({
      ...formData,
      [id]: formattedValue,
    });
  };

  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Assuming formData contains the phoneNumber
    const phoneNumber = formData.contactNo;
  
    try {
      const response = await fetch('https://stormy-fish-houndstooth.cyclic.app/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });
  
      if (response.ok) {
        setIsOTPModalOpen(true);
        
      } else {
        
        console.error('Failed to send OTP:', response.statusText);
       
      }
    } catch (error) {
      
      console.error('Error sending OTP:', error.message);
      
    }
  };
  
  const handleOTPSubmit = (otp) => {
    setIsOTPModalOpen(false); 
    // console.log("Submitted OTP:", otp);
    
  };
  return (
    <div>
    <form className="input_container" onSubmit={handleSubmit}>
      <p className="inp_top_text">Book this car</p>
      <div className="outer_inp">
        <div className="input1">
          <div className="input11">
            <label htmlFor="name">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                id="name"
                required
              />
            </div>
          </div>
          <div className="input12">
            <label htmlFor="tel">
              Contact Number <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap">
              <p className="box">
                <span>+91</span>
              </p>
              <input
                value={formData.contactNo}
                onChange={handleInputChange}
                type="tel"
                id="contactNo"
                required
              />
            </div>
          </div>
        </div>
        <div className="input1">
          <div className="input11">
            <label htmlFor="email">
              Email Id<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                value={formData.emailId}
                onChange={handleInputChange}
                type="email"
                id="emailId"
                required
              />
            </div>
          </div>
          <div className="input12">
            <label htmlFor="service_city">
              City where service is <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap">
              <input
              type="text"
                id="serviceCity"
                required
                value={formData.serviceCity}
                onChange={handleInputChange}
              />
               
              
            </div>
          </div>
        </div>
        <div className="input1">
          <div className="input11">
            <label htmlFor="start_day">
              Start day of travel<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                placeholder=" "
                type="date"
                id="startDate"
                min={today}
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="input12">
            <label htmlFor="end_day">
              End day of travel <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap">
              <input
                placeholder=" "
                type="date"
                min={formData.startDate} 
                id="endDate"
                required
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="input1">
          <div className="input11">
            <label htmlFor="hrs">
              Time for reporting on 1st day
              <span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper2">
              <select
                placeholder="hrs"
                required
                id="reportingTimeHrs"
                value={formData.reportingTimeHrs}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
    hrs
  </option>
                {[...Array(24).keys()].map((hour) => (
    <option key={hour} value={hour}>
      {hour.toString().padStart(2, '0')}
    </option>
  ))}
              </select>

              <select
                placeholder="24 hours basis"
                required
                id="reportingTime24Hrs"
                value={formData.reportingTime24Hrs}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
    24 hours basis
  </option>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
            </div>
          </div>
          <div className="input12">
          <label htmlFor="choiceOfTravel">
              Choice of travel<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <select
                id="choiceOfTravel"
                required
                value={formData.choiceOfTravel}
                onChange={handleInputChange}
              >
                <option value="Local">Local</option>
                <option value="Intercity">Intercity</option>
                <option value="Airport">Airport</option>
                <option value="Events">Events</option>
              </select>
            
              
            </div>
          </div>
        </div>

        {/* <div className="input1">
          <div className="input11">
            <label htmlFor="address">
              Pick Up Point <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap">
              <input
                name=""
                id="placeOfReporting"
                required
                value={formData.placeOfReporting}
                onChange={handleInputChange}
              />
                
            </div>
          </div>
          <div className="input12">
            
              <label htmlFor="tentativePointOfDrop">
               Point of drop<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                type="text"
                id="tentativePointOfDrop"
                value={formData.tentativePointOfDrop}
                onChange={handleInputChange}
              />
            </div>
          </div> 
        </div> */}
        <div className="input1">
          <div className="input11">
            <label htmlFor="address">
            Pick Up Point<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                value={formData.placeOfReporting}
                onChange={handleInputChange}
                type="text"
                id="placeOfReporting"
                required
              />
            </div>
          </div>
          <div className="input12">
            <label htmlFor="service_city">
            Point of drop <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap">
              <input
              type="text"
                id="tentativePointOfDrop"
                required
                value={formData.tentativePointOfDrop}
                onChange={handleInputChange}
              />
               
              
            </div>
          </div>
        </div>

        {/* <div className="input1">
          <div className="input11">
            <label htmlFor="tentativePointOfDrop">
               Point of drop<span style={{ color: "red" }}>*</span>
            </label>
            <div className="input_wrapper">
              <input
                type="text"
                id="tentativePointOfDrop"
                value={formData.tentativePointOfDrop}
                onChange={handleInputChange}
              />
            </div>
          </div>
         
        </div> */}

       
         <div className="input33">
            <label htmlFor="instruction">
              Special Instructions <span style={{ color: "red" }}>*</span>
            </label>
            <div className="textArea">
              <textarea
                value={formData.specialInstruction}
                onChange={handleInputChange}
                name=""
                id="specialInstruction"
                cols="105"
                rows="10"
                required
              ></textarea>
            
            </div>
        </div>
        <div className="submit_button">

        <button className="submit_btn" type="submit">
          Submit
        </button>
        </div>

        <div className="terms">
          <p className="terms_text">Terms And Conditions:</p>
          <p>
            1. Booking will be confirmed subject to availability separately
            through email <br />
            2. Type of vehicle mentioned is only indicative of the category and
            similar category vehicle shall be provided in case of non
            availability <br />
            3. Service is on a best effort basis <br />
            4. Rates indicated for the different cities apply and sending the
            request for vehicle indicates acceptance to the terms and conditions
            of hire outlined elsewhere on the website. <br />
            5. We shall try and get back asap to you on your online enquiry /
            booking. However, please do factor a revert back in upto 24 hrs.
            from the time of placing the request. For immediate requirements,
            Please call at the operations nos. listed in the contact section.{" "}
            <br />
          </p>
        </div>
      </div>
    </form>
    <OTPEntryModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onSubmit={handleOTPSubmit}
        email={formData.emailId} // Pass necessary data to OTP modal
        contactNo={formData.contactNo}
        name = {formData.name} // Pass necessary data to OTP modal
      />
    </div>
  );
}
