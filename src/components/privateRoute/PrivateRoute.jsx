import React from "react";
import { getItemFromLocalStoroage } from "../../helper/common";
import { Navigate } from "react-router-dom";

//HOC for protecting routes that needs authentication
// Redirect to '/' if routes doesnt have token in localstorage

export default function PrivateRoute({ children }) {
  const token = getItemFromLocalStoroage("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
