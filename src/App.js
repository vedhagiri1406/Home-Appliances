import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import OurWorks from "./components/OurWorks";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <FloatingIcons/>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <OurWorks />
      <Footer />
    </div>
  );
}

export default App;
