import React from "react";
import Content from "../content/Content";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
        <Content />
      </div>
    </div>
  );
}
