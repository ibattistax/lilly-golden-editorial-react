import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import footerLogo from "../images/logo1-white.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-column column-1">
          <img
            src={footerLogo}
            className="logo-img-footer"
            alt="Lilly Golden Editorial"
          />
          <ul>
            <li className="nav-item nav-item-custom">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Work
              </NavLink>
            </li>
            <li>
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
        </div>
        <div className="footer-column column-3">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lilly-golden-17a7a3203/"
              target="_blank"
              title="Linkedin: Lilly Golden"
              className="social-link"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <div>Represented by Laura Nolan, Aevitas Creative Management</div>
        </div>
      </div>
      <div className="creator-credits">
        <em>
          This website was designed and coded by{" "}
          <a
            href="https://github.com/ibattistax"
            target="_blank"
            rel="noreferrer"
          >
            Isabel Battista
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/ibattistax/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </em>
      </div>
    </footer>
  );
}
