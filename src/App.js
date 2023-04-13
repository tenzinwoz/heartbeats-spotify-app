import { useEffect } from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./container/login/Login";
import {
  getItemFromLocalStoroage,
  setItemInLocalStoroage,
} from "./helper/common";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Dashboard from "./container/dashboard/Dashboard";
import About from "./container/about/About";
import "../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";
import SingleTrack from "./container/singleTrack/SingleTrack";
import SinglePlaylist from "./container/singlePlaylist/SinglePlaylist";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItemFromLocalStoroage("token");
    const tokenType = getItemFromLocalStoroage("tokenType");

    if (token) {
      //Set default header to all api
      axios.defaults.headers.common["authorization"] = `${tokenType} ${token}`;
      navigate("/dashboard");
    } else {
      //remove header if no token found
      delete axios.defaults.headers.common["authorization"];
    }
  }, []);

  useEffect(() => {
    if (window?.location?.hash) {
      const queryString = window.location.hash;
      const urlParams = new URLSearchParams(queryString);
      const accessToken = urlParams.get("#access_token");
      const tokenType = urlParams.get("token_type");

      //Store in local storage
      if (accessToken && tokenType) {
        setItemInLocalStoroage("token", JSON.stringify(accessToken));
        setItemInLocalStoroage("tokenType", JSON.stringify(tokenType));
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route
          path="track/:id"
          element={
            <PrivateRoute>
              <SingleTrack />
            </PrivateRoute>
          }
        />
        <Route
          path="playlist/:id"
          element={
            <PrivateRoute>
              <SinglePlaylist />
            </PrivateRoute>
          }
        />
        <Route
          path="about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
