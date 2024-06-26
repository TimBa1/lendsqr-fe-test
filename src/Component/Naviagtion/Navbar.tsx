import React from "react";
import logo from "../../Assets/Group.svg";
import search from "../../Assets/search.svg";
import { Link } from "react-router-dom";
import notification from "../../Assets/np_notification_2425223_000000 1.svg";
import Avatar from "../../Assets/avatar.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="cont">
        <div className="logo">
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
          <span>
            <Link to="/">Docs</Link>
          </span>
          <span>
            <img src={notification} alt="bell" />
          </span>
          <span className='nav-cont'>
            <img src={Avatar} alt="avatar" />{" "}
            <span className="name">Ayodele</span>
            <div className="dropdown">
              <div className="dropbtn">
                <i className=" arrow-down"></i>
              </div>
              <div className="dropdown-content">
                <Link to="#">Settings</Link>
                <Link to="#">Logoout</Link>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
