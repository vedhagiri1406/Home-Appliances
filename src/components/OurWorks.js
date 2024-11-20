import React from "react";
import "./OurWorks.css";

function OurWorks() {
  return (
    <section id="our-works" className="our-works">
      <h2>Our Works</h2>
      <p>Take a look at some of our best projects.</p>
      <div className="work-gallery">
        <img src="path/to/work1.jpg" alt="Work 1" />
        <img src="path/to/work2.jpg" alt="Work 2" />
        <img src="path/to/work3.jpg" alt="Work 3" />
      </div>
    </section>
  );
}

export default OurWorks;
