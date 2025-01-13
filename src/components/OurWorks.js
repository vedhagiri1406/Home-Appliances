import React from "react";
import "./OurWorks.css";
import work1 from "../icons/7.jpg";
import work2 from "../icons/8.jpg";
import work3 from "../icons/9.jpg";
import work4 from "../icons/10.jpg";
import work5 from "../icons/11.jpg";
import work6 from "../icons/12.jpg";
import work7 from "../icons/13.jpg"; // Add new images
import work8 from "../icons/14.jpg";

function OurWorks() {
  const works = [
    { image: work1, title: "Elegant Ceiling Design" },
    { image: work2, title: "Modern Living Room Setup" },
    { image: work3, title: "Creative Wall Design" },
    { image: work4, title: "Stylish Bedroom Decor" },
    { image: work5, title: "Contemporary Kitchen Design" },
    { image: work6, title: "Luxurious Bathroom Setup" },
    { image: work7, title: "Innovative Workspace Design" }, // New card
    { image: work8, title: "Chic Outdoor Patio Setup" }, // New card
  ];

  return (
    <section id="our-works" className="our-works">
      <h2 className="works-title">Our Works</h2>
      <p className="works-description">
        Explore some of our completed projects showcasing our craftsmanship and attention to detail.
      </p>
      <div className="work-gallery">
        {works.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.image} alt={work.title} />
            <p>{work.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurWorks;
