
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
                <a href="/signup">Sign Up</a>         
            </div>
        </div>

        <div className="footer">
            <div className="containerr">
                <div className="nav">
                    <div className="logo">
                        <a href="/">
                            <img src="./images/logo.png" alt="Logo" />
                            <h2>SaxTon</h2>
                        </a>
                        <p>Copyright&copy; 2023 SaxTon Ent.</p>
                    </div>
                   <ul className="dot">
                    <li><a href="/products">Product</a></li>
                    <li><a href="/category">Category</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                   </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default OtherContent