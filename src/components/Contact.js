import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

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
        "template_l7jxsi4", // Replace with your EmailJS Template ID
        {
          name: formData.name, // Maps to {{name}} in the template
          email: formData.email, // Maps to {{email}} in the template
          phone: formData.phone, // Maps to {{phone}} in the template
          message: formData.message, // Maps to {{message}} in the template
        },
        "yOKoG-ZTVWnhod4L5" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.917027500425!2d80.2182784!3d13.0840729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526769882c44fb%3A0xe3259ea46c65a4a!2sTick%20fabricators!5e0!3m2!1sen!2sin!4v1698282444572!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          <p>Contact Info:</p>
          <p>Email: <strong>tickfabricators100@gmail.com</strong></p>
          <p>Manager : <strong>+91 7299945100</strong></p>
          <p>Company : <strong>+91 7299451000</strong></p>
          <p>Address: No: 1/2 Annai Indira Gandhi Street, Kilpauk Garden Road, Chennai 600010</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Contact Us"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
