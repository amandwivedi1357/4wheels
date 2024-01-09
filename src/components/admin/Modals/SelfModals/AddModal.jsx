/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */


import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const AddCarModal = ({ isOpen, onClose, selectedCarDetails }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Car Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {selectedCarDetails && (
            <table className="car-details-table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="attribute">Car Name</td>
                  <td className="value">{selectedCarDetails.carName}</td>
                </tr>
               
                <tr>
                  <td className="attribute">Hourly Pack</td>
                  <td className="value">{selectedCarDetails.properties.hourlyPack}</td>
                </tr>
                <tr>
                  <td className="attribute">Alloted KMs</td>
                  <td className="value">{selectedCarDetails.properties.allotedKMs}</td>
                </tr>
                <tr>
                  <td className="attribute">Zero Mileage</td>
                  <td className="value">{selectedCarDetails.properties.zeroMileage}</td>
                </tr>
                <tr>
                  <td className="attribute">Per KM</td>
                  <td className="value">{selectedCarDetails.properties.perKM}</td>
                </tr>
                <tr>
                  <td className="attribute">FUP Pack</td>
                  <td className="value">{selectedCarDetails.properties.fupPack}</td>
                </tr>
                <tr>
                  <td className="attribute">True Unlimited</td>
                  <td className="value">{selectedCarDetails.properties.trueUnlimited}</td>
                </tr>
                <tr>
                  <td className="attribute">Security Deposit</td>
                  <td className="value">{selectedCarDetails.properties.securityDeposit}</td>
                </tr>
                <tr>
                  <td className="attribute">Fuel Type</td>
                  <td className="value">{selectedCarDetails.properties.fuelType}</td>
                </tr>
                {/* Add more rows for other details */}
              </tbody>
            </table>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddCarModal;
