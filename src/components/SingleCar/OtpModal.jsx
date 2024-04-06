/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Input, Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';

const OTPEntryModal = ({ isOpen, onClose, onSubmit,contactNo,email,carName }) => {
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
      // Make a POST request to verify the OTP https://stormy-fish-houndstooth.cyclic.app/api/email/sendEmail
      const response = await fetch('https://stormy-fish-houndstooth.cyclic.app/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, otpCode })
      });
  
      // Check if the request was successful
      if (response.ok) {
        // OTP verification successful
        toast({
          title: "OTP Verified",
          description: "OTP verification successful.",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        await sendEmail();
        // Close the modal only if OTP verification is successful
        onClose();
      } else {
        setVerificationFailed(true); 
        // OTP verification failed
        toast({
          title: "Failed to Verify OTP",
          description: "OTP verification failed. Please try again.",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      // Handle any errors that occurred during the request
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
  const sendEmail = async()=>{
    let dataSend = {
      email:email,
      subject:'Fleet Booking SuccessFull',
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
                text-align: center;
              }
              .content img {
                max-width: 100%;
                height: auto;
                margin-bottom: 20px;
              }
              .footer {
                background-color: #f4f4f4;
                padding: 10px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Fleet Booking Successful</h2>
              </div>
              <div class="content">
                <img src="https://dl.dropboxusercontent.com/scl/fi/nfu0j7mfd8fz9mg4w7c0z/email-template.webp?rlkey=14jjc3y0i74hi0eg3y4gsyw48&dl=0" alt="thanks for booking car" />
                <p>Your ${carName} has been booked successfully.</p>
                <!-- Add more content as needed -->
              </div>
              <div class="footer">
                <p>For any inquiries, please contact us at Bookings@4wheeltravels.com <br/> or Call us At +919885354321 </p>
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
