import "./App.css";
import { useLayoutEffect, useRef, useState } from "react";
import FloatingLines from "./components/FloatingLines";
import ClickSpark from "./components/ClickSpark";
import TargetCursor from "./components/TargetCursor";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

function App() {
  const contactWrapRef = useRef(null);
  const [rightSpacerWidth, setRightSpacerWidth] = useState(0);

  useLayoutEffect(() => {
    const el = contactWrapRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setRightSpacerWidth(Math.ceil(rect.width));
    };

    measure();

    // Keep it synced on responsive changes.
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        targetSelector="#skills .cursor-target"
      />

      {/* Background effects */}
      <FloatingLines
        linesGradient={["#2cdb29", "#000000", "#8f8990"]}
        animationSpeed={1}
        interactive
        bendRadius={5}
        bendStrength={-0.9}
        mouseDamping={0.06}
        parallax
        parallaxStrength={0.3}
      />

      {/* Navigation - Fixed at bottom */}
      <div
        className="app-bottom-bar"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: "2rem",
          zIndex: 99999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div ref={contactWrapRef} style={{ pointerEvents: "auto" }}>
            <ContactMe />
          </div>

          <div
            style={{
              pointerEvents: "auto",
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Navbar />
          </div>

          {/* Right spacer mirrors ContactMe width so Dock stays truly centered */}
          <div aria-hidden="true" style={{ width: rightSpacerWidth }} />
        </div>
      </div>

      {/* Click Spark Effect */}
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Main content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
        </main>
      </ClickSpark>
    </>
  );
}

export default App;
