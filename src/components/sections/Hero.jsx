import { useEffect, useState, useRef } from "react";
import TextType from "../TextType";
import "./Hero.css";
import { OptimizedPicture } from "../../lib/optimizedImage.jsx";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div 
        className="hero-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          marginBottom: isVisible ? "0px" : "400px",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out, margin-bottom 0.8s ease-out",
        }}
      >
        <div className="hero-window" aria-label="Rasmus Linde">
          <div className="hero-logo">
            <OptimizedPicture
              src="/assets/logo-black-background.png"
              alt="Rasmus Linde Logo"
              className="hero-logo-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              widths={[120, 240, 480]}
              sizes="120px"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
            />
          </div>

          {isVisible && (
            <TextType
              as="h1"
              className="hero-name"
              text={["Rasmus Linde"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              loop={false}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;