import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  let location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  const menuList = [
    { path: "/dashboard", text: "Home", icon: "Icon" },
    {
      path: "/",
      text: "Playlist",
      icon: "Icon",
      submenu: [
        { path: "/playlist/happy", text: "Happy Feet", icon: "Icon" },
        { path: "/playlist/sad", text: "Sad Vibes", icon: "Icon" },
        { path: "/playlist/cozy", text: "Cozy Nights", icon: "Icon" },
        { path: "/playlist/energy", text: "Energy Mode", icon: "Icon" },
      ],
    },
    { path: "/dashboard/about", text: "About Us", icon: "Icon" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <br />
        <br />
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
              {menu.submenu ? (
                <div className="dropdown">
                  <Link to={`${menu.path}`}>{menu.text}</Link>
                  <div className="dropdown-content">
                    {menu.submenu.map((subMenu, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`${subMenu.path}`}
                        style={{ marginLeft: "10px" }}
                      >
                        {subMenu.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={`${menu.path}`}>{menu.text}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
