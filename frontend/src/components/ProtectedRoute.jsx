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

  return (
    <div className="mx-auto max-w-7xl px-0 max-sm:px-4 sm:px-6 md:px-8 lg:px-10 mt-10 mb-8">
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
