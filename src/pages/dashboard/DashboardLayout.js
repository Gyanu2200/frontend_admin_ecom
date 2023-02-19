import React from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../../components/customInput/sideBar/SideBar";
import Header from "../layout/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* <Link to="/" className="navbar-brand">
        <i class="fa-regular fa-bars"></i>
      </Link> */}
      <Header />
      <SideBar />
      <div className="main">{children}</div>
    </div>
  );
};

export default DashboardLayout;
