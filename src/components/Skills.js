import React from "react";
import "./SkillsStyles.css"
const Skills = () => {
    return (
      <div className="skills-container">
        <div className="skills-title">
        <h1>Skills</h1>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>HTML</p>
            <p>90%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '90%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>CSS</p>
            <p>80%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>JavaScript</p>
            <p>70%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>React</p>
            <p>70%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>Python</p>
            <p>80%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>Angular</p>
            <p>70%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>Git</p>
            <p>70%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">
            <p>Java</p>
            <p>80%</p>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{width: '80%'}}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;