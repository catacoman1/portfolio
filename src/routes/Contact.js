import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import HeroImg2 from '../components/HeroImg2'
import ContactMe from '../components/ContactMe'
const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Get in touch with me."/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Contact
