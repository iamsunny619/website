import React, { useEffect, useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const aboutSectionRect = aboutSection.getBoundingClientRect();

      if (
        aboutSectionRect.top <= window.innerHeight &&
        aboutSectionRect.bottom >= 0
      ) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`${
        isNavbarVisible ? "navbar-container" : "navbar-hidden"
      } text-white pl-20 pt-4 pr-10 pb-4 bg-gradient-to-r from-black via-black/80 to-white/10`}
    >
      <div>Logo</div>
      <div className="menu-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div
        className={`nav-links ${
          isMenuOpen ? "nav-links-open" : "nav-links-closed"
        }`}
      >
        <li className="pr-10">About</li>
        <li className="pr-10">Project</li>
        <li className="pr-10">Contact</li>
      </div>
    </div>
  );
};

export default Navbar;
