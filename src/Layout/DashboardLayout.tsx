import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Component/Naviagtion/SideBar";
import Navbar from "../Component/Naviagtion/Navbar";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar setOpen={setIsOpen} open={isOpen} />
      <SideBar setOpen={setIsOpen} open={isOpen} />
      <div className="main-page">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
