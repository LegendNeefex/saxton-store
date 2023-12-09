import { NavLink } from "react-router-dom";


function Introduction() {
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
                    <div className="burgericon">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Introduction;