

function Carts() {
  return (
    <>
    <div className="cartContainer">
      <div className="picSide">
        <img src="./images/hp.jpg" alt="ProductImage" />
        <h3>Men's wear</h3>
      </div>

      <div className="textSide">
        <h2>Unit Price</h2>
        <h3>25$</h3>
        <h3>Total</h3>
      </div>

      <div className="textSide2">
        <h2>Quantity</h2>
        <form method="get">
          <input type="number" placeholder="Quantity Amount" autoComplete="off"/>
        </form>
      <label htmlFor="">
        <input type="number" autoComplete="off"/>
      </label>
      <a href="/">Pay 25$</a>
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

export default Carts