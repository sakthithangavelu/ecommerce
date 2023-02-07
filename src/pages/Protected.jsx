import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const email = sessionStorage.getItem("email");
  if (!email) {
    return <Navigate to="/SignIn" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
