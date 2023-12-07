

function Login() {
  return (
    <>
        <div className="loginPage">
            <div className="loginCard">
                <form method="post">
                <h1>Log In</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="/" className="logIn">Log in</a>
                    <p>By continuing, you agree to SaxTon terms and condition.</p>
                    <h3>Having trouble logging in ?</h3>
                    <a href="/" className="log">I forgot my password</a>
                    <h3>New to SaxTon ?</h3>
                    <a href="/SignUp" className="create">Create an account</a>
                </form>
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
        </div>
    </>
  )
}

export default Login