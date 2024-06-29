import React from "react";
import NavLinks from "./NavLinks";
import { menu } from "./menu";
import { Link } from "react-router-dom";
import img from "../../Assets/icons/briefcase 1.svg";
import imf from '../../Assets/np_next_2236826_000000 2.svg'

function SideBar({
  open,
  setOpen,
}: {
  setOpen: (arg: boolean) => void;
  open: boolean;
}) {
  return (
    <div className={`sidebar ${open ? "open-m" : ""}`}>
      <div className="navigation">
        <div className="brief">
          <div className="brief-title">
            <img src={img} alt="icons" />
            Switch Organization
          </div>
          <div className="dropdown">
            <div className="dropbtn">
              <img src={imf} alt='img'/>
            </div>
            <div className="dropdown-content">
              <Link to="#">Owoepo Business</Link>
              <Link to="#">Timba Gebra</Link>
            </div>
          </div>
        </div>
        <>
          {menu.map((nav) => (
            <div onClick={()=>setOpen(!open)} className="key" key={nav.id}>
              <h6>{nav.title}</h6>
              {nav.routes.map((link: any) => (
                <ul key={link.id}>
                  <NavLinks link={link} />
                </ul>
              ))}
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default SideBar;
