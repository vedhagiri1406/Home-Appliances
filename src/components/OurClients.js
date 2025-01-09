// src/components/OurClients.js
import React from "react";
import "./OurClients.css";
import client1 from "../icons/buhari.jpg";
import client2 from "../icons/appasami.png";
import client3 from "../icons/phonix.jpg";
import client4 from "../icons/yesbank.jpg";

const clients = [
  { name: "Buhari", img: client1 },
  { name: "Appaswamy", img: client2 },
  { name: "Phoenix", img: client3 },
  { name: "Yes Bank", img: client4 },
];

function OurClients() {
  return (
    <section id="our-clients" className="our-clients">
      <div className="our-clients-container">
        <h2>Our Clients</h2>
        <p className="works-description">
          Meet some of the amazing clients we have worked with over the years.
        </p>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img src={client.img} alt={client.name} className="client-img" />
              <h3>{client.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClients;