import "../css/home/steps.css"
import steps from "../../assets/home/steps.png"
export default function Steps() {
  return (
    <div className="cont">
    <div className="main_cont">
        <div className="cont_1">
            <div className="inner_1">

                <p className="head">Select</p>
                <p className="desc">Choose your desired  car <br/> from fleet</p>
            </div>
            <div className="inner_1">

                <p className="head">Make Payment</p>
                <p className="desc">Make hassle free <br/> payment</p>
            </div>
        </div>
        <img src={steps} alt=""/>
        <div className="cont_2">
            <div className="inner_2">
                <p className="head_2">
                    Book
                </p>
                <p className="desc_2">
                    Choose your pickup <br/> date
                </p>
            </div>
            <div className="inner_2">
                <p className="head_2">
                    Drive
                </p>
                <p className="desc_2">
                    Drive your best ride
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
