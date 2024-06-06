import "../css/Gallery/BottomSec.css";
import { useDispatch, useSelector } from 'react-redux';
import carImg from "../../assets/cheuffeur-menu-cars/galleryimg.png";
import { useEffect } from "react";
import { getAllCars } from "../../redux/actions/CheuffeurDrive.action";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const imgData = [
  {
    id: 1,
    img: carImg
  },
  {
    id: 2,
    img: carImg
  },
];

const BottomSectionGallery = () => {
  const { fleets, loading } = useSelector((state) => state.data); // Assume `loading` is part of your state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div className="Btm_cont1">
      <div className="Btm_cont">
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <Box key={index} className="single_cont">
              <Skeleton height="200px" />
              {/* <SkeletonText mt="4" noOfLines={2} spacing="4" /> */}
            </Box>
          ))
        ) : (
          fleets.map((data) => (
            <div key={data.id} className="single_cont">
              <img src={data.fleetImg} alt="" />
              <div className="overlay">
                <p className="desc_text">{data.fleetType}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BottomSectionGallery;
