import React, { useState } from 'react';
import { Box, Button, Center, Flex, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, PinInput, PinInputField, VStack } from '@chakra-ui/react';

const OtpMod = ({ isOpen, onClose, onSubmit, contactNo, email, name, formData, car, service, fleetType }) => {
  const [otp, setOtp] = useState(Array(6).fill('')); // Initialize OTP state as an array of empty strings

  const handleChange = (index, value) => {
    const newOtp = [...otp]; // Create a copy of the current OTP state
    newOtp[index] = value; // Update the digit at the given index
    setOtp(newOtp); // Update the state with the new OTP
  };

  const handleSubmit = () => {
    onSubmit(otp.join('')); // Convert the OTP array to a string before submitting
    onClose(); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter OTP</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Flex direction="column" align="center">
              <Heading size="md">Your OTP</Heading>
              <VStack spacing={4} align="stretch">
                <PinInput otp value={otp} onChange={(value) => handleChange(value)}>
                  {pinInputProps =>
                    otp.map((_, index) => (
                      <PinInputField {...pinInputProps} key={index} />
                    ))
                  }
                </PinInput>
                <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
              </VStack>
            </Flex>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OtpMod;
