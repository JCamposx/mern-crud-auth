import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { routes, url } from "../utils/routes.js";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={url(routes.login)} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
