import React, { useEffect, useMemo, useState } from "react";
import PillNav from "./PillNav";
import "./Navbar.css";

const logo = "/assets/logo-black-background.png";

const Navbar = () => {
  const items = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
    ],
    [],
  );

  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#hero");

  useEffect(() => {
    const ids = items
      .map((i) => (i.href?.startsWith("#") ? i.href.slice(1) : null))
      .filter(Boolean);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the section whose top edge is closest to the viewport top.
        // This is much more stable than intersectionRatio when sections are
        // tall or overlap thresholds (prevents "About" staying active forever).
        const candidates = entries.filter((e) => e.isIntersecting);
        if (!candidates.length) return;

        const best = candidates
          .slice()
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];

        if (best?.target?.id) {
          setActiveHref(`#${best.target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.15,
        // Account for the fixed navbar height so the section behind it can become active.
        rootMargin: "-120px 0px -55% 0px",
      },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="rb-navbar" role="navigation" aria-label="Primary">
      {/* Desktop-only external logo (top-left of screen). Mobile keeps logo inside PillNav. */}
      <a
        className="rb-navbar__logo desktop-only"
        href={items[0]?.href || "#"}
        aria-label="Home"
      >
        <img className="rb-navbar__logoImg" src={logo} alt="Rasmus Linde" />
      </a>

      <PillNav
        logo={logo}
        logoAlt="Rasmus Linde"
        items={items}
        activeHref={activeHref}
        className="rb-pill-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="dark"
        initialLoadAnimation={false}
        showDesktopLogo={false}
      />
    </nav>
  );
};

export default Navbar;
