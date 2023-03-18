import { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./container/login/Login";
import {
  getItemFromLocalStoroage,
  setItemInLocalStoroage,
} from "./helper/common";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Dashboard from "./container/dashboard/Dashboard";
import About from "./container/about/About";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getItemFromLocalStoroage("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (window?.location?.hash) {
      const queryString = window.location.hash;
      const urlParams = new URLSearchParams(queryString);
      const accessToken = urlParams.get("#access_token");
      const tokenType = urlParams.get("token_type");

      console.log(accessToken, tokenType);

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
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
