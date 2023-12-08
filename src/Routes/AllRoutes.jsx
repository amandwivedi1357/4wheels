import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CheuffeurDrive from "../pages/CheuffeurDrive"

const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cheuffeurdrive' element={<CheuffeurDrive />} />
        
      </Routes>
    )
  }
  
  export default AllRoutes
