import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img
            src="/assets/logo-light.svg"
            alt="Rasmus Linde Logo"
            className="hero-logo-img"
          />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Rasmus Linde</span>
          <span className="hero-subtitle">Junior Software Developer</span>
        </h1>

        <p className="hero-description">
          My name is Rasmus Linde, I am 29 years old, and I am a software
          developer with a passion for building functional and efficient digital
          solutions. I am driven by the challenge of turning complex ideas into
          clean, working code.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View My Work
          </button>
          <button className="btn btn-secondary" onClick={scrollToContact}>
            Get In Touch
          </button>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
