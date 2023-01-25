import React from 'react'

const ProjectCard = ({ image, title, github, link }) => {
  return (
    <div className='projectCard' data-aos="fade-down">
      <img src={image} alt='projectImage' />
      <div className='overlay'>
        <h3>{title}</h3>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolorem.</p> */}
        <div className='overlayIcons'>
          <a href={github} target='_blank'><i className="fa-brands fa-square-github"></i></a>
          <a href={link} target='_blank' ><i className="fa-solid fa-link"></i></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard