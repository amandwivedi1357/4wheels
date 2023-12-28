import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CheuffeurDrive from "../pages/CheuffeurDrive"
import Services from "../pages/Services"
import AboutUs from "../pages/AboutUs"
import Gallery from "../pages/Gallery"
import SelfDrive from "../pages/SelfDrive"
import SelfHatchbag from "../components/SelfDrive/SelfHatchbag"
import Admin from "../pages/Admin"
import FleetDetail from "../components/CheuffeurDrive/FleetDetail"
import SingleCarBook from "../components/SingleCar/SingleCarBook"


const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cheuffeurdrive' element={<CheuffeurDrive />} />
        <Route path='/self' element={<SelfHatchbag />} />
        <Route path='/selfdrive' element={<SelfDrive />} />
        <Route path='/admin' element={<Admin />} /> 
        <Route path='/cheuffeurdrive/:fleetType/:id/car/:carId' element={<SingleCarBook topic = {'cheuffeur'}/>} />
        <Route path='/cheuffeurdrive/:fleetType/:id' element={<FleetDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
       
        
      </Routes>
    )
  }
  
  export default AllRoutes
