import TextType from "../TextType";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-window" aria-label="Rasmus Linde">
          <div className="hero-logo">
            <img
              src="/assets/logo-black-background.png"
              alt="Rasmus Linde Logo"
              className="hero-logo-img"
              loading="eager"
              decoding="async"
            />
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
