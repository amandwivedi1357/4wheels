import red_Car from "../assets/home/red_car.webp"
import "./css/home/FlowReact.css"
const FlowReact = () => {
  return (
    <div className="cont">
    <div className="inner">
        <img src={red_Car} alt=""/>
        <div className="pos_4"></div> 
        <div className="pos_2"></div> 
        <div className="pos_1"></div> 
        <div className="pos_3"></div> 
        <div className="pos_5"></div> 
    </div>
    <div className="box_1"><p className="box_text">Affordable Price1 </p></div>
    <div className="box_2"><p className="box_text">First class Service2</p></div>
    <div className="box_3"><p className="box_text">Flexible Plans 3</p></div>
    <div className="box_4"><p className="box_text">No Repair Hassel4</p></div>
    <div className="box_5"><p className="box_text">Quality at minimum expense</p></div>
</div>
  )
}

export default FlowReact
