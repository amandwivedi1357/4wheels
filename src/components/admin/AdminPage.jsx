
import "./AdminPage.css"
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";

import { useState } from "react";
import AddCars from "./Details/AddCars";
import UserData from "./UserData/UserData";
import AddCarsToFleet from "./AddCars/AddCarsToFleet";

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
            case 3:
              return <UserData/>
            case 4: 
            return <AddCarsToFleet/>
            default:
                return null;
        }
    };
  
  return (
    <div className='admin_cont'>
      <Sidebar handleTabChange={handleTabChange} />
      <div className="btm_cont">
      
      <div className="right-content">{renderComponent()}</div>
      </div>
    </div>
  )
}
