import React from "react";
import Navbar from "./compnents/Navbar";
import Hero from "./compnents/Hero";
import About from "./compnents/About";
import Service from "./compnents/service";
import Projects from "./compnents/Projects";
import Contact from "./compnents/Contact";
import Footer from "./compnents/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
