/* eslint-disable react/prop-types */

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Image } from '@chakra-ui/react'; // Import the modal component from your chosen library
import nocar1 from '../../assets/about/nocar1.png';
import "../css/CheuffeurDrive/fleetDetail.css";
const NocarModal = ({ onClose,fuelType,fleet }) => {
    console.log(fleet)
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Car Not Available</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={nocar1} alt="" m={'auto'}/>
          <p className="desc_nocar"> sorry we do not have {fuelType} cars in the {fleet}</p>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NocarModal;
