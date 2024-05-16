/* eslint-disable react/prop-types */
import  { useState } from 'react';
import {  Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast, HStack, PinInput, PinInputField } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import 'firebase/auth';

const OTPEntryModal = ({ isOpen, onSubmit, contactNo, email, name, formData, car, service, fleetType }) => {
  const [otp, setOTP] = useState(['','','','','','']);
  
  
  const toast = useToast();
  const [verificationError, setVerificationError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    try {
      const res = await window.confirmationResult.confirm(otpCode);
      if (res.user) {
        toast({
          title: "OTP Verified",
          description: "OTP verification successful.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        await sendEmail();
        await sendSalesEmail();
        setVerificationError(false); // Reset verification error
        setOTP(['', '', '', '', '', '']); // Clear OTP fields
        onSubmit(otpCode);
      } else {
        setVerificationError(true); // Set verification error for incorrect OTP
        toast({
          title: "Failed to Verify OTP",
          description: "Incorrect OTP entered. Please try again.",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      toast({
        title: "Error",
        description: "An error occurred while verifying OTP. Please try again later.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   onSubmit(otp.join(''));
  //   const otpCode = otp.join('');

  //   console.log('this is the otp: ',otpCode)
  //   try {
  //     window.confirmationResult.confirm(otpCode).then(async(res)=>{
  //       console.log(res);
  //       const user = res.user;
  //       if (user) {
  //         toast({
  //           title: "OTP Verified",
  //           description: "OTP verification successful.",
  //           status: "success",
  //           duration: 6000,
  //           isClosable: true,
  //         });
          
  //         setOTP(['', '', '', '', '', '']);
  //         await sendEmail();
  //         setVerificationError(true)
  //       } else {
  //         setVerificationError(false);
  //         toast({
  //           title: "Failed to Verify OTP",
  //           description: "Incorrect OTP entered. Please try again.",
  //           status: "error",
  //           duration: 6000,
  //           isClosable: true,
  //         });
  //       }
  //     })
     
  //   } catch (error) {
  //     console.error('Error verifying OTP:', error.message);
  //     toast({
  //       title: "Error",
  //       description: "An error occurred while verifying OTP. Please try again later.",
  //       status: "error",
  //       duration: 6000,
  //       isClosable: true,
  //     });
  //   }
  // };

   const sendSalesEmail = () => {
    
     console.log(formData)
     // Sending email using emailjs library 
    //  service_x3ug8r7     template_qzsnwk2
    emailjs.send('service_x3ug8r7', 'template_qzsnwk2', {
    name: formData.name,
    carName: car.carName,
    status: "Pending",
    contactNo: contactNo,
    fleetType: fleetType,
    emailId: email,
    serviceCity: formData.serviceCity,
    startDate: formData.startDate,
    endDate: formData.endDate,
    reportingTimeHrs: formData.reportingTimeHrs,
    reportingTime24Hrs: formData.reportingTime24Hrs,
    placeOfReporting: formData.placeOfReporting,
    choiceOfTravel: formData.choiceOfTravel,
    typeOfVehicle: service,
    tentativePointOfDrop: formData.tentativePointOfDrop,
    specialInstruction: formData.specialInstruction
    
      
     }, "aTTCyQOLfRMG-VaKb")
    //  aTTCyQOLfRMG-VaKb
       .then((result) => {
       
        console.log('sent')
      }, (error) => {
         console.log(error.text); 
          
       });
   };
  const sendEmail = async()=>{
    let dataSend = {
      email:email,
      subject:'Thank You for your Booking enquiry at 4 wheel travels',
      message:`
      <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
              }
              .header {
                background-color: #007bff;
                color: #fff;
                padding: 10px;
                text-align: center;
              }
              .content {
                padding: 20px;
                color:#000307;
                
              }
              .content img {
                max-width: 100%;
                height: auto;
                margin-bottom: 20px;
              }
              .footer {
                background-color: #f4f4f4;
                padding: 20px;
                color:'#000';
              }
              .regards{
                padding:20px;
                color:'#000';
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h3>Thank You for your Booking enquiry at 4 wheel travels 
                </h4>
              </div>
              <div class="content">
                <img src="https://dl.dropboxusercontent.com/scl/fi/nfu0j7mfd8fz9mg4w7c0z/email-template.webp?rlkey=14jjc3y0i74hi0eg3y4gsyw48&dl=0" alt="thanks for booking car" />
                <p>Dear ${name},
                Thank you for contacting 4 wheel travels. We appreciate your interest and would be delighted to assist you in securing the perfect vehicle for your transportation needs.<br/> 
                
                We strive to provide a prompt and personalized service to ensure your booking experience is seamless and hassle-free.
                Our team is currently reviewing your enquiry and will get back to you shortly with availability, pricing, and any additional details you may need.
                
                </p>
                <p>If you have any urgent requirements or questions, please don't hesitate to contact us directly at +91 92480 23800 or +914044384409
                <br/> <br/> Thank you once again for choosing 4 wheel travels. We look forward to the opportunity to serve you and make your travel experience exceptional. 
                </p>
                <p>
              Best regards,<br/>
              Sales team <br/>
              4 wheel travels
              </p>
              </div>
              
              
            </div>
          </body>
        </html>
    `,
    attachments: [
      {
        filename: "template.png",
        path: email,
        cid: "emailImage", // same cid value as used in the email HTML
      },
    ],
    }
    const res = await fetch(`http://4wheelbackend-env.eba-mpb5rpet.ap-south-1.elasticbeanstalk.com/api/email/sendEmail`,{
      method:'POST',
      body:JSON.stringify(dataSend),
      headers:{
        Accept:'application/json',
        'Content-Type':"application/json",
      }
    }).then((res)=>{
      // console.log(res);
      if(res.status>199 && res.status<300){
        toast({
          title: "Confirmation Mail",
          description: "A Confirmation mail has been sent to your mail",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        // navigate("/")
      }
      else{
        toast({
          title: "Can't Book the this vehicle",
          description: "There is an error while booking this fleet",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      }
    })
    
  }
  const handleInputChange = (value,index) => {
    const newOTP = [...otp];
  newOTP[index] = value;
  setOTP(newOTP);
  console.log(newOTP.join(''));
  };
  return (
    <Modal isOpen={isOpen} size="md"  onClose={() => setVerificationError(false)}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Enter OTP</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" align="center" justify="center">
            <Text mb={4}>Please enter the OTP sent to your phone:</Text>
            <Flex justifyContent={'center'}>
             
              <PinInput otp>
  {Array.from({ length: 6 }, (_, i) => (
    <PinInputField
      mx={2}
      key={i}
      value={otp[i]}
      onChange={(e) => handleInputChange(e.target.value, i)}
    />
  ))}
</PinInput>
            </Flex>
            <Button type="submit" colorScheme="blue">Submit</Button>
          </Flex>
        </form>
      </ModalBody>
    </ModalContent>
  </Modal>
  );
};

export default OTPEntryModal;
