import "./register.css";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
        <div className="form-reg">
          <form action="" className="registerForm">
            <span className="registerTitle">Register</span>
            <div class="input-box">
              <input type="text" className="registerInput" placeholder="Enter your name..." name="" id="" />
              <label>Username</label>
            </div>
            <div class="input-box">
              <input type="text" className="registerInput" placeholder="Enter your email..." name="" id="" />
              <label>Email</label>
            </div>
            <div class="input-box">
              <input type="password" className="registerInput" placeholder="Enter your password....." name="" id="" />
              <label>Password</label>
            </div>
            <button className="registerButton">Register</button>
            <div class="login-sug">
              <p>Already have an account ,Then <Link className="link" to="/login">Login</Link></p>
            </div>
          </form>
        </div>
        <div class="register">
          <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    </div>
  )
}
