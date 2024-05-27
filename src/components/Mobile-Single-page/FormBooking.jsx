import  { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSelfCarById } from '../../redux/actions/SelfDrive.action';
import SelfTop from '../SelfDrive/SelfTop';
import Loader from '../designs/Loader';
import "./Single_Self.css"
import { Input, useToast } from '@chakra-ui/react';
import Footer from '../Footer';
import { auth } from '../../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import OTPEntryModal from '../SingleCar/OtpModal';
const FormBooking = ({car,fleetType,service}) => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.selfData);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const toast = useToast();
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const location = useLocation()
  const data = location.state;
  console.log(data)
  const [formData, setFormData] = useState({
    name: "",
    carName: car?.carName || "",
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
      const verifier = new RecaptchaVerifier(auth,'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          // Callback function
        },
      });
      setRecaptchaVerifier(verifier);
    };

    initializeRecaptcha();

    // Clean up function
    return () => {
      if (recaptchaVerifier) {
        recaptchaVerifier.clear();
      }
    };
  }, []);

    // const onCaptchaVerify = ()=>{
     
    //   if(!window.recaptchaVerifier){
     
    //     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    //       size: 'invisible',
    //       callback: (response) => {
          
    //       },
    //       'expired-callback': () => {
           
    //       }
    //     });
    //   }
    // }

    const onSignup = async () => {
      try {
        // Ensure recaptchaVerifier is initialized
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
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Check if form is already being submitted
      if (!isSubmitting) {
        setIsSubmitting(true); // Set form submission flag to true
      
        // Call onSignup function
        try {
          await onSignup();
        } catch (error) {
          console.error('Error during signup:', error);
        } finally {
          setIsSubmitting(false); // Reset form submission flag
        }
      }
   
      // console.log(formData);
    };

  const handleOTPSubmit = (otp) => {
    setIsOTPModalOpen(false);
  };

  if (loading) {
    return <div><Loader /></div>;
  }

  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }

  
    console.log(cars, 'cars'); // For debugging




    return (
        <div>
          <div id="recaptcha-container"></div>
            <SelfTop topic={data.service} />
           
            
            {cars && (
                
                <form className='Form_main' onSubmit={handleSubmit}>
                    {/* <p>jn:{service}</p> */}
                    <div className="inner_form_main">
                        <p className="booking_text">
                            Book This Car
                        </p>
                        <div className="Form_container">
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
              Name <span style={{ color: "red" }}>*</span>
            </label>
                                <Input value={formData.name}
                onChange={handleInputChange}
                type="text"
                id="name"
                 required/>
                            </div>
                            <div className="input121">
            <label htmlFor="tel">
              Contact Number <span style={{ color: "red" }}>*</span>
            </label>
            <div className="contact_numWrap1">
              <p className="box">
                <span>+91</span>
              </p>
              <Input
                 value={formData.contactNo}
                 onChange={handleInputChange}
                 type="tel"
                 id="contactNo"
                
                required
              />
            </div>
          </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
              Email <span style={{ color: "red" }}>*</span>
            </label>
                                <Input value={formData.emailId}
                onChange={handleInputChange}
                type="email"
                id="emailId"  required/>
                            </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            City where service is required  <span style={{ color: "red" }}>*</span>
            </label>
                                <Input  type="text"
                id="serviceCity"
                required
                value={formData.serviceCity}
                onChange={handleInputChange}/>
                            </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Start day of travel <span style={{ color: "red" }}>*</span>
            </label>
                                <Input   min={today}
                value={formData.startDate}
                onChange={handleInputChange} type="date"
                id="startDate" required/>
                            </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            End day of travel <span style={{ color: "red" }}>*</span>
            </label>
                                <Input  min={formData.startDate} 
                value={formData.endDate}
                onChange={handleInputChange} type="date"
                id="endDate" required/>
                            </div>
                            <div className="Input_cont two_inps">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Time for reporting on 1st day <span style={{ color: "red" }}>*</span>
            </label>           <div className="time_for_reporting">

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
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Choice of travel <span style={{ color: "red" }}>*</span>
            </label>
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
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Pickup Up Point <span style={{ color: "red" }}>*</span>
            </label>
                                <Input value={formData.placeOfReporting}
                onChange={handleInputChange}
                type="text"
                id="placeOfReporting" required/>
                            </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Point of drop <span style={{ color: "red" }}>*</span>
            </label>
                                <Input   type="text"
                id="tentativePointOfDrop"
                required
                value={formData.tentativePointOfDrop}
                onChange={handleInputChange}/>
                            </div>
                            <div className="Input_cont">
                            <label htmlFor="name" style={{marginBottom:'10px'}}>
                            Special Instructions <span style={{ color: "red" }}>*</span>
            </label>
                                <textarea  value={formData.specialInstruction}
                onChange={handleInputChange}
                name=""
                id="specialInstruction"
                cols="105"
                rows="10"
                required/>
                            </div>
                            <button type='submit' className='submit_mobile'>
                        Submit
                    </button>
                    <div className="termss">
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
                        
                    </div>
                    
                </form>
            )}
            <Footer/>
            <OTPEntryModal
    fleetType = {fleetType}
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onSubmit={handleOTPSubmit}
        email={formData.emailId} // Pass necessary data to OTP modal
        contactNo={formData.contactNo}
        name = {formData.name}
        formData = {formData}
        service = {service}
        car = {cars} // Pass necessary data to OTP modal
      />
        </div>
    );
}

export default FormBooking;
