import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "A. Le Coq",
      role: "Internship (Mechatronics)",
      period: "2017–2018",
      description:
        "Executed a specialized project involving the installation and precision configuration of industrial cooling systems. Applied technical blueprints to ensure seamless integration with existing production infrastructure.",
      skills: [
        "System Installation",
        "Industrial Cooling",
        "Technical Integration",
      ],
    },
    {
      company: "Palmako",
      role: "Internship (Mechatronics)",
      period: "2016–2017",
      description:
        "Served as a Duty Mechanic, providing rapid-response troubleshooting and repairs for production line failures. Contributed to large-scale annual preventive maintenance shutdowns to ensure year-round hardware reliability.",
      skills: [
        "Rapid Response",
        "Preventive Maintenance",
        "Hardware Reliability",
      ],
    },
    {
      company: "Puidueksperdid",
      role: "Puidueksperdid",
      period: "2021, 2024",
      description:
        "Managed warehouse logistics including receiving incoming shipments, strategic stock placement, and fulfilling customer orders. Ensured inventory accuracy and streamlined the dispatch process in a high-volume environment.",
      skills: [
        "Inventory Management",
        "Warehouse Logistics",
        "Order Fulfillment",
      ],
    },
    {
      company: "Independent Trader",
      role: "Independent Trader (Proprietary Trading)",
      period: "2022–2023",
      description:
        "Engaged in active day trading using personal capital and passed rigorous evaluations to secure funded accounts from proprietary trading firms. Developed disciplined risk management strategies and analyzed market volatility to hit daily performance targets.",
      skills: ["Risk Management", "Market Analysis", "Proprietary Trading"],
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
