import "../css/Gallery/BottomSec.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import { getAllCars } from "../../redux/actions/CheuffeurDrive.action";
import { Box, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure, Skeleton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BottomSectionGallery = () => {
  const fleetSliderRef = useRef(null);
  const { fleets, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [btnClicked, setBtnClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showImages, setShowImages] = useState(false);
  const [activeFleet, setActiveFleet] = useState(null); // New state to track active fleet button
  const sliderRef = useRef(null);
  
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const handleFleets = (fleet) => {
    setBtnClicked(true);
    setShowImages(false);
    setActiveFleet(fleet); // Set the active fleet
    setTimeout(() => {
      setSelectedFleet(fleet);
      setShowImages(true);
    }, 1000);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const imageSliderSettings = {
    dots: false,
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
    ],
    beforeChange: (current, next) => setActiveIndex(next)
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextFleetSlide = () => {
    if (fleetSliderRef.current) {
      fleetSliderRef.current.slickNext();
    }
  };

  const prevFleetSlide = () => {
    if (fleetSliderRef.current) {
      fleetSliderRef.current.slickPrev();
    }
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

  return (
    <div className="Btm_cont1">
      <p className="head_text">Our Collections</p>
      <div className="fleetButtonSlider">
        <Slider {...fleetButtonSliderSettings} ref={fleetSliderRef}>
          {loading ? (
            [...Array(6)].map((_, idx) => (
              <Skeleton key={idx} height="40px" width="100px" borderRadius="20px" m="5px" />
            ))
          ) : (
            fleets.map((item, idx) => (
              <div key={idx} className="fleetBtn_cont">
                <button
                  className={`fleetBtn ${activeFleet === item ? 'active' : ''}`} // Apply active class if this is the active fleet
                  onClick={() => handleFleets(item)}
                >
                  {item.fleetType}
                </button>
              </div>
            ))
          )}
        </Slider>
        <div className="fleetSlider-navigation-buttons">
          <div className="fleetSlider-nav-button " onClick={prevFleetSlide}>Back</div>
          <div className="fleetSlider-nav-button " onClick={nextFleetSlide}>Next</div>
        </div>
      </div>
      
      {loading ? (
        <div className="imageSlider">
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} height="200px" width="100%" borderRadius="10px" m="10px" />
          ))}
        </div>
      ) : (
        selectedFleet && (
          <div>
            {!showImages ? (
              <div className="imageSlider" style={{gap:'20px'}}>
                {[...Array(3)].map((_, idx) => (
                  <Box key={idx} height="200px" width="100%" borderRadius="10px" m="10px" display="flex" alignItems="center" justifyContent="center" bg="gray.200">
                    <p>Loading...</p>
                  </Box>
                ))}
              </div>
            ) : (
              <div>
              <div  className="imageSlider">
                {selectedFleet.cars.map((car, idx) => (
                  <div key={idx} className="carImageContainer">
                    <div className="carImageWrapper">
                      <img
                        src={car.properties.img.trim()}
                        alt={car.carName}
                        className="carImage"
                        onClick={() => handleImageClick(car.properties.img.trim())}
                      />
                      <p className="desc_text">{car.carName}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Slider {...imageSliderSettings} ref={sliderRef}  className="imageSlider_mob">
                {selectedFleet.cars.map((car, idx) => (
                  <div key={idx} className="carImageContainer">
                    <div className="carImageWrapper">
                      <img
                        src={car.properties.img.trim()}
                        alt={car.carName}
                        className="carImage"
                        onClick={() => handleImageClick(car.properties.img.trim())}
                      />
                      <p className="desc_text">{car.carName}</p>
                    </div>
                  </div>
                ))}
              </Slider>
              </div>
            )}
          </div>
        )
      )}
      {btnClicked && (
        <div className="navigation-buttons">
          <div className="nav-button" onClick={prevSlide}>Back</div>
          <div className="nav-button" onClick={nextSlide}>Next</div>
        </div>
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

export default BottomSectionGallery;
