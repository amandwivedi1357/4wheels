import Topnav from "./TopNav/Topnav";
import "./AdminPage.css"
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Booking from "./booking/Booking";
import { useState } from "react";

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState(1);

    const handleTabChange = (tabNum) => {
        setSelectedTab(tabNum);
    };

    // Function to render component based on the selected tab
    const renderComponent = () => {
        switch (selectedTab) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Booking />;
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
