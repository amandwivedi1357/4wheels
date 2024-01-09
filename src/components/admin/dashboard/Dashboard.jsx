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
import { getTotalSelfCars, getTotalSelfFleets } from "../../../redux/actions/SelfDrive.action";


export default function Dashboard() {
  const dispatch = useDispatch();
  const {totalFleets,totalCars} = useSelector(state=>state.data)
  const {totalSelfFleets,totalSelfCars} = useSelector(state=>state.selfData)

  useEffect(() => {
    dispatch(getTotalFleets())
    dispatch(getTotalCars())
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getTotalSelfFleets())
    dispatch(getTotalSelfCars())
  }, [dispatch]);
  console.log(totalSelfFleets,totalSelfCars)
  const carObject = {
    title: "Total Fleets in Cheuffeur Drive",
    totalNumber: totalFleets,
    icon: <PiPoliceCarDuotone />,
  };
  const dailytrips = {
    title: "Total Cars in Cheuffeur Drive",
    totalNumber: totalCars,
    icon: <PiSteeringWheelFill />,
  };
  const ClientObj = {
    title: "Total Fleets in Self Drive",
    totalNumber: totalSelfFleets,
    icon: <AiOutlineUser />,
  };
  const distanceObj = {
    title: "Total Cars in Self Drive",
    totalNumber: totalSelfCars,
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
