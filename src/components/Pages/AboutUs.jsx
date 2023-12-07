import OtherContent from "../OtherContent";

function About() {
    return ( 
        <>
            <div className="aboutContainer">
                <div class="address">
                    <div class="talk">
                    <h1>Our mission is to make shopping so easier for everyone.</h1>
                    <p>SaxTon was built on the idea that quality. Use our interactive website and order our valuable items and products, or support us by giving reviews on Saxton.</p>
                    <a href="/">Read our story</a>
                </div>
            </div>
            <div class="our-founding">
                <div className="found">
                    <img src="images/found.jpg" alt="" />
                    <div class="spec">
                        <h2>Our founding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                    </div>
                </div>
            </div>
            <div class="veer">
                <div class="found">
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