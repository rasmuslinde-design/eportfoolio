import "./BounceGallery.css";
import BounceCards from "../BounceCards";
import LogoLoop from "../LogoLoop";
import AnimatedContent from "../AnimatedContent";
import { useEffect, useMemo, useRef, useState } from "react";

const BounceGallery = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Allows global UI (Dock/etc) to react to modal state via CSS.
    document.body.toggleAttribute("data-bounce-modal-open", activeIdx !== null);
    return () => document.body.removeAttribute("data-bounce-modal-open");
  }, [activeIdx]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(!!entry?.isIntersecting);
      },
      {
        root: null,
        // Consider it "in view" when roughly the title/cards area is visible.
        threshold: 0.2,
      },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const projects = useMemo(
    () => [
      {
        title: "Single-Page Site",
        screenshotSrc: "/assets/screenshots/yheleheline.png",
        gifSrc: "/assets/gif/yheleheline.gif",
        technologies: ["HTML", "CSS"],
        description:
          "The very first website I ever built, created as a foundational school project. This static page marks the beginning of my journey into web development, where I focused on mastering semantic HTML5 structures and CSS3 styling principles from scratch.",
        githubUrl: "https://github.com/rasmuslinde-design/YhelehelineHTMLCSS",
        liveUrl:
          "https://vso25linde.ita.voco.ee/veebiarendus/uheleheline_oppeveeb/",
      },
      {
        title: "Multi-Page Site Architecture",
        screenshotSrc: "/assets/screenshots/mitmeleheline.png",
        gifSrc: "/assets/gif/mitmeleheline.gif",
        technologies: ["HTML", "CSS"],
        description:
          "My second major project, moving from a single-page layout to a multi-page structure. Designed as a concept for Hotel VOCO, it showcases progress in managing global navigation, linking internal assets, and maintaining a cohesive design language throughout the entire user journey.",
        githubUrl:
          "https://github.com/rasmuslinde-design/Mitmeleheline_veebileht_Rasmus_Linde",
        liveUrl:
          "https://vso25linde.ita.voco.ee/veebiarendus/mitmeleheline_oppeveeb/",
      },
      {
        title: "Hobby Project: Design-to-Code",
        screenshotSrc: "/assets/screenshots/hobileht.png",
        gifSrc: "/assets/gif/hobileht.gif",
        technologies: ["HTML", "CSS"],
        description:
          "A fan site dedicated to the LA Lakers, developed using a professional Design-to-Code workflow. The project started with a comprehensive UI/UX design phase in Figma, which was then manually translated into a responsive website using clean HTML and CSS, mimicking a real-world developer-designer collaboration.",
        githubUrl: "https://github.com/rasmuslinde-design/Lakersi_hobileht",
        liveUrl: "https://vso25linde.ita.voco.ee/veebiarendus/hobileht/",
      },
      {
        title: "E-commerce Platform",
        screenshotSrc: "/assets/screenshots/epood.png",
        gifSrc: "/assets/gif/epood.gif",
        technologies: ["HTML", "CSS", "JavaScript"],
        description:
          "A comprehensive e-commerce project featuring a dynamic storefront with full front-end and back-end integration. I implemented a custom user authentication system and a real-time localStorage tracking system to manage shopping carts and user sessions, ensuring a persistent and seamless shopping experience.",
        githubUrl: "https://github.com/rasmuslinde-design/epood",
        liveUrl: null,
      },
      {
        title: "SYNC",
        screenshotSrc: "/assets/screenshots/sync.png",
        gifSrc: "/assets/gif/sync.gif",
        technologies: ["React", "Tailwind CSS", "Vite"],
        description:
          "Developed during a fast-paced hackathon, SYNC is an interactive social game created in collaboration with a new team of developers. Our project was recognized as one of the top entries. This experience allowed me to rapidly learn and implement Tailwind CSS while ensuring seamless communication and integration within a multi-developer environment.",
        githubUrl: "https://github.com/rasmuslinde-design/SYNC",
        liveUrl: "https://sync-byye.onrender.com/",
      },
      {
        title: "TinyDungeon",
        screenshotSrc: "/assets/screenshots/tinydungeon.png",
        gifSrc: "/assets/gif/tinydungeon.gif",
        technologies: ["React", "A-Frame", "Zustand", "React Three Fiber"],
        description:
          "The ultimate result of my React final project, where we chose to build a 3D game instead of a standard web application. Mastered through self-directed learning of A-Frame and R3F, TinyDungeon is a full-stack experience featuring real-time physics and a persistent leaderboard system hosted on Render. It is a testament to my dedication to learning new technologies and delivering polished, complex software solutions.",
        githubUrl: "https://github.com/rasmuslinde-design/TinyDunegeon",
        liveUrl: "https://tinydunegeon.onrender.com/",
      },
      {
        title: "Robitrans: Logistics Management System",
        screenshotSrc: "/assets/screenshots/RobiTrans.png",
        gifSrc: "/assets/gif/RobiTrans.gif",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        description:
          "A modern corporate landing page developed for a logistics company. This project focuses on high-end visual storytelling, utilizing ReactBits components to create engaging animations and a premium user experience. Built with React and TypeScript, it demonstrates my ability to integrate and customize complex UI libraries to meet specific business branding needs.",
        githubUrl: "https://github.com/rasmuslinde-design/robitrans",
        liveUrl: "https://robitrans.onrender.com/",
      },
    ],
    [],
  );

  const images = projects.map((p) => p.screenshotSrc);
  const labels = projects.map((p) => p.title);

  // Card tags: keep them readable on the card (non-crosshair). Modal tags will use crosshair.
  const keywords = projects.map((p) => p.technologies);

  const techLogos = useMemo(
    () => [
      { src: "/assets/html1.jpg", alt: "HTML", href: "#" },
      { src: "/assets/css1.jpg", alt: "CSS", href: "#" },
      { src: "/assets/js1.png", alt: "JavaScript", href: "#" },
      { src: "/assets/react1.jpg", alt: "React", href: "#" },
      { src: "/assets/sass1.jpg", alt: "Sass", href: "#" },
      { src: "/assets/tailwind1.png", alt: "Tailwind CSS", href: "#" },
    ],
    [],
  );

  const transformStyles = [
    "rotate(7deg) translate(-315px)",
    "rotate(5deg) translate(-210px)",
    "rotate(0deg) translate(-105px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(105px)",
    "rotate(-5deg) translate(210px)",
    "rotate(7deg) translate(315px)",
  ];

  const activeProject =
    activeIdx === null
      ? null
      : projects[Math.max(0, Math.min(activeIdx, projects.length - 1))];

  const closeModal = () => setActiveIdx(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bounce-gallery"
      aria-label="Bounce cards gallery"
    >
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        {isInView && (
          <div className="bounce-gallery__hint" aria-hidden="true">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse
              duration={0.8}
              ease="bounce.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.15}
              delay={0}
              className="bounce-gallery__hintAnim"
            >
              <div className="bounce-gallery__hintCard">
                <em>Hover to preview, click to expand details.</em>
              </div>
            </AnimatedContent>
          </div>
        )}

        <div className="bounce-gallery__wrap bounce-gallery__wrap--spaced">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            labels={labels}
            keywords={keywords}
            containerWidth={980}
            containerHeight={405}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
            onCardClick={(idx) => setActiveIdx(idx)}
          />
        </div>

        <p className="bounce-gallery__between" aria-hidden="true">
          <em>Explore the timeline from early roots to latest works</em>
        </p>

        <div className="bounce-gallery__logos" aria-label="Technology stack">
          <div className="bounce-gallery__logosInner">
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
      </div>

      {activeProject && (
        <div
          className="bounce-gallery__modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} preview`}
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) closeModal();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
          tabIndex={-1}
        >
          <div className="bounce-gallery__modalWrap" role="document">
            <button
              type="button"
              className="bounce-gallery__close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <div className="bounce-gallery__modal">
              <div className="bounce-gallery__grid">
                {/* -x, +y (top-left): GIF preview */}
                <div className="bounce-gallery__panel bounce-gallery__panel--preview">
                  <div className="bounce-gallery__preview">
                    <img
                      src={activeProject.gifSrc}
                      alt={`${activeProject.title} preview`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* +x, +y (top-right): title, short description, buttons */}
                <div className="bounce-gallery__panel bounce-gallery__panel--meta">
                  <h3 className="bounce-gallery__modalTitle">
                    {activeProject.title}
                  </h3>
                  <p className="bounce-gallery__desc">
                    {activeProject.description}
                  </p>
                </div>

                {/* -x, -y (bottom-left): Centered actions */}
                <div className="bounce-gallery__panel bounce-gallery__panel--tools">
                  <div className="bounce-gallery__actions bounce-gallery__actions--center">
                    <a
                      className="bounce-gallery__iconBtn"
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.596 2 12.253c0 4.524 2.865 8.36 6.839 9.714.5.095.682-.221.682-.49 0-.242-.009-.885-.014-1.738-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.108-1.495-1.108-1.495-.906-.64.069-.627.069-.627 1.002.072 1.53 1.055 1.53 1.055.89 1.563 2.337 1.112 2.907.85.09-.66.348-1.112.635-1.367-2.22-.263-4.555-1.14-4.555-5.07 0-1.12.39-2.033 1.03-2.75-.103-.263-.447-1.32.098-2.75 0 0 .84-.275 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85.004 1.705.122 2.5.35 1.909-1.325 2.75-1.05 2.75-1.05.545 1.43.2 2.487.098 2.75.64.717 1.03 1.63 1.03 2.75 0 3.94-2.338 4.804-4.566 5.062.358.318.678.944.678 1.904 0 1.375-.012 2.484-.012 2.822 0 .271.18.59.688.489C19.138 20.61 22 16.777 22 12.253 22 6.596 17.523 2 12 2z" />
                      </svg>
                    </a>

                    <a
                      className="bounce-gallery__visitBtn"
                      href={activeProject.liveUrl ?? undefined}
                      target={activeProject.liveUrl ? "_blank" : undefined}
                      rel={activeProject.liveUrl ? "noreferrer" : undefined}
                      aria-disabled={!activeProject.liveUrl}
                      tabIndex={activeProject.liveUrl ? 0 : -1}
                      onClick={(e) => {
                        if (!activeProject.liveUrl) e.preventDefault();
                      }}
                    >
                      Visit site
                    </a>
                  </div>
                </div>

                {/* +x, -y (bottom-right): Crosshair effect boxes */}
                <div className="bounce-gallery__panel bounce-gallery__panel--tech">
                  <div className="bounce-gallery__techGrid">
                    {activeProject.technologies.map((t) => (
                      <div key={t} className="skill-card cursor-target">
                        <span className="skill-name">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BounceGallery;
