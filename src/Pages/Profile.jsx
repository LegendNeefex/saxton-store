import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [user,setUser] = useState({})
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImage = ()=>{
    console.log('Input clicked!');
    inputRef.current.click();
  }

  const handleChange = async (e)=>{
    const file = e.target.files[0]
    console.log(file);
    setImage(file)
  }

  useEffect(()=>{
    const uploadImage = async ()=>{
      try {
        if (image) {
          const formData = new FormData();
          formData.append('image', image);
    
          const apiURL = process.env.REACT_APP_API_URL
          const token = localStorage.getItem("token")
          const response = await fetch(`${apiURL}/users/avatar`, {
            method: 'POST',
            headers:{
              Authorization: `Bearer ${token}`
            },
            body: formData
          })
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error('Error uploading image:', error);   
      }
    }
    uploadImage();
  },[image])
 

  useEffect(()=>{
    userFetcher();
    const token = localStorage.getItem("token")
    if (!token) {
    navigate("/login")
    }
  },[])
  
  const userFetcher = async ()=>{
    const token = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    const user = storedUser ? JSON.parse(storedUser) : null;
    const apiURL = process.env.REACT_APP_API_URL

    if (!user) {
      navigate("/login")
      return;
    }

    const response = await fetch (`${apiURL}/users/${user.id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json();
    console.log(data);
    setUser(data);
  }
  
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {image ? 
            (<>
              <img src={URL.createObjectURL(image)} alt="" />
            </>) 
            : 
            (<>
              <img src={`${user.avatar}`} alt="" />
            </>)}
            <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleChange} />
          </div>
          <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
          <div className="profile-email">{user.email}</div>
          <div className="profile-email">username: {user.username}</div>
          <div className="profile-email">country: {user.country}</div>
          <NavLink activeclassname="active" to="">Edit Profile</NavLink>
          <NavLink activeclassname="active" to="" onClick={handleImage}>Add Profile Picture</NavLink>
        </div>
        <div className="profile-details">
          <h2>About Me</h2>
          <p>{user.bio}.</p>
          <h2>Contact Information</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.mobileNumber}</p>
          <h2>Social Media</h2>
          <p>
            FaceBook:
            <NavLink activeclassname="active" to="">JohnDoe</NavLink> 
          </p>
          <p>
            Twitter:
            <NavLink activeclassname="active" to="">@JohnDoe</NavLink>
          </p> 
          <p>Joined Saxton on: {new Date(user.createdAt).toLocaleString()}</p>
        </div>
      </div>
    </>
  )
}

export default Profile