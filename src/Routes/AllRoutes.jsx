import { Route, Routes } from "react-router-dom"
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


const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cheuffeurdrive' element={<CheuffeurDrive />} />
        
        <Route path='/selfdrive' element={<SelfDrive />} />
        <Route path='/aman' element={<Admin />} /> 
        <Route path='/cheuffeurdrive/:fleetType/:id/car/:carId' element={<SingleCarBook topic = {'cheuffeur'}/>} />
        <Route path='/cheuffeurdrive/:fleetType/:id' element={<FleetDetail />} />
        <Route path='/selfdrive/:fleetType/:id/car/:carId' element={<SingleSelfCarBook topic = {'self'}/>} />
        <Route path='/selfdrive/:fleetType/:id' element={<FleetSelfDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
       
        
      </Routes>
    )
  }
  
  export default AllRoutes
