import React from 'react'
import '../Styles/navbar.css'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'



const Navbar = () => {
  
  
  
  return (
    <header className='navbar'>
      <div className='hamburger'>
        <Hamburger rounded size={24} duration={0.45} direction="right"  distance="lg"/>
      </div>
      <ul>
        <div className='links'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Technologies</a></li>
        <button><a href="">Contact</a></button>
        </div>
      </ul>
    </header>
  )
}

export default Navbar