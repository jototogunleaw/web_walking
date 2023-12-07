import React from "react";
import LogoWhite from "../images/Logo-white.png";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  const handleBtnToHome = () => {
    navigate('/home')
  }
  const handleBtnToAbout = () => {
    navigate('/about')
  }
  const handleBtnToSourceCode = () => {
    navigate('/sourcecode')
  }
  const handleBtnToContact = () => {
    navigate('/contact')
  }

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
              <button onClick={handleBtnToHome} className="nav-link text-white">
                Home
              </button>
            </li>
            <li className="nav-item mx-menu">
              <button onClick={handleBtnToAbout} className="nav-link text-white">
                About
              </button>
            </li>
            <li className="nav-item mx-menu">
              <button onClick={handleBtnToSourceCode} className="nav-link text-white">
                SourceCode
              </button>
            </li>
            <li className="nav-item mx-menu">
              <button onClick={handleBtnToContact} className="nav-link text-white">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
