/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./self.css"
import { useEffect, useState } from "react";
import { addCarsToFleetType, deleteCarInFleet, deleteFleet, getAllCars, updateCarInFleet } from "../../../redux/actions/CheuffeurDrive.action";
import {Button, Input, Select, useToast} from "@chakra-ui/react"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from
 
"@chakra-ui/react";
import AddModal from "../Modals/CheuffeurModals/AddModal";
import { FaRegEdit } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import ConfirmationModal from "../Modals/CheuffeurModals/ConfirmationModal";



export default function Cheuffer() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCar, setNewCar] = useState({
    carName: '',
    properties: {
      img: '',
      hours4_40kms: 0,
      hours8_80kms: 0,
      extraHourBeyond80kms: 0,
      extraHourBeyond8hr: 0,
      driverBhatta: '',
      InterCityMinimumkmsPerDay: '',
      InterCityMinimumKmsPerkm: 0,
      driverBhattaPerKm: 0,
      status:""
    },
  });
  const [selectedCarDetails, setSelectedCarDetails] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
const [selectedCarToDelete, setSelectedCarToDelete] = useState(null);

    const [carId, setCarId] = useState(null);
  const [fleetId, setFleetId] = useState(null);
    const [selectedFleet, setSelectedFleet] = useState('ROYALE');
    const {fleets} = useSelector((state)=>state.data)
    const dispatch = useDispatch()
   const toast = useToast()
   
   const [editedCar, setEditedCar] = useState({
    carName: '',
    properties: {
      img: '',
      hours4_40kms: 0,
      hours8_80kms: 0,
      extraHourBeyond80kms: 0,
      extraHourBeyond8hr: 0,
      driverBhatta: '',
      InterCityMinimumkmsPerDay: '',
      InterCityMinimumKmsPerkm: 0,
      driverBhattaPerKm: 0,
      status:''
    },
  });


      useEffect(() => {
        dispatch(getAllCars())
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
    
      const handleCarDetails = (carDetails) => {
        setSelectedCarDetails(carDetails);
        setIsDetailsModalOpen(true);
      };
    
      const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditedCar({
          carName: '',
          properties: {
            img: '',
            hours4_40kms: 0,
            hours8_80kms: 0,
            extraHourBeyond80kms: 0,
            extraHourBeyond8hr: 0,
            driverBhatta: '',
            InterCityMinimumkmsPerDay: '',
            InterCityMinimumKmsPerkm: 0,
            driverBhattaPerKm: 0,
            status:''
          },
        });
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCar((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        
      };

      const handleAddInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'carName') {
          setNewCar((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        } else {
          setNewCar((prevData) => ({
            ...prevData,
            properties: {
              ...prevData.properties,
              [name]: value,
            },
          }));
        }
      }
      const handleSaveChanges = () => {
        console.log(editedCar)
        dispatch(updateCarInFleet(fleetId, carId, editedCar));
        dispatch(getAllCars())
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
        dispatch(updateCarInFleet(fleetId, carId, {
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
      const handleConfirmDelete = () => {
        if (selectedCarToDelete) {
          const { carId, fleetId } = selectedCarToDelete;
          console.log(`Delete car with ID: ${carId}`);
          dispatch(deleteCarInFleet(fleetId, carId));
          toast({
            title: 'Car Deleted.',
            description: "The car has been successfully deleted in the database",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          setIsDeleteConfirmationOpen(false);
        }
      };
      
      const handleCloseDeleteConfirmation = () => {
        setSelectedCarToDelete(null);
        setIsDeleteConfirmationOpen(false);
      };
      
     
  const handleDeleteFleet = () => {
    const fleetIndexToDelete = fleets.findIndex((fleet) => fleet.fleetType === selectedFleet);

    if (fleetIndexToDelete > -1) {
      
      dispatch(deleteFleet(fleets[fleetIndexToDelete]._id))
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

  

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setNewCar({
      carName: '',
      properties: {
        img: '',
        hours4_40kms: 0,
        hours8_80kms: 0,
        extraHourBeyond80kms: 0,
        extraHourBeyond8hr: 0,
        driverBhatta: '',
        InterCityMinimumkmsPerDay: '',
        InterCityMinimumKmsPerkm: 0,
        driverBhattaPerKm: 0,
      },
    });
  };
  console.log(selectedFleet._id)
  const handleSaveNewCar = () => {
   
    dispatch(addCarsToFleetType(selectedFleet._id, newCar));

    setIsAddModalOpen(false);
    toast({
      title: 'Car added.',
      description: 'New car has been added to the fleet.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <div className="table_cont">
      <div className="top_bar">

        <Select className="select" size={'md'} w={'10rem'} onChange={(e) => setSelectedFleet(e.target.value)}
        value={selectedFleet}>
            {
              fleets.map((fleet)=>(
                <option key={fleet._id}>{fleet.fleetType}</option>
                ))
              }
        </Select>
        {/* <Button bg={'blue'} onClick={handleAddCar}>Add Cars</Button> */}
        <AddModal
          isOpen={isAddModalOpen}
          onClose={handleCloseAddModal}
          carDetails={newCar}
          onSave={handleSaveNewCar}
          onChange={handleAddInputChange} 
        />
              </div>
     <table className="car-table">
      <thead>
        <tr>
          <th className="header-cell">Car Name</th>
          <th className="header-cell c_image">Car Image</th>
          <th className="header-cell ">Edit Car Detail</th>
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
    <Button onClick={handleDeleteFleet} bg={'red'} color={'white'} mt={5}>Delete Fleet</Button>
    </table>
   
    <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          
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
              <label >4 hours/40 kms</label>
              <Input
                type="text"
                name="hours4_40kms"
                value={editedCar.properties.hours4_40kms}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >8 hours/80 kms</label>
              <Input
                type="text"
                name="hours8_80kms"
                value={editedCar.properties.hours8_80kms}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Extra Hour Beyond 80 kms</label>
              <Input
                type="text"
                name="extraHourBeyond80kms"
                value={editedCar.properties.extraHourBeyond80kms}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Extra Hour Beyond 8 hrs</label>
              <Input
                type="text"
                name="extraHourBeyond8hr"
                value={editedCar.properties.extraHourBeyond8hr}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Driver Bhatta</label>
              <Input
                type="text"
                name="driverBhatta"
                value={editedCar.properties.driverBhatta}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >InterCity Minimum kms Per Day</label>
              <Input
                type="text"
                name="InterCityMinimumkmsPerDay"
                value={editedCar.properties.InterCityMinimumkmsPerDay}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >InterCity Minimum Kms Per km</label>
              <Input
                type="text"
                name="InterCityMinimumKmsPerkm"
                value={editedCar.properties.InterCityMinimumKmsPerkm}
                onChange={handleInputChange}
                placeholder="Car Name"
                mb={4}
              />
              <label >Driver Bhatta Per Km</label>
              <Input
                type="text"
                name="driverBhattaPerKm"
                value={editedCar.properties.driverBhattaPerKm}
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
  <ConfirmationModal
  isOpen={isDeleteConfirmationOpen}
  onClose={handleCloseDeleteConfirmation}
  onConfirmDelete={handleConfirmDelete}
/>

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

