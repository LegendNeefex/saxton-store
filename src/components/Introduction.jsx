import { useContext } from "react";
import stateHandler from "../context/stateHandlers";
import { FaTimesCircle } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";


function Introduction() {
    const {burgerIconHandler,burgerIcon,closeHandler} = useContext(stateHandler)
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <a href="/">
                            <img src="./images/logo.png" alt="Logo" />
                            <h2>SaxTon</h2>
                        </a>
                    </div>
                    <ul>
                        <li><NavLink activeclassname="active" to="/">Introduction</NavLink></li>
                        <li><NavLink activeclassname="active" to="/products">Product</NavLink></li>
                        <li><NavLink activeclassname="active" to="/category">Category</NavLink></li>
                        <li><NavLink activeclassname="active" to="/about">About Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/contact">Contact Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/carts">Carts</NavLink></li>
                    </ul>
                {
                    burgerIcon 
                    ?
                    <div className="shortcuts">
                        <div className="shortCards">
                            <FaTimesCircle size={"25px"} className="cancel" onClick={closeHandler}/>
                            <ul>
                                <a href="/products">products</a>
                                <a href="/category">category</a>
                                <a href="/about">about us</a>
                                <a href="/contact">contact us</a>
                                <a href="/signup">create an account</a>
            
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