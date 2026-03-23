import "./App.css";
import FloatingLines from "./components/FloatingLines";
import ClickSpark from "./components/ClickSpark";
import TargetCursor from "./components/TargetCursor";
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
      <Navbar />

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
          <Contact />
        </main>
      </ClickSpark>
    </>
  );
}

export default App;
