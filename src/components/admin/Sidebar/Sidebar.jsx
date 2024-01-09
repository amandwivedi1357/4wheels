/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import Links from "../dummy";
import "./Sidebar.css"
import RespSideBar from "./RespSideBar";
export default function Sidebar({handleTabChange}) {
    const [activeTab,setActiveTab] = useState(1);
    const [screenSize, setScreenSize] = useState(window.innerWidth); // Initial screen width

    const handleTabClick = (tabNum) => {
        handleTabChange(tabNum);
        setActiveTab(tabNum)
    };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    {screenSize <= 767 ? (
      <div className="hamb"> 
      <RespSideBar handleTabChange = {handleTabChange}/>
      </div>
    ) : (
      <div className="sidebar">
        <div className="innerSide">
          {Links.map((item, idx) => (
            <div
              key={idx}
              className={`tabs ${activeTab === item.tabNum ? 'active' : ''}`}
              onClick={() => handleTabClick(item.tabNum)}
            >
              <h4>{item.display}</h4>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
  )
}
