import React from 'react';
import './WorkExperienceStyles.css'; 
import veoneer from "../assets/veoneer.jpg";
import vitesco from "../assets/vitesco.jpg";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h1>Work Experience:</h1>
      <h1>Junior Software Developer</h1>
      <h3>Veoneer Romania</h3>
      <img src={veoneer} className="logo-companie"/>
      <p>20/03/2023 – CURRENT</p>
      <ul className="ul-style">
        <li>-Developed Python Scripting skills</li>
        <li>-Developed and implemented algorithms for object detection and threat assessment</li>
        <li>-Developed and implemented countermeasures to enhance vehicle safety</li>
        <li>-Wrote and maintained software code for embedded systems</li>
        <li>-Document design, development, and testing activities</li>
      </ul>
      <p>Skills obtained: Python (Medium), C/C++, GIT, Jenkins.</p>

      <h1>Junior Software Engineer</h1>
      <h3>Vitesco Technologies</h3>
      <img src={vitesco} className="logo-companie"/>
      <p>11/04/2022 – 17/03/2023</p>
      <ul>
        <li>-Worked at an independent level, while also serving as an effective and enthusiastic collaborator.</li>
        <li>-Developed important professional skills such as collaboration, communication, and problem-solving</li>
        <li>-Learned about System Design Automation while offering support for other coleagues.</li>
        <li>-Participated in 3 workshops on agile development methodologies and 2 presentations from industry experts.</li>
        <li>-Received a strong foundation for a successful career in software development</li>
      </ul>
      <p>Internal position: Functional Software Integrator on Electrification Project.</p>
      <p>Skills obtained: Python(basic) , C/C++, IMS/MKS, Jira.</p>
    </div>
  );
};

export default WorkExperience;