import React from "react";
import LogoWhite from "../images/Logo-white.png";
import "../css/Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-relative bg-transparent">
      <div className="container-fluid ">
        <a href="/" className="navbar-brand d-content">
          <img src={LogoWhite} alt="Logo" className="logo-img"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-menu">
            <li className="nav-item mx-menu">
              <a href="/home" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item mx-menu">
              <a href="/about" className="nav-link text-white">
                About
              </a>
            </li>
            <li className="nav-item mx-menu">
              <a href="/sourcecode" className="nav-link text-white">
                SourceCode
              </a>
            </li>
            <li className="nav-item mx-menu">
              <a href="/contact" className="nav-link text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
