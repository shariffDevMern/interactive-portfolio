import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";
import DrawerAppBar from "./components/Navbar";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import "./App.css";
import  Home  from "./components/Home";

const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
 

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ".vanta",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xf4f4ed,
          color1: 0x952424,
          color2: 0xa1337b,
          colorMode: "lerp",
          wingSpan: 22.0,
          separation: 40.0,
          alignment: 40.0,
          cohesion: 42.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    
    <div className="vanta">
      <BrowserRouter>
      <DrawerAppBar />
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      
      </div>
    
  );
};

export default App;
