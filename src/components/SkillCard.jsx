import React from 'react'

const SkillCard = ({name, image, icon}) => {
  return (
    <div className='skillcard'>
      <h3>{name}</h3>
      <div className='imageContainer'>
        <img src={image} alt="" />
        {icon}
      </div>
    </div>
  )
}

export default SkillCard