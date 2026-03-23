import React from "react";
import { createPortal } from "react-dom";
import Dock from "./Dock";
import {
  VscHome,
  VscAccount,
  VscCode,
  VscBook,
  VscBriefcase,
  VscRocket,
} from "react-icons/vsc";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dockItems = [
    {
      icon: <VscHome size={24} />,
      label: "Home",
      onClick: () => scrollToSection("hero"),
    },
    {
      icon: <VscAccount size={24} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <VscCode size={24} />,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      icon: <VscBook size={24} />,
      label: "Education",
      onClick: () => scrollToSection("education"),
    },
    {
      icon: <VscBriefcase size={24} />,
      label: "Experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      icon: <VscRocket size={24} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
  ];

  return createPortal(
    <div
      className="rb-navbar-container"
      role="navigation"
      aria-label="Primary"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 20,
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div style={{ pointerEvents: "auto" }}>
        <Dock items={dockItems} />
      </div>
    </div>,
    document.body,
  );
};

export default Navbar;
