import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component, redirectTo = "/library" }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
