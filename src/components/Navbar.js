import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../images/logo1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector(".homepage-navbar");
    const hero = document.querySelector(".hero");

    function handleScroll() {
      if (!hero) {
        setScrolled(true);
        navbar?.classList.add("scrolled");
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom < 0) {
        setScrolled(true);
        navbar?.classList.add("scrolled");
      } else {
        setScrolled(false);
        navbar?.classList.remove("scrolled");
      }

      // Sticky headers logic
      const headers = document.querySelectorAll("h3.sticky-top-custom");
      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        if (rect.top <= 75) {
          header.classList.add("is-sticky");
        } else {
          header.classList.remove("is-sticky");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const navbarCollapse = document.querySelector(
      ".navbar-collapse-custom.show"
    );
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  }, [location.pathname]);

  return (
    <nav className="navbar homepage-navbar navbar-expand-md sticky-top sticky-top-nav-custom navbar-custom">
      <div className="container-fluid nav-container-custom">
        <Link
          className="navbar-brand navbar-brand-homepage navbar-brand-custom"
          to="/"
        >
          <img
            src={logo}
            className={`logo-img transition-logo ${scrolled ? "visible" : ""}`}
            alt="Lilly Golden Editorial"
          />
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

        <div
          className="collapse navbar-collapse navbar-collapse-custom"
          id="navbarTogglerDemo02"
        >
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

          <Link to="/contact" className="btn btn-outline-dark">
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}
