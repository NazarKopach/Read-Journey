import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
