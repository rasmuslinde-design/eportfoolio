import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-text">RL</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          <li>
            <a onClick={() => scrollToSection("hero")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("experience")}>Experience</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <ul
          className={`navbar-menu mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        >
          <li>
            <a onClick={() => scrollToSection("hero")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("experience")}>Experience</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
