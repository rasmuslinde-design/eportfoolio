import "./App.css";
import FloatingLines from "./components/FloatingLines";
import ClickSpark from "./components/effects/ClickSpark";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      {/* Background effects */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
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
      </div>
      <ClickSpark />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
