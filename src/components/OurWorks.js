import React from "react";
import "./OurWorks.css";
import work1 from "../icons/7.jpg"; // Replace with the actual path to your images
import work2 from "../icons/8.jpg";
import work3 from "../icons/9.jpg";

function OurWorks() {
  return (
    <section id="our-works" className="our-works">
      <h2 className="works-title">Our Works</h2>
      <p className="works-description">
        Explore some of our completed projects showcasing our craftsmanship and attention to detail.
      </p>
      <div className="work-gallery">
        <div className="work-item">
          <img src={work1} alt="Work 1" />
          <p>Elegant Ceiling Design</p>
        </div>
        <div className="work-item">
          <img src={work2} alt="Work 2" />
          <p>Modern Living Room Setup</p>
        </div>
        <div className="work-item">
          <img src={work3} alt="Work 3" />
          <p>Creative Wall Design</p>
        </div>
      </div>
    </section>
  );
}

export default OurWorks;
