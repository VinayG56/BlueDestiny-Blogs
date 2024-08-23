import {Link} from "react-router-dom";
import "./topbar.css"
import { FaBlog } from "react-icons/fa";
import { useState } from "react";


export default function TopBar() {
  const [userState, setuserState] = useState(false);

  const returnHome = (user)=>{
    if(user)
      setuserState=false;
      user=false;
      console.log("logout")
  }

  const user = false;
  return (
    <div className='top'>
      <div className="logodiv"> <FaBlog className="icon"/> <span>BlueDestiny Blogs</span> </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link special" to="/">HOME</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem"><Link className="link" to="/settings">SETTINGS</Link></li>
          <li className="topListItem">
          <Link className="link" to="/" onClick={(e)=>{returnHome(user);}}>{user && "LOGOUT"}</Link>
                
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link reg" to="/register">REGISTER</Link>
              </li>
            
            </ul>
            
          )
        }
      
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
      
    </div>
  )
}