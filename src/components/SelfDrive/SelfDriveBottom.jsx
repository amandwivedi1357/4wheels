import "../css/CheuffeurDrive/bottomSection.css"
import car1 from "../../assets/cheuffeur-menu-cars/Royale.png"
import car2 from "../../assets/cheuffeur-menu-cars/Sports.jpg"
import car3 from "../../assets/cheuffeur-menu-cars/President.png"
import car4 from "../../assets/cheuffeur-menu-cars/Corporate.png"
import car5 from "../../assets/cheuffeur-menu-cars/HatchBacks.png"
import car6 from "../../assets/cheuffeur-menu-cars/Luxury.png"
import car7 from "../../assets/cheuffeur-menu-cars/LuxSUV.png"


const cheuffeur_menu = [
    {
        id:1,
        type:'Royale',
        img:car1
    },
    {
        id:2,
        type:'Sports',
        img:car2
    },
    {
        id:3,
        type:'President',
        img:car3
    },
    {
        id:4,
        type:'Corporate',
        img:car4
    },
    {
        id:5,
        type:'HatchBacks',
        img:car5
    },
    {
        id:6,
        type:'Luxury',
        img:car6
    },
    {
        id:7,
        type:'Luxury SUV',
        img:car7
    },
]
const SelfDriveBottom = () => {
  return (
    <div className="btm_container">
      <p className="head_text">our Self Drive collections</p>
      <p className="desc_text">Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
      <div className="cheuffer_menu">
        {
            cheuffeur_menu.map((data)=>(
                <div className="menu_cont" key={data.id}>
                    <img src={data.img} alt={data.type} />
                    <p className="type_text">{data.type}</p>
                    <p className="explore" style={{textDecoration:'underline'}}>Explore</p>
                </div>
            ))
        }
      </div>
    </div>  
  )
}

export default SelfDriveBottom
