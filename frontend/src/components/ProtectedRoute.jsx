import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // ✅ If no token, redirect to register page
  if (!token) {
    return <Navigate to="/register" replace />;
  }
  
  // ✅ If logged in, render page
  return children;
};

export default ProtectedRoute;
