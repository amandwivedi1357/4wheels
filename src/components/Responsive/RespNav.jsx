// RespNav.jsx
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RespNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    onClose();
    navigate(route);
  };

  return (
    <div>
      <div className="ham">
        <GiHamburgerMenu
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          color="#031B4E"
          size={"1.5rem"}
        />
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <div className="drawer-link" onClick={() => handleNavigate("/")}>
              Home
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/about-us")}>
              About Us
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/cheuffeurdrive")}>
              Chauffeur Drive
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/selfdrive")}>
              Self Drive
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/gallery")}>
              Gallery
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/faq")}>
              FAQs
            </div>
            <div className="drawer-link" onClick={() => handleNavigate("/contact-us")}>
              Contact us
            </div>
            {/* Add more items as needed */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
