import "./About.css";
import { useMemo, useState } from "react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const About = () => {
  const [hoveredEvolution, setHoveredEvolution] = useState(null);
  const [hoveredCore, setHoveredCore] = useState(null);

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

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-scroll-stack">
          <ScrollStack
            className="about-scroll-stack__scroller"
            itemDistance={80}
            itemStackDistance={26}
            baseScale={0.9}
            itemScale={0.02}
            stackPosition="18%"
            scaleEndPosition="10%"
            useWindowScroll
          >
            <ScrollStackItem itemClassName="about-stack-card">
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
                    <div className="about-split__right" aria-label="Timeline">
                      <div
                        className="about-timeline"
                        onMouseLeave={() => setHoveredEvolution(null)}
                      >
                        <div
                          className="about-timeline__line"
                          aria-hidden="true"
                        />

                        <button
                          type="button"
                          className="about-timeline__item transition-all duration-300"
                          onMouseEnter={() => setHoveredEvolution("education")}
                          aria-label="Present: Software Development @ VOCO"
                        >
                          <span
                            className="about-timeline__dot"
                            aria-hidden="true"
                          />
                          <span className="about-timeline__text">
                            <span className="about-timeline__value">
                              Present: Software Development @ VOCO
                            </span>
                          </span>
                        </button>

                        <button
                          type="button"
                          className="about-timeline__item transition-all duration-300"
                          onMouseEnter={() => setHoveredEvolution("past_life")}
                          aria-label="Past: Mechatronics Foundation"
                        >
                          <span
                            className="about-timeline__dot"
                            aria-hidden="true"
                          />
                          <span className="about-timeline__text">
                            <span className="about-timeline__value">
                              Past: Mechatronics Foundation
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

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
                        gap between mechanical precision and digital innovation.
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
                </div>
              </article>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="about-stack-card">
              <article className="about-interactive-card" aria-label="The Core">
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

                    <div className="about-split__right" aria-label="Code bio">
                      <div
                        className="about-code"
                        onMouseLeave={() => setHoveredCore(null)}
                      >
                        <div className="about-code__titlebar">
                          <span className="about-code__dots" aria-hidden="true">
                            <span className="about-code__dot about-code__dot--red" />
                            <span className="about-code__dot about-code__dot--yellow" />
                            <span className="about-code__dot about-code__dot--green" />
                          </span>
                          <span className="about-code__lang">JavaScript</span>
                        </div>

                        <pre
                          className="about-code__pre"
                          aria-label="bio object"
                        >
                          <code className="about-code__code">
                            <span className="about-code__line">
                              <span className="about-code__kw">const</span> bio{" "}
                              <span className="about-code__op">=</span>{" "}
                              <span className="about-code__brace">&#123;</span>
                            </span>
                            <span className="about-code__line">
                              <span className="about-code__key">role</span>:{" "}
                              <span className="about-code__str">
                                &quot;Problem Solver&quot;
                              </span>
                              ,
                            </span>
                            <span className="about-code__line">
                              <span
                                className="about-code__key about-code__hot transition-all duration-300"
                                onMouseEnter={() => setHoveredCore("mindset")}
                                role="button"
                                tabIndex={0}
                                onFocus={() => setHoveredCore("mindset")}
                              >
                                education
                              </span>
                              :{" "}
                              <span className="about-code__str">
                                &quot;VOCO&quot;
                              </span>
                              ,
                            </span>
                            <span className="about-code__line">
                              <span
                                className="about-code__key about-code__hot transition-all duration-300"
                                onMouseEnter={() => setHoveredCore("mindset")}
                                role="button"
                                tabIndex={0}
                                onFocus={() => setHoveredCore("mindset")}
                              >
                                past_life
                              </span>
                              :{" "}
                              <span className="about-code__str">
                                &quot;Mechatronics&quot;
                              </span>
                              ,
                            </span>
                            <span className="about-code__line">
                              <span
                                className="about-code__key about-code__hot transition-all duration-300"
                                onMouseEnter={() => setHoveredCore("football")}
                                role="button"
                                tabIndex={0}
                                onFocus={() => setHoveredCore("football")}
                              >
                                hobbies
                              </span>
                              : <span className="about-code__brace">[</span>
                              <span className="about-code__str">
                                &quot;Football&quot;
                              </span>
                              ,{" "}
                              <span className="about-code__str">
                                &quot;Tech&quot;
                              </span>
                              <span className="about-code__brace">]</span>
                            </span>
                            <span className="about-code__line">
                              <span className="about-code__brace">&#125;</span>
                              <span className="about-code__semi">;</span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default About;
