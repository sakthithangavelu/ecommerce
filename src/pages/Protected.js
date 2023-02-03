import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const email = sessionStorage.getItem("email");
  if (!email) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};

export default Protected;
