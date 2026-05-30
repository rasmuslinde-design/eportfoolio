import "./App.css";
import { lazy, Suspense } from "react";
import ClickSpark from "./components/ClickSpark";
import TargetCursor from "./components/TargetCursor";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Hero from "./components/sections/Hero";

const FloatingLines = lazy(() => import("./components/FloatingLines"));
const About = lazy(() => import("./components/sections/About"));
const BounceGallery = lazy(() => import("./components/sections/BounceGallery"));
const Education = lazy(() => import("./components/sections/Education"));
const Experience = lazy(() => import("./components/sections/Experience"));

function App() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        targetSelector=".cursor-target"
      />

      {/* Background effects */}
      <Suspense
        fallback={
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: -1,
              pointerEvents: "none",
            }}
          />
        }
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
      </Suspense>

      {/* Classic top navbar (sticky) */}
      <header className="app-top-bar" aria-label="Top navigation">
        <div className="app-top-bar__inner">
          <Navbar />
        </div>
      </header>

      {/* ContactMe: fixed bottom-left (original placement) */}
      <div className="app-contact-widget" aria-label="Contact">
        <ContactMe />
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
        <main style={{ paddingTop: "92px" }}>
          <Hero />
          <Suspense fallback={null}>
            <About />
            <BounceGallery />
            <Education />
            <Experience />
          </Suspense>
        </main>
      </ClickSpark>
    </>
  );
}

export default App;
