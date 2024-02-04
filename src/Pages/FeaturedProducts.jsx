import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

function FeaturedProduct() {
    const [prod,setProd] = useState([])

    useEffect (()=>{
        const dataFecther = async(req, res)=>{
            try{
                const response = await fetch("http://localhost:5000/featuredProducts")
    
                const data = await response.json();
                setProd(data)
            }catch(error){
                console.log(error);
            }
        }
        dataFecther();
    },[])
    
    useEffect(()=>{},[prod])
  return (
    <>
        <div className="banner">
            <div className="links">
            <h2>Featured Products</h2>
            <NavLink activeclassname="active" to="/products">View all Products</NavLink>
            </div>


            <div className="banCards">
                {prod.map((item)=>{
                    return(
                            <div className="miniBanCards" key={item.id}>
                                <img src="/images/hp.jpg" alt="" />
                                <h4>{item.title}</h4>
                                <p><strong>Type</strong>: {item.description}</p>
                                <p><strong>MarketRatings</strong>: {item.marketRatings}</p>
                                <p><strong>PRICE</strong>: &#x20A6; {item.unitPrice}</p>
                                <NavLink activeclassname="active" to={`/featuredProducts/${item.id}`} >more details</NavLink>
                            </div>

                    )
                })}
            </div>
        </div>
    </>
  )
}

export default FeaturedProduct