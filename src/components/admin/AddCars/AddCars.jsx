import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../../redux/actions/CheuffeurDrive.action'; 
import "./AddCars.css"
const AddCar = () => {
 const dispatch = useDispatch();
 const { loading, error, cars,fleets } = useSelector((state) => state.data); 
  
 useEffect(() => {
  
  dispatch(getAllCars());
   
 }, [dispatch]);
  
 return (
  <div className='table_container'>

    <div className='table_head'>
      <p className="heading">car name</p>
      <p className="heading">fleet name</p>
      <p className="heading">Car Image</p>
      {/* <p className='heading'>Delete</p> */}
    </div>
  {cars.map((data)=>(
   data.cars.map((el)=>(

    <div className='display_flex' key={data._id}>
    <p key={el._id}>
    {el.carName}
    </p>
    <p >{data.fleetType}</p>
    <div className='img_cont'>

    <img src={el.properties.img} alt={el.carName} className="car_img" />
    </div>
    </div>
    ))
  ))} 
  </div>
 );
};
export default AddCar