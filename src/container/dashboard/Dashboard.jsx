import React, { useEffect, useState } from "react";
import Content from "../content/Content";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { getItemFromLocalStoroage } from "../../helper/common";

export default function Dashboard() {
  const [profileData, setProfileData] = useState({});

  const token = getItemFromLocalStoroage("token");

  //Getting user profile
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProfile = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me");
      setProfileData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!token) {
      getProfile();
    }
  }, [token]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header profile={profileData} />
        <Content profile={profileData} />
        <Footer />
      </div>
    </div>
  );
}
