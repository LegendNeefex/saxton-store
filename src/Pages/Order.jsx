import { useContext, useEffect, useState } from "react";
import stateHandler from "../context/stateHandlers";
import OtherContent from "../components/OtherContent";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLoader, RingLoader } from "react-spinners";
import { MdOutlineDoneOutline } from "react-icons/md";

function Order() {
    const { showOrder, order, emptyOrder} = useContext(stateHandler);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const user = storedUser ? JSON.parse(storedUser) : null;
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        } else {
            navigate("/login");
        }
    }, []);

    return (
        // ... rest of your code
        <>
        {
            emptyOrder
            ?
            <>
                <div className="emptyCart">
                    <div className="emptyCartItem">
                        <MdOutlineDoneOutline size={"35px"} className="cartIcon"/>
                        <h5>Your Order is empty</h5>
                        <h5>Visit Our Product page to place an order</h5>
                    </div>
                    <NavLink activeclassname="active" to="/products">Click here to Visit</NavLink>
                </div>
                <OtherContent />
            </>
            :
            showOrder
            ?
            <div className="showOrderContainer">
                    <RingLoader color="#202142" size={200} className="orderLoader" />    
                    <h3>Please wait, saxton is redirecting you for payment</h3>
                    <h4>Note: After payment has been made, please hold on we'll redirect you back</h4>
                    <p>Kindly make payment when page loads and redirection is completed...</p>
                </div>
            :
            <>
                <div className="orderContainer">
                    <div className="user-order-details">
                        <div className="user-info">
                            <HashLoader color="#fff" size={100}/>
                            <h1>{`Hi, ${firstName} ${lastName}`}</h1>
                            <p>Thank you for choosing SaxTon, here are your orders below...</p>
                        </div>
                        <div>
                            <HashLoader color="#fff"/>
                        </div>
                    </div>
                    <div className="orderDetailsCon">
                        {
                            order.map((item)=>{
                                return(
                                    <div className="orderDetails" key={item.id}>
                                        <ul>
                                            <li>{`${item.address},${item.city},${item.state}`} </li>
                                            <li>{new Date(item.createdAt).toLocaleString()}</li>
                                            <li>&#x20A6; {item.totalPrice}</li>
                                            <li>{item.status}</li>
                                            <li><NavLink activeclassname="active" to={`/orderItems/${item.id}`} className="orderLinking">View Order</NavLink></li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>                      
                </div>
                <OtherContent />
            </>
        }
        </>
    );
}

export default Order;



