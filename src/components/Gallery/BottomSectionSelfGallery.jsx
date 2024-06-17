import "../css/Gallery/BottomSec.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import { Box, Button, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getAllSelfCars } from "../../redux/actions/SelfDrive.action";

const BottomSectionSelfGallery = () => {
  const { fleets, loading } = useSelector((state) => state.selfData);
  const dispatch = useDispatch();
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllSelfCars());
  
  }, [dispatch]);

  const handleFleets = (fleet) => {
    setSelectedFleet(fleet);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const fleetButtonSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="Btm_cont1">
      <p className="head_text">Our Self Drive Collection</p>
      <div className="fleetButtonSlider">
        {loading ? (
          // Skeleton for fleet buttons
          [...Array(6)].map((_, idx) => (
            <Skeleton key={idx} height="40px" width="100px" borderRadius="20px" m="5px" />
          ))
        ) : (
          fleets.map((item, idx) => (
            <button
              key={idx}
              className="fleetBtn"
              onClick={() => handleFleets(item)}
            >
              {item.fleetType}
            </button>
          ))
        )}
      </div>

      {loading ? (
        // Skeleton for images
        <div className="imageSlider">
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} height="200px" width="100%" borderRadius="10px" m="10px" />
          ))}
        </div>
      ) : (
        selectedFleet && (
          <Slider {...imageSliderSettings} className="imageSlider">
            {selectedFleet.cars.map((car, idx) => (
              <div key={idx} className="carImageContainer">
                <img
                  src={car.properties.img.trim()}
                  alt={car.carName}
                  className="carImage"
                  onClick={() => handleImageClick(car.properties.img.trim())}
                />
              </div>
            ))}
          </Slider>
        )
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <img src={selectedImage} alt="Selected Car" className="popupImage" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BottomSectionSelfGallery;
