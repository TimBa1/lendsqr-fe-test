import React from "react";
import logo from '../../Assets/Group.svg'
import image from '../../Assets/pablo-sign-in 1.svg'


function Login() {
  return (
    <div className="login">
      <div className="hero">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="img-container">
          <img src={image} alt="logo" />
        </div>
      </div>
      <div className="form">
        <div className='container'>
          <h2 className="greetings">Welcome!</h2>
        <p className="title">Enter details to login</p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="password" />
          <p className="pass">Forgot password?</p>
          <button className="sub-btn">LOG IN</button>
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
