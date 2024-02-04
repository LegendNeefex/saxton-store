
import stateHandler from '../context/stateHandlers'
import { useContext,useEffect } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

function Payment() {
  const {totalQuantity} = useContext(stateHandler)
  const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/login")
        }
    },[])
  return (
    <>
      <NavLink activeclassname="active" to="/orders">pay now {`${"$"}`}{totalQuantity}</NavLink>
    </>
  )
}

export default Payment