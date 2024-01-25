import { useEffect, useState } from 'react'
import "../css/CheuffeurDrive/bottomSection.css"
import { useNavigate, useParams } from 'react-router-dom'
import CheuffeurTopSection from '../CheuffeurDrive/TopSection'
import "../css/CheuffeurDrive/fleetDetail.css"
import { useDispatch, useSelector } from 'react-redux'
import {  getAllSelfCars, getSelfCarById, getSelfFleetById } from '../../redux/actions/SelfDrive.action'; 
import { Image, Select, useMediaQuery } from '@chakra-ui/react'
import Footer from '../Footer'
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
const FleetSelfDetail = () => {
  const [localCars,setLocalCars] = useState({ cars: [] })
  const [localFleets,setLocalFleets] = useState({fleets:[]})
    const {fleetType,id} = useParams()
    console.log(fleetType)
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const {cars} = useSelector((state)=>state.selfData)
    const {fleets} = useSelector((state)=>state.selfData)
    const [selectedLocation, setSelectedLocation] = useState('');
    const isMobile = useMediaQuery('(max-width: 768px)'); 
    const [selectedFleet, setSelectedFleet] = useState(null);
    const handleLocationChange = (e) => setSelectedLocation(e.target.value);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);
    

    useEffect(() => {
      setLocalCars(cars)
      setLocalFleets(fleets)
    }, [cars,fleets]);


    useEffect(() => {
      dispatch(getAllSelfCars())
        dispatch(getSelfFleetById(id,currentPage,limit))
    }, [dispatch,id,currentPage,limit]);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // Fetch data for the new page number
      dispatch(getSelfFleetById('your_fleet_id', pageNumber, limit));
    };


    const handleCheckboxChange = (fleetName, fleetId) => {
      setSelectedFleet({ fleetName, fleetId });
      navigate(`/selfdrive/${fleetName}/${fleetId}`);
    };

    const handleBookNow = (fleetId, carId) => {
      dispatch(getSelfCarById(id, carId));
      navigate(`/selfdrive/${fleetType}/${id}/car/${carId}`); 
    };
    // console.log(localFleets)
   
  return (
    <div>
      {localCars.cars && (
        <>
         <CheuffeurTopSection topic={'Self Drive'} subTopic={fleetType}/>
      
      <div className="btm_Sec">
        <div className="inner_left">
           
            <div className="fleet_filter">
            <p className="fleet_text">Type of Cars</p>
              {
              
              fleets.map((data)=>(
                <div className='inner_fleetFilter' key={data._id}>
               <div className="inp_check">
                
            <input
              type="checkbox"
              className='checkbox'
              value={data.fleetType}
              onChange={() => handleCheckboxChange(data.fleetType, data._id)}
              checked={selectedFleet && selectedFleet.fleetId === data._id}
              />
              </div> 
              <div className='check_text'>
                <p className="filter_text">{data.fleetType}</p>
              </div>
            </div>
              ))}
            </div>
        </div>
       
        <div className="inner_right ">
            <div className="right_cont">
                {
                    localCars.cars
                    .filter((car) => car.properties.status === 'In Stock')
                    .map((data)=>(
                        
                        <div key={data._id} className="single_cont">
                            <div className="img_sec">
                            {console.log(data.properties.hourlyPack)}
                                <Image className='car_img' src={data.properties.img} maxW={'10rem'}/>
                            </div>
                         
              <div className="specification_sec">
                {/* Render your specification content here */}
                <p className="carName">{data.carName}</p>
                <div className="Single_car_details">
                  <ul className='list_cont' style={{listStyle:'none'}}>
                    <li>Hourly Pack : {data.properties.hourlyPack}</li>
                    <li>Alloted KMS :{data.properties.allotedKMs}</li>
                    <li>Zero Mileage :{data.properties.zeroMileage}</li>
                    <li>Per KM :{data.properties.perKM}</li>
                  </ul>
                  <ul className='list_cont' style={{listStyle:'none'}}>
                  <li>True Unlimited:{data.properties.fupPack}</li>
                    <li>FUP pack:{data.properties.fupPack}</li>
                    <li>Security Deposite:{data.properties.securityDeposit}</li>
                    <li>Fuel Type:{data.properties.fuelType}</li>
                  </ul>
                </div>
              </div>
           
                            
                            <div className="price_sec">
                                <p className="hourly">Hourly pack</p> <br />
                                <p className="hour">{data.properties.hourlyPack} Rs</p>
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
              {/* <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={fleets.length < limit}>
          Next Page
        </button>
      </div> */}
      <Footer/>
    </div>
  )
}

export default FleetSelfDetail


// {/* <div className="menu_cont" key={data.id}>
// <img src={data.properties.img} alt={data.type} />
// <p className="type_text">{data.carName}</p>
// <p  className="explore" style={{textDecoration:'underline'}}>Explore</p>
// </div> */}






