import React from "react";
import "./Home.css";
import backgroundImage from "../icons/home.jpeg"; // Ensure the image path is correct

function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Experience Luxurious Living</h1>
          <p>Where style meets sophistication</p>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
