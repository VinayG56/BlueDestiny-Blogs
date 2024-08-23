import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import photo from '../settings/assets/photo.jpeg'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account
            </span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
            <label htmlFor="" >Profile Picture
            </label>
            <div className="settingsPP">
                <img src={photo} alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder=""/>
            <label>Email</label>
            <input type="email" placeholder=""/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
