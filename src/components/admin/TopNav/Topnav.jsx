
import { FaSearch, FaTaxi } from "react-icons/fa"
import "./TopNav.css"
export default function Topnav() {
  return (
    <div className="topnav">
      <div className="inner_top">
        <div className="logo">
           <span> <FaTaxi className="icon" fontWeight={400} fontSize={'4rem'} color="white"/></span>
        </div>
        <div className="inp_cont">
            <input type="text" className="input" placeholder="search here"/>
            <span><FaSearch color="rgb(179, 189, 184)"/></span>
        </div>
      </div>
    </div>
  )
}
