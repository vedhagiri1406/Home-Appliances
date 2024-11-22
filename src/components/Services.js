import React from "react";
import "./Services.css";
import wallpaperImg from "../icons/4.jpg"; // Add appropriate paths for the images
import blindsImg from "../icons/5.jpg";
import mosquitoImg from "../icons/6.jpg";

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        <div className="service-item">
          <div className="service-image">
            <img src={wallpaperImg} alt="Wallpapers" />
          </div>
          <h3>Wallpapers</h3>
          <p>
          Transform the look and feel of your house with our 
          premium wallpapers, designed to enhance your visual experience.
          </p>
        </div>
        <div className="service-item">
          <div className="service-image">
            <img src={blindsImg} alt="Blinds and Curtains" />
          </div>
          <h3>Blinds and Curtains</h3>
          <p>
          Blinds and Curtains offers a wide selection of high-quality window treatments, 
          including custom-made blinds and curtains to enhance any interior.
          </p>
        </div>
        <div className="service-item">
          <div className="service-image">
            <img src={mosquitoImg} alt="Mosquito Nets" />
          </div>
          <h3>Mosquito Nets</h3>
          <p>
          Our high-quality mosquito nets provide effective protection against annoying and dangerous mosquitoes, 
          ensuring peaceful and comfortable sleep.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
