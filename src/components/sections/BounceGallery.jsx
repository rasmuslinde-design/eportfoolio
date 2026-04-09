import "./BounceGallery.css";
import BounceCards from "../BounceCards";

const BounceGallery = () => {
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
    "https://picsum.photos/450/450?grayscale",
  ];

  const labels = [
    "Üheleheline veebileht",
    "Mitmeleheline veebileht",
    "Hobileht",
    "Epood",
    "SYNC",
    "TinyDungeon",
  ];

  const keywords = [
    ["HTML", "CSS"],
    ["HTML", "CSS"],
    ["HTML", "CSS"],
    ["HTML", "CSS", "JavaScript"],
    ["React", "Tailwind CSS", "Vite"],
    ["React", "A-Frame", "Zustand", "3D"],
  ];

  const transformStyles = [
    "rotate(5deg) translate(-210px)",
    "rotate(0deg) translate(-105px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(105px)",
    "rotate(-5deg) translate(210px)",
    "rotate(7deg) translate(315px)",
  ];

  return (
    <section className="bounce-gallery" aria-label="Bounce cards gallery">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="bounce-gallery__wrap">
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
            enableHover
          />
        </div>
      </div>
    </section>
  );
};

export default BounceGallery;
