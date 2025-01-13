import React, { useState } from "react";
import "./FloatingIcons.css";
import { FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

function FloatingIcons() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleEmailClick = () => {
    setShowEmailForm(!showEmailForm);
  };

  const handleCloseForm = () => {
    setShowEmailForm(false);
    setFormData({ name: "", email: "", description: "" }); // Clear the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_xsf8adr", // Replace with your EmailJS Service ID
        "template_xvmmrtj", // Replace with your EmailJS Template ID
        {
          name: formData.name, // Maps to {{name}} in the template
          email: formData.email, // Maps to {{email}} in the template
          description: formData.description, // Maps to {{description}} in the template
        },
        "p3vPj2YKVNjlHRvQC" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", description: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send the message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
        setShowEmailForm(false); // Close the form after sending
      });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "917299451000"; // Replace with your phone number (include country code)
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="tel:+917299451000" className="icon phone-icon" title="Call">
          <FaPhone />
        </a>
        <div
          className="icon whatsapp-icon"
          title="WhatsApp"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp />
        </div>
      </div>

      {/* Email Form */}
      {showEmailForm && (
        <div className="email-form">
          <FaTimes className="top-right-close-icon" onClick={handleCloseForm} />
          <div className="form-header">
            <h3>Contact Us</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default FloatingIcons;
