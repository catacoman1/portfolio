import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="MY PROJECTS." text="Some of my personal projects are displayed here."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
