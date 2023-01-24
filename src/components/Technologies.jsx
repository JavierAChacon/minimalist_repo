import React from 'react'
import '../Styles/technologies.css'
import { SkillCard } from './'
import redux from '../assets/images/redux.png'
import mui from '../assets/images/mui.png'
import tailwind from '../assets/images/tailwind.png'


const Technologies = () => {
  return (
    <div className='technologies' id='technologies'>
      <h2>Technologies</h2>
      <div className='skillCardContainer' data-aos="fade-up">
        <SkillCard name={'HTML'} icon={<i className="fa-brands fa-html5" style={{color:'#ff5722'}}></i>} />
        <SkillCard name={'CSS'} icon={<i className="fa-brands fa-html5" style={{color:'#0170ba'}}></i>}/>
        <SkillCard name={'JavaScript'} icon={<i className="fa-brands fa-square-js" style={{color:'#ffdf00'}}></i>}/>
        <SkillCard name={'React'} icon={<i className="fa-brands fa-react" style={{color:'#61dbfb'}}></i>}/>
        <SkillCard name={'Redux'} image={redux}/>
        <SkillCard name={'Material UI'} image={mui}/>
        <SkillCard name={'Tailwind'} image={tailwind}/>
      </div>
    </div>
  )
}

export default Technologies