import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../home/Home";

export default function Content() {
  const location = useLocation();

  return (
    <div className="content">
      {location.pathname === "/dashboard" ? <Home /> : <Outlet />}
    </div>
  );
}
