import { useEffect, useState } from 'react'
import "../css/CheuffeurDrive/bottomSection.css"
import { useNavigate, useParams } from 'react-router-dom'
import CheuffeurTopSection from './TopSection'
import "../css/CheuffeurDrive/fleetDetail.css"
import { useDispatch, useSelector } from 'react-redux'
import {  getCarById, getFleetById } from '../../redux/actions/CheuffeurDrive.action'; 
import { Image, Select, useMediaQuery } from '@chakra-ui/react'
const locations = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Surat',
  ];
const FleetDetail = () => {
    const {fleetType,id} = useParams()
    console.log(fleetType)
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const {cars} = useSelector((state)=>state.data)

    const [selectedLocation, setSelectedLocation] = useState('');
    const isMobile = useMediaQuery('(max-width: 768px)'); 
    
    const handleLocationChange = (e) => setSelectedLocation(e.target.value);
    

    useEffect(() => {
        dispatch(getFleetById(id))
    }, [dispatch,id]);
    console.log(cars.cars)

    const handleBookNow = (fleetId, carId) => {
      dispatch(getCarById(id, carId));
      navigate(`/cheuffeurdrive/${fleetType}/${id}/car/${carId}`); 
    };
    
   
  return (
    <div>
      {cars.cars && (
        <>
         <CheuffeurTopSection/>
      
      <div className="btm_Sec">
        <div className="inner_left">
            <div className="inner_Select">

        <Select
        placeholder="Select location"
        variant="outline"
        borderRadius="lg"
        m={'auto'}
         size={isMobile ? 'sm' : "xl"}
        onChange={handleLocationChange}
        >
        {locations.map((location) => (
            <option key={location}>{location}</option>
            ))}
      </Select>
            </div>
        </div>
        <div className="inner_right ">
            <div className="right_cont">
                {
                    cars.cars.map((data)=>(
                        
                        <div key={data._id} className="single_cont">
                            <div className="img_sec">
                            {console.log(data.properties.hours4_40kms)}
                                <Image src={data.properties.img} maxW={'10rem'}/>
                            </div>
                         
              <div className="specification_sec">
                {/* Render your specification content here */}
                <p className="carName">{data.carName}</p>
                <div className="Single_car_details">
                  <ul className='list_cont'>
                    <li>4 Hours/40kms: {data.properties.hours4_40kms}</li>
                    <li>8 Hours/80kms:{data.properties.hours8_80kms}</li>
                    <li>Ext hour beyond 8Hr:{data.properties.extraHourBeyond8hr}</li>
                    <li>Ext hour beyond 8okms:{data.properties.extraHourBeyond80kms}</li>
                  </ul>
                  <ul className='list_cont'>
                  <li>Driver Bhatta: {data.properties.driverBhatta}</li>
                    <li>InterCity Minimum kms/Day:{data.properties.InterCityMinimumkmsPerDay}</li>
                    <li>InterCity Minimum kms/km:{data.properties.InterCityMinimumKmsPerkm}</li>
                    <li>Driver Bhatta/Km:{data.properties.driverBhattaPerKm}</li>
                  </ul>
                </div>
              </div>
           
                            
                            <div className="price_sec">
                                <p className="hourly">Hourly pack</p> <br />
                                <p className="hour">{data.properties.hours4_40kms} Rs</p>
                                <button onClick={()=>handleBookNow(id,data._id)} className='book_btn'>Book Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
        </>
      )
              }
    </div>
  )
}

export default FleetDetail


{/* <div className="menu_cont" key={data.id}>
<img src={data.properties.img} alt={data.type} />
<p className="type_text">{data.carName}</p>
<p  className="explore" style={{textDecoration:'underline'}}>Explore</p>
</div> */}




