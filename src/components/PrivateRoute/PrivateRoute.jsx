import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component, redirectTo = "/register" }) => {
  const isLoggedIn = false;
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};
