import OtherContent from "../components/OtherContent";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

function CategoryDetail() { 
    const [data,setData] = useState({});
    let search = useParams();
    
    //get one category data
    const catFetcher = async(req, res)=>{
        const apiURL = process.env.REACT_APP_API_URL
        const response = await fetch(`${apiURL}/categories/${search.id}`)
        const ans = await response.json();

        setData(ans)
    }

  //fetch category detail when page loads
    useEffect (()=>{  
      catFetcher();
    },[data])


    const catDetails = data.product

    return (
        <>
            <div className="catDetails">
                <div className="catItems">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <hr />
                </div>
                <div className="banCards">
                    {catDetails === undefined ? <DotLoader size="50px" className="loader"/> : 
                        catDetails.map((item)=>{
                            return(
                                <NavLink activeclassname="active" to={`/products/${item.id}`} key={item.id}>
                                    <div className="miniBanCardCon">
                                        <div className="miniBanCards" >
                                            <img src={item.image} alt=""/>  
                                            <h4>{item.title}</h4>
                                            <h5><strong>Type:</strong>{`${" "}`}{item.description}</h5>
                                            <h5><strong>Price:</strong>  &#x20A6; {item.unitPrice}</h5>
                                            <h5><strong>Market Ratings:</strong>  {item.marketRatings}</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            <OtherContent />
        </>
    )
}

export default CategoryDetail

