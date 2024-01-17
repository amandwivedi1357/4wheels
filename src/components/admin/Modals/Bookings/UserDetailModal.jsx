/* eslint-disable react/prop-types */
// UserDetailsModal.js

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useEffect } from "react";
import "./UserDetailModal.css"; 

const UserDetailsModal = ({ isOpen, onClose, userDetails }) => {
  
  useEffect(() => {
    // Fetch additional details for the given userDetails if required
    
  }, [isOpen, userDetails]);


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="user-details-modal">
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {userDetails && (
            <table className="user-details-table">
              <tbody>
                <tr>
                  <td className="details-label">Name:</td>
                  <td className="details-value">{userDetails.name}</td>
                </tr>
                <tr>
                  <td className="details-label">Email:</td>
                  <td className="details-value">{userDetails.emailId}</td>
                </tr>
                <tr>
                  <td className="details-label">Contact Number:</td>
                  <td className="details-value">{userDetails.contactNo}</td>
                </tr>
                <tr>
                  <td className="details-label">Car Name:</td>
                  <td className="details-value">{userDetails.carName}</td>
                </tr>
                <tr>
                  <td className="details-label">Type of Vehicle:</td>
                  <td className="details-value">{userDetails.fleetType}</td>
                </tr>
                <tr>
                  <td className="details-label">Start Date:</td>
                  <td className="details-value">{userDetails.startDate}</td>
                </tr>
                <tr>
                  <td className="details-label">End Date:</td>
                  <td className="details-value">{userDetails.endDate}</td>
                </tr>
                <tr>
                  <td className="details-label">Reporting Time :</td>
                  <td className="details-value">{userDetails.reportingTimeHrs}</td>
                </tr>
                <tr>
                  <td className="details-label">Place Of Reporting:</td>
                  <td className="details-value">{userDetails.placeOfReporting}</td>
                </tr>
                <tr>
                  <td className="details-label">Choice of Travel:</td>
                  <td className="details-value">{userDetails.choiceOfTravel}</td>
                </tr>
                <tr>
                  <td className="details-label">Tentative Point of Drop:</td>
                  <td className="details-value">{userDetails.tentativePointOfDrop}</td>
                </tr>
                <tr>
                  <td className="details-label">Special Instruction:</td>
                  <td className="details-value">{userDetails.specialInstruction}</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserDetailsModal;
