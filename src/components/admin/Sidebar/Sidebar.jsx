

import { useState } from "react";
import Links from "../dummy";
import "./Sidebar.css"
export default function Sidebar({handleTabChange}) {
    const [activeTab,setActiveTab] = useState(1);

    const handleTabClick = (tabNum) => {
        handleTabChange(tabNum);
        setActiveTab(tabNum)
    };
  return (
    <div className="sidebar">
      <div className="innerSide">
        {
            Links.map((item,idx)=>(
                <div key={idx}  className={`tabs ${activeTab === item.tabNum ? 'active' : ''}`}  onClick={() => handleTabClick(item.tabNum)}>
                    <h4>{item.display}</h4>
                </div>
            ))
        }
      </div>
    </div>
  )
}
