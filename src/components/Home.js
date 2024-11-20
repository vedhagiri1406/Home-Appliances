import React from "react";
import "./Home.css";
import backgroundImage from "./home.jpeg";


function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image dynamically
      }}
    >
      <div className="hero-content">
        <h1>Experience Luxurious Living</h1>
        <p>Where style meets sophistication</p>
        <div className="line"></div>
      </div>
    </section>
  );
}

export default Home;
