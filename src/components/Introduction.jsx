import { useContext } from "react";
import stateHandler from "../context/stateHandlers";
import { FaTimesCircle } from "react-icons/fa"; 
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";


function Introduction() {
    const {burgerIconHandler,burgerIcon,closeHandler,cartCount,view} = useContext(stateHandler)

    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <NavLink activeclassname="active" to="/">
                            <img src="./images/logo.png" alt="Logo" />
                            <h2>SaxTon</h2>
                        </NavLink>
                    </div>
                    <ul>
                        <li><NavLink activeclassname="active" to="/">Introduction</NavLink></li>
                        <li><NavLink activeclassname="active" to="/products">Product</NavLink></li>
                        <li><NavLink activeclassname="active" to="/category">Category</NavLink></li>
                        <li><NavLink activeclassname="active" to="/about">About Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/contact">Contact Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/orders">Orders</NavLink></li>
                        {view ? (
                        <>
                            <li><NavLink activeclassname="active" to="/logout">Logout</NavLink></li>
                            <li><NavLink activeclassname="active" to="/profile">Profile</NavLink></li>
                        </>
                        ) : (
                        <>
                            <li><NavLink activeclassname="active" to="/login">Login</NavLink></li>
                            <li><NavLink activeclassname="active" to="/signup">Register</NavLink></li>  
                        </>
                        )}
                        <>
                            <li><NavLink activeclassname="active" to="/carts">
                                <TiShoppingCart size={"35px"}/>
                            </NavLink></li>
                            <div className="cartCount">{cartCount}</div>
                        </>
                    </ul>
                {
                    burgerIcon 
                    ?
                    <div className="shortcuts">
                        <div className="shortCards">
                            <FaTimesCircle size={"25px"} className="cancel" onClick={closeHandler}/>
                            <ul>
                                <NavLink activeclassname="active" to="/products">products</NavLink>
                                <NavLink activeclassname="active" to="/category">category</NavLink>
                                <NavLink activeclassname="active" to="/about">about us</NavLink>
                                <NavLink activeclassname="active" to="/contact">contact us</NavLink>
                                <NavLink activeclassname="active" to="/orders">Orders</NavLink>
                                {view ? (
                                <>
                                    <NavLink activeclassname="active" to="/logout">Logout</NavLink>
                                    <NavLink activeclassname="active" to="/profile">Profile</NavLink>
                                </>
                                ) : (
                                <>
                                    <NavLink activeclassname="active" to="/login">Login</NavLink>
                                    <NavLink activeclassname="active" to="/signup">Register</NavLink>  
                                </>
                                )}
                                <NavLink activeclassname="active" to="/carts" className="cart">
                                    <TiShoppingCart size={"35px"}/>
                                </NavLink>
            
                            </ul>
                        </div>
                    </div>
                :
                    <div className="burgericon" onClick={burgerIconHandler}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                }
            </div>
            </div>
        </>
    );
}

export default Introduction;