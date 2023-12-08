
import "../css/Gallery/BottomSec.css"
import carImg from "../../assets/cheuffeur-menu-cars/galleryimg.png"
const imgData = [
    {
        id:1,
        img:carImg
    },
    {
        id:2,
        img:carImg
    },
]
const BottomSectionGallery = () => {
  return (
    <div className="Btm_cont">
      {imgData.map((data)=>(
        <div  key={data.id} className="single_cont">
            <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  )
}

export default BottomSectionGallery
