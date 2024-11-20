import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="path-to-your-image.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Tick Fabricators, your one-stop solution for enhancing the beauty and functionality of your space!
            We specialize in a diverse range of high-quality products, including mosquito nets, blinds, curtains, wallpaper, false ceilings, and customized name boards.
          </p>
          <p>
            At Tick Fabricators, we understand that every home and office has its unique style and requirements. Our mission is to provide tailored solutions that not only elevate your decor but also ensure comfort and convenience.
          </p>
          <p>
            Whether you're looking to create a serene atmosphere with elegant curtains, protect your home from pesky insects, or add a touch of personality with custom name boards, we have you covered.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
