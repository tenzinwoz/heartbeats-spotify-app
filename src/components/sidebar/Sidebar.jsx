import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  let location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const menuList = [
    { path: "/dashboard", text: "Home", icon: "Icon" },
    { path: "/dashboard/about", text: "About Us", icon: "Icon" },
    { path: "/", text: "Playlist", icon: "Icon" },
  ];

  console.log(activeMenu);
  return (
    <div className="sidebar">
      <div className="logo">
        <br></br>
        <br></br>
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
      <hr className="divider" />
      <div className="menu">
        <ul>
          {menuList.map((menu, index) => (
            <li
              key={index}
              className={`${activeMenu === menu.path ? "active" : ""}`}
            >
              <Link to={`${menu.path}`}>{menu.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
