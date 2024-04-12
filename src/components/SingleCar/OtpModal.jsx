/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Input, Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

const OTPEntryModal = ({ isOpen, onClose, onSubmit,contactNo,email,name,formData,car,service,fleetType }) => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputs = Array.from({ length: 6 }, (_, i) => i);
  const inputRefs = useRef(otpInputs.map(() => React.createRef()));
  const toast = useToast();
    const [verificationFailed, setVerificationFailed] = useState(false); 
  let resendAttempts = 0;
  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    const phoneNumber = contactNo;
    
    try {
      if (resendAttempts >= 3) {
        toast({
          title: "Exceeded Resend Limit",
          description: "You have exceeded the number of attempts to resend the OTP. Please try again after some time.",
          status: "warning",
          duration: 6000,
          isClosable: true,
        });
        return; 
      }
      
      const response = await fetch('https://stormy-fish-houndstooth.cyclic.app/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });
  
      if (response.ok) {
        resendAttempts++;
        
        toast({
          title: "OTP Resent",
          description: `A New OTP has been sent to ${contactNo}`,
          status: "success",
          duration: 6000,
          isClosable: true,
        });
      } else {
        console.error('Failed to send OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(otp.join(''));
    const otpCode = otp.join('');
    console.log(otpCode)
  const phoneNumber = contactNo
    try {
      const response = await fetch('https://stormy-fish-houndstooth.cyclic.app/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, otpCode })
      });
  
     
      if (response.ok) {
        
        toast({
          title: "OTP Verified",
          description: "OTP verification successful.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        setOTP(['', '', '', '', '', '']);
        await sendEmail();
        await sendSalesEmail();
        onClose();
      } else {
        setVerificationFailed(true); 
       
        toast({
          title: "Failed to Verify OTP",
          description: "OTP verification failed. Please try again.",
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
   const sendSalesEmail = () => {
    
     console.log(formData)
     // Sending email using emailjs library
    emailjs.send('service_syu7i3h', 'template_k7x29ih', {
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
    
      
     }, "PAMSeoabaa0l3PiqP")
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
    const res = await fetch(`https://stormy-fish-houndstooth.cyclic.app/api/email/sendEmail`,{
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

  return (
  <Modal isOpen={isOpen} onClose={verificationFailed ? undefined : onClose} size="md">

      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter OTP</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" align="center" justify="center">
              <Text mb={4}>Please enter the OTP sent to your phone:</Text>
              <Flex justifyContent={'center'}>
                {otpInputs.map((index) => (
                  <Input
                    key={index}
                    ref={inputRefs.current[index]}
                    type="text"
                    placeholder=" "
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    // eslint-disable-next-line no-undef
                    // onKeyDown={(e) => handleKeyDown(index, e)}
                    width="10%"
                    textAlign="center"
                    mr={2}
                  />
                ))}
              </Flex>
              <Button variant="outline" bgColor={'blue.500'} color={'white'} mt={2} onClick={handleClick}>Resend OTP</Button>
              <Button type="submit" colorScheme="blue">Submit</Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OTPEntryModal;
