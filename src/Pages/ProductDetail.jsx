import { useContext,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import stateHandler from "../context/stateHandlers";

function ProductDetail() {
  const {cartHandler,productExist} = useContext(stateHandler)
  const [data,setData] = useState({})


  let search = useParams();

  useEffect (()=>{
      const apiFetcher = async(req, res)=>{
        const apiURL = process.env.REACT_APP_API_URL
          try{
              const response = await fetch(`${apiURL}/products/${search.id}`)

              const ans = await response.json();
              setData(ans)
          }catch(error){
              console.log(error); 
          }
      }
      apiFetcher();
  },[search])
  useEffect(()=>{},[data])

    return ( 
       <>
        <div className="prodDetails">
          <h3>Product Details</h3>
          <div className="prodSection">
            <div className="images">
              <img src={data.image} alt="" />
            </div>
            <div className="details">
              <h1>{data.title}</h1> 
              <h5><strong>Type:</strong>{data.description}</h5>
              <h5><strong>Price:</strong>  &#x20A6; {data.unitPrice}</h5>
              { productExist ? 
                <div className="style">Product has been added to cart</div>
                :
                <NavLink activeclassname="active" to="/carts" onClick={()=>{cartHandler([data])}}>Add to cart</NavLink>
              } 
            </div>
          </div>
        </div>

        <div className="banner">
        <div className="links">
          <h2>Product Match</h2>
          <NavLink activeclassname="active" to="/products">View all Products</NavLink>
        </div>

        <div className="banCards banSpacing">
        <div className="miniBanCards">
        <img src="/images/hp.jpg" alt=""/>
            <h4>Men's wear</h4>
            <p><strong>Type</strong>: quality T-Shirt</p>
            <p><strong>QUANTITY</strong>: 12</p>
            <p><strong>PRICE</strong>: $90</p>
            <NavLink activeclassname="active" to="/products/:id">More Details</NavLink>
          </div>
        </div>
        </div>
        
        <div className="footer">
            <div className="containerr">
                <div className="nav">
                    <div className="logo">
                        <NavLink activeclassname="active" to="/">
                            <img src="./images/logo.png" alt="Logo" />
                            <h2>SaxTon</h2>
                        </NavLink>
                        <p>Copyright&copy; 2023 SaxTon Ent.</p>
                    </div>
                   <ul className="dot">
                    <li><NavLink activeclassname="active" to="/products">Product</NavLink></li>
                    <li><NavLink activeclassname="active" to="/category">Category</NavLink></li>
                    <li><NavLink activeclassname="active" to="/about">About Us</NavLink></li>
                    <li><NavLink activeclassname="active" to="/contact">Contact Us</NavLink></li>
                   </ul>
                </div>
            </div>
        </div>
       </>

        
    );
  }
  
  export default ProductDetail