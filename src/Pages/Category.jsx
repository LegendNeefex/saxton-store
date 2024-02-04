import ContentMiniAbout from "./ContentMiniAbout";
import stateHandler from "../context/stateHandlers";
import { useContext } from "react";

function Category() {
    const {catData} = useContext(stateHandler)
    
    return ( 
        <>
            <div className="categoryContainer">
                <h2>SaxTon products search</h2>
                <div className="category" >
                    {catData.map((item)=>{
                        return(
                            <ul key={item.id}>
                                <li>
                                    <a href={`/category/${item.id}`}>{item.title}</a>
                                </li>
                            </ul>                                  
                        
                        )
                    })}
                </div>
            </div>
            <ContentMiniAbout />
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

export default Category;