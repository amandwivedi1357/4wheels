import { PiPoliceCar } from "react-icons/pi"


export default function SingleCard(props) {
    const {title,totalNumber,icon} = props.item
  return (
    <div className="single_card">
            <div className="card_content">
              <h4>{title}</h4>
              <span>{totalNumber}</span>
            </div>
            <span>
              <PiPoliceCar color="white" fontWeight={600} size={40}/>
            </span>
          </div>
  )
}
