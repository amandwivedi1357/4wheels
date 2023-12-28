import Topnav from "./TopNav/Topnav";
import "./AdminPage.css"
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";

import { useState } from "react";
import AddCars from "./AddCars/AddCars";

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState(1);

    const handleTabChange = (tabNum) => {
        setSelectedTab(tabNum);
    };

    
    const renderComponent = () => {
        switch (selectedTab) {
            case 1:
                return <Dashboard />;
            case 2:
                return <AddCars />;
            default:
                return null;
        }
    };
  
  return (
    <div className='admin_cont'>
      <Topnav/>
      <div className="btm_cont">
      <Sidebar handleTabChange={handleTabChange} />
      <div className="right-content">{renderComponent()}</div>
      </div>
    </div>
  )
}
