import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import stateHandler from "../context/stateHandlers"

function LogOut() {
  const navigate = useNavigate();
  const {updateAuth} = useContext(stateHandler)
  const token = localStorage.getItem("token")

  function LogOutHandler() {
    localStorage.clear();
    updateAuth(true)
    navigate("/")
  }

  return (
    <div className="logoutContainer">
      <h3>Are you sure you want to log out ?</h3>
      <p>Note: Doing this simply means you will have to login on your next visit...</p>
      <div className="btn">
        <NavLink activeclassname="active" className="continue" to="/products">Continue on SaxTon</NavLink>
        <button className="out" onClick={LogOutHandler}>LogOut</button>
      </div>
    </div>
  )
}

export default LogOut