import "../css/TopSection.css"

export default function TopSection() {
  return (
    <div className="main_top_container">
        <div className="navbar">

      <div className="logo">logo</div>
      <div className="nav_options">
        <div className="nav_menus">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Gallery</li>
                </ul>
        </div>
      </div>
      <div className="contact">
        <button className="contact_button">
            Contact us
        </button>
      </div>
        </div>
    </div>
  )
}
