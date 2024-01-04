import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllSelfCars,
  getSelfFleetById,
} from "../../redux/actions/SelfDrive.action";

const BottomSection = () => {
  const dispatch = useDispatch();
  const { fleets } = useSelector((state) => state.selfData);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllSelfCars());
  }, [dispatch]);

  console.log(fleets);
  const handleClick = (link, id) => {
    dispatch(getSelfFleetById(id));
    navigate(`/selfdrive/${link}`);
  };
  return (
    <div className="btm_container">
      <p className="head_text">our Self Drive collections</p>
      <p className="desc_text">
        Driving your dreams to reality with an exquisite fleet of versatile
        vehicles for unforgettable journeys.
      </p>
      <div className="cheuffer_menu">
        {
        fleets && 
        fleets.map((data) => (
          <>
          <div key={data._id} className="menu_cont">
            <img src={data.fleetImg} alt="" />
            <div className="fleet_img"></div>
            <p className="type_text" key={data._id}>
              {data.fleetType}
            </p>
            <p
              onClick={() =>
                handleClick(`${data.fleetType}/${data._id}`, data._id)
              }
              className="explore"
              style={{ textDecoration: "underline" }}
            >
              Explore
            </p>
          </div>
          </>
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
