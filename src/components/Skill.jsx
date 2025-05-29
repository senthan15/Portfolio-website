import React from 'react'
import "../index.css"

function Skill() {
  return (
    <div id="skill" className='skills'>
      <h2 className="head">Skills</h2> 
      <div className="skills-card">
        <div className="card-style">
          <h3 className="skills-title">Programming Languages</h3>
          <div className="skills-list">
            <span className="tech-btn">C</span>
            <span className="tech-btn">C++</span>
            <span className="tech-btn">Python</span>
            <span className="tech-btn">Java</span>
            <span className="tech-btn">JavaScript</span>
          </div>
        </div>
        <div className="card-style">
          <h3 className="skills-title">Web Development</h3>
          <div className="skills-list">
            <span className="tech-btn">HTML</span>
            <span className="tech-btn">CSS</span>
            <span className="tech-btn">Tailwind CSS</span>
            <span className="tech-btn">React.js</span>
            <span className="tech-btn">Node.js</span>
            <span className="tech-btn">MongoDB</span>
          </div>
          
        </div>
        <div className="card-style">
          <h3 className="skills-title">Cloud</h3>
          <div className="skills-list">
            <span className="tech-btn">AWS</span>
            <span className="tech-btn">Docker</span>
            <span className="tech-btn">CI/CD Pipelines</span>
            <span className="tech-btn">Serverless Architecture</span>
          </div>
          
        </div>
        <div className="card-style">
          <h3 className="skills-title">Other Skills</h3>
          <div className="skills-list">
            <span className="tech-btn">Git</span>
            <span className="tech-btn">Agile</span>
            <span className="tech-btn">Testing</span>
            <span className="tech-btn">API Integration</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skill