import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Component/Naviagtion/SideBar";
import Navbar from "../Component/Naviagtion/Navbar";

function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="main-page">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
