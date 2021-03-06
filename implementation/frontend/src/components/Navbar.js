import React from "react";
import { NavLink, Link } from "react-router-dom";
import loginService from "../services/login";

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
            to="/view-b"
          >
            VIEW BUSINESS REVIEWS
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
        <li>
          <a
            className="navlink"
            href="https://www.gov.uk/guidance/national-lockdown-stay-at-home"
            target="_blank"
          >
            CURRENT LEGISLATION
          </a>
        </li>
        {loginService.token === null ? (
          <li>
            <NavLink
              className="navlink"
              activeClassName="activenavlink"
              to="/login"
            >
              LOGIN
            </NavLink>
          </li>
        ) : (
          <>
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
                exact
                to="/add-review"
              >
                ADD REVIEW
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
