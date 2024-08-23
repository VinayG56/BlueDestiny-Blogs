import "./login.css";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <div className="form">
          <form action="" className="loginForm">
            <span className="loginTitle">Login</span>
            <div class="input-box">
              <input type="text" className="loginInput" placeholder="enter your email.." name="" id="" />
              <label>Email</label>
            </div>
            <div class="input-box">                
              <input type="password" className="loginInput" placeholder="Enter your password" name="" id="" />
              <label>Password</label>
            </div>
            <div class="forget">
              <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
            </div>
            <button className="loginButton">Login</button>
            
            <div class="register-sug">
              <p>Don't have an a ccount ,Then <Link className="link" to="/register">Register</Link></p>
            </div>
        </form>
        </div>
      <div class="register">
          <button className="loginRegisterButton"> <Link className="link" to="/register">Register</Link></button>
        </div>
    </div>
  )
}
