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

  // We keep this state only for potential future use; UI doesn't rely on it.
  // (All pills are styled the same; no active highlighting.)
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#hero");

  useEffect(() => {
    // Keep `activeHref` in sync with the URL hash immediately on navigation.
    // (Click is handled by the anchors themselves updating the hash.)
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      if (items.some((i) => i.href === hash)) setActiveHref(hash);
    };

    window.addEventListener("hashchange", syncFromHash);
    syncFromHash();

    const ids = items
      .map((i) => (i.href?.startsWith("#") ? i.href.slice(1) : null))
      .filter(Boolean);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) {
      return () => {
        window.removeEventListener("hashchange", syncFromHash);
      };
    }

    // Primary selector: scroll-driven picker.
    // We compute active section purely from viewport geometry, so it's resilient
    // to fixed overlays (like the separated fixed logo) and layout transforms.
    let rafId = 0;
    const ACTIVATION_LINE = 140; // px from top of viewport where we consider a section "active"

    const pickActiveByScroll = () => {
      rafId = 0;

      // Choose the *last* section whose top edge is above the activation line.
      let currentId = targets[0]?.id ?? null;
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= ACTIVATION_LINE) currentId = el.id;
      }

      if (currentId) setActiveHref(`#${currentId}`);
    };

    const schedulePick = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(pickActiveByScroll);
    };

    // Keep IntersectionObserver as a minor assist (helps when user jumps via
    // keyboard/scrollbar), but don't rely on it.
    const observer = new IntersectionObserver(() => schedulePick(), {
      root: null,
      threshold: 0,
      rootMargin: "-120px 0px -55% 0px",
    });

    targets.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", schedulePick, { passive: true });
    window.addEventListener("resize", schedulePick);
    // Initial pick so the highlight is correct immediately.
    pickActiveByScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedulePick);
      window.removeEventListener("resize", schedulePick);
      if (rafId) cancelAnimationFrame(rafId);

      window.removeEventListener("hashchange", syncFromHash);
    };
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
        activeHref={null}
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
