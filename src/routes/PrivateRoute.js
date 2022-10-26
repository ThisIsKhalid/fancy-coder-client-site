import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 mx-auto mt-20"></div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;