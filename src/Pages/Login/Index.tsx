import React, { useState } from "react";
import logo from "../../Assets/Group.svg";
import image from "../../Assets/pablo-sign-in 1.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      window.localStorage.setItem("@email", email);
      toast.success("login Successful");
      navigate("/dashboard/home");
    } catch (err) {}
  };



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

      <div className="part">
        <div className="logo-part">
          <img src={logo} alt="logo" />
        </div>
        <div className="form">
          <div className="container">
            <h2 className="greetings">Welcome!</h2>
            <p className="title">Enter details to login.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <div className="show-pass">
                {" "}
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <span onClick={() => setShow(!show)} className="hide-pass">
                  SHOW
                </span>
              </div>

              <p className="pass">Forgot password?</p>
              <button type="submit" className="sub-btn">
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
