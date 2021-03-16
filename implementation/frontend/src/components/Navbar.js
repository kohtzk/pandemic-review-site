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
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            to="/c-profile"
          >
            CUSTOMER PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            to="/b-profile"
          >
            BUSINESS PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            to="/view-b"
          >
            VIEW BUSINESS REVIEW
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            exact
            to="/add-review"
          >
            ADD REVIEW
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            exact
            to="/c-account-creation"
          >
            CREATE PERSONAL ACCOUNT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="activenavlink"
            exact
            to="/b-account-creation"
          >
            CREATE BUSINESS ACCOUNT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
