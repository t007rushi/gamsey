import React from "react";
import { useAuth } from "../context/auth-context";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  return user.isUserLoggedIn ? children : <Navigate replace to="/login" />;
};

export default RequireAuth;