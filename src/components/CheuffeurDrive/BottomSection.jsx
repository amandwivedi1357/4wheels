import{ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, getFleetById } from "../../redux/actions/CheuffeurDrive.action";

import {
  Skeleton,
  SkeletonText,
  
  VStack,
  
} from "@chakra-ui/react";
import "../css/CheuffeurDrive/bottomSection.css";

const BottomSection = () => {
  const dispatch = useDispatch();
  const { fleets, loading } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const handleClick = (link, id) => {
    dispatch(getFleetById(id));
    navigate(`/cheuffeurdrive/${link}`);
  };

  return (
    <div className="btm_container">
      {/* <p className="head_text">our Chauffeur collections</p> */}
      {/* <p className="desc_text">
        Driving your dreams to reality with an exquisite fleet of versatile
        vehicles for unforgettable journeys.
      </p> */}
      <div className="cheuffer_menu">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
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
          : fleets?.map((data) => (
              <div key={data._id} style={{ paddingBottom: '2.5rem' }} className="menu_cont">
                <img src={data.fleetImg} alt="" loading="lazy" />
                <div className="fleet_img"></div>
                <p className="type_text" key={data._id}>
                  {data.fleetType}
                </p>
                <p
                  className="explore"
                  onClick={() => handleClick(`${data.fleetType}/${data._id}`, data._id)}
                >
                  Explore
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default BottomSection;
