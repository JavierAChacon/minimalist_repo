import React from 'react'
import '../Styles/navbar.css'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'




const Navbar = () => {
  
  const [isOpen, setOpen] = useState(false)
  return (
    <header className='navbar'>
      <div className={`hamburger ${isOpen ? 'active' : ''}`}>
        <Hamburger rounded size={24} duration={0.45} direction="right"  distance="lg" toggled={isOpen} toggle={setOpen}/>
      </div>
      <ul className={`${isOpen ? 'active' : ''}`}>
        <div className='links'>
        <li><a onClick={() => (setOpen(false))} href="">Home</a></li>
        <li><a onClick={() => (setOpen(false))} href="#about">About</a></li>
        <li><a onClick={() => (setOpen(false))} href="">Projects</a></li>
        <li><a onClick={() => (setOpen(false))} href="">Technologies</a></li>
        <li><a onClick={() => (setOpen(false))} className="contact" href="">Contact</a></li>
        </div>
      </ul>
    </header>
  )
}

export default Navbar