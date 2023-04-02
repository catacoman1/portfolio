import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/react.jpg"
import React2 from "../assets/react2.jpg"
import Poza_profil from "../assets/poza_profil.jpg"
import React from 'react'
import { NavLink } from "react-router-dom";

const AboutContent = () => {
  return <div className="about">

    <div className="left">
    <h1>Who am I?</h1>
    <br></br>
    <img src={Poza_profil} className="poza-profil"/>
    <p>Hi, my name is Cătălin-Andrei Coman, but people call me Cătă.
      <br></br>As a 3rd year student with a strong passion for designing visually striking web pages, I'm determined to become a skilled FullStack developer in the field of web development. 
      <br></br>Although I have over a year of experience working in the Automotive Industry, my true ambition lies in pursuing a career as a Web Developer.</p>
    
    <NavLink to="/contact" className="btn">Contact me</NavLink>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React2} className="img" alt="true"/>
                
            </div>
            <div className="img-stack bottom">
                <img src={React1} className="img" alt="true"/>
                
            </div>
        </div>
        
    </div>
    
    
    
  </div>
  
}

export default AboutContent