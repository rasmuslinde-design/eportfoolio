import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">❓</div>
            <h3>Who am I?</h3>
            <p>
              My name is Rasmus Linde, I am 29 years old, and I am a software
              developer with a passion for building functional and efficient
              digital solutions. I am driven by the challenge of turning complex
              ideas into clean, working code.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>What and where am I studying?</h3>
            <p>
              I am currently studying software development at VOCO (Tartu
              Vocational College). My studies are highly practical, focusing on
              modern programming principles, database management, and software
              architecture. This hands-on environment allows me to constantly
              apply theory to real-world projects.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💡</div>
            <h3>Why did I choose this field?</h3>
            <p>
              My transition into software development was a natural evolution. I
              previously graduated from VOCO as a Mechatronics Technician, a
              field that combines mechanics, electronics, and programming.
              During those studies, I discovered that while I enjoyed the
              technical complexity of mechatronics, my true passion and strength
              lay in the coding and software side of the projects.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">⚽</div>
            <h3>What are my hobbies and interests?</h3>
            <p>
              Outside of my professional life, I have a deep-rooted background
              in sports. I played football competitively for 11 years, including
              representing the national youth team. Today, I remain a huge
              sports enthusiast and enjoy watching a wide variety of different
              sports. To stay active myself, I am dedicated to weightlifting,
              which helps me maintain discipline and mental focus.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Professional achievements and goals</h3>
            <p>
              My primary focus has been on building a strong technical
              foundation and maintaining a portfolio of my work on GitHub. I am
              dedicated to expanding my skill set through practical projects and
              am eager to contribute to collaborative development teams. My goal
              is to apply my knowledge from VOCO to create impactful software
              and keep growing within the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
