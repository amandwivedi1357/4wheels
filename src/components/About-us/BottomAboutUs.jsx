import lower from "../../assets/about/lower.png"
import upper from "../../assets/about/upper.png"
import img2 from "../../assets/about/img2.png"
import img3 from "../../assets/about/img3.png"
import Conc from "../designs/Conc"
import "../css/About/Bottom.css"
const bullet_data = [
    {
        id:1,
        data:'Car / Bus Rental'
    },
    {
        id:2,
        data:'Self Drive'
    },
    {
        id:3,
        data:'Event Logistics'
    },
    {
        id:4,
        data:'Employee Transportation'
    },
    {
        id:5,
        data:'Pan India Network Operations'
    },
]
const BottomAboutUs = () => {
  return (
    <div className="About_cont">
      <div className="about_first_cont">
        <div className="image_cont">
            <img className = "lower" src={lower} alt="" />
            <img className = "upper" src={upper} alt="" />
            
        </div>
        <div className="info_cont">
            <p className="head_text">Who we are ?</p>
            <p className="desc_text">
            4 Wheel Travels, otherwise referred to by one & all as 4 wheels, is a Proprietorship Firm owned by Mr. S. M. Jain.  The operations are managed by Mr. Ashwin Jain, the CEO of the company, assisted by a team of people who have been with the company for 15 years or more.
            </p>
        </div>
      </div>
      <div className="about_first_cont2">
        <div className="info_cont2">
            <p className="head_text">The Fleet</p>
            <p className="desc_text">
            4 Wheels has one of the largest fleets in car rentals in Hyderabad.  With a own fleet of over 270 vehicles in almost 86 varieties (as on 1.11.23), the range of vehicles on offer to the clients is unmatched by probably any other company in Hyderabad or elsewhere.  4 wheels also probably has the most valuable fleet in car & bus rentals in Hyderabad.  Also, goes without saying that 4 wheels is also the undisputed leader in Hyderabad by fleet and value for luxury cars & luxury buses. <br />
            <br />
4 wheels also has the reputation for owning practically every car sold in the country           and available in car rentals and for also being the first to buy a vehicle in car           rentals the moment it is launched.
            </p>
        </div>
        <div >
            <img className="img_cont2" src={img2} alt="" />
           
            
        </div>
      </div>
      

      <div className="about_first_cont3">
        
        <div >
            <img className="img_cont3" src={img3} alt="" />
           
            
        </div>
        <div className="info_cont3">
            <p className="head_text">Operations</p>
            <p className="desc_text">
            4 Wheels operations is divided across 5 main verticals .These are managed by a 24x7 operations centre located at Road no.5, Jubilee hills.  The own fleet is parked at multiple parking yards (both owned & rented) manned by 24x7 security and CCTV cameras. The admin office & HO is based at Sagar society, road no.2, banjara hills.
            </p>

            <div className="bullet">
                {
                    bullet_data.map((data)=>(
                        <ul className="list_cont" key={data.id}>
                           <li><p>{data.data}</p><span className="conc"><Conc/></span></li> 
                        </ul>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default BottomAboutUs
