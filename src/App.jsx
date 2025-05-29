import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Education from './components/Education';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from "./components/Contact";


function App() {
  

  const [darkMode,setDarkMode]=useState(true);

  useEffect(() =>{
    const html=document.documentElement;
    html.classList.remove('light','dark');
    html.classList.add(darkMode? 'dark' : 'light');
  } ,[darkMode]);

  
  return (
        <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Hero />
        <Education />
        <Project />
        <Skill />
        <Contact />
        </>
      
  )
}

export default App