import React from "react";
import NavLinks from "./NavLinks";
import { menu } from "./menu";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="navigation">
        {menu.map((nav) => (
          <div className="key" key={nav.id}>
            <h6>{nav.title}</h6>
            {nav.routes.map((link: any) => (
              <ul key={link.id}>
                <NavLinks link={link} />
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
