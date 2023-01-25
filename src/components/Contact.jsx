import React from 'react'
import '../Styles/contact.css'
import contactPhoto from '../assets/images/contactPhoto.png'
const Contact = () => {
  return (
    <div className='contact'>
      <img src={contactPhoto} alt="" />
      <div className='contactCard' data-aos="flip-down" id='contact'>
        <h2>Contact</h2>
        <p>let's build something together!</p>
        <div className='contactIcons'>
          <a href="https://github.com/JavierAChacon"><i className="fa-brands fa-github"></i></a>
          <a href="mailto:alejandro.chr@outlook.es"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/javier-a-chacon/"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact