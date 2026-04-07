import React from "react";
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

  return (
    <nav className="rb-navbar" role="navigation" aria-label="Primary">
      <Dock items={dockItems} />
    </nav>
  );
};

export default Navbar;
