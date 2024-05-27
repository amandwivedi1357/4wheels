import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../designs/Loader';
import "./Single_self.css"
import TopSectionServe from '../Services/TopSectionServe';
import Footer from '../Footer';
import { getCarById } from '../../redux/actions/CheuffeurDrive.action';
export default function Single_Cheauffeur() {
    const navigate = useNavigate()
    const { fleetType, id, carId } = useParams();
    
  const dispatch = useDispatch();
 

  const { cars,loading,error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCarById(id,carId))
  }, [dispatch,id,carId]);

  console.log(cars)

  const dataToSend = {
    id:id,
    carId:carId,
    fleetType:fleetType,
    service:'Chauffeur Drive'
}

  const handleButtonClick = () => {
    
    console.log('Navigating with data:', dataToSend);
    navigate(`/form-booking`, { state: dataToSend });
    return <div>Navigating with data: {dataToSend.fleetType}</div>
  };
  

  if (loading) {
    return <div><Loader/></div>;
  }
  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }
  return (
    <div>
        {/* {dataToSend.carId} */}
        
      <TopSectionServe topic={"Chauffaur Drive"} subTopic={fleetType} />
      {
        cars && cars.properties && (
            <>
            <div className="head_cont">
          <p className="head_text">{fleetType}</p>
          <p className="desc_text book_desc">
            Driving your dreams to reality with an exquisite fleet of versatile
            vehicles for unforgettable journeys.
          </p>
        </div>

        <div className="mobile_single_self_container">
            <div className="inner_top_div">
                <div className="detail_div">
                    <p className='carName'>{cars.carName}</p>
                    <p className="hourly">Hourly pack</p>
                    <p className="pricee">{cars.properties.hours4_40kms} Rs</p>
                    </div>
                <div className="img_div">
                    <img src={cars.properties.img} alt="" />
                </div>
            </div>
            <div className="main_Details_div">
               <ul>
                <li>4 hrs/40kms : <span className='props'>{cars.properties.hours4_40kms}</span></li>
                <li>8 hrs/80kms : <span className='props'>{cars.properties.hours8_80kms}</span></li>
                <li>Ext.hr/beyond 8Hr : <span className='props'>{cars.properties.extraHourBeyond80kms}</span></li>
                <li>Ext.hr/beyond 8okms: <span className='props'>{cars.properties.extraHourBeyond8hr}</span></li>
               </ul>
               <ul>
                <li>Driver Allowance : <span className='props'>{cars.properties.InterCityMinimumKmsPerkm}</span></li>
                <li>InterCity Mini kms/Day : <span className='props'>{cars.properties.InterCityMinimumkmsPerDay}</span></li>
                <li>Per kilometer: <span className='props'>{cars.properties.driverBhatta}</span></li>
                <li>Driver Allowance : <span className='props'>{cars.properties.driverBhattaPerKm}</span></li>
               </ul>
              </div>
              <div className='rent_btn_cont'>

              <button className='rent_btn' onClick={()=>handleButtonClick(fleetType,)}>
                Rent Now
              </button>
              </div>
        </div>
            </>
        )
      } 
      <Footer/>
    </div>
  )
}


// <ul className="list_cont">
// <li className="listItem">
//   <span className="bold_props">Hourly Pack :</span>
//   <span className="normal_props">{cars.properties.hourlyPack}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">Alloted KMs :</span>
//   <span className="normal_props">{cars.properties.allotedKMs}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">Zero Mileage :</span>
//   <span className="normal_props">{cars.properties.zeroMileage}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">per KM:</span>
//   <span className="normal_props">{cars.properties.perKM}</span>
// </li>
// </ul>
// <ul className="list_cont">
// <li className="listItem">
//   <span className="bold_props">FUP Pack(350KM) :</span>
//   <span className="normal_props">{cars.properties.fupPack}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">True Unlimited :</span>
//   <span className="normal_props">{cars.properties.trueUnlimited}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">Security Deposit :</span>
//   <span className="normal_props">{cars.properties.securityDeposit}</span>
// </li>
// <li className="listItem">
//   <span className="bold_props">Fuel Type :</span>
//   <span className="normal_props">{cars.properties.fuelType}</span>
// </li>
// </ul>
