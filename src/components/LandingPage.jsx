import React from 'react'
import '../Styles/landingPage.css'
import Photo from '../assets/images/mainPhoto.png'
import Blob from '../assets/images/blob.svg'

const LandingPage = () => {
  return(
  <div className="landingPage">

    <div className='tittle'>

      <div className='text'>
        <h1>I'm Javier Chacon</h1>
        <h2>a Front-End Developer</h2>

        <div className='socialMedia'>
          <a href="https://www.linkedin.com/in/javier-a-chacon/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/JavierAChacon"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

      <div className='shape'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M68.8,-23C76.6,1.7,61.7,33,37,51C12.2,69,-22.3,73.6,-43.4,58.6C-64.6,43.5,-72.3,8.7,-62.8,-18.3C-53.4,-45.3,-26.7,-64.6,1.9,-65.2C30.5,-65.8,61,-47.8,68.8,-23Z" transform="translate(100 100)" />
        </svg>
      </div>

    </div>

      <div className='image'>
        <img src={Photo}/>
      </div>
  </div>
  )
}

export default LandingPage