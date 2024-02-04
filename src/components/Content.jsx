import OtherContent from "../components/OtherContent";
import { NavLink } from "react-router-dom"
import ContentMiniAbout from "../Pages/ContentMiniAbout";

function Content() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Welcome to the world of shopping!</h1>
          <p>A place where you can get all items and products of your choice...We make all items on sale for easy purchase and this is a very interactive shopping platform...Tap below To explore more on SAXTON</p>
          <NavLink activeclassname="active" to="/products">Explore More On Saxton</NavLink>
        </div>
      </div>
      <ContentMiniAbout />
      <OtherContent />
    </>
  )
}

export default Content