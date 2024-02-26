import { useContext } from "react"
import stateHandler from "../context/stateHandlers"

function ProfileSocials() {
    const {socialClick} = useContext(stateHandler)
  return (
    <div className="socaialContainer">
        <label htmlFor="socials">
            <select className="socials" onChange={socialClick}>
                <option value="">Socials</option>
                <option value="FaceBook">FaceBook</option>
                <option value="Twitter">Twitter</option>
                <option value="Snapchat">Snapchat</option>
                <option value="Instagram">Instagram</option>
                <option value="Thread">Thread</option>
                <option value="Reddit">Reddit</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Pinterest">Pinterest</option>
            </select>
        </label>
    </div>
  )
}

export default ProfileSocials