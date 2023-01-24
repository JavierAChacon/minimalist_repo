import React from 'react'
import '../styles/navbar.css'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  return (
    <header className='navbar'>
      <div className={`hamburger ${isOpen ? 'active' : ''}`}>
        <Hamburger rounded size={24} duration={0.45} direction="right" distance="lg" toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className={`${isOpen ? 'active' : ''}`}>
        <div className='links' onClick={() => { setOpen(false) }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a className="contact" href="">Contact</a></li>
        </div>
      </ul>
    </header>
  )
}

export default Navbar