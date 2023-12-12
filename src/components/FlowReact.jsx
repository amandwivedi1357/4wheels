import red_Car from "../assets/home/red_car.png"
import "./css/home/FlowReact.css"
const FlowReact = () => {
  return (
    <div className="cont">
    <div className="inner">
        <img src={red_Car} alt=""/>
        <div className="pos_1"></div> 
        <div className="pos_2"></div> 
        <div className="pos_3"></div> 
        <div className="pos_4"></div> 
    </div>
    <div className="box_1"><p className="box_text">Affordable Price </p></div>
    <div className="box_2"><p className="box_text">First class Service </p></div>
    <div className="box_3"><p className="box_text">Flexible Plans </p></div>
    <div className="box_4"><p className="box_text">No Repair Hassel</p></div>
</div>
  )
}

export default FlowReact
