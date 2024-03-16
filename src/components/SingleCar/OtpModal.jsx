import React, { useState, useRef } from 'react';
import { Input, Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const OTPEntryModal = ({ isOpen, onClose, onSubmit }) => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputs = Array.from({ length: 6 }, (_, i) => i);
  const inputRefs = useRef(otpInputs.map(() => React.createRef()));

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp.join(''));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
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
                    width="10%"
                    textAlign="center"
                    mr={2}
                  />
                ))}
              </Flex>
              <Button variant="outline" bgColor={'blue.500'} color={'white'} mt={2} bg>Resend OTP</Button>
              <Button type="submit" colorScheme="blue">Submit</Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OTPEntryModal;
