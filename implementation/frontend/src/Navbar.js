import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="Menu">
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            exact
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            to="/login"
          >
            LOGIN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
