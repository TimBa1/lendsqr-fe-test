import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../Component/Naviagtion/SideBar";
import Navbar from "../Component/Naviagtion/Navbar";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const item = window.localStorage.getItem("@email") || "";
    if (!item) {
      navigate("/");
    }
  },[]);
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
