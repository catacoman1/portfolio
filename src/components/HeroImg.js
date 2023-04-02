import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/bg-photo.jpg";
import {Link} from "react-router-dom";
import Poza_profil from "../assets/poza_profil.jpg"
import cv from '../assets/CV.pdf';

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
      
        <img className="poza-profil" src={Poza_profil} />
      
        <p>CĂTĂLIN-ANDREI COMAN</p>
        <h1>FULLSTACK DEVELOPER.</h1>
        <div className="btn-container">
          <Link to="/about" className="btn">About</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        <a className="btn btn-download" href={cv} download="ComanCatalin-Andrei_CV.pdf">Download CV</a>
      </div>
    </div>
  )
}

export default HeroImg