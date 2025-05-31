import React, { useEffect, useState } from 'react';
import "../index.css";
import { FiMenu, FiX } from "react-icons/fi"; 
import sun from "../assets/light-mode.png";
import moon from "../assets/dark-mode.png";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-bar");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled-nav");
      } else {
        nav.classList.remove("scrolled-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav-bar px-4 py-3 bg-opacity-80">
      <div className="flex justify-between items-center">
        <div className="high-name text-xl font-bold">
          <p>Peter Devereux</p>
        </div>

        <div className="nav-link list-none hidden md:flex md:flex-row gap-9 mx-2">
          <a href="#home"><li>Home</li></a>
          <a href="#education"><li>Education</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#contact"><li>Contact</li></a>
        </div>

        <div className="mode-toggle flex items-center gap-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="mode-icon">
            {darkMode ? (
              <img src={sun} className="w-6 h-6" alt="Light mode" />
            ) : (
              <img src={moon} className="w-5 h-5" alt="Dark mode" />
            )}
          </button>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="toggle-open md:hidden card-style">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
