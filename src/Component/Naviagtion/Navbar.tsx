import React, { useEffect, useState } from "react";
import logo from "../../Assets/Group.svg";
import search from "../../Assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import notification from "../../Assets/np_notification_2425223_000000 1.svg";
import Avatar from "../../Assets/avatar.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({
  open,
  setOpen,
}: {
  setOpen: (arg: boolean) => void;
  open: boolean;
}) {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const item = window.localStorage.getItem("@email") || "";
    setData(item);
  }, []);

  const logout = () => {
    window.localStorage.removeItem("@email");
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="cont">
        <div className="logo">
          <span className="ham" onClick={() => setOpen(!open)}>
            <RxHamburgerMenu size={25} />
          </span>

          <img src={logo} alt="logo" />
        </div>
        <div className="search-input">
          <span>
            <input type="text" placeholder="Search For Anything" />
          </span>
          <span>
            <img src={search} alt="logo" />
          </span>
        </div>
        <div className="nav-items">
          <span className="link">
            <Link to="/">Docs</Link>
          </span>
          <span>
            <img src={notification} alt="bell" />
          </span>
          <span className="nav-cont">
            <img src={Avatar} alt="avatar" />{" "}
            <span className="name">{data.substring(0, 10)}...</span>
            <div className="dropdown">
              <div className="dropbtn">
                <i className=" arrow-down"></i>
              </div>
              <div className="dropdown-content">
                <Link to="#">Settings</Link>
              <div onClick={logout}>
                <Link to="/">Logout</Link></div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
