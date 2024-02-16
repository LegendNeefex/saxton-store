import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdOutlineDoneOutline } from "react-icons/md";



function OrderItems() {
    const [emptyOrderItems,setEmptyOrderItems] = useState(false)
    const [handleOrderItem,setHandleOrderItem] = useState({})
    const [orderItems,setOrderItems] = useState([])
    

    useEffect(()=>{
        orderItemsFetcher();
        gettingorderFetcher();
    },[])

    useEffect(()=>{
        setEmptyOrderItems(false)
        try {
            if (orderItems.length === 0 || Object.keys(handleOrderItem).length === 0) {
                setEmptyOrderItems(true);
            } else {
                setEmptyOrderItems(false);
            }
        } catch (error) {
            return("error",error)
        }
    },[orderItems,handleOrderItem])

    let search = useParams();

    //getting all orderitems of a user
        async function orderItemsFetcher() {
        //fetch orderitems from the backend
        const token = localStorage.getItem("token");
        const apiURL = process.env.REACT_APP_API_URL
        const response = await fetch(`${apiURL}/orderItems/user/${search.id}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        setHandleOrderItem(data)
    }

    //getting all orderItems
     const gettingorderFetcher = async ()=>{
        const token = localStorage.getItem("token");
        const apiURL = process.env.REACT_APP_API_URL
        const response = await fetch (`${apiURL}/orderItems/${search.id}`,{
            headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json();
        setOrderItems(data);

    }

    return (
        <>
            {
                emptyOrderItems
                ?
                <>
                    <div className="emptyCart">
                        <div className="emptyCartItem">
                            <MdOutlineDoneOutline size={"35px"} className="cartIcon"/>
                            <h5>No Order Present</h5>
                            <h5>Visit Our Product page to place an order</h5>
                        </div>
                        <NavLink activeclassname="active" to="/products">Click here to Visit</NavLink>
                    </div>
                </>
                :
                <div className="order-items-container">
                    <div className="partA">
                        <div className="customer-details">
                            <h3>Recipient Infomation</h3>
                            <hr />
                            <div className="flexcustomer">
                                <div className="info">
                                    <h3>Email</h3>
                                    <p>{handleOrderItem.email}</p>
                                </div>
                                <div className="shipping-address">
                                    <h3>Shipping Address</h3>
                                    <p>{`${handleOrderItem.firstName} ${handleOrderItem.lastName}`}</p>
                                    <p>{handleOrderItem.address}</p>
                                    <p>{handleOrderItem.city}</p>
                                    <p>{handleOrderItem.state}</p>
                                </div>
                            </div>
                        </div>
                        <div className="shipping-method">
                            <h3>Shipping Method</h3>
                            <hr />
                            <p>Flat-Rate</p>
                            <p>Standard flat rate for all shipments</p>
                        </div>
                        <div className="paymentmethod">
                            <h3>Payment Info</h3>
                            <hr />
                            <div className="flexpaymentmethod">
                                <div className="flexA">
                                    <h4>Payment method</h4>
                                    <p>PayStack</p>
                                </div>
                                <div className="flexB">
                                    <h4>Billing Address</h4>
                                    <p>{`${handleOrderItem.firstName} ${handleOrderItem.lastName}`}</p>
                                    <p>{handleOrderItem.address}</p>
                                    <p>{handleOrderItem.city}</p>
                                    <p>{handleOrderItem.state}</p>
                                </div>
                            </div>
                        </div>
                        <div className="itemsOrdered">
                            <h3>Items in order</h3>
                            <hr />
                            {
                                
                                orderItems.map((item)=>{
                                    return(
                                        item.receivedData.map((prodData)=>{
                                            return(
                                                <div className="miniItemsOrdered" key={prodData.id}>
                                                    <img src={prodData.image} alt="itemPic" />
                                                    <div className="miniDetails">
                                                        <h3>{prodData.title}</h3>
                                                        <p>{`Quantity: ${prodData.quantity}`}</p>
                                                    </div>
                                                    <div className="miniPrice">
                                                        <h3>Item Price</h3>
                                                        <p>&#x20A6;{`${prodData.unitPrice}`}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="partB">
                        <h3>Order Summary</h3>
                        <hr />
                        <div className="ordersumprice">
                            <div className="orderA">
                                <p>SubTotal:</p>
                                <p>Total:</p>
                            </div>
                            <div className="orderB">
                                <p>&#x20A6; {handleOrderItem.totalPrice}</p>
                                <p>&#x20A6; {handleOrderItem.totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OrderItems