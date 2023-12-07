

function SignUp() {
  return (
    <>
        <div className="signBody">
        <div className="card">
            <form method="post">
            <h1>Sign Up</h1>
                <input type="text" autoComplete="off" placeholder="Email" />
                <input type="text" autoComplete="off" placeholder="Mobile Number" />
                <input type="text" autoComplete="off" placeholder="Country" />
                <input type="password" autoComplete="off" placeholder="Password" />
                <a href="/" className="firstExtra">Sign Up</a>
                <a href="/login" className="extra">if you're already a saxTon user, Kindly click here to login.</a>
            </form>
            <div className="textDetails">
                <h1>SaxTon</h1>
                <h3>SaxTon helps you buy and order products of your choice .</h3>
            </div>
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

export default SignUp