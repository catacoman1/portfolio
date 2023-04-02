import "./FooterStyles.css"
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaGithub,FaFacebook} from "react-icons/fa";
import React from 'react'

const footer = () => {
  return (
    <div className="footer" style={{display: "flex", justifyContent: "space-between"}}>
        <div className="left">
            <div className="location">
                <FaHome size = {20} style={{ color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Strada Pavel Chinezu</p>
                    <p>Timisoara, Romania.</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size = {20} style={{ color:"#fff", marginRight: "2rem"}}/>
                +(40)774060159</h4>
                 
            </div>
            <div className="email">
                <h4><FaMailBulk size = {20} style={{ color:"#fff", marginRight: "2rem"}}/>
                catacoman11@gmail.com</h4>
                 
            </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>I am constantly striving to become the most accomplished version of myself.</p>
            <div className="social">
                <a href="https://www.linkedin.com/in/catalin-andrei-coman-7a667b207/" target="_blank"><FaLinkedin size = {30} style={{ color:"#fff", marginRight: "1rem"}}/></a>
                <a href="https://github.com/catacoman1" target="_blank"><FaGithub size = {30} style={{ color:"#fff", marginRight: "1rem"}}/></a>
                <a href="https://www.facebook.com/cata.coman.927/" target="_blank"><FaFacebook size = {30} style={{ color:"#fff", marginRight: "1rem"}}/></a>
            </div>
        </div>
    </div>
  )
}

export default footer
