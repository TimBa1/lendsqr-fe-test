import React from "react";
import NavLinks from "./NavLinks";
import { menu } from "./menu";

function SideBar({open,setOpen}:{setOpen:(arg:boolean)=>void, open:boolean}) {
  return (
    <div className={`sidebar ${open?'open-m':""}`}>
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
