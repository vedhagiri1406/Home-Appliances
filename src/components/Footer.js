import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import root1 from "../icons/root.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={root1} alt="ICK FABRICATORS" />
          </div>
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#our-works">Our Works</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <a
            href="https://www.facebook.com/pages/Tick%20Fabricators/343126159525845/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/tick.fabricators1551"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
