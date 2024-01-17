/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./self.css"
import { useEffect, useState } from "react";
import { getAllSelfCars,updateSelfCarInFleet, deleteSelfFleet } from "../../../redux/actions/SelfDrive.action";
import {Button, Input, Select, useToast} from "@chakra-ui/react"
import AddModal from "../Modals/SelfModals/AddModal";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from
 
"@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
// import ConfirmationModal from "../Modals/SelfModals/ConfirmationModal";

export default function Self() {
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
// const [selectedCarToDelete, setSelectedCarToDelete] = useState(null);

  const [carId, setCarId] = useState(null);
const [fleetId, setFleetId] = useState(null);
    const [selectedFleet, setSelectedFleet] = useState('ELECTRIC');
    const {fleets} = useSelector((state)=>state.selfData)
    const dispatch = useDispatch()
    const toast = useToast()
   const [editedCar, setEditedCar] = useState({
    carName: '',
    properties: {
      img:'',
      hourlyPack: 0,
      allotedKMs: 0,
      zeroMileage: 0,
      perKM: 0,
      fupPack: 0,
      trueUnlimited: 0,
      securityDeposit: 0,
      fuelType:'',
      status:''
    },
  });

  const handleCarDetails = (carDetails) => {
    setSelectedCarDetails(carDetails);
    setIsDetailsModalOpen(true);
  };

      useEffect(() => {
        dispatch(getAllSelfCars())
      }, [dispatch]);
     
      const handleEditCar = (carId, fleetId) => {
        setFleetId(fleetId);
        setCarId(carId);
        const fleet = fleets.find((fleet) => fleet._id === fleetId);
        if (fleet) {
          const car = fleet.cars.find((car) => car._id === carId);
          if (car) {
            setEditedCar(car);
            setIsEditModalOpen(true);
          }
        }
      };
      const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditedCar({
          carName: '',
    properties: {
      img: '',
      hourlyPack: 0,
      allotedKMs: 0,
      zeroMileage: 0,
      perKM: 0,
      fupPack: 0,
      trueUnlimited: 0,
      securityDeposit: 0,
      fuelType: '',
      status:''
    }    
    });
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCar((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        
      };
      const handleSaveChanges = () => {
        console.log(editedCar)
        dispatch(updateSelfCarInFleet(fleetId, carId, editedCar));
        setIsEditModalOpen(false);
        toast({
          title: 'Car edited.',
          description: 'Car details have been updated.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        
      };


      const handleToggleStatus = (carId, fleetId, newStatus) => {
        // Update the local status immediately
        setEditedCar((prevEditedCar) => ({
          ...prevEditedCar,
          properties: {
            ...prevEditedCar.properties,
            status: newStatus,
          },
        }));
      
        // Dispatch the update to the backend
        dispatch(updateSelfCarInFleet(fleetId, carId, {
          properties: {
            status: newStatus,
          },
        }));
      
        toast({
          title: 'Car Status Updated',
          description: 'The car status has been successfully updated.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      };
      
    
    
      
      
      // const handleDeleteCar = (carId,fleetId) => {
        
      //   if(fleetId && carId){
      //     setSelectedCarToDelete({ carId, fleetId });
      //     setIsDeleteConfirmationOpen(true);
      //   }
       
      // };
      // const handleConfirmDelete = () => {
      //   if (selectedCarToDelete) {
      //     const { carId, fleetId } = selectedCarToDelete;
      //     console.log(`Delete car with ID: ${carId}`);
      //     dispatch(deleteSelfCarInFleet(fleetId, carId));
      //     toast({
      //       title: 'Car Deleted.',
      //       description: "The car has been successfully deleted in the database",
      //       status: 'success',
      //       duration: 9000,
      //       isClosable: true,
      //     });
      //     setIsDeleteConfirmationOpen(false);
      //   }
      // };
      // const handleCloseDeleteConfirmation = () => {
      //   setSelectedCarToDelete(null);
      //   setIsDeleteConfirmationOpen(false);
      // };
      
      const handleDeleteFleet = () => {
        const fleetIndexToDelete = fleets.findIndex((fleet) => fleet.fleetType === selectedFleet);
    
        if (fleetIndexToDelete > -1) {
          
          dispatch(deleteSelfFleet(fleets[fleetIndexToDelete]._id))
          toast({
            title:'Deleted the fleet',
            status:'success',
            description: "The fleet has been successfully deleted in database",
            duration:3000,
            isClosable: true,
            
          })
          
          const nextFleetIndex = fleetIndexToDelete === fleets.length - 1 ? fleetIndexToDelete - 1 : fleetIndexToDelete;
          const nextFleet = fleets[nextFleetIndex];
          setSelectedFleet(nextFleet ? nextFleet.fleetType : '');
        }
      };
    
  return (
    <div className="table_cont">
        <Select className="select" size={'md'} w={'12rem'} onChange={(e) => setSelectedFleet(e.target.value)}
        value={selectedFleet}>
            {
                fleets?.map((fleet)=>(
                    <option key={fleet._id}>{fleet.fleetType}</option>
                ))
            }
        </Select>
     <table className="car-table">
      <thead>
        <tr>
          <th className="header-cell">Car Name</th>
          <th className="header-cell">Car Image</th>
          <th className="header-cell">Edit Car Detail</th>
          <th className="header-cell">Status</th>
          <th className="header-cell">Details</th>
        </tr>
      </thead>
      <tbody>
      {fleets.map((fleet) =>
    fleet.fleetType === selectedFleet &&
    fleet.cars.map((car, index) => (
      <tr key={index} className={car.properties.status === 'Out of Stock' ? 'out-of-stock' : ''}>
        <td>{car.carName}</td>
        <td className="img_cont">
          <img src={car.properties.img} alt={`Car ${index}`} className="car-image" />
        </td>
        <td>
          <button className="edit-button" onClick={() => handleEditCar(car._id, fleet._id)}>
            <FaRegEdit />
          </button>
        </td>
        <td>
          <StatusButton
            status={car.properties.status}
            onToggleStatus={(newStatus) => handleToggleStatus(car._id, fleet._id, newStatus)}
          />
        </td>
        <td>
          <button className="detail-button" onClick={() => handleCarDetails(car)}>
            <FcViewDetails />
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
    </table>
    <Button onClick={handleDeleteFleet} bg={'red'} color={'white'} mt={5}>Delete Fleet</Button>
    <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Edit car form content here */}
          
            <form>
              <label >Car Name</label>
              <Input
                type="text"
                name="carName"
                value={editedCar.carName}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Car Image</label>
              <Input
                type="text"
                name="img"
                value={editedCar.properties.img}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label htmlFor="hourlyPack">Hourly Pack</label>
              <Input
                type="text"
                name="hourlyPack"
                value={editedCar.properties.hourlyPack}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Alloted KMs</label>
              <Input
                type="text"
                name="allotedKMs"
                value={editedCar.properties.allotedKMs}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Zero Mileage</label>
              <Input
                type="text"
                name="zeroMileage"
                value={editedCar.properties.zeroMileage}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Per KM</label>
              <Input
                type="text"
                name="perKM"
                value={editedCar.properties.perKM}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >FUP Pack</label>
              <Input
                type="text"
                name="extraHourBeyond8hr"
                value={editedCar.properties.fupPack}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >True Unlimited</label>
              <Input
                type="text"
                name="trueUnlimited"
                value={editedCar.properties.trueUnlimited}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Security Deposit</label>
              <Input
                type="text"
                name="securityDeposit"
                value={editedCar.properties.securityDeposit}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Fuel Type</label>
              <Input
                type="text"
                name="fuelType"
                value={editedCar.properties.fuelType}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button mr={5} bg={'#f0121e'} color={'#fff'} onClick={handleCloseEditModal}>Cancel</Button>
            <Button bg={'#007bff'} color={'#fff'} onClick={handleSaveChanges} type="submit">Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AddModal
    isOpen={isDetailsModalOpen}
    onClose={() => setIsDetailsModalOpen(false)}
    selectedCarDetails={selectedCarDetails}
  />
  {/* <ConfirmationModal
  isOpen={isDeleteConfirmationOpen}
  onClose={handleCloseDeleteConfirmation}
  onConfirmDelete={handleConfirmDelete}
/> */}
    </div>
  )
}
const StatusButton = ({ status, onToggleStatus }) => {
  const [stockStatus, setStockStatus] = useState(status);

  const handleStock = () => {
    const newStatus = stockStatus === 'In Stock' ? 'Out of Stock' : 'In Stock';
    setStockStatus(newStatus);
    onToggleStatus(newStatus); // Notify the parent component about the status change
  };

  return (
    <Button onClick={handleStock} _hover={{
      bg: stockStatus === 'In Stock' ? 'darkgreen' : 'darkred',
      color: 'white',
    }}  color={'white'} bg={stockStatus === 'In Stock' ? '#2F855A' : '#F56565'}>
      {stockStatus}
    </Button>
  );
};

