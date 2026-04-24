import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navigation = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Arpit Consultancy</span>
        </div>

        {/* LINKS */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

         <a
      href="https://wa.me/916207822029?text=Hello%20Arpit%20Ji,%20I%20visited%20your%20website%20and%20need%20help%20with%20tax%20filing.%20Please%20guide%20me."
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            Get Consultation
          </a>
        </div>

        {/* MENU */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;