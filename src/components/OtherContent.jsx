import { NavLink } from "react-router-dom"
function OtherContent() {
  return (
    <>
        <div className="MoreContent">
            <div className="partOne">
                <h3>JOIN SAXTON TODAY</h3>
                <h1>Pick a choice to make your shopping activities so easy</h1>    
            </div>
            <div className="partTwo">
                <p>Create an account with us today. Place an order to get your favorite items and products, Click the 'Sign Up' button below to start shopping.</p>
                <NavLink aciveclassname="active" to="/signup">Sign Up</NavLink>         
            </div>
        </div>

        <div className="footer">
            <div className="containerr">
                <div className="nav">
                    <div className="logo">
                        <NavLink aciveclassname="active" to="/">
                            <img src="./images/logo.png" alt="Logo" />
                            <h2>SaxTon</h2>
                        </NavLink>
                        <p>Copyright&copy; 2023 SaxTon Ent.</p>
                    </div>
                   <ul className="dot">
                    <li><NavLink aciveclassname="active" to="/products">Product</NavLink></li>
                    <li><NavLink aciveclassname="active" to="/category">Category</NavLink></li>
                    <li><NavLink aciveclassname="active" to="/about">About Us</NavLink></li>
                    <li><NavLink aciveclassname="active" to="/contact">Contact Us</NavLink></li>
                   </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default OtherContent