import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
