/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addBooking } from "../../redux/actions/Booking.action";
import { useNavigate } from "react-router-dom";
import OTPEntryModal from "./OtpModal";
import axios from "axios";
import 'firebase/auth';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";

function generateFiveDigitNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}

const randomFiveDigitNumber = generateFiveDigitNumber();

export default function BookingForm({ car, service, fleetType }) {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const resetForm = {
    name: "",
    carName: car.carName,
    fleetType: fleetType,
    contactNo: "",
    status: "Pending",
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    carName: car.carName,
    status: "Pending",
    contactNo: "",
    fleetType: fleetType,
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
    const formattedValue = e.target.type === 'date' ? value.split('T')[0] : value;
    setFormData({
      ...formData,
      [id]: formattedValue,
    });
  };

  useEffect(() => {
    const initializeRecaptcha = () => {
      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log("reCAPTCHA verified", response);
          setRecaptchaVerified(true);
        },
        'expired-callback': () => {
          console.log("reCAPTCHA expired");
          setRecaptchaVerified(false);
        },
        'error-callback': (error) => {
          console.error("reCAPTCHA error", error);
        }
      });
      setRecaptchaVerifier(verifier);
    };

    initializeRecaptcha();

    return () => {
      if (recaptchaVerifier) {
        recaptchaVerifier.clear();
      }
    };
  }, []);

  const onSignup = async () => {
    try {
      if (!recaptchaVerifier) {
        throw new Error('Recaptcha verifier is not initialized');
      }

      const phoneNumber = "+91" + formData.contactNo;
      if (window.confirmationResult) {
        window.confirmationResult = null;
      }

      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      toast({
        title: "OTP Sent",
        description: "Please check if you received the OTP.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });

      window.confirmationResult = confirmationResult;
      setIsOTPModalOpen(true);
    } catch (error) {
      console.error('Error during signup:', error);
      setIsOTPModalOpen(false);
      toast({
        title: "Error",
        description: "An error occurred while sending OTP. Please try again later.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await onSignup();
      } catch (error) {
        console.error('Error during signup:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleOTPSubmit = (otp) => {
    setIsOTPModalOpen(false);
  };

  return (
    <div className="contact_form_div">
      <div id="recaptcha-container"></div>
      <div className="contact_form_outer">
        <form className="input_container" 
        name="bookingForm"
        id="bookingForm"
        onSubmit={handleSubmit}>
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
                    name="name"
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
                    name="contactNo"
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
                    name="emailId"
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
                    name="serviceCity"
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
                    name="startDate"
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
                    id="endDate"
                    required
                    name="endDate"
                    min={formData.startDate}
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
                    name="reportingTimeHrs"
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
                    name="reportingTime24Hrs"
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
                    name="choiceOfTravel"
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
                    name="placeOfReporting"
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
                    name="tentativePointOfDrop"
                    value={formData.tentativePointOfDrop}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="input33">
              <label htmlFor="instruction">
                Special Instructions <span style={{ color: "red" }}>*</span>
              </label>
              <div>
                <textarea
                  className="textArea"
                  value={formData.specialInstruction}
                  onChange={handleInputChange}
                  name="specialInstruction"
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
                2. Type of vehicle mentioned is only indicative of the category
                and similar category vehicle shall be provided in case of non
                availability <br />
                3. Service is on a best effort basis <br />
                4. Rates indicated for the different cities apply and sending
                the request for vehicle indicates acceptance to the terms and
                conditions of hire outlined elsewhere on the website. <br />
                5. We shall try and get back asap to you on your online enquiry
                / booking. However, please do factor a revert back in upto 24
                hrs. from the time of placing the request. For immediate
                requirements, Please call at the operations nos. listed in the
                contact section. <br />
              </p>
            </div>
          </div>
        </form>
      </div>
      <OTPEntryModal
        fleetType={fleetType}
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onSubmit={handleOTPSubmit}
        email={formData.emailId}
        contactNo={formData.contactNo}
        name={formData.name}
        formData={formData}
        service={service}
        car={car}
      />
    </div>
  );
}
