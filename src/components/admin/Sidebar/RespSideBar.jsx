import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,  useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import Links from "../dummy"
import { GiHamburgerMenu } from "react-icons/gi";
export default function RespSideBar({handleTabChange}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [activeTab,setActiveTab] = useState(1);
    const handleTabClick = (tabNum) => {
        handleTabChange(tabNum);
        setActiveTab(tabNum)
        onClose()
    };
    return (
      <>
        <Box ref={btnRef} bg={'transparent'} onClick={onOpen}>
        <GiHamburgerMenu color="#fff"/>
        </Box>
        <Drawer
        
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={'blue.900'}>
            <DrawerCloseButton />
            <DrawerHeader>4 wheels</DrawerHeader>
  
            <DrawerBody>
            {Links.map((item, idx) => (
            <div
              key={idx}
              className={`tabs ${activeTab === item.tabNum ? 'active' : ''}`}
              onClick={() => handleTabClick(item.tabNum)}
            >
              <h4>{item.display}</h4>
            </div>
          ))}
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }