import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "../pages/Home"
import CheuffeurDrive from "../pages/CheuffeurDrive"
import Services from "../pages/Services"
import AboutUs from "../pages/AboutUs"
import Gallery from "../pages/Gallery"
import SelfDrive from "../pages/SelfDrive"

import Admin from "../pages/Admin"
import FleetDetail from "../components/CheuffeurDrive/FleetDetail"
import SingleCarBook from "../components/SingleCar/SingleCarBook"
import FleetSelfDetail from "../components/SelfDrive/FleetSelfDetail"
import SingleSelfCarBook from "../components/SingleCar/SingleSelfCarBook"
import AdminPage from "../components/admin/AdminPage"
import Faq from "../pages/Faq"
 import Login from "../components/Login/Login"

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Page not found.</h1>
      <p style={styles.message}>Sorry, the page you are looking for might be unavailable or does not exist.</p>
      <button style={styles.button} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};
const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cheuffeurdrive' element={<CheuffeurDrive />} />
        
        <Route path='/selfdrive' element={<SelfDrive />} />
        <Route path='/admin' element={<AdminPage />} /> 
        <Route path='/cheuffeurdrive/:fleetType/:id/car/:carId' element={<SingleCarBook topic = {'cheuffeur'}/>} />
        <Route path='/cheuffeurdrive/:fleetType/:id' element={<FleetDetail />} />
        <Route path='/selfdrive/:fleetType/:id/car/:carId' element={<SingleSelfCarBook topic = {'self'}/>} />
        <Route path='/selfdrive/:fleetType/:id' element={<FleetSelfDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/faq' element={<Faq />} />
         <Route path='/login' element={<Login />} /> 

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    )
  }
  
  export default AllRoutes
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "100px",
    },
    heading: {
      fontSize: "2em",
      color: "#333",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.2em",
      color: "#555",
      marginBottom: "40px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1em",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };