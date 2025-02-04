import React, { useState, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import DrawerAppBar from "./components/Navbar";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Container, Divider } from "@mui/material";
import scrollstyles from "./components/scrollStyles";
import { Context } from "./Context";
import QuickAccessBtn from "./components/QuickAccessBtn";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [value, setValue] = React.useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-id]");
      let currentActiveId = value;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentActiveId = section.getAttribute("data-id");
        }
      });

      if (currentActiveId !== value) {
        setValue(currentActiveId);
      }
      if (currentActiveId === "Home") {
        setValue("Home");
      }
    };

    const mainContainer = document.getElementById("main");
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
    };
  });

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: ".vanta",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe0e1c,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Context.Provider value={[value, setValue]}>
      <div className="vanta">
        <DrawerAppBar />
        <QuickAccessBtn />
        <Container
          id="main"
          sx={{
            height: { xs: "90vh", md: "87vh" },
            overflowY: "auto",

            ...scrollstyles,
          }}
        >
          <Home />
          <Divider sx={{ marginY: 5, backgroundColor: "white" }} />
          <About />
          <Divider sx={{ marginY: 5, backgroundColor: "white" }} />
          <Experience />
          <Divider sx={{ marginY: 5, backgroundColor: "white" }} />
          <Projects />
          <Divider sx={{ marginY: 5, backgroundColor: "white" }} />
          <Skills />
          <Divider sx={{ marginY: 5, backgroundColor: "white" }} />
          <Contact />
        </Container>
      </div>
    </Context.Provider>
  );
};

export default App;
