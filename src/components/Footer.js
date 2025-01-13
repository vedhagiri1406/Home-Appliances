import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2025 Tick Fabricators. All Rights Reserved.</p>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/91729994510"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
