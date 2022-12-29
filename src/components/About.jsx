import React from "react";
import '../Styles/about.css'
import AboutPhoto from '../assets/images/aboutPhoto.png'

const About = () => {
  return(
    <div className="about">

      <div className="description">

        <div className="aboutText">
        <p>I am a proactive person, who is always on the cutting edge of software development. Currently, I am available for new challenges and experiences, with the goal of increasing my value as a computer science engineer.</p>
      </div>

        <div className="aboutButton">
          <button></button>
        </div>
      </div>
      
      

      <div className="aboutPhoto">
        <img src={AboutPhoto} alt="" />
      </div>
    </div>
  )
}

export default About