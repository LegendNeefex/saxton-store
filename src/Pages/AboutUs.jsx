import { NavLink } from "react-router-dom";
import OtherContent from "../components/OtherContent";

function About() {
    return ( 
        <>
            <div className="aboutContainer">
                <div className="address">
                    <div className="talk">
                    <h1>Our mission is to make shopping so easier for everyone.</h1>
                    <p>SaxTon was built on the idea of great quality. Use our interactive website and order our valuable items and products, or support us by giving reviews on Saxton.</p>
                    <NavLink activeclassname="Active" to="">Read our story</NavLink>
                </div>
            </div>
            <div className="our-founding">
                <div className="found">
                    <img src="images/found.jpg" alt="found" />
                    <div className="spec">
                        <h2>Our founding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                </div>
            </div>
            <div className="veer">
                <div className="found">
                    <div className="spec-1">
                        <h2>Growth & beyond</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                    <img src="images/vision.jpg" alt="visionimage" />
                </div>
            </div>
        </div>
        <OtherContent />
        </>
     );
}

export default About;