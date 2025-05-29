import React, { useEffect, useState } from 'react'
import "../index.css"
import { FiMenu, FiX } from "react-icons/fi"; 
import sun from "../assets/light-mode.png";
import moon from "../assets/dark-mode.png";

function Navbar({darkMode , setDarkMode}) {

  const[menuOpen,setMenuOpen] =useState(false);
  
  useEffect(()=>{
    const handleScroll =() =>{
      const nav =document.querySelector(".nav-bar");
      if(window.scrollY>50){
        nav.classList.add("scrolled-nav");
      }
      else {
        nav.classList.remove("scrolled-nav");
      }
    };
   
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll) ;

},[]);



  return (
  <nav className="nav-bar">
  <div className="nav-item">

    <span className="high-name">
      <p>Peter Devereux</p>
    </span>

    <div className="nav-link">
      <a href="#home"><li>Home</li></a>
      <a href="#education"><li>Education</li></a>
      <a href="#pro"><li>Projects</li></a>
      <a href="#skill"><li>Skills</li></a>
      <a href="#contact"><li>Contact</li></a>
    </div>

    <div className="mode-toggle">
      <button 
        onClick={() => setDarkMode(!darkMode)}
         className="mode-icon" 
        >
          {darkMode? (<img src={sun} className="w-6 h-6"/>) :
                     (<img src={moon} className="w-5 h-5"/>)
          }
      </button>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  </div>

  {menuOpen && (
    <ul className="toggle-open">
      <li><a href="#">Home</a></li>
      <li><a href="#">Education</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  )}

</nav>

     

    
    
    
  )
}

export default Navbar