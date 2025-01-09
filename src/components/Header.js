import React, { useState } from "react";
import "./Header.css";
import root1 from "../icons/root.jpg"; // Ensure the image path is correct

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={root1} alt="ICK FABRICATORS" />
        <p className="logo-text">TICK FABRICATORS</p>
      </div>
      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="menu-dropdown"
          onMouseLeave={() => setIsMenuOpen(false)} // Close menu when mouse leaves
        >
          <ul>
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="#our-clients" onClick={() => setIsMenuOpen(false)}>
                Our Clients
              </a>
            </li>
            <li>
              <a href="#our-works" onClick={() => setIsMenuOpen(false)}>
                Our Works
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
