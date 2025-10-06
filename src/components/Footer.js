import React from "react";
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
            <li>
              <a href="index.html">Homepage</a>
            </li>
            <li>
              <a href="about.html">About Me</a>
            </li>
            <li>
              <a href="testimonials.html">Testimonials</a>
            </li>
            <li>
              <a href="work.html">Previous Work</a>
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
        </em>
      </div>
    </footer>
  );
}
