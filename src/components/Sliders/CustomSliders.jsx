import { useEffect, useState } from "react";
import { getAllSelfCars } from "../../redux/actions/SelfDrive.action";
import { useDispatch, useSelector } from "react-redux";
import "./custom.css";
import { useNavigate } from "react-router-dom";
import {
    getAllCars,
  } from "../../redux/actions/CheuffeurDrive.action";

export default function CustomSliders() {
  const dispatch = useDispatch();
  const { fleets, loading } = useSelector((state) => state.data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
    const navigate = useNavigate()
  useEffect(() => {
    dispatch(getAllCars());
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === fleets.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [dispatch, fleets.length]);

  const handleClick = (id,fleetType)=>{
    navigate(`/Cheuffeurdrive/${fleetType}/${id}`)
  }



  return (
    <div className="slider-container">
      <div className={`slider-wrapper ${isMobile ? 'mobile' : ''}`} style={{ transform: `translateX(-${currentSlide * (isMobile ? 100 : 33.33)}%)` }}>
        {fleets.map((fleet, index) => (
          <div key={fleet._id} className="slider-item" onClick={()=>handleClick(fleet._id,fleet.fleetType.toLowerCase())}>
            <img src={fleet.fleetImg} alt={fleet.fleetType} />
            <p>{fleet.fleetType}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
