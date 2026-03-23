import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "A. Le Coq",
      role: "Internship (Mechatronics)",
      period: "2017-2018",
      description:
        "Maintained and troubleshot complex industrial automation systems. Ensured high operational efficiency through systematic technical diagnostics.",
      skills: [
        "Industrial Automation",
        "Technical Diagnostics",
        "System Maintenance",
      ],
      icon: "🏭",
    },
    {
      company: "Palmako",
      role: "Internship (Mechatronics)",
      period: "2016-2017",
      description:
        "Assisted in equipment setup and performance optimization. Applied technical logic to ensure the stability of production hardware and software interfaces.",
      skills: [
        "Equipment Setup",
        "Performance Optimization",
        "Hardware/Software Integration",
      ],
      icon: "🔧",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-header">
                <h3 className="experience-company">{exp.company}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-role">{exp.role}</h4>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
