import { NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = ({ studentCount, averageScore }) => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link nav-link--active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Header
            title="KodeCamp 6.0"
            studentCount={studentCount}
            averageScore={averageScore}
          />
        </div>

        <nav className="navbar-nav">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/enroll" className={navClass}>
            Enroll
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;