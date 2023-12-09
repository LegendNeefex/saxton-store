import { NavLink } from "react-router-dom";
import OtherContent from "../OtherContent";

function Product() {
    return (
        <>
        <div className="banner">
          <div className="links">
            <h2>All Products</h2>
          </div>
  
          <NavLink activeclassname="active" to="/checkout">
          <div className="banCards">
            <div className="miniBanCards">
              <img src="./images/hp.jpg" alt="products"/>
              <h4>Men's wear</h4>
              <h5><strong>Type:</strong> Quality T-shirt</h5>
            </div>
          </div>
          </NavLink>
        </div>
        <OtherContent />
      </> 
    )
}
export default Product;