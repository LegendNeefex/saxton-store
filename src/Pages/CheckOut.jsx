
import stateHandler from '../context/stateHandlers'
import { useContext,useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import OtherContent from "../components/OtherContent";


function CheckOut() {
  const {deleteHandler,cartShow,plusHandler,loginMsg,setLoginMsg,minusHandler,emptyCartPreview,totalQuantity,createOrder} = useContext(stateHandler)
    const navigate = useNavigate();
    
    const [cartText,setCartText] = useState({
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      city:"",
      state:""
    })

    const cssPlusStyle = {
      cursor:"pointer",
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/login")
        }
    },[])

    const cartTextChange = (e) => {
      setCartText((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
      }));
    }

    const orderData = {
      firstName: cartText.firstName,
      lastName: cartText.lastName,
      email: cartText.email,
      address: cartText.address,
      state: cartText.state,
      city: cartText.city,
      totalPrice: String(totalQuantity)

    }

    const cartPreviewHandler = (e) =>{
      e.preventDefault();
        const emailTarget = ("@")
        if (
          cartText.firstName === "" ||
          cartText.lastName === "" ||
          cartText.email === "" ||
          cartText.address === "" ||
          cartText.city === "" ||
          cartText.state === ""
        ) {
          setLoginMsg(`All fields are required`);
          setTimeout(() => {
            setLoginMsg("");
          }, 3000);
        } else if (!cartText.email.includes(emailTarget)) {
          setLoginMsg(`Email must contain the @ symbol`);
        } else if (
          !cartText.email.endsWith("gmail.com") &&
          !cartText.email.endsWith("yahoo.com") &&
          !cartText.email.endsWith("outlook.com") &&
          !cartText.email.endsWith("icloud.com")
        ) {
          setLoginMsg(`A valid email required`);
        } else {
          setCartText("");
          setLoginMsg("");
          createOrder(orderData)
          console.log("order created waiting for payment");
          navigate("/orders");
        }
      
    }


    return (
      <>
      {
        emptyCartPreview ?
        (<><div className='cartPreviewErr'>There are no cart items to preview here kindly visit our product page to start Shopping!!!...</div></>)
        :
      
        <div className="checkout-container">
          <div className="cart-preview">
            <h2>Cart Preview</h2>
            {cartShow.map((item)=>{
              return(
                <div key={item.id}>
                  <div className="midSection1 cart-prev-container">
                    <div className="secConDetails1 cart-prev-container1">
                      <div className="secConImg cart-prev-containerImg">
                        <NavLink activeclassname="active" to={`/products/${item.id}`}>
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
        
          <div className="checkout-section">
            <form className="user-info-form" method="post" onSubmit={cartPreviewHandler}>
              <div className="form-group">
              <h2>Receiver's Information</h2>
                <input type="text" id="firstName" name="firstName" value={cartText.firstName ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='Firstname'/>
                <input type="text" id="lastName" name="lastName" value={cartText.lastName ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='LastName'/>
                <input type="text" id="email" name="email" value={cartText.email ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='Email'/>
              </div>
              <div className="form-group">
                <h2>Shipping Address</h2>
                <input type="text" id="address" name="address" value={cartText.address ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='Address'/>
                <input type="text" id="city" name="city" value={cartText.city ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='City'/>
                <input type="text" id="state" name="state" value={cartText.state ?? ''} onChange={cartTextChange} className="form-input" autoComplete='off' placeholder='State'/>
                <span style={{color:"red", fontWeight:"bold", paddingLeft:"10px"}}>{loginMsg}</span>
                <button type="submit" className="form-button">Pay Now <span>&#x20A6; {totalQuantity}</span> </button>
              </div>
            </form>
          </div>
        </div>
      }
      <OtherContent />
      </>
    )
}

export default CheckOut