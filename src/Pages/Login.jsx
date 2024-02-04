import { FaEye,FaEyeSlash} from "react-icons/fa";
import { useContext, useState } from "react";
import stateHandler from "../context/stateHandlers";
import { NavLink,useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const {pwdHandler,pwdShow,loginMsg,setLoginMsg,updateAuth,cartShow} = useContext(stateHandler)
    const [loginText,setLoginText] = useState({
        email:"",
        password:""
    })


    const loginChange = (e) => {
        setLoginText((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        
    }
    

    const userAuth = {
        email: loginText.email,
        password: loginText.password
    }

    const loginHandler = async (e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/auths`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userAuth)
        });
        const data = await response.json();
        console.log(data);


        
        if (loginText.email === "" || loginText.password === "") {
            setLoginMsg("Both fields are required");
            setTimeout(() => setLoginMsg(""), 3000);
        } else if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user", JSON.stringify(data.user));
            if (cartShow.length >= 1) {
                navigate("/carts");
            }else{
                navigate("/");
                updateAuth(true)
            }
        } else {
            setLoginMsg("Invalid Credentials");
            setTimeout(() => setLoginMsg(""), 3000);
        }
        
    }
        
        


  return (
    <>
        <div className="loginPage">
            <div className="loginCard">
                <form method="post" onSubmit={loginHandler}>
                <h1>Log In</h1>
                    <input type="text" placeholder="Email" value={loginText.email ?? ''} name="email" onChange={loginChange}/>
                    <input type={pwdShow ? "text" : "password"} placeholder="Password" className="extrapads" value={loginText.password ?? ''} name="password" onChange={loginChange}/>
                    <div className="eyes" onClick={pwdHandler}>
                        {
                            pwdShow ? <FaEye size={"20px"} /> : <FaEyeSlash size={"20px"}/> 
                        }
                    </div>
                    <span style={{color:"red", fontWeight:"bold"}}>{loginMsg}</span>
                    <button type="submit">Login</button>
                    <p>By continuing, you agree to SaxTon terms and condition.</p>
                    <h3>Having trouble logging in ?</h3>
                    <NavLink activeclassname="active" to="/" className="log">I forgot my password</NavLink>
                    <h3>New to SaxTon ?</h3>
                    <NavLink activeclassname="active" to="/SignUp" className="create">Create an account</NavLink>
                </form>
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
        </div>
    </>
  )
}

export default Login