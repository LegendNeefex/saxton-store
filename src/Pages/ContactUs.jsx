import OtherContent from "../components/OtherContent";

function ContactUs() {
  return (
    <>
      <div className="contactContainer">
        <div>
          <div className="pill">
            <img src="images/rem.png" alt="email logo" />
            <h2>Get in touch</h2>
            <p>We'd love to hear from you</p>
          </div>
            
          <div className="pillar">
            <form action="" method="get" className="pizza">
              <div  className="int_1">
                <label htmlFor="full name">
                  <input type="text" placeholder="Full name" autoComplete="off" required className="int_2" />
                </label>
              </div>
              <div className="int_1">
                <label htmlFor="email">
                <input type="text" placeholder="Email address" autoComplete="off" required className="int_2" />
                </label>
              </div>
              <div className="int_1">
                <label htmlFor="number">
                  <input type="text" placeholder="Phone number" required className="int_2" />
                </label>
              </div>
              <div className="int_1">
                <label htmlFor="Remark">
                  <textarea name="" id="remark" cols="15" rows="5" className="int_2" placeholder="Message"></textarea>
                </label>
              </div>
              <a href="/" className="submit">Submit</a>
            </form>
          </div>
        </div>
      </div>
      <div className="too">
        <div className="boys">
          <div className="yam">
            <img src="images/one.png" alt="" />
            <h3>Chat with us</h3>
            <p>Chat live with one of our support specialists</p>
          </div>
          <div className="yam">
            <img src="images/two.png" alt="" />
            <h3>Ask the community</h3>
            <p>Explore our community htmlForums and communicate with other saxTon users.</p>
          </div>
        </div> 
        <div className="boys">
          <div className="yam">
            <img src="images/three (2).png" alt="" />
            <h3>Support center</h3>
            <p>Browse FAQ's and support articles to find solutions.</p>
          </div>
          <div className="yam">
            <img src="images/four.png" alt="" />
            <h3>Call us</h3>
            <p>Call us during normal business hours at (234) 704 965 7259.</p>
          </div>
        </div>
      </div>
      <OtherContent />
    </>
  )
}

export default ContactUs