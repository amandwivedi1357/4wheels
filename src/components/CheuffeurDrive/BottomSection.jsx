import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllCars,
  getFleetById,
} from "../../redux/actions/CheuffeurDrive.action";
import Loader from "../designs/Loader";

const BottomSection = () => {
  const dispatch = useDispatch();
  const { fleets,loading } = useSelector((state) => state.data);

  const navigate = useNavigate();

  
  
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  console.log(fleets);
  const handleClick = (link, id) => {
    dispatch(getFleetById(id));
    navigate(`/cheuffeurdrive/${link}`);
  };
  if(loading){
    return <Loader/>
  }
  return (
    <div className="btm_container">
      <p className="head_text">our Chauffeur collections</p>
      <p className="desc_text">
        Driving your dreams to reality with an exquisite fleet of versatile
        vehicles for unforgettable journeys.
      </p>
      <div className="cheuffer_menu">
        {fleets?.map((data) => (
          <div key={data._id} className="menu_cont">
            <img src={data.fleetImg} alt="" />
            <div className="fleet_img"></div>
            <p className="type_text" key={data._id}>
              {data.fleetType}
            </p>
            {/* <button
              onClick={() =>
                handleClick(`${data.fleetType}/${data._id}`, data._id)
              }
              className="explore"
            >
              Explore
            </button> */}
            <button  onClick={() =>
                handleClick(`${data.fleetType}/${data._id}`, data._id)
              } className="btn">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span className="text">Explore</span>
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSection;
{
  /* <div className="menu_cont" key={data.id}>
                    <img src={data.img} alt={data.type} />
                    <p className="type_text">{data.type}</p>
                    <p onClick={()=>handleClick(data.type)} className="explore" style={{textDecoration:'underline'}}>Explore</p>
                </div> */
}
