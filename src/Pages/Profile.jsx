import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  const navigate = useNavigate();
  
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
        }
    },[])
  return (
    <div>This is your profile page</div>
  )
}

export default Profile