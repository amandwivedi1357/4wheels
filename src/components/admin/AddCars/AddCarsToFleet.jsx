import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Button, useToast } from '@chakra-ui/react';
import { addCarsToFleetType, getAllCars } from '../../../redux/actions/CheuffeurDrive.action';
import "./AddCarsToFleet.css";

export default function AddCarsToFleet() {
    const dispatch = useDispatch();
    const { fleets } = useSelector((state) => state.data);
    const [selectedFleet, setSelectedFleet] = useState('');
    const [fleetId,setFleetId] = useState(null)
    const [showForm, setShowForm] = useState(false);
    const toast = useToast()
    const [carData, setCarData] = useState({
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

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFleet(selectedValue);

        // Finding fleetId based on selectedFleet
        const foundFleet = fleets.find(fleet => fleet.fleetType === selectedValue);
        if (foundFleet) {
            setFleetId(foundFleet._id);
        }
        console.log(fleetId)
        setShowForm(!!selectedValue); // Show form when fleet is selected
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'carName') {
          setCarData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        } else {
            setCarData((prevData) => ({
            ...prevData,
            properties: {
              ...prevData.properties,
              [name]: value,
            },
          }));
        }
    };
    const handleSubmit = (e) => {
       
        try {
          e.preventDefault();
          console.log('Submitted Car Data:', carData);
          dispatch(addCarsToFleetType(fleetId,carData))
          toast({
            title: 'Car Added.',
            description: 'New car details have been Added.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        } catch (error) {
          console.log(error)
          
          toast({
            title: 'Cannot Add Car.',
            description: ' there is some problems while adding New car details.',
            status: 'failed',
            duration: 3000,
            isClosable: true,
          })
        }
    };

    return (
        <div>
            <Select color={'#fff'} w={'15rem'} value={selectedFleet} onChange={handleSelectChange}>
                <option value="">Select Fleet Type</option>
                {fleets.map((fleet, index) => (
                    <option key={index} value={fleet.fleetType}>{fleet.fleetType}</option>
                ))}
            </Select>

            {showForm && (
                 <form className='AddForm' onSubmit={handleSubmit}>
                 <label >Car Name</label>
                 <Input
                   type="text"
                   name="carName"
                   value={carData.carName}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >Car Image</label>
                 <Input
                   type="text"
                   name="img"
                   value={carData.properties.img}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >4 hours/40 kms</label>
                 <Input
                   type="text"
                   name="hours4_40kms"
                   value={carData.properties.hours4_40kms}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >8 hours/80 kms</label>
                 <Input
                   type="text"
                   name="hours8_80kms"
                   value={carData.properties.hours8_80kms}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >Extra Hour Beyond 80 kms</label>
                 <Input
                   type="text"
                   name="extraHourBeyond80kms"
                   value={carData.properties.extraHourBeyond80kms}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >Extra Hour Beyond 8 hrs</label>
                 <Input
                   type="text"
                   name="extraHourBeyond8hr"
                   value={carData.properties.extraHourBeyond8hr}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >Driver Bhatta</label>
                 <Input
                   type="text"
                   name="driverBhatta"
                   value={carData.properties.driverBhatta}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >InterCity Minimum kms Per Day</label>
                 <Input
                   type="text"
                   name="InterCityMinimumkmsPerDay"
                   value={carData.properties.InterCityMinimumkmsPerDay}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >InterCity Minimum Kms Per km</label>
                 <Input
                   type="text"
                   name="InterCityMinimumKmsPerkm"
                   value={carData.properties.InterCityMinimumKmsPerkm}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                 <label >Driver Bhatta Per Km</label>
                 <Input
                   type="text"
                   name="driverBhattaPerKm"
                   value={carData.properties.driverBhattaPerKm}
                   onChange={handleInputChange}
                   placeholder="Car Name"
                   mb={4}
                 />
                   <Button type="submit" bg={'blue.500'} mt={4}>Submit</Button>
               </form>
            )}
        </div>
    );
}
