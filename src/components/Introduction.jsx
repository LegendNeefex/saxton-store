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
                        <li><NavLink activeClassName="active" to="/">Introduction</NavLink></li>
                        <li><NavLink activeClassName="active" to="/products">Product</NavLink></li>
                        <li><NavLink activeClassName="active" to="/category">Category</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About Us</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
                        <li><NavLink activeClassName="active" to="/carts">Carts</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Introduction;