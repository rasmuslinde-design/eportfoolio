import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML & CSS", level: 90 },
        { name: "Sass", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
      ],
    },
    {
      category: "3D & Animation",
      items: [
        { name: "React Three Fiber", level: 75 },
        { name: "Drei", level: 70 },
        { name: "Rapier Physics", level: 65 },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Technical Problem Solving", level: 90 },
        { name: "Teamwork", level: 95 },
        { name: "Communication", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
