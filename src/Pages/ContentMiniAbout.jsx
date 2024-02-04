
import { NavLink } from "react-router-dom"

function ContentMiniAbout() {
    return (
        <div className="intro-about-us">
            <div className="intro-details">
            <h1>About us</h1>
            <p>SaxTon is one of the biggest selling platform in Africa.. We offer good customer service and sell quality products. SaxTon is a copyright Trade mark Company and it operates physically in about 17 countries..</p>
            <NavLink activeclassname="active" to="/about">Read More about us</NavLink>
            </div>
        </div>
    )
}

export default ContentMiniAbout