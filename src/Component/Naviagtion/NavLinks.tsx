import { NavLink } from "react-router-dom";

const NavLinks = ({ link }: { link: any }) => {

  return (
    <>
     <li>
      <NavLink to={link.href}>
        <span>
          <img src={link.icon} alt="" />
        </span>{" "}
        <span>{link.name}</span>
      </NavLink>

    </li>
    </>
    
   
  );
};

export default NavLinks;
