import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items = [],
  activeHref,
  className = "",
  ease = "power2.easeOut",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000",
  initialLoadAnimation = false,
  onMobileMenuClick,
  showDesktopLogo = true,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoImgRef = useRef(null);
  const burgerRef = useRef(null);
  const popoverRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  const cssVars = useMemo(
    () => ({
      "--base": baseColor,
      "--pill-bg": pillColor,
      "--hover-text": hoveredPillTextColor,
      "--pill-text": pillTextColor,
    }),
    [baseColor, pillColor, hoveredPillTextColor, pillTextColor],
  );

  useEffect(() => {
    const popover = popoverRef.current;
    if (popover) {
      gsap.set(popover, { visibility: "hidden", opacity: 0, y: 10 });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.6, ease },
        );
      }
      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.5, ease },
        );
      }
    }
  }, [ease, initialLoadAnimation]);

  const onLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    gsap.killTweensOf(img);
    gsap.set(img, { rotate: 0 });
    gsap.to(img, { rotate: 360, duration: 0.25, ease });
  };

  const animateBurger = (open) => {
    const el = burgerRef.current;
    if (!el) return;
    const lines = el.querySelectorAll(".hamburger-line");
    if (lines.length < 2) return;

    if (open) {
      gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.25, ease });
      gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.25, ease });
    } else {
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.25, ease });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.25, ease });
    }
  };

  const animatePopover = (open) => {
    const el = popoverRef.current;
    if (!el) return;

    gsap.killTweensOf(el);
    if (open) {
      gsap.set(el, { visibility: "visible" });
      gsap.to(el, { opacity: 1, y: 0, duration: 0.25, ease });
    } else {
      gsap.to(el, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease,
        onComplete: () => gsap.set(el, { visibility: "hidden" }),
      });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    animateBurger(false);
    animatePopover(false);
  };

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    animateBurger(next);
    animatePopover(next);
    onMobileMenuClick?.();
  };

  return (
    <div className="pill-nav-container" style={cssVars}>
      <nav className={`pill-nav ${className}`} aria-label="Primary">
        {/* Desktop logo can be rendered externally (top-left). Keep mobile logo here. */}
        {showDesktopLogo && (
          <a
            className="pill-logo desktop-only"
            href={items[0]?.href || "#"}
            aria-label="Home"
            onMouseEnter={onLogoEnter}
            onClick={() => closeMobileMenu()}
            ref={logoRef}
          >
            <img
              ref={logoImgRef}
              src={logo}
              alt={logoAlt}
              decoding="async"
              width={40}
              height={40}
            />
          </a>
        )}

        {!showDesktopLogo && (
          <a
            className="pill-logo mobile-only"
            href={items[0]?.href || "#"}
            aria-label="Home"
            onMouseEnter={onLogoEnter}
            onClick={() => closeMobileMenu()}
          >
            <img
              src={logo}
              alt={logoAlt}
              decoding="async"
              width={40}
              height={40}
            />
          </a>
        )}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item) => (
              <li key={item.href} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? " is-active" : ""}`}
                >
                  <span className="hover-circle" aria-hidden="true" />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="mobile-menu-button mobile-only"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          ref={burgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={popoverRef}>
        <ul className="mobile-menu-list" role="menu">
          {items.map((item) => (
            <li key={item.href} role="none">
              <a
                role="menuitem"
                href={item.href}
                className="mobile-menu-link"
                onClick={() => closeMobileMenu()}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
