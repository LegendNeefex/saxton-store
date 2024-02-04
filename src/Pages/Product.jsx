import { NavLink } from "react-router-dom";
import OtherContent from "../components/OtherContent";
import { useContext } from "react";
import stateHandler from "../context/stateHandlers";

function Product() {
  const {receivedData} = useContext(stateHandler)
    return (
        <>
        <div className="banner">
          <div className="links">
            <h2>All Products</h2>
          </div>
  
          <div className="banCards">
            {receivedData.map((item)=>{ 
              return (
                <NavLink activeclassname="active" to={`/products/${item.id}`} key={item.id}>
                  <div className="miniBanCardCon">
                    <div className="miniBanCards" >
                      <img src={item.image} alt=""/> 
                      <h4>{item.title}</h4>
                      <h5><strong>Type:</strong>{`${" "}`}{item.description}</h5>
                      <h5><strong>Price:</strong>  &#x20A6; {item.unitPrice}</h5>
                      <h5><strong>Market Ratings:</strong>  {item.marketRatings}</h5>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
        <OtherContent />
      </> 
    )
}
export default Product;