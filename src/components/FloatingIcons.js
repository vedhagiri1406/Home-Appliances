import React, { useState } from "react";
import "./FloatingIcons.css";
import { FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";

function FloatingIcons() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleEmailClick = () => {
    setShowEmailForm(!showEmailForm);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
  };

  return (
    <>
      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="tel:+1234567890" className="icon phone-icon" title="Call">
          <FaPhone />
        </a>
        <div
          className="icon email-icon"
          title="Email"
          onClick={handleEmailClick}
        >
          <FaEnvelope />
        </div>
      </div>

      {/* Email Form */}
      {showEmailForm && (
        <div className="email-form">
          <FaTimes className="top-right-close-icon" onClick={handleCloseForm} />
          <div className="form-header">
            <h3>Contact Us</h3>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" placeholder="Description"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              SEND
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default FloatingIcons;
