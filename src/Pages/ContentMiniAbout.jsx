
import stateHandler from "../context/stateHandlers";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function ContentMiniAbout() {
    const {catData} = useContext(stateHandler)
    return (
        <>
            <div className="categories-container">
                <h2 className="section-title">Shop by Category</h2>
                <div className="category-grid">
                        {catData.map((item)=>{
                            return(
                                <NavLink activeclassname="active" to={`/category/${item.id}`} className="category-item" key={item.id}>
                                    <div className="category-name">
                                        {item.title}
                                    </div> 
                                </NavLink>                           
                            )
                        })}
                </div>
            </div>


            <div className="featured-brands-container">
                <h2 className="section-title">Featured Brands</h2>
                <div className="brand-cards">
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.amazon.com/" target="_blank">
                            <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="Brand 1" />
                        </NavLink>
                    </div>
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.ebay.com/" target="_blank">
                            <img src="https://cdn.dribbble.com/users/28018/screenshots/728467/attachments/69310/ebaylogo-large.png?resize=400x300&vertical=center" alt="Brand 2" />
                        </NavLink>
                    </div>
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.shopify.com/" target="_blank">
                            <img src="https://www.freepnglogos.com/uploads/shopify-logo-png/ecommerce-shopify-logo-hd-1.png" alt="Brand 3" />
                        </NavLink>
                    </div>
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.alibaba.com/" target="_blank">
                            <img src="https://static.stocktitan.net/company-logo/BABA-lg.png" alt="Brand 4" />
                        </NavLink>
                    </div>
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.bestbuy.com/" target="_blank">
                            <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/01/BBY_logo_blog_header_v01.jpg" alt="Brand 5" />
                        </NavLink>
                    </div>
                    <div className="brand-card">
                        <NavLink activeclassname="active" to="https://www.meta.com/" target="_blank">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png" alt="Brand 6" />
                        </NavLink>
                    </div>
                    
                    
                </div>
            </div>
        </>


    )
}

export default ContentMiniAbout