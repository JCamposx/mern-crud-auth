import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth.js";
import { routes, url } from "../utils/routes.js";

const ProtectedRoute = () => {
  const { isAuthenticated, verifyToken } = useAuth();
  const location = useLocation();

  useEffect(() => {
    verifyToken();
  }, [location, verifyToken]);

  if (!isAuthenticated) {
    return <Navigate to={url(routes.login)} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
