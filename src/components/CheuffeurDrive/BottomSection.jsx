import "../css/CheuffeurDrive/bottomSection.css"
import car1 from "../../assets/cheuffeur-menu-cars/Royale.png"
import car2 from "../../assets/cheuffeur-menu-cars/Sports.jpg"
import car3 from "../../assets/cheuffeur-menu-cars/President.png"
import car4 from "../../assets/cheuffeur-menu-cars/Corporate.png"
import car5 from "../../assets/cheuffeur-menu-cars/HatchBacks.png"
import car6 from "../../assets/cheuffeur-menu-cars/Luxury.png"
import car7 from "../../assets/cheuffeur-menu-cars/LuxSUV.png"
import car8 from "../../assets/cheuffeur-menu-cars/MPV.png"
import car9 from "../../assets/cheuffeur-menu-cars/Electric.png"
import car10 from "../../assets/cheuffeur-menu-cars/BusesNAC.png"
import car11 from "../../assets/cheuffeur-menu-cars/BusesAC.png"
import car12 from "../../assets/cheuffeur-menu-cars/Ancillary.png"

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
    {
        id:8,
        type:'MPV',
        img:car8
    },
    {
        id:9,
        type:'Electric',
        img:car9
    },
    {
        id:10,
        type:'BusesNAC',
        img:car10
    },
    {
        id:11,
        type:'BusesAC',
        img:car11
    },
    {
        id:12,
        type:'Ancillary Vehicles',
        img:car12
    },
]
const BottomSection = () => {
  return (
    <div className="btm_container">
      <p className="head_text">our Chauffeur collections</p>
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

export default BottomSection
