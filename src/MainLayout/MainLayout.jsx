import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/Header/Header.jsx";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

export default MainLayout;
