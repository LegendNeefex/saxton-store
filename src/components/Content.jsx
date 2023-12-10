import OtherContent from "./OtherContent"
import { NavLink } from "react-router-dom"

function Content() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Welcome to the world of shopping!</h1>
          <p>A place where you can get all items and products of your choice...We make all items on sale for easy purchase and this is a very interactive shopping platform...Tap below To explore more on SAXTON</p>
          <a href="/products">Explore More On Saxton</a>
        </div>
      </div>
      
      <div className="banner">
        <div className="links">
          <h2>Featured Products</h2>
          <a href="/products">View all Products</a>
        </div>

        <div className="banCards">
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
      <OtherContent />
    </>
  )
}

export default Content