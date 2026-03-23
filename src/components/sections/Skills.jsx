import LogoLoop from "../LogoLoop";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML & CSS" },
        { name: "Sass" },
        { name: "JavaScript" },
        { name: "React" },
      ],
    },
    {
      category: "3D & Animation",
      items: [
        { name: "React Three Fiber" },
        { name: "Drei" },
        { name: "Rapier Physics" },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Technical Problem Solving" },
        { name: "Teamwork" },
        { name: "Communication" },
      ],
    },
  ];

  const techLogos = [
    { src: "/assets/html1.jpg", alt: "HTML", href: "#" },
    { src: "/assets/css1.jpg", alt: "CSS", href: "#" },
    { src: "/assets/js1.png", alt: "JavaScript", href: "#" },
    { src: "/assets/react1.jpg", alt: "React", href: "#" },
    { src: "/assets/sass1.jpg", alt: "Sass", href: "#" },
    { src: "/assets/tailwind1.png", alt: "Tailwind CSS", href: "#" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-items skill-cards">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card cursor-target">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Logos Loop */}
        <div className="tech-logos-section">
          <div
            style={{
              height: "150px",
              position: "relative",
              overflow: "hidden",
              margin: "2rem 0",
            }}
            className="cursor-target"
          >
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={80}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology stack"
            />
          </div>
        </div>

        <div className="languages-section">
          <h3 className="category-title">Languages</h3>
          <div className="languages">
            <div className="language-card">
              <span className="language-flag">🇪🇪</span>
              <span className="language-name">Estonian</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-card">
              <span className="language-flag">🇬🇧</span>
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
