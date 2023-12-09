import { NavLink } from "react-router-dom";

function CheckOut() {
    return ( 
       <>
        <div className="prodDetails">
          <h3>Product Details</h3>
          <div className="prodSection">
              <div className="images">
                  <img src="./images/hp.jpg" alt="" />
              </div>
              <div className="details">
                  <h1>Men's wear</h1>
                  <p>This T-shirt is fairly used and was imported from china.</p>
                  <NavLink activeclassname="active" to="">Add to cart</NavLink>
              </div>
          </div>
        </div>

        <div className="banner">
        <div className="links">
          <h2>Product Match</h2>
          <a href="/products">View all Products</a>
        </div>

        <div className="banCards banSpacing">
          <div className="miniBanCards">
            <img src="./images/hp.jpg" alt="products"/>
            <h4>Men's wear</h4>
            <p><strong>Type</strong>: quality T-Shirt</p>
            <p><strong>QUANTITY</strong>: 12</p>
            <p><strong>PRICE</strong>: $90</p>
            <a href="/">More Details</a>
          </div>
          <div className="miniBanCards">
            <img src="./images/hp.jpg" alt="products" />
            <h4>Men's wear</h4>
            <p><strong>Type</strong>: quality Jean Shorts</p>
            <p><strong>QUANTITY</strong>: 1</p>
            <p><strong>PRICE</strong>: $10</p>
            <a href="/">More Details</a>
          </div>
          <div className="miniBanCards">
            <img src="./images/hp.jpg" alt="products" />
            <h4>Women's wear</h4>
            <p><strong>Type</strong>: Crop Top</p>
            <p><strong>QUANTITY</strong>: 3</p> 
            <p><strong>PRICE</strong>: $75</p>
            <a href="/">More Details</a>
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

        
    );
  }
  
  export default CheckOut