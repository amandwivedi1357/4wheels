import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CheuffeurDrive from "../pages/CheuffeurDrive"
import Services from "../pages/Services"
import AboutUs from "../pages/AboutUs"
import Gallery from "../pages/Gallery"

const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cheuffeurdrive' element={<CheuffeurDrive />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
       
        
      </Routes>
    )
  }
  
  export default AllRoutes
