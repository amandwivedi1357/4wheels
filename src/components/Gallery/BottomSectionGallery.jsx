
import "../css/Gallery/BottomSec.css"
import {useDispatch, useSelector} from 'react-redux'
import carImg from "../../assets/cheuffeur-menu-cars/galleryimg.png"
import { useEffect } from "react"
import { getAllCars } from "../../redux/actions/CheuffeurDrive.action"
const imgData = [
    {
        id:1,
        img:carImg
    },
    {
        id:2,
        img:carImg
    },
]
const BottomSectionGallery = () => {
  const {fleets} = useSelector((state)=>state.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch]);
console.log(fleets)
  return (
    <div className="Btm_cont1">
      {/* <p className="head_text">Gallery</p> */}
      
      <div className="Btm_cont">

      {fleets.map((data)=>(
        <div  key={data.id} className="single_cont">
            <img src={data.fleetImg} alt="" />
            <div className="overlay">
            <p className="desc_text">{data.fleetType}</p>
            </div>
              
        </div>
      ))}
      </div>
    </div>
  )
}

export default BottomSectionGallery
