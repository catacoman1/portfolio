import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import WorkExperience from '../components/WorkExperience'
import Skills from "../components/Skills"

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT ME." text="I am a student with a passion for full-stack development and an eye for style."/>
      <AboutContent/>
      <Skills/>
      <WorkExperience/>
      <Footer/>
      
    </div>
  )
}

export default About
