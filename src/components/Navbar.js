import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo1.png";

export default function Navbar() {
  return (
    <nav className="navbar homepage-navbar navbar-expand-md sticky-top navbar-custom">
      <div className="container-fluid nav-container-custom">
        <Link
          className="navbar-brand navbar-brand-homepage navbar-brand-custom"
          to="/"
        >
          <div>
            <img src={logo} className="logo-img" alt="Lilly Golden Editorial" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 nav-underline">
            <li className="nav-item nav-item-custom">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item nav-item-custom">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item nav-item-custom">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Work
              </NavLink>
            </li>

            <li className="nav-item nav-item-custom">
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Testimonials
              </NavLink>
            </li>
          </ul>

          {/* Contact as a route */}
          <Link to="/contact" className="btn btn-outline-dark">
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}
