import React, { useEffect } from "react";
import '../Styles/about.css'
import AboutPhoto from '../assets/images/aboutPhoto.png'
import AOS from "aos";
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="about" id="about">
      <div data-aos="flip-left" className="description">
        <p>I am a proactive person, who is always on the cutting edge of software development. Currently, I am available for new challenges and experiences, with the goal of increasing my value as a computer science engineer.</p>
        <a href="https://drive.google.com/file/d/19vP2wRFi0qUsdKfRszz5WkEFz9wp5eOP/view?usp=sharing" target="_blank">See C.V</a>
      </div>
      <div data-aos="fade-right" className="aboutPhoto">
        <img src={AboutPhoto} alt="" />
      </div>
    </div>
  )
}

export default About