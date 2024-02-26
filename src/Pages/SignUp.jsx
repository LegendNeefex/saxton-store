import CountryOptions from "../shared/CountryOptions"
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { useContext,useState } from "react";
import stateHandler from "../context/stateHandlers";
import { NavLink,useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
    const {pwdShow,pwdHandler,text,textHandler,setText,setUser,user} = useContext(stateHandler)
    const [valMessage,setValMessage] = useState("")

    


    function userFormHandler(e) {
        e.preventDefault();

        const userData = {
            "firstName": text.firstName,
            "lastName": text.lastName,
            "email": text.email,
            "mobileNumber": text.mobileNumber,
            "country": text.country,
            "password": text.password,
            "username": text.username

        }

        const numValidation = (text.mobileNumber)
        // const emailTarget = ("@")
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;

        const fields = [
            { name: "firstName", min: 3, max: 20, message: "firstname" },
            { name: "lastName", min: 3, max: 20, message: "lastname" },
            { name: "username", min: 6, max: 15, message: "username" },
            {name: "email", message: "email"},
            { name: "mobileNumber", min: 11, max: 11, message: "Mobile number" },
            {name: "country", message: "country"},
            { name: "password", min: 6, max: Infinity, message: "password" }
        ];
        
        const emptyField = fields.find(field => !text[field.name].trim());
        if (emptyField) {
            setValMessage(`${emptyField.message} is required`);
            setTimeout(() => {
                setValMessage("")
            }, 2000);
            return;
        }

        
        // Continue with the rest of the validation checks
        for (const field of fields) {
            const fieldValue = text[field.name].trim();
    
            if (fieldValue.length < field.min) {
                setValMessage(`${field.message} cannot be lesser than ${field.min} characters`);
                setTimeout(() => {
                    setValMessage("")
                }, 2000);
                return;
            } else if (fieldValue.length > field.max) {
                setTimeout(() => {
                    setValMessage("")
                }, 2000);
                setValMessage(`${field.message} cannot be greater than ${field.max} characters`);
                return;
            }
        }

        //email validation check
        const emailFieldValue = text.email.trim();
        if (!emailFieldValue.includes("@")) {
            setValMessage("Email must contain '@' symbol");
            setTimeout(() => {
                setValMessage("")
            }, 2000);
            return;
        }
    
        // Additional validation checks
        if (isNaN(numValidation)) {
            setValMessage(`MobileNumber has to be a valid number`);
            setTimeout(() => {
                setValMessage("")
            }, 2000);
        } else if (numValidation.trim().length !== 11) {
            setValMessage(`MobileNumber must be exactly 11 characters`);
            setTimeout(() => {
                setValMessage("")
            }, 2000);
        }else if (!passwordReg.test(text.password.trim())) {
            setValMessage(`Password must contain at least 1 symbol, 1 uppercase letter, 1 lowercase letter, and 1 numeric letter`);
            setTimeout(() => {
                setValMessage("")
            }, 2000);
        } else {
            // If all validations pass
            createUser(userData);
        }      
    }

    const createUser = async (userData)=>{
        const apiURL = process.env.REACT_APP_API_URL
        const response = await fetch (`${apiURL}/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        if (response.ok) {
            const data = await response.json(); 
            setUser([data, ...user])
            setText("", {country:""});
            setValMessage("Account Successfully Created, Login on the next page")
            setTimeout(() => {
                setValMessage("");
                navigate("/login")
            }, 3000);
        }else if (response.status === 400) {
            setValMessage("Sorry, Email has already been registered!")
            setTimeout(() => {
                setValMessage("")
            }, 3000);
        }else{
            console.error('Error checking email:', response.statusText);
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
                        <p>Note: A valid functioning email address is required else, you won't get your order emails...</p>
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