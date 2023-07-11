import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { navPages } from "../data";
// import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div
          // initial={{ x: -100 }}
          // animate={{ x: 0 }}
          className="navbar-brand logo fw-bold"
        >
          <Link to="/">
            Alaa <span>Eldeyn</span>
          </Link>
        </div>
        <button
          // initial={{ x: 100 }}
          // animate={{ x: 0 }}
          className="navbar-toggler text-light bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse rounded-bottom" id="myNavbar">
          <ul
            className="navbar-nav ms-auto"
            // initial={{ x: 100 }}
            // animate={{ x: 0 }}
          >
            {navPages.map((page) => {
              const { id, name, link } = page;
              return (
                <li key={id} className="nav-item py-2">
                  <NavLink className="nav-link px-0" to={link}>
                    <span>{name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
