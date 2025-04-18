import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/recommended">Home</NavLink>

      <NavLink to="/library">My library</NavLink>
    </nav>
  );
};

export default Header;
