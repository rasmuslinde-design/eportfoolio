import "./Education.css";

const Education = () => {
  const education = [
    {
      period: "2025 – Present",
      institution: "VOCO (Tartu Vocational College)",
      degree: "Software Development",
      description:
        "Focusing on modern programming principles, database management, and software architecture with hands-on practical projects.",
      icon: "💻",
    },
    {
      period: "2016 – 2018",
      institution: "VOCO (Tartu Vocational College / KHK)",
      degree: "Mechatronics Technician",
      description:
        "Studied the integration of mechanics, electronics, and programming. Discovered passion for software development.",
      icon: "⚙️",
    },
    {
      period: "2013 – 2016",
      institution: "Tartu Kristjan Jaak Peterson Upper Secondary School",
      degree: "General Secondary Education",
      description:
        "Completed comprehensive secondary education with focus on sciences and mathematics.",
      icon: "🎓",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-institution">{item.institution}</h3>
                <h4 className="timeline-degree">{item.degree}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
