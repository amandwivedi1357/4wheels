/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import "./detail.css"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const AddCarModal = ({ isOpen, onClose, selectedCarDetails }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="modal-overlay"/>
      <ModalContent className="modal-content">
        <ModalHeader className="modal-header">Car Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modal-body">
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
                  <td className="attribute">4 hours/40 kms</td>
                  <td className="value">{selectedCarDetails.properties.hours4_40kms}</td>
                </tr>
                <tr>
                  <td className="attribute">8 hours/80 kms </td>
                  <td className="value">{selectedCarDetails.properties.hours8_80kms}</td>
                </tr>
                <tr>
                  <td className="attribute">Extra Hour Beyond 80 kms</td>
                  <td className="value">{selectedCarDetails.properties.extraHourBeyond80kms}</td>
                </tr>
                <tr>
                  <td className="attribute">Extra Hour Beyond 8 hrs</td>
                  <td className="value">{selectedCarDetails.properties.extraHourBeyond8hr}</td>
                </tr>
                <tr>
                  <td className="attribute">Driver Bhatta</td>
                  <td className="value">{selectedCarDetails.properties.driverBhatta}</td>
                </tr>
                <tr>
                  <td className="attribute">InterCity Minimum kms Per Day</td>
                  <td className="value">{selectedCarDetails.properties.InterCityMinimumkmsPerDay}</td>
                </tr>
                <tr>
                  <td className="attribute">InterCity Minimum Kms Per km</td>
                  <td className="value">{selectedCarDetails.properties.InterCityMinimumKmsPerkm}</td>
                </tr>
                <tr>
                  <td className="attribute">Driver Bhatta Per Km</td>
                  <td className="value">{selectedCarDetails.properties.driverBhattaPerKm}</td>
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
