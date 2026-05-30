import "./About.css";
import { useEffect, useMemo, useState } from "react";
import { OptimizedPicture } from "../../lib/optimizedImage.jsx";

const About = () => {
  const [hoveredEvolution] = useState(null);
  const [hoveredCore] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const isActive = useMemo(() => {
    return {
      evolution: {
        education: hoveredEvolution === "education",
        past_life: hoveredEvolution === "past_life",
      },
      core: {
        mindset: hoveredCore === "mindset",
        football: hoveredCore === "football",
      },
    };
  }, [hoveredCore, hoveredEvolution]);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    // Allows global UI (Navbar / Contact widget) to react to About modal state via CSS.
    document.body.toggleAttribute(
      "data-about-modal-open",
      activeModal !== null,
    );
    return () => document.body.removeAttribute("data-about-modal-open");
  }, [activeModal]);

  const modalCopy = useMemo(() => {
    return {
      evolution: {
        title: "Bridging Precision and Logic: My Journey",
        sections: [
          {
            heading: null,
            paragraphs: [
              "My path into software development didn’t start at a keyboard, but rather in the workshop. Having studied Mechatronics, I spent a lot of time at the intersection of mechanical systems, electronics, and programming. While I appreciated the complexity of the physical world, I soon discovered that my true passion wasn’t in the grease and gears of mechanics—it was in the logic that made them move.",
            ],
          },
          {
            heading: "From Physical Systems to Digital Solutions",
            paragraphs: [
              "During my internships, I realized that while mechanical troubleshooting felt like a chore, debugging code felt like a puzzle I couldn't wait to solve. If a program didn't work, I didn't feel frustrated; I felt motivated to research, learn, and improve until it was perfect. This drive to constantly refine my skills is what led me to pivot fully into Software Development.",
              'My mechatronics background gave me a unique "hardware-first" perspective. It taught me that every line of code has a direct consequence, fostering a mindset focused on structural integrity and efficiency.',
            ],
          },
          {
            heading: "The Vision for the Future",
            paragraphs: [
              "My goal is simple: to become a developer capable of taking any client’s vision and turning it into a high-quality digital reality. I am a firm believer in clean code and intuitive user experiences.",
              "In the long run, I aspire to take on leadership roles or even build my own firm, but I know that every great leader starts by mastering the fundamentals. Right now, I am focused on soaking up every bit of experience and seeing how real-world systems operate from the inside out.",
              "I don’t just write code—I build solutions with heart and technical precision.",
            ],
          },
        ],
      },
      core: {
        title: "The Core of My Work Ethic: Resilience & Reliability",
        sections: [
          {
            heading: null,
            paragraphs: [
              "While my technical skills are built at the desk, my character was forged on the football pitch and refined through years of disciplined routine. I believe that a great developer isn't just someone who writes clean code, but someone who remains calm under pressure and understands the value of the team.",
            ],
          },
          {
            heading: "Lessons from the Pitch: Adaptability and Grit",
            paragraphs: [
              "I spent 11 years playing competitive football, most notably at JK Tammeka, where I developed my foundation as a player. My journey eventually led me to represent the Estonian national youth teams, an experience that taught me one of my most valuable professional lessons: adaptability.",
              "I started my career as a striker, driven by the goal of scoring. However, when my team needed a solid center-back, I stepped up. That shift from leading the attack to becoming the backbone of the defense defined me as a player. In development, I approach projects with that same mindset—I am flexible, I see the big picture, and I do what is necessary to ensure the team’s success.",
              "Competitive sports also taught me how to handle defeat. Facing opponents who are technically superior doesn't discourage me; it provides perspective. It reminds me that discipline beats talent when talent doesn’t work hard, and there is always something new to learn from those better than you.",
            ],
          },
          {
            heading: 'The Power of Routine & "The Labrador Legacy"',
            paragraphs: [
              "When I’m not coding, you’ll likely find me with Eros, my black Labrador. Eros is the third in a proud line of Labradors in my life, following Eger and Thor.",
              'Labradors are known for their intelligence and empathy, and having them in my life has taught me the importance of consistency. Eros is my "routine-enforcer"—he reminds me to step away from the screen, clear my head, and maintain a healthy balance. This discipline translates directly into my work; I believe that steady, daily progress and a solid routine are what lead to long-term excellence.',
            ],
          },
          {
            heading: "My Philosophy: Collective Growth",
            paragraphs: [
              "I am a sports enthusiast through and through—whether it's football, basketball, or hockey, I’m inspired by the pursuit of excellence. But my biggest takeaway from years of being an athlete is my belief in collective growth.",
              "I’ve learned that we move faster and more effectively when we grow together. Whether it’s through code reviews, pair programming, or simply helping a teammate solve a tricky bug, I thrive in environments where knowledge is shared.",
              'I don\'t just aim to be a better developer every day; I aim to be the kind of teammate who makes the whole "squad" better.',
            ],
          },
        ],
      },
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="section-container">
        <header className="about-header">
          <h2 className="section-title about-heroTitle">About Me</h2>
        </header>

        <div className="about-heroRow">
          <div className="about-heroMedia">
            <div className="about-heroImageFrame">
              <OptimizedPicture
                className="about-heroImage"
                src="/assets/screenshots/eros.webp"
                alt=""
                loading="lazy"
                decoding="async"
                widths={[480, 768, 1024, 1280]}
                sizes="(max-width: 768px) 90vw, 520px"
                width={640}
                height={800}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="about-heroCaption">
              Me and my four-legged friend Eros
            </p>
          </div>

          <div className="about-right">
            <div className="about-static-cards">
              <div className="about-stack-card">
                <article
                  className="about-interactive-card"
                  aria-label="The Evolution"
                >
                  <header className="about-card-header">
                    <h3 className="about-card-title">
                      From Hardware to Software
                    </h3>
                  </header>

                  <div className="about-card-body">
                    <div className="about-split">
                      <div className="about-split__left">
                        <p
                          className={`about-sentence transition-all duration-300 ${
                            isActive.evolution.education ? "is-active" : ""
                          }`}
                          data-id="education"
                        >
                          My name is Rasmus Linde, a 29-year-old Software
                          Developer with a unique background in Mechatronics.
                          Currently refining my expertise at VOCO, I bridge the
                          gap between mechanical precision and digital
                          innovation.
                        </p>

                        <p
                          className={`about-sentence transition-all duration-300 ${
                            isActive.evolution.past_life ? "is-active" : ""
                          }`}
                          data-id="past_life"
                        >
                          My transition into software development was a natural
                          evolution; I previously graduated from VOCO as a
                          Mechatronics Technician, a field that combines
                          mechanics, electronics, and programming.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="about-readMore"
                      onClick={() => setActiveModal("evolution")}
                    >
                      Read more
                    </button>
                  </div>
                </article>
              </div>

              <div className="about-stack-card">
                <article
                  className="about-interactive-card"
                  aria-label="The Core"
                >
                  <header className="about-card-header">
                    <h3 className="about-card-title">Mindset & Discipline</h3>
                  </header>

                  <div className="about-card-body">
                    <div className="about-split">
                      <div className="about-split__left">
                        <p
                          className={`about-sentence transition-all duration-300 ${
                            isActive.core.mindset ? "is-active" : ""
                          }`}
                          data-id="mindset"
                        >
                          I approach coding with the same precision I used in
                          mechanics—focusing on structural integrity and
                          efficiency.
                        </p>

                        <p
                          className={`about-sentence transition-all duration-300 ${
                            isActive.core.football ? "is-active" : ""
                          }`}
                          data-id="football"
                        >
                          I draw my discipline and team-player attitude from 11
                          years of competitive football, representing national
                          youth teams and always pushing for collective growth.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="about-readMore"
                      onClick={() => setActiveModal("core")}
                    >
                      Read more
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <div
          className="about-modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalCopy[activeModal].title} details`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
          tabIndex={-1}
        >
          <div className="about-modalWrap" role="document">
            <button
              type="button"
              className="about-modalClose"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <div className="about-modal">
              <h3 className="about-modalTitle">
                {modalCopy[activeModal].title}
              </h3>
              {modalCopy[activeModal].sections ? (
                <div className="about-modalBody">
                  {modalCopy[activeModal].sections.map((section, idx) => (
                    <div key={idx} className="about-modalSection">
                      {section.heading && (
                        <h4 className="about-modalHeading">
                          {section.heading}
                        </h4>
                      )}
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="about-modalParagraph">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="about-modalBody">{modalCopy[activeModal].body}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
