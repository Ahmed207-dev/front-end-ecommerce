import { Navigate, Outlet } from "react-router-dom";
import ProtectedRouteHook from "../../CustomHook/auth/ProtectedRouteHook";

const ProtectedRoute = ({ authwRole }) => {
  const [userData, isUser, isAdmin] = ProtectedRouteHook();

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  if (authwRole === "user" && !isUser) {
    return <Navigate to="/" replace />;
  }

  if (authwRole === "admin" && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
