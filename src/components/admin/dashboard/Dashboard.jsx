import { PiPoliceCarDuotone, PiSteeringWheelFill } from "react-icons/pi";
import "./dashboard.css";

import { AiOutlineUser } from "react-icons/ai";
import SingleCard from "../../reusables/SingleCard";
import MileChart from "../../../charts/MileChart";
import CarStats from "../../../charts/CarStats";
import Recommend from "../../reusables/Recommend";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotalCars, getTotalFleets } from "../../../redux/actions/CheuffeurDrive.action";

export default function Dashboard() {
  const dispatch = useDispatch();
  const {totalFleets,totalCars} = useSelector(state=>state.data)

  useEffect(() => {
    dispatch(getTotalFleets())
    dispatch(getTotalCars())
  }, [dispatch]);
  
  const carObject = {
    title: "Total Fleets",
    totalNumber: totalFleets,
    icon: <PiPoliceCarDuotone />,
  };
  const dailytrips = {
    title: "Total Cars",
    totalNumber: totalCars,
    icon: <PiSteeringWheelFill />,
  };
  const ClientObj = {
    title: "Client Annually",
    totalNumber: "85k+",
    icon: <AiOutlineUser />,
  };
  const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2167,
    icon: <PiPoliceCarDuotone />,
  };
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <SingleCard item={carObject} />
          <SingleCard item={dailytrips} />
          <SingleCard item={ClientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats_title">Miles Statistics</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3 className="stats_title">Car Statistics</h3>
            <CarStats />
          </div>
        </div>
        <Recommend/>
      </div>
    </div>
  );
}
