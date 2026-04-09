import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";
import StarBorder from "./StarBorder";

export default function BounceCards({
  className = "",
  images = [],
  labels = [],
  keywords = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
    "rotate(6deg) translate(255px)",
  ],
  enableHover = true,
}) {
  const containerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(target, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -220 : 220;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(target, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(target, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        position: "relative",
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} ${hoveredIdx !== null && hoveredIdx !== idx ? "is-dimmed" : ""} ${hoveredIdx === idx ? "is-active" : ""}`}
          style={{
            transform: transformStyles[idx] ?? "none",
          }}
          onMouseEnter={() => {
            setHoveredIdx(idx);
            pushSiblings(idx);
          }}
          onMouseLeave={() => {
            setHoveredIdx(null);
            resetSiblings();
          }}
        >
          <StarBorder
            as="div"
            className="bounceCardsStarBorder"
            color="rgba(255,255,255,1)"
            speed={hoveredIdx === idx ? "5.6s" : "7s"}
            thickness={3}
          >
            <img className="image" src={src} alt={`card-${idx}`} />

            <div className="bounceCardsOverlay" aria-hidden="true">
              {!!labels[idx] && (
                <div className="bounceCardsTitle">{labels[idx]}</div>
              )}

              {Array.isArray(keywords[idx]) && keywords[idx].length > 0 && (
                <div className="bounceCardsTags">
                  {keywords[idx].map((k) => (
                    <span key={k} className="bounceCardsTag">
                      {k}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </StarBorder>
        </div>
      ))}
    </div>
  );
}
