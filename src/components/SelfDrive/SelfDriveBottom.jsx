/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "../css/CheuffeurDrive/bottomSection.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSelfCars, getSelfFleetById } from "../../redux/actions/SelfDrive.action";
import Loader from "../designs/Loader";
import { debounce } from "lodash";
import { Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const FleetItem = React.memo(function FleetItem({ data, onClick }) {
  return (
    <div className="menu_cont">
      <img src={data.fleetImg} alt="" loading="lazy" />
      <div className="fleet_img"></div>
      <p className="type_text">{data.fleetType}</p>
      <p className="explore" onClick={onClick}>
        Explore
      </p>
    </div>
  );
});

const BottomSection = () => {
  const dispatch = useDispatch();
  const { fleets, loading } = useSelector((state) => state.selfData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllSelfCars());
  }, [dispatch]);

  const debouncedClick = React.useMemo(() => {
    return debounce((link, id) => {
      dispatch(getSelfFleetById(id));
      navigate(`/selfdrive/${link}`);
    }, 300);
  }, [dispatch, navigate]);

  const handleClick = (link, id) => {
    debouncedClick(link, id);
  };

  return (
    <div className="btm_container" >
      {/* <p className="head_text">our Self Drive collections</p> */}
      {/* <div className="self_btm">
        <p className="desc_text">
          Driving your dreams to reality with an exquisite fleet of versatile
          vehicles for unforgettable journeys.
        </p>
      </div> */}
      <div className="cheuffer_menu" >
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VStack
                key={index}
                spacing="4"
                p="2.5rem"
                className="menu_cont"
                align="start"
              >
                <Skeleton height="200px" width="100%" />
                <SkeletonText mt="4" noOfLines={2} spacing="4" width="100%" />
                <Skeleton height="20px" width="60px" />
              </VStack>
            ))
          : fleets &&
            fleets.map((data) => (
              <FleetItem
                key={data._id}
                data={data}
                onClick={() =>
                  handleClick(`${data.fleetType}/${data._id}`, data._id)
                }
              />
            ))}
      </div>
    </div>
  );
};

export default BottomSection;
