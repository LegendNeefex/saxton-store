import { useContext,useEffect } from "react"
import OtherContent from "../components/OtherContent";
import stateHandler from "../context/stateHandlers"
import { MdDelete } from "react-icons/md";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { NavLink,useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";





function Carts() {
  const {cartCount,deleteHandler,cartShow,emptyCart,plusHandler,minusHandler,totalQuantity} = useContext(stateHandler)

  const token = localStorage.getItem("token")

  const cssPlusStyle = {
    cursor:"pointer",
  }

  // function handleProdRoute(item) {
  //   if (item.id !== data.id) {
  //     return `/products/${item.id}`
  //   }else{
  //     return `/featuredProducts/${item.id}`
  //   }
  // }
  
  return (
    <>
    {
      emptyCart
      ?
      <div className="emptyCart">
        <div className="emptyCartItem">
          <TiShoppingCart size={"35px"} className="cartIcon"/>
          <h5>Your cart is empty</h5>
          <h5>Explore the world of shopping on SAXTON!</h5>
        </div>
        <NavLink activeclassname="active" to="/products">START SHOPPING</NavLink>
      </div>
      :
      <div className="cartContainer">
        <div className="section1">
          <h3>Cart({cartCount})</h3>
          <hr />
          {cartShow.map((item)=>{
            return(
              <div key={item.id}>
                <div className="midSection1">
                  <div className="secConDetails1">
                    <div className="secConImg">
                      <NavLink activeclassname="active" to="">
                        <img src={item.image} alt=""/> 
                      </NavLink> 
                    </div>
                    <NavLink activeclassname="active" to="">
                      <MdDelete size={"25px"}/>
                      <h4 onClick={(()=>{deleteHandler(item.id)})}>Remove</h4>
                    </NavLink>
                  </div>
                  <div className="secConDetails2">
                    <h5>{item.title}</h5>
                    <h6>{item.description}<span> | </span> All colors available..</h6>  
                    <p>Instock</p>
                  </div>
                  <div className="secConSales">
                    <h4>unitPrice:&#x20A6; {item.unitPrice}</h4>
                    <h4>SubTotal:&#x20A6;  {item.unitPrice * item.quantity}</h4>
                    <div className="secConSaleQuantity">
                      <FaCirclePlus size={"30px"} style={cssPlusStyle} onClick={(()=>{plusHandler(item)})}/>
                      <div className="quantityCount">{item.quantity}</div>
                        <FaCircleMinus size={"30px"} style={cssPlusStyle} onClick={(()=>{minusHandler(item)})}/>
                      </div> 
                  </div>
                </div>
              </div>
            ) 
          })}
        </div>
        <div className="section2">
          <div className="sec2Con">
            <h4>CART SUMMARY</h4>
            <hr />
            <div className="sec2ConDetails">
              <h4>Total</h4>
              <h4>&#x20A6; {totalQuantity}</h4>
            </div>
            <p>Delivery fees not included</p>
            {
              token?(<>
                <NavLink activeclassname="active" to="/checkout">
                  CheckOut<span>&#x20A6; {totalQuantity}</span>
                </NavLink>
              </>):(<>
                <NavLink activeclassname="active" to="/login">
                  Login to Checkout
                </NavLink>
                <NavLink activeclassname="active" to="/signup">
                  Sign Up
                </NavLink>
              </>)
            }
          </div>
        </div>
      </div>
    }
    <OtherContent />
    </>
  )
}

export default Carts