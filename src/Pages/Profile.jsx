import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import ProfileSocials from "../shared/ProfileSocials";
import stateHandler from "../context/stateHandlers";

function Profile() {
  const navigate = useNavigate();
  const {profText,setProfText} = useContext(stateHandler)
  const [user,setUser] = useState({})
  const [editProfile,setEditProfile] = useState(false)
  const [profLetterChange,setProfLetterChange] = useState("")
  const [completedMessage,setCompletedMessage] = useState(false)
  const [errMessage,setErrMessage] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const [eMessage,setEmessage] = useState("")

  const [bioState,setBioState] = useState("")
  const [nameState,setNameState] = useState("")
  const [countryState,setCountryState] = useState("")
  const [socialHandles,setSocialHandles] = useState([])
  const [socialState,setSocialState] = useState("")
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

  const handleEditProfile = async ()=>{
    console.log("clicked");
    setEditProfile(true)
    setProfLetterChange("Add")
    
  }

  const editSubmit = async (e)=>{
    e.preventDefault();
    if (profLetterChange === "Save Changes") {
      console.log("submitted");
      userEdit();
      setProfText({
        bio:"",
        country:"",
        pick:"",
        social:""
      })
      setNameState("")
      setCountryState("")
      setBioState("")
      setSocialState("")
      setErrMessage("")
      setErrorMessage("")
      setEmessage("")
      setEditProfile(false)
      setCompletedMessage(false)
    }
    
  }

   // Edit User Profile
    const userEdit = (async()=>{
        const apiURL = process.env.REACT_APP_API_URL
        const storedUser = localStorage.getItem("user")
        const user = storedUser ? JSON.parse(storedUser) : null;
        const msg = await fetch(`${apiURL}/users/${user.id}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({bio: bioState, socialHandles:socialState, country: countryState,username: nameState})
        })

      const sentBack = await msg.json();
      setUser(sentBack) 
    })

  const handleDone = () =>{
    console.log("done clicked");
    setProfLetterChange("Save Changes")
    setCompletedMessage(false)

  }

  const bioSend = () =>{
    console.log("bio clicked");
    if (profText.bio === "") {
      setErrorMessage("Your bio can't be empty")
      setTimeout(() => {
        setErrorMessage("")
      }, 2000);
    }else{
      setBioState(profText.bio)
     return(
      setProfText({
        bio:"",
      }),
      setErrorMessage("")
     )
    }
  }

  const nameSend = () =>{
    console.log("name clicked");
    if (profText.username === "") {
      setEmessage("Your username can't be empty")
      setTimeout(() => {
        setEmessage("")
      }, 2000);
    }else if (profText.country === "") {
      setEmessage("Your country can't be empty")
      setTimeout(() => {
        setEmessage("")
      }, 2000);
    }else{
      return(
        setNameState(profText.username),
        setCountryState(profText.country),

        setProfText({
          username:"",
          country:""
        }),

        setEmessage("")
      )
    }
  }
  const socialSend = () =>{
    console.log("social clicked");
    if (profText.pick === "" ) {
      setErrMessage("You need to pick a social Handle")
      setTimeout(() => {
        setErrMessage("")
      }, 2000);
    }else if (profText.social === "") {
      setErrMessage("You need to type a username")
      setTimeout(() => {
        setErrMessage("")
      }, 2000);
    }else{
      setSocialState([`${profText.pick}: ${profText.social}`,...socialState])
      return(
        setProfText({
          pick:"",social:""
        }),
        setErrMessage(""),
        setTimeout(() => {
          setCompletedMessage(true)
        }, 1000)
      )
    }
  }

  const handleTextChange = (e) => {
    setProfText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(profText);
    
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

  useEffect(()=>{
    console.log("user", user);
    if (user && user.socialHandles) {
      const socialHandles = user.socialHandles;
      const handlesArray = socialHandles.map((handle, index) => 
        <div key={index}>
          <p>{handle}</p>
        </div>
      )
      setSocialHandles(handlesArray)
      
    } else {
      console.log("Social handles not found in user data.");
    }
  },[user])

  
  
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
          {editProfile
          ? 
          <>
            <div className="profile-details">
              <input type="text" value={profText.username} onChange={handleTextChange} name="username" placeholder="Type Your Username Here"/>
              <input type="text" value={profText.country} onChange={handleTextChange} name="country" placeholder="Type Your Country Here"/>
              <button className="btn-add" type="submit" onClick={nameSend}>Save</button>
            </div>
            <div className="showEdit">
                {nameState ? <div>{nameState}</div> : null}
                {countryState ? <div>{countryState}</div> : null}
              </div>
            <div className="valMessage">
              {eMessage ? <div>{eMessage}</div> : null}
            </div>
          </> 
          : 
          <>
            <div className="profile-name">{`${user.firstName} ${user.lastName}`}</div>
            <div className="profile-email">{user.email}</div>
            <div className="profile-username">username: {user.username}</div>
            <div className="profile-country">country: {user.country}</div>
          </>}
          <NavLink activeclassname="active" to="" onClick={handleEditProfile}>Edit Profile</NavLink>
          <NavLink activeclassname="active" to="" onClick={handleImage}>Add Profile Picture</NavLink>
        </div>
        <div className="profile-details">
          <form method="post" onSubmit={editSubmit}>
            <h2>About Me</h2>
            {editProfile 
            ?
            <>
              <div className="bio-info">
                <input type="text" value={profText.bio} onChange={handleTextChange} name="bio" placeholder="Type Here"/>
                <button className="btn-add" type="submit" onClick={bioSend}>Save</button>
              </div>
              <div className="showEdit">
                {bioState ? <div>{bioState}</div> : null}
              </div>
              <div className="valMessage">
                {errorMessage ? <div>{errorMessage}</div> : null}
              </div>
            </>
            :
            <>
              <p>{user.bio}.</p>
              <h2>Contact Information</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.mobileNumber}</p>
            </>
            }

            <h2>Social Media</h2>
            {editProfile 
            ? 
            <>
              <div className="social-div">
                <ProfileSocials />
                <input type="text" value={profText.social} onChange={handleTextChange} name="social" placeholder="Type Here"/>
                <button className="btn-add" type="submit" onClick={socialSend}>{profLetterChange}</button>
              </div>
              <div className="showEdit">
                {socialState ? <div>{socialState}</div> : null}
              </div>
            </> 
            : 
            <>  
              {socialHandles}
            </>}
            <div className="valMessage">
              {errMessage ? <div>{errMessage}</div> : null}
              {completedMessage ? <NavLink onClick={handleDone}>click here if you're done...</NavLink> : null}
            </div>
            <p>Joined Saxton on: {new Date(user.createdAt).toLocaleString()}</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile