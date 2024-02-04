import CountryOptions from "../shared/CountryOptions"
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { useContext, useState } from "react";
import stateHandler from "../context/stateHandlers";
import { NavLink,useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const {pwdShow,pwdHandler,text,textHandler,createUser,setText} = useContext(stateHandler)
    const [valMessage,setValMessage] = useState("")

    function userFormHandler(e) {
        e.preventDefault();

        const userData = {
            firstName: text.firstName,
            lastName: text.lastName,
            email: text.email,
            mobileNumber: text.mobileNumber,
            country: text.country,
            password: text.password,
            username: text.username

        }

        const numValidation = (text.mobileNumber)
        const emailTarget = ("@")
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;

        
        if (text.firstName === ""||text.lastName === ""||text.email === ""||text.mobileNumber === ""||text.username === ""||text.password === ""||text.country === "") {
            setValMessage(`All fields are required`)
        }else if (text.firstName.trim().length <= 2) {
            setValMessage(`firstName cannot be lesser than 3 characters`)
        }else if (text.firstName.trim().length > 20) {
            setValMessage(`firstName cannot be greater than 20 characters`)
        }else if (text.lastName.trim().length <= 2) {
            setValMessage(`lastName cannot be lesser than 3 characters`)
        }else if (text.lastName.trim().length > 20) {
            setValMessage(`lastName cannot be greater than 20 characters`)
        }else if (text.username.trim().length <= 5) {
            setValMessage(`userName cannot be lesser than 6 characters`)
        }else if (text.username.trim().length > 15) {
            setValMessage(`userName cannot be greater than 15 characters`)
        }else if (!text.email.includes(emailTarget)) {
            setValMessage(`Email must contain the @ symbol`)
        }else if (isNaN(numValidation)) {
            setValMessage(`MobileNumber has to be a valid number`)
        }else if (numValidation.trim().length <= 10) {
            setValMessage(`MobileNumber cannot be lesser than 11`)
        }else if (numValidation.trim().length > 11) {
            setValMessage(`MobileNumber cannot be greater than 11`)
        }else if (text.password.trim().length <= 5) {
            setValMessage(`password cannot be lesser than 6 characters`)  
        }else if (!passwordReg.test(text.password.trim())) {
            setValMessage(`
                password must contain at least
                1 symbol
                1 uppercase letter
                1 lowercase letter
                1 numeric letter

            `)
        }else{
            setText("",{
                country:""
            })
            setValMessage("")
            createUser(userData)
            navigate("/")
        }
    }
    


  return (
    <>
        <div className="signBody">
                <div className="card" >
                    <form method="post" onSubmit={userFormHandler}>
                        <h1>Sign Up</h1>
                        <input type="text" autoComplete="off" placeholder="firstName" value={text.firstName ?? ''} name="firstName" onChange={textHandler}  />
                        <input type="text" autoComplete="off" placeholder="lastName" value={text.lastName ?? ''} name="lastName" onChange={textHandler} />
                        <input type="text" autoComplete="off" placeholder="username" value={text.username ?? ''} name="username" onChange={textHandler} />
                        <input type="text" autoComplete="off" placeholder="email" value={text.email ?? ''} name="email" onChange={textHandler} />
                        <input type="text" autoComplete="off" placeholder="mobileNumber" value={text.mobileNumber ?? ''} name="mobileNumber" onChange={textHandler} />
                        <CountryOptions />
                        <input type={pwdShow ? "text" : "password"} placeholder="Password" className="extrapads" value={text.password || ""} name="password" onChange={textHandler} />
                        <div className="eye" onClick={pwdHandler}>
                            {
                                pwdShow ? <FaEye size={"20px"} /> : <FaEyeSlash size={"20px"}/> 
                            }
                        </div>
                            <div className="valMessage">
                                {valMessage ? <div>{valMessage}</div> : null}
                            </div>
                        <button type="submit">Sign Up</button>
                        <NavLink activeclassname="active" to="/login" className="extra">if you're already a saxTon user, Kindly click here to login.</NavLink>
                    </form>
                    <div className="textDetails">
                        <h1>SaxTon</h1>
                        <h3>SaxTon helps you buy and order products of your choice .</h3>
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
  )
}

export default SignUp