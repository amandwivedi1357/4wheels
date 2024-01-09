

import { useState } from "react";
import "./AddCars.css"
import Cheuffer from "./Cheuffer";
import Self from "./Self";
const AddCar = () => {
  const [selectedOption, setSelectedOption] = useState('selfDrive');

  
 return (
  <div className='table_container'>

    <div className="select_cont">

     <button  className={`self ${selectedOption === 'selfDrive' ? 'active' : ''}`} onClick={() => setSelectedOption('selfDrive')}>Self Drive</button>
      <button className={`cheuffeur ${selectedOption === 'cheuffeurDrive' ? 'active' : ''}`} onClick={() => setSelectedOption('cheuffeurDrive')}>Cheuffeur Drive</button>
    </div>


      {selectedOption === 'selfDrive' && <Self />}
      {selectedOption === 'cheuffeurDrive' && <Cheuffer/>}
    </div>
 );
};
export default AddCar