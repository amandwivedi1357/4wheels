import SelfTop from "./SelfTop"
import "../css/CheuffeurDrive/fleetDetail.css"
import { Icon, IconButton, Image, Select, useBreakpointValue, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react";
import { demoData } from "../../demo";
const locations = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Surat',
  ];
  
const SelfHatchbag = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const isMobile = useMediaQuery('(max-width: 768px)'); 
    
    const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  return (
    <div >
      <SelfTop/>
      <div className="btm_Sec">
        <div className="inner_left">
            <div className="inner_Select">

        <Select
        placeholder="Select location"
        variant="outline"
        borderRadius="lg"
        m={'auto'}
        size={isMobile ? 'sm' : "xl"}
        onChange={handleLocationChange}
        >
        {locations.map((location) => (
            <option key={location}>{location}</option>
            ))}
      </Select>
            </div>
        </div>
        <div className="inner_right">
            <div className="right_cont">
                {
                    demoData.map((data)=>(
                        <div key={data.fuel_type} className="single_cont">
                            <div className="img_sec">
                                <Image src={data.img} maxW={'10rem'}/>
                            </div>
                         
              <div className="specification_sec">
                {/* Render your specification content here */}
              </div>
           
                            
                            <div className="price_sec">
                                <p className="hourly">Hourly pack</p> <br />
                                <p className="hourly">{data.Hourly_pack}</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SelfHatchbag
